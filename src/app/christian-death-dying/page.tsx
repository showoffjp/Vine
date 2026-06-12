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

const STORAGE_KEY = "vine_deathdying_entries";

interface DDGEntry {
  id: string;
  date: string;
  fearAddressed: string;
  hopeAnchor: string;
  preparation: string;
}

const theologySections = [
  {
    title: "&ldquo;O Death, Where Is Your Sting?&rdquo; &mdash; 1 Corinthians 15:55&ndash;57",
    body: "Paul&rsquo;s taunt at death is one of the most audacious sentences in human literature. Standing at the far end of his great resurrection chapter, he quotes Hosea 13:14 and then simply mocks the last enemy: &ldquo;O death, where is your victory? O death, where is your sting?&rdquo; The sting of death, he explains, is sin &mdash; the moral debt that made death so terrifying &mdash; and the power of sin is the law, which exposed it. But in Christ, the debt is paid, the law is satisfied, and death has been disarmed. It still stands at the door of every human life, but it no longer holds the keys. For the Christian, death is a defeated enemy still in the field: present, painful, real &mdash; but robbed of its final power. Paul does not minimize death&rsquo;s brutality. He spent chapters on resurrection before he reached this taunt, because the taunt only makes sense in light of the empty tomb. The Christian confidence before death is not bravado; it is the logical conclusion of Easter.",
  },
  {
    title: "Death as the Last Enemy &mdash; 1 Corinthians 15:26",
    body: "\"The last enemy to be destroyed is death\" (1 Corinthians 15:26). This single line does enormous theological work. It tells us that death is an enemy &mdash; not a friend, not a natural transition, not simply part of the cycle of life. Christian theology resists the sentimental softening that says &ldquo;death is just a door.&rdquo; Death is the wages of sin (Romans 6:23), an intrusion into a world made for life. The garden of Eden had no death; the new creation will have none either. Between those two states, death reigns. But the verse also tells us death is the &ldquo;last&rdquo; enemy &mdash; which means it will be destroyed. Every other enemy (suffering, disease, spiritual opposition) falls before the final one. The resurrection of Christ is the firstfruits of that destruction: in him, death has been decisively defeated, and his people will follow him through it and out the other side into a world where it is gone forever. We mourn at graves not because death is normal, but because it is wrong &mdash; and the wrongness will be set right.",
  },
  {
    title: "Death as Sleep &mdash; 1 Thessalonians 4:13&ndash;14",
    body: "The New Testament repeatedly uses the metaphor of sleep for the death of a believer: &ldquo;But we do not want you to be uninformed, brothers, about those who are asleep, that you may not grieve as others do who have no hope&rdquo; (1 Thessalonians 4:13). Paul does not say &ldquo;do not grieve&rdquo; &mdash; Christian grief is real and right; it is the absence of hope that is forbidden, not the tears. The sleep metaphor teaches two things: first, that death is not the end, but a state from which one wakes; second, that waking is not a private spiritual ascent but a communal resurrection &mdash; &ldquo;God will bring with him those who have fallen asleep.&rdquo; This corrects the popular picture of death as immediate arrival at a static heaven. For the New Testament, the dead rest in Christ, and the great event still ahead &mdash; the resurrection at Christ&rsquo;s return &mdash; is the true moment of consummation. We sleep, but we sleep in Christ, and the one who woke from the dead on the third day will wake all who belong to him.",
  },
  {
    title: "The Ars Moriendi &mdash; The Medieval Art of Dying",
    body: "In the fifteenth century, European Christianity produced a remarkable genre: manuals on how to die well. The Ars Moriendi (&ldquo;The Art of Dying&rdquo;) tradition recognized that dying is something one can learn to do, and that the deathbed is a spiritual battlefield requiring specific preparation. The texts addressed five temptations of the dying: loss of faith, despair, impatience, spiritual pride, and avarice &mdash; and for each, gave a corresponding consolation. They were designed to be read aloud to the dying by a priest or friend. The tradition reflects a pre-modern realism about death that modern culture has almost entirely lost: death happens to everyone, it is worth thinking about before it arrives, and the quality of one&rsquo;s dying is shaped by the quality of one&rsquo;s living. Jeremy Taylor revived the tradition in his 1651 &ldquo;Holy Dying,&rdquo; and today writers like Rob Moll have returned to it with contemporary pastoral care. The central conviction of the tradition is that a prepared death, held in the arms of Christian hope, is possible &mdash; and that preparing for it is an act of faith, not morbidity.",
  },
  {
    title: "How to Be With the Dying &mdash; Pastoral Care at the Bedside",
    body: "Presence is the irreducible ministry. Most people at a deathbed feel helpless because they cannot fix what is happening &mdash; and they are right that they cannot fix it. But presence is not fixing; it is accompanying. Sitting with someone who is dying says: you are not alone in this, and your dying matters. The ministry of presence includes silence (do not fill silence with noise), honest acknowledgment (&ldquo;this is hard&rdquo; is better than &ldquo;everything will be fine&rdquo;), reading Scripture aloud &mdash; especially the Psalms and John 14 &mdash; and praying with and for the dying person. If the person can receive it, the sacrament of communion is a profound sign: even here, at the threshold, the body and blood of the One who defeated death. Practical care &mdash; managing pain, attending to basic dignities, coordinating family &mdash; is equally spiritual. And attending to the dying person&rsquo;s spiritual estate: where do they stand before God? Have they made peace with those they&rsquo;ve wronged? This is not the moment to avoid the question; it may be the last moment to ask it.",
  },
  {
    title: "The Intermediate State &mdash; What Happens Between Death and Resurrection",
    body: "Scripture teaches a two-stage hope: an intermediate state (between individual death and the resurrection) and the final resurrection at Christ&rsquo;s return. Paul describes the intermediate state as &ldquo;to depart and be with Christ, for that is far better&rdquo; (Philippians 1:23) and as being &ldquo;away from the body and at home with the Lord&rdquo; (2 Corinthians 5:8). The thief on the cross was promised &ldquo;today you will be with me in paradise.&rdquo; So the intermediate state is real presence with Christ &mdash; better than this life, though incomplete without the body. It is not the final destination but a blessed waiting room. This matters because it guards against two errors: the error of &ldquo;soul sleep&rdquo; (the dead are unconscious until resurrection), and the error of conflating the intermediate state with the final resurrection state. The Christian&rsquo;s ultimate hope is not merely to &ldquo;go to heaven when you die&rdquo; but to receive a resurrection body in a renewed creation &mdash; the dead in Christ are not yet in their final home; they await it with us.",
  },
  {
    title: "Immortality of the Soul vs. Resurrection of the Body",
    body: "Popular Christian culture often speaks of death as the soul &ldquo;going to heaven&rdquo; &mdash; a departure from the body into a better, spiritual realm. This picture owes more to Plato than to Paul. The Greek idea is that the body is a prison or a tomb and the soul escapes at death to its true spiritual home. The biblical picture is almost the reverse: the body is not a prison but a gift, and death is not an escape but an enemy. The Christian hope is not the immortality of the soul &mdash; the continuation of a disembodied spiritual self &mdash; but the resurrection of the body. God will raise us as whole persons, transformed and glorified, fitted for a renewed physical world. N.T. Wright has pressed this distinction forcefully: &ldquo;The whole point of the resurrection,&rdquo; he writes, &ldquo;is that it is about new creation, about the redemption of the space-time world, not an escape from it.&rdquo; This matters for how we approach death: not as liberation from matter, but as passage through an enemy that will not have the last word over our bodies.",
  },
  {
    title: "Grief in the Face of Death &mdash; Weeping at Graves",
    body: "Jesus wept at the tomb of Lazarus (John 11:35) &mdash; and this, knowing he was about to raise him. His tears were not a failure of faith or a lapse in divine perspective. They were the right response to death in a world where death does not belong. Christian grief is not stoic suppression or spiritual triumphalism; it is the honest acknowledgment that something has been lost that was not supposed to be lost, that a person made in the image of God has been torn from this world by the enemy we most dread. Grief is love with nowhere to go. C.S. Lewis in &ldquo;A Grief Observed&rdquo; chronicled his own grief after Joy&rsquo;s death with unflinching honesty, including his anger at God &mdash; and the book became one of the most pastorally useful ever written precisely because it refused to sanitize sorrow. The Christian hope does not make grief wrong; it makes grief temporary. We weep at graves, and we weep rightly &mdash; but we weep as those who know the morning is coming.",
  },
  {
    title: "What Jesus&rsquo; Death Tells Us About Our Own",
    body: "The cross is not only an event in salvation history; it is the prototype of Christian dying. Jesus on Calvary entered fully into the darkness of human death &mdash; the physical agony, the relational abandonment (&ldquo;My God, my God, why have you forsaken me?&rdquo;), the apparent defeat. He did not die with spiritual tranquility and easy assurance; he died in desolation. And then he was raised. This means that when a Christian faces a death that is hard, frightening, or feels like abandonment, they are not outside the pattern of Christian experience &mdash; they are inside it, following the Lord who went there first. The desolation of Calvary has been entered and exited; the cry of forsakenness is followed, three days later, by a resurrection. Every Christian dying can be understood as a smaller participation in the pattern Jesus set: through death, not around it, and out the other side.",
  },
  {
    title: "Preparing for Death &mdash; Practical and Spiritual",
    body: "Preparing for death is an act of love toward those who will survive us and an act of faith before God. Practically: have a will, an advance directive, a clear record of your wishes, honest conversations with family about what you want and what you believe. Do not leave the people who love you to guess. Spiritually: examine your conscience regularly; make peace with those you have wronged; say what you mean to say while you can say it. The Puritan tradition spoke of &ldquo;dying daily&rdquo; &mdash; a practiced detachment from earthly securities combined with a practiced attentiveness to the eternal. This is not morbidity but realism and hope together: the person who has thought about their death, made arrangements, forgiven and been forgiven, and who knows where their hope lies, dies differently than the one who has refused to look. The medieval Ars Moriendi said it plainly: those who learn the art of dying learn, in the same movement, the art of living.",
  },
];

