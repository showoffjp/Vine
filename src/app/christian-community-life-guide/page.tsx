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
const BLUE = "#3B82F6";

const TABS = [
  "Why Community",
  "The One-Anothers",
  "Koinonia",
  "House Church vs. Institutional",
  "Hospitality as Discipline",
  "Videos",
];

const WHY_COMMUNITY_SECTIONS = [
  {
    title: "The Trinity as the Ground of Community",
    color: PURPLE,
    body: "God is not a solitary being who decided, as an afterthought, to create companions. The Christian God is inherently, eternally, and irreducibly relational: Father, Son, and Holy Spirit in an eternal communion of love. John&rsquo;s Gospel reveals this before anything else exists: &ldquo;In the beginning was the Word, and the Word was with God, and the Word was God&rdquo; (John 1:1). The preposition &ldquo;with&rdquo; (pros) implies face-to-face relationship &mdash; the Word was turned toward God, in intimate communion with God. The doctrine of the Trinity means that love, relationship, and mutual self-giving are not additions to God&rsquo;s nature but constitutive of it. Creation, then, is not God making things to fill a void but God extending his relational life outward. Human community is not a pragmatic arrangement but a reflection of the divine nature. When Paul says &ldquo;God is love&rdquo; (1 John 4:8), he is not describing a sentimental attribute but the structure of the Godhead itself: love exists because there is an eternal Lover and an eternal Beloved, and the Spirit is the bond of that love.",
  },
  {
    title: "The One-Flesh Union as Prototype of Covenant Community",
    color: GREEN,
    body: "Genesis 2 presents the first community as a response to aloneness. &ldquo;It is not good for the man to be alone&rdquo; (Gen 2:18) &mdash; this is the first thing in creation declared not good, and God&rsquo;s solution is not a task or a program but a person: &ldquo;I will make a helper suitable for him.&rdquo; The one-flesh union of marriage is the prototype of all covenant community: two persons who were separate become &ldquo;one flesh&rdquo; without losing their distinct personhood. This is the pattern of all genuine community &mdash; unity that does not obliterate difference. The couple who truly become one is not the couple who ceased being individuals; it is the couple whose union produces something that neither could be alone. The church, Paul says, is the bride of Christ (Eph 5:25-32) &mdash; and the marriage of Adam and Eve, by Paul&rsquo;s reading, was always a pointer to this greater union.",
  },
  {
    title: "The Covenant Community of Israel",
    color: GOLD,
    body: "Israel&rsquo;s life under the covenant was structurally communal. The covenant was not made with individuals but with a people: &ldquo;I will be your God and you will be my people&rdquo; (Lev 26:12). The Torah governed communal life &mdash; the Sabbath commanded rest for the entire household including servants and animals; the Jubilee returned land to families and released slaves; the gleaning laws required farmers to leave the edges of fields for the poor. The festivals were community celebrations: Passover was a family meal, the Feast of Tabernacles required the whole community to live in temporary shelters together, recalling the wilderness journey. Worship at the temple was national, corporate, communal. The prophets consistently judged Israel&rsquo;s failures not merely as individual sin but as communal failure &mdash; the failure to maintain justice for the poor, the widow, the orphan, and the stranger. Israel was called to be a community that embodied the character of its God before the watching nations.",
  },
  {
    title: "The New Testament Ekklesia",
    color: TEAL,
    body: "The Greek word ekklesia, translated &ldquo;church&rdquo; in most English Bibles, does not mean a building or an institution. In classical Greek, ekklesia referred to an assembly of citizens called out for deliberation and action. The early Christians used it deliberately: the church is the assembly of those called out by God, gathered around the risen Christ, constituted by the Spirit. Paul&rsquo;s dominant metaphors for the church are relational and organic: a body with many members (1 Cor 12), a family of brothers and sisters (Gal 6:10), a building being joined together and growing (Eph 2:21), a new humanity created from formerly divided peoples (Eph 2:14-16). None of these metaphors describes an institution one joins or a service one attends. They all describe a community one belongs to &mdash; a living organism, not an organization; a people, not a program.",
  },
  {
    title: "Acts 2:42-47 &mdash; Portrait of Early Christian Community",
    color: BLUE,
    body: "The Jerusalem community after Pentecost is the NT&rsquo;s fullest portrait of Christian community in action: &ldquo;They devoted themselves to the apostles&rsquo; teaching and to fellowship, to the breaking of bread and to prayer&rdquo; (Acts 2:42). Four practices constituted their common life: doctrinal formation (apostles&rsquo; teaching), relational sharing (koinonia), the Lord&rsquo;s Supper (breaking of bread), and prayer. They met daily &mdash; both in the temple courts for public worship and house to house for intimate community. They shared possessions with those in need (vv. 44-45). They ate together with glad and sincere hearts (v. 46). And &ldquo;the Lord added to their number daily those who were being saved&rdquo; (v. 47). The community&rsquo;s internal life &mdash; its teaching, its table, its sharing, its joy &mdash; was itself evangelistic. The early church grew not primarily through preaching programs but through the visible, irresistible quality of its common life.",
  },
  {
    title: "Why Individualistic Christianity Is a Modern Distortion",
    color: PURPLE,
    body: "The idea that faith is fundamentally private &mdash; between the individual soul and God &mdash; and that community is optional, a support resource for the already-formed Christian, is not a biblical position. It is a product of Enlightenment individualism applied to religion. The NT knows no such solitary Christianity. Its commands are inescapably communal: you cannot love one another, bear one another&rsquo;s burdens, confess to one another, or speak truth in love to one another by yourself. Its metaphors are organic: a body without members, a building without stones, a family of one are not diminished versions of the real thing; they are impossibilities. Dietrich Bonhoeffer: &ldquo;Christianity means community through Jesus Christ and in Jesus Christ. No Christian community is more or less than this. Whether it be a brief, single encounter or the daily fellowship of years, Christian community is only this.&rdquo; The individualist Christian is not a more independent version of the communal Christian; they are a Christian who has accepted a cultural lie about what the faith is.",
  },
  {
    title: "Loneliness and What the Church Should Be",
    color: GREEN,
    body: "The United States Surgeon General issued an advisory in 2023 declaring loneliness an epidemic, with data showing that Americans&rsquo; social connections have declined sharply over the past five decades: fewer close friends, less time spent with others, weakening of community institutions. The health consequences are severe: loneliness is associated with a 29% increased risk of heart disease, 32% increased risk of stroke, and a 50% increased risk of dementia. This crisis is the church&rsquo;s opportunity and the church&rsquo;s indictment. The community the world is starving for is the community the church is commanded to be. Yet many churches have become venues for anonymous religious consumption rather than genuine covenant community. The recovery of the church as a true community &mdash; where people are known, burdens are shared, resources are pooled, and the vulnerable are protected &mdash; is both the church&rsquo;s calling and its most powerful apologetic in a culture of epidemic loneliness.",
  },
];

