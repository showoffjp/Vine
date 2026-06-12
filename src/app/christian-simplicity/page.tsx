"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";

const STORAGE_KEY = "vine_simplicity_entries";

interface SIMEntry {
  id: string;
  date: string;
  possession: string;
  attachment: string;
  released: boolean;
}

const theologySections = [
  {
    title: "You Cannot Serve God and Money &mdash; Matthew 6:24",
    body: "In the Sermon on the Mount, Jesus delivers one of his most uncompromising economic statements: &ldquo;No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money&rdquo; (Matthew 6:24). The Greek word translated &ldquo;money&rdquo; is mammon &mdash; not a neutral term for currency but a near-personification of wealth as a competing lord, a rival god who demands allegiance and shapes the desires of whoever bows to it. Jesus does not say that money is inherently evil; he says that it functions as a lord, and that the human heart cannot hold two lords in the highest seat. The discipline of simplicity is the ongoing, practical refusal to let mammon win that contest. It is not primarily about the number of possessions one has but about whose word governs one&rsquo;s life: the word of God, who says &ldquo;enough is enough,&rdquo; or the word of the market, which says &ldquo;more.&rdquo; Richard Foster says the inward reality of simplicity is &ldquo;freedom from the tyranny of possessions&rdquo; &mdash; and that freedom begins with naming who the tyrant is.",
  },
  {
    title: "The Rich Young Ruler &mdash; Luke 18:18-30",
    body: "A ruler approaches Jesus with the question every religious achiever wants answered: &ldquo;What must I do to inherit eternal life?&rdquo; He has kept the commandments from youth. Jesus&rsquo; response is not a new commandment but a diagnosis: &ldquo;One thing you still lack. Sell all that you have and distribute to the poor, and you will have treasure in heaven; and come, follow me.&rdquo; The man went away sorrowful, &ldquo;for he was extremely rich.&rdquo; Jesus&rsquo; response to the disciples is searching: &ldquo;How difficult it is for those who have wealth to enter the kingdom of God! For it is easier for a camel to go through the eye of a needle than for a rich person to enter the kingdom of God.&rdquo; Theologians have spilled considerable ink trying to soften this text (the &ldquo;needle&rsquo;s eye&rdquo; as a small gate, etc.), but the disciples themselves took it at face value: &ldquo;Then who can be saved?&rdquo; Jesus&rsquo; answer &mdash; &ldquo;What is impossible with man is possible with God&rdquo; &mdash; is not a dismissal but a call to the miracle of detachment. The problem was not the ruler&rsquo;s rule-keeping; it was his attachment. And attachment, Jesus insists, is not a financial problem. It is a salvation problem.",
  },
  {
    title: "Contentment as Spiritual Discipline &mdash; Philippians 4:11-13",
    body: "One of the most misquoted passages in the New Testament is Philippians 4:13: &ldquo;I can do all things through him who strengthens me.&rdquo; Removed from context, the verse is bent into a promise of athletic or professional achievement. In context, it is a statement about contentment in poverty: &ldquo;I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me.&rdquo; The &ldquo;all things&rdquo; Paul can do is to be content &mdash; in destitution and in abundance alike. And crucially, he says he &ldquo;learned&rdquo; it, using a Greek word (manthano) that implies gradual training. Contentment is not a temperament; it is a discipline acquired through practice. The person who cannot say &ldquo;enough&rdquo; has not yet learned what Paul learned in prison. Simplicity is the school where this lesson is taught.",
  },
  {
    title: "Godliness with Contentment &mdash; 1 Timothy 6:6-10",
    body: "Paul&rsquo;s counsel to Timothy on wealth is among the most theologically precise treatments of money in the New Testament: &ldquo;Godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content. But those who desire to be rich fall into temptation, into a snare, into many senseless and harmful desires that plunge people into ruin and destruction. For the love of money is a root of all kinds of evils. It is through this craving that some have wandered away from the faith and pierced themselves with many pangs&rdquo; (1 Timothy 6:6-10). Paul does not say money is evil; he says the love of money &mdash; the craving, the restless desire for more &mdash; is a root from which many evils grow. The cure he prescribes is not poverty but contentment: the settled conviction that what one has is enough, grounded not in the size of one&rsquo;s portfolio but in the sufficiency of God. Godliness plus contentment equals great gain &mdash; the paradox that the person who wants least actually possesses most.",
  },
  {
    title: "The Discipline of Simplicity &mdash; Richard Foster",
    body: "Richard Foster&rsquo;s treatment of simplicity in Celebration of Discipline (1978) was a watershed moment for Protestant spirituality. He defines simplicity as &ldquo;an inward reality that results in an outward lifestyle,&rdquo; insisting that the order matters: the inward freedom must come first, or the outward reduction becomes merely another performance. Foster distinguishes simplicity from asceticism (which can itself become a form of pride), from legalism (which replaces one master with another), and from poverty (which is not chosen). He offers ten principles of simplicity, among them: receive what you need as a gift; know the difference between a convenience and a necessity; develop a habit of giving things away; avoid the bondage of consumer debt; use things and love people (not the reverse); and refuse to be propagandized by the present age. Foster is insistent that simplicity is not optional for the Christian: it is the outward form that genuine inward freedom takes in an age of consumer culture. A church that cannot practice simplicity has accommodated itself to a rival gospel.",
  },
  {
    title: "Jubilee Economics",
    body: "The Old Testament&rsquo;s most radical economic institution is the Jubilee, described in Leviticus 25: every fiftieth year, all debts were forgiven, all slaves were freed, and all land returned to its original family. The logic is stated plainly: &ldquo;The land shall not be sold in perpetuity, for the land is mine. For you are strangers and sojourners with me&rdquo; (Leviticus 25:23). Israelites did not own the land they worked; they held it in trust from God, and Jubilee was the mechanism that prevented permanent accumulation and permanent poverty. Whether Jubilee was ever actually practiced at full scale is disputed by scholars, but its theological logic is not: the earth is the Lord&rsquo;s, and therefore no human claim to property is absolute. The New Testament echoes this in the Jerusalem community of Acts 4, where believers held possessions loosely and distributed to anyone in need &mdash; not as a law imposed from outside but as the natural expression of having received grace. Simplicity in the Christian tradition always has this communal, redistributive dimension: what we release does not merely disappear; it flows toward those who lack.",
  },
  {
    title: "Jesus&rsquo; Own Simplicity &mdash; The Homelessness of the Son of God",
    body: "&ldquo;Foxes have holes, and birds of the air have nests, but the Son of Man has nowhere to lay his head&rdquo; (Matthew 8:20). The statement is not a complaint; it is a description of a deliberate posture. The eternal Son, through whom all things were made and who sustains all things by his powerful word, chose to enter his own creation without a home. He was born in a borrowed stable, raised in the home of a craftsman, ministered from borrowed boats and borrowed rooms, was buried in a borrowed tomb, and asked nothing of those who followed him except that they follow him. This is not incidental to the gospel; it is its form. The word became flesh in poverty, and the disciples are invited into the same downward mobility: &ldquo;Do not lay up for yourselves treasures on earth&rdquo; (Matthew 6:19). Shane Claiborne calls this the &ldquo;irresistible revolution&rdquo; of joining Christ&rsquo;s redistribution. The simplicity of Jesus is not a quaint historical detail; it is a claim about where God is found and what following him costs.",
  },
  {
    title: "Distinguishing Simplicity from Poverty",
    body: "A persistent confusion in discussions of Christian simplicity is the equation of chosen simplicity with imposed poverty. They are not the same thing, and conflating them does a disservice to both the discipline and to the poor. Poverty is involuntary, systemic, and a condition Scripture consistently calls unjust and demands be remedied. Simplicity is voluntary, personal, and a response to having more than one needs. Richard Foster is explicit: &ldquo;The discipline of simplicity is not the same as poverty. Poverty is an evil to be overcome; simplicity is a gift to be practiced.&rdquo; The danger of equating them is twofold. First, it can romanticize poverty &mdash; treating the suffering of the poor as a spiritual virtue rather than a structural injustice to be fought. Second, it can paralyze those with means, making simplicity feel like class tourism. The proper relationship is different: simplicity loosens the grip on possessions, and that loosened grip frees resources for the work of justice. The person genuinely practicing simplicity will have more to give, not less to care about, regarding those who have nothing by choice.",
  },
];

