"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_christianwitness_entries";

interface WTNEntry {
  id: string;
  date: string;
  person: string;
  conversation: string;
  nextStep: string;
}

const theologySections = [
  {
    title: "&ldquo;You Shall Be My Witnesses&rdquo; — Acts 1:8",
    body: "The final words Jesus speaks before his ascension in Acts 1:8 are not a suggestion or an invitation: &ldquo;You will be my witnesses in Jerusalem, in all Judea and Samaria, and to the ends of the earth.&rdquo; The word witness — martys in Greek, from which we get &ldquo;martyr&rdquo; — is a legal and personal term. A witness does not invent testimony; a witness reports what has been seen, heard, and experienced. Jesus is not commissioning his disciples to argue philosophy or perform programs; he is calling them to tell what they know to be true about him. This means witness is not the exclusive domain of the eloquent, the trained, or the bold. Every person who has encountered the risen Christ has something to report. The democratic genius of Acts 1:8 is that it is addressed to all present: fishermen, women who funded the ministry, former tax collectors, a former denier. All are witnesses because all have seen. The geography — Jerusalem, Judea, Samaria, ends of the earth — maps the concentric circles of every believer&rsquo;s life: home, city, the people we find difficult, the stranger.",
  },
  {
    title: "The Great Commission — Matthew 28:18-20",
    body: "Matthew closes his Gospel with what the church has called the Great Commission: &ldquo;All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.&rdquo; Two features of this commission deserve attention. First, it is grounded in authority, not urgency. Jesus does not say &ldquo;go because the need is great&rdquo; but &ldquo;go because all authority is mine.&rdquo; The basis of witness is the lordship of Christ, not the enthusiasm of the witness. Second, the main verb is not &ldquo;go&rdquo; but &ldquo;make disciples.&rdquo; Going is a participle — it assumes movement as the natural posture of life — but the command is to disciple: to form whole people around Jesus&rsquo; teaching, not merely to secure decisions. The Commission ends with the promise that will sustain every act of witness across every generation: &ldquo;I am with you always, to the end of the age.&rdquo; Witness is not accomplished in our strength alone; the one who commands is the one who accompanies.",
  },
  {
    title: "Always Be Prepared — 1 Peter 3:15",
    body: "Peter&rsquo;s instruction is the most personal text on witness in the New Testament: &ldquo;In your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.&rdquo; Three elements deserve close reading. First, witness begins internally — &ldquo;in your hearts honor Christ.&rdquo; The witness who does not first revere Christ will speak about him as information rather than as Lord. Second, the occasion is reactive, not aggressive: Peter envisions a Christian whose manner of life provokes questions — whose hope is visible enough that people ask about it. The witness is answering, not accosting. Third, the manner matters as much as the content: gentleness and respect are not optional tonal adjustments but commands. The history of coercive, contemptuous Christian witness against which many non-Christians have closed their ears is a failure at the level of 1 Peter 3:15, not an excess of obedience to it.",
  },
  {
    title: "Witness vs. Evangelism — A Necessary Distinction",
    body: "The words &ldquo;witness&rdquo; and &ldquo;evangelism&rdquo; are often used interchangeably, but they carry different weights. Evangelism — from euangelion, good news — refers specifically to the announcement of the gospel: the proclamation of Christ&rsquo;s death and resurrection as the means of reconciliation with God. Witness is broader: it includes the whole life lived in such a way that Christ is visible. A person can witness through the quality of their character, the stability of their joy in suffering, the justice of their business dealings, and the love of their friendships long before they open their mouth. Lesslie Newbigin argued that the church&rsquo;s primary witness to the gospel is not the individual tract or the stadium event but the local congregation itself — a community whose common life embodies the new creation. This distinction liberates: not everyone is called to be an evangelist in the formal sense, but every Christian is called to be a witness in the full sense. The failure to make this distinction has both silenced those who are not natural evangelists and excused those who endlessly &ldquo;witness&rdquo; with their lives while never opening their mouths.",
  },
  {
    title: "The Role of the Holy Spirit in Witness",
    body: "Acts 1:8 links witness directly to the Spirit: &ldquo;you will receive power when the Holy Spirit has come upon you, and you will be my witnesses.&rdquo; This is not incidental. Jesus had forbidden his disciples from beginning their witness before receiving the Spirit (Acts 1:4), because witness is not fundamentally a human communication task but a divine work through human instruments. The same Spirit who moved on the waters at creation, who filled the prophets, who descended on Jesus at his baptism, is the one who opens hearts to the gospel — not the persuasiveness of the witness. This conviction is meant to produce both boldness and humility. Boldness, because the witness does not bear the weight of conversion — that is the Spirit&rsquo;s work. Humility, because the witness&rsquo;s role is to be a clear vessel, not a dazzling performance. Paul, the most effective human evangelist in Christian history, insisted: &ldquo;My speech and my message were not in plausible words of wisdom, but in demonstration of the Spirit and of power&rdquo; (1 Cor 2:4).",
  },
  {
    title: "Incarnational Evangelism — Friendship vs. Proclamation",
    body: "The tension between friendship evangelism and proclamation evangelism has divided practitioners for decades. Proclamation evangelism — represented historically by street preaching, tracts, and gospel campaigns — prioritizes the verbal announcement of the gospel to as many people as possible. Friendship evangelism — associated with Rebecca Manley Pippert and others — emphasizes deep relational presence, particularly among people who would never enter a church or attend a meeting. The debate is sometimes resolved by simple sequencing: earn the right to be heard before speaking. But this framing misses the deeper point. Incarnational witness — modeled on the Word becoming flesh, dwelling among us — is not a technique for gaining access but a theology of presence: God does not broadcast the gospel from a distance; he enters human life fully. The witness who genuinely loves the people they hope to reach is not warming up for a gospel conversation; they are already enacting one. Rebecca Pippert&rsquo;s Out of the Saltshaker captures this well: the gospel spreads most naturally through the ordinary relationships of ordinary life, when Christians are genuinely present in the world rather than retreating into subculture.",
  },
  {
    title: "Why Fear Silences Witness",
    body: "The most common reason Christians do not bear witness is not theological confusion but fear — fear of rejection, of seeming strange, of damaging a relationship, of not knowing enough, of being asked a question they cannot answer. This fear is not new: Peter denied Christ three times in the hours before the crucifixion, and the disciples locked the doors &ldquo;for fear of the Jews&rdquo; on Easter evening. But the fear that silences witness is, at its root, a failure of the theology of witness: it forgets that conversion is God&rsquo;s work, not the witness&rsquo;s; it forgets that a stumbling, imperfect testimony to Christ is infinitely more useful than a polished silence; it forgets that the Spirit is already at work in the person before the witness opens their mouth. Francis Schaeffer identified one practical solution: a life whose integrity removes the barrier of &ldquo;they&rsquo;re only being nice because they want to convert me.&rdquo; When a Christian is genuinely known as someone who loves people, the gospel they speak falls on soil already softened by evidence.",
  },
  {
    title: "Paul in Athens — Acts 17 and Contextual Witness",
    body: "Acts 17 is the New Testament&rsquo;s fullest portrait of witness to a non-Jewish, philosophically sophisticated audience, and it is worth reading with care. Paul, alone in Athens, is &ldquo;provoked&rdquo; — the Greek is paroxyno, the same word used for a sharp dispute — by the idols he sees everywhere. He does not begin by attacking idolatry; he begins in the synagogue and the marketplace, in conversation with whoever is present. When given a formal platform at the Areopagus, he begins where his audience already is: &ldquo;I perceive that in every way you are very religious.&rdquo; He quotes their own poets. He identifies the altar to an unknown god as the place of his entry. He does not reach for the Jewish scriptures that would mean nothing to this audience; he speaks of creation, of the universal human search for God, before arriving at the resurrection — at which point some mock, some want to hear more, and some believe. Paul&rsquo;s Athens witness is a model of cultural intelligence in service of unchanging content: he does not change the gospel, but he changes the door through which he carries it.",
  },
  {
    title: "The Scandal and Offense of the Cross",
    body: "Paul was clear-eyed about what the gospel would encounter: &ldquo;the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God&rdquo; (1 Cor 1:18). The cross — a criminal&rsquo;s execution presented as the salvation of the world, the death of God&rsquo;s Son as the ground of forgiveness — was a skandalon (stumbling block) to Jews who expected a triumphant Messiah and moreia (foolishness) to Greeks who expected philosophical wisdom. It remains so today, in different forms. The witness who tries to remove the offense by softening the cross — by making the gospel primarily about personal improvement, social justice, or therapeutic wellness — has not made the gospel more accessible; they have removed its power. The task of contextualization is to remove every unnecessary barrier while leaving the necessary one: the cross remains offensive, but it should be offensive for what it actually is, not for the cultural accretion or social behavior of those who announce it. The offense of the cross, received by faith, becomes the power of God for salvation.",
  },
];

