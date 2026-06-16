"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const OVERVIEW_FACTS = [
  { key: "Book", value: "Hebrews" },
  { key: "Chapter", value: "13 (final chapter)" },
  { key: "Genre", value: "Hortatory Letter" },
  { key: "Audience", value: "Jewish Christians under pressure to return to the old covenant" },
  { key: "Key Verse", value: "Heb 13:8 &mdash; &ldquo;Jesus Christ is the same yesterday and today and forever.&rdquo;" },
  { key: "Theme", value: "Practical Christian community grounded in the unchanging Christ" },
];

const THEMES = [
  {
    id: "brotherly-love",
    color: GREEN,
    title: "Brotherly Love in Community",
    verse: "Hebrews 13:1",
    body: "The opening command &mdash; &ldquo;Let brotherly love continue&rdquo; (philadelphia) &mdash; is deliberately placed first. The entire letter has been building a theology of Christ&rsquo;s surpassing greatness; now that theology must express itself in how the community treats one another. Philadelphia is not general benevolence but the specific warmth of a family &mdash; the kind of love that endures inconvenience, absorbs offence, and persists through difficulty. The author does not say &ldquo;begin brotherly love&rdquo; but &ldquo;let it continue.&rdquo; The assumption is that something has already been begun; the danger is that suffering, pressure, and disappointment will erode it. The exhortation is to maintain what has been given."
  },
  {
    id: "hospitality",
    color: GOLD,
    title: "Hospitality to Strangers",
    verse: "Hebrews 13:2",
    body: "&ldquo;Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it.&rdquo; The Greek word is philoxenia &mdash; love of strangers. The counter-cultural nature of this command in the ancient world (and ours) is significant: the ordinary human impulse is philautia (love of self) or philadelphia (love of known friends). Philoxenia extends the circle to those outside the household. The reference to Abraham and Sarah (Genesis 18) &mdash; who received three visitors, one of whom was the Lord &mdash; reminds the reader that the stranger at the door may be far more than they appear. Hospitality in the early church was also practically crucial: traveling believers, preachers, and missionaries depended on it."
  },
  {
    id: "marriage",
    color: PURPLE,
    title: "Marriage Honored and the Bed Undefiled",
    verse: "Hebrews 13:4",
    body: "&ldquo;Marriage should be honored by all, and the marriage bed kept pure, for God will judge the adulterer and all the sexually immoral.&rdquo; The exhortation comes in a context of community formation: before and after it are commands about concrete relationships &mdash; brotherly love, prisoners, strangers. Marriage is not treated as a private religious domain but as a community concern. The word for &ldquo;honored&rdquo; (timios) means precious, of great value &mdash; the same word used for precious metals. The author gives both positive and negative motivations: positively, marriage is inherently valuable as God&rsquo;s design; negatively, God judges those who treat it as disposable. The two poles guard against both legalism (reducing marriage to rule-following) and antinomianism (treating it as arbitrary)."
  },
  {
    id: "contentment",
    color: TEAL,
    title: "Contentment and the Presence of God",
    verse: "Hebrews 13:5-6",
    body: "&ldquo;Keep your lives free from the love of money and be content with what you have, because God has said, &lsquo;Never will I leave you; never will I forsake you.&rsquo; So we say with confidence, &lsquo;The Lord is my helper; I will not be afraid. What can mere mortals do to me?&rsquo;&rdquo; The connection between contentment and the divine presence is the theological core of this section. The reason the believer can be content is not stoic willpower but a settled assurance about God&rsquo;s presence. The double-negative in the Greek of the divine promise (&ldquo;never, no never&rdquo;) is as emphatic as the language allows. Hebrews quotes Deuteronomy 31:6 (spoken to Israel at the Jordan) and Psalm 118:6 (the confidence of the persecuted righteous). The same God who brought Israel into the land, the same God who delivered the psalmist, is with the readers of Hebrews."
  },
  {
    id: "unchanging-christ",
    color: "#E11D48",
    title: "Jesus Christ the Same Yesterday, Today, and Forever",
    verse: "Hebrews 13:8",
    body: "&ldquo;Jesus Christ is the same yesterday and today and forever.&rdquo; This is one of the most majestic sentences in all of Scripture. In context it anchors two things: backward (&ldquo;remember your leaders,&rdquo; v.7) and forward (&ldquo;do not be led away by all kinds of strange teachings,&rdquo; v.9). The unchangeableness of Christ is the criterion for evaluating both tradition and innovation. He does not change with cultural fashion; he does not alter his nature between his first coming and his second. The faith delivered to the saints (Jude 3) corresponds to a Lord who is eternally consistent. The great danger in any era is trading this solid foundation for the novelty of &ldquo;strange teachings&rdquo; &mdash; teachings that seem sophisticated or current but do not have their root in the unchanging Christ."
  },
  {
    id: "outside-camp",
    color: "#3B82F6",
    title: "Outside the Camp",
    verse: "Hebrews 13:10-14",
    body: "&ldquo;We have an altar from which those who minister at the tabernacle have no right to eat... let us, then, go to him outside the camp, bearing the disgrace he bore. For here we do not have an enduring city, but we are looking for the city that is to come.&rdquo; This is the theological climax of Hebrews 13. The imagery draws on Leviticus 16 &mdash; on the Day of Atonement, the bodies of the sacrificial animals were burned &ldquo;outside the camp.&rdquo; Jesus was crucified outside Jerusalem, in the place of disgrace. The call to &ldquo;go to him outside the camp&rdquo; is a call to identify with Christ in his rejection &mdash; to abandon the prestige and security of official religious status in order to be with him in his shame. The counterweight to this potentially costly path is eschatological: the enduring city is coming. The present camp is not permanent; the city to come is."
  },
  {
    id: "sacrifice-praise",
    color: MUTED,
    title: "The Sacrifice of Praise",
    verse: "Hebrews 13:15-16",
    body: "&ldquo;Through Jesus, therefore, let us continually offer to God a sacrifice of praise &mdash; the fruit of lips that openly profess his name. And do not forget to do good and to share with others, for with such sacrifices God is pleased.&rdquo; With the levitical sacrificial system rendered obsolete by Christ&rsquo;s once-for-all offering, what sacrifices remain? Two: the sacrifice of praise (worship in word and song, the &ldquo;fruit of lips&rdquo;) and the sacrifice of good works and generosity. These are not ways of earning God&rsquo;s favor &mdash; they are offered &ldquo;through Jesus,&rdquo; grounded in what he has already accomplished. Worship and service are the two wings of the Christian life: the vertical (praise to God) and the horizontal (good and sharing with others). Neither can be neglected without impoverishing both."
  },
];

