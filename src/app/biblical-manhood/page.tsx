"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "traps" | "voices" | "practices" | "marriage" | "formation" | "journal" | "videos";

const VOICES = [
  {
    id: "nouwen",
    name: "Henri Nouwen",
    era: "1932-1996",
    context: "Dutch Catholic priest; professor at Harvard, Yale, Daybreak Community",
    bio: "Nouwen is the unlikely patron of a certain kind of Christian manhood — one formed by vulnerability, prayer, and the willingness to be known in weakness. His 'The Return of the Prodigal Son' meditates on the father who runs, embraces, weeps, and feasts — arguing that the masculine calling is not to be the elder brother (correct but joyless) but to become the father: a man whose wounds have become a source of compassion for others. Nouwen's own struggles with loneliness and his life at L'Arche shaped a manhood that bears pain without hiding it.",
    quote: "The greatest trap in our life is not success, popularity, or power, but self-rejection. Becoming the Beloved is the great spiritual journey every man is invited to take.",
    contribution: "Nouwen gave Christian men permission to be emotionally honest — to name loneliness, failure, and spiritual hunger without shame. His work challenged the performance-based masculinity common in evangelical culture by insisting that belovedness, not achievement, is the foundation of Christian identity. His integration of the Prodigal Son's father as a masculine archetype has been enormously influential on men's ministry and spiritual direction.",
  },
  {
    id: "eldredge",
    name: "John Eldredge",
    era: "1960-present",
    context: "American author and counselor; Ransomed Heart Ministries",
    bio: "Eldredge's 'Wild at Heart' (2001) became the most widely-read book on Christian masculinity of the 21st century. His central claim: God made men with a warrior heart, an adventure, and a beauty to rescue — and the church has domesticated men into passivity by asking them to be nice rather than fierce. Whatever its critics say about its cultural assumptions, Wild at Heart opened a generation of men to a bigger vision of Christian manhood and gave them language for a longing that most had suppressed.",
    quote: "Deep in his heart, every man longs for a battle to fight, an adventure to live, and a beauty to rescue. These are not the result of the fall; they are the image of God in the heart of a man.",
    contribution: "Eldredge popularized the conversation about authentic masculine formation in the church, creating space for men to talk about desire, wound, and calling. His critique of passive, domesticated Christianity in church settings resonated with millions of men who had experienced exactly that. Whatever one thinks of his theological anthropology, he succeeded in making masculine spiritual formation a central concern for pastors and men's ministry leaders.",
  },
  {
    id: "ortlund",
    name: "Dane Ortlund",
    era: "1978-present",
    context: "Reformed pastor and author; Naperville Presbyterian Church",
    bio: "Ortlund's 'Gentle and Lowly' (2020) centers Christian manhood not on warrior archetypes or heroic achievement but on the heart of Christ — gentle and lowly in heart (Matthew 11:29). Ortlund argues that the defining characteristic of Christ's masculinity is his tender approachability: he is 'the one to whom the heavy-burdened are invited.' A man formed in Christ's image is not primarily fierce but gentle — accessible, tender, and safe. This challenges both secular toughness and religious harshness.",
    quote: "Jesus is not trigger-happy. Not harsh, reactionary, or easily exasperated. He is the most understanding person in the universe. The posture of his heart is gentle and lowly.",
    contribution: "Ortlund provided a Christological corrective to the warrior-centered models of Christian masculinity. By centering Jesus's own self-description ('gentle and lowly') as the heart of the matter, he gave men a different north star: not strength in the sense of domination or fearlessness, but strength as tenderness, approachability, and welcome. This has had wide influence on how younger evangelical men think about pastoral calling and fatherhood.",
  },
  {
    id: "sanders",
    name: "J. Oswald Sanders",
    era: "1902-1992",
    context: "New Zealand Christian leader; director of China Inland Mission",
    bio: "Sanders's 'Spiritual Leadership' (1967) is the standard text on Christian male leadership in the evangelical world. Written from the experience of leading one of the world's largest mission agencies, Sanders argued that Christian leadership is fundamentally different from secular leadership: it flows not from talent or ambition but from spiritual depth, prayer, and self-sacrifice. The leader who does not pray is not leading from the right source. Sanders took the servant-leader model seriously as a description, not just an aspiration.",
    quote: "Leadership is influence — nothing more, nothing less. The man who influences others toward Christlikeness has done the highest work that can be done.",
    contribution: "Sanders gave generations of evangelical men a clear-eyed account of what genuine Christian leadership looks like and costs. His emphasis on prayer as the foundation of leadership — not strategy or charisma — cut against the business-book models that often dominate men's ministry. His chapters on the cost of leadership (loneliness, criticism, pressure, the temptation to manage rather than lead spiritually) remain the most honest treatment of pastoral calling available.",
  },
  {
    id: "chan",
    name: "Francis Chan",
    era: "1967-present",
    context: "American pastor and author; Crazy Love, We Are Church movement",
    bio: "Chan represents a certain kind of counter-cultural Christian masculinity — the man who gave away a comfortable pastorate and successful Christian platform to go where the church was weak and the work was hard. His 'Crazy Love' challenged men to stop living safe, comfortable, domesticated Christian lives and actually follow Jesus into risk. For Chan, biblical manhood is fundamentally about obedience — doing what Jesus said even when it is costly, foolish by the world's standards, and inconvenient.",
    quote: "Stop praying for God to change your circumstances. Start asking him to change you so that you can serve faithfully in the circumstances he has already given you.",
    contribution: "Chan modeled a counter-cultural masculine faithfulness that resonated especially with younger men who were tired of Christianity as a comfortable lifestyle accessory. By actually doing what his theology demanded — giving his house away, leaving his megachurch, moving into hard places — he demonstrated that convictions are revealed by costs. His example has challenged a generation of men to ask what obedience actually requires rather than what comfort allows.",
  },
];


const THEOLOGY = [
  { title: "Made in the Image of God", verse: "Genesis 1:26-27", body: "Both male and female are made in the image of God (Genesis 1:27) — which means maleness itself is a good gift, not a social construct or a problem to be overcome. The image of God is not distributed equally between the sexes; both bear it fully. Biblical manhood does not begin with a list of behaviors but with a theological conviction: being male is a created, dignified, purposeful reality." },
  { title: "Headship as Servant Leadership", verse: "Ephesians 5:25-28", body: "Paul's language of headship (Ephesians 5:23) is immediately interpreted by the command that follows: 'Husbands, love your wives, just as Christ loved the church and gave himself up for her.' The model of male headship is cruciform. The husband does not lead by demanding but by giving; not by asserting authority but by sacrificing for the good of his wife. Headship is a weight, not a privilege." },
  { title: "The Man Who Endures", verse: "James 1:12", body: "'Blessed is the one who perseveres under trial, because, having stood the test, that person will receive the crown of life' (James 1:12). Endurance under pressure is consistently commended in Scripture. The patriarchs, the prophets, Job, Paul — the pattern of biblical manhood involves facing difficulty without running, suffering without bitterness, and persisting in faithfulness when circumstances argue for giving up." },
  { title: "Tenderness as Strength", verse: "Matthew 11:29", body: "Jesus calls himself 'gentle and humble in heart' (Matthew 11:29) using the same word (prautes) used for meekness — power under control. Tenderness and compassion were not compromises of Jesus's authority; they were expressions of it. A man who cannot weep, receive, listen, or comfort is missing a large portion of what Jesus modeled. Emotional availability is not weakness — it is strength deployed for others." },
  { title: "Fatherhood as Vocation", verse: "Psalm 103:13", body: "'As a father has compassion on his children, so the LORD has compassion on those who fear him' (Psalm 103:13). God uses fatherhood as a primary image for his own character — which means fathering faithfully is participating in the divine nature. The absent, distracted, or harsh father does not just harm his children; he distorts the image of God they see at the most formative time of their lives." },
  { title: "The Covenant God Makes with Men", verse: "Genesis 15; 17", body: "In Genesis 15 and 17, God initiates covenant with Abram — not the other way around. God passes through the pieces (Genesis 15:17); God changes the name; God sets the terms. This shapes every masculine calling: men do not author their own story but receive it from the One who calls them by name. A man's deepest identity is not self-constructed but covenant-given. This is why masculine formation cannot begin with achievement — it must begin with reception." },
  { title: "Sonship Before Mission", verse: "Romans 8:14-17", body: "Paul writes: 'For those who are led by the Spirit of God are the children of God' (Romans 8:14). Sonship — the settled assurance of belonging to the Father — precedes calling, mission, and fruitfulness. Many men lead from an orphan spirit: striving for approval, threatened by others' success, needing to prove rather than receiving. The man who knows he is a son leads from security, not scarcity. Identity in Christ is not a reward for performance; it is the foundation from which all performance flows." },
  { title: "The Priestly Role of Men", verse: "1 Peter 2:9; Exodus 19:6", body: "God declared Israel 'a kingdom of priests and a holy nation' (Exodus 19:6) — language that 1 Peter 2:9 extends to all who belong to Christ. Within the home, men are called to a priestly function: leading family in prayer and worship, interceding for their children by name, creating space for the sacred in the ordinary rhythms of the household. The priest does not merely manage logistics; he mediates between the people he loves and the God who loves them." },
];

