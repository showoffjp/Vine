"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "motivations" | "practices" | "stories" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "t1",
    title: "God Is the First Giver",
    body: "The grammar of the entire biblical story begins with gift. 'For God so loved the world that he gave his only Son' (John 3:16) — this single verse is the theological heartbeat of generosity. Every good and perfect gift is from above, coming down from the Father of the heavenly lights (James 1:17). And Paul cannot find words adequate for the supreme gift: 'Thanks be to God for his indescribable gift!' (2 Cor 9:15). The Trinitarian logic is this: the Father gives the Son; the Son gives himself; the Spirit is himself the Gift poured into our hearts. Generosity is not a human virtue added onto a neutral universe — it is the very shape of God's life, and created giving is a reflection of uncreated giving.",
  },
  {
    id: "t2",
    title: "Imago Dei and Generosity",
    body: "We are made in the image of a giving God (Genesis 1:26-27), and that image includes the drive to give. To be human is to be inherently generous in design — the Creator stamped his own character onto his image-bearers. This means hoarding is not merely a financial mistake; it is a kind of sub-humanity. When we close our fists around our resources, we suppress the image of God within us. Conversely, when we give freely, we live most fully into what we were made to be. The call to generosity is not an external demand placed on reluctant creatures — it is the invitation to become more fully human, to image more accurately the God in whose image we are made.",
  },
  {
    id: "t3",
    title: "The Economy of Enough",
    body: `In Exodus 16, God provides manna in the wilderness — and it cannot be hoarded. Those who gathered more found it rotted; those who gathered less found they had enough. The lesson is embedded in the structure of the provision: God's economy is an economy of enough, not of excess or scarcity. Paul picks up the same thread in 2 Corinthians 8:14-15: 'your abundance at the present time should supply their need, so that their abundance may supply your need, that there may be fairness — as it is written, "Whoever gathered much had nothing left over, and whoever gathered little had no lack."' The vision is not communism nor unrestrained accumulation — it is sufficiency circulated by generosity, a community in which abundance and need are held in dynamic, Spirit-directed balance.`,
  },
  {
    id: "t4",
    title: "Generosity as Worship",
    body: "Paul describes the Corinthians' collection for Jerusalem in striking doxological terms: 'this service is not only supplying the needs of God's people but is also overflowing in many expressions of thanks to God' (2 Cor 9:12). The offertory has always been an act of worship — not an awkward interruption of the service, but one of its highest moments. Giving is doxology. When we release our resources, we are saying with our wallets what we say with our lips: that God is the source of all things, that he is worthy of first fruits, that we trust his provision, that his kingdom matters more than our comfort. The act of giving, properly understood, is liturgy — the body's participation in the confession of faith.",
  },
  {
    id: "t5",
    title: "The Blessing of Giving",
    body: "Jesus said it plainly: 'give, and it will be given to you — good measure, pressed down, shaken together, running over' (Luke 6:38). And in Acts 20:35 Paul quotes a saying of Jesus not recorded in the Gospels: 'It is more blessed to give than to receive.' This is the counter-intuitive logic of the Kingdom. The world operates on the logic of accumulation — gather, secure, protect. The Kingdom operates on the logic of generosity — give, release, trust. And paradoxically, it is the givers who flourish. Not always financially (the prosperity gospel distorts this), but in the deepest sense: in joy, in freedom, in the fruit of love. Generosity is not the sacrifice of blessing but the path into it.",
  },
  {
    id: "t6",
    title: "Giving and Eternal Perspective",
    body: "Jesus commands: 'Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven' (Matthew 6:19-21). Randy Alcorn, in The Treasure Principle, argues that giving is transferring wealth from a volatile temporary account to a permanent eternal one — it is the only investment guaranteed to outlast death. Jesus also speaks of 'true riches' (Luke 16:11): if we are not faithful with worldly wealth, who will trust us with true riches? The implication is that how we handle money is not a separate category from spiritual growth — it is a primary indicator of where our heart actually is. Giving is the practice of eternal perspective made concrete.",
  },
];