const practices = [
  {
    name: "The Witness List",
    body: "Take thirty minutes and write down the names of five people in your life who, as far as you know, do not know Jesus. Not a theoretical list — actual people: your neighbor, your colleague, a family member, a friend. Pray for each of them by name every day for thirty days. Studies of conversion consistently show that most people come to faith through a relationship with someone who prayed for them specifically and persistently. The witness list does not require you to formulate an argument or manufacture an opportunity; it simply keeps specific people before God and before your own attention. After thirty days, review: has anything changed in your conversations with these people? Has God created any openings you walked past? The list trains the eyes to see what the Spirit may already be preparing.",
  },
  {
    name: "Learning Your Testimony",
    body: "Every Christian has a story of encounter with Christ, and that story is the most irreducibly personal form of witness. No one can argue with what you have experienced, and no specialized training is required to tell it. Write out your testimony in three movements: life before faith, the turning point, and life after. Aim for three minutes. Then practice saying it aloud — to yourself first, then to a trusted friend. The goal is not a polished performance but enough familiarity that you can share it naturally when a moment arises. Paul shared his testimony three times in Acts (chapters 9, 22, and 26), each time shaped to the audience. The content was the same; the framing varied. Learn your story well enough to tell it simply, and the Spirit will find moments for it you did not plan.",
  },
  {
    name: "The Art of the Gospel Question",
    body: "Many Christians never share their faith because they cannot imagine how to move a normal conversation toward the gospel without it feeling abrupt or intrusive. One simple practice: develop three questions that can open spiritual conversation naturally. Examples: &ldquo;Do you have any kind of faith background?&rdquo; — open, non-threatening, genuinely curious. &ldquo;What do you think happens when we die?&rdquo; — answerable by anyone, reveals worldview. &ldquo;Has anything ever made you wonder whether there&rsquo;s more to life than this?&rdquo; — touches the longing most people carry. These are not tricks; they are genuine questions about what matters most. The witness who is truly curious about the person in front of them will ask them naturally. Practice one per week in ordinary conversations, not only with unbelievers, and you will develop the habit of attending to the spiritual dimension of every encounter.",
  },
  {
    name: "Reading Apologetics for the Questions You Actually Face",
    body: "Peter says to be prepared to give a reason for the hope within you. Preparation is a discipline. Identify the two or three specific objections you most often hear from the people in your life — the problem of suffering, the exclusivity of Christ, the reliability of Scripture, the relationship of science and faith — and read one good book on each. You do not need to become an expert; you need to be able to say, with genuine confidence, &ldquo;That&rsquo;s a serious question and I&rsquo;ve thought about it.&rdquo; Francis Schaeffer called this honest engagement &ldquo;taking the roof off&rdquo; — following an objection to its logical conclusion until the person can feel its inconsistency, rather than deflecting it. The witness who has read seriously is not armed for combat; they are equipped for honest conversation.",
  },
  {
    name: "Crossing Cultures in Witness",
    body: "Paul&rsquo;s decision to become &ldquo;all things to all people&rdquo; (1 Cor 9:22) was not theological relativism but relational commitment — he would not make his own cultural comfort a barrier to anyone hearing the gospel. Most of us witness most easily to people exactly like ourselves. As a deliberate practice, build at least one genuine friendship this year with someone from a significantly different background — ethnically, economically, or generationally. Do not enter the relationship as a mission project; enter it as a human being. The gospel that is credible across cultural distance is more powerful than the gospel that stays within demographic comfort. And the witness who has genuinely loved across difference will have a more capacious heart — and a more credible voice.",
  },
  {
    name: "The Prayer of the Open Door",
    body: "Paul in Colossians 4:3 asks the church to pray &ldquo;that God may open to us a door for the word.&rdquo; He does not ask for more boldness; he asks for an open door — recognizing that the right moment for witness is given, not manufactured. Adopt a daily prayer: &ldquo;Lord, today open a door for a word about Jesus, and give me the courage to walk through it.&rdquo; Then pay attention to what happens. Not every opened door will be dramatic; most will be ordinary — a question asked, a moment of honest conversation, a brief and genuine exchange about what you believe. The discipline of praying for an open door trains expectation: you begin to move through the day watching for what God might be preparing rather than either anxiously engineering conversations or passively waiting for a more convenient season.",
  },
];