const TRAPS = [
  { trap: "Passivity", signs: "Abdicating decisions to avoid conflict or blame. Present in body but absent in leadership, engagement, or care. Delegating the difficult to others.", response: "Passivity in men was first displayed in Eden — Adam stood by while the serpent addressed Eve (Genesis 3:6). Engagement, not control, is the cure for passivity. Show up. Make the call. Accept responsibility for your sphere." },
  { trap: "Domination", signs: "Using size, voice, position, or anger to control rather than serve. Making others small so you feel large. Confusing compliance with respect.", response: "Domination is headship corrupted. The same Ephesians 5 that calls men to lead also defines the model: cruciform giving. Power is for protection and provision, not for self-aggrandizement. Men who dominate have not understood servant leadership." },
  { trap: "Achievement Idolatry", signs: "Identity built entirely on career success, income, status, or competence. Emotionally unavailable to family because all energy goes to performance. Using busyness as identity.", response: "A man who is excellent at his job but absent at home has misunderstood what he is for. Work is a calling, not an identity. The man who is known by his children, whose wife is genuinely loved — this is a more lasting and biblical success than any career achievement." },
  { trap: "Emotional Shutdown", signs: "Describing oneself as 'not emotional' as a badge of strength. Inability to name feelings, receive care, or be moved by others' pain. Intellectualizing everything.", response: "Jesus wept (John 11:35). David wrote laments. Paul confessed his own weakness and distress repeatedly. Emotional honesty is not a feminine virtue — it is a human one. A man who cannot feel or express cannot truly lead, love, or be known." },
  { trap: "Sexual Cowardice", signs: "Consuming pornography as a private accommodation. Treating sexual ethics as a private matter that doesn't affect others. Rationalizing ongoing sin.", response: "Paul's command is direct: 'flee sexual immorality' (1 Corinthians 6:18). Not negotiate with it, accommodate it, or manage it — flee. Sexual sin is not a private hobby; it shapes character, damages relationships, and distorts the image of God in the man who pursues it." },
  { trap: "Isolation", signs: "No real male friendships. No one who knows your actual life — your marriage, your temptations, your real fears. Projecting strength while slowly collapsing inside. Avoiding depth in relationships because it requires vulnerability.", response: "'As iron sharpens iron, so one person sharpens another' (Proverbs 27:17). Isolation is not privacy — it is danger. A man without accountability is a man without mirrors. He will drift in directions he cannot see. The cure is not just friendship but the specific kind of friendship that asks and tells the truth." },
  { trap: "Entitlement", signs: "Expecting to receive service rather than give it. Treating the leadership role as a platform for preference rather than a call to sacrifice. Keeping score of what you do for others while ignoring what they give you. Becoming resentful when sacrifice is not reciprocated.", response: "Jesus said: 'The Son of Man did not come to be served, but to serve, and to give his life as a ransom for many' (Matthew 20:28). Entitlement is leadership turned inward. The man who leads in order to receive — respect, comfort, compliance — has inverted the whole model. Biblical headship is a cross, not a throne." },
  { trap: "Spiritual Cowardice", signs: "Refusing to speak truth in love to spare feelings or avoid conflict. Watching something go wrong and saying nothing. Knowing what needs to be said and choosing silence because the conversation is costly. Calling this 'grace' when it is actually fear.", response: "Paul commands: 'speaking the truth in love, we will grow to become in every respect the mature body of him who is the head' (Ephesians 4:15). Truth-telling is not harshness — it is love with backbone. The man who will not speak the hard word does not protect the people he loves; he leaves them in comfortable error. Courage is not the absence of fear; it is faithfulness in spite of it." },
];

const PRACTICES = [
  { title: "Own Your Spiritual Life", desc: "Do not outsource your spiritual formation to your wife, your pastor, or your circumstances. Read Scripture, pray, confess sin, pursue community. A man who is spiritually healthy leads from a full place rather than dragging others into his emptiness.", icon: "📖" },
  { title: "Initiate Hard Conversations", desc: "Passivity avoids; strength engages. Be the one who initiates conflict resolution, difficult feedback, and honest assessment — in your marriage, your friendships, and your parenting. Do not let resentment calcify because you avoided discomfort.", icon: "💬" },
  { title: "Pursue Accountability", desc: "Every man needs other men who know his actual life — his temptations, his failures, his fears, his real marriage. Not surface-level friendship but the kind of friendship that can say the hard thing and still be present next week.", icon: "🤝" },
  { title: "Be Physically Present", desc: "Show up. Be in the room. Attend the recital, the game, the dinner. Presence is not the only thing a man contributes, but it is foundational. Children and wives know the difference between a man who is there and a man who is nearby.", icon: "🏠" },
  { title: "Work with Excellence", desc: "Whatever your hand finds to do, do it with all your might (Ecclesiastes 9:10). Diligence in work is a spiritual discipline — it is stewardship of what God has given, service to those who depend on you, and the rejection of the entitlement that says average is acceptable.", icon: "⚒️" },
  { title: "Receive and Give Tenderness", desc: "Allow yourself to be known and to know others. Receive care without deflecting it. Express affection, gratitude, and appreciation to the people you love — in words, not just provision. Emotional availability is a choice, not a personality type.", icon: "💛" },
];

