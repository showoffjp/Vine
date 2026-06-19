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

const THEMES = [
  {
    id: "poor-needy",
    color: PURPLE,
    title: "I Am Poor and Needy",
    body:
      "David begins not by listing his merits but by confessing his emptiness: &ldquo;Incline your ear, O LORD, and answer me, for I am poor and needy&rdquo; (v.1). This is the posture of true prayer. The word translated &lsquo;poor&rsquo; (Hebrew <em>ani</em>) describes the afflicted, the bowed-down, the one with no leverage before God. David, though a king, prays as a beggar. He brings no bargaining chip but his own poverty &mdash; and that is precisely the qualification God honors. The Psalter elsewhere insists that God &ldquo;does not despise his own people who are prisoners&rdquo; (Ps 69:33) and that &ldquo;a broken and contrite heart, O God, you will not despise&rdquo; (Ps 51:17). Jesus opens the Sermon on the Mount with the same logic: &ldquo;Blessed are the poor in spirit, for theirs is the kingdom of heaven&rdquo; (Matt 5:3). To pray well, we must first own how little we have.",
    refs: "Psalm 86:1; Psalm 51:17; Matthew 5:3; 2 Corinthians 12:9",
  },
  {
    id: "character",
    color: GOLD,
    title: "Prayer Grounded in God&rsquo;s Character",
    body:
      "David does not ground his confidence in his own worthiness but in who God is: &ldquo;For you, O Lord, are good and forgiving, abounding in steadfast love to all who call upon you&rdquo; (v.5). The whole psalm leans on the divine character &mdash; goodness, forgiveness, and <em>hesed</em> (steadfast, covenant love). Prayer is bold not because we are impressive but because God is reliable. The repeated appeal to God&rsquo;s steadfast love (vv.5, 13, 15) is the engine of the prayer. When David finally names God as &ldquo;merciful and gracious, slow to anger and abounding in steadfast love and faithfulness&rdquo; (v.15), he is quoting the LORD&rsquo;s self-revelation at Sinai (Ex 34:6) &mdash; the most-quoted verse in the Old Testament. Confident prayer rests on God&rsquo;s revealed nature, not our shifting feelings.",
    refs: "Psalm 86:5, 15; Exodus 34:6; Numbers 14:18; Joel 2:13",
  },
  {
    id: "none-like",
    color: TEAL,
    title: "There Is None Like You",
    body:
      "At the heart of the psalm stands a great confession of God&rsquo;s uniqueness: &ldquo;There is none like you among the gods, O Lord, nor are there any works like yours&rdquo; (v.8), and &ldquo;you are great and do wondrous things; you alone are God&rdquo; (v.10). David&rsquo;s personal trouble opens out into universal vision: &ldquo;All the nations you have made shall come and worship before you, O Lord, and shall glorify your name&rdquo; (v.9). The God who hears one needy man is the God to whom every nation will one day bow. This missionary horizon anticipates the gospel going to the Gentiles and the worship of the redeemed from every tribe (Rev 15:4 quotes this very verse). Personal prayer and global praise belong together &mdash; the uniqueness of God is both the comfort of the sufferer and the hope of the world.",
    refs: "Psalm 86:8-10; Deuteronomy 4:35; Isaiah 45:22; Revelation 15:4",
  },
  {
    id: "united-heart",
    color: ROSE,
    title: "Unite My Heart &mdash; The Undivided Life",
    body:
      "The central petition is also the most searching: &ldquo;Teach me your way, O LORD, that I may walk in your truth; unite my heart to fear your name&rdquo; (v.11). David asks not merely for rescue but for a single-minded heart. The divided heart &mdash; pulled between God and idols, devotion and self-interest &mdash; is the great spiritual disease. James warns that the &ldquo;double-minded man&rdquo; is &ldquo;unstable in all his ways&rdquo; (Jas 1:8), and Jesus insists &ldquo;no one can serve two masters&rdquo; (Matt 6:24). To &lsquo;unite the heart&rsquo; is to gather the scattered loyalties of the soul into one undivided fear and love of God. Note the order: David first asks to be taught God&rsquo;s way and to walk in truth, then for the heart to be unified. Right knowing and right living converge in wholehearted devotion. This is a prayer we never outgrow.",
    refs: "Psalm 86:11; James 1:8; Matthew 6:24; Deuteronomy 6:4-5",
  },
  {
    id: "deliverance",
    color: GREEN,
    title: "Delivered from the Depths of Sheol",
    body:
      "David&rsquo;s gratitude reaches beyond present trouble to ultimate rescue: &ldquo;great is your steadfast love toward me; you have delivered my soul from the depths of Sheol&rdquo; (v.13). Sheol is the realm of death and the grave &mdash; the deepest pit of human extremity. David testifies that God&rsquo;s rescuing love reaches even there. For the Christian reader, this confession opens toward resurrection hope: the God who delivers from the depths of Sheol is the God who would not abandon his Holy One to corruption (Ps 16:10; Acts 2:27) and who raised Jesus from the grave. The same steadfast love that hears the poor and needy is the love that conquers death itself. David&rsquo;s thanksgiving is grounded in a deliverance already tasted and a deliverance still hoped for.",
    refs: "Psalm 86:13; Psalm 16:10; Jonah 2:2-6; Acts 2:27",
  },
];

