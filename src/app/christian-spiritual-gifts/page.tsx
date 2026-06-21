"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_spiritualgifts_entries";

interface SGFEntry {
  id: string;
  date: string;
  giftDiscovered: string;
  howUsed: string;
  impact: string;
}

const theologySections = [
  {
    title: "The Three Gift Lists — Romans 12, 1 Corinthians 12, Ephesians 4",
    body: "The New Testament does not give a single tidy inventory of spiritual gifts but three overlapping lists that approach the question from different angles. Romans 12:6-8 anchors gifts in grace (charismata from charis) and names seven: prophecy, service, teaching, exhortation, giving, leadership, and mercy. The list is relational and congregational, focused on how the body builds itself up in love. 1 Corinthians 12:8-10 and 12:28-30 contains the most striking catalogue — wisdom, knowledge, faith, healing, miracles, prophecy, discerning spirits, tongues, and interpretation — and sits in the middle of a sustained argument about unity in diversity. Paul is not writing a systematic theology of gifts; he is correcting a Corinthian church that has elevated one gift (tongues) into a status symbol, fracturing the body. Ephesians 4:11-13 shifts the frame again: here the gifts are gifted people — apostles, prophets, evangelists, pastors, teachers — given to the church to equip the saints for works of ministry. Together the three lists resist systematization, which is itself instructive: the Spirit distributes as he wills (1 Cor 12:11), not according to a schema we devise. The differences between the lists suggest that Paul is describing the same reality from different angles rather than compiling an exhaustive catalogue.",
  },
  {
    title: "Charismata vs. Natural Talents — Overlap and Distinction",
    body: "A common question is whether spiritual gifts are simply natural talents redeployed by the Spirit, or whether they are wholly supernatural endowments with no relation to natural ability. The answer is probably both — and neither extreme captures the full picture. On one hand, the Spirit is the Creator-Spirit who gave natural abilities in the first place (Exodus 31:3 attributes Bezalel's artistic genius to the Spirit of God). It is entirely coherent that the same Spirit who gave a natural capacity for teaching or compassion would also sanctify and deepen that capacity as a spiritual gift. The gift is the same person, more fully surrendered and supernaturally empowered. On the other hand, gifts like tongues, healing, or miracles seem to function in ways that outrun natural explanation and cannot be traced to prior human capacity. The better frame, suggested by Gordon Fee, is that spiritual gifts are not a separate category from the person's whole life before God but the person themselves being used by the Spirit in particular ways for the body's benefit. What distinguishes a gift from mere talent is not necessarily its supernatural quotient but its ecclesial purpose: it is given for others, not for self-expression.",
  },
  {
    title: "The Cessationist and Continuationist Debate",
    body: "One of the most significant disagreements in Protestant Christianity concerns whether all the gifts listed in 1 Corinthians 12 — particularly tongues, prophecy, healing, and miracles — remain active in the church today or whether they ceased at the close of the apostolic age. Cessationists, represented by theologians like B.B. Warfield and John MacArthur, argue that the miraculous gifts authenticated the apostles and, once the New Testament canon was complete and the apostolic foundation laid (Eph 2:20), these signs gifts were no longer needed. The appeal to 1 Corinthians 13:10 — &ldquo;when the perfect comes, the partial will pass away&rdquo; — is common, though continuationists dispute that &ldquo;the perfect&rdquo; refers to the canon. Continuationists, including Wayne Grudem, Sam Storms, and Gordon Fee, argue that the New Testament provides no exegetical basis for cessation and that the worldwide explosion of signs, healings, and prophecy in Pentecostal and charismatic Christianity since 1906 constitutes powerful evidence that the Spirit continues to distribute all his gifts. They read the New Testament's normative descriptions of church life as including these gifts through the age. Both positions deserve charitable engagement. The cessationist concern for the sufficiency of Scripture and the danger of false prophecy is serious; the continuationist concern that cessationism domesticates the Spirit and contradicts the church&rsquo;s global experience is equally serious. Christians across this divide worship the same Spirit and agree that he gives gifts for service.",
  },
  {
    title: "Gifts for the Common Good — 1 Corinthians 12:7",
    body: "&ldquo;To each is given the manifestation of the Spirit for the common good&rdquo; (1 Corinthians 12:7). This sentence is the hermeneutical key to the entire chapter. Every gift — without exception — is given for the common good, not for the personal enrichment of the recipient. This had to be said in Corinth because the community was treating the more spectacular gifts, particularly tongues, as marks of personal spiritual attainment: the person who spoke in tongues was more spiritual, more favored, more advanced. Paul&rsquo;s corrective is total: the purpose of every gift is the building up of the community. A gift exercised for self-display is a contradiction in terms — it is using for personal glory what was given for communal benefit. This principle also means that no one can opt out of ministry by claiming insufficient gifts: every member has received the Spirit&rsquo;s manifestation for the common good, which means every member has a contribution to make. The health of the local church is not a pastoral responsibility but a whole-body responsibility, distributed across every gift-bearing member.",
  },
  {
    title: "The Body-Parts Metaphor — 1 Corinthians 12:12-27",
    body: "Paul&rsquo;s extended body metaphor in 1 Corinthians 12:12-27 is one of the most carefully constructed arguments in his letters. He is confronting two simultaneous dysfunctions: the temptation of the less-honored member to say &ldquo;because I am not a hand, I am not part of the body&rdquo; (v. 15-16), and the temptation of the more-honored member to say to the lesser, &ldquo;I have no need of you&rdquo; (v. 21). Both errors fragment the body; both arise from a theology of gifts that prizes visibility and spectacle. Paul&rsquo;s counter is anatomical: a body composed only of eyes would be grotesque and functionless. The parts that seem weaker are indispensable (v. 22); the parts we think less honorable we clothe with greater honor (v. 23). The practical implication is radical: the church that does not honor and deploy its foot-members — its quiet intercessors, unnoticed administrators, faithful visitors of the sick — is as dysfunctional as a body that has lost the use of its limbs. Every-member ministry is not a program; it is the natural biology of a healthy body.",
  },
  {
    title: "The Danger of Gift-Envy — 1 Corinthians 12:15-16",
    body: "&ldquo;If the foot should say, &lsquo;Because I am not a hand, I do not belong to the body,&rsquo; that would not make it any less a part of the body&rdquo; (1 Corinthians 12:15). Paul imagines a foot convincing itself that it is not part of the body because it is not the hand it wishes it were. This is gift-envy: the inward spiral of comparing one&rsquo;s gifts to others&rsquo; and concluding that one&rsquo;s own are too small, too ordinary, too unheroic to matter. Gift-envy is spiritually corrosive because it is simultaneously a rejection of the Spirit&rsquo;s sovereignty (he distributes as he wills, v. 11) and a withdrawal of one&rsquo;s contribution from the body. The foot that spends its time grieving that it is not the hand is not walking. Gift-envy is also frequently concealed pride — a refusal to serve in the role one has been given because that role does not feel significant enough. The remedy is not forced contentment but a renewed vision of the whole body: understanding that every gift is necessary, that the Spirit&rsquo;s distribution is not arbitrary but architecturally precise, and that the most faithful response to any gift is to exercise it fully rather than to covet another.",
  },
  {
    title: "Love as the Context of All Gifts — 1 Corinthians 13:1-3",
    body: "&ldquo;If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal&rdquo; (1 Corinthians 13:1). Chapter 13 is not a digression from chapters 12 and 14 on spiritual gifts; it is the center of the argument. Paul does not say that love replaces gifts or makes them unnecessary; he says that without love, gifts are not merely less effective but actively meaningless. A charismatic performance without love is noise; a prophetic word without love is nothing; generous giving without love profits nothing. This is perhaps the most demanding thing Paul says about gifts: the possession of extraordinary gifts is not evidence of spiritual maturity, because gifts can operate through people who have not yet been transformed by love. The more excellent way (1 Cor 12:31) is not a superior gift but the environment in which all gifts operate as they were intended. Gift-centered Christianity without love-centered Christianity produces exactly the Corinthian disaster: a community rich in charismata and bankrupt in mutual care. The order is not love instead of gifts but gifts within love, always.",
  },
  {
    title: "How to Discover Your Gifts",
    body: "The New Testament does not prescribe a method for gift discovery, but several principles emerge from its teaching and from the wisdom of practitioners. First, begin with the body: gifts are recognized communally, not merely introspectively. Ask your church community what they have observed in you, because gifts are often visible to others before they are clear to the person exercising them. Second, serve broadly before narrowing: gifts are often discovered through varied service rather than waiting for certainty before acting. The person who serves in multiple capacities — teaching, visiting, organizing, praying for the sick — discovers where the Spirit seems to work most powerfully through them. Third, notice what produces life in others and what produces life in you: gifts, when exercised, typically generate fruit and a sense of rightness, even through effort and cost. Fourth, accept the community&rsquo;s confirmation: when a gift is genuine, others will affirm it without being asked, because they have been built up. Fifth, remember that gift discovery is a lifelong process, not a one-time inventory. Gifts can deepen, multiply, and shift in emphasis through different seasons of life and ministry.",
  },
  {
    title: "The Five-Fold Ministry — Ephesians 4:11-13",
    body: "&ldquo;He gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ&rdquo; (Ephesians 4:11-12). The five-fold (or, if pastors and teachers are one office, four-fold) ministry gifts are distinct from the other gift lists in that they are gifted people given to the church rather than capacities given to individuals. Their purpose is explicit and revolutionary: not to do the ministry themselves but to equip every member of the body to do it. This inverts the clericalism that can creep into church life, where paid ministers perform ministry and congregations watch. The apostle, prophet, evangelist, pastor, and teacher succeed not by doing ministry but by multiplying ministry — producing a congregation where every saint is equipped for works of service. The goal, verse 13 says, is &ldquo;the unity of the faith and of the knowledge of the Son of God, to mature manhood, to the measure of the stature of the fullness of Christ&rdquo; — a community that together embodies the full humanity of Jesus. No single pastor can do this alone; it requires the collaborative work of all five expressions of Christ&rsquo;s ministry.",
  },
];

