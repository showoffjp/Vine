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
  {
    id: "oikonomia",
    label: "Oikonomia",
    icon: "🏛️",
  },
  {
    id: "talents",
    label: "The Talents",
    icon: "💰",
  },
  {
    id: "tithing",
    label: "Tithing",
    icon: "📖",
  },
  {
    id: "time-talent",
    label: "Time & Talent",
    icon: "⏳",
  },
  {
    id: "creation",
    label: "Creation",
    icon: "🌿",
  },
  {
    id: "videos",
    label: "Videos",
    icon: "🎬",
  },
];

const THEOLOGY_CARDS = [
  {
    title: "Oikonomia — Household Management",
    color: GREEN,
    reference: "Luke 16:1-13; 1 Corinthians 4:1-2; Titus 1:7",
    content:
      "The Greek word oikonomia — from oikos (house) and nomos (law or management) — is translated 'stewardship,' 'administration,' or 'management' in the New Testament. It describes the relationship of a trusted servant who manages the master’s household, property, and resources on behalf of the owner. The crucial insight is ownership: the steward does not own what he manages. He receives it, multiplies it, and will one day give account of it. This word shapes the entire Christian theology of possessions. We are not owners of our money, time, abilities, or creation — we are oikonomoi (stewards, household managers) accountable to God for everything entrusted to us.",
  },
  {
    title: "The Parable of the Talents — Faithfulness Under Accountability",
    color: PURPLE,
    reference: "Matthew 25:14-30; Luke 19:11-27",
    content:
      "Jesus’ parable of the talents is the most direct scriptural treatment of stewardship. A master entrusts different amounts to three servants and then departs. Two servants invest and double what they received; one buries his out of fear. The master returns, praises the faithful two with identical words — ‘Well done, good and faithful servant!’ — regardless of the size of return, and condemns the one who was passive. The parable teaches that stewardship is not about how much you have but whether you are faithfully deploying what you’ve been given. Fear of loss is not an excuse for inaction. The talent buried was not destroyed — it was simply wasted. God holds us accountable not for outcomes alone but for faithfulness in the attempt.",
  },
  {
    title: "Radical Generosity as Worship",
    color: GOLD,
    reference: "2 Corinthians 9:6-8; Philippians 4:18; Romans 12:1",
    content:
      "Paul describes the Macedonian churches as giving in ‘extreme poverty’ with ‘overflowing joy’ and ‘rich generosity’ — beyond their ability and entirely by their own choice (2 Corinthians 8:2-4). This is not philanthropic behavior. It is worship. Paul calls the Philippians’ financial gift ‘a fragrant offering, a sacrifice acceptable and pleasing to God’ (Philippians 4:18) — language drawn directly from Old Testament temple sacrifice. When we give generously, we are offering something on the altar. The giver who gives cheerfully (hilaros in Greek — the root of ‘hilarious’) gives as an act of joyful trust in God’s provision, not as a calculated return on investment.",
  },
  {
    title: "The Prosperity Gospel — A Critique",
    color: "#EF4444",
    reference: "Luke 12:15-21; 1 Timothy 6:6-10; Mark 10:17-27",
    content:
      "The prosperity gospel teaches that financial blessing is a reliable sign of God’s favor and that giving increases your own material return. Scripture consistently complicates this. Jesus warned that covetousness is among the most dangerous of sins, told the rich young ruler to sell everything, and described it as harder for a rich man to enter heaven than for a camel to pass through the eye of a needle. The book of Job demolishes the idea that suffering signals sin and prosperity signals righteousness. Paul warns that ‘the love of money is a root of all kinds of evil’ (1 Timothy 6:10). Faithful stewardship is not a mechanism to increase personal wealth. It is a death to the idolatry of security.",
  },
  {
    title: "Creation Stewardship — The First Commission",
    color: TEAL,
    reference: "Genesis 1:28; 2:15; Psalm 24:1; Leviticus 25:23",
    content:
      "Before the Fall, before the law, before Israel, God gave humanity its first commission: ‘Rule over… every living creature’ and ‘work and take care of’ the garden (Genesis 1:28; 2:15). This mandate to govern and guard creation is not revoked by sin — it is complicated and redirected by it. God declares the earth as His own: ‘The earth is the Lord’s, and everything in it’ (Psalm 24:1). The land law of Leviticus explicitly states that Israelites may not permanently sell the land because it belongs to God: ‘The land must not be sold permanently, because the land is mine’ (Leviticus 25:23). Creation stewardship is not environmentalism as a political program — it is the recognition that we are caretakers of what belongs to Another.",
  },
];

