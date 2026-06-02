"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "vocation" | "marketplace" | "rest" | "videos";

const THEOLOGY_ITEMS = [
  {
    title: "Work Before the Fall",
    verse: "Gen 1:28; Gen 2:15",
    body: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it (Genesis 2:15). Work is not a punishment — it is a creation ordinance given before sin entered the world. The cultural mandate of Genesis 1:28 — to fill, subdue, and rule the earth — is the primordial human vocation. God himself is a worker (he made the cosmos); humans made in his image are workers too. This means the engineer, the farmer, the teacher, and the nurse are not merely earning a paycheck — they are participating in the original human calling, extending the fruitfulness of creation as image-bearers of the Creator. Work is good not because it is useful, but because the God who made it is good.",
  },
  {
    title: "Work After the Fall",
    verse: "Gen 3:17-19",
    body: "Cursed is the ground because of you; through painful toil you will eat food from it all the days of your life. It will produce thorns and thistles for you (Genesis 3:17-19). The Fall does not abolish work — it distorts it. The toil, futility, frustration, and conflict that mark so much human work are the Fall's fingerprints on a good creation. The bug that won't resolve, the project that collapses, the toxic workplace, the crop that fails — these are thorns and thistles in every domain. Ecclesiastes explores this with unflinching honesty: all is vanity (hebel — vapor, breath, futility) when work is disconnected from God and made an end in itself. But crucially: the Fall corrupts the goodness of work without nullifying it. The creation mandate was not rescinded at the gates of Eden. The calling remains; the conditions are harder.",
  },
  {
    title: "The Incarnation and Labor",
    verse: "Mark 6:3",
    body: "Is this not the carpenter, the son of Mary? (Mark 6:3). Jesus of Nazareth spent approximately 18 years in obscurity — not preaching, not healing, not performing miracles — but working with wood and stone. This is not incidental to the Incarnation; it is central to it. The Son of God dignified common labor by doing it. He knew the satisfaction of a door hung true, the frustration of wood that splits wrong, the fatigue of a long day's work. The Incarnation is the ultimate refutation of any theology that treats ordinary work as merely secular. If God-in-flesh spent 18 years as a village craftsman, the dignity of daily work is not in question. The question is only whether we will honor that dignity with faithfulness.",
  },
  {
    title: "Paul's Work Ethic",
    verse: "1 Thess 4:11; 2 Thess 3:10",
    body: "Make it your ambition to lead a quiet life: you should mind your own business and work with your hands (1 Thessalonians 4:11). Paul was explicit and unsentimental about work. To the Thessalonians who had quit their jobs in expectation of an imminent return of Christ, Paul wrote with characteristic directness: if anyone is not willing to work, let him not eat (2 Thessalonians 3:10). Paul himself was a tent-maker — a skilled trade worker who deliberately chose manual labor to support his own ministry and to model the dignity of work for his churches. Paul's tent-making was not a compromise with his calling; it was an expression of it. Working with your own hands was, for Paul, an act of love toward the community and an act of integrity before the watching world.",
  },
  {
    title: "Colossians 3:23",
    verse: "Colossians 3:23",
    body: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters (Colossians 3:23). This verse is addressed to slaves — people with no choice about their work, no career ladder, no sense that their labor was appreciated or dignified. Yet Paul's word to them is: work as for the Lord. This is not a endorsement of slavery but a radical reorientation of the worker's gaze. The audience of your work is not your supervisor, your performance review, or your paycheck — it is God. This transforms the quality of the work (all your heart) and transforms its meaning. The person cleaning hotel rooms and the person running the hotel are equally called to this standard. Monday becomes as sacred as Sunday; the factory floor becomes as holy as the sanctuary.",
  },
  {
    title: "Sabbath as Work's Companion",
    verse: "Gen 2:2-3; Exod 20:8-11",
    body: "And on the seventh day God finished his work that he had done, and he rested on the seventh day (Genesis 2:2). The Sabbath is not an interruption of work — it is its completion and companion. God did not rest because he was tired; he rested as the culmination of creation, modeling the rhythm he built into the cosmos. Modern productivity culture has erased this rhythm: the always-on economy, the 24/7 availability expectation, the phone that brings the office into every room. Sabbath is not a medieval artifact — it is counter-cultural resistance. To stop working one day in seven is to make a theological declaration: I am not the savior of my own projects. The world does not run on my effort alone. My worth is not my output. This declaration is increasingly radical and increasingly needed.",
  },
];