const practices = [
  {
    name: "The Gift Audit",
    body: "Set aside an evening with a trusted friend or small group and ask three questions: What do I do that seems to build others up? When have people specifically mentioned being helped by something I did or said? What forms of service feel not merely obligatory but alive — as if I were doing what I was made for? Collect the answers over several weeks, looking for patterns. Gift audits are most accurate when they include both self-reflection and community observation, because the community often sees what the individual cannot. Avoid the trap of taking a personality questionnaire and treating the result as definitive; the test is not the questionnaire but the fruit in others.",
  },
  {
    name: "Serving Broadly for a Season",
    body: "For three months, say yes to every reasonable invitation to serve in areas you have not tried before: lead a children&rsquo;s class, pray for someone who is sick, help with administration, visit an elderly member, contribute to the church&rsquo;s communications. The goal is not to become permanently indispensable in every area but to expose yourself to contexts where different gifts operate, so you can discover through experience rather than speculation. Many people never discover a genuine gift for prophecy, healing, or teaching because they have never placed themselves in a context where the Spirit could use those gifts. Broad serving creates the surface area for gift discovery.",
  },
  {
    name: "The Weekly Common-Good Question",
    body: "Each Sunday evening, ask yourself one question: How did the gift I carry contribute to the common good this week? Not: was I impressive? Not: was I thanked? But: did someone benefit? Over time, this practice reshapes the way you think about gifts — away from performance and identity and toward service. Keep a simple record. If multiple weeks go by with no answer, it may be a signal either that your gift is dormant and needs activation, or that you have been serving in an area that does not align with how the Spirit has equipped you.",
  },
  {
    name: "Receiving Others&rsquo; Gifts",
    body: "One of the most neglected practices of gift-based community is receiving. When a teacher teaches well, tell them specifically what landed and how it helped. When an intercessor prays for you and something shifts, report back. When the administrator&rsquo;s work makes your ministry possible, name it. The body functions best when gifts are both given and received gratefully. Receiving honors the Spirit who gave the gift; it also builds up the gift-bearer by confirming that what they carry is real and needed. A church that exercises gifts but does not receive them — that produces sermons no one processes, prayers no one reports on, mercy no one acknowledges — gradually teaches its members that their contributions do not matter.",
  },
  {
    name: "Praying in the Spirit for the Body",
    body: "Paul&rsquo;s closing to Ephesians 4&rsquo;s gift-ministry section connects directly to prayer: the body is built up as each part works properly (v. 16). Begin a practice of praying specifically for the gifts of those in your community — not for gifts they don&rsquo;t have, but for the full release of what they already carry. Pray for the shy teacher to find confidence; for the mercy-shower to have energy; for the prophecy-gifted to discern when to speak. Interceding for others&rsquo; gifts is an act of body-building, and it trains your own attention toward gifts as a communal rather than individual reality.",
  },
  {
    name: "The Two-Gift Rule",
    body: "Identify two gifts: one that comes naturally and is already in use, and one that you have never developed or exercised. For the first, go deeper — seek accountability, mentorship, or training that makes what you already do more excellent and more fruitful. For the second, make one deliberate step toward discovery: read widely, find someone who exercises that gift and ask if you can serve alongside them, or simply pray and ask the Spirit to make clear whether this is a latent gift or a genuine absence. This two-gift practice prevents the stagnation of relying only on familiar capacities while neglecting the full scope of the Spirit&rsquo;s distribution.",
  },
];