const practices = [
  {
    name: "The Deathbed Conversation",
    body: "This week, have one real conversation about death with someone you trust. It does not have to be solemn; it can happen over coffee. But make it honest: What are you afraid of? What do you believe happens after? What have you left unsaid that you&rsquo;d want said? If you are a parent, let your children &mdash; even young ones &mdash; know that death is real, that you are not afraid of it in the final sense, and that your hope has a name. The avoidance of death in modern Western culture is one of the greatest contributors to its power over us. Naming it, in conversation, in faith, is the beginning of the taunt Paul taught us: &ldquo;O death, where is your sting?&rdquo;",
  },
  {
    name: "Read the Psalms of Lament",
    body: "Set aside one week to read through the psalms of lament &mdash; Psalms 22, 31, 38, 42, 88, 90 &mdash; slowly and aloud. These are prayers from people who have faced death directly, and they give us language for the feelings we often cannot articulate. Notice that the psalms do not spiritualize grief; they express it, often with anger and bewilderment. But they also end, almost always, in trust &mdash; not because the circumstances changed, but because the psalmist remembered who God is. Learn to pray toward death with the full vocabulary of Scripture, not only the triumphant texts. Psalm 88 ends in darkness and is the only psalm with no resolution &mdash; which means God has included our worst nights in his prayer book.",
  },
  {
    name: "The Practical Affairs of Love",
    body: "If you do not have a will, an advance directive, and a clear record of your final wishes: make them this month. This is not a morbid errand; it is an act of love. The absence of a will puts your family through legal and relational suffering on top of grief. The absence of an advance directive leaves doctors and family to guess, often in conflict, about your wishes in an emergency. Tell someone where these documents are. Write a letter to be opened after your death, if there is something you want said that you&rsquo;ve never been able to say. These practical preparations are a form of ongoing faithfulness to the people who will survive you &mdash; and they embody the Christian conviction that death, though real, can be faced with open eyes.",
  },
  {
    name: "The Ars Moriendi Examination",
    body: "Borrow the structure of the medieval art of dying for your own private examination. Address five questions: (1) Faith &mdash; what do I actually believe about Christ and the resurrection? Where is my faith strong, and where does it feel thin? (2) Hope &mdash; what specific promises am I standing on? (3) Patience &mdash; where am I grasping after control over my own life and death? (4) Relationships &mdash; who have I wronged and not sought forgiveness from? Who have I failed to forgive? (5) Attachment &mdash; what earthly things do I cling to so tightly that releasing them would feel like dying? Write honest answers. Then pray through them. The goal is not to become numb to loss but to hold earthly gifts with open hands, knowing the Giver is the true treasure.",
  },
  {
    name: "Presence Ministry &mdash; Sit With the Dying",
    body: "If there is someone in your life who is dying or accompanying a dying person, go. Not with answers; with presence. Bring food, if the caregivers will eat. Sit quietly, if the patient sleeps. Read Psalm 23 or John 14 aloud, if it would be welcome. Hold a hand. The most common regret people report from deathbeds is not that uninvited people came, but that people they expected stayed away because they &ldquo;didn&rsquo;t know what to say.&rdquo; You do not need words. You need to show up and stay. If you do not have a dying person in your life, consider volunteering with a hospice organization. The dying are among the least visited people in our culture, and the ministry of presence there is one of the most Christlike acts available to ordinary people.",
  },
  {
    name: "Memento Mori as Spiritual Discipline",
    body: "Memento mori &mdash; &ldquo;remember that you will die&rdquo; &mdash; was a practice among ancient Christians and Stoics alike: a deliberate, daily remembrance of mortality to sharpen the present. For Christians it is not pessimism but realism in service of hope. Each morning, briefly acknowledge: I will die. I do not know when. What I do today matters. What Jesus accomplished at Easter means this is not the end. Some keep a small cross or a stone on their desk as a reminder. Others write the date of a loved one&rsquo;s death in their planner and spend five minutes in gratitude and grief on the anniversary. The practice does not need to be elaborate; it needs to be honest. The person who lives with death in view tends to spend time differently, love people more deliberately, and hold the opinions of the crowd more lightly.",
  },
];

