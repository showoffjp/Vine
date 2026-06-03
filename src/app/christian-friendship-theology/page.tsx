"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "models" | "philia" | "practices" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "trinity",
    title: "Friendship in the Trinity",
    ref: "John 17:21-23; 1 John 4:8",
    body: "The Christian doctrine of the Trinity is not simply a puzzle about the number of persons in the Godhead — it is a revelation that at the very heart of ultimate reality is a community of mutual love. Theologians use the Greek word perichoresis (literally, 'mutual indwelling' or 'co-inherence') to describe the dynamic relationship between Father, Son, and Holy Spirit: each fully in the other, each fully distinct, all eternally delighting in the others. This is the eternal friendship within God. C.S. Lewis in The Four Loves noted that God himself is not merely a person who loves but the relationship of love — love is not something God has but something God is. This means that when human beings form deep friendships, they are not inventing something new — they are participating in something that has always existed at the center of reality. Friendship is not a cultural artifact or a biological convenience. It is an echo of the Trinitarian life, a participation in the very nature of God.",
  },
  {
    id: "friends",
    title: '"I Have Called You Friends" (John 15:13-15)',
    ref: "John 15:13-15",
    body: "At the Last Supper, on the night of his arrest, Jesus makes what may be the most astonishing relational claim in the entire Bible: 'I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you.' The move from servants to friends is radical. A servant obeys orders without understanding the reasons. A friend is brought inside — told the full story, trusted with the master's purposes, admitted into genuine intimacy. Jesus does not merely save us — he befriends us. He gives us not just pardon but access, not just justification but relationship. And the basis of the friendship is disclosure: 'Everything I learned from my Father I have made known to you.' True friendship, in Jesus's own definition, requires transparency — the sharing of what is most true, most important, most intimate. This redefinition of the disciple relationship as friendship becomes the charter for all Christian friendship: we are friends because he first called us friends.",
  },
  {
    id: "covenant",
    title: "Friendship as Covenant",
    ref: "Ruth 1:16-17; 1 Samuel 18:1-4; 20:17",
    body: "Two of the most stunning friendships in Scripture are covenantal in structure — not merely emotional or preferential but formally binding. Jonathan and David (1 Samuel 18–23) made an explicit covenant of friendship: 'Jonathan made a covenant with David because he loved him as himself' (18:3). Jonathan stripped himself of his robe, armor, sword, bow, and belt and gave them to David — transferring his warrior identity and royal status to his friend. Later, when Saul seeks David's life, Jonathan risks his own life to protect the covenant. And at his death, David mourns: 'Your love to me was more wonderful than the love of women' (2 Sam 1:26). Ruth and Naomi (Ruth 1:16-17) offer a different form of the same covenant across ethnic and cultural lines: 'Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.' Ruth's loyalty — what the Hebrew calls hesed, covenant lovingkindness — cost her everything. She stayed when it would have been rational to leave. The word hesed is the Bible's word for covenant loyalty. It describes God's faithfulness to Israel, David's faithfulness to Jonathan, and Ruth's faithfulness to Naomi. Christian friendship has hesed as its backbone: it is not merely warm feeling but covenantal commitment.",
  },
  {
    id: "lewis",
    title: "C.S. Lewis on Friendship (The Four Loves)",
    ref: "The Four Loves (1960) — C.S. Lewis",
    body: "C.S. Lewis analyzed love through four Greek categories: Storge (familial affection born of familiarity), Eros (romantic love), Philia (friendship), and Agape (divine, unconditional love). He placed friendship in a surprising position: 'the least biological, organic, instinctive, gregarious and necessary' of the loves — and therefore the most distinctly human. Friendship, for Lewis, has no survival value. You do not need it to reproduce, to eat, or to stay alive. And yet: 'It is one of those things which give value to survival.' Friendship is born in a moment of recognition — someone says 'What! You too? I thought I was the only one' — and in that moment, two people stop being members of a crowd and become companions on a shared quest. Lewis noted that real friendship is not about the two friends themselves but about the thing they both care about: you become friends not because you find each other fascinating but because you both love the same truth, the same art, the same God. Friendship, properly understood, is triangular: two people face the same direction together. Lewis also warned against each of the loves becoming corrupted: friendship can become a clique, a mutual flattery society, an in-group that despises outsiders. Only Agape keeps Philia honest and outward-looking.",
  },
  {
    id: "aelred",
    title: "The Medieval Tradition — Aelred of Rievaulx",
    ref: "Spiritual Friendship (c. 1160) — Aelred of Rievaulx",
    body: "Aelred of Rievaulx was a 12th-century Cistercian abbot who wrote what remains the definitive Christian theological text on friendship. Writing in dialogue form that consciously echoes Cicero's De Amicitia, Aelred made a startling claim: 'God is friendship.' He argued that spiritual friendship — the highest form of human friendship — is not merely an analogy to divine love but a participation in it. Where Cicero located the purpose of friendship in virtue and civic life, Aelred located it in God: true Christian friendship draws both parties toward holiness and ultimately toward heaven. Christ himself is the 'third party' in every genuine Christian friendship — present at the center, the one who makes the friendship possible and gives it its ultimate direction. Aelred taught that spiritual friendship has a theological purpose: mutual sanctification. The friend who draws you toward God is not merely a companion — he is a means of grace. Aelred's work was largely forgotten until the 20th century and remains under-read by evangelical Christians who have the anthropology of friendship without its telos.",
  },
  {
    id: "lonely",
    title: "Why We're Lonelier Than Ever",
    ref: "Bowling Alone (2000) — Putnam; Lost Connections (2018) — Hari",
    body: "Robert Putnam's landmark study Bowling Alone documented the collapse of social capital in America across the second half of the 20th century: declining membership in civic organizations, religious communities, bowling leagues, neighborhood associations — every form of voluntary association that builds friendship and trust. His diagnosis was structural: Americans were choosing privatized lives — driving alone, watching TV alone, spending time in contexts that don't require relationship. Johann Hari's Lost Connections extended the argument into a clinical context: much of what we diagnose as depression and anxiety, Hari argued, is actually disconnection — from meaningful work, from other people, from a sense of shared purpose. The loneliness epidemic is not merely a social problem — it is a spiritual one. The US Surgeon General declared loneliness a public health crisis in 2023: its health effects are equivalent to smoking 15 cigarettes a day. Christians should not be surprised. We were made for perichoresis — for mutual indwelling, for being known and knowing, for the communion that the Trinity enjoys and that heaven will complete. The loneliness epidemic is what happens when image-bearers of the relational God try to live without relationship. The church's calling in this moment is not to add a community program — it is to actually become what it was always supposed to be: a network of deep, honest, covenantal friendship.",
  },
];

