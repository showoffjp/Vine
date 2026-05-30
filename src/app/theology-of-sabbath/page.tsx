"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "history" | "practice" | "rest";

const theologyItems = [
  {
    title: "Creation Sabbath",
    content:
      "Genesis 2:1-3 records that on the seventh day God 'rested' (Hebrew: shabbat/shabat) from all his work. The seventh day was blessed and hallowed — set apart as holy. This divine rest does not imply fatigue; God does not grow weary (Isaiah 40:28). Instead, the rest is an act of royal completion: the sovereign surveys the finished work and delights in it. The profound implication is that rest is not remedial — it is not something creation needs because it broke. Rest is architecturally embedded in creation's structure. Before sin, before law, before Israel: the rhythm of six-and-one was woven into the fabric of reality. Sabbath is not a burden added later; it is a gift present at the foundation.",
  },
  {
    title: "The Fourth Commandment",
    content:
      "The Sabbath commandment appears in two forms with strikingly different rationales. Exodus 20:8-11 grounds it in creation: 'For in six days the Lord made the heavens and the earth... therefore the Lord blessed the Sabbath day and made it holy.' Rest mirrors the Creator's own rest at the foundation of the world. Deuteronomy 5:12-15, given to the same people a generation later, grounds the same commandment in liberation: 'Remember that you were slaves in Egypt and the Lord your God brought you out with a mighty hand.' Slaves cannot rest; free people can. The same commandment, the same practice, but two entirely different rationales — creation and exodus, cosmology and redemption. Both rationales are available to the Christian: we rest because God rested in creation, and we rest because we are no longer slaves to work, to productivity, or to the anxiety of earning our standing.",
  },
  {
    title: "Sabbath as Covenant Sign",
    content:
      "Exodus 31:16-17 establishes the Sabbath not merely as a moral practice but as the sign of the Mosaic covenant: 'The Israelites are to observe the Sabbath, celebrating it for the generations to come as a lasting covenant. It will be a sign between me and the Israelites forever.' Just as circumcision was the sign of the Abrahamic covenant, the Sabbath was the sign of the Sinai covenant — the weekly marker of Israel's distinctive identity as God's people. This gives the Sabbath an identity-forming function: to keep the Sabbath was to say publicly 'I am Israel's God's person.' When Paul addresses Sabbath regulations in Colossians 2:16-17 and Galatians 4:10-11, he is engaging precisely this identity-boundary function — and saying that Gentile believers in Christ are not bound to Sabbath-keeping as a covenant boundary marker in the same way. The practice of rest, however, is older than Sinai.",
  },
  {
    title: "Jesus and the Sabbath",
    content:
      "Jesus's relationship to the Sabbath is among the most disputed aspects of his ministry. His healings on the Sabbath (Mark 3:1-6; John 5:1-18; Luke 13:10-17) were deliberate provocations: he performed restorative acts precisely on the day the religious leaders guarded most zealously. His rationale: 'The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath' (Mark 2:27-28). The Sabbath is a gift, not a cage. And the giver of the Sabbath now stands before them. Matthew 12:8 reinforces the claim: 'the Son of Man is Lord of the Sabbath.' Jesus does not abolish the Sabbath; he reclaims it from the burden of 39 categories of prohibited work that had transformed a gift into a minefield. His healings show that Sabbath is the day for restoration — for undoing the curse, not merely ceasing from labor. The question of Sabbath fulfillment vs. abolition turns on whether Christ's lordship over the Sabbath ends it or transforms it.",
  },
  {
    title: "Hebrews 4 and the Sabbath Rest",
    content:
      "Hebrews 4 offers the most explicitly theological treatment of Sabbath in the New Testament. The author argues that the 'rest' God promised his people points beyond Canaan (Joshua's rest was not the final rest — Psalm 95 was still calling people into rest after the conquest) to an eschatological rest: 'There remains, then, a Sabbath-rest (sabbatismos) for the people of God; for anyone who enters God's rest also rests from their own work, just as God did from his. Let us, therefore, make every effort to enter that rest' (Hebrews 4:9-11). The weekly Sabbath was a foretaste — a temporal sign pointing to the eternal reality. The Christian who observes a day of rest is not simply resting; they are practicing eschatology, tasting in ordinary time the rest that awaits in new creation. The Sabbath becomes a sacramental act: the visible, bodily practice of trusting God's future.",
  },
  {
    title: "The Sabbath Debate",
    content:
      "Three major Christian positions have emerged across church history. Sabbatarianism (Westminster Confession, Chapter XXI) holds that the fourth commandment's moral core transfers to Sunday: one day in seven is set apart for worship and rest, now observed on the Lord's Day in honor of the resurrection. The Lord's Day view (favored by many Continental Reformed and Lutheran theologians) distinguishes the Jewish Sabbath (fulfilled in Christ) from the Lord's Day (a new day for new creation celebration), maintaining Sunday worship without the full weight of Sabbath regulations. The every-day view (drawing on Romans 14:5-6) holds that in Christ all days are sanctified alike and Christians should not regard one day above another. Each position carries pastoral weight: Sabbatarianism provides a robust weekly structure but risks legalism; the Lord's Day view honors resurrection while risking Sunday drifting into an ordinary day; the every-day view liberates from rules but in practice often means no Sabbath at all.",
  },
];

