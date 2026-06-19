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

const STRUCTURE = [
  {
    range: "Psalm 40:1-3",
    label: "The Song of Deliverance",
    color: GREEN,
    body: "The psalm opens with a testimony of rescue already received. David recalls how he &ldquo;waited patiently for the LORD,&rdquo; how the LORD &ldquo;inclined&rdquo; and heard, drew him up from the pit and the miry bog, set his feet on a rock, and put a &ldquo;new song&rdquo; in his mouth. Past mercy becomes present praise.",
  },
  {
    range: "Psalm 40:4-5",
    label: "Blessed Is the One Who Trusts",
    color: TEAL,
    body: "A beatitude flows out of the rescue: &ldquo;Blessed is the man who makes the LORD his trust.&rdquo; David widens his gaze from his own deliverance to the &ldquo;wondrous deeds&rdquo; God has multiplied, more than can be numbered or told.",
  },
  {
    range: "Psalm 40:6-8",
    label: "Obedience Above Sacrifice",
    color: GOLD,
    body: "The heart of the psalm: &ldquo;Sacrifice and offering you have not desired, but you have given me an open ear.&rdquo; David declares, &ldquo;I delight to do your will, O my God; your law is within my heart.&rdquo; Hebrews 10:5-7 takes these very words on the lips of Christ.",
  },
  {
    range: "Psalm 40:9-10",
    label: "Proclaiming the Good News",
    color: PURPLE,
    body: "Delivered and devoted, David refuses to keep silent: &ldquo;I have told the glad news of deliverance in the great congregation.&rdquo; He has not concealed God&rsquo;s steadfast love, faithfulness, and salvation from the assembly.",
  },
  {
    range: "Psalm 40:11-17",
    label: "The Turn to Urgent Petition",
    color: ROSE,
    body: "The mood shifts from thanksgiving to fresh need. Evils encompass him, his iniquities overtake him, his heart fails. &ldquo;Be pleased, O LORD, to deliver me!&rdquo; Yet even here the closing word is hope: &ldquo;The Lord takes thought for me.&rdquo;",
  },
];