const voices = [
  {
    name: "William Wilberforce",
    years: "1759–1833",
    role: "Statesman and gospel witness",
    body: "Wilberforce is remembered primarily as the parliamentarian who led the campaign to abolish the British slave trade, but he understood his political work as witness — the public expression of his Christian convictions about human dignity. Equally important was his book A Practical View of Christianity (1797), which called the nominal Christianity of the British upper class to genuine faith and argued that public virtue required genuine interior transformation. Wilberforce held together what many separate: social reform and evangelical witness, public action and personal holiness. His life demonstrates that witness is not confined to personal conversation; a life lived visibly for justice and truth in public is also a form of testimony. His two &ldquo;great objects,&rdquo; as he wrote in his diary, were the abolition of the slave trade and the reformation of manners — both expressions of what the gospel required of a man with his position.",
    quote: "God Almighty has set before me two great objects, the suppression of the Slave Trade and the Reformation of Manners.",
  },
  {
    name: "Billy Graham",
    years: "1918–2018",
    role: "Evangelist to a century",
    body: "Graham preached in person to more people than any other human being in history — over 215 million across 185 countries — and maintained his integrity across seven decades of public ministry, declining money, fame, and political power that his platform could easily have converted. His method was simple: preach the gospel, invite response, and trust the Spirit. Critics noted what he called his own limitation: he was an evangelist, not a discipler, and some conversions did not take root in communities. But his consistent refusal to exploit his platform — he set his salary below that of many pastors, kept his team financially accountable, and refused private meetings with women other than his wife — made his testimony credible across decades in an era of repeated evangelical failures. His witness is that the simple gospel, preached clearly and in integrity, remains the power of God for salvation.",
    quote: "It is the Holy Spirit&rsquo;s job to convict, God&rsquo;s job to save, and my job to proclaim.",
  },
  {
    name: "Francis Schaeffer",
    years: "1912–1984",
    role: "Apologist for the whole person",
    body: "Schaeffer and his wife Edith founded L&rsquo;Abri (&ldquo;the shelter&rdquo;) in the Swiss Alps, where for decades streams of young people — many of them intellectual seekers, hippies, and the spiritually disillusioned — came and found not only arguments but a community that embodied what it claimed to believe. Schaeffer&rsquo;s genius was that he took objections seriously: he would follow an argument to its honest conclusion, even when that was uncomfortable. He introduced the concept of &ldquo;true truth&rdquo; — the claim that Christianity is not merely personally meaningful but publicly, cosmically true — and insisted that intellectual cowardice in witness was a failure of love. His books Escape from Reason and The God Who Is There remain among the most important accounts of how the Christian witness can engage secular thought without compromising its content.",
    quote: "If I have only an hour with someone, I will spend the first 55 minutes asking them questions and finding out what they think, and then in the last 5 minutes I will tell them what I think.",
  },
  {
    name: "Rebecca Manley Pippert",
    years: "1945–present",
    role: "Pioneer of relational evangelism",
    body: "Pippert&rsquo;s Out of the Saltshaker and Into the World (1979) changed how a generation of Christians thought about witness. Her central argument: Christians have retreated from genuine engagement with the world into a comfortable evangelical subculture, and the gospel spreads most naturally through genuine friendship with real people in real places. She was not dismissing proclamation — she was relocating it in ordinary life. Pippert pioneered what came to be called &ldquo;lifestyle evangelism,&rdquo; but she always insisted that the lifestyle must eventually speak, and that speaking must be honest, personal, and unashamed. Her more recent work Stay Salt (2020) applies the same principles to a more hostile cultural moment. Her witness is that ordinary Christians who genuinely love their neighbors and genuinely know the gospel are the most powerful witnesses in the world.",
    quote: "Jesus was not a rabbit who hid behind religious language. He was a lion who entered into people&rsquo;s lives and spoke truth with love.",
  },
  {
    name: "N.T. Wright",
    years: "1948–present",
    role: "Scholar of the missionary gospel",
    body: "Wright&rsquo;s contribution to the theology of witness is his insistence that the gospel is not merely the message of personal salvation but the announcement of Jesus&rsquo; lordship over all creation — and that this changes what witness looks like. If the good news is simply &ldquo;you can go to heaven when you die,&rdquo; witness becomes urgency about individual decision. If the good news is &ldquo;Jesus is Lord and his new creation has begun,&rdquo; witness becomes the living demonstration of that new creation in every sphere — work, justice, art, family, politics. Wright&rsquo;s Surprised by Hope and Simply Good News argue that the church has often preached a shrunken gospel and as a result produced a thin witness. His scholarship restores the cosmic dimension of the gospel and, with it, the full scope of what it means to be a witness to the kingdom.",
    quote: "The resurrection is not the reversal of a defeat but the announcement of a victory.",
  },
  {
    name: "Lesslie Newbigin",
    years: "1909–1998",
    role: "Missionary theologian of the West",
    body: "Newbigin spent decades as a missionary bishop in India, then returned to England and found it more resistant to the gospel than India. His analysis of why — gathered in books like The Gospel in a Pluralist Society and Foolishness to the Greeks — is the most searching theological account of witness to post-Christian Western culture available. His central insight: the church is not a vendor of religious services to individuals who want them, but a community sent by God to be a sign, foretaste, and instrument of the kingdom. The primary mode of witness is the congregation itself — its common life, its practices, its refusal to be assimilated into the culture. Individual verbal witness is set within this larger communal witness. Newbigin&rsquo;s work remains essential reading for anyone trying to understand why witness in the contemporary West is both urgent and difficult.",
    quote: "The church is the only society that exists for the benefit of those who are not its members.",
  },
];