const voices = [
  {
    name: "Wayne Grudem",
    years: "b. 1948",
    role: "Systematic theologian of the gifts",
    body: "Grudem&rsquo;s Systematic Theology includes one of the most careful and irenic treatments of spiritual gifts in evangelical scholarship, and his specific work on prophecy — distinguishing New Testament prophecy from Old Testament prophetic authority — has been widely influential on continuationist thought. He argues that New Testament congregational prophecy is fallible reporting of Spirit-prompted impressions rather than the infallible word of God, which accounts for Paul&rsquo;s instruction to &ldquo;test everything&rdquo; (1 Thess 5:21). His framework allows for ongoing prophecy without making every prophetic utterance equivalent to Scripture, threading a needle between cessationist caution and charismatic excess. Grudem&rsquo;s work models how rigorous exegesis and openness to the Spirit&rsquo;s present activity are not in tension.",
    quote:
      "The New Testament simply does not support the idea that God stopped giving spiritual gifts when the last apostle died. The Spirit distributes as he wills, and the church needs every gift for its health.",
  },
  {
    name: "Gordon Fee",
    years: "1934–2022",
    role: "Pentecostal New Testament scholar",
    body: "Fee brought the rare combination of rigorous New Testament scholarship and personal Pentecostal conviction to bear on 1 Corinthians, producing what many consider the definitive commentary on that letter. His insistence that the Spirit is not an &ldquo;it&rdquo; but a person — the experienced presence of God in the community — shaped a generation of pneumatology. Fee was impatient with both Pentecostals who reduced the Spirit to tongues and cessationists who reduced him to the canon. His God&rsquo;s Empowering Presence argues that Paul&rsquo;s vision of the Spirit is robustly charismatic and communal: the gifts are not optional extras for the spiritually adventurous but the normal equipment of a community living in the age of fulfillment. Fee combined critical scholarship with pastoral warmth and was known to weep in the pulpit while teaching Paul — a fitting embodiment of a man who refused to separate the text from the life it described.",
    quote:
      "The Spirit is not primarily given for personal piety. The Spirit is given for the sake of the community — to build up, to empower, to equip, to overflow into the world.",
  },
  {
    name: "Sam Storms",
    years: "b. 1951",
    role: "Continuationist pastor-theologian",
    body: "Storms is among the most articulate contemporary defenders of the ongoing validity of all spiritual gifts, combining pastoral experience in charismatic contexts with careful theological argument. His book Convergence chronicles his own journey from cessationism to continuationism, and his subsequent work — including The Beginner&rsquo;s Guide to Spiritual Gifts and Practicing the Power — aims to help ordinary believers engage with the gifts in congregational life without the emotional excess or doctrinal confusion that often accompanies charismatic renewal. Storms takes cessationist concerns seriously — he addresses them argument by argument — while maintaining that the New Testament gives no exegetical basis for the gifts&rsquo; termination. His combination of theological precision and practical accessibility has made him a trusted guide for Christians navigating the charismatic question.",
    quote:
      "Every cessationist argument I have encountered, when pressed to its exegetical foundation, fails to establish what it claims. The burden of proof lies with those who say the gifts ceased, not with those who say they continue.",
  },
  {
    name: "John Wimber",
    years: "1934–1997",
    role: "Practitioner of signs and wonders",
    body: "Wimber was a former secular musician and music industry consultant who became a Quaker pastor and then the founding leader of the Vineyard movement, one of the twentieth century&rsquo;s most significant charismatic church-planting networks. His contribution was not primarily theological but practical: he developed a low-key, &ldquo;everybody gets to play&rdquo; approach to gifts — particularly healing — that demystified charismatic ministry and made it accessible to ordinary believers in congregational settings. His phrase &ldquo;faith is spelled R-I-S-K&rdquo; captured his conviction that gifts are discovered by acting in dependence on the Spirit rather than waiting for certainty. Wimber was theologically sober — he was wary of hype and charismatic showmanship — and his legacy is a movement that holds together intellectual integrity, social justice concern, and openness to the Spirit&rsquo;s gifts.",
    quote:
      "The Kingdom of God doesn&rsquo;t come through analysis. It comes as we step out in faith and do the stuff — love people, pray for the sick, speak what the Father is saying.",
  },
  {
    name: "Michael Green",
    years: "1930–2019",
    role: "Evangelist and gift-practitioner",
    body: "Green was one of Britain&rsquo;s foremost evangelical theologians and evangelists — an Oxford don who also planted churches, led evangelistic missions across the world, and wrote prolifically on the Holy Spirit and the early church. His I Believe in the Holy Spirit remains a standard text combining historical, exegetical, and practical engagement with pneumatology. Green was an Anglican who practiced and encouraged the gifts of the Spirit within mainline church structures, resisting the tribalism that often divides charismatics from evangelicals. He argued that the experience of the early church as described in Acts — where gifts, evangelism, and community were interwoven — should be the normative description for the church in every age, not a golden age we can only admire from a distance.",
    quote:
      "The Holy Spirit is not the prerogative of a spiritual elite. Every member of the body of Christ has been given the Spirit, and the Spirit gives gifts to every member for the sake of the whole.",
  },
  {
    name: "J.I. Packer",
    years: "1926–2020",
    role: "Reformed theologian on the Spirit",
    body: "Packer is an instructive figure in the gifts debate because he was a thoroughgoing Calvinist and Reformed theologian who was nonetheless deeply sympathetic to the charismatic movement&rsquo;s emphasis on the Spirit&rsquo;s present activity, while remaining cautious about specific claims. His book Keep in Step with the Spirit engages charismatic Christianity seriously and charitably, acknowledging its proper concern for the Spirit&rsquo;s power and presence while questioning some of its practices and assumptions. Packer&rsquo;s framework is useful precisely because it models the theological middle ground: affirming the Spirit&rsquo;s sovereign gift-distribution and present activity without either dismissing the gifts or embracing every charismatic phenomenon uncritically. He reminds us that the Spirit&rsquo;s primary work is always Christological — making us more like Christ — and that gifts serve this goal rather than substituting for it.",
    quote:
      "The test of any claimed work of the Spirit is not the intensity of feeling but the degree to which Christ is exalted and the believer is made more holy.",
  },
];

