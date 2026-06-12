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

const SECTIONS = [
  { id: "foundations", label: "Foundations", icon: "📜" },
  { id: "prophets", label: "The Prophets", icon: "🔥" },
  { id: "jesus", label: "Jesus & Justice", icon: "✝️" },
  { id: "jubilee", label: "The Jubilee", icon: "🕊️" },
  { id: "integration", label: "Gospel + Justice", icon: "⚖️" },
  { id: "videos", label: "Videos", icon: "🎬" },
];

const HEBREW_WORDS = [
  {
    word: "Mishpat (מִשְׁפָּט)",
    english: "Justice / Right Judgment",
    color: GREEN,
    reference: "Deuteronomy 10:18; Psalm 82:3; Isaiah 1:17; Amos 5:24; Micah 6:8",
    content:
      "Mishpat appears over 200 times in the Old Testament and carries a dual meaning: the act of legal judgment and the ongoing condition of justice in a community. It specifically names the rights owed to the vulnerable — the poor, the widow, the orphan, and the stranger — those whom the powerful most easily exploit. Mishpat includes punitive justice (holding wrongdoers accountable) but always also restorative justice (restoring the wronged party to dignity and community). When Amos thunders 'let mishpat roll down like waters,' he is not merely demanding fair courts — he is demanding that the entire social order be reoriented toward the vulnerable. Used as a verb, mishpat means to actively do justice. You do not merely refrain from injustice; you pursue it.",
  },
  {
    word: "Tzedakah (צְדָקָה)",
    english: "Righteousness / Generosity",
    color: PURPLE,
    reference: "Genesis 18:19; Psalm 112:9; Proverbs 21:3; Isaiah 58:6-7",
    content:
      "Tzedakah is usually translated 'righteousness' in English Bibles, but the Hebrew concept is inseparable from social generosity and justice. The tzaddik — the righteous person — is not primarily someone who maintains personal purity but someone who gives to the poor, defends the vulnerable, and maintains right relationships in community. Psalm 112:9 says of the righteous person: 'He has distributed freely; he has given to the poor.' In post-biblical Judaism, tzedakah became the primary word for charitable giving — not because giving is optional, but because giving to the poor is what righteousness looks like. The separation of personal righteousness from justice toward the poor is a distinctly modern Western reading; in Hebrew, these describe the same reality.",
  },
  {
    word: "Hesed (חֶסֶד)",
    english: "Lovingkindness / Covenant Loyalty",
    color: BLUE,
    reference: "Exodus 34:6-7; Psalm 136; Hosea 6:6; Micah 6:8; Lamentations 3:22-23",
    content:
      "Hesed is one of the great untranslatable words of Scripture — rendered 'lovingkindness,' 'steadfast love,' 'mercy,' 'loyalty,' and 'covenant faithfulness' across different translations. It describes the loyal, persevering love that flows from covenant relationship. Micah 6:8's famous triad — 'do justice (mishpat), love hesed, and walk humbly with your God' — places covenant loyalty alongside justice as equally required. Hesed is love that costs something. Its communal form is the commitment to see that everyone in the covenant community flourishes, at personal cost if necessary. Justice without hesed becomes harsh; hesed without justice becomes sentimental.",
  },
  {
    word: "Shalom (שָׁלוֹם)",
    english: "Peace / Wholeness / Flourishing",
    color: GOLD,
    reference: "Numbers 6:24-26; Jeremiah 29:7; Isaiah 65:17-25; John 14:27; Revelation 21:1-5",
    content:
      "Shalom is far richer than the English word 'peace.' It does not merely mean the absence of conflict but the presence of wholeness — the full flourishing of human beings in right relationship with God, one another, and creation. When the Torah pronounces the Aaronic blessing ('The Lord bless you and keep you... and give you shalom'), it is invoking total well-being: physical health, relational harmony, spiritual wholeness, economic sufficiency, community belonging. Justice is not the end goal — shalom is. Justice is the instrument by which shalom is built and protected. Isaiah 65's vision of a community where no child dies young, no one builds a house for another to live in, no one plants a vineyard for another to eat from — that is shalom as the goal of all justice work.",
  },
];

