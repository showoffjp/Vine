"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

type Html = { __html: string };
const h = (s: string): Html => ({ __html: s });

const STRUCTURE = [
  {
    title: "1. The Declaration of Unity (v. 1)",
    color: GREEN,
    body:
      "The psalm opens with a single ringing exclamation: &ldquo;Behold, how good and pleasant it is when brothers dwell in unity!&rdquo; The word &ldquo;Behold&rdquo; calls us to <em>look</em> &mdash; to take notice of something genuinely remarkable. Unity among God&rsquo;s people is described with two words: it is <em>good</em> (morally and objectively) and <em>pleasant</em> (delightful to experience). This is the thesis the rest of the psalm illustrates.",
  },
  {
    title: "2. The Anointing Oil (v. 2)",
    color: GOLD,
    body:
      "The first image is the precious anointing oil poured on Aaron the high priest: &ldquo;It is like the precious oil on the head, running down on the beard, on the beard of Aaron, running down on the collar of his robes.&rdquo; Unity is a sacred, consecrating blessing &mdash; abundant oil that flows <em>down</em> from the head and covers the whole man. The repetition of &ldquo;running down&rdquo; emphasizes the overflowing, generous descent of the blessing.",
  },
  {
    title: "3. The Dew of Hermon (v. 3a)",
    color: TEAL,
    body:
      "The second image turns from the sanctuary to creation: &ldquo;It is like the dew of Hermon, which falls on the mountains of Zion.&rdquo; Mount Hermon in the far north was famous for its heavy, refreshing dew. The psalm imagines that life-giving moisture falling even upon Zion in the south &mdash; unity pictured as a refreshing, fertile gift that descends from above and brings life to dry ground.",
  },
  {
    title: "4. The Commanded Blessing (v. 3b)",
    color: PURPLE,
    body:
      "The psalm reaches its climax: &ldquo;For there the LORD has commanded the blessing, life forevermore.&rdquo; Unity is not merely agreeable; it is the very place where God himself commands his blessing &mdash; and the blessing he commands is nothing less than &ldquo;life forevermore.&rdquo; The two flowing images converge: where God&rsquo;s people dwell in unity, blessing and life flow down from God himself.",
  },
];

const CONTEXT = [
  {
    title: "A Song of Ascents",
    color: PURPLE,
    body:
      "Psalm 133 is one of the fifteen Songs of Ascents (Psalms 120&ndash;134), sung by pilgrims as they journeyed up to Jerusalem for the festivals. As scattered worshipers from every tribe and village converged on the city, the experience of &ldquo;brothers dwelling together in unity&rdquo; was not abstract &mdash; it was the very road they were walking and the gathered crowd they were joining. The psalm celebrates the joy of God&rsquo;s assembled people.",
  },
  {
    title: "The Anointing of Aaron",
    color: GOLD,
    body:
      "The first image draws directly on the consecration of Aaron as high priest (Exodus 29&ndash;30). The sacred anointing oil, mixed according to a holy recipe, was poured so abundantly that it ran down his head, his beard, and onto the collar of his priestly robes. By choosing this image, the psalm presents unity as something <em>sacred</em> and <em>consecrating</em> &mdash; not merely pleasant social harmony, but a holy thing connected to worship and priesthood.",
  },
  {
    title: "The Dew of Hermon",
    color: TEAL,
    body:
      "Mount Hermon, rising over 9,000 feet in the far north, was renowned for its abundant dew &mdash; a symbol of refreshment, fertility, and life in a dry land. The psalm pictures that heavy northern dew falling even on the mountains of Zion far to the south. Geographically impossible, the image is poetically rich: it portrays unity as a refreshing, life-giving gift that comes <em>down</em> from above, watering and reviving the people of God.",
  },
  {
    title: "Brevity and Weight",
    color: ROSE,
    body:
      "At only three verses, Psalm 133 is among the shortest in the Psalter, yet its theological weight is immense. In a few brushstrokes it portrays unity as good, pleasant, sacred, refreshing, and the very channel of God&rsquo;s commanded blessing of eternal life. Its brevity makes it memorable; its imagery makes it unforgettable. Few passages say so much about Christian fellowship in so few words.",
  },
];

