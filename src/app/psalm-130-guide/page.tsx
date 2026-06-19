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
    title: "1. The Cry from the Depths (vv. 1&ndash;2)",
    color: ROSE,
    body:
      "The psalm opens in the lowest place. &ldquo;Out of the depths I cry to you, O LORD! O Lord, hear my voice!&rdquo; The Hebrew word for &ldquo;depths&rdquo; (<em>ma&rsquo;amaqim</em>) evokes deep, drowning waters &mdash; the chaos of distress, danger, and guilt. Yet from that drowning place the psalmist does not sink into silence; he directs his voice upward to the covenant God.",
  },
  {
    title: "2. The Universal Need for Forgiveness (vv. 3&ndash;4)",
    color: GOLD,
    body:
      "&ldquo;If you, O LORD, should mark iniquities, O Lord, who could stand?&rdquo; Here the psalm turns from circumstance to the deeper crisis beneath it: sin. No one could survive a God who keeps an exact ledger of wrongs. Then comes the astonishing pivot of verse 4 &mdash; &ldquo;but with you there is forgiveness, that you may be feared.&rdquo;",
  },
  {
    title: "3. Waiting and Hoping in His Word (vv. 5&ndash;6)",
    color: TEAL,
    body:
      "Forgiven and yet still in the depths, the psalmist takes the posture of waiting. &ldquo;I wait for the LORD, my soul waits, and in his word I hope; my soul waits for the Lord more than watchmen for the morning.&rdquo; The image of the night watchman straining for first light pictures a hope that is patient yet certain &mdash; morning <em>will</em> come.",
  },
  {
    title: "4. The Corporate Hope of Redemption (vv. 7&ndash;8)",
    color: GREEN,
    body:
      "The psalm widens from the single soul to the whole people: &ldquo;O Israel, hope in the LORD! For with the LORD there is steadfast love, and with him is plentiful redemption. And he will redeem Israel from all his iniquities.&rdquo; The personal cry becomes a congregational summons, grounded not in Israel&rsquo;s worthiness but in God&rsquo;s character &mdash; his <em>hesed</em> (steadfast love) and his plentiful redemption.",
  },
];

const CONTEXT = [
  {
    title: "A Song of Ascents",
    color: PURPLE,
    body:
      "Psalm 130 is one of the fifteen &ldquo;Songs of Ascents&rdquo; (Psalms 120&ndash;134), the pilgrim psalms sung by worshipers as they journeyed up to Jerusalem for the great festivals. Sung along the way, this psalm gave the pilgrim a liturgy for the heart: a confession of need and a confession of hope, carried together up the road to the temple.",
  },
  {
    title: "A Penitential Psalm",
    color: ROSE,
    body:
      "The church has long counted Psalm 130 among the seven Penitential Psalms (6, 32, 38, 51, 102, 130, 143) &mdash; prayers used historically in seasons of repentance and especially in Lent. Of these seven it is among the most beloved, because it does not stop at the confession of sin but climbs to the assurance of grace.",
  },
  {
    title: "The De Profundis",
    color: GOLD,
    body:
      "From its opening words in the Latin Vulgate, <em>De profundis clamavi ad te, Domine</em> (&ldquo;Out of the depths I have cried to you, O Lord&rdquo;), the psalm has been known for centuries simply as the <em>De Profundis</em>. It has been prayed at deathbeds and gravesides, set to music by countless composers, and turned to by believers crying from the lowest points of their lives.",
  },
  {
    title: "Luther&rsquo;s Pauline Psalm",
    color: TEAL,
    body:
      "Martin Luther treasured Psalm 130, ranking it among his &ldquo;Pauline psalms&rdquo; because, like the apostle Paul, it teaches that we are justified not by marking our merits but by the free forgiveness of God. The psalm inspired his great hymn <em>Aus tiefer Not schrei ich zu dir</em> (&ldquo;Out of the depths I cry to you&rdquo;). For Luther this short psalm preached the whole gospel of grace.",
  },
];