const historyItems = [
  {
    id: "second-temple",
    title: "Second Temple Judaism",
    content:
      "By the Second Temple period, Sabbath observance had developed a vast body of interpretive tradition. The Mishnah tractate Shabbat catalogued 39 categories of prohibited work (avot melachah), derived from the types of labor used to build the Tabernacle: sowing, plowing, reaping, binding, threshing, winnowing, selecting, grinding, sifting, kneading, baking — and 29 more. The Talmudic discussions extended these into thousands of sub-rulings. When Jesus debated Sabbath practice with the Pharisees, he was not arguing with the Torah itself — he was engaging with this tradition, which had in some cases become more binding than the text it interpreted. Understanding this context is essential to reading the Gospels: Jesus's healings were not lawless provocations but deliberate challenges to the tradition's application, a reclaiming of the Sabbath's original purpose as rest and restoration rather than a minefield of prohibitions.",
  },
  {
    id: "early-church",
    title: "The Early Church",
    content:
      "The earliest Christians, most of whom were Jewish, initially observed both the Sabbath (Saturday synagogue) and gathered on the first day of the week to celebrate the resurrection. Gradually the Lord's Day (kyriake hemera, Revelation 1:10) became the primary Christian assembly. Justin Martyr's First Apology (c. 155 AD) provides the earliest detailed description of Sunday worship: readings, sermon, prayers, Eucharist, and collection. He grounds the choice of Sunday in both the first day of creation and the resurrection day. The shift from Saturday to Sunday was not sudden or uniform — Jewish-Christian communities maintained Saturday observance longer — but by the 4th century Sunday had become the standard. Constantine's Sunday law (321 AD) gave civil weight to what had become widespread church practice, though this also began the problematic fusion of civic and religious obligation.",
  },
  {
    id: "medieval",
    title: "Medieval Sabbath",
    content:
      "In medieval Christendom, Sunday rest became both religious duty and civic law. The monastic tradition structured daily life around the Divine Office — seven fixed hours of prayer from Matins to Compline — creating a rhythm of work and rest throughout each day, not just one day a week. Sunday was enforced as a day of rest from labor, with markets, courts, and most commerce closed. The fusion of civic and religious obligation meant that Sunday rest was simultaneously an act of worship and a social expectation, enforced by both church and state. This Christendom arrangement had mixed effects: it created a genuine culture of rest that protected the poor from endless labor, but it also blurred the distinction between social conformity and genuine Sabbath observance, and laid the groundwork for the Sunday laws that would later be debated in Reformation and Enlightenment contexts.",
  },
  {
    id: "puritan",
    title: "Puritan Sabbatarianism",
    content:
      "The Westminster Confession of Faith (1647), Chapter XXI, gave the most systematic Protestant defense of Sabbatarianism: 'the Sabbath is then kept holy unto the Lord, when men... rest the whole time from their own works, words, and thoughts about their worldly employments and recreations.' The Puritan Sabbath was strict: no recreation, no travel, no unnecessary conversation about worldly affairs, no work of any kind except works of necessity and mercy. Sunday was a day of worship, Scripture reading, prayer, catechizing children, and rest — nothing else. This discipline shaped the texture of English and American public life for centuries. Blue laws (Sunday closing laws) in America are the direct legislative legacy of Puritan Sabbatarianism. The argument was not mere moralism: the Puritans believed that without structure, the Sabbath would simply collapse into another workday, and that the soul needed the protection of clear external boundaries to actually rest.",
  },
  {
    id: "modern",
    title: "Modern Sabbath Renewal",
    content:
      "The late 20th and early 21st centuries have seen a significant scholarly and pastoral renewal of Sabbath theology, largely as a response to the 24/7 consumer economy. Walter Brueggemann's Sabbath as Resistance (2014) argues that Sabbath is a political act of resistance against the pharaonic system of endless productivity — a theological refusal to be defined by output. Marva Dawn's Keeping the Sabbath Wholly (1989) offers a practical theology of cessation, rest, embrace, and feast. Abraham Joshua Heschel's The Sabbath (1951), though Jewish, has deeply influenced Christian Sabbath theology with its vision of Sabbath as a 'cathedral in time.' These voices share a common argument: the contemporary church's loss of Sabbath practice is not a sign of maturity beyond legalism, but a symptom of cultural captivity to the very productivity idolatry that Sabbath was designed to resist.",
  },
];