const VERSES = [
  {
    ref: "v.1",
    text: "Let brotherly love continue.",
    heading: "Brotherly Love",
    color: GREEN,
    commentary: "The letter&rsquo;s practical section opens not with rules but with love &mdash; specifically philadelphia, the love between family members. This word carries emotional warmth and sacrificial loyalty. The verb &ldquo;continue&rdquo; (menet&ocirc;) implies that brotherly love is already present but needs intentional maintenance. The context &mdash; a community under pressure to abandon its identity &mdash; makes this exhortation urgent. Love for fellow believers is both the evidence that theological conviction has taken root and the soil in which it grows deeper."
  },
  {
    ref: "v.2",
    text: "Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it.",
    heading: "Hospitality and Angels",
    color: GOLD,
    commentary: "Philoxenia (hospitality to strangers) was a cardinal virtue in the ancient world, but Hebrews gives it a theological twist. The allusion is to Abraham (Genesis 18) and Lot (Genesis 19), who received divine messengers as ordinary guests. The point is not that every stranger is an angel in disguise, but that the stranger deserves the same generous welcome you would give an angel of God. The &ldquo;without knowing it&rdquo; clause reveals that true hospitality is given without calculation of return. It is given freely precisely because the giver cannot know what they are receiving."
  },
  {
    ref: "vv.3-4",
    text: "Continue to remember those in prison as if you were together with them in prison, and those who are mistreated as if you yourselves were suffering. Marriage should be honored by all, and the marriage bed kept pure, for God will judge the adulterer and all the sexually immoral.",
    heading: "Prisoners and Marriage",
    color: PURPLE,
    commentary: "The solidarity with prisoners is a concrete expression of brotherly love extended to its most costly form. Early Christians were imprisoned for their faith; to remember them was to associate with their disgrace and potentially share their fate. The phrase &ldquo;as if you were together with them&rdquo; calls for empathetic imagination &mdash; not merely intellectual sympathy but felt solidarity. The transition to marriage in v.4 continues the theme of honoring committed relationships. Both commands require the same quality: faithfulness to people who cannot easily return the favor &mdash; prisoners because they are constrained, spouses because lifelong faithfulness transcends momentary desire."
  },
  {
    ref: "vv.5-6",
    text: "Keep your lives free from the love of money and be content with what you have, because God has said, 'Never will I leave you; never will I forsake you.' So we say with confidence, 'The Lord is my helper; I will not be afraid. What can mere mortals do to me?'",
    heading: "Contentment and the Promise",
    color: TEAL,
    commentary: "The command to be content is not mere moral exhortation &mdash; it is grounded in a divine promise. The logic is: &ldquo;You do not need to grasp after money because God has guaranteed his presence. If God himself is with you, what deficiency could money supply?&rdquo; The double-negative in the Greek of the promise is maximally emphatic: &ldquo;I will never, no never, leave you.&rdquo; The quotation from Psalm 118:6 then draws the natural human response: if the Lord is my helper, I have nothing to fear from any human power, including the power of economic pressure. Contentment is thus a form of faith &mdash; a settled trust in the sufficiency of God&rsquo;s provision and presence."
  },
  {
    ref: "vv.7-9",
    text: "Remember your leaders, who spoke the word of God to you. Consider the outcome of their way of life and imitate their faith. Jesus Christ is the same yesterday and today and forever. Do not be carried away by all kinds of strange teachings.",
    heading: "Leaders and the Unchanging Christ",
    color: "#E11D48",
    commentary: "The community is exhorted to remember past leaders who have already died (&ldquo;consider the outcome of their way of life&rdquo; implies their lives are complete). Their faith is a model to imitate &mdash; not their personality or methods, but their trust in the unchanging Christ. Verse 8 &mdash; &ldquo;Jesus Christ is the same yesterday and today and forever&rdquo; &mdash; is the theological anchor between the backward look at faithful leaders (v.7) and the forward warning against strange teachings (v.9). The criterion for evaluating any teaching is: does it accord with the Christ who does not change? Strange teachings offer novelty; the gospel offers the eternally consistent Son of God."
  },
  {
    ref: "vv.10-14",
    text: "We have an altar from which those who minister at the tabernacle have no right to eat... Jesus also suffered outside the city gate to make the people holy through his own blood. Let us, then, go to him outside the camp, bearing the disgrace he bore. For here we do not have an enduring city, but we are looking for the city that is to come.",
    heading: "Outside the Camp",
    color: "#3B82F6",
    commentary: "This is the hortatory climax of the entire letter. The levitical imagery (altar, tabernacle, bodies burned outside the camp) gives way to the historical: Jesus died outside Jerusalem, in the place of disgrace. The readers are not called to theoretical doctrine but to a concrete social movement &mdash; to &ldquo;go to him outside the camp.&rdquo; This means identifying with Christ&rsquo;s reproach, which in the first century meant leaving the synagogue and its social protection. The bearing of disgrace is made bearable by the eschatological vision: &ldquo;here we do not have an enduring city.&rdquo; The present camp, however prestigious, is temporary. The city to come, however invisible, is permanent. Christian courage is always grounded in an eschatological realism: this world is not the final world."
  },
  {
    ref: "vv.15-16",
    text: "Through Jesus, therefore, let us continually offer to God a sacrifice of praise &mdash; the fruit of lips that openly profess his name. And do not forget to do good and to share with others, for with such sacrifices God is pleased.",
    heading: "Sacrifice of Praise and Service",
    color: MUTED,
    commentary: "Having established that Christ&rsquo;s once-for-all sacrifice has ended the need for levitical offerings, the author identifies two remaining sacrifices: praise and service. Both are offered &ldquo;through Jesus&rdquo; &mdash; they are not self-generated spiritual performances but responses to grace, made possible by the mediator. The sacrifice of praise is &ldquo;the fruit of lips that openly profess his name&rdquo; &mdash; public confession and worship. The sacrifice of good and sharing is the outward expression of the same reality in practical generosity. The word for &ldquo;pleased&rdquo; (eudokei) is the same used in the baptism narrative (&ldquo;with him I am well pleased&rdquo;). God takes pleasure in the praise and service of his people."
  },
  {
    ref: "v.17",
    text: "Have confidence in your leaders and submit to their authority, because they keep watch over you as those who must give an account. Do this so that their work will be a joy, not a burden, for that would be of no benefit to you.",
    heading: "Submit to Leaders",
    color: PURPLE,
    commentary: "This command is grounded not in the leaders&rsquo; personal authority but in their accountability: they &ldquo;keep watch over you as those who must give an account.&rdquo; The image is of shepherds who will answer to the Chief Shepherd for every sheep entrusted to them. Submission is not blind obedience but a relational trust that makes the pastor&rsquo;s work joyful rather than exhausting. The phrase &ldquo;for that would be of no benefit to you&rdquo; introduces a pragmatic consideration alongside the theological: a community that makes pastoral work a burden ends up harming itself. Healthy communities enable their shepherds to serve with joy."
  },
  {
    ref: "vv.18-21",
    text: "Pray for us... May the God of peace, who through the blood of the eternal covenant brought back from the dead our Lord Jesus, that great Shepherd of the sheep, equip you with everything good for doing his will...",
    heading: "Prayer and the God of Peace",
    color: GOLD,
    commentary: "The prayer of vv.20-21 is the theological heartbeat of Hebrews in miniature. God is identified as &ldquo;the God of peace&rdquo; &mdash; the one who reconciles and makes whole. His action is the resurrection of Christ &ldquo;through the blood of the eternal covenant.&rdquo; The covenant whose blood was shed by the one High Priest is permanent &mdash; &ldquo;eternal.&rdquo; Christ is described as &ldquo;that great Shepherd of the sheep&rdquo; &mdash; the only occurrence of this title in Hebrews, echoing Psalm 23 and Ezekiel 34 and John 10. The prayer culminates in a request for divine equipping: God himself provides what is needed for doing his will. Christian living is not self-generated effort but divine equipping."
  },
  {
    ref: "vv.22-25",
    text: "I urge you, brothers and sisters, to bear with my word of exhortation, for in fact I have written to you quite briefly. I want you to know that our brother Timothy has been released... Grace be with you all.",
    heading: "Closing Greetings",
    color: MUTED,
    commentary: "The author calls the letter a &ldquo;word of exhortation&rdquo; (logos t&ecirc;s parakl&ecirc;se&ocirc;s) &mdash; the same phrase used for a synagogue sermon in Acts 13:15. Hebrews has the structure of a sermon: theological argument followed by exhortation followed by prayer and greeting. The mention of Timothy situates the letter in the Pauline circle. The final benediction &mdash; &ldquo;Grace be with you all&rdquo; &mdash; echoes the Pauline letter closings and grounds the entire exhortation in what it has been about all along: grace. The community that has been called to brotherly love, hospitality, contentment, and going outside the camp does all this not by self-effort but by grace &mdash; the same grace announced in the letter&rsquo;s opening and sealed by the eternal covenant."
  },
];