const MODELS = [
  { name: "Joseph", summary: "Integrity under injustice", desc: "Joseph is wrongfully sold, wrongfully accused, wrongfully imprisoned — and at no point does he retaliate, collapse, or abandon his integrity. He neither demands justice nor succumbs to bitterness. He rises in every context, serves faithfully in every season, and forgives extravagantly when power finally comes to him. A portrait of patient, non-retaliatory strength.", verse: "Genesis 37-50" },
  { name: "David", summary: "Passionate devotion and honest confession", desc: "David's greatness was not the absence of failure but the quality of his repentance. He sinned catastrophically — but the psalms of lament and confession he wrote show a man who could be emotionally present, spiritually honest, and genuinely broken before God. The man after God's own heart was not perfect; he was deeply feeling and unwilling to pretend otherwise.", verse: "Psalm 51" },
  { name: "Boaz", summary: "Provision, protection, and honor", desc: "Boaz notices Ruth, protects her, speaks well of her publicly, extends generosity beyond what was required, and pursues covenant commitment with appropriate urgency when the moment arrived. He is not passive, not domineering — he is a man who sees a need and acts decisively to meet it while honoring the dignity of everyone involved.", verse: "Ruth 2-4" },
  { name: "Paul", summary: "Strength through acknowledged weakness", desc: "Paul is the most theologically confident figure in the New Testament — and the one most willing to describe his weakness, fear, distress, and dependence. He wept over his churches. He described himself as the chief of sinners. His strength was not invulnerability but the genuine experience of God's grace meeting his real failures.", verse: "2 Corinthians 12:9-10" },
  { name: "Abraham", summary: "Faith without full sight", desc: "God called Abraham to leave Ur without telling him the destination — and he went (Hebrews 11:8). This is the shape of biblical male obedience: movement precedes clarity. Abraham did not wait for the full map before stepping out. He believed what God said and acted on it before he understood it. He is the father of the faithful not because he got everything right but because he kept walking when the road was invisible.", verse: "Genesis 12; Hebrews 11:8" },
  { name: "Moses", summary: "Humility and intercession", desc: "Numbers 12:3 describes Moses as 'more humble than anyone else on the face of the earth' — the meekest man alive led the most difficult people in history. After Israel's catastrophic idolatry at Sinai, Moses stood before God and offered himself in their place: 'Please forgive their sin — but if not, then blot me out of the book you have written' (Exodus 32:32). This is intercession as masculine calling: standing between the people you love and the judgment they deserve.", verse: "Numbers 12:3; Exodus 32:31-32" },
  { name: "Nehemiah", summary: "Prayer and action", desc: "Nehemiah heard that Jerusalem's wall was broken and its people in disgrace — and he wept, fasted, and prayed for days before he moved (Nehemiah 1:4). When the king asked what he wanted, he 'prayed to the God of heaven' before answering (Nehemiah 2:4) — a flash prayer in the middle of a throne-room conversation. Nehemiah never separated the spiritual and the practical. He prayed at every decision point and then picked up a sword and a trowel.", verse: "Nehemiah 1:4; 2:4" },
];

const HUSBAND_DUTIES = [
  {
    title: "Initiating Spiritual Leadership in the Home",
    verse: "Ephesians 5:25-26",
    body: "A husband is not merely present in the home — he is responsible for its spiritual direction. Paul's vision of husbandly love includes the goal that the wife would be 'holy and blameless' (Ephesians 5:27). This is not control; it is care oriented toward God. The husband who leads spiritually is the one who prays with his wife, who initiates conversations about faith, who creates an atmosphere of worship, honesty, and grace in the household. He does not wait for her to ask — he takes the initiative.",
    color: PURPLE,
  },
  {
    title: "Loving Sacrificially as Christ Loved the Church",
    verse: "Ephesians 5:25",
    body: "'Husbands, love your wives, just as Christ loved the church and gave himself up for her' (Ephesians 5:25). The measure of marital love is the cross. Christ did not love the church when she was lovely — he loved her while she was rebellious and gave himself completely. Sacrificial love is not heroic feeling; it is costly daily choice. It asks: What does my wife need from me today that will cost me something — time, comfort, preference, pride?",
    color: GREEN,
  },
  {
    title: "Understanding Your Wife",
    verse: "1 Peter 3:7",
    body: "Peter commands husbands to live with their wives 'in an understanding way' (1 Peter 3:7, ESV) — or as other translations put it, 'according to knowledge.' Understanding is not passive. It requires attentiveness, curiosity, and the willingness to listen longer than is comfortable. The husband who thinks he knows his wife after twenty years of marriage and stops learning her is in danger. She is a person, not a file. Understanding her is an ongoing act of love.",
    color: PURPLE,
  },
  {
    title: "Honoring Her as Co-heir of Grace",
    verse: "1 Peter 3:7",
    body: "The same verse that calls husbands to understand their wives also commands them to show honor, 'since she is a fellow heir of the gracious gift of life' (1 Peter 3:7). She is not subordinate in standing before God — she is equally a daughter of the King, equally an heir of every spiritual blessing. Honor is practical: it means speaking well of her, protecting her reputation, never belittling her privately or publicly, and treating her dignity as something sacred.",
    color: GREEN,
  },
  {
    title: "Nourishing and Cherishing Her",
    verse: "Ephesians 5:29",
    body: "'No one ever hated their own body, but they feed and care for their body, just as Christ does the church' (Ephesians 5:29). The words Paul uses — nourish and cherish — are words of tender, consistent attentiveness. Nourishing is feeding what is genuinely needed: emotional presence, spiritual encouragement, practical support. Cherishing is warmth — treating her as precious, not taking her for granted, holding her close. This is not a romantic gesture; it is a daily discipline.",
    color: PURPLE,
  },
  {
    title: "Leaving and Cleaving",
    verse: "Genesis 2:24",
    body: "'That is why a man leaves his father and mother and is united to his wife, and they become one flesh' (Genesis 2:24). Marriage requires a decisive reorientation of loyalty. The man who has not left — whose primary emotional or practical allegiance is still to his family of origin — has not yet truly cleaved to his wife. Leaving is not rejection; it is the necessary precondition for the new covenant the marriage represents. Cleaving means she becomes the primary human relationship in your life.",
    color: GREEN,
  },
  {
    title: "Gentleness — Never Harshness",
    verse: "Colossians 3:19",
    body: "'Husbands, love your wives and do not be harsh with them' (Colossians 3:19). Paul's negative command is just as important as his positive one. Harshness — in tone, in criticism, in the withholding of warmth — is a form of damage. A man can never strike his wife and still cause deep harm through a cold, contemptuous, or dismissive spirit. The Holy Spirit specifically names harshness as a failure mode for husbands. Gentleness in the home is not weakness; it is the evidence of strength under control.",
    color: PURPLE,
  },
  {
    title: "Faithfulness as Covenant Vow",
    verse: "Malachi 2:14-15",
    body: "Malachi describes God as a witness to the covenant of marriage (Malachi 2:14) and calls unfaithfulness a breaking of covenant, a covering of violence on one's garment. Faithfulness in marriage is not merely sexual exclusivity — it is the keeping of a vow witnessed by God. A faithful husband does not entertain alternatives mentally, does not cultivate inappropriate emotional intimacy with other women, and does not drift toward what the world offers while taking his wife for granted. The vow was made in the presence of God.",
    color: GREEN,
  },
  {
    title: "Blessing Her Through Prayer",
    verse: "1 Peter 3:7",
    body: "The end of Peter's command to husbands includes a warning: 'so that nothing will hinder your prayers' (1 Peter 3:7). The implication is that how a man treats his wife has direct bearing on the quality of his prayer life. A husband who does not honor his wife is praying with a damaged instrument. Conversely, praying for and with his wife — regularly, specifically, by name, by need — is one of the most powerful things a husband can do for his marriage and for her soul.",
    color: PURPLE,
  },
  {
    title: "Speaking Life and Encouragement",
    verse: "Proverbs 31:28-29",
    body: "The husband in Proverbs 31 praises his wife publicly: 'Many women do noble things, but you surpass them all' (Proverbs 31:29). Words have enormous power in marriage — they build or erode, affirm or diminish, heal or wound. A man who provides well and is physically present but speaks few words of gratitude, affirmation, or delight is missing a central dimension of love. She needs to hear from your mouth that you see her, that you value her, that you are grateful for her. Say it — and say it often.",
    color: GREEN,
  },
];

