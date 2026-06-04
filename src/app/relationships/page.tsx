"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const GUIDANCE = [
  {
    id: "foundation",
    title: "Biblical Foundation for Relationships",
    icon: "📖",
    summary: "What Scripture actually says about love, marriage, and friendship.",
    content: `Love is not primarily a feeling—it is a commitment backed by action. 1 Corinthians 13 strips love of every romantic cliché and replaces it with patience, kindness, and the refusal to keep score. This is the love Christ demonstrated on the cross, and it's the love he calls married couples to practice daily.

Ephesians 5:21–33 is the most complete passage on marriage in the New Testament. The centerpiece is mutual submission (verse 21), followed by two distinct callings: husbands to love sacrificially as Christ loved the church, wives to respect and trust their husbands' leadership. Both are impossibly hard without the Holy Spirit.

Ruth and Boaz offer the most beautiful love story in Scripture—one built on loyalty (hesed), character, and blessing others. Boaz noticed Ruth not first for her beauty but for her faithfulness to Naomi. The Song of Solomon celebrates romantic love as a gift from God, neither to be suppressed nor idolized.`,
    verses: ["1 Corinthians 13:4–7", "Ephesians 5:25–33", "Ruth 2:10–12"],
  },
  {
    id: "dating",
    title: "Dating with Purpose",
    icon: "🎯",
    summary: "What is dating for, and how do you do it with integrity?",
    content: `The word "dating" doesn't appear in the Bible—the concept is modern. What Scripture does address is marriage as covenant, sexual purity, and treating others with honor as fellow image-bearers. The question for dating isn't "how far can we go?" but "how can I serve this person and steward this relationship well?"

Dating with purpose means knowing what you're evaluating: Can I build a life with this person? Do we share core values, faith convictions, and a direction? Are we growing together toward Christ or pulling each other away? The goal is not to fall in love—it's to find out whether you should commit.

Practical questions worth asking early: Does this person take their faith seriously, not just nominally? How do they treat people who can do nothing for them? How do they handle conflict, money, and disappointment? These reveal character better than chemistry.`,
    verses: ["Proverbs 31:10–11", "2 Corinthians 6:14", "1 Thessalonians 4:3–5"],
  },
  {
    id: "boundaries",
    title: "Emotional & Physical Boundaries",
    icon: "🛡️",
    summary: "Boundaries aren't restrictions — they're protection for both people.",
    content: `Physical boundaries in a relationship aren't about following a list of rules—they're about honoring the person you're with as someone who belongs to God first. Every act of physical intimacy bonds two people emotionally (1 Cor 6:16-17). Moving too fast physically creates artificial closeness that obscures whether you actually like the person.

Emotional boundaries matter as much as physical ones. Sharing your deepest wounds, fears, and inner life creates emotional intimacy that can feel like love before real commitment exists. Emotional enmeshment without covenant creates dependency and eventual devastation when the relationship ends.

Setting boundaries requires direct, honest conversation—not hints. "I've decided not to be alone at your place after 10pm" is kind and clear. The response tells you a lot about the person: do they respect your convictions, or do they push?`,
    verses: ["1 Corinthians 6:18–20", "1 Thessalonians 4:3–5", "Hebrews 13:4"],
  },
  {
    id: "flags",
    title: "Green Flags & Red Flags",
    icon: "🚩",
    summary: "What to watch for—the good and the warning signs.",
    content: `Green flags: They pursue you without being controlling. They speak honestly but kindly. They honor commitments—to God, to friends, to you. They take responsibility for their failures rather than deflecting blame. They talk about the future with maturity. Their faith is lived, not performed. They are equally kind to the server as to the CEO.

Red flags: They isolate you from friends and family, even subtly. They minimize your feelings or tell you you're "too sensitive." They have never been wrong about anything. They pursue you intensely in the beginning, then grow cold and hot alternately. They talk about exes with contempt rather than growth. Physical affection escalates faster than emotional maturity.

Pay attention to patterns, not moments. Everyone has a bad day. Watch what happens over months, in stress, in disappointment. Character is revealed in crisis, not in the honeymoon phase.`,
    verses: ["Proverbs 31:10", "1 Corinthians 13:5", "Luke 16:10"],
  },
  {
    id: "singleness",
    title: "Singleness as Vocation",
    icon: "✨",
    summary: "Paul's high view of singleness — and how to embrace it.",
    content: `Paul writes in 1 Corinthians 7 that singleness is not Plan B—it is a gift that enables undivided devotion to God. He is not condemning marriage (he calls it holy), but he is rescuing singleness from the cultural shame it carries. The single person is free to pray without distraction, serve without compromise, and love without the necessary divisions of domestic life.

The idol of marriage is one of the church's quiet heresies—the subtle message that adult life begins at the altar, that you're incomplete until partnered, that your worth is measured by whether someone chose you. This is not the gospel. You are fully beloved, fully whole, fully purposed in Christ right now.

Singleness requires community to be sustainable. The early church—Acts 2 onward—was built around households and communities of shared life. You don't need a spouse; you need people who show up, share meals, and call you out and call you forward.`,
    verses: ["1 Corinthians 7:32–35", "Matthew 19:12", "Psalm 68:6"],
  },
  {
    id: "conflict",
    title: "Conflict Resolution",
    icon: "🤝",
    summary: "Fighting fair, making peace, and the Matthew 18 process.",
    content: `Matthew 18:15–17 gives us the conflict resolution process Jesus designed: go directly to the person (not their friends, not social media), listen to understand rather than to respond, seek restoration not victory. This applies in marriage, friendship, and church.

Fighting fair means staying in the present: no dragging in unrelated grievances from three years ago. It means regulating your own nervous system—a flooded brain cannot think, reason, or feel empathy. It's okay to call a timeout ("I need 20 minutes") if you're escalating, as long as you actually return.

Forgiveness and reconciliation are not the same thing. Forgiveness is a decision you make alone—releasing the right to collect the debt. Reconciliation requires two willing people and rebuilt trust over time. You can forgive someone and still set boundaries. You can forgive someone and still grieve what was broken.`,
    verses: ["Matthew 18:15–17", "Ephesians 4:26–27", "Colossians 3:13"],
  },
];