const practices = [
  {
    name: "The Possession Audit",
    body: "Spend one hour walking through your home with a notebook and asking of every significant object: Do I need this, or do I just own it? Does it serve a real function, or does it exist to signal status, maintain options, or fill space I am afraid to leave empty? Foster&rsquo;s rule of thumb: if you have not used it in a year, you probably do not need it. Identify three categories at the end: things to keep, things to give away immediately, and things to release gradually. The audit is not primarily about decluttering &mdash; it is about diagnosis. What you cannot let go of reveals what you are trusting for security, identity, or comfort. Bring those discoveries to prayer: &ldquo;Lord, I am holding this thing too tightly. Help me to hold you instead.&rdquo;",
  },
  {
    name: "The Lifestyle Cap",
    body: "One of Wesley&rsquo;s most countercultural practices was setting a personal income cap: when his earnings rose, his giving rose proportionally rather than his standard of living. He asked not &ldquo;how much can I give?&rdquo; but &ldquo;how little do I actually need?&rdquo; Try naming a specific &ldquo;enough&rdquo; for your household: a number that covers genuine needs, reasonable pleasures, and adequate savings, beyond which all surplus is held in trust for others. This is not a vow of poverty; it is a declaration of freedom from the escalator of lifestyle inflation. Set the number in prayer, with a spouse or trusted friend, and revisit it annually. The exercise reveals whether you believe God&rsquo;s promise of provision or whether you are building your own security floor.",
  },
  {
    name: "The Thirty-Day Buying Fast",
    body: "For thirty days, make no non-essential purchases: no clothing, no entertainment subscriptions, no home goods, no convenience spending beyond basic food and household necessities. The goal is not savings (though savings will result) but exposure: you will discover what you reach for when you are bored, anxious, or seeking reward. Every impulse to buy that you notice and do not act on is a window into a desire that is looking for satisfaction in the wrong place. Keep a log of what you wanted to buy and did not. At the end of thirty days, review the log with curiosity: what was I actually hungry for? Proceed to ask God to satisfy those deeper hungers in ways that do not involve consumption.",
  },
  {
    name: "Giving in Secret",
    body: "Jesus&rsquo; instruction in Matthew 6:3 &mdash; &ldquo;do not let your left hand know what your right hand is doing&rdquo; &mdash; is practical as well as spiritual. Secret giving removes the social reward that keeps giving tethered to our ego: the appreciation, the recognition, the identity as a generous person. Find one way this week to give something of real value &mdash; money, time, a possession &mdash; in a way that no one will know came from you. Give anonymously to a need you know. Leave something without a note. Serve in a way that will not be credited to you. The aim is not to be holier than others but to discover whether you can give without the social return. That discovery will teach you something important about whether simplicity is forming your soul or only your reputation.",
  },
  {
    name: "The Gratitude Inventory",
    body: "Contentment is not natural; it must be cultivated. One of Paul&rsquo;s most repeated instructions is to give thanks (1 Thessalonians 5:18, Philippians 4:6, Colossians 3:17), and the reason is anthropological: the grateful person cannot simultaneously be a discontented person. Once a week, write down ten specific things you received that you did not earn: the sunrise, a meal, a conversation that helped you, a body that got out of bed, a mind that could think. The exercise is not positive thinking &mdash; it is a theological act: it names God as the giver of every good gift (James 1:17) and relocates you from the posture of one who is owed more to one who has received more than deserved. This is the soil in which simplicity grows.",
  },
  {
    name: "Community Accountability",
    body: "Simplicity practiced entirely in private tends to drift back toward the cultural default. John Woolman, the eighteenth-century Quaker whose Journal is a masterwork of simple living, discerned his choices about clothing, travel, and commerce within his Quaker meeting &mdash; a community of people who held one another accountable to a shared rule of life. Find at least one person who is also pursuing simplicity &mdash; a friend, a small group, a spiritual director &mdash; and invite them to ask you the hard questions quarterly: Has your standard of living grown this year? What did you give away? What are you still holding too tightly? Where did mammon win? This is not an exercise in mutual guilt but in mutual freedom: people who are trying to live simply strengthen each other when the culture pulls in the opposite direction.",
  },
];