const APPLICATION_CARDS = [
  {
    icon: "people",
    color: GREEN,
    title: "Practical Community Life",
    body: "Hebrews 13 describes what a healthy Christian community looks like in concrete terms: brothers and sisters who genuinely care for one another (v.1), who open their homes to travelers and strangers (v.2), who remember those in prison and suffering (v.3), and who honor marriage (v.4). These are not abstract principles &mdash; they are a description of a community that has let the theology of chapters 1-12 reach its practical expression. The application question is not &ldquo;what should a church believe?&rdquo; but &ldquo;what does a church that believes look like on a Tuesday afternoon?&rdquo; Hebrews 13 answers that question."
  },
  {
    icon: "content",
    color: TEAL,
    title: "Contentment as Spiritual Discipline",
    body: "The command of v.5 &mdash; &ldquo;be content with what you have&rdquo; &mdash; is not natural to any human being. Contentment is a discipline, a practice, a cultivated response to the reality of God&rsquo;s presence and provision. Paul says in Philippians 4:11 that he &ldquo;learned&rdquo; contentment &mdash; it was not given to him automatically but acquired through experience. The ground of contentment in Hebrews 13 is not &ldquo;you should want less&rdquo; but &ldquo;God is here.&rdquo; To grow in contentment is to grow in the lived awareness of the divine presence that makes material sufficiency secondary. The practice: when anxiety about money or possessions arises, return to the promise: &ldquo;Never will I leave you; never will I forsake you.&rdquo;"
  },
  {
    icon: "praise",
    color: GOLD,
    title: "Worship Through Deeds of Service",
    body: "Verses 15-16 establish a pattern for Christian life that is both vertical and horizontal: &ldquo;continually offer to God a sacrifice of praise&rdquo; (vertical worship) and &ldquo;do not forget to do good and to share&rdquo; (horizontal service). The word &ldquo;continually&rdquo; (dia pantos) means at all times &mdash; this is not a weekly liturgical act but a posture of life. And both worship and service are described as &ldquo;sacrifices.&rdquo; In a world that separates spiritual practice from practical help, Hebrews joins them. The believer who praises God but neglects good works has not yet understood worship; the one who serves generously but neglects praise has not yet understood why they serve."
  },
  {
    icon: "outside",
    color: "#3B82F6",
    title: "Bearing the Reproach of Christ",
    body: "The call to &ldquo;go to him outside the camp, bearing the disgrace he bore&rdquo; (v.13) is the most demanding application in Hebrews 13 and perhaps in the whole letter. In every generation the church faces pressure to conform to dominant cultural or religious norms &mdash; to stay safely inside the camp where status and protection are offered. Hebrews calls this a false bargain: the camp is temporary; the city is eternal. The practical question for each believer is: what does it cost me to be identified with Jesus? Where is the &ldquo;outside the camp&rdquo; in my context? Where does following Christ require me to bear a social cost? The answer varies by person and culture, but the call is universal."
  },
  {
    icon: "leaders",
    color: PURPLE,
    title: "Following Godly Leaders",
    body: "Verses 7 and 17 together frame the community&rsquo;s relationship with its leaders: remember the faith of those who have gone before (v.7), and trust and cooperate with those who watch over you now (v.17). The basis of this trust is not personality or personal loyalty but accountability &mdash; leaders who will give an account to God for their care of the community. The application involves both gratitude for faithful past leaders and active cooperation with present ones. It also involves prayer (v.18) &mdash; the community that prays for its leaders participates in the success of the ministry. Leadership and followership are not opposites but partners in the same work."
  },
  {
    icon: "eternal",
    color: "#E11D48",
    title: "The City to Come",
    body: "The eschatological vision of v.14 &mdash; &ldquo;here we do not have an enduring city, but we are looking for the city that is to come&rdquo; &mdash; is not escapism but realism. The Christian life is lived between the already of Christ&rsquo;s accomplished work and the not-yet of his return. The &ldquo;city to come&rdquo; (the new Jerusalem of Revelation 21-22) is the destination toward which all of Hebrews has been pointing. This eschatological horizon shapes everything: it is why the community can bear the reproach of going outside the camp (the camp is not permanent), why contentment is possible (the present arrangement is temporary), and why brotherly love should continue (the community is permanent, even if its current circumstances are not)."
  },
];