const practiceItems = [
  {
    title: "A 24-Hour Practice",
    content:
      "Jewish Sabbath observance runs from sundown Friday to the appearance of three stars Saturday night — approximately 25 hours. The sundown-to-sundown pattern follows the Genesis creation account ('there was evening and there was morning'). Many Christians observe Sunday from the morning gathering to Sunday evening, or from Saturday evening to Sunday evening. The exact timing matters less than establishing a clear container: a defined beginning and end that marks the Sabbath as different from ordinary time. The beginning might be marked by lighting candles, a special meal, or a prayer; the end by a brief review of the day's graces. Without clear boundaries, the Sabbath evaporates into the week.",
  },
  {
    title: "What to Stop",
    content:
      "Cessation is the theological core of Sabbath. The question is not 'what am I allowed to do?' but 'what do I need to put down?' For most people in the modern economy, the list includes: paid work and work email, productivity metrics and to-do lists, social media and news consumption, shopping and errands, anxious planning and problem-solving about the coming week. The test is whether an activity is driven by the anxiety of production or the delight of rest. Some people need to stop cooking; others find cooking deeply restorative. The list should be specific and honest: what, for you, represents the Pharaoh's demand for bricks? What does your Egypt look like? Sabbath requires naming and then stopping those specific things.",
  },
  {
    title: "What to Begin",
    content:
      "Sabbath is not only cessation; it is embrace. The tradition distinguishes between stopping (shabbat) and delighting (oneg Shabbat — the joy of the Sabbath). What restores you? Rest includes sleep and naps — the body's Sabbath. It includes delight in food, beauty, music, and play. It includes worship with the gathered community. It includes unhurried time with the people you love. It includes creation enjoyment: walking slowly, noticing what is growing, sitting in a garden. The test of Sabbath delight is whether the activity leaves you more alive and more present — more human — than you were before. Sabbath rest is not the exhausted collapse at the end of a hard week; it is the feast that renews.",
  },
  {
    title: "Sabbath for Families",
    content:
      "A family Sabbath, practiced consistently, becomes one of the most powerful formative practices a household can have. The challenge is making it a feast rather than a law — a day children associate with delight, not restriction. The Jewish tradition models this well: the Sabbath begins with candlelighting, blessing, a special meal, and singing — it is the best day of the week, not the most constrained. For families with children, the Friday/Saturday/Sunday question is practical: families in ministry may need to observe Sabbath on a different day. What matters is the weekly anchor: the day when the family's posture is rest, togetherness, and delight rather than efficiency. Children who grow up with a family Sabbath carry a template for rest that will sustain them for life.",
  },
  {
    title: "Sabbath Economics",
    content:
      "Walter Brueggemann argues in Sabbath as Resistance that the Sabbath is inherently political — an act of economic resistance. The 24/7 consumer economy requires constant availability: buy, produce, consume, respond. Sabbath says no. It insists that one day in seven the market does not command us, the notification does not summon us, the metric does not judge us. This is not withdrawal from the world; it is refusal to be defined by its demands. The political theology of stopping is especially important for the poor: the Sabbath commandment in Exodus explicitly includes servants and animals — it is an equity measure, ensuring that the most vulnerable in the household also rest. Sabbath-keeping is not only personal spirituality; it is a public statement about what human beings are for.",
  },
  {
    title: "When Work Is Worship",
    content:
      "The Sabbath commandment in Exodus explicitly permits 'works of necessity and mercy' — and Jesus made this explicit by healing on the Sabbath and defending his disciples eating grain (a work of necessity). Nurses, emergency responders, parents of infants, and pastors whose Sunday is their most demanding day face a genuine challenge. The pastoral answer is not to abandon Sabbath but to take it on another day. Jesus's healings on the Sabbath also suggest a principle: work that is itself rest-giving for others — that undoes the curse, restores the suffering, feeds the hungry — participates in Sabbath's spirit even when it cannot observe its letter. The question for those in mercy vocations is not 'am I exempt from Sabbath?' but 'how do I take my Sabbath, and what does it look like for the specific shape of my work?'",
  },
];