const ARTICLES = [
  { id: "a1", title: "Is it okay to date a non-Christian?", summary: "An honest look at 2 Corinthians 6:14 in context, with practical wisdom rather than condemnation.", readTime: "5 min", category: "Dating", body: `2 Corinthians 6:14 ("Do not be unequally yoked") is often cited as an absolute prohibition on dating non-Christians. In its context, Paul is warning the Corinthian church about business and social partnerships with pagans that would compromise their witness. The principle is clear: deep life partnership with someone whose values, ultimate authority, and direction in life differ fundamentally will create ongoing conflict and pull both people in opposite directions.\n\nThis is not a statement about worth. It is a statement about math: two people trying to build one life need to be building toward the same destination. If faith is central to your identity—shaping your finances, parenting approach, Sundays, sexual ethics, and ultimate hope—then partnering with someone for whom none of that matters will produce constant friction. The question isn't "Is he a good person?" but "Can we build one life together?"` },
  { id: "a2", title: "When physical attraction fades: what then?", summary: "What sustains a marriage when butterflies leave and real love begins.", readTime: "4 min", category: "Marriage", body: `Neurochemical infatuation—the intoxicating early phase of romantic love—lasts on average 12–24 months. After that, couples either develop deeper attachment or begin to feel like something is wrong. The expectation that marriage should permanently feel like the first six months is one of the great lies Hollywood has sold us.\n\nThe transition from eros (passionate love) to agape (committed covenant love) is not a loss—it's maturity. The intimacy that comes from being fully known by another person over decades—through failure, grief, health crisis, boring Tuesday nights, and the accumulation of ordinary faithfulness—is more beautiful and more rare than any romantic high. Choose each other daily, not because you feel it, but because you decided.` },
  { id: "a3", title: "How to break up in a God-honoring way", summary: "Ending a relationship with truth, kindness, and care for the other person.", readTime: "4 min", category: "Dating", body: `Breaking up in a God-honoring way means three things: clarity, compassion, and closure. Clarity means saying what is true, directly—"I don't see a future for us" rather than fading out or manufacturing a fight to force the other person to end it. Compassion means caring about how the news lands on them, not just relieving your own discomfort.\n\nText breakups are almost never appropriate for relationships of any depth. The other person deserves the dignity of a real conversation. You don't owe them an extensive explanation, but you do owe them honesty and respect. After the conversation, firm but kind boundaries around contact help both people heal rather than prolonging the pain through a slow exit.` },
  { id: "a4", title: "Rebuilding trust after betrayal", summary: "What the path back actually looks like — and whether it's possible.", readTime: "6 min", category: "Healing", body: `Trust, once broken, cannot be demanded back—it can only be rebuilt slowly by consistent, observable action over time. Whether it's emotional betrayal, infidelity, or a pattern of dishonesty, the betrayed person needs to see changed behavior, not just hear better promises. The betrayer cannot set the timeline for the betrayed person's healing.\n\nRebuild trust by over-communicating. Transparency that would have felt excessive before is necessary now. The betrayed person will need access, accountability, and repeated reassurance. This is exhausting and humbling for the betrayer—which is exactly why so few relationships survive betrayal. Recovery is possible, but only when both people want it and both people work.` },
  { id: "a5", title: "Sex before marriage: the honest conversation", summary: "What Scripture says, why it matters, and how to navigate the conversation.", readTime: "5 min", category: "Boundaries", body: `Scripture is unambiguous that sex belongs within the covenant of marriage (1 Thessalonians 4:3–5, Hebrews 13:4, 1 Corinthians 6:18–20). The reasons are not arbitrary rules but reflect how sexual union bonds two people at the deepest level. Repeated sexual bonding and separation is emotionally costly in ways that aren't always visible in the moment.\n\nThis conversation needs to happen early in a dating relationship—not on a couch at midnight. Stating your convictions clearly at the start respects both yourself and the other person. If they don't share your convictions, it's important information. If they do, you've established shared ground that will require intentional support structures (avoiding certain situations, building in accountability, having honest conversations about temptation without shame).` },
  { id: "a6", title: "How to love your spouse when you don't like them", summary: "The difference between love as emotion and love as decision.", readTime: "4 min", category: "Marriage", body: `Every long marriage has seasons where one or both spouses genuinely don't like each other. Resentment accumulates. Habits grate. The person you chose seems like a different person than the one who stands before you now. This is not evidence that you married the wrong person. It's evidence that you're human.\n\nIn those seasons, love is not a feeling to be summoned—it's a decision to act. Serve even when you don't feel like it. Speak well of your spouse to others even when you're angry at home. Pray for them, which makes it remarkably hard to stay bitter. Marriage counseling is not a sign that something has gone wrong; it's a sign that you're taking seriously what you promised.` },
  { id: "a7", title: "Navigating parents who disapprove of your relationship", summary: "Honoring father and mother while following your own convictions.", readTime: "5 min", category: "Dating", body: `Parental disapproval is one of the most common stressors in dating relationships, and one of the hardest to navigate. Scripture commands honoring parents (Exodus 20:12) while also recognizing that leaving and cleaving (Genesis 2:24) is the design for marriage. These are not contradictory—they describe a transition of primary loyalty.\n\nIf your parents' concern is faith-based (they don't share your partner's convictions), listen carefully. They may be seeing something clearly. If their concern is cultural preference or control, that's different. In both cases, seek wise counsel outside the situation—a pastor, an older married couple—who can offer perspective without personal stake. Don't triangulate your partner by treating every conversation with parents as a negotiation.` },
  { id: "a8", title: "Emotional intimacy: building real connection", summary: "Going beyond surface-level relating to genuine knowing and being known.", readTime: "5 min", category: "Singleness", body: `Most people mistake proximity for intimacy—being around each other a lot without actually knowing each other deeply. Emotional intimacy requires vulnerability: sharing fears, failures, and dreams, not just preferences and hobbies. It requires the willingness to be seen—and to let the other person's seeing of you change how you see yourself.\n\nEmotional intimacy is built in small moments: the question asked without agenda, the silence that doesn't need to be filled, the choice to return to a hard conversation rather than dropping it. It requires emotional regulation—you can't be emotionally intimate when you're flooded or defensive. Practice asking good questions and then truly listening to the answers without rehearsing your response.` },
  { id: "a9", title: "Forgiveness in marriage: what it actually looks like", summary: "Not a feeling but a practice — releasing the debt without condoning the wrong.", readTime: "4 min", category: "Marriage", body: `Forgiveness in marriage is not a one-time event—it is a daily practice. Small offenses accumulate into resentment if they're not regularly processed and released. The command to forgive "seventy times seven" (Matthew 18:22) is not hyperbole; it's a description of married life.\n\nForgiveness means releasing the right to punish. It does not mean pretending the hurt didn't happen. It does not mean automatic trust—trust is rebuilt by action. It does not mean there are no consequences for harmful behavior. Forgiveness is an act of your will toward God ("I release this debt as You have released mine") that may need to be renewed many times before the emotion follows.` },
  { id: "a10", title: "Online dating as a Christian: tips and cautions", summary: "Navigating apps with wisdom, honesty, and appropriate expectations.", readTime: "4 min", category: "Dating", body: `Online dating has normalized a kind of hyper-evaluation of people—scrolling through humans like products. This shapes us in subtle ways. Combat it by leading with curiosity rather than judgment, asking questions before drawing conclusions, and giving people space to be more than their profile.\n\nBe honest on your profile about your faith. Don't soft-pedal it hoping to have the conversation later—you want someone who's interested in the real you. Move to video call or in-person faster than feels comfortable; text chemistry and real chemistry are very different things. Tell someone in your life when you're meeting someone new. Meet in public. And remember: your worth is not your match rate.` },
];

