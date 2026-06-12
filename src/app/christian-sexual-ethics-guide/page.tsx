"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

type Tab = "body" | "covenant" | "chastity" | "pastoral" | "celibacy" | "videos";

const BODY_THEOLOGY = [
  {
    id: "temple",
    title: "The Body as Temple (1 Corinthians 6:19-20)",
    ref: "1 Corinthians 6:19-20; Romans 12:1",
    body: "Paul’s foundational statement on the body is startling in its directness: “Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies.” (1 Cor 6:19-20). In the context of Corinth — a port city where sexual immorality was normalized — Paul makes a counterintuitive claim: the body matters to God. Not merely the soul, not merely the mind, but the physical body is the dwelling place of the Spirit. This is the theological foundation for all Christian sexual ethics.\n\nThe logic flows from the Incarnation and the Resurrection. The Word became flesh (John 1:14) — God took a human body as his permanent dwelling. And Jesus rose bodily (Luke 24:39) — his resurrection body was recognizable, touchable, capable of eating. Christianity is the only major world religion that does not treat the body as a cage to escape. It is the only religion whose founder rose bodily and whose eschatology involves a new creation of embodied life. The body is not a problem to solve; it is a gift to steward.\n\nRomans 12:1 reinforces this: “offer your bodies as a living sacrifice, holy and pleasing to God — this is your true and proper worship.” Worship is not merely what happens with the mind during a church service; it is what happens with the body every day. Sexual ethics is therefore a form of worship — the body either glorifies God or treats itself as its own sovereign.",
  },
  {
    id: "creation",
    title: "The Goodness of the Body in Creation",
    ref: "Genesis 1:31; Genesis 2:24-25",
    body: "Genesis 1:31 closes the creation account with God’s evaluation of everything he has made: “God saw all that he had made, and it was very good.” The Hebrew tov me’od — very good — includes the body, including sexuality. The creation of humanity as “male and female” (Gen 1:27) is part of the goodness. The first human being’s joy at the creation of the other — “This is now bone of my bones and flesh of my flesh” (2:23) — is an exuberant bodily response. And the concluding statement of chapter 2, “Adam and his wife were both naked, and they felt no shame,” describes a pre-fallen sexuality in which bodily life was fully transparent, fully known, fully secure.\n\nThe Fall does not reverse this goodness — it disorders it. Genesis 3:7 records the immediate consequence: “the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves.” Shame, hiddenness, and covering are the consequences of sin entering embodied life. The gospel is not a flight from the body; it is the restoration of what was lost — the new creation in which bodies are glorified and shame is banished.",
  },
  {
    id: "incarnation",
    title: "The Incarnation as Affirmation of Embodiment",
    ref: "John 1:14; Hebrews 2:14-18; 4:15",
    body: "The Incarnation — God becoming flesh in Jesus Christ — is the most radical statement Christianity makes about the body. “The Word became flesh and made his dwelling among us” (John 1:14). The Greek word for flesh, sarx, is the same word used elsewhere for sinful human nature. John is not being careless: he is making the most daring claim in religious history. God did not merely appear to have a body; he took one. He was born of a woman, felt hunger and thirst, wept, bled, and died.\n\nHebrews 2:14-18 draws out the soteriological significance: “Since the children have flesh and blood, he too shared in their humanity… For this reason he had to be made like them, fully human in every way, in order that he might become a merciful and faithful high priest.” The body is not incidental to redemption; it is the vehicle of it. The high priest who intercedes for us is the one who shared our embodied life.\n\nThis means that Christian sexual ethics is not a Greek dualism that despises the body and distrusts pleasure. It is a theology that takes the body so seriously that it must be ordered, protected, and oriented toward its proper telos in God.",
  },
  {
    id: "resurrection",
    title: "The Resurrection Body and the Eschatological Body",
    ref: "1 Corinthians 15:35-49; Revelation 21:1-5",
    body: "Paul’s great chapter on the resurrection (1 Cor 15) addresses the question: “With what kind of body will they come?” His answer is not that bodies will be discarded but that they will be transformed. The resurrection body is sown perishable, raised imperishable; sown in dishonor, raised in glory; sown in weakness, raised in power; sown a natural body, raised a spiritual body (15:42-44). The word “spiritual” here does not mean immaterial — it means a body animated and permeated by the Holy Spirit.\n\nThe eschatological vision of Revelation 21 is not disembodied souls floating in a cloud but a new creation — a renewed earth in which the dwelling of God is with human beings (21:3). The whole of creation, including the physical, is redeemed, not escaped. Christian hope is therefore not the soul’s escape from the body but the body’s transformation and glorification.\n\nThis eschatological horizon reframes sexual ethics: the body is not a temporary container to use however we wish before discarding it. It is the very thing that will be raised, glorified, and brought into the final communion with God. How we treat it now is a statement about what we believe about what it is worth.",
  },
];