const MOTIVATIONS = [
  {
    id: "m1",
    label: "Guilt and Obligation",
    scripture: "2 Corinthians 9:7",
    scriptureText: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
    produces: "Short-term compliance, resentment, burnout, and a transactional relationship with God and the church.",
    limitations: "This is the least sustainable motivation. Guilt-driven giving tends to either collapse when the guilt fades or calcify into a bitter duty. Paul explicitly names and rejects it: 'not reluctantly or under compulsion.' Guilt may start a habit, but it cannot sustain a life of generosity.",
    body: "Giving out of guilt is giving to relieve an internal pressure rather than out of love for God or others. It is giving to make the bad feeling stop, or giving to avoid the judgment of others. While it can produce action in the short run, it produces resentment in the long run — toward the church for asking, toward God for 'demanding,' and toward those whose needs feel like a burden. Paul's words in 2 Corinthians 9:7 are not merely descriptive but prescriptive: God is not interested in reluctant, compelled giving. The goal is transformation, not compliance.",
  },
  {
    id: "m2",
    label: "Gratitude",
    scripture: "2 Corinthians 8:9",
    scriptureText: "For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich.",
    produces: "Joyful, freely given generosity that feels like response rather than obligation.",
    limitations: "Gratitude-driven giving is highly sustainable, but can become passive if it remains only emotional. Gratitude that never asks 'what do I actually do with this?' stays sentimental.",
    body: "Gratitude is one of the most powerful and durable motivations for giving. When we understand what we have received — that Christ, being rich, became poor so that we might become rich — the natural response is to give out of that overflow. Gratitude-driven generosity feels fundamentally different from guilt-driven giving: it is a joyful response to grace, not a payment of debt. The Macedonians in 2 Corinthians 8 gave 'beyond their ability' not because they were wealthy but because they had encountered grace. When gratitude is the fuel, giving never feels like loss.",
  },
  {
    id: "m3",
    label: "Love for Others",
    scripture: "1 John 3:17",
    scriptureText: "If anyone has the world's goods and sees his brother in need, yet closes his heart against him, how does God's love abide in him?",
    produces: "Concrete, needs-responsive generosity that sees and acts. Agape made tangible.",
    limitations: "Emotion-driven giving can be unsystematic and reactive. Compassion fatigue is real. Love must be structured with wisdom to be sustainable at scale.",
    body: "John makes the connection explicit: the love of God abides in those who open their hands to need. Agape — the self-giving love that characterized God's gift of his Son — is the motivating force. When we truly see need, love generates action. This is giving that says 'you matter' with something more than words. James asks the same question differently: what good is it to say 'be warm and well fed' without giving what is needed? (James 2:16). Love for others is perhaps the most human motivation for generosity — the sight of a face in need, a story that reaches the heart — and it is deeply Christian when it is rooted in God's prior love for us.",
  },
  {
    id: "m4",
    label: "Kingdom Vision",
    scripture: "Matthew 6:33",
    scriptureText: "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    produces: "Strategic, intentional, and large-scale generosity aligned with the advance of the Gospel.",
    limitations: "Can become abstract — 'investing in the Kingdom' without a face or a name. Must be grounded in love for people and not merely a portfolio mindset.",
    body: "John Wesley famously developed a personal financial strategy: earn all you can, save all you can, give all you can. He lived on a fixed income his entire ministry and gave away everything above it. This is Kingdom Vision giving — the conviction that the Kingdom of God is the best possible investment, and that every dollar released for its advance is not lost but multiplied eternally. The investor mentality sees the church's mission, the spread of the Gospel, and the relief of suffering as opportunities rather than obligations. Giving with Kingdom vision is giving with eyes open to what the money actually does in the world.",
  },
  {
    id: "m5",
    label: "Joyful Abundance",
    scripture: "2 Corinthians 9:7",
    scriptureText: "God loves a cheerful giver.",
    produces: "Spontaneous, overflowing, often surprising generosity — the kind that delights the giver as much as the recipient.",
    limitations: "Joy-based giving can seem impractical for those in financial difficulty. The Spirit's work of transformation here is essential; it cannot be manufactured by willpower alone.",
    body: "The Greek word Paul uses for 'cheerful' in 2 Corinthians 9:7 is hilaros — the root of our word hilarious. God loves a hilarious giver. This is not a pleasant nicety about attitude — it is a description of a Spirit-wrought transformation of desire. The giver who has been changed by the Gospel begins to want to give. The discipline of generosity, practiced over time, produces a kind of joy in releasing resources that the hoarder cannot understand. It is the freedom of open hands, the delight of partnership, the experience of becoming a channel rather than a reservoir. This is the highest and most mature motivation — giving that flows from an overflow, not a tax.",
  },
];