const PROPHETS = [
  {
    prophet: "Amos",
    era: "8th century BC",
    color: GREEN,
    key_verse: "Amos 5:21-24",
    verse_text:
      "I hate, I despise your religious festivals; your assemblies are a stench to me... But let justice roll on like a river, righteousness like a never-failing stream!",
    content:
      "Amos was a shepherd from Tekoa who prophesied to the prosperous northern kingdom of Israel during the reign of Jeroboam II. The economy was booming; the temples were full. But Amos diagnosed a catastrophic spiritual crisis beneath the surface prosperity: the wealthy were exploiting the poor, the courts were corrupt, and the comfortable were indifferent. His rhetorical strategy was brilliant — he condemned Israel's neighbors one by one (getting the crowd's approval) and then turned on Israel itself with the same indictment. Amos 2:6-7 is surgical: they 'sell the innocent for silver, and the needy for a pair of sandals. They trample on the heads of the poor as on the dust of the ground and deny justice to the oppressed.' His most famous lines (5:21-24) declare that God finds religious worship repugnant when it coexists with systemic injustice. Worship without justice is not neutral — it is an offense to God.",
    application:
      "The Amos question for the contemporary church: Is our worship coexisting with comfortable indifference to the poor in our city? Does our liturgical life drive us toward the vulnerable or insulate us from them?",
  },
  {
    prophet: "Isaiah",
    era: "8th century BC",
    color: PURPLE,
    key_verse: "Isaiah 58:6-7",
    verse_text:
      "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter?",
    content:
      "Isaiah 58 is one of the most devastating critiques of religious performance in all of Scripture. The people are fasting and asking why God is not responding. God's answer is that their fasting is self-directed theater — they observe the forms of religion while oppressing their workers and pursuing their own agendas. The fast God chooses is concrete and social: freeing the oppressed, feeding the hungry, housing the homeless, clothing the naked. Isaiah then links justice with the presence of God: 'Then your light will break forth like the dawn, and your healing will quickly appear; then your righteousness will go before you, and the glory of the Lord will be your rear guard' (58:8). Isaiah 61 — which Jesus reads in the Nazareth synagogue and applies to himself — announces the Spirit-anointed mission to 'bind up the brokenhearted, proclaim freedom for the captives, and release from darkness for the prisoners.'",
    application:
      "The Isaiah question: Are the disciplines of your spiritual life (prayer, fasting, worship) producing greater engagement with the vulnerable, or are they becoming comfortable forms that reinforce spiritual self-satisfaction?",
  },
  {
    prophet: "Micah",
    era: "8th century BC",
    color: TEAL,
    key_verse: "Micah 6:8",
    verse_text:
      "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
    content:
      "Micah 6:8 is perhaps the most concentrated statement of the moral requirements of covenant life in the entire Old Testament. Its three demands are deeply integrated: justice (mishpat) and mercy (hesed) together require that we act concretely toward those who have been wronged and love with the loyal, costly commitment of covenant. Walking humbly with God is not a third, separate requirement — it is the spiritual posture that makes the first two possible. Pride produces injustice (we exploit those beneath us) and cruelty (we withhold mercy from those who threaten our comfort). Humility before God is the root from which justice and mercy grow. Micah speaks to a context of corrupt courts, dishonest merchants using rigged weights and measures (6:10-12), and leaders who exploit the poor. The prophet does not separate personal from systemic sin — both are addressed as violations of the covenant.",
    application:
      "The Micah question: What concrete, active form is your justice-doing taking? Mishpat is a verb — it requires action, not merely sympathy. And is your mercy characterized by hesed — loyalty and perseverance — or merely occasional relief?",
  },
  {
    prophet: "Ezekiel",
    era: "6th century BC",
    color: GOLD,
    key_verse: "Ezekiel 16:49; 34:1-6",
    verse_text:
      "Now this was the sin of your sister Sodom: She and her daughters were arrogant, overfed and unconcerned; they did not help the poor and needy.",
    content:
      "Ezekiel 16:49 reframes Sodom's famous sin. While Genesis 19 emphasizes sexual violence, Ezekiel identifies a deeper root: the combination of arrogance, excess, and indifference to the poor. The culture of Sodom was one of entitlement and contempt for the vulnerable, of which the sexual violence was an expression. Ezekiel 34 is an extended indictment of Israel's leaders (shepherds) for failing to care for the flock: 'You have not strengthened the weak or healed the sick or bound up the injured. You have not brought back the strays or searched for the lost.' God responds by declaring Himself the true Shepherd who will seek out the lost and scattered — a passage Jesus directly invokes in John 10 and Luke 15. Leadership failure to do justice is not merely political failure; it is shepherding failure that God takes personally.",
    application:
      "The Ezekiel question: Where are you positioned with excess while remaining unconcerned about the poor and needy? What would it cost you to move from sympathy to active involvement?",
  },
];