const TITHING_CONTENT = [
  {
    heading: "The Tithe in the Old Testament",
    color: GREEN,
    reference: "Leviticus 27:30; Numbers 18:21-24; Deuteronomy 14:22-29; Malachi 3:10",
    body: "The Mosaic law established multiple tithes: one for the Levites who served the tabernacle (Numbers 18), one for feasts and communal celebration (Deuteronomy 14:22-26), and a triennial tithe for the poor, widow, orphan, and foreigner (Deuteronomy 14:28-29). The cumulative effect was something closer to 20-23% of annual produce given in various forms. Malachi 3:10 is among the most dramatic verses in Scripture: ‘Bring the whole tithe into the storehouse… and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.’ God invites Israel to test Him on this specific point.",
  },
  {
    heading: "Jesus on Tithing",
    color: PURPLE,
    reference: "Matthew 23:23; Luke 11:42; Luke 21:1-4",
    body: "Jesus affirmed tithing while rebuking its isolation from weightier matters: ‘You should have practiced the latter, without neglecting the former’ (Matthew 23:23). He does not abolish tithing but insists it cannot be separated from justice, mercy, and faithfulness. The widow’s offering (Luke 21:1-4) is the most radical stewardship story in the Gospels: she gave everything she had to live on. Jesus does not praise her sacrifice and then fix the system that created her poverty — he commends her as the standard of giving. The measure of generosity is not the amount given but the proportion and the cost.",
  },
  {
    heading: "The New Testament Church and Money",
    color: BLUE,
    reference: "Acts 2:44-45; 4:32-37; 2 Corinthians 8-9; 1 Corinthians 16:2",
    body: "The Jerusalem church practiced radical, voluntary redistribution: ‘All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need’ (Acts 2:44-45). Barnabas sold a field and laid the proceeds at the apostles’ feet. Paul organized a systematic relief offering for the Jerusalem poor across the Gentile churches (1 Corinthians 16:2; 2 Corinthians 8-9) — modeling both regular, planned giving and sacrificial, above-and-beyond giving. The New Testament does not replace the tithe with a lower standard; it assumes it and pushes toward greater generosity.",
  },
  {
    heading: "The Tithe and the Local Church",
    color: GOLD,
    reference: "1 Corinthians 16:2; Hebrews 10:25; Nehemiah 10:38-39",
    body: "In both Testaments the primary recipient of the tithe is the community of God’s people gathered for worship, teaching, and mutual care. In Israel, it funded the Levites, the temple, and the poor. In the New Testament it supports the ministry of teaching elders (1 Timothy 5:17-18), the poor in the congregation (James 2:14-17), and the mission beyond the congregation. Christians who direct their primary giving to parachurch organizations while neglecting the local church are building on a foundation they have chosen not to fund. The local church is the base unit of God’s mission, not an optional add-on.",
  },
];

