"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const STORAGE_KEY = "vine_christianeternity_entries";

interface ETREntry {
  id: string;
  date: string;
  eternalLonging: string;
  presentConnection: string;
  howItChangesNow: string;
}

const theologySections = [
  {
    title: "The Resurrection Body &mdash; 1 Corinthians 15:35&ndash;44",
    body: "When Paul addresses the Corinthians&rsquo; confusion about what kind of body the resurrection involves, he reaches for the image of a seed: &ldquo;What you sow does not come to life unless it dies. And what you sow is not the body that is to be, but a bare kernel...&rdquo; (1 Cor 15:36&ndash;37). The resurrection body is genuinely continuous with the present body &mdash; it is the same person, not a different soul &mdash; but it is also genuinely transformed: &ldquo;It is sown a natural body; it is raised a spiritual body.&rdquo; &ldquo;Spiritual&rdquo; here does not mean non-physical; it means animated and governed by the Holy Spirit rather than by the fallen natural order. The resurrection body will not be subject to decay, disease, weakness, or death. It will be the same body Jesus had on Easter &mdash; recognizable (the disciples knew him), tangible (he ate with them, invited Thomas to touch him), yet also gloriously transformed (appearing through locked doors, no longer bound by spatial limitation). We will not be ghosts or disembodied spirits; we will be whole persons, raised and renewed.",
  },
  {
    title: "The New Creation &mdash; Revelation 21&ndash;22: Not Up There, But Down Here Renewed",
    body: "The final vision of Scripture is not escape from the earth but the renewal of it. John sees &ldquo;a new heaven and a new earth&rdquo; &mdash; and then the crucial image: &ldquo;And I saw the holy city, new Jerusalem, coming down out of heaven from God&rdquo; (Revelation 21:2). The movement is downward, not upward. God does not bring his people up into a purely spiritual realm; he brings the New Jerusalem down into a renewed creation. The language of Revelation 21&ndash;22 is thick with physicality: streets, gates, a river, a tree, fruit. The healing of the nations happens in a city, not a cloud. This overturns the popular picture of eternity as endless floating in the sky. The Christian hope is for the redemption of the created order &mdash; which means that what we do in this creation &mdash; art, science, architecture, music, relationships, culture-making &mdash; is not irrelevant to eternity. N.T. Wright argues that &ldquo;what you do in the Lord is not in vain&rdquo; (1 Cor 15:58) means that the work of this life is taken up and transformed into the new creation, not discarded.",
  },
  {
    title: "&ldquo;Eye Has Not Seen&rdquo; &mdash; 1 Corinthians 2:9",
    body: "Paul quotes Isaiah 64:4 in one of the most breathtaking sentences in the New Testament: &ldquo;What no eye has seen, nor ear heard, nor the heart of man imagined, what God has prepared for those who love him&rdquo; (1 Corinthians 2:9). The very incomprehensibility of the promise is part of the promise. Whatever eternity is, it exceeds our best imagination of it &mdash; which means that every attempt to picture heaven, however beautiful, falls short. The medieval theologians called this the &ldquo;beatific vision&rdquo; &mdash; seeing God face to face &mdash; and they argued it was so overwhelming, so satisfying, so far beyond anything we can experience now, that every earthly joy is at best a faint foretaste. Augustine wrote: &ldquo;Thou hast made us for thyself, O Lord, and our heart is restless until it finds its rest in thee.&rdquo; Every longing we feel &mdash; for beauty, for love, for justice, for wholeness &mdash; is a signal pointing toward what awaits. The incomprehensibility is not a failure of revelation; it is the honest acknowledgment that we are being invited into something that has never entered a human heart.",
  },
  {
    title: "N.T. Wright&rsquo;s Correction of Popular Heaven Theology",
    body: "N.T. Wright&rsquo;s &ldquo;Surprised by Hope&rdquo; (2008) is arguably the most important popular theology of eternity written in recent decades, because it patiently dismantles what most Western Christians actually believe &mdash; and replaces it with what the New Testament actually says. The popular picture: at death, the soul leaves the body and goes to heaven forever. The New Testament picture: at death, believers enter an intermediate state (present with Christ, genuinely good, but incomplete); at the return of Christ, the dead are raised bodily; and the ultimate destiny is life in a renewed physical creation. Wright insists that &ldquo;going to heaven when you die&rdquo; is not wrong exactly &mdash; the intermediate state is real &mdash; but it is not the full story, and conflating it with the final hope produces a Christianity that is world-denying, body-hating, and politically passive. If the world is to be destroyed anyway, why care for it? But if the world is to be renewed, then our care for it now is a participation in God&rsquo;s project &mdash; and that changes everything.",
  },
  {
    title: "The Already and Not Yet &mdash; The Kingdom as Taste of Eternity",
    body: "The kingdom of God, in New Testament theology, is both present and future. Jesus announced that the kingdom &ldquo;has come near&rdquo; (Mark 1:15) and demonstrated its arrival through healings, exorcisms, and resurrection. But the kingdom is also not yet fully arrived: we still live in a world of pain, injustice, and death. This &ldquo;already/not yet&rdquo; tension is not a problem to be solved but the actual shape of Christian existence. Every healing prayer, every act of justice, every meal shared in love is a foretaste of the new creation &mdash; an anticipation in the present of what will be fully true in the future. This means that eternity is not entirely other than the present; it is the completion and perfection of what is already breaking in. The Lord&rsquo;s Supper is a primary enacted parable of this: &ldquo;until he comes&rdquo; (1 Cor 11:26), the church receives a foretaste of the messianic banquet. Every Eucharist is a meal set at the intersection of the already and the not yet &mdash; a bite of the future, taken now.",
  },
  {
    title: "The Beatific Vision &mdash; Seeing God Face to Face",
    body: "The Catholic and Orthodox traditions have placed the beatific vision &mdash; the direct, unmediated sight of God &mdash; at the center of their understanding of eternal life. The scriptural basis is clear: &ldquo;For now we see in a mirror dimly, but then face to face. Now I know in part; then I shall know fully, even as I have been fully known&rdquo; (1 Corinthians 13:12). And: &ldquo;Beloved, we are God&rsquo;s children now, and what we will be has not yet appeared; but we know that when he appears we shall be like him, because we shall see him as he is&rdquo; (1 John 3:2). To see God as he is &mdash; not through types, shadows, sacraments, or Scripture, but directly &mdash; is presented by these traditions as the supreme beatitude, the joy that all other joys have been preparing us for. Thomas Aquinas argued that the beatific vision satisfies the intellect so completely that there can be no further desire, no restlessness &mdash; and yet it is not static, because the depths of God are inexhaustible. We will be eternally exploring an infinite beauty.",
  },
  {
    title: "What We Will Do in Eternity &mdash; Work, Creativity, Worship, Relationship",
    body: "The cloud-and-harp picture of eternity is not only unscriptural; it is unattractive, and it makes it hard to long for what we are promised. The biblical picture is richer: work (we were created to tend the garden, and in the new creation we will exercise dominion in a world no longer under the curse); creativity (the cultural mandate of Genesis is not abolished but fulfilled &mdash; the kings of the earth bring their glory into the New Jerusalem, Revelation 21:24); worship (not as a single endless church service but as the natural overflow of seeing God as he is); and relationship (the community of the redeemed, knowing and being known fully, without the distortions of sin). Dallas Willard liked to ask: &ldquo;What do you think Jesus will have you doing in a million years?&rdquo; The answer is not nothing. Makoto Fujimura, the Japanese-American artist and theologian, speaks of the new creation as the place where all that was beautiful and true in human culture is preserved, perfected, and offered back to God. Eternity is not the end of human creativity; it is its fullest expression.",
  },
  {
    title: "Your Labor Is Not in Vain &mdash; 1 Corinthians 15:58",
    body: "Paul concludes the great resurrection chapter of 1 Corinthians 15 &mdash; which has moved from the bodily resurrection of Jesus through the resurrection of believers to the defeat of death and the transformation of creation &mdash; with a single practical sentence: &ldquo;Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain&rdquo; (1 Corinthians 15:58). The resurrection does not produce passivity; it produces work. The knowledge that this creation is not to be destroyed but renewed means that what we build, create, care for, and cultivate in this age is not wasted. N.T. Wright writes: &ldquo;Every act of love, gratitude, and kindness; every work of art or music inspired by the love of God and delight in his creation; every minute spent teaching a severely handicapped child to read or to walk&hellip; all of this will find its way, through the resurrection, into the new creation which God will one day make.&rdquo; This is among the most motivating sentences in Christian theology.",
  },
  {
    title: "Judgment and Accountability",
    body: "The New Testament&rsquo;s hope of the new creation includes, not despite but because of its love for justice, the reality of judgment. The world will be set right, which means all wrong will be confronted and resolved. Paul writes: &ldquo;We must all appear before the judgment seat of Christ, so that each one may receive what is due for what he has done in the body, whether good or evil&rdquo; (2 Corinthians 5:10). This is not a threat to undermine assurance; for the believer, it is clothed in grace &mdash; we appear before the judge who is also our advocate (1 John 2:1). But it is real, and it matters. The doctrine of judgment guards against the sentimental universalism that says nothing is serious enough to have consequences &mdash; and it vindicates the victims of history whose suffering was never addressed in this life. C.S. Lewis observed that the same divine attribute &mdash; God&rsquo;s commitment to setting all things right &mdash; is what the oppressed long for as justice and what the oppressor fears as wrath. The new creation is not the erasure of moral reality; it is its full and final affirmation.",
  },
];