const BIBLICAL_MODELS = [
  {
    id: "david-jonathan",
    name: "David and Jonathan",
    ref: "1 Samuel 18–23; 2 Samuel 1:26",
    color: "#F59E0B",
    summary: "Soul-knitting covenant friendship across a throne",
    detail: "The friendship of David and Jonathan is the supreme model of friendship in the entire Bible. When they first met, Jonathan's soul was 'knit' to David's (1 Sam 18:1) — a word that suggests the binding of two things into one. Jonathan immediately made a covenant with David, 'because he loved him as himself' (18:3). He then stripped himself of his robe, his armor, his sword, his bow, and his belt and gave them all to David. This is not a small gesture: Jonathan was the crown prince. His royal robe and weapons represented his identity, his status, and his inheritance. He gave them away to his friend.\n\nAs Saul grows murderous toward David, Jonathan stands between them — risking his own life to protect the covenant. He warns David, advocates for him, gives up the throne he was heir to because he knew God had chosen David. In 1 Samuel 20:17, 'Jonathan had David reaffirm his oath out of love for him, because he loved him as he loved himself.'\n\nWhen Jonathan dies in battle, David's lament (2 Sam 1:26) is the most emotionally intense statement of friendship in Scripture: 'I grieve for you, Jonathan my brother; you were very dear to me. Your love for me was wonderful, more wonderful than that of women.' This is not a statement about sexual love — it is a statement about the extraordinary, singular depth of the covenant between them, surpassing even the closest romantic bond in intensity of loyalty and grief.",
  },
  {
    id: "ruth-naomi",
    name: "Ruth and Naomi",
    ref: "Ruth 1:16-17",
    color: "#10B981",
    summary: "Covenant loyalty that crossed culture, grief, and cost",
    detail: "The friendship of Ruth and Naomi is remarkable for what it cost and who was involved. Naomi is an Israelite widow, twice-bereaved, bitter, returning home empty. Ruth is her Moabite daughter-in-law — a foreigner with no obligation to stay. Both of Naomi's daughters-in-law begin the journey with her, but Orpah turns back. Ruth does not.\n\nRuth's speech to Naomi (1:16-17) is one of the most beautiful statements of covenant loyalty in the Bible: 'Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God. Where you die I will die, and there I will be buried.' These are covenant words — words of total identification and permanent commitment.\n\nThe Hebrew word behind this loyalty is hesed — covenant lovingkindness, the same word used for God's faithfulness to Israel. Ruth extends hesed to Naomi at personal cost: leaving her homeland, her family, her gods, her social safety net. She crossed ethnic and cultural lines in a context where those lines were significant.\n\nThe friendship of Ruth and Naomi is a model of the kind of friendship that proves its depth precisely when it is costly — when staying requires sacrifice, when loyalty overrides convenience, when love chooses to remain rather than retreat.",
  },
  {
    id: "paul-timothy",
    name: "Paul and Timothy",
    ref: "1 Timothy 1:2; 2 Timothy 4:9; Philippians 2:19-22",
    color: PURPLE,
    summary: "Mentoring friendship — formation in faith, presence in suffering",
    detail: "Paul calls Timothy 'my true son in the faith' (1 Tim 1:2) and 'my dear son' (2 Tim 1:2) — language that goes beyond professional or ecclesiastical relationship. This is a friendship with the depth of a father-son bond, formed through shared mission, shared suffering, and shared faith.\n\nPaul met Timothy on his second missionary journey (Acts 16) and took him as a traveling companion. Timothy accompanied Paul through some of his most dangerous work, was sent on delicate missions to churches Paul could not visit, and is mentioned in the opening greetings of six of Paul's letters. In Philippians 2:19-22, Paul writes: 'I have no one else like him, who will show genuine concern for your welfare. For everyone looks out for their own interests, not those of Jesus Christ. But you know that Timothy has proved himself, because as a son with his father he has served with me in the work of the gospel.'\n\n2 Timothy is Paul's last letter, written from prison facing execution. His longing is striking: 'Do your best to come to me quickly' (4:9). The great apostle, facing death, wants his friend. The friendship between Paul and Timothy models intergenerational friendship — the pouring of one life into another across an age gap, the formation of character and faith through close proximity and shared suffering, the irreplaceable value of presence.",
  },
  {
    id: "beloved",
    name: "Jesus and the Beloved Disciple",
    ref: "John 13:23; 19:26; 21:7, 20",
    color: "#3B82F6",
    summary: "The intimacy Jesus had with his closest friend",
    detail: "The Gospel of John introduces a figure never named — only described as 'the disciple whom Jesus loved.' He appears at the Last Supper reclining next to Jesus (13:23), at the crucifixion where Jesus entrusts his mother to him (19:26-27), at the empty tomb where he outruns Peter (20:4), and in the epilogue where he recognizes the risen Jesus on the shore (21:7).\n\nThe theological weight of this figure is significant: Jesus, the eternal Son of God, had a closest friend. Not merely disciples in general, not the Twelve equally — but one person whose proximity to him was uniquely intimate, who was the one leaning on him at table, who stood beneath the cross.\n\nThis is not incidental. The Incarnation was total — Jesus fully entered human existence, including the human experience of having a best friend. The Word who was with God and was God (John 1:1) became flesh and had someone he wanted near him at the hardest moment of his life. This validates the human desire for a person of particular intimacy — the one friend among all friends, the one you turn to when things are worst. Jesus had one. This is not a failure of generalized love — it is the particular, focused expression of it.",
  },
  {
    id: "jerusalem",
    name: "The Jerusalem Church",
    ref: "Acts 2:42-47",
    color: "#EF4444",
    summary: "Koinonia as the friendship of the whole people of God",
    detail: "Acts 2:42-47 describes the earliest Christian community with extraordinary specificity: 'They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer. Everyone was filled with awe at the many wonders and signs performed by the apostles. All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need. Every day they continued to meet together in the temple courts. They broke bread in their homes and ate together with glad and sincere hearts, praising God and enjoying the favor of all the people.'\n\nThe Greek word translated 'fellowship' here is koinonia — a word that means participation, sharing, community, commonality. It implies not the mere proximity of people in a room but actual deep sharing: of teaching, of meals, of possessions, of prayer, of daily life.\n\nThis is friendship writ large — the koinonia of the whole people of God as a community of genuine mutual care and knowledge. The early church was not a weekly service attended by strangers. It was a daily shared life in which people knew each other's needs and met them, ate in each other's homes, and formed the kind of deep bonds that come from proximity, honesty, and mutual investment.\n\nThe consumer church — attended weekly by people who drive home to separate lives — has the theology of koinonia without the practice. The Jerusalem church model demands more: daily life shared, table opened, possessions loosened, presence given.",
  },
];