const TIME_TALENT = [
  {
    title: "Time as Gift and Trust",
    color: GREEN,
    reference: "Psalm 90:12; Ephesians 5:15-16; James 4:13-15",
    body: "Moses’ prayer in Psalm 90 asks God to ‘teach us to number our days, that we may gain a heart of wisdom.’ The awareness of mortality is not morbid but clarifying: every day is finite, therefore every day matters. Paul urges the Ephesians to ‘make the most of every opportunity, because the days are evil’ (Ephesians 5:16). James warns against presuming on tomorrow: ‘What is your life? You are a mist that appears for a little while and then vanishes’ (James 4:14). Faithful stewardship of time does not mean frantic productivity — it means intentionality about what your hours are building toward and whose kingdom they serve.",
  },
  {
    title: "Talent as Vocation",
    color: PURPLE,
    reference: "Romans 12:6-8; 1 Corinthians 12:4-11; 1 Peter 4:10-11",
    body: "Peter’s instruction is direct: ‘Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms’ (1 Peter 4:10). The gifts of the Spirit — teaching, leading, giving, mercy, prophecy, helps, administration (Romans 12; 1 Corinthians 12) — are not given for personal benefit but for the building up of the Body. The Reformation doctrine of vocation (Luther, Calvin) extended this: ordinary work — farming, law, medicine, parenting, craft — is a calling from God, a form of neighbor-service and therefore of worship. Your career is a stewardship question.",
  },
  {
    title: "The Sabbath Economy",
    color: TEAL,
    reference: "Genesis 2:2-3; Exodus 20:8-11; Leviticus 25:1-7; Mark 2:27",
    body: "The Sabbath is built into the structure of creation before the law. God rested and hallowed the seventh day — not because He was tired but as a declaration that creation is not defined by productivity. The Sabbath principle extends through the law: the seventh year sabbath rested the land; the Jubilee year (every 50 years) returned ancestral land, freed slaves, and cancelled debts. These are not merely economic regulations; they are stewardship theology embedded in time. They insist that land, labor, and capital belong ultimately to God and must be periodically surrendered to that reality. Jesus’ declaration that ‘the Sabbath was made for man, not man for the Sabbath’ reorients the principle toward rest as gift.",
  },
  {
    title: "Contentment as Countercultural Practice",
    color: GOLD,
    reference: "Philippians 4:11-13; 1 Timothy 6:6-8; Hebrews 13:5",
    body: "Paul writes from prison: ‘I have learned, in whatever state I am, to be content’ (Philippians 4:11). The word translated ‘content’ is autarkes — self-sufficient, self-contained, not needing more from outside. This is a Stoic virtue that Paul radically Christianizes: his contentment is not self-generated willpower but Christ-provided sufficiency (‘I can do all things through Christ who strengthens me’, v.13). The consumer economy runs on manufactured discontent — the perpetual insistence that you need the next thing. Christian stewardship refuses this logic. Godliness with contentment is great gain (1 Timothy 6:6) because it frees you from slavery to accumulation and makes radical generosity possible.",
  },
];

const CREATION_POINTS = [
  {
    title: "The Mandate: Work and Keep",
    color: GREEN,
    reference: "Genesis 2:15; Psalm 8:3-8",
    body: "God placed the human being in the garden ‘to work it and take care of it’ (Genesis 2:15). The Hebrew abad (work, serve) and shamar (keep, guard, preserve) are the same words used for priestly service in the tabernacle. The garden is a proto-sanctuary; tending it is liturgical work. Psalm 8 celebrates the paradox: the tiny human creature is crowned with glory and honor and given dominion over the great creation. This is not license for exploitation — it is a description of sacred responsibility. The earth is not ours to consume but ours to tend.",
  },
  {
    title: "The Fall and Curse: Broken Stewardship",
    color: "#EF4444",
    reference: "Genesis 3:17-19; Romans 8:19-22",
    body: "Sin breaks not only the human-God relationship but the human-creation relationship. The ground is cursed; work becomes painful toil; the creation ‘was subjected to frustration’ (Romans 8:20). Paul describes the whole creation as ‘groaning as in the pains of childbirth’ (Romans 8:22) — not merely metaphorically but as a theological fact. Human sin has consequences for the non-human creation. Environmental degradation is not an accident of industrial civilization; it is an expression of the creational consequences of human rebellion. Creation care is therefore not optional activism — it is part of the work of redemption.",
  },
  {
    title: "New Creation: The Goal of Stewardship",
    color: TEAL,
    reference: "Romans 8:18-25; Revelation 21:1-5; Colossians 1:15-20",
    body: "The Christian hope is not escape from material creation but its renewal. Paul writes that creation ‘waits in eager expectation for the children of God to be revealed’ (Romans 8:19) — creation is waiting for redeemed humanity to exercise faithful stewardship at last. Revelation 21 describes not a discarded earth but ‘a new heaven and a new earth’ — renewed, not annihilated. Colossians 1:20 says God is reconciling ‘all things, whether things on earth or things in heaven,’ to himself through Christ. Creation stewardship is therefore eschatologically motivated: we care for creation because creation participates in the redemption Christ is bringing.",
  },
];

const VIDEOS = [
  {
    videoId: "CiHMFnkVpGY",
    title: "Biblical Stewardship: It’s Not Just About Money",
    description:
      "A foundational teaching on oikonomia — what the Bible actually means by stewardship and how it covers every area of life, not just finances.",
  },
  {
    videoId: "krxcqH522uo",
    title: "The Grace of Giving",
    description:
      "John Piper on 2 Corinthians 8-9 and the grace-driven motivation behind Christian generosity — why the Macedonian churches gave out of poverty with overflowing joy.",
  },
  {
    videoId: "nQWFzMvCfLE",
    title: "Money, Possessions, and Eternity",
    description:
      "Randy Alcorn on how Christians should think about money, generosity, and treasure in heaven — a theology of eternal investment.",
  },
];