const FATHER_PRINCIPLES = [
  {
    title: "Bringing Children Up in the Lord",
    verse: "Ephesians 6:4",
    body: "Paul's command — 'bring them up in the training and instruction of the Lord' (Ephesians 6:4) — places the primary responsibility for children's spiritual formation with the father. Not the church, not the mother, not the Christian school. The father is the primary spiritual educator of his household. This does not mean he does it alone, but it means he does not outsource it. He reads Scripture with his children. He prays at the table and at bedtime. He explains what God is like with the same seriousness he brings to any other parenting task.",
  },
  {
    title: "Not Exasperating Your Children",
    verse: "Colossians 3:21",
    body: "'Fathers, do not embitter your children, or they will become discouraged' (Colossians 3:21). Paul gives fathers both a positive calling and a negative guardrail. The negative — do not exasperate — is a check on the very authority fathers are given. A father can use his authority in ways that crush rather than form. Constant criticism, unrealistic expectations, harsh discipline without warmth, or emotional absence — all of these embitter children. The goal of fatherly authority is not compliance; it is flourishing.",
  },
  {
    title: "Teaching Diligently in Every Moment",
    verse: "Deuteronomy 6:7",
    body: "Moses commands parents to impress God's commandments on their children 'when you sit at home and when you walk along the road, when you lie down and when you get up' (Deuteronomy 6:7). The picture is not of a formal curriculum but of a saturated life — a household where the things of God come up naturally in ordinary moments because they are constantly on the father's heart. Discipleship is more caught than taught. Children absorb what they live inside.",
  },
  {
    title: "Disciplining with Love",
    verse: "Proverbs 13:24",
    body: "'Whoever spares the rod hates their children, but the one who loves their children is careful to discipline them' (Proverbs 13:24). Biblical discipline is an act of love, not frustration. It is ordered, consistent, and followed by restoration — not an outlet for a father's anger. Discipline communicates: I take you seriously enough to hold you to a standard. I love you too much to let you become what you will become without correction. A father who never disciplines does not spare his children; he abandons them.",
  },
  {
    title: "Running to Meet the Prodigal",
    verse: "Luke 15:20",
    body: "When the returning son was still 'a great way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him' (Luke 15:20). This father — Jesus's image of God — did not wait with arms crossed. He ran. He absorbed the shame publicly. He interrupted the son's rehearsed speech with celebration. The father who has been wounded by a wayward child and still runs toward him when he returns embodies something of God himself.",
  },
  {
    title: "Blessing Your Children by Name",
    verse: "Genesis 49:28",
    body: "Throughout the Old Testament, fathers blessed their children — specific, spoken, personal words of identity, calling, and destiny over each one by name (Genesis 49:28). This is not a cultural relic; it is a spiritual practice that children still need desperately. Every child is asking: Am I seen? Am I known? Do you delight in me? A father who speaks blessing — who tells his son and daughter who they are in God's eyes, what gifts he sees, what future he believes for them — gives them something that no other person can give.",
  },
  {
    title: "Being Present — The Boaz Model",
    verse: "Ruth 2:4",
    body: "Boaz is described arriving at his field and immediately greeting his workers by name: 'The LORD be with you!' (Ruth 2:4). Presence is active, not passive. The father who is present notices — who is struggling, who is thriving, who needs encouragement, who needs correction. He knows what his children are doing because he is there. Presence is not the same as proximity. A man can be in the house and miles away. Presence requires attention, engagement, and the willingness to be genuinely interrupted by the people in your care.",
  },
  {
    title: "Fatherhood as Icon of the Heavenly Father",
    verse: "Matthew 6:9",
    body: "When Jesus taught his disciples to pray, he addressed God as 'Our Father' — a name that presupposes what a father is. Every earthly father is, whether he knows it or not, providing his children their first working model of what fatherhood means, and therefore their first intuition about God. A child whose father is harsh tends to experience God as harsh. A child whose father is absent tends to experience God as distant. Faithful fatherhood is therefore a theological act: it shapes the image of the Father in the imaginations of the next generation.",
  },
];

const FORMATION_STAGES = [
  {
    number: 1,
    title: "Broken Open",
    subtitle: "The man who has been humbled by failure, loss, or conviction",
    description: "Every man who is genuinely formed by God has a breaking point — a marriage crisis, a moral failure, a loss that unraveled the self-sufficiency he had constructed. This is not punishment; it is mercy. The man who has never been broken tends to lead from pride, manage from fear, and protect himself from the very vulnerability that formation requires. The broken man has been stripped of the false self that was making him dangerous to the people he loves.",
    characteristics: [
      "Willingness to name what went wrong without excuses",
      "Genuine grief over the harm caused to others",
      "Openness to counsel, community, and correction",
      "Awareness that self-sufficiency was the problem, not the solution",
    ],
    keyScripture: "Psalm 51:17 — 'My sacrifice, O God, is a broken spirit; a broken and contrite heart you, God, will not despise.'",
    warning: "The temptation here is false repentance — performing brokenness to regain trust and move past accountability without genuine change. Brokenness that does not lead to sustained transformation is not brokenness; it is strategy.",
  },
  {
    number: 2,
    title: "Taking Root",
    subtitle: "Establishing habits: Scripture, prayer, accountability, Sabbath",
    description: "The man who has been broken open must now build the habits that will sustain him in the long haul. This stage is often unglamorous — it is daily faithfulness in small disciplines before anyone is watching. Scripture read when you do not feel like it. Prayer when the heavens seem silent. Accountability maintained even when everything is going well. Sabbath kept even when the pressure argues that you cannot afford to stop. Formation in this stage is slow, hidden, and foundational.",
    characteristics: [
      "Daily engagement with Scripture as a discipline, not just a feeling",
      "Regular prayer that is honest rather than performative",
      "Accountability relationships with men who know his actual life",
      "Sabbath rest that demonstrates trust in God's provision",
    ],
    keyScripture: "Psalm 1:3 — 'That person is like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither.'",
    warning: "The temptation here is busyness — filling the life with Christian activity (serving, attending, producing) while avoiding the quiet, slow, unglamorous work of actual root growth. A man can be very busy and very shallow at the same time.",
  },
  {
    number: 3,
    title: "Bearing Fruit",
    subtitle: "The man whose character is now reliable — trusted at home, at work, in the church",
    description: "There is a kind of man who has been following Jesus long enough that his character has become predictable in the best way. His wife knows he will show up. His children know his yes means yes. His colleagues know he will tell the truth. His church knows he will do what he says. This is not perfection; it is reliability. The fruit-bearing man has let time and suffering and grace do their work, and the result is a character that other people can lean on.",
    characteristics: [
      "Reliability — he does what he says, consistently and without requiring applause",
      "Emotional steadiness in crisis — neither crushed nor inflated by circumstances",
      "Genuine care for others that does not calculate the return",
      "A reputation for honesty even when honesty is costly",
    ],
    keyScripture: "Galatians 5:22-23 — 'The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.'",
    warning: "The temptation here is coasting — believing that past formation is sufficient and that the habits which built the character can now be relaxed. Every man who has collapsed publicly had a long, private season of neglecting the roots. There is no arriving in this life.",
  },
  {
    number: 4,
    title: "Pouring Out",
    subtitle: "The man who mentors others, gives away what was given to him",
    description: "The final stage of masculine formation is not rest — it is reproduction. The man who has been broken, rooted, and has borne fruit is now responsible to pour into others what was poured into him. He takes on younger men. He gives his story away honestly — including the failure, the shame, the long middle, not just the redemption. He is not primarily a success to be imitated but a process to be inhabited. He creates the conditions in which other men can become what he has become.",
    characteristics: [
      "Investment in younger men as a deliberate priority, not an afterthought",
      "Willingness to be honest about failure as a gift to those coming behind",
      "Generosity with time, wisdom, and access — not gatekeeping what was given freely",
      "A long view — measuring success by what others become, not by personal prominence",
    ],
    keyScripture: "2 Timothy 2:2 — 'And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.'",
    warning: "The temptation here is mentoring as performance — gathering disciples to validate one's own significance rather than genuinely serving their formation. A mentor who needs his mentees to admire him is not mentoring; he is recruiting an audience.",
  },
];