const VOCATION_TOPICS = [
  {
    id: "luther",
    label: "Luther's Revolution",
    heading: "Luther's Revolution",
    subhead: "The priesthood of all believers, applied to Monday",
    body: "Medieval Christianity created a two-tier system of work: sacred work (priests, monks, nuns) occupied the upper tier, while secular work (farmers, merchants, soldiers, craftsmen) occupied a lower, merely tolerated tier. The monk who spent his days in prayer and liturgy was closer to God than the shoemaker who spent his days making shoes. Martin Luther demolished this hierarchy. Drawing on 1 Corinthians 7:17 and the priesthood of all believers, Luther argued that every legitimate occupation is a vocatio — a calling from God. The cobbler who makes good shoes glorifies God as surely as the pastor who preaches well. In fact, Luther said, the cobbler who says prayers all day but makes shoddy shoes is less faithful to his vocation than the cobbler who says fewer prayers and makes excellent shoes. The Latin word vocatio (calling) gave us the English word 'vocation.' Luther's recovery of this word for ordinary work means that every legitimate work is a form of love — love for the neighbor whom that work serves. The farmer feeds the hungry; the teacher shapes minds; the nurse cares for the suffering. Vocation is the shape that love for neighbor takes in daily life.",
    refs: ["1 Cor 7:17-24", "Luther, 'Address to the Christian Nobility' (1520)", "Gustaf Wingren, 'Luther on Vocation'"],
  },
  {
    id: "primary",
    label: "Primary vs. Secondary Calling",
    heading: "Primary vs. Secondary Calling",
    subhead: "Os Guinness: getting the order right",
    body: "Os Guinness, in 'The Call' (1998), made a distinction that has become essential in vocation theology: the primary calling and the secondary calling. The primary calling is the calling to God — to be his, to know him, to love him, to follow him. This calling is given to every believer and does not change with job changes, career shifts, or life circumstances. The secondary calling is the specific work or role through which we live out the primary calling in a particular season — our job, our family role, our civic responsibilities. The danger Guinness identifies is inverting the order: when the secondary calling (career, ministry, achievement) becomes the primary one, we have created an idol. This is the occupational hazard of every ambitious person in every field, including ministry. The person who has gotten the order right says: I am called to God first; my current work is one expression of that calling, not the calling itself. This distinction produces both freedom (your identity does not depend on your career success) and faithfulness (your current work matters because God has placed you there).",
    refs: ["Os Guinness, 'The Call' (1998)", "1 Cor 7:17", "Matt 6:33"],
  },
  {
    id: "discerning",
    label: "Discerning Your Calling",
    heading: "Discerning Your Calling",
    subhead: "Where deep gladness meets deep need",
    body: "Frederick Buechner gave us the most quoted definition in vocation literature: 'The place God calls you to is the place where your deep gladness and the world's deep need meet.' This is beautiful and widely cited, but it is incomplete as a decision-making tool — most people have multiple deep gladnesses and the world has limitless deep needs. Parker Palmer, in 'Let Your Life Speak' (2000), offers a more grounded approach: listen to your life. Your vocation is often already speaking through your gifts, your wounds, your history of what has and hasn't worked, and what Parker calls your 'way of being in the world.' What are you doing when you lose track of time? What problems make you angry enough to want to solve them? What have people consistently said you're gifted at, even when you didn't ask? These are not infallible signals, but they are data. Calling is often discovered rather than decided. It emerges through sustained attention to who you actually are, as distinct from who you think you should be or who others need you to be.",
    refs: ["Frederick Buechner, 'Wishful Thinking' (1973)", "Parker Palmer, 'Let Your Life Speak' (2000)", "Prov 4:23"],
  },
  {
    id: "identity",
    label: "Work and Identity",
    heading: "Work and Identity",
    subhead: "The worker who is more than her job",
    body: "Tim Keller, in 'Every Good Endeavor,' identifies the idolization of work as one of the dominant idols of the modern West: we find our identity, our worth, our sense of self in what we do and how well we do it. The first question at a party is 'What do you do?' — and the answer carries enormous identity freight. This makes job loss, professional failure, career stagnation, and retirement existentially catastrophic. If your work is your identity, losing your work is losing yourself. The theological problem is not ambition or excellence — it is making work carry weight it was never designed to carry. Work can be a meaningful expression of your identity in Christ; it cannot be the foundation of that identity. The Gospel's word to the driven, high-achieving, identity-in-career person is not 'work less' but 'your worth is not your output.' You are a child of God — beloved, known, called — before and after every professional achievement and failure. This frees you to work with genuine investment (because the work matters) without desperation (because your identity doesn't depend on the outcome).",
    refs: ["Tim Keller, 'Every Good Endeavor' (2012)", "Gal 2:20", "1 John 3:1"],
  },
  {
    id: "suffering",
    label: "Calling and Suffering",
    heading: "Calling and Suffering",
    subhead: "When your vocation is painful",
    body: "Joseph's story (Genesis 37-50) is the biblical case study in vocation through suffering. He received a clear calling — the dreams of Genesis 37 — and then spent the next two decades in a pit, in slavery, and in prison. His calling did not protect him from suffering; his suffering became the path through which his calling was fulfilled. Jeremiah is the other major figure: called to prophesy to a people who would not listen, told explicitly that his ministry would produce no visible fruit in his lifetime (Jeremiah 1), he nonetheless remained faithful while writing some of the most honest lament literature in the Bible (Lamentations). The church has often been irresponsibly optimistic about calling — implying that clarity about your vocation means smooth progress toward its fulfillment. The biblical pattern is closer to the opposite: clarity about calling often intensifies suffering, because you now know what the setbacks are costing you. The question the suffering vocation asks is not 'was I wrong about my calling?' but 'am I willing to trust God with the gap between what I was called to and what I am experiencing right now?'",
    refs: ["Gen 37-50 (Joseph)", "Jer 1:4-10; Lam 3:1-33", "Rom 8:28"],
  },
];

