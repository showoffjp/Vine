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

const THEME_ITEMS = [
  {
    id: "t-daynight",
    color: TEAL,
    title: "The Unrelenting Cry: Day and Night",
    html:
      "Psalm 88 begins not with despair but with address: &ldquo;O LORD, God of my salvation, I cry out day and night before you. Let my prayer come before you; incline your ear to my cry!&rdquo; (88:1&ndash;2). " +
      "This is the most important thing to notice about the darkest psalm in the Psalter: it is a prayer. The sufferer never stops crying out, and he never stops crying out *to God*. He calls the Lord &ldquo;God of my salvation&rdquo; even when he feels no salvation at all. The crying is continual &mdash; &ldquo;day and night,&rdquo; &ldquo;every day&rdquo; (88:9), &ldquo;in the morning&rdquo; (88:13). There is no hour exempt from the appeal. " +
      "Faith, this psalm insists, is not the absence of darkness but the refusal to stop addressing God within it. Cross-references: Psalm 22:2 (&ldquo;by night, but I find no rest&rdquo;); Luke 18:7 (the persistent cry of God&rsquo;s elect &ldquo;day and night&rdquo;); 1 Thessalonians 5:17 (&ldquo;pray without ceasing&rdquo;).",
  },
  {
    id: "t-sheol",
    color: PURPLE,
    title: "A Soul Full of Troubles, Near to Death",
    html:
      "&ldquo;For my soul is full of troubles, and my life draws near to Sheol. I am counted among those who go down to the pit; I am a man who has no strength, like one set loose among the dead&rdquo; (88:3&ndash;5). " +
      "The sufferer describes himself as already among the dead &mdash; cut off, forgotten, beyond the reach of God&rsquo;s remembering hand: &ldquo;like the slain that lie in the grave, like those whom you remember no more, for they are cut off from your hand&rdquo; (88:5). " +
      "This is the language of one who has lived so long under affliction that life and death have blurred together. He feels emptied of all strength. The psalm gives words to the experience of those who are near death, gravely ill, or so depleted by suffering that they feel they are already in the grave. Cross-references: Psalm 6:5; Psalm 30:9; Job 17:1; Jonah 2:2 (&ldquo;out of the belly of Sheol I cried&rdquo;).",
  },
  {
    id: "t-wrath",
    color: ROSE,
    title: "God Himself as the Source of the Affliction",
    html:
      "What makes Psalm 88 so agonizing is that the sufferer does not blame chance, or enemies, or his own sin &mdash; he traces his suffering directly to the hand of God: &ldquo;You have put me in the depths of the pit, in the regions dark and deep. Your wrath lies heavy upon me, and you overwhelm me with all your waves&rdquo; (88:6&ndash;7). " +
      "Again: &ldquo;Your wrath has swept over me; your dreadful assaults destroy me&rdquo; (88:16). The repeated word is &ldquo;you&rdquo; &mdash; you have put me, your wrath, your waves, your assaults. This is the boldest and most uncomfortable kind of prayer: the sufferer accuses God himself of being the author of his torment. " +
      "Yet this is precisely why it is in Scripture. It tells us that even this perception &mdash; that God has turned against us &mdash; can be brought to God in prayer, not hidden in shame. The complaint is addressed to the very one it accuses. Cross-references: Job 6:4; Job 16:12&ndash;14; Lamentations 3:1&ndash;18; Psalm 42:7.",
  },
  {
    id: "t-shun",
    color: GOLD,
    title: "The Loss of Every Human Comfort",
    html:
      "Suffering is compounded by isolation. &ldquo;You have caused my companions to shun me; you have made me a horror to them. I am shut in so that I cannot escape; my eye grows dim through sorrow&rdquo; (88:8&ndash;9). " +
      "And at the very end: &ldquo;You have caused my beloved and my friend to shun me; my companions have become darkness&rdquo; (88:18). The sufferer has lost not only his health and his hope but his people. Those who should comfort him have withdrawn, whether from fear, from helplessness, or from the sheer difficulty of being near such pain. " +
      "This names a real dimension of deep suffering: depression, terminal illness, and prolonged grief often drive away the very community a person most needs. The psalm validates the loneliness of the afflicted without scolding them for it. Cross-references: Job 19:13&ndash;19; Psalm 31:11; Psalm 38:11; Matthew 26:56 (&ldquo;they all left him and fled&rdquo;).",
  },
  {
    id: "t-questions",
    color: TEAL,
    title: "Honest Questions Flung at God",
    html:
      "In the middle of the psalm the sufferer flings a series of raw rhetorical questions at God: &ldquo;Do you work wonders for the dead? Do the departed rise up to praise you? Is your steadfast love declared in the grave, or your faithfulness in Abaddon? Are your wonders known in the darkness, or your righteousness in the land of forgetfulness?&rdquo; (88:10&ndash;12). " +
      "These are not faithless questions; they are an argument with God, pressing him to act *now*, while there is still life. The logic is: the dead cannot praise you, so save me while I can. This is the kind of bold, almost bargaining honesty the Psalms permit. " +
      "It assumes God cares about being praised and that the sufferer&rsquo;s life still matters to him. To question God this way is not to leave faith but to wrestle inside it. Cross-references: Psalm 6:5; Psalm 30:9; Psalm 115:17; Isaiah 38:18&ndash;19.",
  },
  {
    id: "t-darkness",
    color: PURPLE,
    title: "The Psalm That Ends in Darkness",
    html:
      "Every other lament in the Psalter eventually turns &mdash; &ldquo;but I trust,&rdquo; &ldquo;yet I will praise.&rdquo; Psalm 88 is the singular exception. It has no turn, no resolution, no closing note of hope. Its final word, in the Hebrew, is literally &ldquo;darkness&rdquo;: &ldquo;You have caused my beloved and my friend to shun me; my companions have become darkness&rdquo; (88:18). " +
      "This is not a failure of the psalm but its gift. By preserving a prayer that ends in unbroken darkness, Scripture itself testifies that suffering which does not yet resolve still belongs within the life of faith. God did not edit this prayer out. He included it. " +
      "For those in clinical depression, the dark night of the soul, terminal illness, or despair, Psalm 88 says: your darkness is not outside the reach of prayer. You do not have to manufacture a happy ending to be heard. The very fact that this prayer is in the Bible means God receives the prayers that come from the pit. Cross-references: Lamentations 5:20&ndash;22; Matthew 27:46; Hebrews 5:7.",
  },
];