const VERSES = [
  {
    id: "v1-5",
    ref: "Psalm 86:1-5",
    heading: "Incline Your Ear, for I Am Poor and Needy",
    body:
      "&ldquo;Incline your ear, O LORD, and answer me, for I am poor and needy&rdquo; (v.1). David opens with a string of urgent imperatives &mdash; <em>incline, answer, preserve, save, be gracious, gladden</em> &mdash; each grounded in a reason introduced by &lsquo;for.&rsquo; He is poor and needy (v.1); he is godly and trusts in God (v.2); he cries all the day (v.3). The basis of his confidence climaxes in v.5: &ldquo;For you, O Lord, are good and forgiving, abounding in steadfast love to all who call upon you.&rdquo; Notice how the prayer leans entirely on God&rsquo;s character. David does not say &lsquo;answer me because I deserve it&rsquo; but &lsquo;answer me because you are good and forgiving.&rsquo; This is the grammar of grace: the needy soul calling on the abundant mercy of God.",
  },
  {
    id: "v6-10",
    ref: "Psalm 86:6-10",
    heading: "There Is None Like You",
    body:
      "&ldquo;In the day of my trouble I call upon you, for you answer me&rdquo; (v.7). David&rsquo;s confidence is rooted in experience &mdash; God has answered before. Then the prayer lifts its eyes from personal trouble to the incomparable greatness of God: &ldquo;There is none like you among the gods, O Lord, nor are there any works like yours&rdquo; (v.8). The horizon widens to the nations: &ldquo;All the nations you have made shall come and worship before you, O Lord, and shall glorify your name&rdquo; (v.9). The section ends with a ringing monotheistic confession: &ldquo;For you are great and do wondrous things; you alone are God&rdquo; (v.10). The same God who stoops to one needy man is the only God, to whom every nation will come. Worship and supplication flow together.",
  },
  {
    id: "v11-13",
    ref: "Psalm 86:11-13",
    heading: "Teach Me Your Way; Unite My Heart",
    body:
      "The heart of the psalm: &ldquo;Teach me your way, O LORD, that I may walk in your truth; unite my heart to fear your name&rdquo; (v.11). This single verse contains a complete spirituality &mdash; instruction (&lsquo;teach me&rsquo;), obedience (&lsquo;that I may walk&rsquo;), and integration (&lsquo;unite my heart&rsquo;). David longs not just for help but for holiness, not just for rescue but for an undivided heart. Verse 12 responds with wholehearted praise: &ldquo;I give thanks to you, O Lord my God, with my whole heart, and I will glorify your name forever.&rdquo; The united heart of v.11 becomes the whole heart of v.12. The section closes with the deepest note of gratitude: &ldquo;great is your steadfast love toward me; you have delivered my soul from the depths of Sheol&rdquo; (v.13).",
  },
  {
    id: "v14-17",
    ref: "Psalm 86:14-17",
    heading: "Merciful and Gracious, Slow to Anger",
    body:
      "The trouble is finally named: &ldquo;O God, insolent men have risen up against me; a band of ruthless men seek my life, and they do not set you before them&rdquo; (v.14). But over against the violence of his enemies David sets the character of God, quoting Exodus 34:6: &ldquo;But you, O Lord, are a God merciful and gracious, slow to anger and abounding in steadfast love and faithfulness&rdquo; (v.15). The psalm ends with renewed petition &mdash; &ldquo;Turn to me and be gracious to me&rdquo; (v.16) &mdash; and a request for confirmation: &ldquo;Show me a sign of your favor, that those who hate me may see and be put to shame because you, LORD, have helped me and comforted me&rdquo; (v.17). The God of Sinai is the God who comforts the afflicted.",
  },
];