const ONE_ANOTHER_SECTIONS = [
  {
    title: "The 59 One-Another Commands",
    color: PURPLE,
    body: "New Testament scholars have counted approximately 59 &ldquo;one-another&rdquo; commands across the NT epistles. These are not peripheral encouragements but constitutive commands &mdash; they define what the Christian community is supposed to look like. The most prominent: love one another (John 13:34-35; 1 John 3:11; Rom 13:8); bear one another&rsquo;s burdens (Gal 6:2); confess your sins to one another (Jas 5:16); pray for one another (Jas 5:16); forgive one another (Eph 4:32; Col 3:13); serve one another (Gal 5:13); encourage one another (1 Thess 5:11; Heb 3:13); speak truth in love to one another (Eph 4:15); honor one another above yourselves (Rom 12:10); be kind and compassionate to one another (Eph 4:32); submit to one another (Eph 5:21); instruct one another (Rom 15:14); offer hospitality to one another (1 Pet 4:9); spur one another on toward love and good deeds (Heb 10:24); greet one another with a holy kiss (Rom 16:16). The list is not exhaustive; it is representative of a NT vision that assumes Christians will be in close, regular, accountable relationship with one another.",
  },
  {
    title: "These Commands Assume Proximity and Depth",
    color: GREEN,
    body: "The one-another commands cannot be fulfilled at a distance or with strangers. You cannot bear the burden of someone whose burdens you do not know. You cannot confess your sins to someone you see once a week for 90 minutes in a large-group setting. You cannot speak truth in love to someone whose blind spots you have not observed over time. You cannot weep with those who weep (Rom 12:15) if you do not know when they are weeping. The NT one-anothers presuppose a degree of proximity, regularity, and depth of relationship that Sunday morning attendance &mdash; even weekly, even faithfully &mdash; cannot produce. They assume that Christians live in genuine community with one another, not merely that they attend the same religious services. The one-another commands are the NT&rsquo;s curriculum for Christian formation, and they can only be practiced in the context of genuine community.",
  },
  {
    title: "The One-Anothers as the Curriculum of Sanctification",
    color: TEAL,
    body: "Dallas Willard argued that the primary context in which spiritual formation happens is not private devotion but community &mdash; because it is in relationship that our character is most thoroughly revealed and most profoundly shaped. The person who prays alone is not tested in the same way as the person who must love the irritating community member, forgive the one who wronged them, and submit to leadership they disagree with. The one-anothers are not supplemental to sanctification; they are its primary crucible. It is easier to be patient in solitude than in community; easier to be humble alone than in the presence of people who have seen your failures; easier to be generous in theory than when someone&rsquo;s actual need is in front of you. Community is the furnace in which character is forged. Those who avoid it avoid the primary means of their own sanctification.",
  },
  {
    title: "Why Sunday Morning Alone Cannot Fulfill These Commands",
    color: GOLD,
    body: "The typical Sunday morning service &mdash; a large gathering of people who arrive, worship together, listen to a sermon, exchange brief greetings, and depart &mdash; is a wonderful and important thing. It is also structurally incapable of producing the community the NT describes. The one-another commands require contexts of mutual knowledge, regular shared life, and the kind of trust that develops over time in sustained relationship. The early church understood this: it met publicly in the temple courts and privately house to house. The public gathering provided teaching, corporate worship, and the Eucharist. The house meetings provided the intimate, mutual, daily community in which the one-anothers were practiced. The contemporary church&rsquo;s reduction of community life to a weekly large-group meeting is a departure from the NT pattern &mdash; and the epidemic of loneliness and shallow relationships in churches is one of its predictable consequences.",
  },
];