const PHILIA_CARDS = [
  {
    id: "eros",
    word: "Eros",
    language: "Greek",
    color: "#EF4444",
    translation: "Romantic / Erotic Love",
    desc: "Eros is the love that is drawn by beauty, that desires and longs to possess and be possessed. It is not merely sexual — it includes all forms of romantic enchantment, the experience of being captivated by another person. C.S. Lewis described eros as the love that makes the beloved not merely pleasant but necessary, that transforms the simple desire for pleasure into a self-forgetful devotion to a person.",
    theology: "Eros has a proper place — in marriage, directed toward one person, held within the covenant structure that can contain and consecrate it. The problem is not eros but its inflation: Western culture has made eros the supreme form of love, the thing that validates existence, the missing piece that will complete you. Lewis called this 'Venus' becoming a god rather than a creature. Eros detached from agape becomes possessive, volatile, and ultimately consuming. Marriage that is built on eros alone will not survive eros fading — which it will. But eros within agape is glorified: the desire to possess transformed into the desire to give.",
    ref: "Song of Solomon; Ephesians 5:25-33",
    quote: "\"Eros makes a man really want, not a woman, but one particular woman.\" — C.S. Lewis, The Four Loves",
  },
  {
    id: "storge",
    word: "Storge",
    language: "Greek",
    color: "#F59E0B",
    translation: "Familial Affection",
    desc: "Storge is the love of familiarity — the affection that grows up naturally between people who live together, who share a history, who belong to each other by birth or long association. It is the love between parents and children, between siblings, between the household. It requires no enchantment, no shared vision, no special affinity — it grows like a plant in soil that is simply there.",
    theology: "Lewis considered storge both the most diffuse and the most necessary of the loves. It asks no qualities of its object — you love your family not because they are admirable but because they are yours. This is both its strength and its danger. Its strength: it is patient, unconditional, not dependent on performance. Its danger: it can produce an insularity that is suspicious of outsiders, a tribal warmth that does not extend beyond the circle of familiarity. Storge needs agape to open it outward — to extend the patience it gives to family to the stranger who has not earned it by proximity.",
    ref: "Romans 12:10; Proverbs 17:17",
    quote: "\"Affection is responsible for nine-tenths of whatever solid and durable happiness there is in our lives.\" — C.S. Lewis, The Four Loves",
  },
  {
    id: "philia",
    word: "Philia",
    language: "Greek",
    color: GREEN,
    translation: "Friendship / Brotherly Love",
    desc: "Philia is the love that sees something in another and says: 'You too? I thought I was the only one.' It is the love born of shared vision, shared truth, shared pursuit. Unlike storge, it requires no proximity of birth. Unlike eros, it requires no enchantment. It is chosen — and choosing makes it distinctly human. It is the love of equals facing the same direction, companions on the same quest.",
    theology: "Lewis called philia the least necessary but most fully human of the loves — it has no survival value, and yet it is one of the things that give value to survival. Friendship is triangular: two people facing a truth together. The polis — the political community, the city — was built on philia in Aristotle's account. The church should be built on it too. Philia that is not directed by agape becomes an in-group: the friends become a clique, the shared vision becomes ideological, and the love that began by seeing beyond the self becomes a collective self-protectiveness. True philia points toward God — toward the ultimate 'You too?' that is the recognition of our shared image-bearing.",
    ref: "Proverbs 17:17; John 15:13-15; Romans 12:10",
    quote: "\"Friendship is unnecessary, like philosophy, like art... It has no survival value; rather it is one of those things which give value to survival.\" — C.S. Lewis, The Four Loves",
  },
  {
    id: "agape",
    word: "Agape",
    language: "Greek",
    color: PURPLE,
    translation: "Unconditional / Sacrificial Love",
    desc: "Agape is the distinctly Christian contribution to the philosophy of love. It is not a natural love — it does not arise spontaneously from beauty, kinship, or shared vision. It is a love that wills the good of the other regardless of what the other deserves, regardless of whether it is reciprocated, regardless of whether the beloved is attractive, familiar, or admirable. It is the love that God has for a world in rebellion.",
    theology: "Agape does not replace the natural loves — it transforms them. Eros held within agape becomes self-giving rather than possessive. Storge held within agape opens outward to the stranger. Philia held within agape includes rather than excludes. Without agape, all the natural loves eventually turn into forms of self-love — you love the beautiful, the familiar, the like-minded because they satisfy or reflect you. Agape breaks that pattern: it loves what does not satisfy, does not reflect, does not reciprocate. This is not the abolition of the natural loves but their elevation — their direction toward their true telos in God who is love (1 John 4:8).",
    ref: "John 3:16; Romans 5:8; 1 Corinthians 13; 1 John 4:8",
    quote: "\"To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken.\" — C.S. Lewis, The Four Loves",
  },
  {
    id: "chesed",
    word: "Chesed",
    language: "Hebrew",
    color: "#3B82F6",
    translation: "Covenant Loyalty / Lovingkindness",
    desc: "Chesed is one of the richest words in the Hebrew Bible — variously translated as lovingkindness, steadfast love, mercy, faithfulness, or covenant loyalty. It is not a natural feeling but a covenantal commitment. It is the word used for God's faithfulness to Israel through centuries of unfaithfulness — the love that will not quit even when it has every reason to.",
    theology: "Chesed is the Old Testament word that bridges all four of the Greek loves and adds something none of them alone contains: permanence grounded in covenant rather than feeling. Eros fades. Storge can be disrupted by estrangement. Philia can dissolve when the shared vision fractures. Agape, as the New Testament presents it, most closely approaches chesed — but chesed has the additional weight of Israel's covenantal history, the long narrative of a God who bound himself to a people and would not be unbound. Ruth shows hesed to Naomi (Ruth 1:8; 3:10). Jonathan shows hesed to David (1 Sam 20:14). And God shows hesed to all his people (Psalm 136 repeats 'his lovingkindness endures forever' 26 times). Christian friendship aspires to chesed: not just warmth, not just shared vision, but binding covenant loyalty that endures.",
    ref: "Ruth 1:8; Psalm 136; Lamentations 3:22-23; Micah 6:8",
    quote: "\"The steadfast love of the Lord never ceases; his mercies never come to an end.\" — Lamentations 3:22 (ESV)",
  },
];