const COVENANT_ITEMS = [
  {
    id: "song",
    title: "Song of Solomon: Sex as Delight and Sign",
    ref: "Song of Solomon 1-8; Genesis 2:24",
    body: "The Song of Solomon is the most explicit erotic poetry in the Bible, and its presence in the canon is itself a theological statement: human sexuality, at its finest, is a gift worthy of celebration. The poem uses rich agricultural and natural imagery to describe the delight of lovers: “Let him kiss me with the kisses of his mouth — for your love is more delightful than wine” (1:2); “His left arm is under my head, and his right arm embraces me” (2:6). This is not allegorized away in the earliest interpretations; it is physical, particular, sensuous delight.\n\nThe church has read the Song at multiple levels: as a celebration of human erotic love within marriage, and as an analogy for the love between God and his people (the allegorical reading of Origen and Bernard of Clairvaux). Both readings are probably intended. Human erotic love, rightly ordered in covenant, is the closest earthly image of the passionate, exclusive, delighting love that God has for his people and that reaches its fullness in the marriage of the Lamb (Rev 19:7-9).\n\nThis is the meaning of Genesis 2:24: “That is why a man leaves his father and mother and is united to his wife, and they become one flesh.” Jesus quotes this in Mark 10:7-9 to ground his teaching on marriage. The one-flesh union is not merely a social arrangement; it is a covenant sign — a bodily enactment of the covenant commitment “until death do us part.”",
  },
  {
    id: "sign",
    title: "Sex as Covenant Sign",
    ref: "Ephesians 5:25-32; 1 Corinthians 7:3-5; Hosea 2",
    body: "Paul’s great passage on marriage in Ephesians 5:25-32 culminates in a startling statement: “This is a profound mystery — but I am talking about Christ and the church” (v. 32). The human marriage is not merely a social institution; it is an enacted sign of the relationship between Christ and the church. The husband’s self-giving love images Christ’s sacrifice for his bride; the wife’s trusting submission images the church’s trust in Christ. Sex within marriage is therefore a covenant renewal act — a bodily re-enactment of the permanent, exclusive, self-giving commitment the covenant requires.\n\nThis reframes sexual ethics entirely. The question is not merely “is this harmful?” but “what does this act signify?” Sex outside of marriage does not lack physical pleasure; it lacks the covenant context that gives it its full meaning. The body is saying something — “I give myself to you completely and permanently” — that is not true apart from the covenant. This is why Paul calls sexual immorality a sin against the body itself (1 Cor 6:18): it misuses the sign.\n\nThe prophet Hosea uses marital unfaithfulness as the central image of Israel’s idolatry, and God’s pursuit of Israel as the image of covenant restoration. Hosea’s painful marriage to Gomer is a living parable: Israel has prostituted itself to false gods, and God, like Hosea, refuses to abandon his covenant. The sexual metaphor works because sex is covenant-laden; infidelity of the body is the closest analog to infidelity of the soul.",
  },
  {
    id: "marriage",
    title: "Marriage as the Proper Context",
    ref: "Matthew 19:4-6; Hebrews 13:4; 1 Corinthians 7",
    body: "Jesus, when asked about divorce, grounds his answer in the creation order: “Haven’t you read that at the beginning the Creator made them male and female, and said, ‘For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh’? So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate” (Matt 19:4-6). The logic of sexual ethics traces back to creation: this is how things were designed to be.\n\nHebrews 13:4 is brief and direct: “Marriage should be honored by all, and the marriage bed kept pure, for God will judge the adulterer and all the sexually immoral.” The positive statement comes first: marriage is to be honored. Sexual purity is not a set of prohibitions but a protection of something precious.\n\n1 Corinthians 7 is Paul’s extended pastoral discussion of sexuality, celibacy, and marriage. His core principle: “Because of the temptation to sexual immorality, each man should have his own wife and each woman her own husband” (7:2). Marriage is not the only calling, but it is the appropriate context for sexual expression. Paul also affirms, in 7:9, that “it is better to marry than to burn with passion” — a frank acknowledgment that sexual desire is real and marriage is its proper home.",
  },
];