const KOINONIA_SECTIONS = [
  {
    title: "The Greek Word: Fellowship, Communion, Sharing",
    color: TEAL,
    body: "The Greek word koinonia appears 19 times in the NT and is translated variously as fellowship, communion, sharing, and participation. Its root is koinos &mdash; common, shared. Koinonia refers to the sharing of something in common: a joint participation in something that holds a community together. When Acts 2:42 says the Jerusalem church was devoted to koinonia, it is not describing a casual social connection or an agreeable gathering. It is describing the shared life of a community whose fellowship is grounded in their common participation in Christ, his Spirit, and his mission. The word is one of the richest in the NT vocabulary of community, and its reduction to &ldquo;fellowship&rdquo; (with its contemporary connotation of coffee and casual conversation after a church service) is a significant loss.",
  },
  {
    title: "Koinonia as Participation in Christ",
    color: PURPLE,
    body: "Paul&rsquo;s use of koinonia goes deeper than any human social arrangement. &ldquo;God is faithful, through whom you were called into the fellowship (koinonia) of his Son, Jesus Christ our Lord&rdquo; (1 Cor 1:9). The primary koinonia is not horizontal &mdash; Christians with one another &mdash; but vertical: participation in Christ himself. The cup of blessing is a participation (koinonia) in the blood of Christ; the bread a participation in the body of Christ (1 Cor 10:16). Philippians 3:10: &ldquo;I want to know Christ &mdash; yes, to know the power of his resurrection and participation (koinonia) in his sufferings.&rdquo; Christian community is not a club organized around shared interests or values; it is a community of people who share participation in the same person &mdash; the risen Christ &mdash; and who are therefore bound to one another not by affinity but by a common union with him. The horizontal follows from the vertical: because we share in Christ, we share in one another.",
  },
  {
    title: "The Lord&rsquo;s Supper as the Community Meal",
    color: GREEN,
    body: "In the ancient world, table fellowship was not incidental but constitutive: to eat together was to say something about who was in your community. The Lord&rsquo;s Supper is the church&rsquo;s primary community meal &mdash; the table around which the community is defined. Paul&rsquo;s treatment of the Supper in 1 Corinthians 11 is explicitly communal: he rebukes the Corinthians for eating in ways that humiliate the poor and create a two-tier community. &ldquo;When you come together, it is not the Lord&rsquo;s Supper you eat&rdquo; (11:20) &mdash; not because the words of institution were not said but because the community dynamics contradicted what the table was supposed to embody. The Lord&rsquo;s Supper is not merely a private memorial of Christ&rsquo;s death; it is the community&rsquo;s most concentrated act of corporate identity &mdash; the meal that declares what they are together and to whom they belong.",
  },
  {
    title: "Koinonia of Possessions",
    color: GOLD,
    body: "Acts 2 and 4 describe the Jerusalem community&rsquo;s economic sharing in terms that should not be domesticated: &ldquo;All the believers were together and had everything in common&rdquo; (2:44); &ldquo;there were no needy persons among them. For from time to time those who owned land or houses sold them, brought the money from the sales and put it at the apostles&rsquo; feet&rdquo; (4:34-35). The goal was the ancient covenant community&rsquo;s ideal: &ldquo;there need be no poor people among you&rdquo; (Deut 15:4). Paul&rsquo;s collection for the Jerusalem church, described across multiple epistles, is koinonia in its most concrete economic form: the Gentile churches sharing their material resources with Jewish believers in need. This was not charity &mdash; it was the embodiment of the one-body metaphor. A body does not allow one member to starve while another is well-fed; economic sharing in the church is what takes the body metaphor seriously.",
  },
  {
    title: "Bonhoeffer&rsquo;s Life Together",
    color: BLUE,
    body: "Dietrich Bonhoeffer wrote Life Together in 1938 while directing the underground Confessing Church seminary at Finkenwalde &mdash; a community of ordinands living together in intentional common life as the Nazi state was dismantling ordinary church structures. The book is both a theological account of Christian community and a practical guide to it, born out of the actual experience of community formed under pressure. Its opening sentences: &ldquo;Christianity means community through Jesus Christ and in Jesus Christ. No Christian community is more or less than this.&rdquo; Bonhoeffer insists that Christian community is not founded on human affinity, shared vision, or emotional connection but on the grace of Christ alone &mdash; and therefore it is both more fragile and more robust than human community: more fragile because it depends on what it cannot produce; more robust because its foundation cannot be destroyed by human failure. The most quoted line: &ldquo;Let him who cannot be alone beware of community. Let him who is not in community beware of being alone.&rdquo;",
  },
];