const MARKETPLACE_ITEMS = [
  {
    title: "The Sacred/Secular Divide",
    verse: "Gen 1:31; Col 1:16-17",
    body: "The idea that some parts of life belong to God (church, prayer, ministry) and other parts are merely secular (work, business, art, politics) is not a biblical distinction — it is a Greek philosophical inheritance that infected Christian theology. Andy Crouch, in 'Culture Making' (2008), argues that every domain of human culture-making is God's domain. The artist, the politician, the businessperson, and the software engineer are all working in territory that belongs to God. The question is not whether God is interested in their work — he is — but whether they will work in it faithfully. Colossians 1:16-17 is explicit: all things were created through Christ and for Christ, and in him all things hold together. There are no secular domains — only faithful and unfaithful ways of occupying God's world. The sacred/secular divide is a lie because there is no secular.",
  },
  {
    title: "Integrity and Ethics at Work",
    verse: "Lev 19:13; Col 4:1",
    body: "Leviticus 19:13 forbids withholding a worker's wages overnight; Colossians 4:1 commands employers to treat workers justly and fairly. The biblical tradition is relentlessly specific about workplace ethics: honest scales (Prov 11:1), paying fair wages (James 5:1-6), not cutting corners, telling the truth to customers even when it costs you the sale. The Christian in the workplace is not merely bound by what the law permits — she is bound by what honesty and love require. This includes the harder cases: whistleblowing when you see injustice, refusing to participate in practices you know are unethical, treating employees with the dignity of image-bearers rather than as units of production. Christian integrity in ordinary workplace situations — expense reports, credit for ideas, accuracy in bids, fairness in performance reviews — is one of the most consistent and quietly costly forms of workplace witness.",
  },
  {
    title: "Workplace Relationships",
    verse: "1 Pet 2:18-25; Eph 6:5-9",
    body: "Ephesians 6:5-9 and 1 Peter 2:18-25 address the employee/employer relationship in a context of first-century slavery — a far more coercive and unjust context than modern employment. Peter's word to slaves who suffer under unjust masters is extraordinary: this is commendable before God, because Christ himself suffered unjustly (1 Pet 2:19-21). This is not an endorsement of exploitation — it is a call to maintain integrity and dignity in situations you cannot change. For modern workers, this means: you can honor a difficult boss without pretending she is perfect. You can do excellent work in a toxic company without endorsing its toxicity. You can maintain your own integrity while acknowledging that the institution is broken. The Christian in a difficult workplace is not required to either pretend everything is fine or to treat the workplace as the enemy — she is called to be faithful in the specific situation she is in, while using legitimate means to change what can be changed.",
  },
  {
    title: "Business as Mission (BAM)",
    verse: "Jer 29:7; Matt 5:16",
    body: "Business as Mission (BAM) is the intentional use of business enterprise for Kingdom purposes — not as a cover for missionary activity but as genuine business that serves genuine human needs while making disciples and seeking community transformation. The MATS (Marketplace Advanced Training School) and organizations like the BAM Global Think Tank have developed frameworks for businesses that pursue the triple bottom line of profit, people, and planet with explicit Kingdom intentionality. The most honest critique of BAM frameworks is the Chick-fil-A model: a genuinely values-driven business that closes on Sundays and funds significant charitable work but whose charitable giving has been controversial and whose business model (fast food) raises its own public health questions. BAM is not a formula that makes any business automatically righteous — it is a posture that asks: how does this business serve human flourishing, and am I intentional about that question?",
  },
  {
    title: "Entrepreneurship and Risk",
    verse: "Matt 25:14-30; Prov 31:10-31",
    body: "The Parable of the Talents (Matthew 25:14-30) is one of the most direct endorsements of risk-taking in Scripture: the servant who buried his talent to keep it safe was condemned; the servants who invested and multiplied were praised. Proverbs 31:10-31 describes the capable wife as an entrepreneur: she considers a field and buys it, out of her earnings she plants a vineyard (v.16), she makes linen garments and sells them, and supplies the merchants with sashes (v.24). Joseph is another model: steward of Potiphar's household, manager of a prison, administrator of Egypt's grain program — each context a different kind of enterprise that he ran with excellence. Christian entrepreneurship is stewardship of talent and opportunity. The question is not whether risk is acceptable but whether the risk serves genuine human need, uses legitimate means, and treats all stakeholders — employees, customers, community, investors — with justice.",
  },
  {
    title: "When Work Is Soul-Crushing",
    verse: "Ps 13; Phil 4:11-13",
    body: "Not every Christian in a bad job should immediately quit. Not every Christian in a bad job should stay indefinitely. The discernment between endurance and departure is one of the most practically important questions in work theology, and the Bible does not give a formula — it gives a posture. Paul learned contentment in all circumstances (Philippians 4:11) — but Paul also left cities when it was time to leave, and he exercised genuine agency about where and how he worked. The questions worth sitting with: Is this job bad, or is all work hard? Is this a season of training, or is it genuine harm? Am I enduring faithfully, or am I rationalizing passivity? Do I have dependents whose needs I must weigh? Is God using this specific suffering for specific formation? Lament is permitted — Psalm 13 is in the canon. Pretending the work is fine when it is not is not faithfulness. But the Christian's stability in soul-crushing work comes not from the work's quality but from the same source as Paul's contentment in prison: I can do all this through him who gives me strength.",
  },
];