const voices = [
  {
    name: "N.T. Wright",
    years: "b. 1948",
    role: "New Testament scholar; Surprised by Hope",
    body: "Wright&rsquo;s work has done more than perhaps any other contemporary writer to recover the bodily, physical, new-creation hope of the New Testament against the popular &ldquo;going to heaven when you die&rdquo; version. In &ldquo;Surprised by Hope,&rdquo; he argues that the Christian hope is not a spiritual escape from the world but the resurrection of the body into a renewed creation &mdash; and that this hope has direct implications for how we face death. He distinguishes carefully between the intermediate state (present with Christ, better than this life but incomplete) and the final resurrection hope, and insists that conflating them produces a Christianity that is weaker, less embodied, and less world-affirming than the New Testament intends. His account of Jesus&rsquo; resurrection as a historical event &mdash; not a metaphor or a spiritual experience &mdash; is the cornerstone of his entire theology of death.",
    quote: "The message of Easter is not that Jesus is alive so everything will be fine. It is that Jesus is alive, therefore the world is wrong to think it can run itself on its own terms.",
  },
  {
    name: "C.S. Lewis",
    years: "1898&ndash;1963",
    role: "A Grief Observed; The Problem of Pain",
    body: "Lewis&rsquo;s &ldquo;A Grief Observed&rdquo; is among the most honest accounts of grief ever written &mdash; and it came not from pastoral theory but from devastation. After the death of his wife Joy Davidman from cancer in 1960, Lewis kept a journal of his grief, including his anger at God, his sense of God as a &ldquo;cosmic sadist,&rdquo; and his experience of the apparent cosmic silence at the moment of his greatest need. What makes the book irreplaceable is that Lewis works through the grief, not around it, and arrives &mdash; slowly, not triumphantly &mdash; at a recovered trust. He also wrote beautifully about immortality and the eternal weight of each human soul: &ldquo;There are no ordinary people. You have never talked to a mere mortal.&rdquo; Both the anger and the hope belong to the full Christian account of death.",
    quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning.",
  },
  {
    name: "Rob Moll",
    years: "1974&ndash;2012",
    role: "The Art of Dying; journalist and author",
    body: "Moll was a journalist and editor at Christianity Today who wrote &ldquo;The Art of Dying&rdquo; (2010) to recover the ars moriendi tradition for contemporary Christians. His research brought him into contact with palliative care physicians, hospice workers, and families at deathbeds &mdash; and he documented what he found with both journalistic clarity and pastoral warmth. He argued that the modern medicalization of death had robbed it of its spiritual dimensions, and that Christians had an opportunity &mdash; and a calling &mdash; to die differently: with intentionality, with community, with faith. Tragically, Moll himself died suddenly at thirty-eight in a hiking accident, two years after the book was published. Those who knew him said he had lived what he wrote. The book remains one of the most practically useful Christian treatments of death and dying available.",
    quote: "We have lost the wisdom of how to approach death. Christians have an opportunity, perhaps an obligation, to recover what has been forgotten.",
  },
  {
    name: "John Piper",
    years: "b. 1946",
    role: "Pastor; Don&rsquo;t Waste Your Life; cancer survivor",
    body: "Piper has written and spoken extensively on death, including through his own prostate cancer diagnosis in 2006. He argues that the Christian&rsquo;s relationship to death is one of the most evangelistically powerful things about the faith: a community that faces death with peace and even joy, without hiding or despairing, preaches the resurrection more powerfully than almost anything else it could do. His short book &ldquo;Don&rsquo;t Waste Your Life&rdquo; is oriented around the question of what it means to live such that your death is a coherent conclusion to your life, not a contradiction of it. He frequently cites the Moravian missionaries who, upon learning they were sailing to certain death on a disease-ridden island, reportedly said &ldquo;May the Lamb that was slain receive the reward of His suffering.&rdquo; That willingness, he argues, is only possible for those who have resolved the question of death beforehand.",
    quote: "To live is Christ and to die is gain. This is the arithmetic of joy that Paul taught, and it turns the world&rsquo;s calculus on its head.",
  },
  {
    name: "Timothy Keller",
    years: "1950&ndash;2023",
    role: "Pastor; On Death; pancreatic cancer",
    body: "Keller was diagnosed with pancreatic cancer in 2020 and died in May 2023. His final years became a long public meditation on dying, and he wrote and spoke about it with unusual candor. His short book &ldquo;On Death&rdquo; (2020) addressed secular and Christian readers alike, arguing that Christianity&rsquo;s account of death &mdash; that it is both real and conquered &mdash; is the only framework that can sustain a person through it. He was especially alert to the difference between the Christian hope and mere consolation: not &ldquo;death isn&rsquo;t so bad&rdquo; but &ldquo;the one who defeated death is with me, and will be on the other side.&rdquo; Those who visited him near the end reported that he was genuinely at peace &mdash; not performed peace, not suppressed fear, but the real thing. His dying became an apologetic for his life&rsquo;s message.",
    quote: "The only way to have a good death is to have a good death practice &mdash; and the only way to have a good death practice is to have a God who has gone through death and come out the other side.",
  },
  {
    name: "Atul Gawande",
    years: "b. 1965",
    role: "Surgeon; Being Mortal (secular wisdom on dying)",
    body: "Gawande is a surgeon and public health researcher &mdash; not a Christian &mdash; but his 2014 book &ldquo;Being Mortal: Medicine and What Matters in the End&rdquo; is one of the most important books about dying written in recent decades, and Christians reading it will find themselves both challenged and vindicated. He argues that modern medicine has turned dying into a problem to be solved rather than an experience to be accompanied, stripping it of agency, meaning, and presence. His research into hospice care, nursing homes, and the conversations doctors rarely have with patients is a secular indictment of exactly what the ars moriendi tradition warned against. He asks what makes a good death possible, and his answers &mdash; autonomy, honest conversation, presence of loved ones, freedom from unnecessary suffering, meaningful final days &mdash; align remarkably with Christian wisdom. A Christian reads it and recognizes the outline of what they already believe.",
    quote: "Our ultimate goal, after all, is not a good death but a good life to the very end.",
  },
];