const HOUSE_CHURCH_SECTIONS = [
  {
    title: "The Early Church as Primarily House Churches",
    color: GREEN,
    body: "The NT church had no dedicated buildings. For the first two to three centuries of Christian history, congregations met in private homes &mdash; &ldquo;house churches&rdquo; in the most literal sense. Paul greets &ldquo;the church that meets in their house&rdquo; at the home of Priscilla and Aquila (Rom 16:5), the church in the home of Nympha (Col 4:15), and the church in the home of Philemon (Phlm 2). The Corinthian church met in the home of Gaius (Rom 16:23). These were not large gatherings: the average Mediterranean house could accommodate 30-50 people at most. The early church was a network of small, intimate, household-based communities, not a single large congregation meeting in a dedicated building.",
  },
  {
    title: "The Constantinian Shift",
    color: PURPLE,
    body: "The Emperor Constantine&rsquo;s legalization of Christianity in 313 AD (Edict of Milan) and his active patronage of the church transformed its social form. For the first time, Christians could build dedicated religious buildings &mdash; and did, with imperial funding. Church buildings became increasingly elaborate, the clergy became professional state functionaries, and the church&rsquo;s identity shifted from a gathering of believers in a home to an institution with a building, a hierarchy, and a legal status. The historian Alan Kreider has called this shift &ldquo;the change of conversion&rdquo; &mdash; the church went from a body that formed counter-cultural disciples through intensive community to an institution that baptized entire populations. The building-centric church &mdash; where being a Christian means going to a building for services rather than belonging to a community &mdash; is a post-Constantinian development that would have been unrecognizable to the first three centuries of Christianity.",
  },
  {
    title: "What the House Church Gets Right",
    color: TEAL,
    body: "The house church movement, renewed globally in the twentieth and twenty-first centuries (particularly in China, where it was forced underground, and in the West, where it is a voluntary return to early church patterns), recovers several things the NT takes for granted. Intimacy: in a group of 15-25 people, everyone is known; anonymity is impossible and pastoral care is organic rather than programmatic. Mutual ministry: everyone participates &mdash; in prayer, in reading, in sharing, in serving &mdash; rather than observing a professional performance. Low cost: no building, no staff, no maintenance; resources can go directly to mission and care. The one-another commands can actually be practiced. The Lord&rsquo;s Supper can be a genuine shared meal. The church can form around real relationship rather than around shared attendance at an event.",
  },
  {
    title: "What the House Church Risks",
    color: GOLD,
    body: "The house church is not without its dangers, and honest proponents acknowledge them. Lack of accountability: a small group without connection to a wider network of churches and without formal structures of oversight is vulnerable to the personality and theology of its leader, with no external check. Theological drift: without connection to the broader tradition and without sustained engagement with the full range of Christian teaching, house churches can drift into idiosyncratic theology or stay perpetually at a shallow theological depth. Failure to sustain across generations: house churches often struggle to form and retain children and young people, and many dissolve when founding members move or circumstances change. The vision for a house church is also a vision for its missional engagement, its theological breadth, and its connection to the wider body &mdash; without all three, the house church&rsquo;s virtues can curdle into insularity.",
  },
  {
    title: "The Cell Church and Missional Community",
    color: BLUE,
    body: "Several movements have sought to combine the institutional church&rsquo;s stability with the house church&rsquo;s intimacy. The cell church model (developed by David Yonggi Cho in South Korea and popularized globally from the 1970s) organizes large congregations into small cells of 10-15 people that meet weekly for prayer, study, and care &mdash; with the large group gathering for worship and teaching. The cell is the basic unit of community; the large group provides theological depth, corporate worship, and accountability. The missional community movement (associated with Mike Breen, Alan Hirsch, and others) emphasizes small groups of 20-50 people organized around a shared mission to a specific place or population &mdash; a neighborhood, a workplace, a cultural community &mdash; with worship and mutual discipleship integrated into the missional engagement. Both models take seriously the NT&rsquo;s pattern of house-to-house community while maintaining connection to the wider church.",
  },
];