const practices = [
  {
    name: "The Eternal Longing Inventory",
    body: "Sit quietly for twenty minutes with a blank page. Write, in no particular order, everything you most deeply long for &mdash; not what you think you should long for, but what you actually ache toward: the reconciliation you cannot seem to achieve, the beauty that brings you to tears, the justice that has been denied, the love that feels forever just out of reach. Then read through your list and ask: is this a longing for the new creation? C.S. Lewis called these longings &ldquo;Sehnsucht&rdquo; &mdash; a German word for inconsolable longing &mdash; and argued they are signals from God, arrows pointing toward what eye has not yet seen. The practice does not produce eternity; it helps you recognize the longings you already have for it, and grounds your hope in something real rather than abstract.",
  },
  {
    name: "Read Revelation 21&ndash;22 as a Walk-Through",
    body: "Slow down. Read Revelation 21:1 through 22:5 as if you are taking a guided tour of a real place. Let the imagery land: the absence of tears, of death, of pain; the river of the water of life; the tree whose leaves heal the nations; the gates that are never shut; the throne of God and of the Lamb, with his servants worshiping him, seeing his face, bearing his name. After the reading, write three to five things you noticed for the first time, or that struck you differently than before. Then pray the final prayer of Scripture: &ldquo;Amen, come, Lord Jesus&rdquo; (Revelation 22:20). Let the prayer be real, not rote: an actual expression of longing for what you just read. The church that prays &ldquo;come, Lord Jesus&rdquo; earnestly is the church that lives differently now.",
  },
  {
    name: "The Already/Not Yet Sacrament",
    body: "The next time you receive communion, approach it deliberately as an already/not-yet meal. Before receiving, spend a moment on &ldquo;not yet&rdquo;: name one thing in your life or the world that is still broken, still waiting to be made right. Then receive, and spend a moment on &ldquo;already&rdquo;: this bread and cup are a foretaste of the messianic banquet, the feast of the new creation, set now in the middle of time. Paul says we &ldquo;proclaim the Lord&rsquo;s death until he comes&rdquo; (1 Cor 11:26) &mdash; the meal is both memorial and anticipation. Let the wine taste, if only for a moment, of the feast that is coming. The discipline is to hold both halves together: the not-yet groaning and the already tasting, in the same act of worship.",
  },
  {
    name: "Work as New-Creation Anticipation",
    body: "Choose one task you do this week &mdash; a creative project, a conversation, a piece of work done with care &mdash; and do it deliberately as a foretaste of what you will do in the new creation. N.T. Wright&rsquo;s claim is that work done &ldquo;in the Lord&rdquo; is not discarded but transformed and taken up into the new creation. This does not make every task automatically sacred, but it does mean that excellence, care, beauty, and love poured into this-age work are not wasted. As you work, pray: &ldquo;Lord, let this be something of what you will make new.&rdquo; Artists, architects, teachers, parents, doctors, and writers: the work of your hands matters eternally, not only temporally. This week, work as if you believe it.",
  },
  {
    name: "Thirty Days in 1 Corinthians 15",
    body: "Commit to reading one passage from 1 Corinthians 15 each day for a month, rotating through the chapter. It is the longest and densest treatment of resurrection theology in the New Testament, and most Christians have only ever heard selected verses from it. Read it slowly enough to feel the argument&rsquo;s movement: from the historical resurrection of Jesus (vv. 1&ndash;11), to the logical necessity of our own resurrection (vv. 12&ndash;34), to the nature of the resurrection body (vv. 35&ndash;49), to the final transformation and the defeat of death (vv. 50&ndash;57), to the practical conclusion (v. 58). By the end of the month, the chapter should be yours &mdash; not just as information but as a map of your hope.",
  },
  {
    name: "The Eternal Weight of Now",
    body: "C.S. Lewis wrote: &ldquo;There are no ordinary people. You have never talked to a mere mortal.&rdquo; He meant: every person you encounter will exist for eternity, one way or another, and this changes how you treat them. This week, practice seeing the people around you through the lens of eternity: the colleague, the cashier, the child, the difficult neighbor. Each one is an image-bearer with an eternal destiny. How does this change the conversation? How does it change your patience, your care, your willingness to inconvenience yourself for them? The doctrine of eternity is not abstract. Every interaction this week is practice for what relationship will be in the new creation &mdash; knowing and being known fully, without the distortions of sin.",
  },
];