const restItems = [
  {
    title: "Restlessness as Spiritual Symptom",
    content:
      "Augustine's confession in the opening of his Confessions — 'our heart is restless until it repose in Thee' — locates restlessness not primarily as a psychological problem but as a theological one. The frantic, overscheduled, perpetually busy person is not simply overcommitted; they are displaced. They are seeking in activity what can only be found in God. The inability to stop, to sit quietly, to rest without guilt or anxiety, is a spiritual symptom: it reveals what we actually trust. If the world will fall apart without my constant attention, I am playing God. If I cannot enjoy a day without being productive, I have confused my value with my output. Restlessness is not cured by better time management; it is cured by encountering the God in whom the soul finally rests.",
  },
  {
    title: "The Neuroscience of Rest",
    content:
      "Contemporary neuroscience has begun to catch up with what Genesis already knew. The brain's default mode network (DMN), long dismissed as the 'resting state,' is now understood to be one of the most metabolically active regions of the brain — engaged in memory consolidation, social cognition, self-reflection, and creative incubation. The insights that arrive in the shower, on the walk, in the half-waking state before sleep: these are not interruptions to thinking, they are the completion of it. Rest is not the absence of mental activity; it is a different mode of mental activity, one that integrates, consolidates, and generates what focused work cannot. The science of rest vindicates the ancient wisdom: the mind needs silence and unhurried time to do its deepest work. Sabbath is not inefficiency; it is the condition for genuine fruitfulness.",
  },
  {
    title: "Play as Theology",
    content:
      "Josef Pieper's Leisure: The Basis of Culture (1948) argues that the capacity for genuine leisure — play, celebration, festival — is not a luxury or a reward for productivity but the foundation of culture and the mark of human dignity. Play is the act of doing something for its own intrinsic worth, not for any external end. It is, in this sense, the purest form of anti-instrumentalism: the refusal to reduce every activity to its utility. Pieper grounds this in theology: we can play because we are loved beings in a creation that is fundamentally good, not merely useful. Delight is a theological act — it is the creature participating in the Creator's own delight in what he made. The person who cannot play, who cannot enjoy a meal or a walk or a game without calculating its productivity value, has internalized a lie about what human beings are for.",
  },
  {
    title: "Sleep as Spiritual Practice",
    content:
      "Psalm 127:2 offers one of Scripture's most counterintuitive claims: 'He grants sleep to those he loves.' Sleep is not the passive absence of waking activity; it is a gift from God to his beloved. To sleep is to trust — to release control of the world for eight hours and believe that God's watch does not depend on yours. Jesus's sleeping in the storm (Mark 4:38) is not indifference; it is perfect trust in the Father. The disciples' panic and Jesus's rest are a study in contrasting theologies. Many people's inability to sleep adequately is not merely a health problem; it is a spiritual one: the anxious mind that cannot let go of tomorrow, the driven person who sees sleep as a weakness. The spiritual discipline of adequate, regular sleep is an act of faith: the world will continue without your oversight through the night.",
  },
  {
    title: "Sabbath and Anxiety",
    content:
      "There is a direct connection between the collapse of Sabbath practice and the epidemic of anxiety in contemporary culture. The prayerless person, as the tradition notes, tends toward anxiety: when we do not bring our fears and needs to God, they accumulate. The perpetually busy person has no space for the quiet in which anxiety can be named, examined, and surrendered. Sabbath creates the conditions for honest self-examination and genuine prayer — the unhurried time in which we can actually hear ourselves and bring what we find to God. More fundamentally, Sabbath is itself an act of anti-anxiety: it is the weekly practice of trusting that the world runs without you for one day. The person who cannot stop because everything will fall apart has an anxiety problem that is also a theology problem — they have not yet entrusted the world to God.",
  },
  {
    title: "Eternal Rest",
    content:
      "Revelation 14:13 promises that the saints who die in the Lord 'will rest from their labor, for their deeds will follow them.' The final destination of the people of God is not exhausted cessation but the fullness of life — the new creation in which work and rest are no longer in tension, in which the curse of toil is undone, and in which the Sabbath that creation always pointed to is finally realized. Hebrews 4:9-11 describes the eschatological goal as 'Sabbath-rest for the people of God.' Every weekly Sabbath is a rehearsal: a small, provisional, imperfect foretaste of the great rest. When we stop, we are not simply managing our energy; we are practicing eternity. The Sabbath is sacramental — an outward, bodily act that signifies and participates in an inward and coming reality. All rest, rightly understood, is a preview of the rest that has no end.",
  },
];