const videoItems = [
  { videoId: "nH9p5APzBCY", title: "Hebrews 13 - Practical Christian Life (Final Exhortations)" },
  { videoId: "kP9PzWT8Kwg", title: "Jesus Christ the Same Yesterday Today and Forever - Hebrews 13:8" },
  { videoId: "UVhf4Fn7MNk", title: "Go Outside the Camp - Bearing the Reproach of Christ" },
  { videoId: "sMzL3NZ7Mgs", title: "The Sacrifice of Praise - Hebrews 13:15-16 Explained" },
];

export default function Hebrews13GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeTheme, setActiveTheme] = useState("brotherly-love");
  const [activeVerse, setActiveVerse] = useState(0);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const theme = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0c0c1a 0%, #0f1020 60%, #07070F 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, borderRadius: 20, padding: "4px 16px", color: GREEN, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "1.2rem" }}>
            BIBLE STUDY GUIDE
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3rem)", fontWeight: 900, margin: "0 0 0.75rem", lineHeight: 1.15 }}>
            Hebrews 13
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(0.95rem, 2vw, 1.1rem)", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
            The closing practical exhortations of Hebrews &mdash; the &ldquo;therefore&rdquo; lived out in community. Brotherly love, hospitality, contentment, the unchanging Christ, and the call to go outside the camp.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ label: "Book", value: "Hebrews" }, { label: "Chapter", value: "13" }, { label: "Verses", value: "25" }].map((item) => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.5rem 1.2rem", textAlign: "center" }}>
                <div style={{ color: MUTED, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em" }}>{item.label}</div>
                <div style={{ color: TEXT, fontWeight: 800, fontSize: "1.05rem" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 880, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "1rem 1.4rem",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GREEN}` : "2px solid transparent",
                background: "transparent",
                color: activeTab === tab.id ? GREEN : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 400,
                fontSize: "0.9rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>

        {/* ===== OVERVIEW ===== */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.4rem", margin: "0 0 1rem" }}>Overview of Hebrews 13</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "Hebrews 13 is the final chapter of what the author himself calls &ldquo;a word of exhortation&rdquo; (v.22) &mdash; the longest sustained theological argument in the New Testament. Having spent twelve chapters demonstrating that Jesus Christ is superior to angels, Moses, the Levitical priesthood, and the old covenant sacrificial system, the author arrives at the inevitable question: so what? How does this theological conviction express itself in daily life?" }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "The answer is Hebrews 13: not a miscellaneous appendix but a carefully ordered set of exhortations that flow from the letter&rsquo;s Christological core. The community that has learned that Christ is the great High Priest, that his blood opens the way into God&rsquo;s presence, and that he intercedes for them now will express that reality in brotherly love, radical hospitality, costly faithfulness in marriage, settled contentment, courageous identification with the rejected Christ, and wholehearted praise and service." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "The structural pivot of the chapter is verse 8: &ldquo;Jesus Christ is the same yesterday and today and forever.&rdquo; This single sentence stands between the command to remember faithful past leaders (v.7) and the warning against strange teachings (v.9). The unchanging Christ is the criterion for every exhortation in the chapter: what honors the Christ who does not change is the good; what trades him for something else is the danger." }}
              />
            </div>

            {/* Quick facts grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem", marginBottom: "1.5rem" }}>
              {OVERVIEW_FACTS.map((fact) => (
                <div key={fact.key} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem 1.2rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em", marginBottom: "0.35rem" }}>{fact.key.toUpperCase()}</div>
                  <div
                    style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.5 }}
                    dangerouslySetInnerHTML={{ __html: fact.value }}
                  />
                </div>
              ))}
            </div>

            {/* Key verse callout */}
            <div style={{ background: `${GREEN}0d`, border: `1px solid ${GREEN}35`, borderRadius: 14, padding: "1.6rem 1.8rem" }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>KEY VERSE</div>
              <blockquote style={{ margin: 0 }}>
                <p
                  style={{ color: TEXT, fontSize: "1.2rem", fontWeight: 700, lineHeight: 1.5, fontStyle: "italic", margin: "0 0 0.5rem" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Jesus Christ is the same yesterday and today and forever.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: "0.85rem" }}>Hebrews 13:8</cite>
              </blockquote>
            </div>

            {/* Chapter structure */}
            <div style={{ marginTop: "1.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.8rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.15rem", margin: "0 0 1.2rem" }}>Chapter Structure</h3>
              {[
                { ref: "vv.1-6", title: "Community Exhortations", desc: "Brotherly love, hospitality to strangers, solidarity with prisoners, marriage, freedom from love of money, contentment grounded in God&rsquo;s presence" },
                { ref: "vv.7-9", title: "Remember Your Leaders / Unchanging Christ", desc: "Imitate faithful past leaders; Jesus Christ the same yesterday today forever; do not be led away by strange teachings" },
                { ref: "vv.10-14", title: "The Altar Outside the Camp", desc: "We have an altar; Jesus suffered outside the gate; go to him outside the camp bearing his reproach; the city to come" },
                { ref: "vv.15-17", title: "Sacrifices That Remain", desc: "Sacrifice of praise (fruit of lips); do good and share (sacrifice of service); obey and submit to leaders" },
                { ref: "vv.18-25", title: "Prayer and Closing", desc: "Request for prayer; the magnificent benediction (God of peace, blood of eternal covenant, great Shepherd); closing greetings and grace" },
              ].map((item) => (
                <div key={item.ref} style={{ display: "flex", gap: "1rem", marginBottom: "0.9rem", alignItems: "flex-start" }}>
                  <div style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "3px 10px", color: GOLD, fontSize: "0.78rem", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{item.ref}</div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.2rem" }}>{item.title}</div>
                    <div
                      style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== KEY THEMES ===== */}
        {activeTab === "themes" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.4rem", margin: "0 0 0.4rem" }}>Key Themes in Hebrews 13</h2>
            <p
              style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}
              dangerouslySetInnerHTML={{ __html: "Each theme in Hebrews 13 flows from the theology of the preceding chapters. Select a theme to explore it in depth." }}
            />
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTheme(t.id)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: 20,
                    border: `1px solid ${activeTheme === t.id ? t.color : BORDER}`,
                    background: activeTheme === t.id ? `${t.color}18` : CARD,
                    color: activeTheme === t.id ? t.color : MUTED,
                    fontWeight: activeTheme === t.id ? 700 : 400,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                >
                  {t.title.split(" ").slice(0, 3).join(" ")}
                </button>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${theme.color}35`, borderRadius: 16, padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                <span style={{ color: theme.color, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.07em" }}>{theme.verse}</span>
              </div>
              <h3 style={{ color: theme.color, fontWeight: 800, fontSize: "1.3rem", margin: "0 0 1.1rem", lineHeight: 1.3 }}>{theme.title}</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: theme.body }}
              />
            </div>

            {/* All themes summary grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.85rem", marginTop: "1.5rem" }}>
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTheme(t.id)}
                  style={{
                    background: CARD,
                    border: `1px solid ${activeTheme === t.id ? t.color + "60" : BORDER}`,
                    borderRadius: 12,
                    padding: "1rem 1.2rem",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ color: t.color, fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.05em", marginBottom: "0.3rem" }}>{t.verse}</div>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.4 }}>{t.title}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ===== VERSE BY VERSE ===== */}
        {activeTab === "verse" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.4rem", margin: "0 0 0.4rem" }}>Verse by Verse Commentary</h2>
            <p
              style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}
              dangerouslySetInnerHTML={{ __html: "A close reading of Hebrews 13 section by section. Select a passage to read the commentary." }}
            />

            {/* Verse selector */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {VERSES.map((v, i) => (
                <button
                  key={v.ref}
                  type="button"
                  onClick={() => setActiveVerse(i)}
                  style={{
                    padding: "0.4rem 0.9rem",
                    borderRadius: 8,
                    border: `1px solid ${activeVerse === i ? v.color : BORDER}`,
                    background: activeVerse === i ? `${v.color}18` : CARD,
                    color: activeVerse === i ? v.color : MUTED,
                    fontWeight: activeVerse === i ? 700 : 400,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                >
                  {v.ref}
                </button>
              ))}
            </div>

            {/* Active verse card */}
            {VERSES.map((v, i) => activeVerse === i && (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${v.color}35`, borderRadius: 16, padding: "2rem", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ background: `${v.color}18`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", color: v.color, fontSize: "0.78rem", fontWeight: 700 }}>{v.ref}</span>
                  <span style={{ color: v.color, fontWeight: 700, fontSize: "0.9rem" }}>{v.heading}</span>
                </div>
                <blockquote style={{ margin: "0 0 1.2rem", padding: "1rem 1.4rem", background: `${v.color}0a`, borderLeft: `3px solid ${v.color}`, borderRadius: "0 10px 10px 0" }}>
                  <p
                    style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.96rem" }}
                    dangerouslySetInnerHTML={{ __html: v.text }}
                  />
                </blockquote>
                <div style={{ color: MUTED, fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.07em", marginBottom: "0.6rem" }}>COMMENTARY</div>
                <p
                  style={{ color: MUTED, lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: v.commentary }}
                />
              </div>
            ))}

            {/* Verse navigation */}
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "space-between" }}>
              <button
                type="button"
                onClick={() => setActiveVerse((prev) => Math.max(0, prev - 1))}
                disabled={activeVerse === 0}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.6rem 1.2rem", color: activeVerse === 0 ? BORDER : MUTED, cursor: activeVerse === 0 ? "not-allowed" : "pointer", fontWeight: 600, fontSize: "0.85rem" }}
              >
                &larr; Previous
              </button>
              <span style={{ color: MUTED, fontSize: "0.85rem", alignSelf: "center" }}>{activeVerse + 1} of {VERSES.length}</span>
              <button
                type="button"
                onClick={() => setActiveVerse((prev) => Math.min(VERSES.length - 1, prev + 1))}
                disabled={activeVerse === VERSES.length - 1}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.6rem 1.2rem", color: activeVerse === VERSES.length - 1 ? BORDER : MUTED, cursor: activeVerse === VERSES.length - 1 ? "not-allowed" : "pointer", fontWeight: 600, fontSize: "0.85rem" }}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ===== APPLICATION ===== */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.4rem", margin: "0 0 0.4rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.8rem" }}
              dangerouslySetInnerHTML={{ __html: "Hebrews 13 is not a devotional appendix &mdash; it is the &lsquo;therefore&rsquo; of the entire letter. The theology of chapters 1-12 demands these practical responses. Here is how each theme connects to real Christian life." }}
            />

            <div style={{ display: "grid", gap: "1rem" }}>
              {APPLICATION_CARDS.map((card) => (
                <div key={card.icon} style={{ background: CARD, border: `1px solid ${card.color}30`, borderRadius: 14, padding: "1.6rem 1.8rem" }}>
                  <div style={{ color: card.color, fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{card.title}</div>
                  <p
                    style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </div>
              ))}
            </div>

            {/* Personal reflection prompts */}
            <div style={{ marginTop: "2rem", background: `${GREEN}0d`, border: `1px solid ${GREEN}35`, borderRadius: 16, padding: "1.8rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 1rem" }}>Personal Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.3rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {[
                  "Where is your brotherly love being tested right now? What specific action would strengthen it?",
                  "In what ways might God be calling you to show hospitality to strangers or those outside your normal circle?",
                  "What is the &lsquo;love of money&rsquo; robbing you of contentment in? How does the promise &lsquo;I will never leave you&rsquo; speak to that anxiety?",
                  "Where is your &lsquo;outside the camp&rsquo;? What would it cost you to identify more openly with Jesus in your current context?",
                  "Who are the godly leaders &mdash; past and present &mdash; whose faith you should be imitating? What specific quality in them do you want to cultivate?",
                  "How is your life currently combining the sacrifice of praise (worship) and the sacrifice of service (doing good and sharing)? Which is weaker?",
                ].map((q, i) => (
                  <li key={i}>
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.93rem" }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* The benediction */}
            <div style={{ marginTop: "1.5rem", background: `${GOLD}0d`, border: `1px solid ${GOLD}35`, borderRadius: 16, padding: "1.8rem" }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>THE BENEDICTION (HEBREWS 13:20-21)</div>
              <blockquote style={{ margin: 0 }}>
                <p
                  style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, fontSize: "1rem" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Now may the God of peace, who through the blood of the eternal covenant brought back from the dead our Lord Jesus, that great Shepherd of the sheep, equip you with everything good for doing his will, and may he work in us what is pleasing to him, through Jesus Christ, to whom be glory for ever and ever. Amen.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: "0.85rem" }}>Hebrews 13:20-21</cite>
              </blockquote>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginTop: "1rem", marginBottom: 0, fontSize: "0.93rem" }}
                dangerouslySetInnerHTML={{ __html: "This benediction is one of the richest in Scripture. Every phrase is theologically loaded: God is &lsquo;the God of peace&rsquo; (reconciler and wholeness-giver); he acted &lsquo;through the blood of the eternal covenant&rsquo; (the once-for-all sacrifice that opened the new covenant); he &lsquo;brought back from the dead our Lord Jesus&rsquo; (the resurrection is the proof of the sacrifice&rsquo;s acceptance); Jesus is &lsquo;that great Shepherd&rsquo; (Ezekiel 34, John 10 fulfilled); and the prayer is for divine equipping &mdash; not human effort but God&rsquo;s own working in and through his people. This is the theological whole of Hebrews compressed into a single prayer." }}
              />
            </div>
          </div>
        )}

        {/* ===== VIDEO SECTION (always visible at bottom) ===== */}
        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.3rem", margin: "0 0 0.4rem" }}>Teaching Videos</h2>
          <p
            style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: "Video teachings on Hebrews 13 &mdash; covering the final exhortations, the unchanging Christ, and the call to go outside the camp." }}
          />
          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "0.9rem 1rem" }}>
                  <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem", margin: 0, lineHeight: 1.4 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </section>
        </div>

      </div>
    </div>
  );
}