const JESUS_CONTENT = [
  {
    heading: "The Nazareth Manifesto",
    color: GREEN,
    reference: "Luke 4:16-21",
    body: "Jesus' first public act is to read Isaiah 61 in the Nazareth synagogue and declare: 'Today this scripture is fulfilled in your hearing.' He identifies his own mission as the Spirit-anointed proclamation of good news to the poor, freedom for captives, recovery of sight for the blind, liberation for the oppressed, and the proclamation of the year of the Lord's favor — the Jubilee year. This is not metaphorical. Jesus immediately begins healing, forgiving, feeding, touching lepers, and advocating for the poor. The Nazareth synagogue sermon is the mission statement of his public ministry, and justice is written into its DNA from the first sentence.",
  },
  {
    heading: "Jesus and the Poor",
    color: PURPLE,
    reference: "Matthew 11:2-6; Luke 6:20-26; Mark 10:17-27",
    body: "When John the Baptist sends disciples to ask 'Are you the one who is to come?', Jesus' answer is a list of justice works: 'The blind receive sight, the lame walk, those who have leprosy are cleansed, the deaf hear, the dead are raised, and the good news is proclaimed to the poor' (Matthew 11:5). The proclamation of good news to the poor is the capstone of this list — proof of messianic identity. Luke's version of the Beatitudes is starker than Matthew's: 'Blessed are you who are poor' and 'Woe to you who are rich' (Luke 6:20, 24). Jesus does not spiritualize poverty away — he pronounces blessing on its actual condition. The rich young ruler (Mark 10:17-27) is told to sell everything and give to the poor — the only person in the Gospels Jesus calls to this specific action, suggesting it was precisely his attachment to wealth that blocked his discipleship.",
  },
  {
    heading: "The Great Judgment — Matthew 25",
    color: GOLD,
    reference: "Matthew 25:31-46",
    body: "The parable of the sheep and goats is the most direct identification of Jesus with the poor in all of Scripture. The King says: 'Whatever you did for one of the least of these brothers and sisters of mine, you did for me.' The criterion of judgment is entirely about whether people fed the hungry, gave drink to the thirsty, welcomed the stranger, clothed the naked, cared for the sick, and visited the imprisoned. This is not a works-salvation text — the righteous are surprised by the verdict, suggesting their service was not calculated. It is a character-of-the-kingdom text: those who truly know the King share His heart for the poor. The separation of personal salvation from social concern is a distortion this text will not sustain.",
  },
  {
    heading: "Jesus and Systemic Injustice",
    color: BLUE,
    reference: "Luke 19:1-10; Mark 11:15-17; Luke 20:45-47",
    body: "Jesus does not only care for individuals — he confronts systems. His cleansing of the temple is an act of institutional critique: the Court of the Gentiles (the only space where Gentiles could pray) had been turned into a market, effectively excluding the nations from the house of prayer for all nations. Mark 11:17 quotes both Isaiah 56:7 and Jeremiah 7:11 — a deliberate echo of two prophetic critiques of the temple establishment. Luke 20:45-47 condemns the scribes who devour widows' houses and for a show make lengthy prayers — a description of legal exploitation of the vulnerable behind a veneer of religious respectability.",
  },
  {
    heading: "The Good Samaritan — Expanding the Neighbor",
    color: TEAL,
    reference: "Luke 10:25-37",
    body: "The parable of the Good Samaritan is not primarily about individual acts of charity — it is about the definition of neighbor. The legal expert asks 'Who is my neighbor?' hoping to limit his obligation. Jesus answers with a story in which a despised foreigner is the exemplary neighbor, and the religiously respectable (priest and Levite) walk past the suffering man. The Samaritan's response is comprehensive: he stopped, had compassion, bound up wounds, transported the man, paid for his care, and promised follow-up. Jesus then reframes the question: not 'Who is my neighbor?' (limiting the obligation) but 'Which of these three was a neighbor to the man?' — demanding we become neighbors to whoever we encounter in need.",
  },
];