const APPLICATIONS = [
  {
    id: "a1",
    color: PURPLE,
    title: "Pray from Your Poverty, Not Your Strength",
    body:
      "David, a king, prays as one who is &ldquo;poor and needy.&rdquo; The first move of honest prayer is to stop pretending we have resources we do not have. Before God, admit your emptiness, your dependence, your need. This is not false modesty but truth &mdash; and it is the truth God delights to answer. When you next come to pray, begin where David begins: not with achievements to report but with a need to confess.",
  },
  {
    id: "a2",
    color: GOLD,
    title: "Anchor Your Confidence in God&rsquo;s Character",
    body:
      "Notice how often David appeals to who God is &mdash; good, forgiving, abounding in steadfast love, merciful, gracious, slow to anger. When your feelings waver and your circumstances darken, preach God&rsquo;s revealed character to your own soul. Memorize Exodus 34:6 (the verse David quotes in v.15). Confidence in prayer is not self-confidence; it is confidence in the unchanging goodness of God.",
  },
  {
    id: "a3",
    color: ROSE,
    title: "Pray for an Undivided Heart",
    body:
      "&ldquo;Unite my heart to fear your name&rdquo; (v.11) is a prayer for every divided believer &mdash; which is all of us. Where is your heart pulled in two directions? What rival loyalties compete with your devotion to God? Make David&rsquo;s petition your own daily prayer: ask God to gather your scattered affections into one wholehearted fear and love of him. Singleness of devotion is a gift to be requested, not merely a duty to be achieved.",
  },
  {
    id: "a4",
    color: TEAL,
    title: "Let Personal Trouble Widen into Worship",
    body:
      "David&rsquo;s prayer for himself opens out into a vision of all the nations worshiping God (v.9). Suffering can shrink our world until we see nothing but our pain. Psalm 86 models the opposite movement: from &lsquo;answer me&rsquo; to &lsquo;you alone are God.&rsquo; When you pray about your own trouble, let it lift your eyes to the greatness of God and the worship he is owed by every nation. Your small prayer is part of a cosmic praise.",
  },
];