const THEMES = [
  {
    id: "good",
    title: "The Beauty and Goodness of Unity",
    color: GREEN,
    body:
      "&ldquo;Behold, how good and pleasant it is when brothers dwell in unity!&rdquo; (v. 1). The psalm does not merely recommend unity; it marvels at it. Unity is called both <em>good</em> and <em>pleasant</em> &mdash; it is right in God&rsquo;s sight and a delight to those who experience it. The word &ldquo;brothers&rdquo; reminds us this is family unity, not mere agreement between strangers. In a world fractured by rivalry, faction, and division, the sight of God&rsquo;s people genuinely dwelling together is something to <em>behold</em> &mdash; a rare and beautiful thing that testifies to the reality of God.",
    refs: "John 13:34&ndash;35; Philippians 2:1&ndash;2; Romans 12:10; Acts 4:32",
  },
  {
    id: "oil",
    title: "Unity as Sacred Anointing Oil",
    color: GOLD,
    body:
      "&ldquo;It is like the precious oil on the head, running down on the beard, on the beard of Aaron, running down on the collar of his robes&rdquo; (v. 2). The first image is priestly and consecrating. The holy anointing oil set Aaron apart for the service of God, and it was poured so generously that it flowed down over his head, beard, and robes. So unity is sacred &mdash; it consecrates, it sets a community apart, it flows <em>down</em> and covers everyone. Notice the direction: blessing descends from the head over the whole body, just as in Christ, our great High Priest, the anointing of the Spirit flows down upon his people.",
    refs: "Exodus 29:7; Exodus 30:22&ndash;33; Psalm 23:5; 1 John 2:20, 27",
  },
  {
    id: "dew",
    title: "Unity as Life-Giving Dew",
    color: TEAL,
    body:
      "&ldquo;It is like the dew of Hermon, which falls on the mountains of Zion&rdquo; (v. 3a). The second image is one of refreshment and fertility. In the dry climate of the land, dew was essential to life, and the dew of lofty Mount Hermon was famously heavy. To imagine that refreshing northern dew falling on Zion is to picture unity as a gift that descends from above to revive and nourish. Like the oil, the dew comes <em>down</em> &mdash; both images insist that true unity is not manufactured from below but given as a blessing from God above, watering what would otherwise be parched.",
    refs: "Hosea 14:5; Deuteronomy 33:13&ndash;16; Isaiah 26:19; James 1:17",
  },
  {
    id: "blessing",
    title: "The Commanded Blessing of Life",
    color: PURPLE,
    body:
      "&ldquo;For there the LORD has commanded the blessing, life forevermore&rdquo; (v. 3b). This is the climax and the surprise. Unity is not just lovely; it is the very <em>place</em> where God commands his blessing. The word &ldquo;there&rdquo; is emphatic &mdash; in the midst of a people dwelling in unity, the LORD has decreed his blessing, and that blessing is &ldquo;life forevermore.&rdquo; Eternal life is associated with the unity of God&rsquo;s people. This is why disunity is so serious and unity so precious: it is the appointed channel through which God pours out his richest gift.",
    refs: "John 17:20&ndash;23; Ephesians 4:1&ndash;6; John 10:10; Leviticus 25:21",
  },
  {
    id: "church",
    title: "Unity and the Church of Christ",
    color: ROSE,
    body:
      "Though written for Israel, Psalm 133 finds its deepest fulfillment in the church. On the night before he died, Jesus prayed &ldquo;that they may all be one&hellip; so that the world may believe&rdquo; (John 17:21). The early church embodied it: &ldquo;all who believed were together and had all things in common&rdquo; (Acts 2:44). Paul pleaded for it: &ldquo;eager to maintain the unity of the Spirit in the bond of peace&rdquo; (Ephesians 4:3). The unity of brothers and sisters across every dividing line is both a foretaste of the commanded blessing and a witness to the watching world.",
    refs: "John 17:20&ndash;23; Acts 2:42&ndash;47; Ephesians 4:1&ndash;6; Colossians 3:14",
  },
];