const CHASTITY_ITEMS = [
  {
    id: "virtue",
    title: "Chastity as Positive Virtue",
    ref: "1 Thessalonians 4:3-5; Philippians 4:8; 2 Timothy 2:22",
    body: "The popular understanding of chastity is almost entirely negative: it is the absence of sex. But the classical Christian tradition understood chastity as a positive virtue — not mere restraint but the proper ordering of sexual desire toward its right end. Chastity is the virtue of integrated sexuality: the married person who is fully and exclusively given to their spouse; the single person who channels sexual energy into relationship with God, neighbor, and community; the celibate who has received the gift of undivided devotion.\n\nC.S. Lewis put it memorably in Mere Christianity: “Chastity is the most unpopular of the Christian virtues. There is no getting away from it; the Christian rule is either marriage, with complete faithfulness to your partner, or else total abstinence. Now this is so difficult and so contrary to our instincts, that obviously either Christianity is wrong or our sexual instinct, as it now is, has gone wrong.” Lewis’s point is that chastity is demanding precisely because our desires are disordered, not because the body is evil.\n\nPaul in 1 Thessalonians 4:3-5 describes the positive aspiration: “It is God’s will that you should be sanctified: that you should avoid sexual immorality; that each of you should learn to control your own body in a way that is holy and honorable, not in passionate lust like the pagans, who do not know God.” The contrast is not between desire and no desire but between passionate lust (unordered) and holy, honorable embodiment (ordered by the knowledge of God).",
  },
  {
    id: "history",
    title: "The Church’s Historic Teaching",
    ref: "Augustine, Confessions; Thomas Aquinas, Summa Theologica; Westminster Confession of Faith",
    body: "The church’s historic teaching on sexuality has not been simply “no sex outside marriage.” It has been a rich vision of ordered human sexuality rooted in creation, covenant, and eschatology. Augustine of Hippo, who struggled intensely with sexual desire before his conversion (his prayer “Grant me chastity and continence, but not yet” is among the most honest in Christian history), came to understand chastity as the reorientation of disordered loves toward God. His Confessions is a map of a disordered heart finding its rest.\n\nThomas Aquinas located sexual sin among the capital sins not because sex is bad but because it is powerful: disordered sexuality, like disordered appetite, distorts the whole person. Aquinas distinguished between sins against nature (those that contradict the natural order of human sexuality) and sins against reason (those that are wrong by human reason alone). This framework has shaped Catholic moral theology and continues to influence Protestant ethics.\n\nThe Protestant reformers affirmed marriage as a full calling, not merely a concession to weakness, and rejected the Catholic elevation of celibacy above marriage. Luther’s own marriage to Katharina von Bora was a theological statement: married life is a place of holiness, not a lower order. The Westminster Confession’s chapter on marriage (24) summarizes the Reformed position: marriage is between one man and one woman, for mutual help, for the prevention of immorality, and for the increase of the church.",
  },
  {
    id: "purity-culture",
    title: "Beyond Purity Culture",
    ref: "Romans 8:1; 2 Corinthians 5:17; Galatians 5:1",
    body: "The “purity culture” movement of the 1990s and 2000s — epitomized by purity rings, abstinence pledges, and books like I Kissed Dating Goodbye — attempted to cultivate chastity but often did so in ways that produced shame, poor theology, and harm. Critics including Sheila Wray Gregoire (The Great Sex Rescue) and Sara Moslener have documented the damage: women taught that their worth was tied to their sexual history, men taught that women were gatekeepers rather than persons, unmarried people whose identity became defined entirely by their sexual status.\n\nThe critique of purity culture is not a critique of chastity. It is a critique of a particular distorted version of chastity that is shame-based rather than grace-based, body-negative rather than body-honoring, and focused on the what (no sex) rather than the why (sexuality ordered toward covenant love and the glory of God).\n\nBiblical chastity is not about remaining technically pure; it is about being formed as a person whose sexuality is integrated into their whole life as a disciple. It begins not with shame but with Romans 8:1: “Therefore, there is now no condemnation for those who are in Christ Jesus.” The person whose sexual history is complex is not a broken vessel; they are a person for whom Christ died and who is being made new (2 Cor 5:17).",
  },
];