const REST_ITEMS = [
  {
    title: "Workaholism as Idolatry",
    verse: "Exod 20:3; Matt 6:24",
    body: "Tim Keller, in 'Every Good Endeavor,' identifies workaholism not as an excess of virtue but as a form of idolatry. The workaholic is not simply a person with poor work-life balance — she is a person who has made work her primary source of identity, meaning, control, and worth. The modern West has created an entire culture around this idol: busyness is a status symbol (I'm so busy signals importance), overwork is admired as dedication, and the person who leaves the office at 5pm is subtly suspected of lacking ambition. The 'hustle culture' of entrepreneurship takes this to an extreme: you should be willing to sacrifice everything for your startup. But Keller points out that the workaholic's anxiety is theological: if I stop, things will fall apart. This is a statement about who is actually holding the world together — and it is not the statement of a person who believes in providence. The antidote to workaholism is not primarily time management; it is repentance from the idolatry underneath it.",
  },
  {
    title: "The Sabbath Command",
    verse: "Exod 20:8-11; Deut 5:12-15",
    body: "The Sabbath command appears twice in the Torah, with two different rationales — and the difference is significant. Exodus 20:8-11 grounds the Sabbath in creation: rest because God rested on the seventh day, and you are made in his image. The rhythm of six-and-one is built into the cosmos, and you participate in it as a creature. Deuteronomy 5:12-15 grounds the Sabbath in liberation: rest because you were slaves in Egypt, and slaves don't get days off. You rest because you are free. The double rationale means that Sabbath rest is both creational (it fits how we are made) and redemptive (it embodies the freedom from bondage that the Gospel announces). The person who cannot rest is either denying their creaturely limitations or has not fully received the freedom that Christ purchased. Both rationales are indictments of the always-on work culture — one from creation, one from redemption.",
  },
  {
    title: "Sabbath Practices",
    verse: "Isa 58:13-14; Heb 4:9-11",
    body: "Walter Brueggemann, in 'Sabbath as Resistance' (2014), argues that Sabbath is not primarily about rest as recuperation — it is about resistance to the Egyptian ideology of endless production and consumption. Pharaoh never rested and never let his slaves rest; YHWH rests and commands rest. To keep Sabbath is to declare, in the most practical possible terms, that you are not Pharaoh's slave. Practically, a real Sabbath today looks something like: a full 24-hour period (for most people, an evening plus a day) in which productive, goal-oriented work stops; screens are optional but the news and email are off; the activities of the day are done for their own enjoyment rather than their output; worship is central; meals are unhurried; there is time for beauty and relationships and the kind of conversation that doesn't have an agenda. The question 'what counts as work?' is ultimately personal — but the failure mode is using that question to justify not actually stopping. Sabbath is a practice; it must be practiced to be known.",
  },
  {
    title: "Vacation, Play, and Delight",
    verse: "Prov 17:22; Eccl 3:1-8",
    body: "Josef Pieper, in 'Leisure: The Basis of Culture' (1952), made a philosophical argument that the modern reduction of all human activity to work (whether paid labor or productive self-improvement) has impoverished human civilization. Leisure — in Pieper's sense — is not idleness or entertainment-consumption; it is the contemplative dimension of human life, the capacity to receive reality rather than produce it, to be present rather than purposive. Worship is leisure in this sense; so is genuine play, the appreciation of beauty, the enjoyment of a meal with friends, the reading done for delight rather than information. Ecclesiastes 3 announces that there is a time for everything — including laughing, dancing, and embracing. Play is not the reward for work well done; it is a form of protest against the instrumentalism that would reduce all of life to utility. The Christian case for vacation is not merely that rest makes you more productive — though it does — but that human beings are more than productivity machines, and acting like it is a form of faithfulness.",
  },
  {
    title: "Creativity and Rest",
    verse: "Gen 2:2-3; Ps 127:2",
    body: "The psychology of creativity has consistently found that insight often arrives not during intense focus but during rest — walks, showers, the transition to sleep, the period after setting down a problem. Graham Wallas's four-stage model of creativity (Preparation, Incubation, Illumination, Verification) places Incubation — the stage where the unconscious mind continues working while the conscious mind rests — as essential to the creative process. Psalm 127:2 makes a parallel theological claim: it is in vain to rise early and stay up late, toiling for food to eat — he grants sleep to those he loves. The insight that comes during rest is not a violation of the work ethic — it is the fruit of the rhythm God built into human cognition. The sabbatical (seven years of work, one year of rest, from the agricultural law of Leviticus 25) is the long-form version of this principle: sustained creative work requires sustained periodic disengagement. The organizations and individuals who have built sabbatical rhythms into their patterns consistently report that the work that follows is richer, not poorer.",
  },
  {
    title: "Retirement and Legacy",
    verse: "Ps 71:17-18; 2 Tim 4:7",
    body: "Erik Erikson's final stage of adult development is generativity versus stagnation — the question of whether the second half of life is oriented toward nurturing the next generation or toward protecting one's own comfort and status. The Christian theology of retirement is not the secular vision of earned leisure after decades of toil — it is the concept of the encore career or the generative season: using the experience, wisdom, relationships, and freedom of later life to invest in others. Paul's last letter (2 Timothy) is the best model: written from prison, facing execution, he pours himself into Timothy's formation and leaves a legacy of teaching and community rather than a portfolio of achievements. The vocational question of later life is not 'what have I earned?' but 'what have I given, and what do I still have to give?' Finishing well — maintaining integrity, investing in the young, facing diminishment with grace — is a form of vocation as real and demanding as anything in the middle years. The legacy worth leaving is not primarily financial; it is a life that testified to the goodness and faithfulness of God.",
  },
];