const PRACTICES_ITEMS = [
  {
    id: "p1",
    title: "Tithing",
    body: "The tithe — ten percent of income — is the historic baseline of Christian giving, rooted in the Old Testament practice of returning the first tenth to God (Leviticus 27:30, Malachi 3:10). The New Testament does not legislate the tithe as law, but neither does it lower the bar. Randy Alcorn argues powerfully that the tithe is not the finish line but the starting line — the minimum, not the goal. For most Western Christians, the tithe is a significant step of faith and a meaningful act of trust. The question is not 'am I required to tithe?' but 'what would it mean for me to begin giving faithfully, and where does that begin?' The tithe is a practical discipline that externalizes the internal conviction that God owns it all.",
  },
  {
    id: "p2",
    title: "First Fruits Giving",
    body: "Proverbs 3:9-10 commands: 'Honor the Lord with your wealth and with the firstfruits of all your produce; then your barns will be filled with plenty.' First fruits giving means giving before you budget — off the top, before expenses are calculated. It is a posture of trust: I give first and trust God with what remains, rather than seeing what remains after everything else and giving from the leftovers. This practice reorients the entire financial life. It says, with concrete action, that God is first — not in principle but in practice. Most people who adopt first fruits giving report that it changes how they relate to money throughout the rest of their financial life.",
  },
  {
    id: "p3",
    title: "Spontaneous Giving",
    body: "Alongside planned giving, the practice of spontaneous generosity develops the spiritual muscle of immediate response to need. This requires developing eyes to see — the capacity to notice need that most people walk past — and the willingness to act before the moment passes. It also requires 'margin': financial and emotional space that is not already committed, so that when a need appears, there is something to give. This is not irresponsibility but preparation for opportunity. The discipline is this: when you see a need and feel the impulse to give, act on it before your mind talks you out of it. Over time, this builds a reflexive generosity that is one of the most beautiful marks of a Spirit-formed life.",
  },
  {
    id: "p4",
    title: "Planned Major Gifts",
    body: "Estate planning is discipleship. What happens to accumulated wealth at death is one of the most consequential financial decisions a Christian makes — and most Christians make it by default (leaving everything to family) rather than by intention. Planned giving includes writing the Kingdom into your will, establishing donor-advised funds, gifting appreciated assets, and making provision for the causes closest to your heart to outlast you. The Zacchaeus model is instructive: his repentance was expressed in restitution-sized generosity (Luke 19:8) — not incremental adjustment but radical restructuring. For those with significant assets, the question is not whether to plan, but whether to plan with Kingdom vision or without it.",
  },
  {
    id: "p5",
    title: "Giving in Community",
    body: "Generosity practiced alone is harder to sustain than generosity practiced in community. When a church community develops shared goals, accountability, and stories of collective giving, the culture of generosity deepens. Small groups that discuss financial discipleship together, congregations that covenant to increase their giving together, churches that pool resources for a specific major need — these practices make generosity a community project rather than a private burden. The early church in Acts 2 and 4 modeled this: 'they had everything in common' (Acts 2:44) — not because it was required but because the Spirit had made them one. Coordinated generosity can accomplish what no individual giver can achieve alone.",
  },
  {
    id: "p6",
    title: "Non-Financial Generosity",
    body: "The widow's two small coins were her entire livelihood (Mark 12:41-44) — Jesus commended not the amount but the proportion and the sacrifice. The principle extends to every resource: time, attention, presence, expertise, hospitality, and emotional energy are all forms of wealth that can be given or withheld. The person who is financially generous but never present is not yet fully generous. Non-financial generosity asks: where is my time actually going, and is it invested in people? Who am I making time for that costs me something? The practice of hospitality, of availability, of showing up — these are not lesser forms of generosity but often more costly ones. A life of generosity encompasses everything we have been given to steward.",
  },
];