const ACCOUNTABILITY_QUESTIONS = [
  "Have you been morally pure — in your actions, your eyes, and your imagination — since we last met?",
  "Have you been honest in all your financial dealings, your taxes, your business practices?",
  "Have you been spending quality, present time with your wife and children — not just nearby, but truly with them?",
  "Have you been reading Scripture and praying regularly, or have you been too busy for the things that sustain you?",
  "Is there any relationship in your life that is becoming emotionally or spiritually inappropriate?",
  "Have you said anything in anger, contempt, or frustration that you need to go back and repair?",
  "Is there anything you are hiding — from God, from your wife, from me — that needs to come into the light today?",
  "Are you doing the work God has called you to, or are you avoiding it? Are you overworking to avoid something else?",
  "Have you been using alcohol, entertainment, or any other substance or behavior to manage what you should be bringing to God?",
  "Have you lied to me in any of your answers to these questions?",
];

const MARRIAGE_REFLECTIONS = [
  {
    title: "The Gospel is the Grammar of Marriage",
    body: "Paul does not merely compare marriage to the gospel — he argues that marriage was designed from the beginning to display the gospel (Ephesians 5:31-32). When a husband loves his wife sacrificially, he is making the love of Christ visible. When a wife respects her husband, she is making the church's trust in Christ visible. This means that every marriage is a theological statement — it either clarifies or obscures the reality it was meant to proclaim. A husband who understands this does not think of marital faithfulness merely as a personal virtue; he understands it as a form of witness.",
  },
  {
    title: "The Danger of the Roommate Marriage",
    body: "Many Christian marriages drift — not into conflict, but into a kind of functional cohabitation. Two people manage a household, coordinate schedules, raise children, and remain technically faithful — but the marriage is no longer a real union. They have become roommates with shared history. This is not the failure of hostility but of drift — the slow accumulation of small withdrawals, avoided conversations, and investments made everywhere except toward each other. The remedy is not a marriage weekend; it is the daily practice of choosing the person you married.",
  },
  {
    title: "Fighting Well: Conflict as Formation",
    body: "Every marriage has conflict. The question is not whether a couple will disagree but whether their disagreements will form them or damage them. Conflict handled well — where both parties say what is true, listen to what is said, and pursue resolution rather than victory — builds a kind of trust that smooth agreement never can. The couple who has been through genuine difficulty and come out with their covenant intact knows something about each other's character that comfortable couples do not. The goal in conflict is not winning; it is understanding each other more honestly.",
  },
  {
    title: "Gratitude as a Marital Discipline",
    body: "One of the most reliable predictors of marital dissolution is contempt — the feeling that the other person is beneath you, fundamentally deficient, not worth your full regard. The antidote to contempt is not forced positivity but genuine gratitude: the practiced habit of noticing and naming what is good about the person you live with. A man who regularly tells his wife what he is grateful for — specifically, not generically — is not just being kind; he is protecting his own perception of her from the corrosion that familiarity and stress inevitably bring.",
  },
];

const FORMATION_RESOURCES = [
  { title: "Spiritual Leadership", author: "J. Oswald Sanders", note: "The foundational text on what Christian leadership requires — prayer, self-sacrifice, and the willingness to spend oneself for others." },
  { title: "The Ruthless Elimination of Hurry", author: "John Mark Comer", note: "On the relationship between pace of life and spiritual formation — why a hurried man cannot be a deeply formed man." },
  { title: "Disciplines of a Godly Man", author: "R. Kent Hughes", note: "A practical, unapologetic treatment of the spiritual disciplines specifically as they apply to men — prayer, Scripture, work, marriage, and purity." },
  { title: "Wild at Heart", author: "John Eldredge", note: "Whatever one thinks of its theological anthropology, it named a real hunger in men for adventure, mission, and a life that matters — and pointed them toward God as the answer." },
  { title: "The Return of the Prodigal Son", author: "Henri Nouwen", note: "A meditation on the father in Luke 15 as the model of mature masculinity — one who has moved from being the younger son (reckless) through the elder son (resentful) to the father (compassionate, costly love)." },
  { title: "Gentle and Lowly", author: "Dane Ortlund", note: "A corrective to warrior-only models of Christian masculinity — centering the heart of Christ as the north star for male formation." },
];

const PRACTICES_ADVANCED = [
  {
    title: "The Daily Office",
    desc: "A structured rhythm of prayer at set times through the day — morning, midday, evening — drawn from monastic tradition but deeply biblical (Psalm 55:17; Daniel 6:10). For men who find unstructured prayer difficult to sustain, a fixed-hour practice provides a scaffold. The practice does not need to be elaborate: a psalm, a brief prayer of confession and petition, and a moment of stillness. What matters is the regularity — the return to God as a habit of the day rather than a crisis response.",
    icon: "🕯️",
  },
  {
    title: "Scripture Memorization",
    desc: "David said: 'I have hidden your word in my heart that I might not sin against you' (Psalm 119:11). Memorized Scripture is available in the moment when you need it most — in temptation, in crisis, in the absence of a Bible. Men who have large portions of Scripture memorized carry their spiritual formation with them wherever they go. Begin with a single verse per week. After a year you will have fifty-two verses hidden in your heart. After a decade you will have a library.",
    icon: "📜",
  },
  {
    title: "Fasting as Discipline",
    desc: "Jesus assumes his disciples will fast: 'When you fast' — not if (Matthew 6:16-17). Fasting trains the appetite, loosens the grip of physical comfort on the soul, and creates space for prayer that busyness normally crowds out. For most men, regular fasting is a foreign practice — which is itself a sign of how thoroughly comfort has colonized the Christian life. Begin with one meal per month. Learn what it feels like to be hungry and take that hunger to God.",
    icon: "⚖️",
  },
  {
    title: "The Weekly Sabbath",
    desc: "God commanded a day of rest not because he needed it but because we do (Genesis 2:3; Exodus 20:8-10). The man who cannot stop working has made work his god. Sabbath is the weekly declaration that the world does not depend on you — that God holds it, that your worth is not derived from your productivity, and that rest is not laziness but obedience. The Sabbath also creates the space in which genuine relationships with family, friends, and God can develop.",
    icon: "🌅",
  },
  {
    title: "Confession to a Trusted Brother",
    desc: "'Confess your sins to each other and pray for each other so that you may be healed' (James 5:16). The command is not metaphorical. James locates healing — spiritual, and in context, physical — in the practice of spoken confession to another person. There is something that secret sin does to a man that unspoken confession cannot undo. The light that comes in when a trusted brother knows what you carry is different from the light of personal confession to God alone. Both are necessary.",
    icon: "🤲",
  },
  {
    title: "Intentional Investment in Younger Men",
    desc: "Paul explicitly commanded Titus to ensure that older men train younger men (Titus 2:2, 6). Mentoring is not a program — it is a relationship of deliberate investment. A man who has received formation is responsible to give it away. This means taking the time to meet with younger men, asking about their actual lives (not just their surface presentation), and being honest about your own formation — including the failures that shaped you. The man who mentors from behind a curated image is not mentoring.",
    icon: "👥",
  },
];