const VERSE_ITEMS = [
  {
    id: "v1",
    ref: "Psalm 88:1-5",
    label: "I Cry Out Day and Night; My Life Draws Near to Sheol",
    color: TEAL,
    html:
      "&ldquo;O LORD, God of my salvation, I cry out day and night before you. Let my prayer come before you; incline your ear to my cry!&rdquo; (88:1&ndash;2). Even at its darkest, the psalm opens by calling God the God of *my salvation* &mdash; a confession held onto by sheer faith, not feeling. " +
      "Then the descent: &ldquo;For my soul is full of troubles, and my life draws near to Sheol. I am counted among those who go down to the pit; I am a man who has no strength&rdquo; (88:3&ndash;4). " +
      "He sees himself as already among the dead: &ldquo;like one set loose among the dead, like the slain that lie in the grave, like those whom you remember no more, for they are cut off from your hand&rdquo; (88:5). The strength is gone; the sense of being remembered by God is gone. Yet still he prays.",
  },
  {
    id: "v2",
    ref: "Psalm 88:6-9",
    label: "Your Wrath Lies Heavy Upon Me",
    color: ROSE,
    html:
      "Now the sufferer names God as the source of his anguish: &ldquo;You have put me in the depths of the pit, in the regions dark and deep. Your wrath lies heavy upon me, and you overwhelm me with all your waves&rdquo; (88:6&ndash;7). " +
      "His isolation is also laid at God&rsquo;s feet: &ldquo;You have caused my companions to shun me; you have made me a horror to them. I am shut in so that I cannot escape&rdquo; (88:8). The afflicted person feels trapped, abandoned, repulsive to others. " +
      "And yet the section ends not in silence but in persistent prayer: &ldquo;My eye grows dim through sorrow. Every day I call upon you, O LORD; I spread out my hands to you&rdquo; (88:9). Daily, with outstretched hands, he keeps coming &mdash; the posture of one who will not let go of God even while accusing him.",
  },
  {
    id: "v3",
    ref: "Psalm 88:10-12",
    label: "Do You Work Wonders for the Dead?",
    color: GOLD,
    html:
      "The center of the psalm is a volley of questions: &ldquo;Do you work wonders for the dead? Do the departed rise up to praise you? Is your steadfast love declared in the grave, or your faithfulness in Abaddon? Are your wonders known in the darkness, or your righteousness in the land of forgetfulness?&rdquo; (88:10&ndash;12). " +
      "These four questions are an argument with God: act while I still live, for the grave cannot praise you. They name the things the sufferer most longs to know are still true &mdash; God&rsquo;s wonders, his steadfast love, his faithfulness, his righteousness &mdash; and ask whether the darkness has put them out of reach. " +
      "This is faith pressing its case. The questions assume that God&rsquo;s love and faithfulness are real, and plead that they would reach into the pit. In the light of Christ&rsquo;s resurrection, the answer the psalmist could not yet see is: yes, God does work wonders even for the dead.",
  },
  {
    id: "v4",
    ref: "Psalm 88:13-18",
    label: "Why Do You Hide Your Face? My Companions Have Become Darkness",
    color: PURPLE,
    html:
      "Morning comes, and still he prays: &ldquo;But I, O LORD, cry to you; in the morning my prayer comes before you&rdquo; (88:13). Then the most piercing questions of all: &ldquo;O LORD, why do you cast my soul away? Why do you hide your face from me?&rdquo; (88:14). " +
      "He describes a lifetime of affliction: &ldquo;Afflicted and close to death from my youth up, I suffer your terrors; I am helpless. Your wrath has swept over me; your dreadful assaults destroy me&rdquo; (88:15&ndash;16). The waves of suffering surround him like a flood all day long (88:17). " +
      "And then the psalm ends &mdash; with no turn, no hope, no resolution: &ldquo;You have caused my beloved and my friend to shun me; my companions have become darkness&rdquo; (88:18). The final word is darkness. The prayer stops here, unresolved, yet still addressed to God. That it is preserved in Scripture is itself a quiet word of hope.",
  },
];