const STORIES = [
  { id: "s1", couple: "David & Amara", title: "We Almost Gave Up", type: "couple", story: `Three years into our marriage, David took a job in Dubai while I stayed in Lagos with our daughter. We planned for six months—it stretched to eighteen. The distance revealed every crack in our foundation: we had built our relationship on proximity and chemistry, not on deep knowledge of each other.\n\nWe nearly divorced during month fourteen. We were on the phone every day but growing apart. A counselor we found online—connecting across three time zones—helped us see that we had stopped pursuing each other long before the distance. We had settled into parallel lives under the same roof.\n\nWhat saved us was a decision: to treat every call as a date, to be honest about our loneliness and fear, to pray together out loud even when it felt awkward. David flew home for our anniversary—unannounced. I opened the door and fell apart. We've been inseparable since. The distance taught us what proximity had hidden: we could choose each other, actively, every single day.`, verse: "Love bears all things, believes all things, hopes all things, endures all things.", verseRef: "1 Corinthians 13:7" },
  { id: "s2", couple: "James & Sarah", title: "From Friends to Forever", type: "couple", story: `We were best friends for four years before we were anything else. People assumed we were dating from year one, and we spent a lot of energy insisting we weren't. Somewhere in year three, I (Sarah) realized I was screening every person I dated against James. That was inconvenient information.\n\nI told him in a letter—partly because I'm a writer, and partly because I was terrified. He took three days to respond, which was the longest three days of my life. His response was a voice note, fifteen minutes long, beginning with, "I've been thinking the same thing since the missions trip in 2023."\n\nWhat makes our marriage different, I think, is that we started as friends who chose each other. We don't have the early mystery of strangers falling in love. We have something harder to find: the knowledge that this person sees us fully and stays anyway.`, verse: "A friend loves at all times, and a brother is born for a time of adversity.", verseRef: "Proverbs 17:17" },
  { id: "s3", couple: "Priya, 33", title: "Learning to Be Whole on My Own", type: "single", story: `I had my last relationship at 28. By 30 I was convinced something was wrong with me. I downloaded every dating app, deleted them all, redownloaded them. I attended every church single event. I prayed specifically for a husband—gave him a name, wrote the prayer on a Post-It note on my mirror.\n\nAt 32, something broke open. Not broke down—broke open. In a season of genuine spiritual renewal, I realized I had been asking God to fill a hunger that I was trying to satisfy everywhere else first. I wasn't practicing contentment in Christ; I was demanding from Christ the thing I thought would make me content.\n\nI'm 33 now and not married. I have a community I love, work that matters, and a peace I genuinely could not have manufactured. I'm not giving up on marriage. But I'm not defining my life by its arrival either. "He settles the solitary in a home" (Psalm 68:6)—and I've found that that home, right now, is in him.`, verse: "I have learned, in whatever situation I am, to be content.", verseRef: "Philippians 4:11" },
  { id: "s4", couple: "Marcus & Elena", title: "God Restored What We Broke", type: "couple", story: `We separated in March 2023. Elena had discovered an emotional affair—months of deceptive texting with a coworker. She left and took our two sons. I thought it was over. I wanted it to be over. I was ashamed and angry and convinced I didn't deserve another chance.\n\nElena's pastor encouraged her not to rush the decision. She agreed to three months of individual counseling before deciding on divorce. I started counseling, too—not to win her back, but because I needed to understand why I'd made the choices I made. What I found was a man who had been avoiding intimacy in his own marriage while pursuing it at a distance.\n\nEighteen months later, we remarried—just the two of us and our boys, in a park, on a Tuesday. No party. Just vows, more specific and more costly than the first ones. Our marriage is not the same as before. It's harder and more honest and, somehow, more beautiful.`, verse: "He restores my soul. He leads me in paths of righteousness for his name's sake.", verseRef: "Psalm 23:3" },
];