const PASTORAL_ITEMS = [
  {
    id: "no-condemnation",
    title: "No Condemnation: Grace for Sexual Sin",
    ref: "John 8:3-11; Romans 8:1; 1 Corinthians 6:9-11",
    body: "The most important text for pastoral care in the area of sexual sin is John 8:3-11 — the woman caught in adultery. The Pharisees bring her to Jesus, citing the law’s requirement of stoning. Jesus’s response is devastating to her accusers: “Let any one of you who is without sin be the first to throw a stone at her.” One by one they leave. Then, alone with her, he says: “Has no one condemned you?” “No one, sir,” she says. “Then neither do I condemn you,” Jesus declared. “Go now and leave your life of sin.”\n\nThe sequence is theologically precise: no condemnation first, then the call to holiness. He does not minimize the sin (“leave your life of sin” is a real command) but he refuses to make condemnation the first word. The woman who was brought in shame leaves without it. This is the pattern for pastoral care in the area of sexual sin.\n\nPaul’s list in 1 Corinthians 6:9-11 is sobering — sexually immoral, idolaters, adulterers, men who have sex with men among those who will not inherit the kingdom. But the next verse is the pastoral pivot: “And that is what some of you were. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God.” Were. Past tense. The gospel changes identity, not merely behavior.",
  },
  {
    id: "shame",
    title: "Sexual Shame and the Gospel",
    ref: "Romans 10:11; Isaiah 54:4; Hebrews 12:2",
    body: "Sexual shame is among the most persistent and disabling forms of shame the pastoral counselor encounters. Unlike other areas of sin, sexual sin often feels like identity-defining failure: it is not merely something I did but something that tells me what I am. People carry this shame in silence for years or decades, convinced that their history disqualifies them from full belonging in the church or from intimacy with God.\n\nThe gospel addresses shame not by minimizing what was done but by redefining identity. Romans 10:11 quotes Isaiah: “Anyone who believes in him will never be put to shame.” This is an eschatological promise with present application: the person who is in Christ will not be brought to ultimate shame before God. Isaiah 54:4 promises: “Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated. You will forget the shame of your youth.” The gospel does not erase memory but it transforms what that memory means.\n\nHebrews 12:2 describes Jesus as the one who “for the joy set before him endured the cross, despising the shame.” The cross was designed to be maximally shameful — public exposure, nakedness, the curse of hanging. Jesus entered that shame and emptied it of its power. The resurrection is the declaration that shame does not have the last word. Pastoral care for sexual shame begins here: not with techniques but with the proclamation that shame is not the end of the story.",
  },
  {
    id: "ssa",
    title: "Same-Sex Attraction and the Church",
    ref: "Romans 1:24-27; 1 Corinthians 6:9-11; Matthew 11:28-30",
    body: "Few areas of sexual ethics require more pastoral care and theological precision than same-sex attraction. The church has often gotten this wrong in two opposite directions: either treating same-sex attraction as uniquely horrifying (a singling-out that is inconsistent with how heterosexual sexual sin is treated) or capitulating to the surrounding culture’s affirmation of same-sex relationships without serious engagement with Scripture.\n\nThe historic Christian position, shared by Catholics, Eastern Orthodox, and most Protestant traditions, is that same-sex sexual behavior is outside God’s design as revealed in Scripture (Genesis 2, Leviticus 18 and 20, Romans 1, 1 Corinthians 6, 1 Timothy 1) and that the appropriate response for those who experience same-sex attraction is either celibacy or, if called to marriage, marriage to a person of the opposite sex. This position does not require that same-sex attraction be treated as a special category of sin — Paul’s lists in 1 Corinthians 6 and elsewhere include many forms of sexual and other sin without ranking them.\n\nThe pastoral task is distinct from the ethical task. People who experience same-sex attraction and are committed to celibacy (voices like Wesley Hill, author of Washed and Waiting, and Eve Tushnet, author of Gay and Catholic) have written movingly about the cost and the grace of that calling. The church’s calling is to be a place where they are genuinely known, genuinely loved, and genuinely accompanied — not at arm’s length, not singled out for a special kind of suspicion, but as full members of the body whose particular calling requires the church’s particular support.",
  },
];