const THEMES = [
  {
    id: "waiting",
    title: "Patient Waiting Rewarded",
    color: GREEN,
    body: "&ldquo;I waited patiently for the LORD; he inclined to me and heard my cry.&rdquo; The Hebrew is emphatic &mdash; literally &ldquo;waiting, I waited.&rdquo; This is not passive resignation but active, hope-filled endurance that keeps its eyes on God. The reward is not described as deserved but as gift: God &ldquo;inclined&rdquo; &mdash; he bent down to listen. Biblical waiting is never wasted; it is the soil in which deliverance grows.",
    refs: "Psalm 27:14 &middot; Psalm 130:5-6 &middot; Isaiah 40:31 &middot; Lamentations 3:25-26",
  },
  {
    id: "pit",
    title: "Out of the Pit, Onto the Rock",
    color: TEAL,
    body: "&ldquo;He drew me up from the pit of destruction, out of the miry bog, and set my feet upon a rock, making my steps secure.&rdquo; The imagery moves from a place of sinking helplessness &mdash; mud that gives no foothold &mdash; to immovable stability. Salvation is pictured not merely as escape but as relocation: from chaos to security, from death to firm ground. The rock anticipates Christ, the sure foundation on whom our steps are made secure.",
    refs: "Psalm 18:2 &middot; Psalm 69:1-2 &middot; Psalm 69:14-15 &middot; Matthew 7:24-25",
  },
  {
    id: "newsong",
    title: "A New Song in the Mouth",
    color: PURPLE,
    body: "&ldquo;He put a new song in my mouth, a song of praise to our God.&rdquo; Fresh mercy calls for fresh praise. The &ldquo;new song&rdquo; recurs across Scripture, marking decisive acts of God that demand a worship not borrowed from the past but born of present experience. It reaches its climax in heaven, where the redeemed sing a new song to the Lamb who was slain &mdash; the song every rescue from the pit rehearses.",
    refs: "Psalm 33:3 &middot; Psalm 96:1 &middot; Psalm 98:1 &middot; Revelation 5:9",
  },
  {
    id: "obedience",
    title: "Obedience Above Sacrifice",
    color: GOLD,
    body: "&ldquo;Sacrifice and offering you have not desired, but you have given me an open ear... I delight to do your will, O my God.&rdquo; God never abolished sacrifice, but he always desired the heart behind it. Ritual without obedience is empty. The &ldquo;open ear&rdquo; signals a servant ready to hear and obey. This is the prophets&rsquo; great refrain &mdash; mercy and obedience over mere ceremony &mdash; and the posture Christ embodied perfectly.",
    refs: "1 Samuel 15:22 &middot; Psalm 51:16-17 &middot; Hosea 6:6 &middot; Micah 6:6-8",
  },
  {
    id: "messianic",
    title: "Fulfilled in Christ (Hebrews 10)",
    color: ROSE,
    body: "Hebrews 10:5-7 places Psalm 40:6-8 on the lips of Christ entering the world: &ldquo;Sacrifices and offerings you have not desired, but a body you have prepared for me... Behold, I have come to do your will, O God.&rdquo; Following the Greek of the Septuagint, &ldquo;open ear&rdquo; becomes &ldquo;a body you have prepared for me&rdquo; &mdash; the incarnation itself. Christ is the obedient Son whose perfect doing of God&rsquo;s will replaces the old sacrificial system once for all.",
    refs: "Hebrews 10:5-10 &middot; John 4:34 &middot; John 6:38 &middot; Philippians 2:8",
  },
  {
    id: "rhythm",
    title: "From Thanksgiving to Petition",
    color: GREEN,
    body: "The psalm makes a striking move: after ten verses of grateful testimony, it turns to urgent pleading &mdash; &ldquo;Be pleased, O LORD, to deliver me!&rdquo; This is the honest rhythm of faith. Remembered mercy does not mean present ease. The believer praises God for past deliverance even while crying out for new help. Gratitude and need are not enemies; together they form the breathing of a trusting heart.",
    refs: "Psalm 42:5-6 &middot; Psalm 116:1-7 &middot; 2 Corinthians 1:9-10 &middot; Philippians 4:6",
  },
];

const VERSES = [
  {
    id: "v1",
    ref: "Psalm 40:1-3",
    title: "Drawn Up From the Pit",
    color: GREEN,
    body: "&ldquo;I waited patiently for the LORD; he inclined to me and heard my cry.&rdquo; David begins where deliverance always begins &mdash; in waiting. God&rsquo;s answer is described in vivid stages: he drew him up from the pit of destruction and the miry bog, set his feet on a rock, made his steps secure, and put a new song of praise in his mouth. The intended result is evangelistic: &ldquo;Many will see and fear, and put their trust in the LORD.&rdquo; One person&rsquo;s rescue becomes many people&rsquo;s faith.",
  },
  {
    id: "v2",
    ref: "Psalm 40:4-5",
    title: "Blessed Is the One Who Trusts",
    color: TEAL,
    body: "&ldquo;Blessed is the man who makes the LORD his trust, who does not turn to the proud, to those who go astray after a lie.&rdquo; True blessedness is anchored in God, not in self-reliance or false refuges. David then erupts in wonder at the sheer abundance of God&rsquo;s works: the &ldquo;wondrous deeds&rdquo; and thoughts toward his people are so many that &ldquo;none can compare with you... they are more than can be told.&rdquo; The rescued man becomes a worshiper overwhelmed by grace.",
  },
  {
    id: "v3",
    ref: "Psalm 40:6-8",
    title: "I Delight to Do Your Will",
    color: GOLD,
    body: "&ldquo;In sacrifice and offering you have not delighted, but you have given me an open ear.&rdquo; God wants obedient hearts more than ritual. David responds, &ldquo;Behold, I have come; in the scroll of the book it is written of me: I delight to do your will, O my God; your law is within my heart.&rdquo; Hebrews 10:5-7 quotes these verses from the Septuagint &mdash; where &ldquo;open ear&rdquo; reads &ldquo;a body you have prepared for me&rdquo; &mdash; and applies them to Christ&rsquo;s incarnation and obedience, the supreme example of doing God&rsquo;s will.",
  },
  {
    id: "v4",
    ref: "Psalm 40:9-10",
    title: "The Glad News Proclaimed",
    color: PURPLE,
    body: "&ldquo;I have told the glad news of deliverance in the great congregation; behold, I have not restrained my lips, as you know, O LORD.&rdquo; Grace cannot be kept private. David has not hidden God&rsquo;s righteousness within his heart but spoken of his faithfulness and salvation. He has not concealed God&rsquo;s steadfast love and faithfulness from the great assembly. Genuine deliverance overflows into public testimony &mdash; the rescued become heralds.",
  },
  {
    id: "v5",
    ref: "Psalm 40:11-13",
    title: "Be Pleased to Deliver Me",
    color: ROSE,
    body: "The psalm pivots. &ldquo;Do not withhold your mercy from me, O LORD; let your steadfast love and your faithfulness ever preserve me.&rdquo; For evils have encompassed him beyond number; his iniquities have overtaken him until he cannot see; his heart fails him. The honest admission of sin sits alongside the cry for rescue: &ldquo;Be pleased, O LORD, to deliver me! O LORD, make haste to help me!&rdquo; Past grace fuels present urgency.",
  },
  {
    id: "v6",
    ref: "Psalm 40:14-17",
    title: "The Lord Takes Thought for Me",
    color: GREEN,
    body: "David prays that those who seek his life would be put to shame and turned back, while &ldquo;all who seek you&rdquo; would rejoice and say continually, &ldquo;Great is the LORD!&rdquo; Then the closing confession, all the more striking for its honesty: &ldquo;As for me, I am poor and needy, but the Lord takes thought for me. You are my help and my deliverer; do not delay, O my God.&rdquo; Weakness owned becomes the very place where God&rsquo;s care is most surely known.",
  },
];