const voices = [
  {
    name: "Richard Foster",
    years: "1942&ndash;present",
    role: "Theologian of the spiritual disciplines",
    body: "Foster&rsquo;s Celebration of Discipline (1978) is the book that introduced the classical Christian disciplines &mdash; including simplicity &mdash; to a generation of Protestant evangelicals who had largely lost the vocabulary. He treats simplicity as one of the &ldquo;outward disciplines,&rdquo; alongside solitude, submission, and service, arguing that these disciplines shape the exterior life in ways that the inward disciplines alone cannot. Foster is careful to ground simplicity in grace rather than law: the discipline is not a way of earning favor but a way of being trained out of attachments that distort desire. He insists that the inward reality &mdash; genuine freedom from the tyranny of possessions &mdash; must precede and generate the outward lifestyle, not the reverse. His ten principles of simplicity remain among the most practical and theologically grounded guides to the discipline available.",
    quote: "The grace of simplicity is the freedom to do things for a single reason.",
  },
  {
    name: "Henri Nouwen",
    years: "1932&ndash;1996",
    role: "Priest and writer on downward mobility",
    body: "Nouwen, a Dutch Catholic priest who taught at Harvard and Yale before spending his final years living in a L&rsquo;Arche community for people with intellectual disabilities, embodied the downward mobility he wrote about. He called the movement from success to significance &ldquo;the descending way of Jesus&rdquo; and argued that the world&rsquo;s temptations &mdash; to be relevant, spectacular, and powerful &mdash; are the same temptations Jesus faced in the desert, and that they are overcome by the same weapons: the word of God and the renunciation of the need for worldly security. His book The Selfless Way of Christ explores how Kenosis &mdash; Christ&rsquo;s self-emptying in the incarnation &mdash; is a model for the Christian life. Simplicity, for Nouwen, is not primarily about possessions but about the stripping away of the false self that props itself up on achievement, status, and the approval of others.",
    quote: "The spiritual life does not remove us from the world but leads us deeper into it.",
  },
  {
    name: "Thomas Kelly",
    years: "1893&ndash;1941",
    role: "Quaker mystic of holy simplicity",
    body: "Kelly was a Quaker professor and mystic whose short book A Testament of Devotion (compiled posthumously from lectures and essays) is among the most searching accounts of what it means to live from the center of God&rsquo;s presence. His chapter &ldquo;Holy Obedience&rdquo; argues for a simplification of life that flows from inward clarity: when a person lives from the divine center, they discover that most of what they thought they needed to do, acquire, or become is simply unnecessary. Kelly calls this &ldquo;the blessed life of simplified motives&rdquo; &mdash; not a reduction of activity but a singleness of intention that burns away complexity. He wrote with urgency because he died at forty-seven, having had what he called a transforming spiritual experience in 1938, and everything he wrote after that was marked by the simplicity of a man who had learned what mattered.",
    quote: "There is a way of ordering our mental life on more than one level at once. On one level we may be very busy, very occupied. But underneath, at the deeper level, there is a great calm, a resting in God.",
  },
  {
    name: "Dallas Willard",
    years: "1935&ndash;2013",
    role: "Philosopher of spiritual formation",
    body: "Willard&rsquo;s The Spirit of the Disciplines (1988) gave the classical disciplines &mdash; including simplicity &mdash; a rigorous philosophical and theological foundation. He argued that disciplines are not ways of earning favor with God but &ldquo;training in godliness&rdquo; (1 Timothy 4:7) &mdash; activities that, done repeatedly over time, make us capable of things we cannot do by direct effort. Simplicity trains the soul away from the false self constructed from possessions, status, and the opinions of others, and toward the true self constituted by one&rsquo;s standing as a child of God. Willard was also clear about the social dimension: a person who has genuinely learned simplicity has been freed from the competitive, acquisitive drives that generate so much of human conflict. The simple person is a peacemaker, because they have nothing to protect.",
    quote: "Spiritual disciplines are activities that make us capable of doing what we cannot do by direct effort.",
  },
  {
    name: "Shane Claiborne",
    years: "1975&ndash;present",
    role: "New monastic prophet of radical simplicity",
    body: "Claiborne&rsquo;s memoir The Irresistible Revolution (2006) introduced a generation of younger evangelicals to radical simplicity through the lens of solidarity with the poor rather than personal virtue. After spending time with Mother Teresa in Calcutta, Claiborne co-founded The Simple Way, an intentional community in a poor neighborhood of Philadelphia, and his life there &mdash; sharing resources, refusing consumer culture, living with and among the marginalized &mdash; became the argument of the book. He is important not only for what he practices but for what he insists: that simplicity divorced from solidarity is lifestyle aesthetics, and that the test of genuine simplicity is not how little one owns but how much of what one has flows toward those who have nothing. His voice is prophetic and sometimes uncomfortable, which is probably what makes it useful.",
    quote: "As long as there are people without homes, I am not at home.",
  },
  {
    name: "John Woolman",
    years: "1720&ndash;1772",
    role: "Quaker tailor and prophet of enough",
    body: "Woolman was an eighteenth-century American Quaker tailor whose Journal is one of the classics of American religious literature. He spent his life traveling among Quaker meetings arguing for the abolition of slavery &mdash; sixty years before the American Civil War &mdash; and his argument was grounded in his theology of simplicity: the slave trade and the luxury economy were linked, and the Christian response to both was the same, namely to desire less. He refused to wear dyed clothing because the dye was produced by slave labor. He refused to accept hospitality from slaveholders on his preaching journeys. He kept his tailoring business small enough to leave time for ministry. His life was a decades-long experiment in asking &ldquo;what is enough?&rdquo; &mdash; and his witness shows that simplicity is never a purely personal spiritual discipline; it always has a political and social edge.",
    quote: "May we look upon our treasures, the furniture of our houses, and our garments, and try whether the seeds of war have nourishment in these our possessions.",
  },
];