const CELIBACY_ITEMS = [
  {
    id: "gift",
    title: "Celibacy as Spiritual Gift",
    ref: "Matthew 19:10-12; 1 Corinthians 7:7-8; 7:32-35",
    body: "Jesus introduces the category of celibacy for the kingdom in Matthew 19:10-12, in the context of his teaching on marriage: “Not everyone can accept this word, but only those to whom it has been given. For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it.” Celibacy is not inferior to marriage; it is a different calling.\n\nPaul in 1 Corinthians 7 is even more explicit: “I wish that all of you were as I am [unmarried]. But each of you has your own gift from God; one has this gift, another has that” (7:7). Celibacy is named as a spiritual gift — not an absence but a calling. Paul’s case for celibacy is eschatological: “The time is short” (7:29); the unmarried person “is concerned about the Lord’s affairs — how he can please the Lord” (7:32).\n\nThe Protestant tradition, in its proper reaction against medieval distortions that elevated celibacy into the only truly holy calling, has sometimes undervalued it. The evangelical church often treats singleness as a waiting room rather than a vocation. This is a theological impoverishment. The celibate life is not a lesser life; it is a life that witnesses in a particular way to the sufficiency of God and the coming kingdom in which there is neither marriage nor giving in marriage (Matt 22:30).",
  },
  {
    id: "church",
    title: "The Church as Family for the Celibate",
    ref: "Mark 3:33-35; Acts 2:44-46; 1 Timothy 5:1-2",
    body: "If celibacy is a genuine calling and not merely the absence of a spouse, then the church has a corresponding obligation: to be a genuine community of belonging for those who are unmarried. Jesus’s statement that his family is “whoever does God’s will” (Mark 3:35) is not a dismissal of biological family but an expansion of the category of family to include the whole community of disciples. The church is not a gathering of married couples with single people on the margin; it is the family of God in which every member is fully a member.\n\nThe early church embodied this: Acts 2:44-46 describes a community in which people “had everything in common,” met daily, and ate together in homes. Paul’s instruction to Timothy to treat “older men as fathers, younger men as brothers, older women as mothers, younger women as sisters” (1 Tim 5:1-2) assigns familial roles across the whole community. The single person in the church of 1 Timothy was not isolated; they were embedded in a dense network of familial relationships.\n\nThe contemporary evangelical church, organized around nuclear family life — the couples’ small group, the family-oriented Sunday morning program, the pew designed for families — has often failed to be this kind of community. People who are single by choice, by circumstance, or by calling report feeling that the church is organized for married people and they are invisible. The reform required is not merely programmatic; it is ecclesiological — a recovery of the church as genuinely the family of God in which every member has a home.",
  },
];

