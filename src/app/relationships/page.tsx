"use client";
import { useState } from "react";

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
    content: `**Green flags**: They pursue you without being controlling. They speak honestly but kindly. They honor commitments—to God, to friends, to you. They take responsibility for their failures rather than deflecting blame. They talk about the future with maturity. Their faith is lived, not performed. They are equally kind to the server as to the CEO.

**Red flags**: They isolate you from friends and family, even subtly. They minimize your feelings or tell you you're "too sensitive." They have never been wrong about anything. They pursue you intensely in the beginning, then grow cold and hot alternately. They talk about exes with contempt rather than growth. Physical affection escalates faster than emotional maturity.

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

export default function RelationshipsPage() {
  const [tab, setTab] = useState<"guidance" | "articles" | "stories" | "voices">("guidance");
  const [selectedVoice, setSelectedVoice] = useState("keller-rel");
  const VOICES_REL = [
    { id: "keller-rel", name: "Tim & Kathy Keller", era: "The Meaning of Marriage (2011)", context: "The theological cornerstone of evangelical marriage literature — God-centered, honest, and enduring", bio: "Tim Keller's The Meaning of Marriage, co-written with his wife Kathy, is the most theologically rigorous and practically honest marriage book in contemporary evangelical literature. Written from the Reformed tradition, it grounds marriage not in romantic compatibility or emotional fulfillment but in the covenant relationship between God and his people, and ultimately in the relationship between Christ and the church (Ephesians 5). Keller's central argument: marriage is hard precisely because it is designed to make you holy, not merely happy. The book is unflinching about the selfishness, conflict, and disappointment that every marriage encounters, while maintaining a high and beautiful vision of what marriage can be.", quote: "To be loved but not known is comforting but superficial. To be known and not loved is our greatest fear. But to be fully known and truly loved is, well, a lot like being loved by God.", contribution: "The Meaning of Marriage became the standard evangelical marriage reference text for a generation of pastors, premarital counselors, and couples. Its combination of theological depth, honest assessment of marriage's difficulty, and practical guidance has made it the book most recommended in evangelical premarital counseling contexts." },
    { id: "thomas-g", name: "Gary Thomas", era: "b. 1961", context: "Sacred Marriage (2000) — what if marriage is designed to make you holy rather than happy?", bio: "Gary Thomas's Sacred Marriage reoriented evangelical marriage literature with a single provocative question: What if God designed marriage to make us holy more than to make us happy? Thomas argues that the difficulties of marriage — the friction, the exposure of character, the demands of unconditional love — are precisely the tools God uses to form Christlike character. His treatment of marriage as a spiritual discipline rather than a romantic fulfillment shifted the conversation from 'how do I have a better marriage?' to 'who is God making me through this marriage?' This reorientation has been enormously influential in how churches approach marriage ministry.", quote: "What if God didn't design marriage to be easy? What if God has a higher purpose for your marriage than your happiness? What if marriage is designed to make you holy?", contribution: "Sacred Marriage is one of the most widely used evangelical marriage books in small group and marriage enrichment contexts. Thomas's reframing of marriage difficulties as spiritual formation opportunities has given couples a theological framework for persisting through conflict and disappointment without giving up." },
    { id: "gottman-j", name: "John & Julie Gottman", era: "b. 1942/1948", context: "The Seven Principles for Making Marriage Work (1999) — research-based marriage wisdom", bio: "John Gottman's research at the University of Washington's 'Love Lab' produced the most empirically robust account of what distinguishes stable marriages from those heading for divorce. His concept of the 'Four Horsemen' (criticism, contempt, defensiveness, stonewalling) as predictors of relationship failure, and his model of the 'Sound Relationship House' (trust, commitment, knowledge of your partner, shared meaning) have been widely adopted in Christian marriage counseling alongside theological frameworks. Christian counselors have found Gottman's research complements theological perspectives on marriage: his findings about contempt, for instance, map well onto biblical teachings on pride and honor.", quote: "Contempt — feeling or showing disgust — is the single greatest predictor of relationship failure. It treats the other person as inferior or unworthy. No marriage can survive large doses of contempt. And contempt thrives in the absence of gratitude.", contribution: "Gottman's research gave marriage counselors — including Christian ones — empirical tools for identifying troubled marriages and evidence-based practices for strengthening them. His Four Horsemen model has become a standard diagnostic framework in both secular and Christian marriage therapy, and his emphasis on friendship, gratitude, and shared meaning resonates with theological accounts of covenant love." },
    { id: "tripp-paul-m", name: "Paul David Tripp", era: "b. 1950", context: "What Did You Expect? (2010) — a gospel-centered approach to marriage's hardest moments", bio: "Paul David Tripp's What Did You Expect? Redeeming the Realities of Marriage addresses the gap between what couples expect marriage to be and what it actually is. Tripp argues that the disappointment and conflict most couples experience in marriage is not a sign that they chose the wrong person but that they have underestimated how comprehensively sin affects two sinners trying to build a life together. His gospel-centered framework — grace, forgiveness, mutual service — provides a basis for hope in the hardest seasons. The book's distinctive contribution is its honesty about how idolatrous expectations (expecting a spouse to provide what only God can provide) create the very disappointments that kill marriages.", quote: "Struggling marriages are not the result of marrying the wrong person. They are the result of two sinners who have forgotten what they need to bring to their marriage: not rights, but grace.", contribution: "What Did You Expect? gave evangelical couples a gospel-centered framework for understanding and working through marital conflict. Tripp's honest account of how sin distorts expectations and creates conflict, combined with his clear articulation of grace as the resource for change, has made the book a standard text in evangelical premarital and marriage counseling." },
    { id: "eldredge-j", name: "John Eldredge", era: "b. 1960", context: "Wild at Heart (2001); Captivating (2005, with Stasi Eldredge) — gender, identity, and relationship", bio: "John Eldredge's Wild at Heart and its companion Captivating (co-written with his wife Stasi) have been among the most widely read and most debated evangelical books on gender and relationships in the past two decades. Wild at Heart argues that men are created for adventure, battle, and beauty, and that the core wounds of masculinity distort all their relationships — especially romantic ones. Captivating makes a parallel argument about femininity. The books have been criticized for their gender essentialism and their cultural assumptions, but their influence on how millions of evangelical Christians think about gender and relationship has been enormous — particularly in young adult and men's ministry contexts.", quote: "A man's deepest fear is that he is, at the core, not what a woman needs. A woman's deepest fear is that she is, at the core, not what a man wants. Both fears point to the same wound: 'Do I have what it takes? Am I enough?' The answer the gospel gives is: in Christ, yes.", contribution: "Wild at Heart and Captivating gave evangelical men and women a language for understanding gender, desire, and relationship wound that resonated with millions. The books' influence on men's ministry, marriage conferences, and young adult discipleship has been enormous, even as their gender essentialism has been debated. They remain among the most discussed evangelical books on relationships of the past generation." },
  ];
  const voiceItem = VOICES_REL.find(v => v.id === selectedVoice)!;
  const [openGuidance, setOpenGuidance] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_relationships_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [catFilter, setCatFilter] = useState("All");
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
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>❤️</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Relationships & Dating</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>Building love on the foundation of Christ</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: "1px solid #1E1E32" }}>
          {([["guidance", "Guidance"], ["articles", "Topics"], ["stories", "Stories"], ["voices", "🎓 Voices"]] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Guidance Tab */}
        {tab === "guidance" && (
          <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
            {GUIDANCE.map(g => (
              <div key={g.id} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: `1px solid ${openGuidance === g.id ? "rgba(0,255,136,0.3)" : "#1E1E32"}` }}>
                <button onClick={() => setOpenGuidance(openGuidance === g.id ? null : g.id)}
                  style={{ width: "100%", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <span style={{ fontSize: 24 }}>{g.icon}</span>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: openGuidance === g.id ? "#00FF88" : "#F2F2F8", marginBottom: 3 }}>{g.title}</h3>
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
                      {g.verses.map(v => <span key={v} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 8, background: "rgba(0,255,136,0.08)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}>{v}</span>)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Articles Tab */}
        {tab === "articles" && (
          <>
            <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search topics..."
                style={{ flex: 1, minWidth: 200, padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none" }} />
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {CATEGORIES.map(c => (
                  <button key={c} onClick={() => setCatFilter(c)}
                    style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${catFilter === c ? "#00FF88" : "#1E1E32"}`, background: catFilter === c ? "rgba(0,255,136,0.1)" : "transparent", color: catFilter === c ? "#00FF88" : "#9898B3", fontSize: 13, cursor: "pointer", fontWeight: catFilter === c ? 700 : 400 }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filteredArticles.map(a => (
                <div key={a.id} style={{ background: "#12121F", borderRadius: 16, overflow: "hidden", border: `1px solid ${expandedArticle === a.id ? "rgba(0,255,136,0.2)" : "#1E1E32"}` }}>
                  <div onClick={() => setExpandedArticle(expandedArticle === a.id ? null : a.id)}
                    style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", cursor: "pointer" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{a.category}</span>
                        <span style={{ fontSize: 11, color: "#6A6A88" }}>{a.readTime} read</span>
                      </div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: expandedArticle === a.id ? "#00FF88" : "#F2F2F8", marginBottom: 4 }}>{a.title}</h3>
                      <p style={{ fontSize: 13, color: "#9898B3" }}>{a.summary}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, marginLeft: 12 }}>
                      <button onClick={e => { e.stopPropagation(); toggleSave(a.id); }}
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

        {/* Stories Tab */}
        {tab === "stories" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {STORIES.map(s => (
              <div key={s.id} onClick={() => setSelectedStory(s)}
                style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 22, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#00FF88"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#1E1E32"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.type === "couple" ? "💑" : "🌸"}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#9898B3", marginBottom: 12 }}>{s.couple}</p>
                <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {s.story.split("\n\n")[0]}
                </p>
                <p style={{ fontSize: 12, color: "#00FF88", marginTop: 12, fontStyle: "italic" }}>"{s.verse.slice(0, 55)}..." — {s.verseRef}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_REL.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(0,255,136,0.4)" : "#1E1E32"}`, background: selectedVoice === v.id ? "rgba(0,255,136,0.08)" : "#12121F", cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? "#00FF88" : "#F2F2F8", marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: "#9898B3" }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: "#F2F2F8" }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: "#07070F", borderRadius: 12, padding: 20, borderLeft: "3px solid #00FF88", marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div onClick={() => setSelectedStory(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#12121F", borderRadius: 20, padding: 32, maxWidth: 640, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{selectedStory.title}</h2>
                <span style={{ fontSize: 14, color: "#9898B3" }}>{selectedStory.couple}</span>
              </div>
              <button onClick={() => setSelectedStory(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer" }}>×</button>
            </div>
            {selectedStory.story.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>{para}</p>
            ))}
            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, borderLeft: "3px solid #00FF88", marginTop: 8 }}>
              <p style={{ fontSize: 14, color: "#C0C0D8", fontStyle: "italic" }}>"{selectedStory.verse}"</p>
              <p style={{ fontSize: 12, color: "#00FF88", marginTop: 8 }}>— {selectedStory.verseRef}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