const CATEGORIES = ["All", "Dating", "Marriage", "Boundaries", "Singleness", "Healing"];

const CONFLICT_TOOLS = [
  {
    id: "ct1",
    step: 1,
    icon: "🪞",
    title: "Examine Yourself First",
    description: "Before addressing another person's fault, Jesus commands self-examination. The log in your own eye distorts your perception of the speck in theirs. Honest self-assessment is not weakness — it is the precondition for speaking truthfully.",
    scripture: "Matthew 7:3-5",
    example: "Before confronting your spouse about their critical tone, ask: have I been cold or dismissive in ways that provoked it? Am I bringing a posture of humility or superiority?",
  },
  {
    id: "ct2",
    step: 2,
    icon: "🚪",
    title: "Go Privately First",
    description: "The first move in biblical conflict resolution is always a private conversation — not venting to mutual friends, not posting grievances, not escalating to authority before trying directly. Going privately protects the other person's dignity and gives the relationship the best chance of restoration.",
    scripture: "Matthew 18:15",
    example: "If a friend said something hurtful at dinner, go to them alone before telling other friends what happened. The goal is restored relationship, not vindication.",
  },
  {
    id: "ct3",
    step: 3,
    icon: "👂",
    title: "Listen Before Speaking",
    description: "James 1:19 commands every believer to be quick to hear, slow to speak, and slow to anger — in that order. Seeking to understand before seeking to be understood transforms conflict from a war of positions into a conversation between people.",
    scripture: "James 1:19",
    example: "Instead of preparing your rebuttal while the other person is speaking, repeat back what you heard before responding: 'What I'm hearing you say is...' Then ask if you heard correctly.",
  },
  {
    id: "ct4",
    step: 4,
    icon: "💬",
    title: "Speak Truth in Love",
    description: "Ephesians 4:15 holds two things together that are easily separated: truth and love. Passive aggression abandons truth. Explosiveness abandons love. The goal is honest, direct, gentle communication — saying hard things in a way that preserves the relationship.",
    scripture: "Ephesians 4:15",
    example: "Rather than 'You always do this,' try: 'When you cut me off in conversation, I feel dismissed. I don't think that's what you intend, but I wanted you to know how it lands.'",
  },
  {
    id: "ct5",
    step: 5,
    icon: "🕊️",
    title: "Forgive as You Have Been Forgiven",
    description: "Colossians 3:13 grounds the command to forgive in the forgiveness we have already received. Forgiveness is a decision, not a feeling — a release of the right to collect the debt. It does not require the other person's repentance, though reconciliation does.",
    scripture: "Colossians 3:13",
    example: "You may need to say aloud: 'I release the right to punish [name] for what they did. As God has forgiven me through Christ, I choose to forgive them.' This may need repeating before the emotion follows the decision.",
  },
];