const voices = [
  {
    name: "N.T. Wright",
    years: "b. 1948",
    role: "New Testament scholar; Surprised by Hope",
    body: "Wright&rsquo;s &ldquo;Surprised by Hope&rdquo; (2008) has become the essential popular correction to centuries of well-meaning but scripturally thin Christian teaching on eternity. His central argument: the New Testament hope is not &ldquo;going to heaven when you die&rdquo; but bodily resurrection into a renewed physical creation &mdash; not escape from earth but redemption of it. He traces this through Paul, through Revelation, and through the Gospel resurrection accounts, and argues that getting eternity wrong has direct consequences for how Christians engage culture, politics, and creation care in the present. If the world is going to be destroyed, why bother? But if it is going to be renewed, then every act of love and justice and beauty now is an anticipation of the future &mdash; and that changes everything.",
    quote: "The resurrection of Jesus is the beginning of God&rsquo;s new project, not to snatch people away from earth to heaven, but to colonize earth with the life of heaven.",
  },
  {
    name: "Randy Alcorn",
    years: "b. 1951",
    role: "Heaven; author and theologian",
    body: "Alcorn&rsquo;s &ldquo;Heaven&rdquo; (2004) is the most comprehensive popular treatment of the biblical doctrine of heaven written in modern times &mdash; a serious work of biblical theology, nearly five hundred pages, that works through the Old and New Testament evidence systematically. His central corrective is the same as Wright&rsquo;s: the ultimate hope is not a disembodied heaven but a resurrected body in a new creation. He is especially effective at imagining the concrete richness of that future: meals, work, laughter, exploration, art, relationships. He argues that our inability to imagine an interesting eternity is a failure of biblical imagination, not a reflection of what Scripture actually promises. The book is dense but rewarding, and has changed how large numbers of ordinary Christians think about what they are actually hoping for.",
    quote: "We will not float on clouds playing harps. We will eat and drink and work and play and explore and create &mdash; in bodies, in a physical world, with the God who made us for exactly this.",
  },
  {
    name: "C.S. Lewis",
    years: "1898&ndash;1963",
    role: "The Last Battle; The Great Divorce; writer",
    body: "Lewis gave us the most imaginatively rich vision of eternity in modern Christian writing. In &ldquo;The Last Battle,&rdquo; the final volume of Narnia, eternity is presented as the real Narnia of which the old Narnia was only a shadow: &ldquo;Further up and further in&rdquo; is the invitation, into an expanding, deepening joy. In &ldquo;The Great Divorce,&rdquo; he presents heaven as more solid and real than the grey, ghostly half-existence of those who reject it &mdash; the grass of heaven hurts the feet of those not yet ready for it, because it is more real than anything they have experienced. His essay &ldquo;The Weight of Glory&rdquo; is among the most beautiful treatments of the longing for eternity in English literature: the argument that we are too easily satisfied with mud pies in a slum because we have not learned to want the holiday by the sea that God is offering. His apologetic for eternity runs through longing, beauty, and desire rather than argument alone.",
    quote: "We are far too easily pleased.",
  },
  {
    name: "Jonathan Edwards",
    years: "1703&ndash;1758",
    role: "Puritan theologian; Heaven: A World of Love",
    body: "Edwards&rsquo;s sermon &ldquo;Heaven is a World of Love&rdquo; (1738), part of his series on 1 Corinthians 13, is one of the most beautiful descriptions of eternal life in the English language. He describes heaven as the place where the perfect love of the Trinity overflows into the community of the redeemed &mdash; a love that is without jealousy, without competition, without the distortions of sin, where every member of the community rejoices in every other&rsquo;s joy. He argues that the love we experience now in its best moments &mdash; in friendship, marriage, community, worship &mdash; is a pale foretaste of a love that will be unobstructed, infinite, and eternal. Edwards was primarily a theologian of God&rsquo;s beauty and glory, and his vision of eternity is shaped by that: the beatific vision of an infinitely beautiful God, shared in a community of infinite love.",
    quote: "Heaven is a world of love. The very air of it is love. Love breathes there, and every motion of it is love.",
  },
  {
    name: "Dallas Willard",
    years: "1935&ndash;2013",
    role: "Philosopher and spiritual formation teacher",
    body: "Willard&rsquo;s vision of eternity was inseparable from his vision of discipleship: the life of the new creation is not a discontinuous break from the life of faith now, but its completion. He liked to ask his students: &ldquo;What do you think Jesus will have you doing in a million years?&rdquo; &mdash; not as a rhetorical question, but as an invitation to think concretely about a future of genuine, growing, unending relationship with God and others. He argued that the soul that has been formed in Christlikeness now will be prepared for the responsibilities of the new creation &mdash; that the practices of spiritual formation are, in part, preparation for eternity. He resisted any picture of heaven as passive or static, insisting that the God who made us in his image made us for creative, purposeful, expanding life.",
    quote: "Eternal life is not primarily duration but quality of life. It begins now, in relationship with God, and grows into a future of endless, creative participation in the life of the Trinity.",
  },
  {
    name: "Makoto Fujimura",
    years: "b. 1960",
    role: "Artist and theologian; Culture Care",
    body: "Fujimura is a Japanese-American painter and theologian whose work sits at the intersection of art, theology, and culture. His vision of the new creation is profoundly artistic: he argues that human creativity &mdash; art, music, literature, architecture &mdash; is not incidental to the Christian story but central to it. The cultural mandate of Genesis (fill and subdue the earth, exercise creative dominion) is not abolished by the fall or by the new creation; it is fulfilled in it. He speaks of artists as &ldquo;border stalkers&rdquo; &mdash; people who live at the edges of the present and the coming age, seeing and expressing what others cannot yet see. His hope for eternity includes the preservation and perfection of what was most beautiful in human culture, offered back to God in a new creation that includes the glory of the nations (Revelation 21:26). He makes the case that every act of genuine creativity now is an act of faith in the resurrection.",
    quote: "We are called to create as those who believe in the resurrection: with hope that what is broken can be healed, what is lost can be recovered, and what is made can endure into the new creation.",
  },
];

