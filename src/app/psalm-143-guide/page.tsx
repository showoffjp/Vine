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
    title: "1. The Appeal to God&rsquo;s Righteousness (vv. 1&ndash;2)",
    color: ROSE,
    body:
      "David begins not with his own goodness but with God&rsquo;s: &ldquo;Hear my prayer, O LORD; give ear to my pleas for mercy! In your faithfulness answer me, in your righteousness!&rdquo; Then comes the confession that grounds the whole psalm: &ldquo;Enter not into judgment with your servant, for no one living is righteous before you.&rdquo; He makes no claim on his own merit; his only plea is God&rsquo;s faithfulness and grace.",
  },
  {
    title: "2. Crushed, Remembering, Thirsting (vv. 3&ndash;6)",
    color: GOLD,
    body:
      "&ldquo;For the enemy has pursued my soul; he has crushed my life to the ground&hellip; therefore my spirit faints within me; my heart within me is appalled.&rdquo; In the dark, David turns to memory: &ldquo;I remember the days of old; I meditate on all that you have done; I ponder the work of your hands.&rdquo; And from memory rises longing: &ldquo;I stretch out my hands to you; my soul thirsts for you like a parched land.&rdquo;",
  },
  {
    title: "3. The Morning Plea for Guidance (vv. 7&ndash;10)",
    color: TEAL,
    body:
      "&ldquo;Answer me quickly, O LORD! My spirit fails! Hide not your face from me&hellip; Let me hear in the morning of your steadfast love, for in you I trust. Make me know the way I should go, for to you I lift up my soul.&rdquo; The prayer becomes a cry for direction and renewal: &ldquo;Teach me to do your will, for you are my God! Let your good Spirit lead me on level ground.&rdquo;",
  },
  {
    title: "4. For Your Name&rsquo;s Sake (vv. 11&ndash;12)",
    color: GREEN,
    body:
      "The psalm closes as it began &mdash; on God&rsquo;s character rather than David&rsquo;s deserving: &ldquo;For your name&rsquo;s sake, O LORD, preserve my life! In your righteousness bring my soul out of trouble! And in your steadfast love you will cut off my enemies&hellip; for I am your servant.&rdquo; Deliverance is asked for the honor of God&rsquo;s own name and grounded in his steadfast love.",
  },
];

const CONTEXT = [
  {
    title: "A Psalm of David",
    color: PURPLE,
    body:
      "Psalm 143 is titled &ldquo;A Psalm of David.&rdquo; It is the prayer of a man hard-pressed by enemies, his life crushed to the ground, his spirit failing. Yet for all its distress it is remarkably God-centered: David appeals throughout to the LORD&rsquo;s faithfulness, righteousness, and steadfast love, never to his own record.",
  },
  {
    title: "The Last Penitential Psalm",
    color: ROSE,
    body:
      "Psalm 143 is the seventh and final of the seven Penitential Psalms used in Christian devotion (6, 32, 38, 51, 102, 130, 143). It completes that ancient sequence of prayers for seasons of repentance. Its great penitential note is verse 2 &mdash; &ldquo;no one living is righteous before you&rdquo; &mdash; a confession of universal sinfulness that throws the soul entirely on grace.",
  },
  {
    title: "A Fountain for Paul&rsquo;s Gospel",
    color: GOLD,
    body:
      "&ldquo;Enter not into judgment with your servant, for no one living is righteous before you&rdquo; (v. 2) is a foundational text for the doctrine of justification by grace. Paul echoes its language in Romans 3:20 (&ldquo;by works of the law no human being will be justified in his sight&rdquo;) and Galatians 2:16. The psalm models grace-based prayer: it appeals to mercy, not merit.",
  },
  {
    title: "The Spirit as Personal Guide",
    color: TEAL,
    body:
      "&ldquo;Teach me to do your will, for you are my God! Let your good Spirit lead me on level ground&rdquo; (v. 10) is one of the few places in the Old Testament where God&rsquo;s Spirit appears as a personal guide for daily obedience. It anticipates the New Testament teaching on walking by the Spirit (Romans 8:14; Galatians 5:16&ndash;25), where the Spirit leads the children of God.",
  },
];