const THEMES = [
  {
    id: "depths",
    title: "The Cry from the Depths",
    color: ROSE,
    body:
      "&ldquo;Out of the depths I cry to you, O LORD! O Lord, hear my voice! Let your ears be attentive to the voice of my pleas for mercy!&rdquo; (vv. 1&ndash;2). The depths are the deep waters of distress and guilt, the place where a person feels they are drowning and beyond rescue. The remarkable thing is the <em>direction</em> of the cry. The psalmist does not turn inward to brood or outward to despair; from the bottom he cries upward to the LORD. This is what faith does in the depths &mdash; it still has an address. The depths become not a tomb but a place of prayer.",
    refs: "Psalm 69:1&ndash;2; Jonah 2:2&ndash;6; Psalm 42:7; Lamentations 3:55&ndash;57",
  },
  {
    id: "forgiveness",
    title: "The Universal Need for Forgiveness",
    color: GOLD,
    body:
      "&ldquo;If you, O LORD, should mark iniquities, O Lord, who could stand?&rdquo; (v. 3). This is one of the most searching questions in all of Scripture. If God kept a precise account of every sin, no one &mdash; no saint, no priest, no king &mdash; could remain standing before him. The question silences every boast. It strips away the comforting illusion that we are basically fine, that our good outweighs our bad. Before the holy God, the only honest posture is the one this psalm models: a cry for mercy from the depths, with no claim of our own to offer.",
    refs: "Romans 3:19&ndash;20, 23; Psalm 143:2; Job 9:2&ndash;3; Ecclesiastes 7:20",
  },
  {
    id: "fear",
    title: "Forgiveness That Leads to Worship",
    color: TEAL,
    body:
      "&ldquo;But with you there is forgiveness, that you may be feared&rdquo; (v. 4). This is the theological heart of the psalm, and it is profound and surprising. We might expect the psalmist to say forgiveness produces <em>relief</em>, or <em>relaxation</em>, or even careless presumption. Instead, forgiveness produces <em>reverence</em>. Grace does not breed license; it breeds awe. A God who could justly condemn but freely pardons is far more to be feared &mdash; loved, revered, worshiped &mdash; than a God who merely judges. Those who have been forgiven much love much (Luke 7:47), and that love is the truest reverence.",
    refs: "Luke 7:36&ndash;50; Romans 6:1&ndash;2; Titus 2:11&ndash;14; 1 John 1:9",
  },
  {
    id: "waiting",
    title: "Waiting and Hoping in His Word",
    color: PURPLE,
    body:
      "&ldquo;I wait for the LORD, my soul waits, and in his word I hope; my soul waits for the Lord more than watchmen for the morning, more than watchmen for the morning&rdquo; (vv. 5&ndash;6). The repetition is deliberate, mimicking the long, slow hours of a sleepless night. Yet this waiting is not passive resignation; it is active, hopeful expectation anchored to God&rsquo;s <em>word</em> &mdash; his promise. The watchman does not doubt the dawn. He cannot hasten it, but he knows it is coming. So the believer waits, certain that the God who has promised redemption will keep his word.",
    refs: "Psalm 27:14; Psalm 40:1; Isaiah 21:11&ndash;12; Lamentations 3:24&ndash;26",
  },
  {
    id: "redemption",
    title: "Plentiful Redemption for the People",
    color: GREEN,
    body:
      "&ldquo;O Israel, hope in the LORD! For with the LORD there is steadfast love, and with him is plentiful redemption. And he will redeem Israel from all his iniquities&rdquo; (vv. 7&ndash;8). The hope is corporate and the redemption is <em>plentiful</em> &mdash; overflowing, abundant, more than enough. This anticipates the abundance of grace that comes in Christ, &ldquo;in whom we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace&rdquo; (Ephesians 1:7). The psalm ends not with the believer&rsquo;s effort but with God&rsquo;s certain pledge: <em>he will</em> redeem his people from all their iniquities.",
    refs: "Ephesians 1:7; Titus 2:14; Psalm 103:8&ndash;12; Matthew 1:21",
  },
];