const scriptures = [
  {
    ref: "Acts 1:8",
    text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.",
    note: "Witness is not a command to manufacture but a promise of what Spirit-filled people naturally become. The geography traces every believer&rsquo;s expanding circles of life: neighborhood, city, the uncomfortable neighbor, the stranger.",
  },
  {
    ref: "Matthew 28:19-20",
    text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.",
    note: "The commission is grounded in authority, not anxiety. Jesus sends because all authority is already his. The witness does not carry the weight of the world — they carry a message from the one who does.",
  },
  {
    ref: "1 Peter 3:15",
    text: "But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.",
    note: "Peter assumes a visible hope that provokes questions. The witness answers; the manner of answering is commanded alongside the content. Gentleness and respect are not optional.",
  },
  {
    ref: "Romans 10:14",
    text: "How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching?",
    note: "Paul&rsquo;s chain of logic makes the human witness irreplaceable. God has chosen to make himself known through human speech — through ordinary people who have heard and cannot stop speaking.",
  },
  {
    ref: "1 Corinthians 1:18",
    text: "For the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God.",
    note: "The offense of the gospel is built in. The witness who softens the cross to remove the stumbling block has removed the power. The task is to present the genuine gospel, not a version engineered for acceptance.",
  },
  {
    ref: "Acts 17:22-23",
    text: "Men of Athens, I perceive that in every way you are very religious. For as I passed along and observed the objects of your worship, I found also an altar with this inscription: &lsquo;To the unknown god.&rsquo; What therefore you worship as unknown, this I proclaim to you.",
    note: "Paul begins with what his audience already knows and already seeks. Contextual witness does not change the message; it finds the door that is already ajar and walks through it.",
  },
];