const APP_ITEMS = [
  {
    id: "a-permission",
    color: PURPLE,
    title: "Permission to Lament Without Resolution",
    html:
      "Much of Christian culture rushes the suffering toward a happy ending: &ldquo;but God is good,&rdquo; &ldquo;everything happens for a reason,&rdquo; &ldquo;just have faith.&rdquo; Psalm 88 refuses to be rushed. It is the one psalm that ends in darkness, and God put it in the Bible. " +
      "This is a gift. If you are in a season where you cannot yet see the light &mdash; where the turn to praise has not come and you cannot force it &mdash; Psalm 88 says you do not have to fake it. You are permitted to lament without resolution. The honest cry from the pit is not a lesser prayer; it is in the canon of Scripture as a model of faith under crushing weight. " +
      "Do not let anyone, including yourself, shame you for praying a prayer that does not yet end in sunshine. The psalmist&rsquo;s faith is shown not in a tidy conclusion but in the fact that he kept crying out to God.",
  },
  {
    id: "a-depression",
    color: TEAL,
    title: "A Companion in Depression and Despair",
    html:
      "Psalm 88 is one of Scripture&rsquo;s greatest gifts to those in clinical depression, the dark night of the soul, terminal illness, and despair. It does not explain suffering away or scold the sufferer for not feeling better. It simply gives voice to the experience: the troubles that fill the soul, the strength that is gone, the friends who have withdrawn, the felt absence of God. " +
      "If this is your experience, hear this: Scripture itself speaks your language. You are not uniquely faithless for feeling this way. A person of deep faith wrote these words. And note the psalm should be received with patience, not as a problem to be fixed in one sitting. " +
      "If you are walking with someone in this darkness, resist the urge to rush them to resolution. Sit with them in Psalm 88. Sometimes the most pastoral thing is not an answer but the willingness to stay in the dark alongside another and keep crying out to God on their behalf.",
  },
  {
    id: "a-christ",
    color: ROSE,
    title: "Christ in the Deepest Darkness",
    html:
      "Psalm 88 points forward to Christ in Gethsemane and on the cross. In the garden Jesus was &ldquo;sorrowful, even to death&rdquo; (Matthew 26:38); on the cross he cried, &ldquo;My God, my God, why have you forsaken me?&rdquo; (Matthew 27:46). The Son of God entered the deepest darkness and the silence of God. " +
      "Hebrews 5:7 says that in the days of his flesh he &ldquo;offered up prayers and supplications, with loud cries and tears.&rdquo; Christ knows the territory of Psalm 88 from the inside. He prayed in the dark; he felt forsaken; he was abandoned by his companions, who all fled. " +
      "This means that when you pray from your own pit, you do not pray to a God who is distant from darkness. You pray to one who went there ahead of you &mdash; and who, on the third day, brought light out of that very darkness. The unresolved darkness of Psalm 88 is taken up into the cross, and the cross was not the end of the story.",
  },
  {
    id: "a-prayer",
    color: GOLD,
    title: "God Does Not Reject the Prayers of the Pit",
    html:
      "The single most important truth of Psalm 88 is this: the sufferer never stops crying out *to* God, even while accusing God of hiding his face. And God preserved that prayer in Scripture. " +
      "That means God does not reject the prayers that come from the pit. He does not require us to clean ourselves up, find our hope, or manufacture trust before we are allowed to speak to him. The God of our salvation receives the raw, unfinished, even accusatory prayer of the one who is going under. " +
      "So keep praying &mdash; day and night, in the morning, every day, with outstretched hands &mdash; even if all you can manage is the cry itself. The direction of the prayer matters more than its resolution. To cry out to God in the dark is already an act of faith, and that cry is heard.",
  },
];