const VERSES = [
  {
    id: "v1",
    ref: "Psalm 133:1",
    title: "Behold, How Good and Pleasant",
    color: GREEN,
    body:
      "&ldquo;Behold, how good and pleasant it is when brothers dwell in unity!&rdquo; The psalm begins with a call to attention &mdash; &ldquo;Behold&rdquo; &mdash; as if pointing to something we might otherwise overlook. The unity of God&rsquo;s people is described with two complementary words: it is <em>good</em>, measuring up to God&rsquo;s own standard, and <em>pleasant</em>, sweet and agreeable to those within it. The word &ldquo;brothers&rdquo; frames the community as a family rather than a mere assembly. To &ldquo;dwell in unity&rdquo; is to live together in genuine harmony &mdash; not the absence of difference, but the presence of love that binds difference together.",
  },
  {
    id: "v2",
    ref: "Psalm 133:2",
    title: "The Precious Oil on Aaron",
    color: GOLD,
    body:
      "&ldquo;It is like the precious oil on the head, running down on the beard, on the beard of Aaron, running down on the collar of his robes.&rdquo; The first comparison is to the holy anointing oil of the priesthood. When Aaron was consecrated, the oil was poured so lavishly that it ran down from his head, through his beard, to the very edge of his robes. The repetition of &ldquo;running down&rdquo; traces the generous, unstoppable descent of the blessing. Unity, the psalm says, is like this: sacred, consecrating, and overflowing &mdash; flowing down from the head to cover and bless the whole body of God&rsquo;s people.",
  },
  {
    id: "v3a",
    ref: "Psalm 133:3a",
    title: "The Dew of Hermon",
    color: TEAL,
    body:
      "&ldquo;It is like the dew of Hermon, which falls on the mountains of Zion.&rdquo; The second comparison moves from the temple to creation. Mount Hermon&rsquo;s heavy dew was a byword for refreshment and fertility in a thirsty land. The psalmist imagines that same life-giving moisture falling upon Zion, far to the south. The picture is of revival and abundance: unity refreshes a community the way dew revives parched ground at dawn. And again, the movement is downward &mdash; the blessing <em>falls</em>, a gift descending from above rather than an achievement rising from below.",
  },
  {
    id: "v3b",
    ref: "Psalm 133:3b",
    title: "There the LORD Commanded the Blessing",
    color: PURPLE,
    body:
      "&ldquo;For there the LORD has commanded the blessing, life forevermore.&rdquo; The psalm closes on its highest note. The little word &ldquo;there&rdquo; gathers up everything: in the place where brothers dwell in unity, the LORD himself has <em>commanded</em> his blessing. This is no accident of circumstance but a divine decree. And the content of the blessing is the greatest gift of all &mdash; &ldquo;life forevermore.&rdquo; Unity is thus revealed as the appointed channel of God&rsquo;s richest and most enduring gift. Where his people are one, there he pours out life that never ends.",
  },
];

const APPLICATIONS = [
  {
    title: "Treasure Unity as Something Sacred",
    color: GOLD,
    body:
      "Psalm 133 will not let us treat unity as optional or merely nice. The anointing-oil image marks it as <em>holy</em> &mdash; consecrated, set apart, connected to worship itself. Examine how you regard the unity of your church and family. Do you guard it as a sacred trust, or spend it cheaply on petty grievances? Treat the peace of God&rsquo;s people as the precious, consecrating thing it is.",
  },
  {
    title: "Receive Unity as a Gift from Above",
    color: TEAL,
    body:
      "Both images &mdash; the oil and the dew &mdash; come <em>down</em>. Unity is not first something we manufacture by effort but something God pours out from above. That should make us humble (we cannot create it on our own) and prayerful (we can ask God for it). Before you strategize your way to harmony, ask the Father, the source of every good gift, to send the refreshing dew of his Spirit upon your fellowship.",
  },
  {
    title: "Be a Channel, Not a Blockage",
    color: GREEN,
    body:
      "The oil flowed <em>down</em> over the whole body; the dew fell on the mountains. Blessing is meant to spread. Ask whether you are a channel of unity &mdash; quick to forgive, eager to reconcile, ready to overlook offense &mdash; or a blockage that holds it up through pride, gossip, or grudge-keeping. Choose, this week, one relationship in the body where you can let the blessing flow rather than dam it.",
  },
  {
    title: "Pursue the Unity Jesus Prayed For",
    color: PURPLE,
    body:
      "On the night before he died, Jesus prayed that his people would be one, so that the world would believe. The unity of Psalm 133 is the unity of his prayer. When you work for reconciliation in the church, you are answering the very request of Christ and bearing witness to a watching world. Make peacemaking a deliberate part of your discipleship, not an afterthought.",
  },
  {
    title: "Know That Blessing Flows Where Unity Dwells",
    color: ROSE,
    body:
      "&ldquo;There the LORD has commanded the blessing.&rdquo; If you long for God&rsquo;s blessing and life on your community, remember <em>where</em> he has appointed it to flow: in the midst of his people dwelling in unity. Disunity does not merely sadden us; it obstructs the channel of blessing. Invest in unity, and you are positioning your church beneath the place where God has promised to pour out life forevermore.",
  },
];