const THEMES = [
  {
    id: "righteousness",
    title: "Appeal to God&rsquo;s Faithfulness, Not Our Merit",
    color: ROSE,
    body:
      "&ldquo;Hear my prayer, O LORD; give ear to my pleas for mercy! In your faithfulness answer me, in your righteousness!&rdquo; (v. 1). From the first breath, David grounds his hope in God&rsquo;s character, not his own performance. He pleads God&rsquo;s <em>faithfulness</em> (his covenant reliability), his <em>righteousness</em> (his commitment to do right by his people), and his <em>mercy</em>. This is the architecture of every gospel prayer: we come not on the strength of who we are but on the strength of who God is. The whole weight of the petition rests on grace.",
    refs: "Daniel 9:18; Psalm 31:1; Romans 3:21&ndash;26; Titus 3:5",
  },
  {
    id: "sin",
    title: "No One Living Is Righteous Before You",
    color: GOLD,
    body:
      "&ldquo;Enter not into judgment with your servant, for no one living is righteous before you&rdquo; (v. 2). This is the theological heart of the psalm and one of Scripture&rsquo;s clearest confessions of universal sin. If God were to bring even his servant into judgment on the basis of the law, no one &mdash; not David, not the most devout saint &mdash; could be acquitted. Paul builds his doctrine of justification on this very language (Romans 3:20; Galatians 2:16). The verse demolishes every claim to self-righteousness and leaves us with one hope: to be justified freely by grace.",
    refs: "Romans 3:19&ndash;20, 23&ndash;24; Galatians 2:16; Job 9:2&ndash;3; Ecclesiastes 7:20",
  },
  {
    id: "remember",
    title: "Remembering God&rsquo;s Works in the Dark",
    color: PURPLE,
    body:
      "&ldquo;I remember the days of old; I meditate on all that you have done; I ponder the work of your hands. I stretch out my hands to you; my soul thirsts for you like a parched land&rdquo; (vv. 5&ndash;6). When the enemy had crushed his life to the ground and his spirit was fainting, David did not stare only at his trouble; he deliberately turned his mind to God&rsquo;s past faithfulness. Remembering, meditating, pondering &mdash; this is the discipline of faith under pressure. And from that remembering rises a deep thirst: a soul like parched land reaching out for the only water that can satisfy it.",
    refs: "Psalm 77:11&ndash;12; Psalm 42:1&ndash;2; Psalm 63:1; Lamentations 3:21&ndash;23",
  },
  {
    id: "morning",
    title: "Hearing of His Steadfast Love in the Morning",
    color: TEAL,
    body:
      "&ldquo;Let me hear in the morning of your steadfast love, for in you I trust. Make me know the way I should go, for to you I lift up my soul&rdquo; (v. 8). After the long night of distress, David looks for the dawn &mdash; and what he longs to hear with the new day is God&rsquo;s <em>steadfast love</em> (<em>hesed</em>). His trust is anchored not in changed circumstances but in unchanging covenant love. And love leads naturally to guidance: the one who lifts up his soul to God also asks to be shown the way he should go.",
    refs: "Lamentations 3:22&ndash;23; Psalm 30:5; Psalm 5:3; Psalm 90:14",
  },
  {
    id: "spirit",
    title: "Teach Me to Do Your Will by Your Spirit",
    color: GREEN,
    body:
      "&ldquo;Teach me to do your will, for you are my God! Let your good Spirit lead me on level ground&rdquo; (v. 10). David does not merely want to escape his enemies; he wants to obey his God. He asks to be taught God&rsquo;s will and to be led by God&rsquo;s &ldquo;good Spirit&rdquo; onto &ldquo;level ground&rdquo; &mdash; a path that is straight, safe, and clear. This is a remarkable Old Testament glimpse of the Spirit as a personal guide for daily living, anticipating the New Testament promise that those led by the Spirit of God are his children.",
    refs: "Romans 8:14; Galatians 5:16&ndash;25; Psalm 25:4&ndash;5; John 16:13",
  },
];