const REFLECTION_QUESTIONS = [
  "Psalm 88 keeps addressing God even in unbroken darkness. Where do you most need permission to bring an unresolved, honest cry to God rather than a tidy one?",
  "The psalmist calls God the &ldquo;God of my salvation&rdquo; while feeling no salvation at all. What truths about God can you hold onto by faith even when you cannot feel them?",
  "Verse 18 says &ldquo;my companions have become darkness.&rdquo; Have you known the isolation that deep suffering can bring? Who might God be calling you to sit with in their darkness?",
  "The psalm flings honest questions at God (vv. 10-12). Are there questions you have been afraid to ask God directly? What would it mean to bring them to him in prayer?",
  "Christ entered the deepest darkness and felt forsaken on the cross. How does knowing that Jesus has been in the pit before you change the way you pray from your own?",
  "God preserved this prayer in Scripture though it never resolves. How does that reshape the way you understand what counts as faithful prayer?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 88: The Darkest Psalm" },
  { videoId: "OjJ7GkWCHvA", title: "When the Night Will Not End: Praying Psalm 88" },
  { videoId: "pHBzJ2dVXgk", title: "Lament and the Dark Night of the Soul" },
  { videoId: "3sO5FH2ybPY", title: "God in the Silence: Christ and Psalm 88" },
];