const JUBILEE_CONTENT = [
  {
    heading: "The Jubilee Principle — Leviticus 25",
    color: GREEN,
    reference: "Leviticus 25:8-55",
    body: "The Jubilee (every 50th year) was the most radical economic legislation in the ancient world. In the Jubilee year: all land returned to its ancestral owners, all debt-slaves were freed, all accumulated land concentration was reversed. The theological rationale is explicit: 'The land must not be sold permanently, because the land is mine and you reside in my land as foreigners and strangers' (Leviticus 25:23). The Jubilee does not abolish private property — it recognizes that all property is ultimately held in trust from God and that the natural drift of markets toward concentration must be periodically reversed to maintain the covenant community's economic integrity. Jesus' announcement of the 'year of the Lord's favor' in Luke 4 is Jubilee language applied to his own mission.",
  },
  {
    heading: "Gleaning Laws — Structural Provision for the Poor",
    color: PURPLE,
    reference: "Leviticus 19:9-10; Deuteronomy 24:19-22; Ruth 2",
    body: "The Torah's gleaning laws required landowners to leave the edges of their fields unharvested, to not pick up fallen grain, and to not strip their vineyards bare — all to ensure that the poor, the widow, the orphan, and the foreigner had access to food through their own labor. This is not charity — it is structured access. The poor were not given food; they were given the right to work for food. The book of Ruth dramatizes this system: Boaz's field is a functioning gleaning economy, and his treatment of Ruth (going beyond the legal minimum) illustrates the hesed dimension of the law. The gleaning principle suggests that justice is not only about direct giving but about structuring systems so the vulnerable can participate with dignity.",
  },
  {
    heading: "The Sabbath Year — Debt Cancellation",
    color: TEAL,
    reference: "Deuteronomy 15:1-11",
    body: "Every seventh year, Israel was commanded to cancel debts among Israelites. Deuteronomy 15:4 states the goal: 'There need be no poor people among you' — poverty is not accepted as permanent or inevitable. But Deuteronomy 15:9 warns against the hardness of heart that might refuse to lend to the poor because the debt might be cancelled. The law anticipates self-protective behavior and directly confronts it. Verse 11 is the most honest line in the passage: 'There will always be poor people in the land' — not as resignation but as motivation: 'Therefore I command you to be openhanded toward your fellow Israelites who are poor and needy in your land.'",
  },
  {
    heading: "Systemic vs. Personal Sin",
    color: GOLD,
    reference: "Amos 2:6-8; Isaiah 10:1-3; James 5:1-6; Ephesians 6:12",
    body: "One of the most important distinctions in justice theology is between personal sin (individual moral failures) and systemic or structural sin (injustice embedded in laws, institutions, and social arrangements that harm people regardless of individual intent). The prophets addressed both. Isaiah 10:1-3 condemns lawmakers who 'make unjust laws, to deprive the poor of their rights' — structural injustice built into the legal code. James 5:4 condemns wealthy landowners whose workers' wages have been withheld through fraud — systemic exploitation. Christians who limit their justice concern to personal moral choices miss the prophetic tradition's consistent focus on structures, laws, and systems.",
  },
];