const VERSES = [
  {
    id: "v1-2",
    ref: "Psalm 143:1&ndash;2",
    title: "In Your Righteousness Answer Me",
    color: ROSE,
    body:
      "&ldquo;Hear my prayer, O LORD; give ear to my pleas for mercy! In your faithfulness answer me, in your righteousness! Enter not into judgment with your servant, for no one living is righteous before you.&rdquo; David opens by appealing entirely to God&rsquo;s character &mdash; faithfulness, righteousness, mercy. Then he makes the great confession that shapes the whole psalm: if God were to bring even his servant to judgment, no living person could stand, &ldquo;for no one living is righteous before you.&rdquo; This verse becomes a cornerstone of the New Testament doctrine of justification (Romans 3:20; Galatians 2:16). David asks not to be vindicated by his record but to be spared by God&rsquo;s grace.",
  },
  {
    id: "v3-6",
    ref: "Psalm 143:3&ndash;6",
    title: "My Soul Thirsts for You Like a Parched Land",
    color: GOLD,
    body:
      "&ldquo;For the enemy has pursued my soul; he has crushed my life to the ground&hellip; therefore my spirit faints within me; my heart within me is appalled. I remember the days of old; I meditate on all that you have done; I ponder the work of your hands. I stretch out my hands to you; my soul thirsts for you like a parched land.&rdquo; The pressure is crushing &mdash; David&rsquo;s very life is pressed into the dust and his spirit faints. But notice his response: rather than spiral inward, he turns his thoughts to God&rsquo;s past works, remembering, meditating, pondering. And from that remembering springs a thirst, the longing of dry ground for rain &mdash; outstretched hands reaching for the living God.",
  },
  {
    id: "v7-8",
    ref: "Psalm 143:7&ndash;8",
    title: "Let Me Hear in the Morning of Your Love",
    color: TEAL,
    body:
      "&ldquo;Answer me quickly, O LORD! My spirit fails! Hide not your face from me, lest I be like those who go down to the pit. Let me hear in the morning of your steadfast love, for in you I trust. Make me know the way I should go, for to you I lift up my soul.&rdquo; The need is urgent &mdash; David&rsquo;s spirit is failing and he dreads the hidden face of God. He longs for the dawn and for what the dawn should bring: a fresh word of God&rsquo;s steadfast love. His trust does not rest on relief but on God himself. And the one who trusts also asks to be guided: &ldquo;make me know the way I should go.&rdquo;",
  },
  {
    id: "v9-10",
    ref: "Psalm 143:9&ndash;10",
    title: "Let Your Good Spirit Lead Me",
    color: PURPLE,
    body:
      "&ldquo;Deliver me from my enemies, O LORD! I have fled to you for refuge. Teach me to do your will, for you are my God! Let your good Spirit lead me on level ground.&rdquo; David has run to God as his only refuge. But his deepest request is not merely rescue from enemies &mdash; it is to be taught God&rsquo;s will and led by God&rsquo;s &ldquo;good Spirit&rdquo; onto &ldquo;level ground.&rdquo; Even in crisis, his heart is set on obedience, and he knows he cannot walk the path on his own. This is one of the Old Testament&rsquo;s clearest prayers for the Spirit&rsquo;s personal guidance in everyday discipleship.",
  },
  {
    id: "v11-12",
    ref: "Psalm 143:11&ndash;12",
    title: "For Your Name&rsquo;s Sake, Preserve My Life",
    color: GREEN,
    body:
      "&ldquo;For your name&rsquo;s sake, O LORD, preserve my life! In your righteousness bring my soul out of trouble! And in your steadfast love you will cut off my enemies, and you will destroy all the adversaries of my soul, for I am your servant.&rdquo; The psalm ends where it began &mdash; on God&rsquo;s honor, not David&rsquo;s deserving. He asks deliverance &ldquo;for your name&rsquo;s sake,&rdquo; appealing to God&rsquo;s righteousness and steadfast love. Even his final identity is one of dependence: &ldquo;for I am your servant.&rdquo; The whole prayer rests, first to last, on the character and covenant love of God.",
  },
];

const APPLICATIONS = [
  {
    title: "Pray on the Ground of Grace, Not Merit",
    color: ROSE,
    body:
      "David never once asks God to answer because he deserves it. He appeals to God&rsquo;s faithfulness, righteousness, and steadfast love &mdash; and confesses, &ldquo;no one living is righteous before you.&rdquo; Learn to pray the same way. Stop trying to earn a hearing by your record; come instead on the strength of who God is and what Christ has done. The most freeing posture in prayer is to ask for mercy rather than to plead your goodness.",
  },
  {
    title: "Fight the Darkness by Remembering",
    color: PURPLE,
    body:
      "When the enemy crushes your life to the ground and your spirit faints, do what David did: &ldquo;I remember the days of old; I meditate on all that you have done.&rdquo; Deliberately rehearse God&rsquo;s past faithfulness &mdash; in Scripture, in history, in your own life. Memory is a weapon against despair. Pondering the works of God&rsquo;s hands stirs a thirst for him that present circumstances cannot quench but his presence can.",
  },
  {
    title: "Listen for His Love Each Morning",
    color: TEAL,
    body:
      "&ldquo;Let me hear in the morning of your steadfast love.&rdquo; Begin each new day by anchoring your heart not in your circumstances but in God&rsquo;s unchanging <em>hesed</em>, which is &ldquo;new every morning&rdquo; (Lamentations 3:23). Let the first thing you reach for be the assurance of his covenant love, and from that security ask, &ldquo;Make me know the way I should go.&rdquo; Love heard in the morning steadies the whole day.",
  },
  {
    title: "Ask the Spirit to Lead You on Level Ground",
    color: GREEN,
    body:
      "David&rsquo;s deepest desire was not escape but obedience: &ldquo;Teach me to do your will&hellip; let your good Spirit lead me on level ground.&rdquo; Make that your prayer too. The Christian does not walk the path of obedience by willpower alone; we are led by the Spirit (Romans 8:14; Galatians 5:16&ndash;25). Ask daily to be taught God&rsquo;s will and led by his Spirit onto ground that is level, clear, and safe.",
  },
];