const THEOLOGY_QUESTIONS = [
  {
    q: "What does it mean to say that headship is 'cruciform'?",
    a: "It means the shape of male leadership in marriage and family is the cross — self-giving, sacrificial, costly. It is the opposite of authority as domination. When Paul says husbands should love their wives 'as Christ loved the church' (Ephesians 5:25), the immediate definition of that love is 'gave himself up for her.' The cross is not merely a metaphor for marriage; it is the governing model. A man who leads by demanding or asserting is leading by the wrong model. The right model bled.",
  },
  {
    q: "Is complementarianism the same as patriarchy?",
    a: "No — though they are often conflated. Biblical complementarianism holds that men and women bear equal dignity as image-bearers of God, are equally heirs of God's grace, and are equally called to kingdom mission — while recognizing that Scripture assigns different roles and responsibilities in marriage and (for some traditions) the church. Patriarchy in its pejorative sense refers to a system that treats women as inferior, limits their flourishing, or uses male authority for self-interest. The biblical model is not that men matter more; it is that men are responsible for more — specifically, for sacrificial, servant-hearted leadership.",
  },
  {
    q: "Can single men pursue biblical manhood?",
    a: "Absolutely — and to reduce biblical manhood to marriage and fatherhood is a significant error. Paul was single, and he offered the most comprehensive account of the character of Christian manhood in the New Testament. Jesus was single. The qualities that constitute biblical manhood — integrity, servant leadership, courage, gentleness, faithfulness — are not activated by marriage; they are displayed in every context of a man's life. A single man who serves his church, loves his community, works with excellence, and maintains sexual purity is living out biblical manhood fully.",
  },
];