const scriptures = [
  {
    ref: "Matthew 6:24",
    text: "No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money.",
    note: "Mammon is not a neutral word for currency but a near-personification of wealth as a competing lord. Simplicity is the ongoing, practical refusal to let that rival lord set the terms of your life.",
  },
  {
    ref: "Philippians 4:11-12",
    text: "Not that I am speaking of being in need, for I have learned in whatever situation I am to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need.",
    note: "Paul &ldquo;learned&rdquo; contentment &mdash; the word implies gradual training. Contentment in plenty is as much a discipline as contentment in want, perhaps more so, because abundance provides more distractions from its lessons.",
  },
  {
    ref: "1 Timothy 6:6-8",
    text: "Godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content.",
    note: "The arithmetic of eternity resets the arithmetic of accumulation. We arrived with nothing; we depart with nothing. The person who can say &ldquo;food and clothing are enough&rdquo; has already arrived at what everyone else is chasing.",
  },
  {
    ref: "Luke 12:15",
    text: "And he said to them, Take care, and be on your guard against all covetousness, for one&rsquo;s life does not consist in the abundance of his possessions.",
    note: "Jesus does not merely counsel moderation; he challenges the foundational assumption of the consumer economy. Life is not constituted by accumulation. The person who has learned this has been liberated from the central anxiety of modern existence.",
  },
  {
    ref: "Hebrews 13:5",
    text: "Keep your life free from love of money, and be content with what you have, for he has said, I will never leave you nor forsake you.",
    note: "Contentment is grounded in a promise, not a temperament. We can hold things loosely because the one thing that cannot be taken from us &mdash; the presence of God &mdash; is the only thing we truly need.",
  },
  {
    ref: "Matthew 19:21",
    text: "Jesus said to him, If you would be perfect, go, sell what you possess and give to the poor, and you will have treasure in heaven; and come, follow me.",
    note: "Jesus&rsquo; invitation to the rich young ruler is not a universal command to destitution but a diagnostic of attachment. The question is not how much you own but what owns you. What would you be unable to release if asked?",
  },
];