const scriptures = [
  {
    ref: "1 Corinthians 12:7",
    text: "To each is given the manifestation of the Spirit for the common good.",
    note: "The charter sentence of gift theology: every gift, from every member, for the benefit of everyone. No gift is private property; all gifts are communal infrastructure.",
  },
  {
    ref: "Romans 12:6",
    text: "Having gifts that differ according to the grace given to us, let us use them: if prophecy, in proportion to our faith.",
    note: "Paul&rsquo;s opening instruction is simply: use what you have been given. The gifts are not potential capacities to be theorized about but active responsibilities to be discharged.",
  },
  {
    ref: "1 Corinthians 12:12",
    text: "For just as the body is one and has many members, and all the members of the body, though many, are one body, so it is with Christ.",
    note: "The body metaphor is not decoration; it is Paul&rsquo;s core argument. The church is one organism with many essential parts — diversity in service of unity, not unity at the expense of diversity.",
  },
  {
    ref: "Ephesians 4:11-12",
    text: "He gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ.",
    note: "The five-fold gifts are not an elite class of ministers doing ministry on behalf of passive recipients — they are the body&rsquo;s training staff, equipping every member for their own work of service.",
  },
  {
    ref: "1 Corinthians 13:1-2",
    text: "If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal. And if I have prophetic powers, and understand all mysteries and all knowledge, and if I have all faith, so as to remove mountains, but have not love, I am nothing.",
    note: "Love is not a superior gift that replaces the others; it is the medium in which all gifts must operate. Gifts without love are not merely less effective — they are nothing at all.",
  },
  {
    ref: "1 Corinthians 12:11",
    text: "All these are empowered by one and the same Spirit, who apportions to each one individually as he wills.",
    note: "The Spirit&rsquo;s sovereignty over gift distribution is absolute. This closes the door on both gift-envy (the Spirit chose not to give you this one) and gift-pride (the Spirit gave you this, not your spiritual achievement).",
  },
];