const scriptures = [
  {
    ref: "1 Corinthians 15:42&ndash;44",
    text: "So is it with the resurrection of the dead. What is sown is perishable; what is raised is imperishable. It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power. It is sown a natural body; it is raised a spiritual body.",
    note: "Paul&rsquo;s most direct account of the resurrection body: genuinely physical (a body), genuinely transformed (spiritual &mdash; animated by the Spirit). Not a ghost, not a clone. The same person, radically renewed.",
  },
  {
    ref: "Revelation 21:1&ndash;5",
    text: "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away... And I heard a loud voice from the throne saying, &ldquo;Behold, the dwelling place of God is with man... He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.&rdquo; And he who was seated on the throne said, &ldquo;Behold, I am making all things new.&rdquo;",
    note: "The final destination is not souls in the sky but God dwelling with his people in a renewed creation. The movement is downward: the New Jerusalem descends. God makes all things new &mdash; not all new things.",
  },
  {
    ref: "1 Corinthians 2:9",
    text: "But, as it is written, &ldquo;What no eye has seen, nor ear heard, nor the heart of man imagined, what God has prepared for those who love him&rdquo; &mdash; these things God has revealed to us through the Spirit.",
    note: "Every image of eternity in Scripture is a hint, not a photograph. The reality exceeds every imagination &mdash; which means that when eternity disappoints your expectations, it will be because it is better than you could expect.",
  },
  {
    ref: "1 Corinthians 15:58",
    text: "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.",
    note: "The resurrection produces action, not passivity. Because this creation will be renewed rather than discarded, what you do in it &mdash; your work, your love, your creativity &mdash; is not wasted. The resurrection is the foundation for present engagement.",
  },
  {
    ref: "1 Corinthians 13:12",
    text: "For now we see in a mirror dimly, but then face to face. Now I know in part; then I shall know fully, even as I have been fully known.",
    note: "The beatific vision: to see and know God as we are seen and known by him. Every partial knowledge, every beautiful moment, every glimpse of truth &mdash; all of it is preparation for a knowing that has no end.",
  },
  {
    ref: "Romans 8:18&ndash;19, 21",
    text: "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us. For the creation waits with eager longing for the revealing of the sons of God... the creation itself will be set free from its bondage to corruption and obtain the freedom of the glory of the children of God.",
    note: "Even creation itself longs for the new creation. The hope of eternity is not escape from the physical world but its liberation. We groan; creation groans; the Spirit groans &mdash; and the groaning is the sound of hope.",
  },
];