const VERSES = [
  {
    id: "v1-2",
    ref: "Psalm 130:1&ndash;2",
    title: "The Cry from the Depths",
    color: ROSE,
    body:
      "&ldquo;Out of the depths I cry to you, O LORD! O Lord, hear my voice! Let your ears be attentive to the voice of my pleas for mercy!&rdquo; The psalm begins at the bottom. The &ldquo;depths&rdquo; are the deep, dark waters &mdash; an image of distress so overwhelming the soul feels it is drowning. Yet notice the urgency and the address: the psalmist twice names the LORD and twice begs to be <em>heard</em>. He is not composing a polished prayer; he is pleading for mercy. From the lowest point a person can reach, the line of communication to God remains open, and that open line is itself an act of faith.",
  },
  {
    id: "v3-4",
    ref: "Psalm 130:3&ndash;4",
    title: "If You Should Mark Iniquities",
    color: GOLD,
    body:
      "&ldquo;If you, O LORD, should mark iniquities, O Lord, who could stand? But with you there is forgiveness, that you may be feared.&rdquo; The psalmist now names the real depth beneath every distress: sin. If God kept score, no one could survive the audit &mdash; &ldquo;who could stand?&rdquo; expects the answer, <em>no one</em>. But the verse does not end in despair. The little word &ldquo;but&rdquo; opens onto the gospel: &ldquo;with you there is forgiveness.&rdquo; And the purpose of that forgiveness is breathtaking &mdash; &ldquo;that you may be feared.&rdquo; Pardon does not make God less awesome; it makes him infinitely more so. Grace creates worshipers, not careless presumers.",
  },
  {
    id: "v5-6",
    ref: "Psalm 130:5&ndash;6",
    title: "I Wait for the LORD",
    color: TEAL,
    body:
      "&ldquo;I wait for the LORD, my soul waits, and in his word I hope; my soul waits for the Lord more than watchmen for the morning, more than watchmen for the morning.&rdquo; Having found forgiveness, the psalmist settles into waiting. The fourfold repetition &mdash; &ldquo;I wait&hellip; my soul waits&hellip; more than watchmen for the morning, more than watchmen for the morning&rdquo; &mdash; stretches out like the long hours before dawn. His hope rests not on a feeling but on God&rsquo;s &ldquo;word,&rdquo; his promise. Like a watchman certain the sun will rise, the believer waits with patient confidence: the dawn cannot be hurried, but it cannot be stopped either.",
  },
  {
    id: "v7-8",
    ref: "Psalm 130:7&ndash;8",
    title: "Plentiful Redemption",
    color: GREEN,
    body:
      "&ldquo;O Israel, hope in the LORD! For with the LORD there is steadfast love, and with him is plentiful redemption. And he will redeem Israel from all his iniquities.&rdquo; The private prayer becomes a public sermon. The psalmist turns to the whole congregation and urges them to hope in the LORD, and he gives the ground of that hope: God&rsquo;s <em>steadfast love</em> (<em>hesed</em>) and his <em>plentiful redemption</em> &mdash; redemption that is abundant, overflowing, more than sufficient for every iniquity. The psalm closes with a promise as sure as God himself: &ldquo;he <em>will</em> redeem Israel from all his iniquities.&rdquo; The depths gave way to the dawn, and the dawn to assured redemption.",
  },
];

const APPLICATIONS = [
  {
    title: "Let the Depths Become a Place of Prayer",
    color: ROSE,
    body:
      "When you find yourself in the depths &mdash; grief, failure, fear, the suffocating weight of guilt &mdash; do not wait until you have climbed out to pray. Pray <em>from</em> the bottom. Psalm 130 gives you permission and language to cry to God before anything is resolved. The depths are not a place where God cannot hear; they are the very place from which the psalmist cried and was heard. Make your lowest moments your most honest prayers.",
  },
  {
    title: "Trade Self-Examination for Mercy",
    color: GOLD,
    body:
      "&ldquo;If you, O LORD, should mark iniquities&hellip; who could stand?&rdquo; If your standing before God depended on your record, you would have no hope. So stop trying to balance the ledger. The way to stand is not to prove your innocence but to plead for mercy. Let verse 3 demolish your self-justification, and let verse 4 build you up on grace alone. The gospel is not that your sins are small but that God&rsquo;s forgiveness is great.",
  },
  {
    title: "Let Grace Make You Reverent, Not Careless",
    color: TEAL,
    body:
      "Some treat forgiveness as a license to take sin lightly. Psalm 130:4 teaches the opposite: &ldquo;there is forgiveness, that you may be feared.&rdquo; The more deeply you grasp how freely you have been pardoned, the more your heart should bow in awe and love. Test your understanding of grace by its fruit: true grace produces reverence, gratitude, and a tender conscience &mdash; never a shrug.",
  },
  {
    title: "Wait Like a Watchman for the Morning",
    color: PURPLE,
    body:
      "Much of the Christian life is spent waiting &mdash; for answers, for healing, for change, for the return of Christ. Psalm 130 reframes that waiting. The watchman does not stare into the dark wondering <em>if</em> the sun will rise; he waits because he is certain it <em>will</em>. Anchor your hope to God&rsquo;s word, not to your circumstances, and wait with the quiet confidence of one who knows the dawn is on its way.",
  },
  {
    title: "Preach Hope to the People",
    color: GREEN,
    body:
      "The psalmist does not keep his comfort to himself; he turns and says, &ldquo;O Israel, hope in the LORD!&rdquo; What God has done for you is meant to overflow to others. When you have been lifted from the depths, point your church, your family, your friends to the same plentiful redemption. The personal experience of grace is meant to become a corporate summons to hope.",
  },
];