const VOICES_REL = [
  {
    id: "lewis-cs",
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "The Four Loves (1960) — the definitive taxonomy of love in Christian thought",
    bio: "C.S. Lewis's The Four Loves distills the Greek New Testament's four words for love into a framework that remains unmatched in clarity and insight. Storge (affection), philia (friendship), eros (romantic love), and agape (charity/divine love) each receive their own treatment — their proper nature, their dangers when distorted, and their relationship to God's love. Lewis argues that each natural love, when made an ultimate end, becomes a demon; when properly ordered under agape, each becomes a doorway to the divine. His treatment of friendship as one of the great loves, often overlooked in modern romantic culture, has been particularly influential.",
    quote: "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. The only place outside Heaven where you can be perfectly safe from all the dangers of love is Hell.",
    contribution: "The Four Loves has shaped evangelical and Catholic thinking about love and relationships for sixty years. Its taxonomy of the four loves has given millions of readers a vocabulary for understanding the different kinds of love and their proper ordering under God. Lewis's treatment of eros as a good but dangerous love — neither to be suppressed nor idolized — remains the most nuanced evangelical account of romantic love.",
  },
  {
    id: "sande-ken",
    name: "Ken Sande",
    era: "b. 1952",
    context: "The Peacemaker (1991) — biblical conflict resolution and Peacemaker Ministries",
    bio: "Ken Sande's The Peacemaker is the most comprehensive application of Matthew 18 and biblical conflict resolution principles to everyday life. Written by a lawyer turned Christian mediator, it addresses conflict in marriages, churches, workplaces, and families with the same framework: glorify God, get the log out of your own eye, gently restore the other person, go and be reconciled. Sande founded Peacemaker Ministries, an organization that has trained tens of thousands of Christian leaders in biblical conflict resolution and mediated hundreds of church and organizational disputes.",
    quote: "Conflict is not just a problem to be resolved. It is an opportunity to demonstrate the love of Christ, show the grace of God, and build the unity of the body.",
    contribution: "The Peacemaker became the standard evangelical text on conflict resolution for a generation of pastors and counselors. Sande's Peacemaker Ministries training has equipped church leaders worldwide with practical tools for applying Matthew 18 in real conflicts. His distinction between peacefaking (avoiding conflict), peacebreaking (escalating conflict), and peacemaking (biblical resolution) has given Christians a framework for evaluating their own conflict patterns.",
  },
  {
    id: "chapman-gary",
    name: "Gary Chapman",
    era: "b. 1938",
    context: "The 5 Love Languages (1992) — how people give and receive love differently",
    bio: "Gary Chapman's The 5 Love Languages identified five primary ways people give and receive love: words of affirmation, quality time, receiving gifts, acts of service, and physical touch. Chapman's insight — developed from decades of marriage counseling — is that people tend to give love in their own primary language while failing to speak the language their partner most needs. The result is partners who love each other genuinely but past each other. Learning your partner's primary love language and speaking it consistently transforms many marriages.",
    quote: "My conclusion after thirty years of marriage counseling is that there are basically five emotional love languages — five ways that people speak and understand emotional love.",
    contribution: "The 5 Love Languages has sold over 20 million copies and has been translated into 50+ languages, making it one of the best-selling relationship books in history. Its framework has been adopted in premarital counseling programs, marriage enrichment retreats, and everyday conversation worldwide. The concept of love languages has entered popular culture to an extent that few Christian ideas achieve.",
  },
  {
    id: "cloud-henry",
    name: "Henry Cloud",
    era: "b. 1956",
    context: "Safe People (1995) and Boundaries (1992) — the psychology of healthy Christian relationships",
    bio: "Henry Cloud, with John Townsend, wrote Boundaries and Safe People — two books that have shaped how millions of evangelical Christians think about relationships. Boundaries argues that healthy relationships require the ability to say yes and no appropriately — that love does not mean unlimited access and that healthy people define what they are and are not responsible for. Safe People identifies the characteristics of relationally healthy vs. toxic people, giving Christians a framework for discernment in friendships and romantic relationships.",
    quote: "We are responsible to others and for ourselves. We are to love our neighbors as ourselves — not instead of ourselves.",
    contribution: "Boundaries has sold millions of copies and transformed evangelical conversation about relational health. Its concepts — emotional property lines, taking responsibility for your own life, the difference between empathy and enabling — have given Christians permission to set limits they previously felt were unbiblical. Safe People has helped many believers identify and exit toxic relationships while articulating what to look for in healthy ones.",
  },
  {
    id: "keller-tim-rel",
    name: "Timothy Keller",
    era: "1950-2023",
    context: "The Meaning of Marriage (2011) — marriage as the primary human relationship pointing to Christ",
    bio: "Tim Keller's The Meaning of Marriage, co-written with his wife Kathy, is the most theologically rigorous and practically honest marriage book in contemporary evangelical literature. Keller grounds marriage not in romantic compatibility or emotional fulfillment but in the covenant between God and his people — and ultimately in the relationship between Christ and the church. His central argument: marriage is hard precisely because it is designed to make you holy, not merely happy. The book is unflinching about the selfishness, conflict, and disappointment every marriage encounters, while maintaining a high and beautiful vision of what marriage can be.",
    quote: "To be loved but not known is comforting but superficial. To be known and not loved is our greatest fear. But to be fully known and truly loved is, well, a lot like being loved by God.",
    contribution: "The Meaning of Marriage became the standard evangelical marriage reference for a generation of pastors, counselors, and couples. Its combination of theological depth, honest assessment of difficulty, and practical guidance has made it the most recommended book in evangelical premarital counseling contexts. Keller's framing of marriage as a sanctifying institution rather than a fulfillment vehicle has permanently shaped how millions think about the purpose of marriage.",
  },
];