const PRACTICES_ITEMS = [
  {
    id: "questions",
    title: "The Art of Asking Good Questions",
    ref: "Proverbs 20:5",
    body: "'The purposes of a person's heart are deep waters, but one who has insight draws them out' (Prov 20:5). Most conversations stay at the surface because we ask surface questions. 'How are you?' gets 'Fine.' It is not an invitation to honesty — it is a social ritual. Moving from surface to soul requires better questions. Specific questions to try: What has been hardest this week? Where are you with God right now — honestly? What are you most afraid of at the moment? What do you need from me that you haven't asked for? Is there something you haven't told anyone? These questions feel intrusive until you try them — and then you discover that most people are desperate for someone who wants to know the real answer. Proverbs 20:5 suggests that drawing out the deep waters of a person's heart requires insight and intentional effort. You have to mean it. You have to ask and then be quiet and receive what comes. Most people never experience the question that goes beneath the surface — the friend who asks it becomes irreplaceable.",
  },
  {
    id: "suffering",
    title: "Shared Suffering",
    ref: "Romans 12:15; 2 Corinthians 1:3-7",
    body: "C.S. Lewis wrote: 'Friendship is born at the moment when one person says to another, \"What! You too? I thought I was the only one.\"' The recognition of shared experience — especially shared suffering, shared failure, shared fear — is the birthplace of friendship. You can admire someone from a distance. You cannot be friends from a distance. Friendship requires a point of contact, and the deepest points of contact are usually the painful ones. Paul's instruction in Romans 12:15 — 'mourn with those who mourn' — is not merely an emotional duty; it is a description of how deep friendship is formed. The friend who shows up when you are in pain, who does not try to fix it or explain it but simply stays present with it, who says 'I have been in that place too,' is the friend you will trust with everything. 2 Corinthians 1:3-7 presents the theology behind this: God comforts us in all our troubles so that we can comfort others with the same comfort we ourselves have received. Shared suffering is not an unfortunate prerequisite for friendship — it is one of the primary mechanisms by which God forms it.",
  },
  {
    id: "confession",
    title: "Confession and Vulnerability",
    ref: "James 5:16; Galatians 6:2",
    body: "James 5:16 is one of the most direct commands in the New Testament about the structure of Christian community: 'Therefore confess your sins to each other and pray for each other so that you may be healed.' Not just to a priest, not just to God — to each other. The Protestant tradition rightly recovered direct access to God in confession, but sometimes threw out the practice of confessing to another person, which James explicitly commends. The reason is not that God cannot hear — of course he can. The reason is that the act of saying the true thing aloud to another human being who can look you in the face is qualitatively different from saying it in private prayer. It breaks the power of secrecy. It releases the shame that thrives in hiddenness. It brings another person into your actual life rather than the curated version you present. Galatians 6:2 — 'Carry each other's burdens, and in this way you will fulfill the law of Christ' — implies that there are burdens you are not meant to carry alone. Christian friendship is the structure within which those burdens can be named and shared. The friendship that never hears confession is not operating at full depth.",
  },
  {
    id: "table",
    title: "Shared Table",
    ref: "Acts 2:46; Luke 7:34",
    body: "Jesus was known as a man who ate with people — with sinners, tax collectors, Pharisees, crowds of thousands, and twelve disciples in an upper room. The table was his primary venue for deep conversation, confrontation, and community formation. Acts 2:46 describes the Jerusalem church breaking bread together in homes 'with glad and sincere hearts.' Leon Kass, in The Hungry Soul, argues that shared meals are constitutive of human community in a way that mere proximity is not — the shared table requires mutual vulnerability, the acknowledgment of need, the offering and receiving of nourishment. You cannot eat together and remain strangers, at least not if you eat together long enough. The meal that is rushed, eaten over a phone, consumed alone — this is the dietary equivalent of the loneliness epidemic. The slow meal, with real conversation and no exit strategy, is one of the most powerful friendship-forming practices available. If you want to build a friendship, invite someone to your table and eat with them repeatedly. The table is covenant-forming in a way that coffee shops and church lobbies are not.",
  },
  {
    id: "accountability",
    title: "Accountability Without Shame",
    ref: "Proverbs 27:17; Galatians 6:1-2",
    body: "Accountability has a reputation problem in Christian circles — often associated with grilling sessions, public confession of private failure, and a structure that produces shame rather than growth. Bad accountability is essentially surveillance: someone checking up on you, noting your failures, creating a record of inadequacy. Good accountability is entirely different. It is Proverbs 27:17 — 'as iron sharpens iron' — two people who care about each other's holiness, asking honest questions and receiving honest answers, in a context of grace rather than judgment. Galatians 6:1-2 provides the spirit: 'Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted. Carry each other's burdens.' Restore gently. Watch yourself. The friend who holds you accountable is not your judge — he is a fellow sinner who happens to love you enough to ask the hard question. The difference between accountability that produces shame and accountability that produces growth is: does the other person believe you are capable of change, and do they stay with you regardless of the answer?",
  },
  {
    id: "seasonal",
    title: "Seasonal Friendship",
    ref: "Ecclesiastes 3:1; Proverbs 18:24",
    body: "Not all friendship is forever, and not all friendship needs to be. Ecclesiastes 3:1 — 'There is a time for everything, and a season for every activity under the heavens' — applies to friendship too. The friend who carried you through your twenties may not be present in your forties. The friendship formed in suffering may not survive the end of the suffering. The college friend, the new-parent friend, the grief group friend — these are gifts for the season in which they arrive, and it is not a failure if the season ends. Proverbs 18:24 draws a distinction: 'One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.' Not all friendships become that. Most are real and good and seasonal. The challenge is to honor the seasonal friendships for what they are, grieve them honestly when they end, and keep the handful of covenantal friendships alive across geography, life stage, and time. Long-distance friendship requires intentionality: the scheduled call, the annual visit, the message that says 'I am still here.' Distance is not the end of friendship — neglect is. And the friend who sticks closer than a brother is worth protecting across every season at whatever cost it takes.",
  },
];