export default function Psalm88Guide() {
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

  const accordionButton = (isOpen: boolean, color: string): React.CSSProperties => ({
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.25rem",
    background: isOpen ? `${color}14` : "transparent",
    border: `1px solid ${isOpen ? color + "55" : BORDER}`,
    borderRadius: 12,
    cursor: "pointer",
    marginBottom: 8,
    color: TEXT,
    fontWeight: 700,
    fontSize: "1rem",
    transition: "all .2s",
  });

  const panelStyle = (color: string): React.CSSProperties => ({
    background: `${color}0A`,
    border: `1px solid ${color}26`,
    borderRadius: 10,
    padding: "1.1rem 1.3rem",
    marginBottom: 10,
    color: MUTED,
    lineHeight: 1.8,
    fontSize: "0.98rem",
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
      <main style={{ maxWidth: 920, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <section style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: 2,
                color: PURPLE,
                textTransform: "uppercase",
              }}
            >
              Psalms &middot; Unresolved Lament
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.9rem,4vw,2.9rem)",
              fontWeight: 900,
              lineHeight: 1.14,
              marginBottom: "1rem",
            }}
          >
            Psalm 88: The Darkest Psalm
          </h1>
          <p style={{ color: MUTED, fontSize: "1.12rem", lineHeight: 1.75, maxWidth: 700 }}>
            The one psalm in the Psalter that finds no resolution &mdash; a maskil of Heman the
            Ezrahite whose final word is literally &ldquo;darkness.&rdquo; A profound gift to those in
            depression, despair, and the dark night of the soul who cannot yet see the light.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              background: `${PURPLE}12`,
              border: `1px solid ${PURPLE}40`,
              borderLeft: `4px solid ${PURPLE}`,
              borderRadius: 14,
              padding: "1.3rem 1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                letterSpacing: 1.5,
                color: PURPLE,
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Key Verse &mdash; Psalm 88:1-2
            </div>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.7,
                color: TEXT,
                fontStyle: "italic",
                margin: 0,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;O LORD, God of my salvation, I cry out day and night before you. Let my prayer come before you; incline your ear to my cry!&rdquo;",
              }}
            />
          </div>
        </section>

        <nav
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
            position: "sticky",
            top: "var(--header-height, 80px)",
            background: BG,
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            zIndex: 5,
          }}
        >
          {TABS.map((t) => {
            const activeTab = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  padding: "0.55rem 1.15rem",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  background: activeTab ? PURPLE : "transparent",
                  color: activeTab ? "#fff" : MUTED,
                  border: `1px solid ${activeTab ? PURPLE : BORDER}`,
                  cursor: "pointer",
                  transition: "all .18s",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.85rem", color: PURPLE }}>
                Summary
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 88 is the darkest psalm in the Psalter &mdash; a lament that finds no resolution. The sufferer cries out to God day and night (88:1), his soul full of troubles and his life drawing near to Sheol (88:3). He feels &ldquo;like one set loose among the dead&rdquo; (88:5), traces his affliction directly to God&rsquo;s heavy wrath (88:7), and grieves the loss of every human comfort: &ldquo;You have caused my companions to shun me&rdquo; (88:8). He flings honest questions at God &mdash; &ldquo;Do you work wonders for the dead?&rdquo; (88:10) &mdash; and asks why God hides his face (88:14). Uniquely among all the psalms, it ends without a single note of hope or praise; its final word is literally &ldquo;darkness&rdquo; (88:18). Yet the sufferer never stops praying, which is the quiet thread of faith running through the gloom.",
                }}
              />
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.85rem", color: GOLD }}>
                Structure
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { ref: "88:1-5", label: "I cry day and night; my life draws near to Sheol", color: TEAL },
                  { ref: "88:6-9", label: "Your wrath lies heavy; my companions shun me; still I call", color: ROSE },
                  { ref: "88:10-12", label: "Honest questions: do you work wonders for the dead?", color: GOLD },
                  { ref: "88:13-18", label: "Why hide your face? My companions have become darkness", color: PURPLE },
                ].map((s) => (
                  <div
                    key={s.ref}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "baseline",
                      background: `${s.color}0C`,
                      border: `1px solid ${s.color}2A`,
                      borderRadius: 10,
                      padding: "0.8rem 1rem",
                    }}
                  >
                    <span style={{ fontWeight: 800, color: s.color, minWidth: 78, fontSize: "0.9rem" }}>
                      {s.ref}
                    </span>
                    <span style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.95rem" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.85rem", color: TEAL }}>
                Context: The One Psalm Without a Turn
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 88 is unique as the one psalm with no resolution, no turn to praise, no expressed hope &mdash; it ends in darkness. Yet it is profoundly important: it shows that even the most unrelieved suffering and the felt absence of God belongs within the life of faith and prayer. The sufferer never stops crying out to God, even while accusing God of hiding his face. This psalm is a gift to those in clinical depression, the dark night of the soul, terminal illness, and despair, for Scripture itself gives voice to suffering that does not yet resolve. It also points forward to Christ in Gethsemane and on the cross (&ldquo;My God, my God, why have you forsaken me?&rdquo;) &mdash; the Son who entered the deepest darkness and the silence of God. The fact that this prayer is preserved in Scripture means God does not reject the prayers that come from the pit. It is a psalm to be handled with deep pastoral sensitivity, for those who need permission to lament without being rushed to resolution.",
                }}
              />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.6rem", color: PURPLE }}>
              Key Themes of Psalm 88
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1.4rem" }}>
              Six themes trace the contours of the darkest psalm &mdash; and the thread of faith that
              runs through it. Open each to explore the theme with its cross-references.
            </p>
            {THEME_ITEMS.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    style={accordionButton(isOpen, item.color)}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.title}</span>
                    <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={panelStyle(item.color)}
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "verse" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.6rem", color: GOLD }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1.4rem" }}>
              Walk through Psalm 88 section by section, from the crying out day and night to the final
              word of darkness.
            </p>
            {VERSE_ITEMS.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    style={accordionButton(isOpen, item.color)}
                    onClick={() => toggle(item.id)}
                  >
                    <span>
                      <span style={{ color: item.color, fontWeight: 900 }}>{item.ref}</span>
                      <span style={{ color: MUTED, fontWeight: 500 }}> &mdash; {item.label}</span>
                    </span>
                    <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={panelStyle(item.color)}
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.6rem", color: PURPLE }}>
                Living This Psalm
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1.4rem" }}>
                Psalm 88 is for the depths &mdash; for those who cannot yet see the light and need
                Scripture itself to give voice to their darkness. Handle it with gentleness, both for
                yourself and for those you walk beside.
              </p>
              {APP_ITEMS.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      style={accordionButton(isOpen, item.color)}
                      onClick={() => toggle(item.id)}
                    >
                      <span>{item.title}</span>
                      <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={panelStyle(item.color)}
                        dangerouslySetInnerHTML={{ __html: item.html }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "1rem", color: TEAL }}>
                Reflection Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {REFLECTION_QUESTIONS.map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      background: `${TEAL}0C`,
                      border: `1px solid ${TEAL}2A`,
                      borderRadius: 12,
                      padding: "1rem 1.2rem",
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: `${TEAL}25`,
                        border: `1px solid ${TEAL}60`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        color: TEXT,
                        flexShrink: 0,
                        fontSize: "0.9rem",
                      }}
                    >
                      {i + 1}
                    </div>
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "1rem", color: ROSE }}>
                Video Teaching
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{
                      borderRadius: 14,
                      overflow: "hidden",
                      border: `1px solid ${BORDER}`,
                    }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div
                      style={{
                        padding: "0.8rem 1rem",
                        background: CARD,
                        color: TEXT,
                        fontWeight: 700,
                        fontSize: "0.95rem",
                      }}
                    >
                      {v.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                ...card,
                background: `${GREEN}10`,
                border: `1px solid ${GREEN}40`,
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.85rem", color: GREEN }}>
                A Closing Prayer
              </h2>
              <p
                style={{ color: TEXT, lineHeight: 1.85, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O LORD, God of my salvation, I cry out to you day and night. When my soul is full of troubles and my life feels close to the grave, when your face seems hidden and my companions have become darkness, I bring even this to you. I do not understand why the night will not end. I cannot yet sing the song of praise. But I will keep crying out, with outstretched hands, because you are still the God of my salvation. Thank you that your Word holds a prayer that ends in darkness, so that I know my darkness is not outside your hearing. Thank you that your Son went into the deepest night, felt forsaken, and was not abandoned forever. Hold me in the dark when I cannot hold myself. Receive this unfinished prayer from the pit, and let it be enough that it is addressed to you. In the name of Jesus, who entered the silence and broke the grave, amen.",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