const videos = [
  { videoId: "XxNPhclkGss", title: "Richard Foster: The Discipline of Simplicity" },
  { videoId: "0Hl-9HRwnYc", title: "You Cannot Serve God and Money &mdash; Matthew 6" },
  { videoId: "YFJqbhE8hEI", title: "Shane Claiborne on Radical Simplicity" },
  { videoId: "L0N_3bKJcME", title: "Dallas Willard: Training in Godliness" },
  { videoId: "DW02_1Pvnys", title: "Henri Nouwen and the Downward Way of Jesus" },
  { videoId: "oPJk23zc4nM", title: "Contentment: Learning the Secret &mdash; Philippians 4" },
];

const relatedPages = [
  { href: "/christian-rest-guide", label: "Christian Rest" },
  { href: "/christian-generosity", label: "Christian Generosity" },
  { href: "/christian-fasting", label: "Christian Fasting" },
  { href: "/stewardship", label: "Stewardship" },
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
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

export default function ChristianSimplicityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SIMEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [possession, setPossession] = useState("");
  const [attachment, setAttachment] = useState("");

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
    if (!possession.trim()) return;
    const entry: SIMEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      possession: possession.trim(),
      attachment: attachment.trim(),
      released: false,
    };
    setEntries(prev => [entry, ...prev]);
    setPossession("");
    setAttachment("");
  };

  const toggleReleased = (id: string) => {
    setEntries(prev => prev.map(e => e.id === id ? { ...e, released: !e.released } : e));
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

  const releasedCount = entries.filter(e => e.released).length;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: GREEN + "22",
            color: GREEN,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Spiritual Disciplines
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Enough: The Discipline of Christian Simplicity
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Simplicity is not an aesthetic preference, not poverty, and not a lifestyle brand. It is the fruit of a
          genuine inward freedom &mdash; the freedom from the tyranny of possessions, status, and the compulsion to
          accumulate. Richard Foster called it &ldquo;an inward reality that results in an outward lifestyle,&rdquo; and
          the order matters: the inward liberation must come first, or the outward reduction is merely another
          performance for another audience.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide walks through the biblical theology of simplicity, the voices who have practiced and taught it
          most faithfully, concrete practices for loosening the grip of mammon, and a journal to inventory the
          attachments you are carrying &mdash; and the ones you are ready to release.
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
                borderColor: tab === t.id ? GREEN : BORDER,
                background: tab === t.id ? GREEN + "22" : "transparent",
                color: tab === t.id ? GREEN : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              A Theology of Simplicity
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Eight movements through Scripture&rsquo;s teaching on possessions, contentment, and the discipline of
              enough &mdash; from Jesus&rsquo; warnings about mammon to the homeless Son of God who owned nothing and
              possessed everything.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on a single insight: the problem is never primarily financial.
                It is always a question of lordship &mdash; who governs the heart, sets the desires, and defines what
                &ldquo;enough&rdquo; means. The discipline of simplicity is the sustained, practiced, embodied refusal
                to let mammon answer that question. And the grace of simplicity is discovering that the one who said
                &ldquo;you cannot serve God and money&rdquo; also said &ldquo;your Father knows what you need&rdquo;
                &mdash; and that these two sentences, taken together, are the whole of the discipline.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Practices of Simplicity
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six concrete disciplines for loosening the grip of possessions and learning contentment &mdash; in the
              manner of Foster, Wesley, Woolman, and the long tradition of those who have practiced enough.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: GREEN + "22",
                  color: GREEN,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Voices of Simplicity
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six teachers &mdash; a Quaker tailor, a Dutch priest, a philosopher, a radical activist, and others
              &mdash; who have taught and embodied the discipline of enough across the centuries.
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
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${GREEN}`,
                  background: GREEN + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Scripture on Simplicity
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts to read slowly, memorize, and return to. Each pairs the passage with a brief
              reflection on what it means to choose enough in a world that insists on more.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${GREEN}`,
                  paddingLeft: "1rem",
                }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice for this week:</strong> take one verse and write it on a
                card. Before any purchase or consumption decision this week, read the verse first. Notice what
                changes in you when you pause to remember what is enough. This is not legalism; it is what Paul
                means by &ldquo;bringing every thought captive&rdquo; &mdash; including the thoughts that say
                &ldquo;more.&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Simplicity Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name a possession or habit you are overly attached to, describe the nature of the attachment, and
              mark it released when you have let it go. Entries are saved privately in your browser &mdash; a quiet
              inventory of what you are holding and what you are learning to release.
            </p>
            {loaded && entries.length > 0 && (
              <div style={{
                background: GREEN + "11",
                border: `1px solid ${GREEN}33`,
                borderRadius: 10,
                padding: "0.75rem 1rem",
                fontSize: "0.88rem",
                color: MUTED,
              }}>
                <strong style={{ color: GREEN }}>{releasedCount}</strong> of <strong style={{ color: TEXT }}>{entries.length}</strong> items released.
                {releasedCount === entries.length && entries.length > 0 && (
                  <span style={{ color: GREEN }}> Every item released &mdash; well done.</span>
                )}
              </div>
            )}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="sim-possession" style={labelStyle}>The possession or habit I am overly attached to</label>
                <textarea
                  id="sim-possession"
                  value={possession}
                  onChange={e => setPossession(e.target.value)}
                  rows={2}
                  placeholder="e.g. My wardrobe; scrolling social media; a house that is larger than I need; my reputation for generosity..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Be specific. Vague attachments are harder to release than named ones.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="sim-attachment" style={labelStyle}>What the attachment is really about</label>
                <textarea
                  id="sim-attachment"
                  value={attachment}
                  onChange={e => setAttachment(e.target.value)}
                  rows={2}
                  placeholder="e.g. Security; status; comfort; the fear of not having enough; the identity it gives me..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>What deeper need is this thing trying to meet? Name the theological root, not just the symptom.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!possession.trim()}
                style={{
                  background: possession.trim() ? GREEN : BORDER,
                  color: possession.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: possession.trim() ? "pointer" : "not-allowed",
                }}
              >
                Add to Inventory
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Inventory{loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}> ({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Begin your inventory above &mdash; name what you are holding, understand why,
                    and watch what God does when you offer to release it.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div
                      key={entry.id}
                      style={{
                        background: CARD,
                        border: `1px solid ${entry.released ? GREEN + "44" : BORDER}`,
                        borderRadius: 12,
                        padding: "1.25rem 1.5rem",
                        position: "relative",
                        opacity: entry.released ? 0.75 : 1,
                      }}
                    >
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
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        {entry.date}
                      </div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Possession / Attachment
                        </div>
                        <p style={{
                          color: TEXT,
                          margin: 0,
                          lineHeight: 1.7,
                          fontSize: "0.95rem",
                          textDecoration: entry.released ? "line-through" : "none",
                        }}>
                          {entry.possession}
                        </p>
                      </div>
                      {entry.attachment && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What It Is Really About
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.attachment}</p>
                        </div>
                      )}
                      <button
                        onClick={() => toggleReleased(entry.id)}
                        style={{
                          background: entry.released ? GREEN + "22" : "transparent",
                          border: `1px solid ${entry.released ? GREEN : BORDER}`,
                          borderRadius: 8,
                          color: entry.released ? GREEN : MUTED,
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          padding: "0.3rem 0.85rem",
                          cursor: "pointer",
                          marginTop: "0.25rem",
                        }}
                      >
                        {entry.released ? "Released" : "Mark Released"}
                      </button>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on simplicity as spiritual discipline, the warnings of Jesus about wealth, and the voices of
              those who have lived the discipline most radically.
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
            &ldquo;Godliness with contentment is great gain&rdquo; &mdash; the most countercultural arithmetic in
            the New Testament. The person who has learned to say &ldquo;enough&rdquo; and mean it has been freed
            from the central anxiety of modern life. Begin the inventory. Name the attachment. And discover that
            the one thing you cannot accumulate &mdash; and do not need to &mdash; has already been given to you
            freely.
          </p>
        </div>
      </main>
    </div>
  );
}