const QUESTIONS = [
  "David prays as one who is &ldquo;poor and needy&rdquo; even though he is a king. Where in your life do you find it hardest to admit your need before God?",
  "David grounds his confidence in God&rsquo;s character (vv.5, 15) rather than his own worthiness. Which attribute of God &mdash; goodness, forgiveness, steadfast love &mdash; do you most need to trust today?",
  "&ldquo;Unite my heart to fear your name&rdquo; (v.11). What rival loyalties currently divide your heart? What would an undivided heart look like for you this week?",
  "The psalm moves from personal trouble (v.1) to the worship of all nations (v.9). How might widening your view to God&rsquo;s global purposes reshape the way you pray about your own struggles?",
  "David says God has &ldquo;delivered my soul from the depths of Sheol&rdquo; (v.13). What past deliverance can you remember and give thanks for, to strengthen your trust in present trouble?",
  "Verse 15 quotes Exodus 34:6. Why does it matter that David prays back to God the very words God used to reveal himself? How might Scripture shape your own prayers?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 86: A Prayer of David" },
  { videoId: "Q2oNOlXzBhY", title: "Teach Me Your Way: The Undivided Heart" },
  { videoId: "8phkAg8PMHE", title: "The Steadfast Love of the LORD in the Psalms" },
  { videoId: "fNk_zzaMoSs", title: "Exodus 34:6 and the Character of God" },
];