const REFLECTION = [
  "Where are the &ldquo;depths&rdquo; in your life right now &mdash; the place from which you most need to cry to God? Have you actually brought it to him in prayer, or are you waiting to feel better first?",
  "Read verse 3 slowly: &ldquo;If you, O LORD, should mark iniquities&hellip; who could stand?&rdquo; How does honestly facing this question change the way you approach God?",
  "Verse 4 says forgiveness leads to <em>fear</em> (reverent worship), not license. Does the grace you have received make you more careless about sin or more reverent? Why do you think that is?",
  "The psalmist waits &ldquo;more than watchmen for the morning.&rdquo; What are you currently waiting on God for, and what would it look like to wait with the watchman&rsquo;s certainty rather than anxious doubt?",
  "The redemption in verse 7 is called &ldquo;plentiful.&rdquo; Are there sins or failures you secretly think are too big for God&rsquo;s forgiveness? How does &ldquo;plentiful redemption&rdquo; speak to that fear?",
  "Who in your life is currently in the depths? How could you, like the psalmist, turn and say to them, &ldquo;Hope in the LORD&rdquo;?",
];

const PRAYER =
  "O Lord, out of the depths I cry to you; hear my voice, and let your ears be attentive to my pleas for mercy. If you should mark my iniquities, I could never stand &mdash; but with you there is forgiveness, and so I worship you in reverent awe. Teach my soul to wait for you and to hope in your word, more than watchmen wait for the morning. I rest in your steadfast love and your plentiful redemption, certain that you will redeem your people from all their iniquities. In the name of Jesus Christ, my Redeemer, I pray. Amen.";

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 130: Out of the Depths" },
  { videoId: "Q2oNOlXzBhY", title: "The De Profundis &mdash; A Song of Ascents" },
  { videoId: "8phkAg8PMHE", title: "Forgiveness That You May Be Feared" },
  { videoId: "fNk_zzaMoSs", title: "Waiting for the Morning: Hope in Psalm 130" },
];

const RELATED = [
  { label: "Psalm 133 Guide", href: "/psalm-133-guide" },
  { label: "Confession and Repentance", href: "/confession-repentance-guide" },
  { label: "Grace Theology", href: "/grace-theology-guide" },
  { label: "Biblical Lament", href: "/lament-guide" },
];

export default function Psalm130Guide() {
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
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: ROSE, textTransform: "uppercase" }}>
              Songs of Ascents
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Psalm 130: Out of the Depths
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            A pilgrim&rsquo;s cry and one of the seven Penitential Psalms &mdash; the famous <em>De Profundis</em> that
            moves from the drowning depths of guilt and distress to the certain hope of plentiful redemption.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              background: `${ROSE}10`,
              border: `1px solid ${ROSE}30`,
              borderLeft: `3px solid ${ROSE}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <div style={{ fontWeight: 800, color: ROSE, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
              Key Verse &mdash; Psalm 130:3&ndash;4
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={h(
                "&ldquo;If you, O LORD, should mark iniquities, O Lord, who could stand? But with you there is forgiveness, that you may be feared.&rdquo;"
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
                background: tab === t ? ROSE : "transparent",
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ROSE : BORDER}`,
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
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: ROSE }}>Summary</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={h(
                  "Psalm 130 is a short prayer of immense depth. It begins with a single soul drowning in distress and guilt, crying upward to God; it confronts the universal problem of sin with the searching question, &ldquo;who could stand?&rdquo;; it discovers the gospel in the words &ldquo;with you there is forgiveness&rdquo;; it settles into the patient, certain waiting of a watchman for the dawn; and it ends by summoning the whole people of God to hope in his steadfast love and plentiful redemption. In eight verses the psalm travels from the depths to the dawn."
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
              Five great movements of the heart run through this psalm &mdash; from the cry of the depths to the
              assurance of plentiful redemption. Expand each to explore the theme and its cross-references.
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
              Walk through Psalm 130 in its four natural movements. Expand each section to read the text and a brief
              commentary.
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