const videos = [
  { videoId: "VH-bRNJL0JE", title: "Spiritual Gifts and the Body of Christ — 1 Corinthians 12" },
  { videoId: "n4ycb9nBa5I", title: "The Gift Lists Compared — Romans 12, 1 Cor 12, Ephesians 4" },
  { videoId: "pn3o-PBGKD4", title: "Cessationism vs. Continuationism Explained" },
  { videoId: "9kBfvgbxIAk", title: "Discovering and Developing Your Spiritual Gifts" },
  { videoId: "PVkIMjnOcBg", title: "The Five-Fold Ministry — Ephesians 4" },
  { videoId: "JNBGelKyAUc", title: "Love as the Context of Every Gift — 1 Corinthians 13" },
];

const relatedPages = [
  { href: "/fruit-of-the-spirit", label: "Fruit of the Spirit" },
  { href: "/christian-discipleship", label: "Christian Discipleship" },
  { href: "/holy-spirit", label: "The Holy Spirit" },
  { href: "/christian-community", label: "Christian Community" },
  { href: "/christian-vocation", label: "Christian Service" },
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

export default function ChristianSpiritualGiftsPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SGFEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [giftDiscovered, setGiftDiscovered] = useState("");
  const [howUsed, setHowUsed] = useState("");
  const [impact, setImpact] = useState("");

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
    if (!giftDiscovered.trim()) return;
    const entry: SGFEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      giftDiscovered: giftDiscovered.trim(),
      howUsed: howUsed.trim(),
      impact: impact.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setGiftDiscovered("");
    setHowUsed("");
    setImpact("");
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
            background: TEAL + "22",
            color: TEAL,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Holy Spirit
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Gifted for the Common Good: Christian Spiritual Gifts
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          The charismata &mdash; gifts of grace &mdash; are not spiritual merit badges or marks of superior faith. They are
          the Spirit&rsquo;s practical provisions for a community that cannot build itself by human capacity alone: each
          member equipped with what the others need, so that the whole body grows into the fullness of Christ.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the three gift lists of the New Testament, the cessationist and continuationist debate,
          the body-parts metaphor of 1 Corinthians 12, love as the context of every gift, and how to discover and
          deploy what the Spirit has placed in you for the good of others.
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
                borderColor: tab === t.id ? TEAL : BORDER,
                background: tab === t.id ? TEAL + "22" : "transparent",
                color: tab === t.id ? TEAL : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              A Theology of Spiritual Gifts
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through the New Testament&rsquo;s teaching on the charismata &mdash; from the three gift lists
              to the five-fold ministry, the cessationist debate, and love as the only context in which gifts fulfill
              their purpose.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of gift theology in the New Testament points in the same direction: the gifts are not
                about the person who holds them but about the community they serve. The Spirit gives as he wills, not
                as we deserve. He gives for the common good, not for self-display. He gives within the body, not
                outside it. And he gives in the context of love &mdash; or not at all, meaningfully. The person who
                has truly understood the gifts is not the one who can name them all but the one who is quietly
                spending what they have been given on the people around them.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Practices for Gift Discovery and Deployment
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Spiritual gifts are not discovered by introspection alone. These six practices place you in the service
              contexts and community relationships where the Spirit reveals and develops what he has given.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: TEAL + "22",
                  color: TEAL,
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
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Voices on Spiritual Gifts
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six theologians, scholars, and practitioners who have shaped how the church thinks about and practices
              the charismata &mdash; from systematic theology to congregational life.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${TEAL}`,
                  background: TEAL + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Scripture on Spiritual Gifts
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts on the charismata &mdash; from the charter verse of gift theology to the body metaphor,
              the five-fold ministry, and love as the only context that makes gifts meaningful.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${TEAL}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: TEAL + "11", border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Meditation suggestion:</strong> spend a week in 1 Corinthians 12&ndash;14
                as a single unit, reading the whole section each day before drilling into individual verses. Paul&rsquo;s
                argument about gifts is lost when the chapters are read in isolation; they form a sustained and brilliant
                piece of pastoral theology that only yields its meaning when held together.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Spiritual Gifts Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Record a gift you have discovered, how you have used it, and what impact you observed in others. Entries
              are saved privately in your browser &mdash; a quiet ledger of the Spirit&rsquo;s work through you for the
              common good.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="sgf-gift" style={labelStyle}>A gift I&rsquo;ve discovered</label>
                <textarea
                  id="sgf-gift"
                  value={giftDiscovered}
                  onChange={e => setGiftDiscovered(e.target.value)}
                  rows={2}
                  placeholder="e.g. Teaching Scripture; offering words of encouragement that seem to land unusually well; organizing people and resources for ministry..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Name it as specifically as you can &mdash; vague gifts are harder to deploy.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="sgf-used" style={labelStyle}>How I&rsquo;ve used it</label>
                <textarea
                  id="sgf-used"
                  value={howUsed}
                  onChange={e => setHowUsed(e.target.value)}
                  rows={2}
                  placeholder="e.g. Leading a Bible study; praying for someone who was sick; helping coordinate our church&rsquo;s outreach to the neighbourhood..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Gifts are confirmed by use. What specific context have you exercised this in?</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="sgf-impact" style={labelStyle}>The impact I observed</label>
                <textarea
                  id="sgf-impact"
                  value={impact}
                  onChange={e => setImpact(e.target.value)}
                  rows={2}
                  placeholder="e.g. Someone told me they finally understood a passage they had found confusing for years; a friend said they felt seen and less alone..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Impact on others is one of the primary confirmations that a gift is genuine. Record what you saw.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!giftDiscovered.trim()}
                style={{
                  background: giftDiscovered.trim() ? TEAL : BORDER,
                  color: giftDiscovered.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: giftDiscovered.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin your gifts ledger above &mdash; one discovered and deployed gift at a time.
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
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        {entry.date}
                      </div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Gift Discovered
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.giftDiscovered}</p>
                      </div>
                      {entry.howUsed && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            How Used
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.howUsed}</p>
                        </div>
                      )}
                      {entry.impact && (
                        <div>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Impact Observed
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.impact}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the gift lists, the cessationist and continuationist debate, how to discover your gifts, the
              five-fold ministry, and love as the necessary context of every charisma.
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
            &ldquo;To each is given the manifestation of the Spirit for the common good.&rdquo; You have been given
            something the body of Christ around you needs. The most faithful response to that gift is not to catalog it
            but to spend it &mdash; quietly, consistently, for others, in love.
          </p>
        </div>
      </main>
    </div>
  );
}