const INTEGRATION_CONTENT = [
  {
    heading: "The False Dichotomy — Evangelism vs. Justice",
    color: GREEN,
    body: "Some evangelical traditions have historically prioritized evangelism (saving souls) over justice work (changing social conditions), arguing that eternal destinies matter more than temporal circumstances. Some progressive traditions have moved the opposite direction — reducing the gospel to social improvement and de-emphasizing personal conversion. Both are distortions. The New Testament holds them together: the gospel that Jesus proclaims is comprehensive — it rescues people from sin and death and simultaneously restores the relational, social, and material dimensions of human life that sin has broken.",
  },
  {
    heading: "The Lausanne Covenant (1974) — A Settlement",
    color: PURPLE,
    body: "The 1974 Lausanne Covenant — drafted by John Stott and signed by evangelical leaders from 150 countries — declared: 'We affirm that evangelism and socio-political involvement are both part of our Christian duty. For both are necessary expressions of our doctrines of God and man, our love for our neighbour and our obedience to Jesus Christ.' This was a landmark settlement in evangelical debates about evangelism and social action. It did not resolve every question about the relationship but established that both belong to the Christian mission. Tim Keller, Ron Sider, and John Stott have each developed this position further in subsequent decades.",
  },
  {
    heading: "Justice as a Dimension of Evangelism",
    color: BLUE,
    body: "The credibility of the gospel proclamation is partially dependent on the visible justice of the proclaiming community. When the church advocates for the poor, it embodies the message it preaches — it demonstrates that the God who saves is also the God who cares for the vulnerable. Paul makes this point practically in 1 Corinthians 11: the Corinthians' abuse of the Lord's Supper — eating without waiting for the poor to arrive, drinking while others go hungry — means they eat and drink judgment on themselves. The justice of the community's common life is inseparable from the authenticity of its worship.",
  },
  {
    heading: "Charity vs. Justice — An Important Distinction",
    color: TEAL,
    body: "Charity addresses immediate need: a hungry person is fed today. Justice addresses the conditions that create the need: why is this person hungry, and what structures, policies, or systems maintain that condition? Both are required. The parable of the Good Samaritan calls for immediate, generous, individual charity. The gleaning laws and Jubilee call for structural provisions. The prophets condemn structural injustice — unjust laws, corrupt courts, wage theft — not merely personal cruelty. A church that is generous with food pantries but silent on policies that perpetuate poverty is doing half of what the biblical tradition requires.",
  },
  {
    heading: "The Local Church as Justice Community",
    color: GOLD,
    body: "The local church is not merely a launching pad for individual justice workers — it is itself called to be a community of justice. Acts 2 and 4 describe the Jerusalem church as a community where 'there was not a needy person among them' — a direct echo of Deuteronomy 15's vision. The congregation's own internal economic life is a justice testimony. Does the church practice genuine economic community across class lines? Are wealthy and poor members in genuine relationship, not just proximity? Does the church's mercy ministry dignify those it serves or create dependency? These are not abstract questions — they describe whether the local church is actually being what Jesus called it to be.",
  },
];

const VIDEOS = [
  {
    videoId: "39DSNKhkJ4s",
    title: "Justice and the Gospel",
    description:
      "Tim Keller on how the gospel produces justice — why the Christian motivation for justice work is categorically different from secular motivations and more sustainable.",
  },
  {
    videoId: "Q5zLmCsw3hM",
    title: "What Does the Bible Say About Justice?",
    description:
      "A careful walk through the Old and New Testament witness on justice — mishpat, tzedakah, the prophets, and Jesus — by a biblical scholar committed to the full scope of the justice mandate.",
  },
  {
    videoId: "yT2IEFHbdRA",
    title: "Generous Justice — A Book Talk",
    description:
      "Tim Keller discusses the argument of Generous Justice — that a deep encounter with the gospel will always produce active concern for the poor and marginalized.",
  },
];