const STORIES = [
  {
    id: "s1",
    name: "John Wesley",
    dates: "1703–1791",
    tagline: "Lived on £28 a year his entire life. Gave away everything else.",
    body: "John Wesley earned substantial income from his writings and preaching, but he made a decision early in his ministry to live on a fixed income — roughly £28 a year — and give away everything above that amount. As his income grew, his giving grew; his lifestyle did not. By the end of his life he had given away tens of thousands of pounds. He developed a simple three-part rule: earn all you can, save all you can (by living simply), give all you can. He died with almost nothing to his name — most of it had been given away decades before. Wesley understood money not as a measure of success but as a resource to be deployed for the Kingdom.",
  },
  {
    id: "s2",
    name: "R.G. LeTourneau",
    dates: "1888–1969",
    tagline: "Gave 90%, kept 10%. Believed God's shovel is bigger than ours.",
    body: "Robert Gilmour LeTourneau was an American inventor and industrialist who revolutionized earthmoving equipment — many of his designs are still in use today. As his business grew, he reversed the conventional tithe: he gave 90% of his income to Christian causes and kept 10% for living. His famous observation: 'I shovel money out, and God shovels it back — and God has a bigger shovel.' LeTourneau established the LeTourneau Foundation, which funded missions and Christian education globally. His autobiography, 'Mover of Men and Mountains,' is a testimony to the logic that you cannot out-give God. He saw his business not as a career but as a platform for funding the Kingdom.",
  },
  {
    id: "s3",
    name: "The Widow of Zarephath",
    dates: "1 Kings 17",
    tagline: "Gave her last meal to a prophet. Fed for a year.",
    body: "During a severe famine, the prophet Elijah was directed by God to Zarephath, where a widow was gathering sticks to make a final meal for herself and her son before they died. Elijah asked her to bring him water and food first. She told him she had only a handful of flour and a little oil. He said: 'Do not be afraid. Go and do as you have said. But first make me a small loaf of bread and bring it to me, and afterward make something for yourself and your son. For thus says the Lord God of Israel, the jar of flour shall not be spent, and the jug of oil shall not be empty, until the day that the Lord sends rain upon the earth.' She went and did as Elijah said. And the jar of flour was not spent, and the jug of oil did not run dry — for a year. The widow's gift was not a surplus offering; it was her last resource. And it became the occasion of supernatural provision.",
  },
  {
    id: "s4",
    name: "George Müller",
    dates: "1805–1898",
    tagline: "Ran orphanages for 10,000 children. Never asked anyone for money.",
    body: "George Müller established and ran the Ashley Down orphanages in Bristol, England, caring for over 10,000 orphaned children across his lifetime. He operated on a single principle: he would ask God for everything needed and never make financial need known to any human being. His diaries are filled with stories of food arriving hours before children would have gone hungry, of donations appearing in the exact amounts needed, of God's provision timed to the day. Over his lifetime he gave away approximately £1.5 million — all received by prayer and faith. Müller kept meticulous records, not to prove his system, but to encourage faith in God's faithfulness. His life remains one of the most documented accounts of faith-driven generosity in Christian history.",
  },
  {
    id: "s5",
    name: "Barnabas",
    dates: "Acts 4:36–37",
    tagline: "Sold his field and laid the money at the apostles' feet.",
    body: "Joseph, a Levite from Cyprus whom the apostles called Barnabas — meaning 'son of encouragement' — owned a field. In the early days of the Jerusalem church, when believers held their possessions loosely and distributed to any who had need, Barnabas sold his land and brought the full proceeds and laid them at the apostles' feet. Luke records this act immediately before the contrasting story of Ananias and Sapphira, who made the same gesture with a lie at its center. The contrast is instructive: Barnabas's gift was whole, transparent, and motivated by love for the community — a model of early church koinonia generosity. His name, 'son of encouragement,' fits: his gift was itself an encouragement, a demonstration that the Kingdom was worth this kind of investment.",
  },
  {
    id: "s6",
    name: "Zacchaeus",
    dates: "Luke 19:8",
    tagline: "Half to the poor. Fourfold restoration. Salvation made visible.",
    body: `Zacchaeus was a chief tax collector in Jericho — wealthy, despised, and professionally committed to extraction. When Jesus invited himself to Zacchaeus's house, something happened: 'Zacchaeus stood up and said to the Lord, "Look, Lord! Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount."' Jesus said: 'Today salvation has come to this house.' The pattern is striking: Zacchaeus did not give as a means of earning salvation — the encounter with Jesus came first. But genuine salvation expressed itself immediately in financial restructuring of the most radical kind. Fourfold restitution exceeded the legal requirement (Exodus 22:1 required fourfold for stolen sheep). Zacchaeus's repentance was not merely emotional — it was economic. His story is a test case: what would transformational generosity look like if Jesus came to your house today?`,
  },
];