const videos = [
  { videoId: "VEdVB6LfgYk", title: "N.T. Wright: What Is the New Creation?" },
  { videoId: "AUBh1k7v-BA", title: "The Resurrection Body &mdash; 1 Corinthians 15 Explained" },
  { videoId: "lcS-4E9qrCY", title: "Heaven Is Not Your Final Destination" },
  { videoId: "mX3YPWJ3BdQ", title: "Randy Alcorn: What Heaven Will Really Be Like" },
  { videoId: "kHJnMoN2YtQ", title: "The Already and Not Yet Kingdom" },
  { videoId: "rOCo_ICefxo", title: "Eye Has Not Seen: The Promise of Eternity" },
];

const relatedPages = [
  { href: "/christian-death-dying", label: "Christian Death and Dying" },
  { href: "/resurrection", label: "Resurrection" },
  { href: "/christian-hope", label: "Christian Hope" },
  { href: "/new-creation", label: "New Creation" },
  { href: "/theology-of-work", label: "Theology of Work" },
  { href: "/christian-suffering", label: "Christian Suffering" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianEternityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ETREntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [eternalLonging, setEternalLonging] = useState("");
  const [presentConnection, setPresentConnection] = useState("");
  const [howItChangesNow, setHowItChangesNow] = useState("");

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
    if (!eternalLonging.trim()) return;
    const entry: ETREntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      eternalLonging: eternalLonging.trim(),
      presentConnection: presentConnection.trim(),
      howItChangesNow: howItChangesNow.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setEternalLonging("");
    setPresentConnection("");
    setHowItChangesNow("");
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
            background: GOLD + "22",
            color: GOLD,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Eternity
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Eye Has Not Seen: Christian Eternity
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          The Christian hope is not a disembodied soul drifting in the clouds. It is a resurrected body in a renewed
          creation, in the company of the redeemed, in the unobstructed presence of God. What no eye has seen, no ear
          heard, and no heart has imagined &mdash; that is what is prepared for those who love him. And it changes
          everything about how we live today.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide covers the resurrection body, the new creation, the beatific vision, what we will actually do
          in eternity, and &mdash; crucially &mdash; why the resurrection means that your labor in this world is not in
          vain. The future is not escape; it is arrival.
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
                borderColor: tab === t.id ? GOLD : BORDER,
                background: tab === t.id ? GOLD + "22" : "transparent",
                color: tab === t.id ? GOLD : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GOLD, margin: "0 0 0.25rem" }}>
              A Theology of Eternity
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s teaching on the Christian hope &mdash; from the resurrection body
              to the new creation to the beatific vision to the judgment that sets all things right.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: GOLD, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
            <div style={{ background: GOLD + "11", border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                The Christian hope is not escape but arrival &mdash; not the soul fleeing the body and the world, but
                God flooding the world with his own life, raising the dead, and making all things new. Every longing
                you feel for beauty, for justice, for love, for wholeness is a signal toward what awaits. And every act
                of faithfulness now &mdash; every seed of love planted in the soil of this creation &mdash; will find
                its way, through the resurrection, into what God is making. Your labor is not in vain.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GOLD, margin: "0 0 0.25rem" }}>
              Practices of Eternal Hope
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Eternity is not only something to wait for; it is something to practice toward. These six disciplines
              cultivate a hope that is concrete, embodied, and world-engaging &mdash; the kind that changes how you live
              every day, not just how you feel at funerals.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: GOLD + "22",
                  color: GOLD,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GOLD, margin: "0 0 0.25rem" }}>
              Voices on Eternity
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six voices &mdash; a New Testament scholar, a theologian, a novelist, a Puritan divine, a philosopher, and
              an artist &mdash; who have most shaped how serious Christians think about what is actually waiting on the
              other side of death.
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
                  style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: v.role }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${GOLD}`,
                  background: GOLD + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GOLD, margin: "0 0 0.25rem" }}>
              Scripture on Eternity
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts &mdash; from the resurrection body to the new creation to the groaning of all creation
              &mdash; to read slowly, pray through, and allow to reshape what you are actually hoping for.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: GOLD, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.ref }}
                />
                <p
                  style={{
                    color: TEXT,
                    lineHeight: 1.8,
                    margin: "0 0 0.9rem",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    borderLeft: `3px solid ${GOLD}`,
                    paddingLeft: "1rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: GOLD + "11", border: `1px solid ${GOLD}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A six-week reading plan:</strong> take one passage per week and sit with
                it daily. By week six you will have the scriptural backbone of the Christian hope &mdash; not as
                information, but as something that has had time to settle into longing.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GOLD, margin: 0 }}>
              Eternity Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name an eternal longing &mdash; what you most look forward to in the new creation &mdash; how it connects
              to your present life, and how it changes how you live today. Entries are saved privately in your browser.
              This is your own record of hope &mdash; the hopes that anchor your present and pull you forward.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="etr-longing" style={labelStyle}>An eternal longing &mdash; what I most look forward to</label>
                <textarea
                  id="etr-longing"
                  value={eternalLonging}
                  onChange={e => setEternalLonging(e.target.value)}
                  rows={2}
                  placeholder="e.g. The reunion with people I&rsquo;ve lost; finally seeing God face to face; a body that doesn&rsquo;t hurt; the healing of all injustice; making art with complete freedom..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Be honest and specific. Your real longings point toward real promises.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="etr-present" style={labelStyle}>How this longing connects to my present life</label>
                <textarea
                  id="etr-present"
                  value={presentConnection}
                  onChange={e => setPresentConnection(e.target.value)}
                  rows={2}
                  placeholder="e.g. The work I do caring for the disabled is a foretaste of the healing that is coming; the friendships I tend now are being made for eternity..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>The new creation is not discontinuous from this one &mdash; it is its renewal.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="etr-now" style={labelStyle}>How it changes how I live today</label>
                <textarea
                  id="etr-now"
                  value={howItChangesNow}
                  onChange={e => setHowItChangesNow(e.target.value)}
                  rows={2}
                  placeholder="e.g. It makes suffering bearable; it makes present injustice less final; it frees me from grasping after this life; it motivates me to work well even when unrecognized..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Doctrine that changes nothing changes nothing. Trace the practical difference.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!eternalLonging.trim()}
                style={{
                  background: eternalLonging.trim() ? GOLD : BORDER,
                  color: eternalLonging.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: eternalLonging.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin your record of hope above &mdash; one named longing and one lived-out change
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
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem", paddingRight: "4.5rem" }}>{entry.date}</div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: GOLD, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Eternal Longing
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.eternalLonging}</p>
                      </div>
                      {entry.presentConnection && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: GOLD, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Present Connection
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.presentConnection}</p>
                        </div>
                      )}
                      {entry.howItChangesNow && (
                        <div>
                          <div style={{ color: GOLD, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            How It Changes How I Live
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.howItChangesNow}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GOLD, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the new creation, the resurrection body, the already/not-yet kingdom, and what eye has not yet
              seen &mdash; the full, embodied, world-renewing Christian hope.
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
            &ldquo;Eye has not seen, nor ear heard&rdquo; &mdash; but the Spirit has revealed it, and you can live toward
            it now. Every act of love, every work done well, every seed of beauty planted in this creation is not wasted.
            Your labor is not in vain. The new creation is coming, and it includes you &mdash; all of you.
          </p>
        </div>
      </main>
    </div>
  );
}