export default function ChristianJusticeGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("foundations");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  function toggleItem(key: string) {
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

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
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(160deg, #0e0b1a 0%, ${BG} 60%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "60px 20px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: `${PURPLE}18`,
              border: `1px solid ${PURPLE}40`,
              borderRadius: 8,
              padding: "4px 14px",
              color: PURPLE,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Christian Justice Guide
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Let Justice Roll Down Like Waters
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.7,
              maxWidth: 620,
              margin: "0 auto 32px",
            }}
          >
            Mishpat. Tzedakah. Shalom. The biblical vocabulary of justice is ancient, demanding,
            and inseparable from the character of God. A guide to the prophets&rsquo; vision,
            Jesus&rsquo; mission, and the church&rsquo;s calling.
          </p>
          <div
            style={{
              background: `${PURPLE}12`,
              border: `1px solid ${PURPLE}35`,
              borderRadius: 12,
              padding: "16px 24px",
              display: "inline-block",
              maxWidth: 580,
            }}
          >
            <p style={{ color: "#B39DDB", fontStyle: "italic", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              &ldquo;He has shown you, O mortal, what is good. And what does the Lord require of
              you? To act justly and to love mercy and to walk humbly with your God.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>
              Micah 6:8
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Section Nav */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "36px 0 32px" }}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSection(s.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: `1px solid ${activeSection === s.id ? PURPLE : BORDER}`,
                background: activeSection === s.id ? `${PURPLE}20` : CARD,
                color: activeSection === s.id ? PURPLE : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {s.icon} {s.label}
            </button>
          ))}
        </div>

        {/* Foundations */}
        {activeSection === "foundations" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                The Biblical Vocabulary of Justice
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                Before we can do biblical justice, we must understand what the Bible means by it.
                Four Hebrew words define the theological landscape.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HEBREW_WORDS.map((item) => {
                const key = `found-${item.word}`;
                const open = expandedItems[key];
                return (
                  <div
                    key={key}
                    style={{
                      background: CARD,
                      border: `1px solid ${open ? item.color + "50" : BORDER}`,
                      borderRadius: 14,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(key)}
                      style={{
                        width: "100%",
                        padding: "18px 22px",
                        cursor: "pointer",
                        textAlign: "left",
                        background: "transparent",
                        border: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 16,
                      }}
                    >
                      <div>
                        <div style={{ color: item.color, fontWeight: 800, fontSize: 16, marginBottom: 2 }}>
                          {item.word}
                        </div>
                        <div style={{ color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
                          {item.english}
                        </div>
                        <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic" }}>
                          {item.reference}
                        </div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginTop: 2 }}>
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${BORDER}` }}>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "18px 0 0" }}>
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                background: `${BLUE}0d`,
                border: `1px solid ${BLUE}30`,
                borderRadius: 14,
                padding: 28,
                marginTop: 28,
              }}
            >
              <h3 style={{ color: BLUE, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>
                The Image of God &mdash; Justice&rsquo;s Foundation
              </h3>
              <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic", marginBottom: 12 }}>
                Genesis 1:26-28; James 3:9; Acts 17:28-29
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                The claim that every human being is created in the image of God (imago Dei) is
                the theological foundation of justice. It is not a political statement &mdash; it is
                an ontological one. To bear the image of God is to possess an intrinsic dignity
                that cannot be forfeited by circumstance, status, sin, or social category. This is
                what makes justice a theological necessity and not merely a political preference:
                to wrong a human being is to wrong someone who bears the likeness of God. James
                3:9 grounds its argument against cursing human beings directly in the image:
                &ldquo;With the tongue we curse human beings, who have been made in the likeness
                of God.&rdquo; Justice is the social form of respect for the image.
              </p>
            </div>
          </div>
        )}

        {/* Prophets */}
        {activeSection === "prophets" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                The Prophets: God&rsquo;s Justice Advocates
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                The Old Testament prophets were not primarily predictors of the future. They
                were covenant enforcers &mdash; announcing God&rsquo;s verdict on Israel&rsquo;s
                injustice and calling the people back to the demands of the covenant.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {PROPHETS.map((p) => {
                const key = `proph-${p.prophet}`;
                const open = expandedItems[key];
                return (
                  <div
                    key={key}
                    style={{
                      background: CARD,
                      border: `1px solid ${p.color}35`,
                      borderRadius: 16,
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ padding: "22px 26px 0" }}>
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ color: p.color, fontWeight: 900, fontSize: 20, marginBottom: 2 }}>
                          {p.prophet}
                        </div>
                        <div style={{ color: MUTED, fontSize: 12 }}>
                          {p.era} &mdash; Key text: {p.key_verse}
                        </div>
                      </div>
                      <div
                        style={{
                          background: `${p.color}10`,
                          border: `1px solid ${p.color}25`,
                          borderRadius: 10,
                          padding: "12px 16px",
                          marginBottom: 16,
                        }}
                      >
                        <p style={{ color: p.color, fontStyle: "italic", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                          &ldquo;{p.verse_text}&rdquo;
                        </p>
                        <p style={{ color: MUTED, fontSize: 11, margin: "6px 0 0", fontWeight: 600 }}>
                          {p.key_verse}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleItem(key)}
                      style={{
                        width: "100%",
                        padding: "12px 26px",
                        cursor: "pointer",
                        textAlign: "left",
                        background: "transparent",
                        border: "none",
                        borderTop: `1px solid ${BORDER}`,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: MUTED,
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      <span>{open ? "Hide" : "Read full commentary"}</span>
                      <span style={{ fontSize: 18 }}>{open ? "−" : "+"}</span>
                    </button>
                    {open && (
                      <div style={{ padding: "0 26px 22px" }}>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "16px 0 14px" }}>
                          {p.content}
                        </p>
                        <div
                          style={{
                            background: `${p.color}0d`,
                            border: `1px solid ${p.color}25`,
                            borderRadius: 10,
                            padding: "12px 16px",
                          }}
                        >
                          <div
                            style={{
                              color: p.color,
                              fontWeight: 800,
                              fontSize: 11,
                              letterSpacing: 1,
                              textTransform: "uppercase",
                              marginBottom: 6,
                            }}
                          >
                            The {p.prophet} Question
                          </div>
                          <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>
                            {p.application}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Jesus & Justice */}
        {activeSection === "jesus" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                Jesus and Justice: The Messianic Program
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                Jesus did not merely speak about justice &mdash; he embodied it. His ministry
                was the fulfillment of the prophetic tradition: good news to the poor, freedom
                for captives, sight for the blind, and the Jubilee year of the Lord.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {JESUS_CONTENT.map((item) => (
                <div
                  key={item.heading}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 14,
                    padding: "22px 26px",
                  }}
                >
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: 15, marginBottom: 6 }}>
                    {item.heading}
                  </h3>
                  <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic", marginBottom: 14 }}>
                    {item.reference}
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 28,
                background: `${GOLD}0d`,
                border: `1px solid ${GOLD}35`,
                borderRadius: 14,
                padding: 28,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontSize: 18,
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  margin: "0 auto 12px",
                  maxWidth: 560,
                  fontWeight: 600,
                }}
              >
                &ldquo;Truly I tell you, whatever you did for one of the least of these brothers
                and sisters of mine, you did for me.&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>Matthew 25:40</p>
            </div>
          </div>
        )}

        {/* Jubilee */}
        {activeSection === "jubilee" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                The Jubilee Principle: Structural Justice in Scripture
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                The Jubilee and sabbath-year legislation are the most radical economic laws in
                the ancient world &mdash; embedded in the Torah as non-negotiable expressions
                of covenant faithfulness.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {JUBILEE_CONTENT.map((item) => (
                <div
                  key={item.heading}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 14,
                    padding: "22px 26px",
                  }}
                >
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: 15, marginBottom: 6 }}>
                    {item.heading}
                  </h3>
                  <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic", marginBottom: 14 }}>
                    {item.reference}
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, marginBottom: 20 }}>
                Personal Sin vs. Systemic Sin &mdash; Both Are Real
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div
                  style={{ background: `${PURPLE}0d`, border: `1px solid ${PURPLE}25`, borderRadius: 10, padding: 18 }}
                >
                  <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Personal / Individual Sin
                  </div>
                  <ul style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
                    <li>Individual acts of theft, cruelty, exploitation</li>
                    <li>Prejudice and contempt held in the heart</li>
                    <li>Refusing to help a neighbor in need</li>
                    <li>The greedy landowner who withholds wages</li>
                    <li>Addressed through repentance, forgiveness, restitution</li>
                  </ul>
                </div>
                <div
                  style={{ background: `${TEAL}0d`, border: `1px solid ${TEAL}25`, borderRadius: 10, padding: 18 }}
                >
                  <div style={{ color: TEAL, fontWeight: 800, fontSize: 13, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Systemic / Structural Sin
                  </div>
                  <ul style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
                    <li>Laws and policies that harm the vulnerable</li>
                    <li>Institutions whose practices perpetuate injustice</li>
                    <li>Economic systems that concentrate wealth unfairly</li>
                    <li>Housing, education, or healthcare disparities</li>
                    <li>Addressed through advocacy, policy change, structural reform</li>
                  </ul>
                </div>
              </div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: "18px 0 0", fontStyle: "italic" }}>
                The prophets addressed both. Amos condemns individual exploitation (2:6-8) and
                corrupt institutions (5:10-13) in the same breath. A complete biblical justice
                framework addresses personal moral failure and institutional injustice as two
                dimensions of the same problem.
              </p>
            </div>
          </div>
        )}

        {/* Gospel + Justice */}
        {activeSection === "integration" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                Gospel &amp; Justice: Integration, Not Competition
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                Evangelism and justice are not rivals. They are two expressions of the same
                gospel, both essential, neither sufficient without the other.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {INTEGRATION_CONTENT.map((item) => (
                <div
                  key={item.heading}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 14,
                    padding: "22px 26px",
                  }}
                >
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: 15, marginBottom: 14 }}>
                    {item.heading}
                  </h3>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ background: `${GREEN}0d`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
              <h3
                style={{
                  color: GREEN,
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                Practical First Steps Toward Justice
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
                {[
                  { step: "Know your city's pain points", detail: "Research: What are the top three justice issues in your city? Housing? Incarceration? Immigration? Education? Pick one and learn it deeply before you act.", color: GREEN },
                  { step: "Join an existing effort", detail: "Find Christians already doing justice work in your area — prison ministry, legal aid, food systems work — and volunteer under their leadership before starting anything new.", color: PURPLE },
                  { step: "Read the neighborhood, not just the news", detail: "Spend time in your city's most vulnerable neighborhoods — not as a tourist or savior but as a learner. Listen before you act.", color: BLUE },
                  { step: "Connect justice to your congregation", detail: "Bring your justice concern to your church's leadership. Ask how the congregation can engage. Don't pursue justice apart from the body.", color: TEAL },
                  { step: "Advocate, not just serve", detail: "Move beyond charity toward advocacy. Write to your local officials. Attend city council meetings. Learn how your city's policies affect the poor.", color: GOLD },
                  { step: "Integrate your prayer life", detail: "Pray specifically for the poor and vulnerable in your city. Name people, places, and situations. Let prayer drive action — and let action drive deeper prayer.", color: "#EF4444" },
                ].map((item, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${item.color}25`, borderRadius: 10, padding: 18 }}>
                    <div style={{ color: item.color, fontWeight: 800, fontSize: 13, marginBottom: 8 }}>
                      {item.step}
                    </div>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Videos */}
        {activeSection === "videos" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                Video Teaching on Christian Justice
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>
                Trusted voices on the theology of justice, mercy, and the church&rsquo;s
                calling to pursue shalom in a broken world.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "18px 22px" }}>
                    <h4 style={{ color: PURPLE, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{v.title}</h4>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing Encouragement */}
        <div
          style={{
            marginTop: 64,
            background: `linear-gradient(135deg, ${PURPLE}12 0%, ${TEAL}0d 100%)`,
            border: `1px solid ${PURPLE}30`,
            borderRadius: 20,
            padding: "40px 36px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 900, marginBottom: 16, color: TEXT }}>
            Justice Is Not Optional &mdash; It Is Characteristic
          </h2>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, maxWidth: 600, margin: "0 auto 24px" }}>
            The God of the Bible is not neutral on justice. He is the defender of the widow, the
            father of the orphan, and the advocate for the stranger. To know this God is to share
            His passion. Justice is not a specialty track for Christians with particular political
            leanings &mdash; it is a dimension of what it means to be conformed to the image of Christ.
          </p>
          <div
            style={{
              background: `${PURPLE}12`,
              border: `1px solid ${PURPLE}35`,
              borderRadius: 12,
              padding: "16px 24px",
              display: "inline-block",
              maxWidth: 560,
            }}
          >
            <p style={{ color: "#B39DDB", fontStyle: "italic", fontSize: 15, lineHeight: 1.65, margin: 0 }}>
              &ldquo;Learn to do right; seek justice. Defend the oppressed. Take up the cause
              of the fatherless; plead the case of the widow.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>Isaiah 1:17</p>
          </div>
        </div>
      </div>
    </div>
  );
}