export default function Psalm86Guide() {
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
  const accordionBtn = (isOpen: boolean, color: string): React.CSSProperties => ({
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
    fontSize: "0.98rem",
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
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2rem" }}>
          <div
            style={{
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: 2,
              color: PURPLE,
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Book 3 of the Psalter
          </div>
          <h1
            style={{
              fontSize: "clamp(1.9rem,4vw,2.9rem)",
              fontWeight: 900,
              lineHeight: 1.12,
              marginBottom: "1rem",
            }}
          >
            Psalm 86: A Prayer of David
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 700 }}>
            The only psalm in Book 3 attributed to David &mdash; a humble, urgent prayer woven
            largely from the words of other Scriptures. It moves from need to worship, asking
            both for rescue and for an undivided heart.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              background: `${PURPLE}12`,
              border: `1px solid ${PURPLE}40`,
              borderLeft: `4px solid ${PURPLE}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: 1,
                color: PURPLE,
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Key Verse &mdash; Psalm 86:11
            </div>
            <p
              style={{ color: TEXT, fontSize: "1.15rem", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;Teach me your way, O LORD, that I may walk in your truth; unite my heart to fear your name.&rdquo;",
              }}
            />
          </div>
        </header>

        {/* Tab bar */}
        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
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
                background: tab === t ? PURPLE : "transparent",
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? PURPLE : BORDER}`,
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {/* Overview */}
        {tab === "overview" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: PURPLE }}>
                Summary
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 86 is a personal lament and prayer of David, set among the psalms of Book 3 &mdash; a collection otherwise dominated by Asaph and the sons of Korah. David comes to God as one who is &ldquo;poor and needy,&rdquo; pleading for God to incline his ear and answer. The prayer rests not on David&rsquo;s merit but on God&rsquo;s revealed character: he is &ldquo;good and forgiving, abounding in steadfast love to all who call upon&rdquo; him. Midway the psalm rises to a great confession &mdash; &ldquo;there is none like you among the gods&hellip; you alone are God&rdquo; &mdash; and a missionary vision of all the nations coming to worship. At its center stands the searching petition: &ldquo;unite my heart to fear your name.&rdquo;",
                }}
              />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: GOLD }}>
                Structure
              </h2>
              <div
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<strong>vv.1-5 &mdash; Plea grounded in need and grace:</strong> a chain of imperatives (incline, answer, preserve, save) supported by reasons climaxing in God&rsquo;s goodness and steadfast love.<br/><br/><strong>vv.6-10 &mdash; Confession of God&rsquo;s uniqueness:</strong> the prayer lifts from personal trouble to the incomparable greatness of God and the worship of all nations.<br/><br/><strong>vv.11-13 &mdash; The central petition and thanksgiving:</strong> &lsquo;teach me your way&hellip; unite my heart,&rsquo; answered by whole-hearted praise for deliverance from Sheol.<br/><br/><strong>vv.14-17 &mdash; Renewed plea against enemies:</strong> the trouble named, met by the Sinai confession of God as merciful and gracious, ending with a request for a sign of favor.",
                }}
              />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: TEAL }}>
                Context: A Mosaic of Scripture
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 86 is often called a &lsquo;mosaic&rsquo; psalm, woven largely from quotations and echoes of other Scriptures. Verse 15 quotes the LORD&rsquo;s self-revelation at Sinai: &ldquo;a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness&rdquo; (Ex 34:6). Other phrases echo Psalms 25, 27, 54, and 143, as well as Deuteronomy. David prays in the inherited language of the covenant community &mdash; a model of how Scripture itself becomes the vocabulary of our prayers. The vision of &ldquo;all the nations&rdquo; coming to worship (v.9) anticipates the gospel to the Gentiles and is quoted in Revelation 15:4. And &ldquo;unite my heart&rdquo; (v.11) anticipates the New Testament warning against the double-minded soul (Jas 1:8) and Jesus&rsquo; teaching that &lsquo;no one can serve two masters&rsquo; (Matt 6:24).",
                }}
              />
            </div>
          </section>
        )}

        {/* Themes */}
        {tab === "themes" && (
          <section style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>
              Key Themes
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Five movements at the heart of David&apos;s prayer. Tap each to expand.
            </p>
            {THEMES.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    style={accordionBtn(isOpen, item.color)}
                    onClick={() => toggle(item.id)}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                    <span style={{ color: item.color, fontSize: "1.2rem" }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${item.color}0A`,
                        border: `1px solid ${item.color}22`,
                        borderRadius: 10,
                        padding: "1.1rem 1.3rem",
                        marginBottom: 8,
                      }}
                    >
                      <p
                        style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.9rem" }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                      <div
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: item.color,
                          borderTop: `1px solid ${item.color}22`,
                          paddingTop: "0.7rem",
                        }}
                        dangerouslySetInnerHTML={{ __html: "Cross-references: " + item.refs }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Verse by Verse */}
        {tab === "verse" && (
          <section style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Walk through Psalm 86 section by section. Tap each to expand.
            </p>
            {VERSES.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    style={accordionBtn(isOpen, GOLD)}
                    onClick={() => toggle(item.id)}
                  >
                    <span>
                      <span style={{ color: GOLD, fontWeight: 800 }}>{item.ref}</span>
                      <span style={{ color: MUTED, fontWeight: 500 }}> &mdash; {item.heading}</span>
                    </span>
                    <span style={{ color: GOLD, fontSize: "1.2rem" }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${GOLD}0A`,
                        border: `1px solid ${GOLD}22`,
                        borderRadius: 10,
                        padding: "1.1rem 1.3rem",
                        marginBottom: 8,
                      }}
                    >
                      <p
                        style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Application */}
        {tab === "application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: TEAL }}>
                Living the Psalm
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {APPLICATIONS.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: `${item.color}0A`,
                      border: `1px solid ${item.color}25`,
                      borderRadius: 12,
                      padding: "1.1rem 1.3rem",
                      borderLeft: `4px solid ${item.color}`,
                    }}
                  >
                    <h3
                      style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem", fontSize: "1.02rem" }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p
                      style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: ROSE }}>
                Reflection Questions
              </h2>
              <ol style={{ color: MUTED, lineHeight: 1.8, paddingLeft: "1.25rem", margin: 0 }}>
                {QUESTIONS.map((q, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>
                Video Teaching
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
                ))}
              </div>
            </div>

            <div
              style={{
                background: `${GREEN}12`,
                border: `1px solid ${GREEN}40`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.2rem", marginBottom: "0.75rem", color: GREEN }}>
                A Closing Prayer
              </h2>
              <p
                style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O Lord, I come to you poor and needy, with nothing to offer but my need. Incline your ear and answer me, for you are good and forgiving, abounding in steadfast love to all who call upon you. There is none like you; you alone are God. Teach me your way, that I may walk in your truth, and unite my heart to fear your name. Gather my divided loyalties into one undivided love. Great is your steadfast love toward me &mdash; you who are merciful and gracious, slow to anger, and abounding in faithfulness. Turn to me and be gracious to me, and let my whole heart glorify your name forever. Amen.",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