const REFLECTION = [
  "The psalm says unity is both &ldquo;good&rdquo; and &ldquo;pleasant.&rdquo; Where in your life have you experienced the genuine sweetness of dwelling together in unity with other believers?",
  "Unity is pictured as sacred anointing oil. How does seeing unity as something <em>holy</em> &mdash; rather than merely convenient &mdash; change the way you handle conflict in your church or family?",
  "Both the oil and the dew flow <em>down</em> from above. What does it mean that unity is first a gift to receive from God rather than only an achievement to produce? How might that reshape your prayers?",
  "Is there a relationship in the body of Christ where you are currently a &ldquo;blockage&rdquo; to unity rather than a channel? What would it take to let the blessing flow there?",
  "Jesus prayed for the unity of his people &ldquo;so that the world may believe&rdquo; (John 17:21). How does the unity (or disunity) of the church serve as a witness to those outside it?",
  "Verse 3 says that where God&rsquo;s people dwell in unity, &ldquo;the LORD has commanded the blessing, life forevermore.&rdquo; How does this motivate you to actively pursue and protect unity?",
];

const PRAYER =
  "Father, you have shown us how good and pleasant it is when your people dwell together in unity. Pour out upon us the precious oil of your Spirit, that it may flow down and consecrate us as one. Send the refreshing dew of your grace upon our dry and divided hearts. Make us channels of your peace, quick to forgive and eager to reconcile, that the world may behold our love and believe. And where we dwell in unity, command your blessing, even life forevermore, for the sake of Jesus Christ, who prayed that we might be one. Amen.";

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 133: How Good and Pleasant" },
  { videoId: "OjJ7GkWCHvA", title: "The Blessing of Unity &mdash; A Song of Ascents" },
  { videoId: "pHBzJ2dVXgk", title: "The Anointing Oil and the Dew of Hermon" },
  { videoId: "3sO5FH2ybPY", title: "That They May Be One: Unity in the Church" },
];

const RELATED = [
  { label: "Psalm 130 Guide", href: "/psalm-130-guide" },
  { label: "Ecclesiology Guide", href: "/ecclesiology-guide" },
  { label: "Christian Friendship", href: "/christian-friendship-guide" },
  { label: "Small Group Guide", href: "/small-group-guide" },
];