const REFLECTION = [
  "David appeals to God&rsquo;s &ldquo;faithfulness&rdquo; and &ldquo;righteousness,&rdquo; never to his own merit. When you pray, do you tend to come on the basis of grace or of your own goodness? What would change if you prayed more like David?",
  "Sit with verse 2: &ldquo;no one living is righteous before you.&rdquo; How does honestly facing your own un-righteousness lead you toward, rather than away from, the gospel of justification by grace?",
  "In the dark, David &ldquo;remembered&hellip; meditated&hellip; pondered&rdquo; God&rsquo;s past works. What specific acts of God&rsquo;s faithfulness could you rehearse the next time your spirit faints?",
  "David longed to &ldquo;hear in the morning&rdquo; of God&rsquo;s steadfast love. What would it look like to begin your mornings by anchoring in God&rsquo;s <em>hesed</em> before facing the day&rsquo;s demands?",
  "Verse 10 prays, &ldquo;Let your good Spirit lead me on level ground.&rdquo; In what area of your life do you most need the Spirit&rsquo;s guidance right now? Have you actually asked to be led?",
  "David&rsquo;s deepest request was not merely rescue but to &ldquo;do your will.&rdquo; Is your prayer life more about escaping trouble or about learning obedience? How might both belong together?",
];

const PRAYER =
  "O LORD, hear my prayer; give ear to my pleas for mercy. In your faithfulness answer me, in your righteousness &mdash; and do not enter into judgment with me, for no one living is righteous before you. When the enemy crushes my life to the ground and my spirit faints, teach me to remember all that you have done and to thirst for you like parched land for rain. Let me hear in the morning of your steadfast love, for in you I trust. Teach me to do your will, for you are my God, and let your good Spirit lead me on level ground. For your name&rsquo;s sake, preserve my life, for I am your servant. Through Jesus Christ, in whom alone I am counted righteous, I pray. Amen.";

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 143: In Your Righteousness Answer Me" },
  { videoId: "OjJ7GkWCHvA", title: "No One Living Is Righteous Before You" },
  { videoId: "pHBzJ2dVXgk", title: "Teach Me to Do Your Will" },
  { videoId: "3sO5FH2ybPY", title: "Let Your Good Spirit Lead Me on Level Ground" },
];

const RELATED = [
  { label: "Psalm 130 Guide", href: "/psalm-130-guide" },
  { label: "Psalm 102 Guide", href: "/psalm-102-guide" },
  { label: "Justification by Grace", href: "/justification-guide" },
  { label: "Walking by the Spirit", href: "/holy-spirit-guide" },
];

export default function Psalm143Guide() {
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
              Penitential Psalms
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Psalm 143: Teach Me to Do Your Will
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            The seventh and last of the Penitential Psalms &mdash; David&rsquo;s grace-based prayer that appeals not to
            his own merit but to God&rsquo;s faithfulness, confesses that no one living is righteous, and asks the good
            Spirit to lead him on level ground.
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
              Key Verse &mdash; Psalm 143:10
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={h(
                "&ldquo;Teach me to do your will, for you are my God! Let your good Spirit lead me on level ground.&rdquo;"
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
                  "Psalm 143 is the last of the seven Penitential Psalms &mdash; the prayer of David, hard-pressed by enemies and crushed in spirit, yet entirely God-centered. He appeals from the first verse to God&rsquo;s faithfulness and righteousness, not his own merit, and makes the great confession, &ldquo;no one living is righteous before you,&rdquo; a text Paul draws on for the doctrine of justification. Crushed and fainting, David fights the darkness by remembering God&rsquo;s past works and thirsting for him like parched land. He longs to hear of God&rsquo;s steadfast love in the morning, asks to be shown the way he should go, and prays the beautiful petition, &ldquo;Teach me to do your will&hellip; let your good Spirit lead me on level ground.&rdquo; From first to last the prayer rests on the character and covenant love of God."
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
              Five great movements run through this psalm &mdash; from the appeal to grace, through the confession of
              sin, to the prayer for the Spirit&rsquo;s guidance. Expand each to explore the theme and its
              cross-references.
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
              Walk through Psalm 143 in its five natural movements. Expand each section to read the text and a brief
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