export default function ChristianStewardshipGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("oikonomia");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  function toggleCard(key: string) {
    setExpandedCards((prev) => ({ ...prev, [key]: !prev[key] }));
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
          background: `linear-gradient(160deg, #0b1a12 0%, ${BG} 60%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "60px 20px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: `${GREEN}18`,
              border: `1px solid ${GREEN}40`,
              borderRadius: 8,
              padding: "4px 14px",
              color: GREEN,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Christian Stewardship Guide
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
            Everything Belongs to God
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto 32px",
            }}
          >
            Oikonomia — the ancient word for stewardship — means household management on
            behalf of another. We own nothing; we manage everything. A biblical guide to money,
            time, talent, and creation as acts of worship.
          </p>
          <div
            style={{
              background: `${GOLD}12`,
              border: `1px solid ${GOLD}35`,
              borderRadius: 12,
              padding: "16px 24px",
              display: "inline-block",
              maxWidth: 560,
            }}
          >
            <p
              style={{
                color: GOLD,
                fontStyle: "italic",
                fontSize: 16,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              &ldquo;The earth is the Lord&rsquo;s, and everything in it, the world, and all who
              live in it.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>
              Psalm 24:1
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Section Nav */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            margin: "36px 0 32px",
          }}
        >
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSection(s.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: `1px solid ${activeSection === s.id ? GREEN : BORDER}`,
                background: activeSection === s.id ? `${GREEN}20` : CARD,
                color: activeSection === s.id ? GREEN : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {s.icon} {s.label}
            </button>
          ))}
        </div>

        {/* Section: Oikonomia */}
        {activeSection === "oikonomia" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  marginBottom: 8,
                  color: TEXT,
                }}
              >
                Oikonomia: The Theology of Stewardship
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                The New Testament word for stewardship comes from oikos (house) + nomos (law). A
                steward manages another&rsquo;s property. Christian stewardship begins with the
                radical claim that nothing we possess is actually ours.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEOLOGY_CARDS.map((card) => {
                const key = `oik-${card.title}`;
                const open = expandedCards[key];
                return (
                  <div
                    key={key}
                    style={{
                      background: CARD,
                      border: `1px solid ${open ? card.color + "50" : BORDER}`,
                      borderRadius: 14,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleCard(key)}
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
                        <div
                          style={{
                            color: card.color,
                            fontWeight: 800,
                            fontSize: 15,
                            marginBottom: 4,
                          }}
                        >
                          {card.title}
                        </div>
                        <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic" }}>
                          {card.reference}
                        </div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginTop: 2 }}>
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div
                        style={{
                          padding: "0 22px 22px",
                          borderTop: `1px solid ${BORDER}`,
                        }}
                      >
                        <p
                          style={{
                            color: TEXT,
                            fontSize: 14,
                            lineHeight: 1.8,
                            margin: "18px 0 0",
                          }}
                        >
                          {card.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Practical application box */}
            <div
              style={{
                background: `${GREEN}0f`,
                border: `1px solid ${GREEN}30`,
                borderRadius: 14,
                padding: 28,
                marginTop: 32,
              }}
            >
              <h3
                style={{
                  color: GREEN,
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Practical Application
              </h3>
              <ul
                style={{
                  color: TEXT,
                  fontSize: 14,
                  lineHeight: 1.8,
                  paddingLeft: 20,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <li>
                  Write &ldquo;Manager, not owner&rdquo; somewhere visible — your budget
                  spreadsheet header, your phone wallpaper, your desk. Let it reframe every
                  financial decision.
                </li>
                <li>
                  Before any major purchase, ask: &ldquo;As a steward of God&rsquo;s resources,
                  does this deployment of His money serve His purposes or primarily my
                  comfort?&rdquo;
                </li>
                <li>
                  Audit your month: Where did your money go? Where did your time go? Which of
                  those deployments would you be glad to account for to God?
                </li>
                <li>
                  Identify one area of &ldquo;buried talent&rdquo; — a gift, skill, or
                  resource you are not presently deploying for God&rsquo;s kingdom. Commit to one
                  concrete step this month.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Section: The Talents */}
        {activeSection === "talents" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                The Parable of the Talents: Faithful Risk-Taking
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                Matthew 25:14-30 is the master text of Christian stewardship. It rewards
                courageous deployment and condemns fearful hoarding — regardless of the scale
                of what was entrusted.
              </p>
            </div>

            {/* Parable walkthrough */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {[
                {
                  num: "1",
                  color: GREEN,
                  heading: "Unequal Distribution, Equal Accountability",
                  body: "The master distributes five, two, and one talent ‘each according to his ability’ (Matthew 25:15). God does not give everyone the same; He gives everyone something. The servant with two talents who doubled to four received the identical commendation as the servant with five who doubled to ten: ‘Well done, good and faithful servant!’ The metric is faithfulness to what was given, not the size of the output.",
                },
                {
                  num: "2",
                  color: PURPLE,
                  heading: "The Sin of Burying",
                  body: "The third servant does not squander the talent or steal it — he preserves it perfectly. Yet he is condemned as ‘wicked and lazy.’ The sin of stewardship is not primarily misuse but non-use. The servant who buries his gift out of fear insults the master’s generosity and wastes the master’s investment. Many Christians commit this sin with their money (not tithing, not investing in kingdom work), their time (not serving), and their gifts (not using them in the church).",
                },
                {
                  num: "3",
                  color: GOLD,
                  heading: "Fear as the Root of Bad Stewardship",
                  body: "The third servant explains himself: ‘I was afraid’ (Matthew 25:25). His theology of God was distorted — he saw the master as harsh, reaping where he did not sow. This distorted fear produced paralysis. The antidote to bad stewardship is not willpower but a right theology of God: a generous Father who delights in the faithful risk-taking of His servants, not a demanding auditor waiting to punish failure.",
                },
                {
                  num: "4",
                  color: BLUE,
                  heading: "Compound Faithfulness: To Him Who Has...",
                  body: "The parable ends with a principle that sounds harsh in isolation but is profound in context: ‘For whoever has will be given more’ (Matthew 25:29). This is not an endorsement of economic inequality — it is a description of the kingdom economy of faithfulness. Those who deploy what they have receive more to deploy. Faithfulness in small things is the training ground for faithfulness in large things. Luke 16:10 makes it explicit: ‘Whoever can be trusted with very little can also be trusted with much.’",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 14,
                    padding: "22px 26px",
                    display: "flex",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: `${item.color}20`,
                      border: `2px solid ${item.color}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      fontWeight: 900,
                      fontSize: 16,
                      flexShrink: 0,
                    }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h3
                      style={{
                        color: item.color,
                        fontWeight: 800,
                        fontSize: 15,
                        marginBottom: 8,
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key contrast */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  background: `${GREEN}10`,
                  border: `1px solid ${GREEN}30`,
                  borderRadius: 12,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    color: GREEN,
                    fontWeight: 800,
                    fontSize: 13,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Faithful Servant
                </div>
                <ul
                  style={{
                    color: TEXT,
                    fontSize: 13,
                    lineHeight: 1.8,
                    paddingLeft: 18,
                    margin: 0,
                  }}
                >
                  <li>Takes courageous risk with what was given</li>
                  <li>Acts from trust in the master&rsquo;s goodness</li>
                  <li>Seeks to multiply, not merely preserve</li>
                  <li>Hears: &ldquo;Well done, good and faithful servant&rdquo;</li>
                  <li>Receives more responsibility</li>
                </ul>
              </div>
              <div
                style={{
                  background: "#EF444410",
                  border: "1px solid #EF444430",
                  borderRadius: 12,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    color: "#EF4444",
                    fontWeight: 800,
                    fontSize: 13,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Unfaithful Servant
                </div>
                <ul
                  style={{
                    color: TEXT,
                    fontSize: 13,
                    lineHeight: 1.8,
                    paddingLeft: 18,
                    margin: 0,
                  }}
                >
                  <li>Buries out of fear and self-protection</li>
                  <li>Holds a distorted image of the master</li>
                  <li>Prioritizes preservation over deployment</li>
                  <li>Hears: &ldquo;You wicked and lazy servant&rdquo;</li>
                  <li>Loses even what he had</li>
                </ul>
              </div>
            </div>

            <div
              style={{
                background: `${PURPLE}10`,
                border: `1px solid ${PURPLE}30`,
                borderRadius: 12,
                padding: 22,
              }}
            >
              <p
                style={{
                  color: MUTED,
                  fontSize: 14,
                  lineHeight: 1.75,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                &ldquo;The question God will ask is not &lsquo;How much did you have?&rsquo; but
                &lsquo;What did you do with what I gave you?&rsquo; The servant with two talents
                who doubled them received the identical commendation as the servant with five.
                Faithfulness, not productivity, is the measure. But faithfulness produces
                fruit.&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* Section: Tithing */}
        {activeSection === "tithing" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                Tithing Theology: The Biblical Case for the Tenth
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                The tithe is the baseline, not the ceiling, of Christian generosity. From Malachi
                to Jesus to the New Testament church, Scripture consistently expects the first
                tenth — and then pushes beyond it.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {TITHING_CONTENT.map((item) => (
                <div
                  key={item.heading}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 14,
                    padding: "22px 26px",
                  }}
                >
                  <h3
                    style={{
                      color: item.color,
                      fontWeight: 800,
                      fontSize: 15,
                      marginBottom: 6,
                    }}
                  >
                    {item.heading}
                  </h3>
                  <div
                    style={{
                      color: MUTED,
                      fontSize: 11,
                      fontStyle: "italic",
                      marginBottom: 12,
                    }}
                  >
                    {item.reference}
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Common objections */}
            <div
              style={{
                marginTop: 32,
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
              }}
            >
              <h3
                style={{
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                Common Objections Answered
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  {
                    q: "\"The tithe is Old Testament law — we’re under grace, not law.\"",
                    a: "The tithe predates the Mosaic law: Abraham tithed to Melchizedek (Genesis 14:20) and Jacob pledged a tenth to God (Genesis 28:22) before Sinai. Jesus explicitly affirmed tithing (Matthew 23:23). Grace does not lower the standard of generosity — it transforms the motivation from duty to delight.",
                  },
                  {
                    q: "\"10% is too high for my income level.\"",
                    a: "Start where you are and grow. If you are at 3%, commit to raising it 1% per year until you reach the tithe. The percentage matters less than the direction and the intention. Begin the discipline even if you cannot yet complete it.",
                  },
                  {
                    q: "\"I give my time and service, not just money.\"",
                    a: "Time and talent are real forms of stewardship (see the next section). But financial giving is also specifically required. Jesus, Paul, Malachi, and the early church all expected actual money to change hands for the support of ministry and the poor. One form of giving does not substitute for another.",
                  },
                ].map((item) => (
                  <div key={item.q} style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 14 }}>
                    <div
                      style={{
                        color: GOLD,
                        fontSize: 13,
                        fontWeight: 700,
                        fontStyle: "italic",
                        marginBottom: 6,
                      }}
                    >
                      {item.q}
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section: Time & Talent */}
        {activeSection === "time-talent" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                Time &amp; Talent: Stewardship Beyond Money
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                Stewardship is not a synonym for giving money. The biblical concept covers the
                whole of life: every hour, every skill, every relationship, every opportunity is
                entrusted to us by God for His purposes.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {TIME_TALENT.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 14,
                    padding: "22px 26px",
                  }}
                >
                  <h3
                    style={{
                      color: item.color,
                      fontWeight: 800,
                      fontSize: 15,
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      color: MUTED,
                      fontSize: 11,
                      fontStyle: "italic",
                      marginBottom: 12,
                    }}
                  >
                    {item.reference}
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Self-audit grid */}
            <div
              style={{
                background: `${TEAL}0d`,
                border: `1px solid ${TEAL}30`,
                borderRadius: 14,
                padding: 28,
              }}
            >
              <h3
                style={{
                  color: TEAL,
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                Stewardship Self-Audit
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: 12,
                }}
              >
                {[
                  { area: "Time", prompt: "Where does your discretionary time actually go each week? Is that consistent with your stated priorities?" },
                  { area: "Spiritual Gifts", prompt: "Do you know your spiritual gifts? Are you using them in your local church? What would it take to start?" },
                  { area: "Skills & Career", prompt: "Is your vocational skill deployed in service of others — not just for income but as an act of neighbor-love?" },
                  { area: "Influence", prompt: "Who looks to you? Whose life are you shaping? Are you stewarding that influence with intentionality?" },
                  { area: "Rest", prompt: "Are you keeping Sabbath? Sabbath is not laziness — it is the discipline of trusting God with the hours you surrender." },
                  { area: "Relationships", prompt: "Who has God placed in your life? Are you investing in them or taking them for granted?" },
                ].map((item) => (
                  <div
                    key={item.area}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 10,
                      padding: 16,
                    }}
                  >
                    <div
                      style={{
                        color: TEAL,
                        fontWeight: 800,
                        fontSize: 12,
                        letterSpacing: 0.5,
                        marginBottom: 6,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.area}
                    </div>
                    <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.65, margin: 0 }}>
                      {item.prompt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section: Creation */}
        {activeSection === "creation" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                Creation Stewardship: The First Commission
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>
                Before the Fall, before the law, before Israel — God gave humanity its first
                assignment: tend the garden, guard it, govern it. Creation stewardship is not
                environmentalism; it is obedience to the oldest human calling.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {CREATION_POINTS.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 14,
                    padding: "22px 26px",
                  }}
                >
                  <h3
                    style={{
                      color: item.color,
                      fontWeight: 800,
                      fontSize: 15,
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      color: MUTED,
                      fontSize: 11,
                      fontStyle: "italic",
                      marginBottom: 12,
                    }}
                  >
                    {item.reference}
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Creation care practices */}
            <div
              style={{
                background: `${GREEN}0d`,
                border: `1px solid ${GREEN}30`,
                borderRadius: 14,
                padding: 28,
              }}
            >
              <h3
                style={{
                  color: GREEN,
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Faithful Practices for Creation Stewards
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Reduce consumption as a spiritual discipline, not merely an environmental one. Simplicity and sufficiency are ancient Christian virtues.",
                  "Grow something — a garden, a houseplant, a tree. The practice of cultivation reconnects us to the liturgical work of tending the garden.",
                  "Advocate for local land stewardship: zoning, green space, watershed protection. Creation care begins with the particular land where you live.",
                  "Support organizations that pursue creation care from explicitly Christian theological foundations: A Rocha International, Care of Creation Kenya.",
                  "Teach your children creation care as a theological practice, not merely an ethical preference. Connect it explicitly to God as Creator and Owner.",
                ].map((practice, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: GREEN,
                        flexShrink: 0,
                        marginTop: 7,
                      }}
                    />
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                      {practice}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section: Videos */}
        {activeSection === "videos" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
                Video Teaching on Stewardship
              </h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.6 }}>
                Trusted teaching on biblical stewardship, generosity, and the theology of money
                from leading Christian voices.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "18px 22px" }}>
                    <h4
                      style={{
                        color: GREEN,
                        fontWeight: 800,
                        fontSize: 16,
                        marginBottom: 8,
                      }}
                    >
                      {v.title}
                    </h4>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                      {v.description}
                    </p>
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
            background: `linear-gradient(135deg, ${GREEN}15 0%, ${PURPLE}10 100%)`,
            border: `1px solid ${GREEN}30`,
            borderRadius: 20,
            padding: "40px 36px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 900,
              marginBottom: 16,
              color: TEXT,
            }}
          >
            You Cannot Out-Give God
          </h2>
          <p
            style={{
              color: MUTED,
              fontSize: 15,
              lineHeight: 1.8,
              maxWidth: 600,
              margin: "0 auto 24px",
            }}
          >
            Faithful stewardship is not a burden — it is liberation from the exhausting work
            of trying to secure your own life through accumulation. The steward who knows his
            master is good gives freely, serves joyfully, and finds that the kingdom economy
            of generosity is the only economy that actually works.
          </p>
          <div
            style={{
              background: `${GOLD}12`,
              border: `1px solid ${GOLD}35`,
              borderRadius: 12,
              padding: "16px 24px",
              display: "inline-block",
              maxWidth: 520,
            }}
          >
            <p
              style={{
                color: GOLD,
                fontStyle: "italic",
                fontSize: 15,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              &ldquo;Whoever sows sparingly will also reap sparingly, and whoever sows
              generously will also reap generously. Each of you should give what you have
              decided in your heart to give, not reluctantly or under compulsion, for God loves
              a cheerful giver.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>
              2 Corinthians 9:6-7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