export default function Psalm133Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const card = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: "1.5rem",
  } as const;

  const accordionBtn = (isOpen: boolean, color: string) => ({
    width: "100%",
    textAlign: "left" as const,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1.25rem",
    background: isOpen ? `${color}12` : "transparent",
    border: `1px solid ${isOpen ? color + "40" : BORDER}`,
    borderRadius: 12,
    cursor: "pointer",
    marginBottom: 8,
    color: TEXT,
    fontWeight: 700,
    transition: "all .2s",
  });

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>
              Songs of Ascents
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Psalm 133: The Blessing of Unity
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            A short pilgrim song of immense weight &mdash; three verses on the goodness of unity among God&rsquo;s
            people, pictured in the anointing oil that ran down Aaron&rsquo;s beard and the dew that falls on the
            mountains of Zion.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              background: `${GREEN}10`,
              border: `1px solid ${GREEN}30`,
              borderLeft: `3px solid ${GREEN}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <div style={{ fontWeight: 800, color: GREEN, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
              Key Verse &mdash; Psalm 133:1
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={h(
                "&ldquo;Behold, how good and pleasant it is when brothers dwell in unity!&rdquo;"
              )}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTab(t);
                setOpen(null);
              }}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "0.82rem",
                background: tab === t ? GREEN : "transparent",
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? GREEN : BORDER}`,
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GREEN }}>Summary</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={h(
                  "Psalm 133 is one of the briefest and most beloved of the Songs of Ascents. In three short verses it celebrates the goodness and pleasantness of God&rsquo;s people dwelling together in unity, illustrating that unity with two unforgettable images &mdash; the precious anointing oil that ran down over Aaron&rsquo;s head, beard, and robes, and the heavy dew of Mount Hermon falling on the mountains of Zion. Both images flow <em>downward</em>, picturing unity as a sacred, refreshing blessing that descends from God above. The psalm climaxes in the declaration that it is precisely in such unity that &ldquo;the LORD has commanded the blessing, life forevermore.&rdquo;"
                )}
              />
            </div>

            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Structure</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {STRUCTURE.map((s) => (
                  <div
                    key={s.title}
                    style={{
                      background: `${s.color}08`,
                      border: `1px solid ${s.color}25`,
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div
                      style={{ fontWeight: 800, color: s.color, marginBottom: "0.4rem" }}
                      dangerouslySetInnerHTML={h(s.title)}
                    />
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}
                      dangerouslySetInnerHTML={h(s.body)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>
                Background and Context
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {CONTEXT.map((c) => (
                  <div key={c.title}>
                    <h3
                      style={{ fontWeight: 800, color: c.color, marginBottom: "0.4rem", fontSize: "1.02rem" }}
                      dangerouslySetInnerHTML={h(c.title)}
                    />
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={h(c.body)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Five threads run through this short psalm &mdash; from the goodness of unity to its fulfillment in the
              church of Christ. Expand each to explore the theme and its cross-references.
            </p>
            {THEMES.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button type="button" style={accordionBtn(isOpen, item.color)} onClick={() => toggle(item.id)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${item.color}0A`,
                        border: `1px solid ${item.color}20`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p
                        style={{ color: MUTED, lineHeight: 1.7, marginTop: 0 }}
                        dangerouslySetInnerHTML={h(item.body)}
                      />
                      <div
                        style={{ color: item.color, fontStyle: "italic", fontSize: "0.85rem", marginTop: "0.75rem" }}
                        dangerouslySetInnerHTML={h("Cross-references: " + item.refs)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "verse" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Walk through Psalm 133 phrase by phrase. Expand each section to read the text and a brief commentary.
            </p>
            {VERSES.map((v) => {
              const isOpen = open === v.id;
              return (
                <div key={v.id}>
                  <button type="button" style={accordionBtn(isOpen, v.color)} onClick={() => toggle(v.id)}>
                    <span style={{ fontWeight: 800 }}>
                      <span dangerouslySetInnerHTML={h(v.ref)} />{" "}
                      <span style={{ fontWeight: 400, color: MUTED }}>&mdash; {v.title}</span>
                    </span>
                    <span style={{ color: v.color }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${v.color}0A`,
                        border: `1px solid ${v.color}20`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p
                        style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                        dangerouslySetInnerHTML={h(v.body)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "application" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>
                Living the Psalm
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {APPLICATIONS.map((a) => (
                  <div
                    key={a.title}
                    style={{
                      background: `${a.color}08`,
                      border: `1px solid ${a.color}25`,
                      borderLeft: `3px solid ${a.color}`,
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <h3
                      style={{ fontWeight: 800, color: a.color, marginBottom: "0.4rem", fontSize: "1.02rem" }}
                      dangerouslySetInnerHTML={h(a.title)}
                    />
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={h(a.body)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>
                Questions for Reflection
              </h2>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {REFLECTION.map((q, i) => (
                  <li
                    key={i}
                    style={{ color: MUTED, lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={h(q)}
                  />
                ))}
              </ol>
            </div>

            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: ROSE }}>
                Video Teaching
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div key={v.videoId}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div
                      style={{ color: MUTED, fontSize: "0.85rem", marginTop: "0.5rem", fontWeight: 600 }}
                      dangerouslySetInnerHTML={h(v.title)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                ...card,
                background: `${GOLD}0C`,
                border: `1px solid ${GOLD}30`,
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>
                A Closing Prayer
              </h2>
              <p
                style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={h(PRAYER)}
              />
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {RELATED.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: 999,
                fontSize: "0.82rem",
                fontWeight: 700,
                border: `1px solid ${BORDER}`,
                color: MUTED,
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