const scriptures = [
  {
    ref: "1 Corinthians 15:55&ndash;57",
    text: "O death, where is your victory? O death, where is your sting? The sting of death is sin, and the power of sin is the law. But thanks be to God, who gives us the victory through our Lord Jesus Christ.",
    note: "Paul&rsquo;s taunt at the defeated enemy. Victory is not immunity from dying but the assurance that death will not have the last word &mdash; because it did not have the last word over Jesus.",
  },
  {
    ref: "1 Thessalonians 4:13&ndash;14",
    text: "But we do not want you to be uninformed, brothers, about those who are asleep, that you may not grieve as others do who have no hope. For since we believe that Jesus died and rose again, even so, through Jesus, God will bring with him those who have fallen asleep.",
    note: "The basis of Christian hope at death: not that grief is wrong, but that it is held by a resurrection. The dead in Christ are asleep, not gone &mdash; and the one who woke on Easter morning will wake them.",
  },
  {
    ref: "John 11:25&ndash;26",
    text: "Jesus said to her, &ldquo;I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?&rdquo;",
    note: "Jesus makes the audacious claim in the middle of a funeral. The resurrection is not a future event only; it is a present person. The question &ldquo;Do you believe this?&rdquo; is addressed to every reader in every generation.",
  },
  {
    ref: "Philippians 1:21&ndash;23",
    text: "For to me to live is Christ, and to die is gain. If I am to live in the flesh, that means fruitful labor for me. Yet which I shall choose I cannot tell. I am hard pressed between the two. My desire is to depart and be with Christ, for that is far better.",
    note: "Paul&rsquo;s honest arithmetic: present life is fruitful, but to die is to be with Christ, and that is far better. Not resignation but genuine hope. The intermediate state is conscious presence with Christ.",
  },
  {
    ref: "Psalm 23:4",
    text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    note: "The shepherd does not remove the valley; he accompanies through it. This psalm has been prayed at more deathbeds than any other text in human history. Its promise is not deliverance from the valley but presence within it.",
  },
  {
    ref: "Romans 8:38&ndash;39",
    text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    note: "Paul lists death first in the litany of things that cannot sever the Christian from God. Death is real; separation from God is the one thing it cannot accomplish. The Christian faces death inside an unbreakable bond.",
  },
];