const REL_VIDEOS = [
  { id: "rv1", title: "The Prodigal God: The Elder Brother", preacher: "Tim Keller", videoId: "OasF7lWlX_M", description: "Keller unpacks the elder brother in the parable — the religious person who has never truly understood grace and whose obedience is transactional." },
  { id: "rv2", title: "The Prodigal Sons", preacher: "Tim Keller", videoId: "lsTzXI7cJGA", description: "A masterful exposition of Luke 15 — both sons lost, both needing the father, both revealing different ways we reject grace." },
  { id: "rv3", title: "Family Driven Faith", preacher: "Voddie Baucham", videoId: "k764Pe2P61U", description: "Baucham makes a compelling biblical case for intentional, faith-shaping family life rooted in Deuteronomy 6." },
  { id: "rv4", title: "The Purpose of Parenting", preacher: "Voddie Baucham", videoId: "WUE-J-br7P0", description: "A clear articulation of the biblical purpose of parenting — raising children to know and fear God, not merely to succeed." },
  { id: "rv5", title: "How Great Is Our God", preacher: "Louie Giglio", videoId: "X1rPalyUshw", description: "Giglio's famous message connecting the vastness of the cosmos to the intimate love of God — one of the most-shared Christian talks ever." },
  { id: "rv6", title: "Forgotten God Part 1", preacher: "Francis Chan", videoId: "sWMjg7CxIKk", description: "Chan challenges the church's neglect of the Holy Spirit and calls believers back to a Spirit-empowered, Spirit-directed life." },
];