const videos = [
  { videoId: "ZBvYqNMSSHg", title: "How to Share Your Faith Naturally" },
  { videoId: "I8nALdBULSE", title: "The Great Commission — What Jesus Really Said" },
  { videoId: "G56CtZmvxsE", title: "Paul in Athens — Witness to a Secular World" },
  { videoId: "lFUF9Xjv5ys", title: "Billy Graham: The Simple Gospel" },
  { videoId: "y-2Kex6gRQ4", title: "Francis Schaeffer on Honest Apologetics" },
  { videoId: "XGzm-RQgpMY", title: "Lesslie Newbigin: Gospel in a Pluralist Society" },
];

const relatedPages = [
  { href: "/great-commission", label: "The Great Commission" },
  { href: "/holy-spirit", label: "The Holy Spirit" },
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/apologetics", label: "Apologetics" },
  { href: "/christian-community", label: "Christian Community" },
  { href: "/prayer", label: "Prayer" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianWitnessPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WTNEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [person, setPerson] = useState("");
  const [conversation, setConversation] = useState("");
  const [nextStep, setNextStep] = useState("");

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
    if (!person.trim()) return;
    const entry: WTNEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      person: person.trim(),
      conversation: conversation.trim(),
      nextStep: nextStep.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setPerson("");
    setConversation("");
    setNextStep("");
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
            background: ACCENT + "22",
            color: ACCENT,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Christian Life
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          You Are My Witnesses: The Call to Bear Witness
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Witness &mdash; reporting what you have seen and heard of Jesus &mdash; is not a program or a
          personality type. It is what Spirit-filled people naturally become: &ldquo;you will receive power when the
          Holy Spirit has come upon you, and you will be my witnesses&rdquo; (Acts 1:8). Every person who has
          encountered the risen Christ has something true to say.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of witness from Acts to Athens, the distinction between witness and
          evangelism, the Holy Spirit&rsquo;s irreplaceable role, why fear silences us, and the practices that
          make ordinary Christians faithful bearers of the gospel in ordinary life.
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
              A Theology of Christian Witness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture and theology &mdash; from the command of Acts 1:8 to the
              offense of the cross that both hinders and empowers every act of witness.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
            <div style={{ background: ACCENT + "11", border: `1px solid ${ACCENT}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on one fact: the witness does not generate the gospel
                from within themselves but receives it, lives it, and passes it on. The Holy Spirit goes ahead,
                opens the door, and stays after. The witness&rsquo;s task is to be present, honest, prepared,
                gentle &mdash; and to speak. &ldquo;How are they to hear without someone preaching?&rdquo;
                (Rom 10:14). That someone is you.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              Practices of a Witnessing Life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices for ordinary Christians who want to be faithful witnesses in their actual lives
              &mdash; not on a stage, but in the relationships and conversations of every week.
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              Voices on Witness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six people whose lives and work have shaped how the church thinks about bearing witness &mdash;
              from a statesman-abolitionist to a missionary theologian who found the West harder than India.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
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
                }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;" + v.quote + "&rdquo;" }}
                />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              Scripture on Witness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts for the witnessing life &mdash; each paired with a reflection for slow reading
              and prayer.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p
                  style={{
                    color: TEXT,
                    lineHeight: 1.8,
                    margin: "0 0 0.9rem",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    borderLeft: `3px solid ${ACCENT}`,
                    paddingLeft: "1rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}
                  dangerouslySetInnerHTML={{ __html: s.note }}
                />
              </div>
            ))}
            <div style={{ background: ACCENT + "11", border: `1px solid ${ACCENT}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Memory suggestion:</strong> memorize Acts 1:8 and 1 Peter 3:15
                together. The first gives you the power and the mandate; the second gives you the manner. Together
                they describe the witnessing life in full.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: 0 }}>
              Gospel Conversations Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Track the gospel conversations God opens for you &mdash; who you spoke with, what was said, and
              what comes next. Entries are saved privately in your browser, a record of faithfulness in witness.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="wtn-person" style={labelStyle}>Who you spoke with</label>
                <input
                  id="wtn-person"
                  type="text"
                  value={person}
                  onChange={e => setPerson(e.target.value)}
                  placeholder="e.g. a coworker, my neighbor, a friend from college..."
                  style={inputStyle}
                />
                <p style={hintStyle}>First name or description is fine. This is your private record.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="wtn-conversation" style={labelStyle}>What was said</label>
                <textarea
                  id="wtn-conversation"
                  value={conversation}
                  onChange={e => setConversation(e.target.value)}
                  rows={3}
                  placeholder="e.g. She asked why I seem peaceful under pressure. I told her about my faith in Christ and what his presence means in hard seasons..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Record what actually happened, not what you wish you had said. Honest records teach you more.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="wtn-nextstep" style={labelStyle}>What comes next</label>
                <textarea
                  id="wtn-nextstep"
                  value={nextStep}
                  onChange={e => setNextStep(e.target.value)}
                  rows={2}
                  placeholder="e.g. Pray for her this week; lend him a book; follow up on her question about suffering; invite them to church..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>A named next step is far more likely to happen than a general intention.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!person.trim()}
                style={{
                  background: person.trim() ? ACCENT : BORDER,
                  color: person.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: person.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin recording the conversations God opens for you &mdash; one witness
                    at a time.
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
                      <div style={{ marginBottom: "0.4rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.25rem" }}>{entry.date}</div>
                        <div style={{ color: ACCENT, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Person
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.person}</p>
                      </div>
                      {entry.conversation && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: ACCENT, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Conversation
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.conversation}</p>
                        </div>
                      )}
                      {entry.nextStep && (
                        <div>
                          <div style={{ color: ACCENT, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Next Step
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.nextStep}</p>
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
              Teaching on sharing faith naturally, the Great Commission, Paul&rsquo;s witness in Athens, and
              voices from the history of Christian evangelism and apologetics.
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
            &ldquo;You will be my witnesses.&rdquo; It is a promise before it is a command &mdash; the Spirit
            comes, and witness follows. You do not have to manufacture boldness; you have to remain close to
            the one who gives it.
          </p>
        </div>
      </main>
    </div>
  );
}