function Accordion({
  items,
  prefix,
  expanded,
  onToggle,
}: {
  items: { title: string; content: string }[];
  prefix: string;
  expanded: Record<string, boolean>;
  onToggle: (k: string) => void;
}) {
  return (
    <div style={{ maxWidth: 720 }}>
      {items.map((item, i) => {
        const key = `${prefix}-${i}`;
        const open = !!expanded[key];
        return (
          <div
            key={key}
            style={{
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 10,
              marginBottom: 12,
            }}
          >
            <button
              onClick={() => onToggle(key)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                color: TEXT,
                padding: "16px 20px",
                textAlign: "left",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: 700,
                fontSize: 15,
                gap: 12,
              }}
            >
              <span>{item.title}</span>
              <span style={{ color: MUTED, flexShrink: 0 }}>{open ? "−" : "+"}</span>
            </button>
            {open && (
              <div
                style={{
                  padding: "0 20px 18px",
                  color: MUTED,
                  lineHeight: 1.75,
                  fontSize: 14,
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function TheologyOfSabbathPage() {
  const [activeTab, setActiveTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedHistory, setSelectedHistory] = useState<string>("second-temple");

  const toggle = (k: string) =>
    setExpanded((prev) => ({ ...prev, [k]: !prev[k] }));

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Sabbath" },
    { id: "history", label: "History of Sabbath Practice" },
    { id: "practice", label: "Sabbath Practice" },
    { id: "rest", label: "Rest and the Soul" },
  ];

  const selectedHistoryItem =
    historyItems.find((h) => h.id === selectedHistory) ?? historyItems[0];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        paddingTop: 40,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              display: "inline-block",
              background: GREEN,
              color: "#000",
              padding: "4px 18px",
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              marginBottom: 18,
              textTransform: "uppercase",
            }}
          >
            Rest &amp; Rhythm
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              margin: "0 0 14px",
              lineHeight: 1.15,
            }}
          >
            Theology of the Sabbath
          </h1>
          <p
            style={{
              color: MUTED,
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.75,
              fontSize: 16,
            }}
          >
            In a world that never stops, one day in seven is an act of defiance
            and trust. Sabbath is not legalism — it is the rhythm God wove into
            creation and the rest that Christ fulfills and invites.
          </p>
        </div>

        {/* Pull quote */}
        <div
          style={{
            background: GREEN + "18",
            border: `1px solid ${GREEN}44`,
            borderRadius: 12,
            padding: "14px 24px",
            marginBottom: 36,
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600, fontSize: 15 }}>
            "Remember the Sabbath day, to keep it holy." — Exodus 20:8&nbsp;&nbsp;|&nbsp;&nbsp;"Come to
            me, all who are weary and burdened, and I will give you rest." — Matthew 11:28
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#000" : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 8,
                padding: "9px 20px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology */}
        {activeTab === "theology" && (
          <Accordion
            items={theologyItems}
            prefix="theo"
            expanded={expanded}
            onToggle={toggle}
          />
        )}

        {/* Tab 2: History — sticky detail panel */}
        {activeTab === "history" && (
          <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
            {/* Left list */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {historyItems.map((h) => {
                const active = selectedHistory === h.id;
                return (
                  <div
                    key={h.id}
                    onClick={() => setSelectedHistory(h.id)}
                    style={{
                      background: active ? PURPLE + "22" : CARD,
                      border: `2px solid ${active ? PURPLE : BORDER}`,
                      borderRadius: 10,
                      padding: "16px 20px",
                      cursor: "pointer",
                      marginBottom: 10,
                      transition: "border-color 0.15s",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{h.title}</div>
                  </div>
                );
              })}
            </div>

            {/* Right sticky detail */}
            <div
              style={{
                width: 400,
                flexShrink: 0,
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: 28,
                position: "sticky",
                top: 24,
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: 20,
                  fontWeight: 800,
                  color: PURPLE,
                }}
              >
                {selectedHistoryItem.title}
              </h3>
              <p
                style={{
                  color: MUTED,
                  fontSize: 14,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {selectedHistoryItem.content}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Practice */}
        {activeTab === "practice" && (
          <Accordion
            items={practiceItems}
            prefix="prac"
            expanded={expanded}
            onToggle={toggle}
          />
        )}

        {/* Tab 4: Rest and the Soul */}
        {activeTab === "rest" && (
          <Accordion
            items={restItems}
            prefix="rest"
            expanded={expanded}
            onToggle={toggle}
          />
        )}
      </div>
    </div>
  );
}