const APPLICATIONS = [
  {
    id: "a1",
    title: "Learn the Discipline of Waiting",
    color: GREEN,
    body: "&ldquo;I waited patiently for the LORD&rdquo; is the testimony of someone who endured before he was rescued. We live in a culture of immediacy, but God often works in the slow space between the cry and the answer. Waiting is not wasted time; it is the place where trust is forged. Ask the Lord to incline his ear &mdash; and keep your eyes on him while you wait. The deliverance you long for may already be on its way up from the pit.",
  },
  {
    id: "a2",
    title: "Sing the New Song of Testimony",
    color: PURPLE,
    body: "When God lifts you out of a miry bog &mdash; a season of depression, sin, fear, or failure &mdash; he intends your story to strengthen others: &ldquo;Many will see and fear, and put their trust in the LORD.&rdquo; Do not bury your rescue in silence. Tell the glad news in the great congregation. Your new song is not for you alone; it is a means God uses to draw others from their own pits onto the rock.",
  },
  {
    id: "a3",
    title: "Offer Obedience, Not Just Religion",
    color: GOLD,
    body: "&ldquo;Sacrifice and offering you have not desired, but you have given me an open ear.&rdquo; It is possible to keep up religious activity while withholding the heart. God asks first for an open ear and a willing will: &ldquo;I delight to do your will, O my God.&rdquo; Examine where you are substituting ceremony for surrender. The obedience God seeks is not grim duty but delight &mdash; the joy of a child who loves to please the Father.",
  },
  {
    id: "a4",
    title: "Let Christ&rsquo;s Obedience Anchor You",
    color: ROSE,
    body: "Hebrews 10 shows that the perfect &ldquo;I have come to do your will&rdquo; was spoken by Christ, who offered his prepared body once for all. Where your obedience falters, his never did. Your standing before God does not rest on the consistency of your devotion but on the finished obedience of the Son. Rest there. Then, freed from striving for acceptance, obey out of gratitude rather than fear.",
  },
  {
    id: "a5",
    title: "Pray Honestly in the Rhythm of Faith",
    color: TEAL,
    body: "Psalm 40 gives you permission to thank God and plead with him in the same breath. You can praise him for yesterday&rsquo;s rescue while crying &ldquo;make haste to help me&rdquo; today. Faith is not pretending you have no needs; it is bringing real needs to a God who has already proven faithful. When you feel &ldquo;poor and needy,&rdquo; preach this truth to yourself: &ldquo;But the Lord takes thought for me.&rdquo;",
  },
];