const HOSPITALITY_SECTIONS = [
  {
    title: "The Biblical Commands for Hospitality",
    color: GOLD,
    body: "The NT commands hospitality repeatedly and specifically. Romans 12:13: &ldquo;Contribute to the needs of the saints and seek to show hospitality.&rdquo; The word &ldquo;seek&rdquo; implies active pursuit &mdash; not waiting for the opportunity to arise but going looking for it. Hebrews 13:2: &ldquo;Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.&rdquo; 1 Peter 4:9: &ldquo;Offer hospitality to one another without grumbling.&rdquo; The &ldquo;without grumbling&rdquo; suggests the early Christians were practicing hospitality but sometimes reluctantly. 1 Timothy 3:2 and Titus 1:8: a church overseer or elder must be &ldquo;hospitable&rdquo; (philoxenos) &mdash; hospitality is not an optional personal quality but a qualification for church leadership. The NT takes for granted that Christian households will be regularly open to guests, travelers, and those in need.",
  },
  {
    title: "Philoxenia &mdash; Love of Strangers",
    color: TEAL,
    body: "The Greek word translated &ldquo;hospitality&rdquo; in most NT texts is philoxenia &mdash; literally, love of the stranger or foreigner (philos = love; xenos = stranger). This is not merely welcome extended to friends and family but welcome extended to those who are outside, unfamiliar, and potentially inconvenient. Philoxenia stands in deliberate contrast to xenophobia &mdash; fear of the stranger &mdash; which is the default posture of cultures under pressure. The early church&rsquo;s philoxenic practice was noted by pagan observers as distinctive and attractive: Christians received traveling believers they had never met, cared for the sick and dying during plagues without regard to whether they were believers, and opened their homes to the needy across social boundaries that the surrounding culture maintained. In a culture where homelessness, travel, and persecution were common, the Christian home was a network of safety for the vulnerable.",
  },
  {
    title: "Hospitality as Countercultural in a Privatized Society",
    color: PURPLE,
    body: "Contemporary Western society has systematically privatized the home: it is a sanctuary from the outside world, a space for the nuclear family&rsquo;s comfort and privacy, protected from intrusion by door locks, security systems, and the social norm that one does not show up at someone&rsquo;s home without an invitation. The Christian practice of hospitality is countercultural in this context: it orients the home outward, toward the guest and the stranger, treating the home not as private property to be defended but as a stewardship to be deployed for others. Christine Pohl (Making Room) argues that recovering Christian hospitality requires first recovering the theological vision that makes it intelligible: the image of God in the stranger, the presence of Christ in the guest (Matt 25:35), and the home as a gift held in trust for God&rsquo;s purposes.",
  },
  {
    title: "Christine Pohl&rsquo;s Making Room",
    color: GREEN,
    body: "Christine Pohl&rsquo;s Making Room: Recovering Hospitality as a Christian Tradition (1999) is the most theologically thorough account of Christian hospitality in contemporary evangelical scholarship. Pohl researched the book by spending extended time with communities that practice hospitality seriously &mdash; Catholic Worker houses, L&rsquo;Arche communities, various intentional Christian communities &mdash; and her account combines historical theology with ethnographic observation. Her central argument: hospitality was central to the early church&rsquo;s identity and mission and has been gradually marginalized from contemporary Christianity, replaced by either the professionalized hospitality industry or the entertainment of the dinner party. Her most important distinction &mdash; between hospitality (which serves the guest) and entertaining (which impresses the guest) &mdash; has helped a generation of Christians recover the practice by removing the anxiety of performance.",
  },
  {
    title: "Hospitality vs. Entertaining",
    color: BLUE,
    body: "Karen Mains&rsquo; classic distinction from Open Heart, Open Home (1976): &ldquo;Entertaining says, I want to impress you with my home, my cleverness, my cooking. Hospitality says, This home is not mine. It is Christ&rsquo;s, and he wants me to share it with you. Entertaining always puts things before people. Hospitality puts people first.&rdquo; Entertaining is fundamentally self-oriented: the host&rsquo;s primary concern is what the guest thinks of them. This is why entertaining requires a clean house, elaborate food, and a performance that meets a certain standard. Hospitality is fundamentally other-oriented: the host&rsquo;s primary concern is the guest&rsquo;s wellbeing, belonging, and encounter with Christ. Hospitality can happen with a simple meal in a messy house, because neither the meal nor the house is the point &mdash; the guest is the point. The anxiety that prevents most Christians from opening their homes is the anxiety of entertaining, not the anxiety of hospitality.",
  },
  {
    title: "The Monastery Tradition of Hospitality",
    color: GOLD,
    body: "The Rule of Saint Benedict (c. 516 AD) famously mandates: &ldquo;All guests who arrive should be received like Christ, for he is going to say, I was a stranger and you welcomed me (Matt 25:35).&rdquo; The Benedictine tradition institutionalized hospitality: every monastery maintained a guest house, the abbot himself was to greet guests, and travelers could count on receiving food and shelter in any Benedictine community. The monasteries of medieval Europe were the hospitals, the hostels, the centers of learning, and the places of refuge for travelers across the continent &mdash; a network of philoxenic communities that embodied the Matthew 25 vision. The recovery of hospitality in contemporary Christianity can draw on this tradition: not merely as a warm personal practice but as a structural commitment of the community, built into its common life and its architecture, oriented toward the stranger as a matter of institutional identity.",
  },
];