const videos = [
  { videoId: "u9RkGpk6UKI", title: "The Resurrection and the Art of Dying Well" },
  { videoId: "LGQq0Jgqf7g", title: "N.T. Wright: What Happens When We Die?" },
  { videoId: "m7TmYs8CZGI", title: "Timothy Keller on Facing Death With Faith" },
  { videoId: "1UmRHJqOq0E", title: "O Death Where Is Your Sting? &mdash; 1 Corinthians 15" },
  { videoId: "FWlCAtTRf30", title: "The Ars Moriendi: The Christian Art of Dying" },
  { videoId: "aLxl3BWYGJA", title: "Being With the Dying: A Pastoral Guide" },
];

const relatedPages = [
  { href: "/christian-eternity", label: "Christian Eternity" },
  { href: "/christian-suffering", label: "Christian Suffering" },
  { href: "/christian-hope", label: "Christian Hope" },
  { href: "/resurrection", label: "Resurrection" },
  { href: "/lament", label: "Lament" },
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

export default function ChristianDeathDyingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DDGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [fearAddressed, setFearAddressed] = useState("");
  const [hopeAnchor, setHopeAnchor] = useState("");
  const [preparation, setPreparation] = useState("");

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
    if (!fearAddressed.trim()) return;
    const entry: DDGEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      fearAddressed: fearAddressed.trim(),
      hopeAnchor: hopeAnchor.trim(),
      preparation: preparation.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setFearAddressed("");
    setHopeAnchor("");
    setPreparation("");
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
            Death &amp; Dying
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          O Death, Where Is Your Sting?
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Christianity is the only faith that answers the problem of death not by explaining it away but by going through
          it &mdash; and coming out the other side. Jesus did not teach us how to avoid death; he defeated it. This means
          Christians can face death with open eyes: acknowledging its brutality, naming the fear, grieving the loss, and
          yet standing on the promise of the One who was raised on the third day.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide covers the theology of death in Scripture, the medieval art of dying well, how to be present with
          the dying, what happens between death and resurrection, and the practices that form people capable of dying as
          Christians &mdash; and of sitting with others who do.
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
              A Theology of Death and Dying
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Ten movements through Scripture&rsquo;s teaching on death &mdash; from the defeated enemy to the art of dying
              well, from grief at the graveside to the hope of bodily resurrection.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
            <div style={{ background: PURPLE + "11", border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Death is real, death is the enemy, and death has been defeated. These three truths held together &mdash;
                not softening the first with the third, not despairing at the first and ignoring the third &mdash; produce
                the distinctive Christian posture before death: honest, grieving, and unafraid. The taunt of 1 Corinthians
                15 is not denial. It is the declaration of a victor, spoken by those who have learned whose victory it is.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              Practices of Dying Well
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              The art of dying is learned before the dying begins. These six practices cultivate the readiness, honesty,
              and hope that make a Christian death possible &mdash; and a Christian presence at others&rsquo; deaths
              possible as well.
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
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              Voices on Death and Dying
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six voices &mdash; theologians, pastors, a journalist, a surgeon &mdash; who have thought deeply about death
              and offer hard-won wisdom for those approaching it or accompanying others through it.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span
                    style={{ color: MUTED, fontSize: "0.82rem" }}
                    dangerouslySetInnerHTML={{ __html: v.years }}
                  />
                </div>
                <div
                  style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: v.role }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
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
              Scripture on Death and Dying
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts &mdash; from the taunt of 1 Corinthians 15 to the shepherd of Psalm 23 &mdash; to read
              slowly, pray through, and carry to the bedside.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.ref }}
                />
                <p
                  style={{
                    color: TEXT,
                    lineHeight: 1.8,
                    margin: "0 0 0.9rem",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    borderLeft: `3px solid ${PURPLE}`,
                    paddingLeft: "1rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: PURPLE + "11", border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>For the bedside:</strong> if you have access to a dying person, consider
                reading Psalm 23 and John 14:1&ndash;6 aloud. These are the texts most often requested at the hour of
                death, and they have accompanied more Christians through the valley than perhaps any other words outside
                the Lord&rsquo;s Prayer.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: 0 }}>
              Death &amp; Dying Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name a fear about death, a hope anchor (a specific promise or truth you are standing on), and a preparation
              step &mdash; practical or spiritual &mdash; you intend to take. Entries are saved privately in your browser.
              This is your own small ars moriendi &mdash; the art of dying, practiced before the dying begins.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="ddg-fear" style={labelStyle}>A fear about death I am naming</label>
                <textarea
                  id="ddg-fear"
                  value={fearAddressed}
                  onChange={e => setFearAddressed(e.target.value)}
                  rows={2}
                  placeholder="e.g. The fear of pain and loss of dignity; the fear of leaving my children too soon; the fear that my faith will fail when I need it most..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Named fears lose some of their power. You are not alone in them.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="ddg-hope" style={labelStyle}>A hope anchor &mdash; a specific promise or truth</label>
                <textarea
                  id="ddg-hope"
                  value={hopeAnchor}
                  onChange={e => setHopeAnchor(e.target.value)}
                  rows={2}
                  placeholder="e.g. &ldquo;I am the resurrection and the life&rdquo; (John 11:25); &ldquo;to depart and be with Christ, for that is far better&rdquo; (Phil 1:23)..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Be specific. General hope fades; named promises hold.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="ddg-prep" style={labelStyle}>A preparation step I will take</label>
                <textarea
                  id="ddg-prep"
                  value={preparation}
                  onChange={e => setPreparation(e.target.value)}
                  rows={2}
                  placeholder="e.g. Write a will; tell my children what I believe; visit someone who is dying; read through the Psalms of lament; resolve a broken relationship..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Preparation is not morbidity; it is love in advance.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!fearAddressed.trim()}
                style={{
                  background: fearAddressed.trim() ? PURPLE : BORDER,
                  color: fearAddressed.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: fearAddressed.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin your ars moriendi above &mdash; one named fear and one held promise at a time.
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
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem", paddingRight: "4.5rem" }}>{entry.date}</div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Fear Addressed
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.fearAddressed}</p>
                      </div>
                      {entry.hopeAnchor && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Hope Anchor
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.hopeAnchor}</p>
                        </div>
                      )}
                      {entry.preparation && (
                        <div>
                          <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Preparation Step
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.preparation}</p>
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
              Teaching on the resurrection, pastoral care at the deathbed, the ars moriendi tradition, and the distinctive
              Christian hope that stands at the edge of the grave and dares to speak.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3
                    style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
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
            &ldquo;O death, where is your sting?&rdquo; is not a question. It is a taunt &mdash; the victor&rsquo;s taunt
            of those who have seen the tomb empty. Learn the art of dying now, and you will live differently today.
            The resurrection changes everything, beginning with how you face what everyone faces.
          </p>
        </div>
      </main>
    </div>
  );
}