const QUESTIONS = [
  "Where in your life are you being called to &ldquo;wait patiently for the LORD&rdquo; right now, and what makes that waiting hard?",
  "Can you name a &ldquo;pit&rdquo; or &ldquo;miry bog&rdquo; God has drawn you out of? Have you let that rescue become a &ldquo;new song&rdquo; others can hear?",
  "In what ways might you be offering God religious activity while withholding an &ldquo;open ear&rdquo; of true obedience?",
  "How does it change your daily walk to know that Christ already said and lived the perfect &ldquo;I have come to do your will, O God&rdquo; on your behalf?",
  "When you feel &ldquo;poor and needy,&rdquo; what would it look like to preach the line &ldquo;but the Lord takes thought for me&rdquo; to your own heart?",
  "Psalm 40 moves from thanksgiving to fresh petition. How can your prayers hold gratitude for past mercy and honest cries for present help together?",
];

const VIDEO_ITEMS = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 40 Overview &mdash; Waiting and Rescue" },
  { videoId: "Q2oNOlXzBhY", title: "Out of the Pit: The Imagery of Psalm 40" },
  { videoId: "8phkAg8PMHE", title: "I Delight to Do Your Will &mdash; Psalm 40 and Hebrews 10" },
  { videoId: "fNk_zzaMoSs", title: "The New Song: From Thanksgiving to Petition" },
];