const VIDEOS = [
  { videoId: "rQlRMpxSJ5E", title: "Tim Keller on Community and Belonging" },
  { videoId: "Y6tHRmZyHJg", title: "Bonhoeffer — Life Together" },
  { videoId: "p0Ej7RMXM8E", title: "Small Group Community" },
];

export default function ChristianCommunityLifeGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Why Community");

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const renderSections = (
    sections: { title: string; color: string; body: string }[]
  ) =>
    sections.map((s, i) => (
      <div
        key={i}
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderLeft: `3px solid ${s.color}`,
          borderRadius: 12,
          padding: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <h3
          style={{
            color: s.color,
            fontWeight: 800,
            fontSize: "1.05rem",
            marginBottom: "0.75rem",
          }}
        >
          {s.title}
        </h3>
        <p
          style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.93rem", margin: 0 }}
          dangerouslySetInnerHTML={{ __html: s.body }}
        />
      </div>
    ));

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              fontSize: "0.78rem",
              color: GREEN,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: "0.6rem",
            }}
          >
            Community &amp; Church
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Christian Community Life Guide
          </h1>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.75,
              fontSize: "1.02rem",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Why you cannot follow Jesus alone &mdash; the one-anothers of the NT, koinonia as
            communion not just fellowship, the house church vs. institutional church, hospitality
            as spiritual discipline, and small groups and accountability.
          </p>
          <div
            style={{
              marginTop: "1.75rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GREEN}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
              maxWidth: 640,
              margin: "1.75rem auto 0",
              textAlign: "left",
            }}
          >
            <p
              style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8, color: TEXT }}
            >
              &ldquo;Christianity means community through Jesus Christ and in Jesus Christ. No
              Christian community is more or less than this.&rdquo;
            </p>
            <p style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
              Dietrich Bonhoeffer, Life Together
            </p>
          </div>
        </header>

        {/* Tabs */}
        <nav
          aria-label="Page sections"
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: "2.25rem",
            justifyContent: "center",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? GREEN : BORDER}`,
                background: activeTab === t ? `${GREEN}22` : "transparent",
                color: activeTab === t ? GREEN : MUTED,
                cursor: "pointer",
                fontSize: "0.88rem",
                fontWeight: activeTab === t ? 700 : 400,
                transition: "all 0.15s ease",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {/* Tab: Why Community */}
        {activeTab === "Why Community" && (
          <section>
            <p
              style={{
                color: MUTED,
                lineHeight: 1.7,
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
              }}
            >
              Seven reasons why Christian community is not optional &mdash; from the Trinity as the
              ground of all relationship, through the covenant community of Israel and the NT
              ekklesia, to the epidemic of loneliness and what the church is called to be.
            </p>
            {renderSections(WHY_COMMUNITY_SECTIONS)}
          </section>
        )}

        {/* Tab: The One-Anothers */}
        {activeTab === "The One-Anothers" && (
          <section>
            <p
              style={{
                color: MUTED,
                lineHeight: 1.7,
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
              }}
            >
              The NT contains approximately 59 one-another commands &mdash; and every one of them
              requires proximity, depth, and sustained relationship to obey. They are the curriculum
              of sanctification, and they cannot be fulfilled on Sunday morning alone.
            </p>
            {renderSections(ONE_ANOTHER_SECTIONS)}
          </section>
        )}

        {/* Tab: Koinonia */}
        {activeTab === "Koinonia" && (
          <section>
            <p
              style={{
                color: MUTED,
                lineHeight: 1.7,
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
              }}
            >
              Koinonia &mdash; the Greek word rendered fellowship, communion, and sharing &mdash; is
              far richer than its contemporary usage suggests. It describes participation in Christ
              himself, the sharing of possessions, and the community meal that defines who belongs.
            </p>
            {renderSections(KOINONIA_SECTIONS)}
          </section>
        )}

        {/* Tab: House Church vs. Institutional */}
        {activeTab === "House Church vs. Institutional" && (
          <section>
            <p
              style={{
                color: MUTED,
                lineHeight: 1.7,
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
              }}
            >
              The early church met primarily in homes &mdash; a fact that raises important questions
              for the building-centric church today. The house church movement gets important things
              right, but also carries real risks. The cell church and missional community seek a
              mediating path.
            </p>
            {renderSections(HOUSE_CHURCH_SECTIONS)}
          </section>
        )}

        {/* Tab: Hospitality as Discipline */}
        {activeTab === "Hospitality as Discipline" && (
          <section>
            <p
              style={{
                color: MUTED,
                lineHeight: 1.7,
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
              }}
            >
              Philoxenia &mdash; love of the stranger &mdash; is a NT command, a qualification for
              church leadership, and a countercultural practice in a privatized society. The crucial
              distinction is between hospitality (which serves) and entertaining (which impresses).
            </p>
            {renderSections(HOSPITALITY_SECTIONS)}
          </section>
        )}

        {/* Tab: Videos */}
        {activeTab === "Videos" && (
          <section>
            <h2
              style={{
                color: GREEN,
                fontWeight: 800,
                fontSize: "1.3rem",
                marginBottom: "1.25rem",
              }}
            >
              Video Resources on Christian Community
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <p style={{ color: TEXT, fontWeight: 700, margin: 0, fontSize: "0.95rem" }}>
                      {v.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