function AccordionItem({
  id,
  title,
  body,
  expanded,
  onToggle,
}: {
  id: string;
  title: string;
  body: string;
  expanded: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        marginBottom: 12,
        overflow: "hidden",
      }}
    >
      <button type="button"
        onClick={() => onToggle(id)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "18px 22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <span style={{ color: TEXT, fontSize: 16, fontWeight: 600, lineHeight: 1.4 }}>
          {title}
        </span>
        <span
          style={{
            color: GREEN,
            fontSize: 20,
            flexShrink: 0,
            transform: expanded ? "rotate(45deg)" : "none",
            transition: "transform 0.2s",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>
      {expanded && (
        <div
          style={{
            padding: "0 22px 20px",
            color: MUTED,
            fontSize: 15,
            lineHeight: 1.75,
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 16,
          }}
        >
          {body}
        </div>
      )}
    </div>
  );
}

export default function TheologyOfGenerosityPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_theology-of-generosity_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeMotivation, setActiveMotivation] = usePersistedState<string>("vine_theology-of-generosity_active_motivation", "m1");

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activeMotivationData = MOTIVATIONS.find((m) => m.id === activeMotivation);

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of Generosity" },
    { id: "motivations", label: "Motivations for Giving" },
    { id: "practices", label: "Practices of Generosity" },
    { id: "stories", label: "Stories of Radical Generosity" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-block",
              background: `${PURPLE}22`,
              border: `1px solid ${PURPLE}55`,
              borderRadius: 20,
              padding: "6px 18px",
              color: PURPLE,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Biblical Stewardship
          </div>
          <h1
            style={{
              color: TEXT,
              fontSize: 38,
              fontWeight: 800,
              margin: "0 0 14px",
              lineHeight: 1.15,
            }}
          >
            A Theology of{" "}
            <span style={{ color: GREEN }}>Generosity</span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
            Why we give, how we give, and what giving does to us — grounded in
            Scripture, illustrated by lives.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 36,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((tab) => (
            <button type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? GREEN : CARD,
                color: activeTab === tab.id ? "#07070F" : MUTED,
                border: `1px solid ${activeTab === tab.id ? GREEN : BORDER}`,
                borderRadius: 8,
                padding: "10px 18px",
                fontSize: 14,
                fontWeight: activeTab === tab.id ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology */}
        {activeTab === "theology" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Christian generosity is not a financial strategy — it is a theological conviction
              expressed through concrete action. These {THEOLOGY_ITEMS.length} foundations ground the practice of
              giving in the character of God and the logic of the Gospel.
            </p>
            {THEOLOGY_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={toggleExpanded}
              />
            ))}
          </div>
        )}

        {/* Tab 2: Motivations */}
        {activeTab === "motivations" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Not all motivations for giving are equal. Understanding why we give — and why some
              motivations sustain while others exhaust — is essential for a lifelong practice of
              generosity.
            </p>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              {/* Left list */}
              <div style={{ width: 220, flexShrink: 0 }}>
                {MOTIVATIONS.map((m, i) => (
                  <button type="button"
                    key={m.id}
                    onClick={() => setActiveMotivation(m.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      background: activeMotivation === m.id ? `${GREEN}15` : "none",
                      border: `1px solid ${activeMotivation === m.id ? GREEN : BORDER}`,
                      borderRadius: 8,
                      padding: "12px 14px",
                      marginBottom: 8,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: activeMotivation === m.id ? GREEN : BORDER,
                        color: activeMotivation === m.id ? "#07070F" : MUTED,
                        fontSize: 12,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      style={{
                        color: activeMotivation === m.id ? TEXT : MUTED,
                        fontSize: 13,
                        fontWeight: activeMotivation === m.id ? 600 : 400,
                        lineHeight: 1.35,
                      }}
                    >
                      {m.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right detail panel */}
              {activeMotivationData && (
                <div
                  style={{
                    flex: 1,
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 28,
                    position: "sticky",
                    top: 20,
                  }}
                >
                  <h2 style={{ color: TEXT, fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>
                    {activeMotivationData.label}
                  </h2>
                  <div
                    style={{
                      display: "inline-block",
                      background: `${PURPLE}22`,
                      border: `1px solid ${PURPLE}44`,
                      borderRadius: 6,
                      padding: "3px 10px",
                      color: PURPLE,
                      fontSize: 12,
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    {activeMotivationData.scripture}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 20px",
                      padding: "14px 18px",
                      background: `${GREEN}0A`,
                      borderLeft: `3px solid ${GREEN}`,
                      borderRadius: "0 8px 8px 0",
                      color: TEXT,
                      fontSize: 14,
                      fontStyle: "italic",
                      lineHeight: 1.65,
                    }}
                  >
                    &ldquo;{activeMotivationData.scriptureText}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px" }}>
                    {activeMotivationData.body}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div
                      style={{
                        background: `${GREEN}0D`,
                        border: `1px solid ${GREEN}33`,
                        borderRadius: 8,
                        padding: "12px 14px",
                      }}
                    >
                      <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                        What It Produces
                      </div>
                      <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.55 }}>
                        {activeMotivationData.produces}
                      </div>
                    </div>
                    <div
                      style={{
                        background: `${PURPLE}0D`,
                        border: `1px solid ${PURPLE}33`,
                        borderRadius: 8,
                        padding: "12px 14px",
                      }}
                    >
                      <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                        Its Limitations
                      </div>
                      <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.55 }}>
                        {activeMotivationData.limitations}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Practices */}
        {activeTab === "practices" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Theology without practice is incomplete. These {PRACTICES_ITEMS.length} disciplines form the practical
              architecture of a generous life — from the tithe to your estate, from spontaneous
              giving to giving everything but money.
            </p>
            {PRACTICES_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={!!expanded[item.id]}
                onToggle={toggleExpanded}
              />
            ))}
          </div>
        )}

        {/* Tab 4: Stories */}
        {activeTab === "stories" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Generosity is not an abstraction. These are the lives — biblical and historical —
              that make the theology concrete. Each story is an argument that the Kingdom economy
              is real and worth investing in.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
                gap: 20,
              }}
            >
              {STORIES.map((story) => (
                <div
                  key={story.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <h3 style={{ color: TEXT, fontSize: 18, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                      {story.name}
                    </h3>
                    <span
                      style={{
                        color: PURPLE,
                        fontSize: 12,
                        fontWeight: 600,
                        background: `${PURPLE}1A`,
                        border: `1px solid ${PURPLE}44`,
                        borderRadius: 5,
                        padding: "3px 9px",
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {story.dates}
                    </span>
                  </div>
                  <p
                    style={{
                      color: GREEN,
                      fontSize: 13,
                      fontWeight: 600,
                      margin: 0,
                      fontStyle: "italic",
                      lineHeight: 1.45,
                    }}
                  >
                    {story.tagline}
                  </p>
                  <div
                    style={{
                      width: 40,
                      height: 2,
                      background: `${GREEN}44`,
                      borderRadius: 2,
                    }}
                  />
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    {story.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors on generosity and giving.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "_4IIW9AWYEM", title: "The Theology of Generosity", channel: "Christian Teaching", description: "A foundational exploration of why generosity is central to the Christian life, rooted in the generous character of God himself." },
                  { videoId: "2VIh7ojLYpU", title: "Generosity 01: Jesus's Surprising Teaching on Money", channel: "Gospel Teaching", description: "The practice of generosity is not a peripheral issue in Jesus's teaching — this video unpacks why he talked about money more than almost any other topic." },
                  { videoId: "Qlllx4IvujI", title: "Am I Generous? Biblical Giving, Tithing, Offerings & God's Heart for Money", channel: "Church Teaching", description: "A thorough biblical examination of giving, tithing, and what God's heart for money looks like in the life of a faithful disciple." },
                  { videoId: "DvFu9QEy2eM", title: "The Power of Generosity in Christian Life", channel: "Church Teaching", description: "Drawing from Philippians, this message explores how the Philippian church's constant generosity became a witness to the transforming power of the gospel." },
                  { videoId: "z8IlSC4xMsg", title: "Generosity Starts With One Thing", channel: "Christian Teaching", description: "A focused sermon on 2 Corinthians 9:6-8, exploring how the gospel produces cheerful, sacrificial givers who give not out of compulsion but out of love." },
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
      </main>
      <Footer />
    </div>
  );
}