export default function Psalm40Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const card: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: "1.5rem",
  };

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
        {/* HERO */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>&#127925;</span>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: 2,
                color: GREEN,
                textTransform: "uppercase",
              }}
            >
              Psalms &middot; Book Study
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Psalm 40: From the Pit to the New Song
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680, marginBottom: "1.5rem" }}>
            A thanksgiving for deliverance that turns into a cry for help &mdash; and a messianic psalm whose words
            Hebrews places on the lips of Christ. Trace the movement from waiting, to rescue, to obedience, to renewed
            petition.
          </p>
          <div
            style={{
              background: `${GREEN}10`,
              border: `1px solid ${GREEN}30`,
              borderLeft: `4px solid ${GREEN}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 800, color: GREEN, letterSpacing: 1, marginBottom: "0.5rem" }}>
              KEY VERSE &middot; PSALM 40:1-2
            </div>
            <p
              style={{ color: TEXT, fontSize: "1.15rem", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;I waited patiently for the LORD; he inclined to me and heard my cry. He drew me up from the pit of destruction, out of the miry bog, and set my feet upon a rock, making my steps secure.&rdquo;",
              }}
            />
          </div>
        </div>

        {/* TAB BAR */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
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

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GREEN }}>Summary</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 40 is a psalm of David in two movements. The first (vv. 1-10) is grateful testimony: God heard the psalmist&rsquo;s cry, drew him up from the &ldquo;miry bog,&rdquo; set his feet on a rock, and gave him a &ldquo;new song&rdquo; of praise. Out of that rescue flows a beatitude on those who trust the LORD, a celebration of God&rsquo;s countless wondrous deeds, a declaration that God desires an &ldquo;open ear&rdquo; of obedience more than sacrifice, and bold public proclamation of God&rsquo;s steadfast love. The second movement (vv. 11-17) turns to urgent petition as fresh troubles and the weight of his own iniquities press in: &ldquo;Be pleased, O LORD, to deliver me!&rdquo; The psalm ends not in resolution but in trusting confession &mdash; &ldquo;I am poor and needy, but the Lord takes thought for me.&rdquo;",
                }}
              />
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>Context</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 40 belongs to the first book of the Psalter and is attributed to David. Its closing verses (40:13-17) reappear, with slight variation, as the independent Psalm 70 &mdash; a sign of how this prayer was reused in Israel&rsquo;s worship. The psalm is best known for verses 6-8, which the writer of Hebrews quotes (from the Septuagint) and applies directly to the incarnation and obedience of Jesus Christ in Hebrews 10:5-7. There the &ldquo;open ear&rdquo; of the Hebrew becomes &ldquo;a body you have prepared for me,&rdquo; making this one of the clearest Old Testament anticipations of Christ&rsquo;s coming to do the will of God and to replace the old sacrificial system.",
                }}
              />
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>Structure</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {STRUCTURE.map((s) => (
                  <div
                    key={s.range}
                    style={{
                      background: `${s.color}0A`,
                      border: `1px solid ${s.color}25`,
                      borderLeft: `3px solid ${s.color}`,
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.35rem" }}>
                      <span style={{ fontWeight: 800, color: s.color, fontSize: "0.85rem" }}>{s.range}</span>
                      <span style={{ fontWeight: 700, color: TEXT }}>{s.label}</span>
                    </div>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.body }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GREEN }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Six threads run through Psalm 40, weaving together past rescue, present obedience, and the messianic
              fulfillment in Christ. Tap each to open.
            </p>
            {THEMES.map((t) => {
              const isOpen = open === t.id;
              return (
                <div key={t.id}>
                  <button
                    type="button"
                    onClick={() => toggle(t.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 1.25rem",
                      background: isOpen ? `${t.color}12` : "transparent",
                      border: `1px solid ${isOpen ? t.color + "40" : BORDER}`,
                      borderRadius: 12,
                      cursor: "pointer",
                      marginBottom: 8,
                      color: TEXT,
                      fontWeight: 700,
                      transition: "all .2s",
                    }}
                  >
                    <span>{t.title}</span>
                    <span style={{ color: t.color }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${t.color}0A`,
                        border: `1px solid ${t.color}20`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: t.body }} />
                      <p style={{ color: t.color, fontSize: "0.85rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Cross-references: " + t.refs }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Walk through Psalm 40 in six sections, from the song of deliverance to the closing confession of need and
              trust.
            </p>
            {VERSES.map((v) => {
              const isOpen = open === v.id;
              return (
                <div key={v.id}>
                  <button
                    type="button"
                    onClick={() => toggle(v.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 1.25rem",
                      background: isOpen ? `${v.color}12` : "transparent",
                      border: `1px solid ${isOpen ? v.color + "40" : BORDER}`,
                      borderRadius: 12,
                      cursor: "pointer",
                      marginBottom: 8,
                      color: TEXT,
                      fontWeight: 700,
                      transition: "all .2s",
                    }}
                  >
                    <span>
                      <span style={{ color: v.color, fontWeight: 800 }}>{v.ref}</span>
                      <span style={{ fontWeight: 400, color: MUTED }}> &mdash; {v.title}</span>
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
                      <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.body }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Living Psalm 40</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {APPLICATIONS.map((a) => (
                  <div
                    key={a.id}
                    style={{
                      background: `${a.color}08`,
                      border: `1px solid ${a.color}25`,
                      borderRadius: 12,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <h3 style={{ fontWeight: 800, color: a.color, marginBottom: "0.4rem" }} dangerouslySetInnerHTML={{ __html: a.title }} />
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: a.body }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>
                Reflection Questions
              </h2>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {QUESTIONS.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: ROSE }}>Video Teaching</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {VIDEO_ITEMS.map((v) => (
                  <div key={v.videoId}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: "0.85rem", marginTop: "0.5rem" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: `${GREEN}10`,
                border: `1px solid ${GREEN}30`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.2rem", marginBottom: "0.75rem", color: GREEN }}>Closing Prayer</h2>
              <p
                style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Father, you drew me up from the pit of destruction and set my feet upon the rock. Put a new song in my mouth, and let many see and trust in you. Teach me to wait patiently, to delight to do your will, and to offer you not empty sacrifice but an open ear. When evils encompass me and my own sin overtakes me, let me cry without shame, &ldquo;Be pleased, O LORD, to deliver me.&rdquo; I am poor and needy, but you take thought for me. You are my help and my deliverer; do not delay, O my God. Through Christ, who came to do your will, amen.",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