const FRIENDSHIP_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "The Theology of Friendship — Tim Keller", channel: "Gospel in Life", description: "Keller on deep friendship, the weakness of modern loneliness, and how the gospel creates the conditions for true philia." },
  { videoId: "ACZbpLkY8To", title: "Christian Friendship — What Sets It Apart", channel: "Ligonier Ministries", description: "How the New Testament reshapes friendship around shared mission, mutual accountability, and love ordered by the gospel." },
  { videoId: "fJnGJN6laqE", title: "Do We Really Have Friends? — The Crisis of Modern Loneliness", channel: "Desiring God", description: "Piper on the epidemic of loneliness in the church and what biblical community is designed to provide." },
  { videoId: "Z8lkuuhVkOI", title: "Jonathan and David — The Model of Christian Brotherhood", channel: "The Gospel Coalition", description: "What the friendship of David and Jonathan reveals about covenant love, sacrifice, and the kind of friendship the church should cultivate." },
];

export default function ChristianFriendshipTheologyPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedModel, setSelectedModel] = useState<string>("david-jonathan");
  const [expandedCard, setExpandedCard] = useState<Record<string, boolean>>({});

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCard = (key: string) => {
    setExpandedCard((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const TAB_LABELS: Record<Tab, string> = {
    theology: "A Theology of Friendship",
    models: "Biblical Models",
    philia: "The Five Loves",
    practices: "Practices",
    videos: "Videos",
  };

  const selectedModelData = BIBLICAL_MODELS.find((m) => m.id === selectedModel);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-block", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 14px", fontSize: 11, color: GREEN, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 14 }}>
            Theology
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, lineHeight: 1.2 }}>
            Christian Friendship Theology
          </h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Perichoresis, hesed, philia, and agape — the theological foundations of deep Christian friendship, from the inner life of the Trinity to the practices that form it.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 4, flexWrap: "wrap" as const }}>
          {(["theology", "models", "philia", "practices", "videos"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "9px 18px",
                borderRadius: 8,
                border: "none",
                background: tab === t ? GREEN : "transparent",
                color: tab === t ? BG : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                flex: 1,
                minWidth: 120,
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {/* Tab 1: A Theology of Friendship */}
        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
              Six theological foundations — from the eternal friendship within the Trinity to the loneliness epidemic as a spiritual crisis.
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
              {THEOLOGY_ITEMS.map((item) => {
                const isOpen = !!expanded[item.id];
                return (
                  <div
                    key={item.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${isOpen ? PURPLE : BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 20px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left" as const,
                        gap: 16,
                      }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: GREEN, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <div style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none" }}>
                        ▾
                      </div>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "16px 20px 20px",
                          color: MUTED,
                          fontSize: 14,
                          lineHeight: 1.8,
                          borderTop: `1px solid ${BORDER}`,
                        }}
                      >
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Biblical Models */}
        {tab === "models" && (
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20, alignItems: "start" }}>
            {/* Left list */}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, position: "sticky" as const, top: 20 }}>
              {BIBLICAL_MODELS.map((model) => {
                const isSelected = selectedModel === model.id;
                return (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    style={{
                      padding: "14px 16px",
                      background: isSelected ? CARD : "transparent",
                      border: `1px solid ${isSelected ? model.color : BORDER}`,
                      borderRadius: 10,
                      cursor: "pointer",
                      textAlign: "left" as const,
                    }}
                  >
                    <div style={{ color: isSelected ? model.color : TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
                      {model.name}
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.4 }}>{model.summary}</div>
                  </button>
                );
              })}
            </div>

            {/* Right detail */}
            {selectedModelData !== undefined && (
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${selectedModelData.color}`,
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                <div style={{ marginBottom: 6 }}>
                  <span
                    style={{
                      background: selectedModelData.color,
                      color: BG,
                      borderRadius: 6,
                      padding: "3px 10px",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: 0.5,
                    }}
                  >
                    {selectedModelData.ref}
                  </span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 900, color: TEXT, margin: "14px 0 8px" }}>{selectedModelData.name}</h2>
                <p style={{ color: selectedModelData.color, fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
                  {selectedModelData.summary}
                </p>
                <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, whiteSpace: "pre-line" as const }}>
                  {selectedModelData.detail}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: The Five Loves */}
        {tab === "philia" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              Four Greek words and one Hebrew word — each illuminating a different dimension of love, together forming the biblical vocabulary of Christian friendship.
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
              {PHILIA_CARDS.map((card) => {
                const isOpen = !!expandedCard[card.id];
                return (
                  <div
                    key={card.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${card.color}40`,
                      borderRadius: 14,
                      overflow: "hidden",
                    }}
                  >
                    {/* Card header — always visible */}
                    <div style={{ padding: "22px 24px", borderBottom: `1px solid ${BORDER}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span style={{ fontSize: 26, fontWeight: 900, color: card.color, fontStyle: "italic" as const }}>
                          {card.word}
                        </span>
                        <span
                          style={{
                            background: `${card.color}20`,
                            color: card.color,
                            borderRadius: 6,
                            padding: "2px 8px",
                            fontSize: 11,
                            fontWeight: 700,
                          }}
                        >
                          {card.language}
                        </span>
                      </div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{card.translation}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, maxWidth: 680 }}>{card.desc}</div>
                      <div
                        style={{
                          marginTop: 12,
                          padding: "8px 12px",
                          background: `${card.color}10`,
                          borderRadius: 8,
                          display: "inline-block",
                        }}
                      >
                        <span style={{ color: card.color, fontSize: 11, fontWeight: 700 }}>Key Passages: </span>
                        <span style={{ color: MUTED, fontSize: 11 }}>{card.ref}</span>
                      </div>
                    </div>

                    {/* Quote — always visible */}
                    <div
                      style={{
                        padding: "14px 24px",
                        borderBottom: `1px solid ${BORDER}`,
                        background: `${card.color}06`,
                      }}
                    >
                      <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic" as const, lineHeight: 1.6, margin: 0 }}>
                        {card.quote}
                      </p>
                    </div>

                    {/* Expand/collapse theology */}
                    <button
                      onClick={() => toggleCard(card.id)}
                      style={{
                        width: "100%",
                        padding: "12px 24px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: card.color,
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      <span>Theological Reflection</span>
                      <span style={{ transform: isOpen ? "rotate(180deg)" : "none" }}>▾</span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "16px 24px 22px",
                          color: MUTED,
                          fontSize: 14,
                          lineHeight: 1.8,
                          borderTop: `1px solid ${BORDER}`,
                        }}
                      >
                        {card.theology}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Practices */}
        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
              Six practices for building the kind of deep Christian friendship that the biblical models describe and the theology demands.
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
              {PRACTICES_ITEMS.map((item) => {
                const isOpen = !!expanded[item.id];
                return (
                  <div
                    key={item.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${isOpen ? GREEN : BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 20px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left" as const,
                        gap: 16,
                      }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: GREEN, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <div style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none" }}>
                        ▾
                      </div>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "16px 20px 20px",
                          color: MUTED,
                          fontSize: 14,
                          lineHeight: 1.8,
                          borderTop: `1px solid ${BORDER}`,
                        }}
                      >
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 5: Videos */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {FRIENDSHIP_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