const VIDEOS = [
  {
    videoId: "izMWGlQTOdY",
    title: "The Theology of the Body — Christopher West",
    channel: "Theology of the Body Institute",
    description: "Christopher West unpacks John Paul II’s theological vision of the body, sex, and the meaning of the human person. A rich theological framework for understanding sexuality in its full biblical context.",
  },
  {
    videoId: "T3HtKnCFT2A",
    title: "Sex, God, and the Gospel — Tim Keller",
    channel: "Gospel in Life",
    description: "Keller on the Christian vision of sexuality, why the Bible’s ethic is not simply restrictive but profoundly life-giving, and how the gospel transforms sexual identity and behavior.",
  },
  {
    videoId: "Dqy8xnEVSgc",
    title: "Washed and Waiting: Same-Sex Attraction and the Church — Wesley Hill",
    channel: "Biola University",
    description: "Wesley Hill, author of Washed and Waiting, speaks with pastoral honesty about living with same-sex attraction and celibacy as a Christian calling, and what the church owes those in his position.",
  },
];

const TAB_LABELS: Record<Tab, string> = {
  body: "Theology of the Body",
  covenant: "Sex as Covenant Sign",
  chastity: "Chastity & History",
  pastoral: "Pastoral Care",
  celibacy: "Celibacy as Gift",
  videos: "Videos",
};