const SCRIPTURE_MEMORY_VERSES = [
  { ref: "Joshua 1:9", text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." },
  { ref: "Psalm 1:1-2", text: "Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers, but whose delight is in the law of the Lord, and who meditates on his law day and night." },
  { ref: "Proverbs 27:17", text: "As iron sharpens iron, so one person sharpens another." },
  { ref: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God." },
  { ref: "Matthew 20:28", text: "The Son of Man did not come to be served, but to serve, and to give his life as a ransom for many." },
  { ref: "Ephesians 5:25", text: "Husbands, love your wives, just as Christ loved the church and gave himself up for her." },
  { ref: "Colossians 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." },
  { ref: "1 Timothy 4:8", text: "For physical training is of some value, but godliness has value for all things, holding promise for both the present life and the life to come." },
  { ref: "2 Timothy 2:22", text: "Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the Lord out of a pure heart." },
  { ref: "1 Corinthians 16:13", text: "Be on your guard; stand firm in the faith; be courageous; be strong. Do everything in love." },
];

const HUSBAND_SELF_ASSESSMENT = [
  { question: "Am I initiating spiritual conversations in my home, or waiting for someone else to lead?", category: "Leadership" },
  { question: "When did I last pray with my wife — not for her needs alone, but with her, together?", category: "Spiritual Life" },
  { question: "In our last disagreement, was I seeking to understand her or to win the argument?", category: "Communication" },
  { question: "Do my children and wife experience me as emotionally present, or is my attention divided even when I am physically there?", category: "Presence" },
  { question: "Can my wife name three things I said this week that communicated I see and value her?", category: "Affirmation" },
  { question: "Is there any bitterness or resentment I am holding that I have not brought into the open?", category: "Heart" },
  { question: "Am I working to provide and protect, or have I been passive in an area where my family needs me to engage?", category: "Initiative" },
  { question: "What is one specific way I can sacrifice something I want this week for something she needs?", category: "Sacrifice" },
];

export default function BiblicalManhoodPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_biblical-manhood_tab", "theology");
  const [selectedModel, setSelectedModel] = usePersistedState("vine_biblical-manhood_selected_model", "Joseph");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedHusband, setExpandedHusband] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_biblical-manhood_voice", "nouwen");
  const voice = VOICES.find(v => v.id === selectedVoice)!;
  const model = MODELS.find(m => m.name === selectedModel)!;

  const [bmEntries, setBmEntries] = useState<{ id: string; date: string; strength: string; struggle: string; prayer: string }[]>(() => {
    try { const s = localStorage.getItem("vine_bm_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [bmForm, setBmForm] = useState({ strength: "", struggle: "", prayer: "" });
  const [bmSaved, setBmSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_bm_entries", JSON.stringify(bmEntries)); }, [bmEntries]);
  function saveBmEntry() {
    if (!bmForm.strength.trim()) return;
    setBmEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...bmForm }, ...prev]);
    setBmForm({ strength: "", struggle: "", prayer: "" });
    setBmSaved(true); setTimeout(() => setBmSaved(false), 2000);
  }
  function deleteBmEntry(id: string) { setBmEntries(prev => prev.filter(e => e.id !== id)); };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚔️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Biblical Manhood</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto 10px" }}>
            Not a list of behaviors to perform but a character to form. Biblical manhood is servant leadership, cruciform strength, tenderness deployed for others — modeled by Jesus himself.
          </p>
          <p style={{ color: MUTED, fontSize: 14, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Explore the theology, common traps, key voices, daily practices, marriage and fatherhood, the formation pathway, a personal journal, and curated teaching videos — all organized around what Scripture actually says about being a man of God.
          </p>
          <div style={{ height: 1, background: BORDER, maxWidth: 200, margin: "20px auto 0" }} />
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "traps" as const, label: "Common Traps", icon: "⚠️" },
            { id: "voices" as const, label: "Voices", icon: "💡" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "marriage" as const, label: "Marriage & Family", icon: "🏡" },
            { id: "formation" as const, label: "Formation", icon: "🌱" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, minWidth: 80, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>FOUNDATION</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Biblical manhood is not primarily a set of behaviors to conform to — it is a character to be formed through the work of the Holy Spirit, the reading of Scripture, the practice of community, and the experience of grace. The theology below is not a standard to achieve but a reality to inhabit. Every man who belongs to Christ is already declared righteous; these pages describe what it looks like to grow into that righteousness in the particular calling of manhood.
              </p>
            </div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 16 }}>COMMON THEOLOGICAL QUESTIONS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {THEOLOGY_QUESTIONS.map((tq, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 18 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{tq.q}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{tq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 8 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 16 }}>BIBLICAL MODELS</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                {MODELS.map(m => (
                  <button type="button" key={m.name} onClick={() => setSelectedModel(m.name)}
                    style={{ padding: "7px 16px", borderRadius: 20, border: `1px solid ${selectedModel === m.name ? GREEN : BORDER}`, background: selectedModel === m.name ? `${GREEN}15` : "transparent", color: selectedModel === m.name ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                    {m.name}
                  </button>
                ))}
              </div>
              <div style={{ background: BG, borderRadius: 10, padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>{model.name}</div>
                    <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{model.summary}</div>
                  </div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}><VerseRef reference={model.verse} /></span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{model.desc}</p>
              </div>
            </div>

            <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 24, marginTop: 16 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 14 }}>A WORD OF CAUTION ABOUT MODELS</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
                Every man listed here failed. Joseph had a period of pride before his suffering. David committed adultery and murder. Boaz was operating in a culture of slavery. Paul confessed to doing the things he hated. Abraham lied about his wife twice to protect himself. Moses struck the rock in disobedience and was barred from the promised land. Nehemiah's prayer for vengeance on his enemies sits uneasily alongside his other prayers.
              </p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 0 }}>
                These men are not offered as perfect patterns to imitate in every detail. They are offered as evidence that God works through broken, imperfect, complicated human beings — and that what he looks for is not flawless performance but persistent faithfulness, genuine repentance, and a heart that returns to him when it falls. The pattern of biblical manhood is not perfection; it is the trajectory of a man who keeps being formed.
              </p>
            </div>
          </div>
        )}

        {activeTab === "traps" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: "0 0 16px 0" }}>
                These are the distortions of biblical manhood — not opposites, but corruptions. Each is a good impulse (strength, leadership, work) taken in a direction that harms rather than serves.
              </p>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>HOW TO USE THIS TAB</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 8 }}>
                  Do not read this list as a checklist of other men's failures. Read it as a mirror. Every trap here is a temptation available to every man. Expand each one and ask: Where do I see this pattern operating in my own life — even partially? The man who can see his own traps is in a position to escape them. The man who sees only the traps of others is already in the one he cannot name.
                </p>
                <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>
                  Each trap below shows signs to look for and a scriptural response. The signs are descriptive, not diagnostic — presence of a sign does not mean the trap is fully operative, but it is worth taking seriously.
                </p>
              </div>
            </div>
            {TRAPS.map((c, i) => (
              <div role="button" tabIndex={0} key={i} style={{ marginBottom: 10 }}>
                <button type="button" onClick={() => setExpanded(expanded === c.trap ? null : c.trap)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === c.trap ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{c.trap}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === c.trap ? "−" : "+"}</span>
                </button>
                {expanded === c.trap && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                      <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 6 }}>SIGNS</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.signs}</p>
                    </div>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 8 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 14 }}>WHAT TO DO WITH THIS LIST</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
                {[
                  { step: "1. Name it", desc: "The trap you can name has lost half its power. Denial is the air that traps breathe. Name the pattern you see in yourself — to God first, then to a trusted person." },
                  { step: "2. Confess it", desc: "Confession is not self-condemnation; it is agreement with God about reality. 'If we confess our sins, he is faithful and just and will forgive us our sins' (1 John 1:9). Confession ends the hiding." },
                  { step: "3. Get accountable", desc: "Tell another man. Not a generic 'pray for me' — the specific pattern, the specific behavior, the specific temptation. Accountability that lacks specificity is not accountability." },
                  { step: "4. Practice the opposite", desc: "The cure for passivity is initiative. The cure for domination is service. The cure for achievement idolatry is deliberate presence. Virtues are built by practicing the opposing action." },
                ].map((item, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{item.step}</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, padding: "0 4px 10px", letterSpacing: "0.06em" }}>TEACHERS</div>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", background: selectedVoice === v.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedVoice === v.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{voice.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voice.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{voice.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
                </div>
                <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>A WORD OF CAUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                    Every voice in this list has blind spots and critics. Read them carefully, weigh their claims against Scripture, and resist the tendency to accept any one teacher's framework as the complete account of biblical manhood. The church has benefited from their work; the church has also been harmed when their frameworks were applied without critical engagement. Use these voices to open questions, not to close them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Biblical manhood is formed through practice — repeated choices that, over time, reshape character. These {PRACTICES.length} core practices address the most common gaps in Christian men.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 32 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 8 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Advanced Disciplines</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                For men who want to go deeper — spiritual disciplines that have formed men of God across centuries. These are not achievements to unlock but practices to inhabit.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
                {PRACTICES_ADVANCED.map((p, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 20 }}>{p.icon}</span>
                      <div style={{ color: PURPLE, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                    </div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 12, padding: 20, marginTop: 16 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>ON BEGINNING</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 0 }}>
                The goal is not to practice all of these at once — that is not formation, it is performance. Choose one practice that addresses your most significant gap. Do it for thirty days. Do not add a second until the first has become a groove rather than an effort. Formation is slow by design: God is not interested in men who sprint for thirty days and collapse; he is interested in men who walk faithfully for forty years. Begin with the practice that you have been avoiding most consistently — that is almost certainly the one you most need.
              </p>
            </div>
          </div>
        )}

        {activeTab === "marriage" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Marriage & Family</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Scripture does not leave a Christian husband or father guessing. From Genesis through the New Testament, God is specific about what he calls men to in the home — and the standard is high. The measure is always cruciform: as Christ loved the church.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${PURPLE}20`, border: `2px solid ${PURPLE}`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>H</div>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 20, margin: 0 }}>The Husband's Calling</h3>
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                Ten duties drawn from Scripture — each one a dimension of what it means to love your wife as Christ loved the church. Expand each to read the full teaching.
              </p>
              {HUSBAND_DUTIES.map((item, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <button
                    type="button"
                    onClick={() => setExpandedHusband(expandedHusband === item.title ? null : item.title)}
                    style={{
                      width: "100%",
                      background: CARD,
                      border: `1px solid ${expandedHusband === item.title ? item.color + "60" : BORDER}`,
                      borderRadius: expandedHusband === item.title ? "10px 10px 0 0" : 10,
                      padding: "14px 18px",
                      color: TEXT,
                      fontWeight: 700,
                      fontSize: 14,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: item.color, fontSize: 13, fontWeight: 900, minWidth: 22 }}>{i + 1}.</span>
                      <span>{item.title}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                      <span style={{ background: `${item.color}20`, color: item.color, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{item.verse}</span>
                      <span style={{ color: MUTED }}>{expandedHusband === item.title ? "−" : "+"}</span>
                    </div>
                  </button>
                  {expandedHusband === item.title && (
                    <div style={{ background: BG, border: `1px solid ${item.color}30`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 20 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${GREEN}20`, border: `2px solid ${GREEN}`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>F</div>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 20, margin: 0 }}>The Father's Calling</h3>
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                Eight principles from Scripture on what it means to father well — not a performance metric but a vision of what God calls fathers to be in the lives of their children.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                {FATHER_PRINCIPLES.map((fp, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 12, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                      <div>
                        <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 2 }}>{fp.title}</div>
                        <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{fp.verse}</span>
                      </div>
                    </div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{fp.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${PURPLE}20`, border: `2px solid ${PURPLE}`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>M</div>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 20, margin: 0 }}>On Marriage</h3>
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                Reflections on the deeper theology and practice of Christian marriage — what makes it different, what threatens it, and what sustains it.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {MARRIAGE_REFLECTIONS.map((mr, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                    <h4 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{mr.title}</h4>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{mr.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${GREEN}20`, border: `2px solid ${GREEN}`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>?</div>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 20, margin: 0 }}>Husband Self-Assessment</h3>
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                These are not rhetorical questions. Take them seriously. Answer them honestly — first to yourself, then to your wife if you have the courage. They reveal where the gaps are.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {HUSBAND_SELF_ASSESSMENT.map((item, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ background: `${PURPLE}15`, color: PURPLE, fontWeight: 700, fontSize: 11, padding: "3px 9px", borderRadius: 6, flexShrink: 0, alignSelf: "flex-start", marginTop: 2 }}>{item.category}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.question}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 22, marginTop: 24 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>A PRAYER FOR HUSBANDS AND FATHERS</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0, fontStyle: "italic" }}>
                Lord, make me the kind of husband who initiates love and never uses leadership as a cover for selfishness. Make me the kind of father whose presence is a gift to my children — not a burden, not an absence, not a performance. Where I have been harsh, give me the courage to go back and repair it. Where I have been passive, give me the grace to show up. Make my marriage a witness to what you and your people look like — costly love, deep faithfulness, generous grace. I cannot do this from the outside in. Change me from the inside out, and make me, by slow and steady grace, the man you called me to be.
              </p>
            </div>
          </div>
        )}

        {activeTab === "formation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Character Formation</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Biblical manhood is not achieved by a decision — it is formed through a process that often includes suffering, failure, and long seasons of quiet faithfulness. These four stages describe a pathway many men walk, though rarely in a clean sequence. Most men cycle through them more than once.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 20 }}>The Formation Pathway</h3>
              <div style={{ position: "relative" }}>
                {FORMATION_STAGES.map((stage, i) => (
                  <div key={i} style={{ display: "flex", gap: 20, marginBottom: 8 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: `${PURPLE}20`,
                        border: `2px solid ${PURPLE}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: PURPLE, fontWeight: 900, fontSize: 18,
                        flexShrink: 0,
                      }}>
                        {stage.number}
                      </div>
                      {i < FORMATION_STAGES.length - 1 && (
                        <div style={{ width: 2, flex: 1, minHeight: 24, background: `${PURPLE}30`, margin: "4px 0" }} />
                      )}
                    </div>
                    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, flex: 1, marginBottom: i < FORMATION_STAGES.length - 1 ? 0 : 0 }}>
                      <div style={{ marginBottom: 10 }}>
                        <h4 style={{ color: PURPLE, fontWeight: 900, fontSize: 18, margin: "0 0 4px 0" }}>{stage.title}</h4>
                        <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 12 }}>{stage.subtitle}</div>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{stage.description}</p>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                        <div style={{ background: BG, borderRadius: 10, padding: 14 }}>
                          <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTICS</div>
                          <ul style={{ margin: 0, paddingLeft: 16, listStyleType: "disc" }}>
                            {stage.characteristics.map((c, ci) => (
                              <li key={ci} style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 4 }}>{c}</li>
                            ))}
                          </ul>
                        </div>
                        <div style={{ background: BG, borderRadius: 10, padding: 14 }}>
                          <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 8 }}>WARNING</div>
                          <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{stage.warning}</p>
                        </div>
                      </div>
                      <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                        <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>KEY SCRIPTURE</div>
                        <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>{stage.keyScripture}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Accountability Questions</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                These are the questions that men who are serious about formation ask each other regularly. They are uncomfortable by design — accountability that costs nothing is worth nothing. Use these with a trusted friend or small group of men.
              </p>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 16 }}>TEN QUESTIONS FOR HONEST ACCOUNTABILITY</div>
                <ol style={{ margin: 0, paddingLeft: 20 }}>
                  {ACCOUNTABILITY_QUESTIONS.map((q, i) => (
                    <li key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12, paddingLeft: 6 }}>
                      {q}
                    </li>
                  ))}
                </ol>
                <div style={{ marginTop: 20, background: BG, borderRadius: 10, padding: 16 }}>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    Note: The final question — whether you have been honest in the others — was made famous by accountability groups that recognized that men are capable of passing through all nine prior questions while technically answering truthfully but not fully honestly. The tenth question invites a second pass at the whole list.
                  </p>
                </div>
              </div>

              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Recommended Reading</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                These books have shaped the conversation on masculine formation in the church. They disagree with each other on points — read them all, think carefully, and let Scripture judge what each one gets right.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                {FORMATION_RESOURCES.map((r, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{r.title}</div>
                    <div style={{ color: PURPLE, fontWeight: 600, fontSize: 13, marginBottom: 10 }}>{r.author}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 36 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Scripture Memory for Formation</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                Ten verses every man should have memorized — not as a checklist but as a supply of truth to draw on in moments of temptation, pressure, and decision.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {SCRIPTURE_MEMORY_VERSES.map((v, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ background: `${PURPLE}20`, color: PURPLE, fontWeight: 900, fontSize: 12, padding: "4px 10px", borderRadius: 8, flexShrink: 0, alignSelf: "flex-start", marginTop: 2 }}>{v.ref}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{v.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 12, padding: 22, marginTop: 24 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 12 }}>A NOTE ON THE LONG GAME</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
                Formation is measured in decades, not days. The habits you build in your twenties shape the man you will be in your fifties. The disciplines you neglect in your thirties become the regrets of your sixties. Conversely, the man who begins to take formation seriously at fifty is not too late — he is simply beginning from where he is, which is the only place any man ever begins.
              </p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                God is not in a hurry. He formed Moses over eighty years before the burning bush. He formed Joseph through a prison before a palace. He formed David through years of hiding before a throne. The long game is his preferred method. Trust the process. Keep showing up. Let time and grace do what only time and grace can do.
              </p>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Biblical Manhood Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>Reflect on where you are growing as a man of God — strengths to cultivate, struggles to face, and prayers for growth.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
                {[
                  { prompt: "Where is God currently at work in you?", icon: "🌱" },
                  { prompt: "What is the hardest thing about being faithful right now?", icon: "⚔️" },
                  { prompt: "Who are you pouring into, and who is pouring into you?", icon: "🤝" },
                  { prompt: "What does obedience look like for you today?", icon: "📖" },
                ].map((tip, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 8, padding: 12, display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>{tip.icon}</span>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{tip.prompt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>Strength I am growing in</label>
                <textarea value={bmForm.strength} onChange={e => setBmForm(f => ({ ...f, strength: e.target.value }))} rows={2} placeholder="Courage, servant leadership, integrity, self-control..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>Struggle I am honest about</label>
                <textarea value={bmForm.struggle} onChange={e => setBmForm(f => ({ ...f, struggle: e.target.value }))} rows={2} placeholder="Where are you falling short of what God calls men to?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>My prayer for this season</label>
                <textarea value={bmForm.prayer} onChange={e => setBmForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Ask God to make you the man he has called you to be..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveBmEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {bmSaved ? "Saved!" : "Save Entry"}
              </button>
            </div>
            {bmEntries.length > 0 && (
              <div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 16, marginBottom: 14 }}>My Entries ({bmEntries.length})</h3>
                {bmEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteBmEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.strength && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 6 }}><strong style={{ color: GREEN }}>Growing:</strong> {e.strength}</p>}
                    {e.struggle && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 6 }}><strong style={{ color: PURPLE }}>Struggling:</strong> {e.struggle}</p>}
                    {e.prayer && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}><strong style={{ color: MUTED }}>Prayer:</strong> {e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
            {bmEntries.length === 0 && (
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, textAlign: "center" }}>
                <div style={{ color: MUTED, fontSize: 32, marginBottom: 10 }}>📓</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>No entries yet. Use the form above to record where God is at work in you. Your entries are stored locally on this device and are private.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on biblical manhood — what Scripture says about being a godly man, husband, and leader.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "npEDqbE6faE", title: "John Piper and Darrin Patrick on Biblical Manhood (Part 1)", channel: "Desiring God", description: "Piper and Patrick discuss what genuine biblical masculinity looks like — servant leadership, courage, and sacrificial love grounded in the gospel." },
                  { videoId: "IvSuGyJQ6oM", title: "John Piper and Darrin Patrick on Biblical Manhood (Part 2)", channel: "Desiring God", description: "The conversation continues — addressing the specific failures men face and what it looks like to recover a biblical vision of manhood in the local church." },
                  { videoId: "sIaT8Jl2zpI", title: "The Value of Masculine Ministry", channel: "John Piper / Desiring God", description: "Piper's address from the 2012 Pastors Conference on God, manhood, and ministry — what it means for men to lead the church with strength and gentleness." },
                  { videoId: "3Dv4-n6OYGI", title: "Pursuing Biblical Manhood and Womanhood, Part 1", channel: "John Piper", description: "Piper presents a theological framework for biblical complementarity — what Scripture teaches about the distinct callings of men and women." },
                  { videoId: "52ZXFH1wzc8", title: "A Man After God's Own Heart: David's Psalms", channel: "Desiring God", description: "How David's failures, repentance, and psalms of confession make him the most honest model of what God-shaped manhood looks like in real life." },
                  { videoId: "zMbUXpFiFeo", title: "What Does the Bible Say About Spiritual Gifts and Calling?", channel: "The Gospel Coalition", description: "Understanding calling as it applies to men: how to discern, pursue, and steward the particular calling God has placed on your life." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginTop: 8 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>HOW TO WATCH THESE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, marginBottom: 8 }}>
                  Do not watch these as entertainment. Watch them with a notebook. Pause when something strikes you. Write down the idea, the verse, or the challenge. Return to the sections that confronted you most directly — those are the ones you most need. Share them with a friend and discuss what you heard.
                </p>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                  The goal is not to consume more content; it is to be changed by encountering truth. A man who has watched one sermon carefully and acted on it is further along than one who has consumed fifty hours of teaching and remained unchanged.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