function AccordionItem({
  title,
  verse,
  body,
  expanded,
  onToggle,
}: {
  title: string;
  verse: string;
  body: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ background: CARD, border: `1px solid ${expanded ? PURPLE + "50" : BORDER}`, borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "16px 20px",
          cursor: "pointer",
          textAlign: "left",
          background: "transparent",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
          <span style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{title}</span>
          <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{verse}</span>
        </div>
        <span style={{ color: MUTED, fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{expanded ? "−" : "+"}</span>
      </button>
      {expanded && (
        <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 14, margin: "16px 0 0" }}>{body}</p>
        </div>
      )}
    </div>
  );
}

export default function TheologyOfWorkPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [vocabSelected, setVocabSelected] = useState<string>("luther");

  function toggle(key: string) {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Work" },
    { id: "vocation", label: "Vocation & Calling" },
    { id: "marketplace", label: "Faith in the Marketplace" },
    { id: "rest", label: "Work and Rest" },
    { id: "videos", label: "Videos" },
  ];

  const selectedVocation = VOCATION_TOPICS.find(t => t.id === vocabSelected) ?? VOCATION_TOPICS[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 10, letterSpacing: -0.5 }}>Theology of Work</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Work is not a necessary evil — it is a creation gift, a vocation, and a form of worship. Monday is as sacred as Sunday. The question is not whether your work is spiritual, but whether it is done faithfully before God.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology of Work */}
        {activeTab === "theology" && (
          <div>
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 10, padding: "12px 18px", marginBottom: 24 }}>
              <span style={{ color: GREEN, fontWeight: 800, fontSize: 13 }}>Colossians 3:23 </span>
              <span style={{ color: TEXT, fontSize: 13 }}>"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."</span>
            </div>
            {THEOLOGY_ITEMS.map(item => (
              <AccordionItem
                key={item.title}
                title={item.title}
                verse={item.verse}
                body={item.body}
                expanded={!!expanded[item.title]}
                onToggle={() => toggle(item.title)}
              />
            ))}
          </div>
        )}

        {/* Tab 2: Vocation & Calling — sticky left panel */}
        {activeTab === "vocation" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            {/* Left list */}
            <div style={{ width: 220, flexShrink: 0, position: "sticky", top: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                {VOCATION_TOPICS.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setVocabSelected(t.id)}
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      textAlign: "left",
                      background: vocabSelected === t.id ? `${PURPLE}25` : "transparent",
                      border: "none",
                      borderBottom: `1px solid ${BORDER}`,
                      color: vocabSelected === t.id ? GREEN : MUTED,
                      fontWeight: vocabSelected === t.id ? 800 : 500,
                      fontSize: 13,
                      cursor: "pointer",
                      lineHeight: 1.4,
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right detail */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{selectedVocation.heading}</h2>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: 13, margin: "0 0 20px" }}>{selectedVocation.subhead}</p>
                <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 14, margin: "0 0 20px" }}>{selectedVocation.body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {selectedVocation.refs.map((ref, i) => (
                    <span key={i} style={{ background: `${PURPLE}18`, color: PURPLE, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{ref}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Faith in the Marketplace */}
        {activeTab === "marketplace" && (
          <div>
            <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: "12px 18px", marginBottom: 24 }}>
              <span style={{ color: PURPLE, fontWeight: 800, fontSize: 13 }}>Jeremiah 29:7 </span>
              <span style={{ color: TEXT, fontSize: 13 }}>"Seek the peace and prosperity of the city to which I have carried you into exile. Pray to the Lord for it, because if it prospers, you too will prosper."</span>
            </div>
            {MARKETPLACE_ITEMS.map(item => (
              <AccordionItem
                key={item.title}
                title={item.title}
                verse={item.verse}
                body={item.body}
                expanded={!!expanded["mkt_" + item.title]}
                onToggle={() => toggle("mkt_" + item.title)}
              />
            ))}
          </div>
        )}

        {/* Tab 4: Work and Rest */}
        {activeTab === "rest" && (
          <div>
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 10, padding: "12px 18px", marginBottom: 24 }}>
              <span style={{ color: GREEN, fontWeight: 800, fontSize: 13 }}>Genesis 2:2 </span>
              <span style={{ color: TEXT, fontSize: 13 }}>"And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done."</span>
            </div>
            {REST_ITEMS.map(item => (
              <AccordionItem
                key={item.title}
                title={item.title}
                verse={item.verse}
                body={item.body}
                expanded={!!expanded["rest_" + item.title]}
                onToggle={() => toggle("rest_" + item.title)}
              />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on theology of work and vocation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "fGH5bhUwMB4", title: "Redefining Work", channel: "Timothy Keller / The Gospel Coalition", description: "Tim Keller unfolds a comprehensive theology of vocation, showing why all work has dignity before God and how the gospel transforms our relationship to our calling." },
                  { videoId: "m0YyheSD6gM", title: "Faith and Work", channel: "Timothy Keller", description: "Delivered at Samford University on 'Every Good Endeavor: Connecting Your Work to God's Work' — Keller's most sustained treatment of how faith reshapes work." },
                  { videoId: "rTVIvdBIuLE", title: "Why Work Matters", channel: "Timothy Keller", description: "Keller argues that all Christians are engaged in God's work — not merely those in full-time ministry — and shows what it means to work 'as unto the Lord.'" },
                  { videoId: "F-DwK-Rzci0", title: "Our Work and Our Character", channel: "Timothy Keller", description: "A sermon examining the deep connection between the work we do and the character we form — how faithfulness in work shapes the soul." },
                  { videoId: "P8u8Cxpel94", title: "A Biblical Theology of Work — The Doctrine of Vocation", channel: "Adult Sunday School", description: "A thorough adult Sunday school session on the biblical doctrine of vocation, tracing the theology of work from creation through redemption to new creation." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