export default function RelationshipsPage() {
  const [activeTab, setActiveTab] = usePersistedState<"community" | "conflict" | "voices" | "videos">("vine_relationships_tab", "community");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_relationships_voice", "lewis-cs");
  const voiceItem = VOICES_REL.find(v => v.id === selectedVoice)!;
  const [openGuidance, setOpenGuidance] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_relationships_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [catFilter, setCatFilter] = usePersistedState<string>("vine_relationships_cat_filter", "All");
  const [search, setSearch] = useState("");
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [selectedStory, setSelectedStory] = useState<typeof STORIES[0] | null>(null);

  const toggleSave = (id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_relationships_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filteredArticles = ARTICLES.filter(a => {
    if (catFilter !== "All" && a.category !== catFilter) return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase()) && !a.summary.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>❤️</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Relationships &amp; Dating</h1>
          <p style={{ color: MUTED, fontSize: 16 }}>Building love on the foundation of Christ</p>
        </div>

        {/* Main Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(["community", "conflict", "voices", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", flex: 1 }}>
              {t === "community" ? "Community" : t === "conflict" ? "Conflict" : t === "voices" ? "Voices" : "Videos"}
            </button>
          ))}
        </div>

        {/* Community Tab — all existing guidance / articles / stories content */}
        {activeTab === "community" && (
          <>
            <CommunityContent
              GUIDANCE={GUIDANCE}
              ARTICLES={ARTICLES}
              STORIES={STORIES}
              CATEGORIES={CATEGORIES}
              openGuidance={openGuidance}
              setOpenGuidance={setOpenGuidance}
              savedIds={savedIds}
              toggleSave={toggleSave}
              catFilter={catFilter}
              setCatFilter={setCatFilter}
              search={search}
              setSearch={setSearch}
              expandedArticle={expandedArticle}
              setExpandedArticle={setExpandedArticle}
              setSelectedStory={setSelectedStory}
              filteredArticles={filteredArticles}
            />
          </>
        )}

        {/* Conflict Tab */}
        {activeTab === "conflict" && (
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Biblical Conflict Resolution</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
                Based on Matthew 18 and the framework of Peacemaker Ministries, these five steps reflect
                Jesus&rsquo;s design for restoring broken relationships &mdash; in marriage, friendship, and church.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {CONFLICT_TOOLS.map(ct => (
                <div key={ct.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${PURPLE}25`, border: `1px solid ${PURPLE}60`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: PURPLE, flexShrink: 0 }}>{ct.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 4 }}>
                        <span style={{ fontSize: 20 }}>{ct.icon}</span>
                        <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{ct.title}</h3>
                      </div>
                      <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: `${GREEN}12`, color: GREEN, border: `1px solid ${GREEN}30`, fontWeight: 700 }}>{ct.scripture}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 14 }}>{ct.description}</p>
                  <div style={{ background: BG, borderRadius: 10, padding: 14, borderLeft: `3px solid ${PURPLE}` }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>In Practice</div>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{ct.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Voices Tab */}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_REL.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : BORDER}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: TEXT }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: BG, borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Recommended Teachings</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>Six messages on love, family, and the character of God.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 24 }}>
              {REL_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${PURPLE}20`, color: PURPLE, fontWeight: 700, border: `1px solid ${PURPLE}40` }}>{v.preacher}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: TEXT, marginBottom: 6 }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div aria-hidden="true" onClick={() => setSelectedStory(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{ background: CARD, borderRadius: 20, padding: 32, maxWidth: 640, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{selectedStory.title}</h2>
                <span style={{ fontSize: 14, color: MUTED }}>{selectedStory.couple}</span>
              </div>
              <button type="button" onClick={() => setSelectedStory(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>
            {selectedStory.story.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>{para}</p>
            ))}
            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, borderLeft: `3px solid ${GREEN}`, marginTop: 8 }}>
              <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>&ldquo;{selectedStory.verse}&rdquo;</p>
              <p style={{ fontSize: 12, color: GREEN, marginTop: 8 }}>&mdash; {selectedStory.verseRef}</p>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}

function CommunityContent({
  GUIDANCE, ARTICLES, STORIES, CATEGORIES,
  openGuidance, setOpenGuidance,
  savedIds, toggleSave,
  catFilter, setCatFilter,
  search, setSearch,
  expandedArticle, setExpandedArticle,
  setSelectedStory,
  filteredArticles,
}: {
  GUIDANCE: { id: string; title: string; icon: string; summary: string; content: string; verses: string[] }[];
  ARTICLES: { id: string; title: string; summary: string; readTime: string; category: string; body: string }[];
  STORIES: { id: string; couple: string; title: string; type: string; story: string; verse: string; verseRef: string }[];
  CATEGORIES: string[];
  openGuidance: string | null;
  setOpenGuidance: (id: string | null) => void;
  savedIds: Set<string>;
  toggleSave: (id: string) => void;
  catFilter: string;
  setCatFilter: (c: string) => void;
  search: string;
  setSearch: (s: string) => void;
  expandedArticle: string | null;
  setExpandedArticle: (id: string | null) => void;
  setSelectedStory: (s: { id: string; couple: string; title: string; type: string; story: string; verse: string; verseRef: string } | null) => void;
  filteredArticles: { id: string; title: string; summary: string; readTime: string; category: string; body: string }[];
}) {
  const [innerTab, setInnerTab] = usePersistedState<"guidance" | "articles" | "stories">("vine_relationships_inner_tab", "guidance");
  return (
    <>
      <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32" }}>
        {([["guidance", "Guidance"], ["articles", "Topics"], ["stories", "Stories"]] as const).map(([t, label]) => (
          <button type="button" key={t} onClick={() => setInnerTab(t)}
            style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: innerTab === t ? "#3a7d56" : "#6A6A88", borderBottom: `2px solid ${innerTab === t ? "#3a7d56" : "transparent"}`, marginBottom: -1 }}>
            {label}
          </button>
        ))}
      </div>

      {innerTab === "guidance" && (
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {GUIDANCE.map(g => (
            <div role="button" tabIndex={0} key={g.id} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: `1px solid ${openGuidance === g.id ? "rgba(58,125,86,0.3)" : "#1E1E32"}` }}>
              <button type="button" onClick={() => setOpenGuidance(openGuidance === g.id ? null : g.id)}
                style={{ width: "100%", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span style={{ fontSize: 24 }}>{g.icon}</span>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: openGuidance === g.id ? "#3a7d56" : "#F2F2F8", marginBottom: 3 }}>{g.title}</h3>
                    <p style={{ fontSize: 13, color: "#9898B3" }}>{g.summary}</p>
                  </div>
                </div>
                <span style={{ color: "#6A6A88", fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{openGuidance === g.id ? "−" : "+"}</span>
              </button>
              {openGuidance === g.id && (
                <div style={{ padding: "0 22px 22px", borderTop: "1px solid #1E1E32" }}>
                  {g.content.split("\n\n").map((para, i) => (
                    <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginTop: 16 }}>{para}</p>
                  ))}
                  <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
                    {g.verses.map(v => <span key={v} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: "rgba(58,125,86,0.08)", color: "#3a7d56", border: "1px solid rgba(58,125,86,0.2)" }}>{v}</span>)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {innerTab === "articles" && (
        <>
          <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
            <input value={search} onChange={e => setSearch(e.target.value)} aria-label="Search topics..." placeholder="Search topics..."
              style={{ flex: 1, minWidth: 200, padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none" }} />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {CATEGORIES.map(c => (
                <button type="button" key={c} onClick={() => setCatFilter(c)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${catFilter === c ? "#3a7d56" : "#1E1E32"}`, background: catFilter === c ? "rgba(58,125,86,0.1)" : "transparent", color: catFilter === c ? "#3a7d56" : "#9898B3", fontSize: 13, cursor: "pointer", fontWeight: catFilter === c ? 700 : 400 }}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {filteredArticles.map(a => (
              <div role="button" tabIndex={0} key={a.id} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: `1px solid ${expandedArticle === a.id ? "rgba(58,125,86,0.2)" : "#1E1E32"}` }}>
                <div role="button" tabIndex={0} onClick={() => setExpandedArticle(expandedArticle === a.id ? null : a.id)}
                  style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", cursor: "pointer" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{a.category}</span>
                      <span style={{ fontSize: 11, color: "#6A6A88" }}>{a.readTime} read</span>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: expandedArticle === a.id ? "#3a7d56" : "#F2F2F8", marginBottom: 4 }}>{a.title}</h3>
                    <p style={{ fontSize: 13, color: "#9898B3" }}>{a.summary}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, marginLeft: 12 }}>
                    <button type="button" onClick={e => { e.stopPropagation(); toggleSave(a.id); }}
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: savedIds.has(a.id) ? "#FFD700" : "#4A4A68" }}>
                      {savedIds.has(a.id) ? "★" : "☆"}
                    </button>
                    <span style={{ color: "#6A6A88", fontSize: 18 }}>{expandedArticle === a.id ? "−" : "+"}</span>
                  </div>
                </div>
                {expandedArticle === a.id && (
                  <div style={{ padding: "0 22px 22px", borderTop: "1px solid #1E1E32" }}>
                    {a.body.split("\n\n").map((para, i) => (
                      <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginTop: 16 }}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {innerTab === "stories" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {STORIES.map(s => (
            <div role="button" tabIndex={0} key={s.id} onClick={() => setSelectedStory(s)}
              style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 22, cursor: "pointer" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#3a7d56"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#1E1E32"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.type === "couple" ? "💑" : "🌸"}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "#9898B3", marginBottom: 12 }}>{s.couple}</p>
              <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {s.story.split("\n\n")[0]}
              </p>
              <p style={{ fontSize: 12, color: "#3a7d56", marginTop: 12, fontStyle: "italic" }}>&ldquo;{s.verse.slice(0, 55)}&hellip;&rdquo; &mdash; {s.verseRef}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