export default function ChristianSexualEthicsGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<Tab>("body");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => { setLoaded(true); }, []);

  if (!loaded) return null;

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const TABS: Tab[] = ["body", "covenant", "chastity", "pastoral", "celibacy", "videos"];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44, paddingTop: 40 }}>
          <div style={{ display: "inline-block", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 14px", fontSize: 11, color: TEAL, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Christian Ethics
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 14, lineHeight: 1.2 }}>
            Christian Sexual Ethics
          </h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 680, margin: "0 auto", lineHeight: 1.75 }}>
            A biblical theology of the body, sex as covenant sign, chastity as positive virtue,
            the church&rsquo;s historic teaching, pastoral care for sexual sin, celibacy as spiritual gift,
            and same-sex attraction &mdash; theologically grounded and pastorally honest.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 36, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 4, flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "9px 16px",
                borderRadius: 8,
                border: "none",
                background: tab === t ? TEAL : "transparent",
                color: tab === t ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
                flex: 1,
                minWidth: 100,
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {/* ─── Tab: Theology of the Body ─── */}
        {tab === "body" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${TEAL}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Christianity is not a Greek dualism that despises the body. It is the only major religion whose founder rose bodily, whose sacred text begins with God declaring the body &ldquo;very good,&rdquo; and whose ethics are grounded in the claim that your body is a temple of the Holy Spirit. The sections below trace this theology from creation through incarnation to resurrection.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {BODY_THEOLOGY.map((item) => {
                const open = !!expanded[item.id];
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? TEAL : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: TEAL, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", display: "inline-block" }}>&#9662;</span>
                    </button>
                    {open && (
                      <div style={{ padding: "4px 22px 22px", color: MUTED, fontSize: 14, lineHeight: 1.85, borderTop: `1px solid ${BORDER}`, whiteSpace: "pre-line" }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Tab: Sex as Covenant Sign ─── */}
        {tab === "covenant" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Christian sexual ethics is not simply a rule system. It is a theology of sign and covenant. The Song of Solomon celebrates erotic delight within covenant. Ephesians 5 reveals that human marriage is a living sign of Christ and the church. Sex means something &mdash; and its meaning is covenantal.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {COVENANT_ITEMS.map((item) => {
                const open = !!expanded[item.id];
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? GOLD : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", display: "inline-block" }}>&#9662;</span>
                    </button>
                    {open && (
                      <div style={{ padding: "4px 22px 22px", color: MUTED, fontSize: 14, lineHeight: 1.85, borderTop: `1px solid ${BORDER}`, whiteSpace: "pre-line" }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Tab: Chastity & History ─── */}
        {tab === "chastity" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Chastity is not the absence of sex. It is the positive virtue of rightly ordered sexuality &mdash; the whole person&rsquo;s body, desire, and will aligned toward their proper end. The church&rsquo;s historic teaching, from Augustine to the Reformers, is richer and more grace-filled than &ldquo;purity culture&rdquo; suggested.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {CHASTITY_ITEMS.map((item) => {
                const open = !!expanded[item.id];
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? PURPLE : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: PURPLE, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", display: "inline-block" }}>&#9662;</span>
                    </button>
                    {open && (
                      <div style={{ padding: "4px 22px 22px", color: MUTED, fontSize: 14, lineHeight: 1.85, borderTop: `1px solid ${BORDER}`, whiteSpace: "pre-line" }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Tab: Pastoral Care ─── */}
        {tab === "pastoral" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                The gospel does not begin with condemnation. The first word to the woman caught in adultery was not &ldquo;you have sinned&rdquo; but &ldquo;neither do I condemn you.&rdquo; Pastoral care for those who have sinned sexually &mdash; or who experience same-sex attraction &mdash; must begin here, with grace, and move from grace toward holiness, not the other direction.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PASTORAL_ITEMS.map((item) => {
                const open = !!expanded[item.id];
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? GREEN : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: GREEN, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", display: "inline-block" }}>&#9662;</span>
                    </button>
                    {open && (
                      <div style={{ padding: "4px 22px 22px", color: MUTED, fontSize: 14, lineHeight: 1.85, borderTop: `1px solid ${BORDER}`, whiteSpace: "pre-line" }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Callout: Voices for the Journey */}
            <div style={{ marginTop: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 16, marginTop: 0 }}>Voices Worth Hearing</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { name: "Wesley Hill", work: "Washed and Waiting (2010)", note: "A gay celibate Christian scholar on the cost and grace of the celibate calling, and what the church owes those in his position." },
                  { name: "Eve Tushnet", work: "Gay and Catholic (2014)", note: "A Catholic convert who experiences same-sex attraction, on how the church’s tradition of friendship, service, and beauty can sustain a celibate life." },
                  { name: "Sheila Wray Gregoire", work: "The Great Sex Rescue (2021)", note: "A thorough critique of purity culture’s harmful teachings and a recovery of a grace-based, mutuality-centered Christian sexual ethic." },
                  { name: "Christopher West", work: "Theology of the Body Explained (2007)", note: "The most accessible introduction to John Paul II’s theology of the body — the richest sustained biblical theology of sexuality in modern Christian thought." },
                ].map((v) => (
                  <div key={v.name} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, marginTop: 7, flexShrink: 0 }} />
                    <div>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</span>
                      <span style={{ color: GOLD, fontSize: 13, marginLeft: 8 }}>{v.work}</span>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: "4px 0 0" }}>{v.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── Tab: Celibacy as Gift ─── */}
        {tab === "celibacy" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Jesus called celibacy a gift &ldquo;for the sake of the kingdom&rdquo; (Matt 19:12). Paul listed it among spiritual gifts (1 Cor 7:7). The Protestant church has often treated singleness as a waiting room; it is actually a vocation &mdash; one that the church has a specific obligation to support and honor.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {CELIBACY_ITEMS.map((item) => {
                const open = !!expanded[item.id];
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? GOLD : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", display: "inline-block" }}>&#9662;</span>
                    </button>
                    {open && (
                      <div style={{ padding: "4px 22px 22px", color: MUTED, fontSize: 14, lineHeight: 1.85, borderTop: `1px solid ${BORDER}`, whiteSpace: "pre-line" }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Scripture card */}
            <div style={{ marginTop: 28, background: CARD, border: `1px solid ${GOLD}`, borderRadius: 14, padding: "22px 26px" }}>
              <div style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Key Text</div>
              <blockquote style={{ color: TEXT, fontSize: 16, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 8px", borderLeft: `3px solid ${GOLD}`, paddingLeft: 16 }}>
                &ldquo;I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that.&rdquo;
              </blockquote>
              <p style={{ color: MUTED, fontSize: 12, margin: 0 }}>1 Corinthians 7:7 &mdash; Paul on celibacy as a spiritual gift, equal in dignity to the gift of marriage</p>
            </div>
          </div>
        )}

        {/* ─── Tab: Videos ─── */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {VIDEOS.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "16px 20px" }}>
                  <h4 style={{ color: TEAL, fontWeight: 700, fontSize: 16, marginBottom: 4, marginTop: 0 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8, marginTop: 0 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
