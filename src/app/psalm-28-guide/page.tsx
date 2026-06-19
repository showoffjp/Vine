"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface Theme {
  id: string;
  title: string;
  reference: string;
  body: string;
}

interface VerseBlock {
  id: string;
  reference: string;
  label: string;
  body: string;
}

interface AppSection {
  title: string;
  accent: string;
  body: string;
}

export default function Psalm28Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "CE8QbkUCNK4", title: "Psalm 28 &mdash; A Prayer for Help That Turns to Praise" },
    { videoId: "Q2oNOlXzBhY", title: "The LORD Is My Strength and My Shield" },
    { videoId: "8phkAg8PMHE", title: "From Lament to Thanksgiving in the Psalms" },
    { videoId: "fNk_zzaMoSs", title: "Be Their Shepherd and Carry Them Forever" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const themes: Theme[] = [
    {
      id: "t-deaf",
      title: "Do Not Be Deaf to Me",
      reference: "Psalm 28:1",
      body:
        "The psalm opens with one of the most arresting images in the whole Psalter: &ldquo;To you, O LORD, I call; my rock, be not deaf to me, lest, if you be silent to me, I become like those who go down to the pit.&rdquo; David does not begin with polite preliminaries. He begins with the raw terror of a God who might say nothing. To a soul in distress, the silence of God feels indistinguishable from the absence of God, and the absence of God feels indistinguishable from death itself. The &ldquo;pit&rdquo; is the grave, the realm of the dead, the place from which no prayer rises and no praise ascends. David is saying, in effect, that if God will not speak, then he is already as good as buried.&nbsp;",
    },
    {
      id: "t-hands",
      title: "Lifting Up Hands Toward the Sanctuary",
      reference: "Psalm 28:2",
      body:
        "&ldquo;Hear the voice of my pleas for mercy, when I cry to you for help, when I lift up my hands toward your most holy sanctuary&rdquo; (28:2). The lifting of hands is the ancient posture of supplication &mdash; open, empty palms turned toward heaven, the body confessing what the heart already knows: that it has nothing in itself and must receive everything from above. David directs his lifted hands not vaguely upward but toward the &ldquo;most holy sanctuary,&rdquo; the inner room where God had promised to dwell among his people. Even in his distress, David prays toward the place of mercy. He knows that help is not abstract; it has an address. It flows from the throne of grace where atonement is made and where God meets sinners.&nbsp;",
    },
    {
      id: "t-wicked",
      title: "Do Not Drag Me Off With the Wicked",
      reference: "Psalm 28:3&ndash;5",
      body:
        "David prays not to be swept away in the judgment that is coming upon &ldquo;the wicked, with the workers of evil, who speak peace with their neighbors while evil is in their hearts&rdquo; (28:3). The peculiar danger he describes is hypocrisy &mdash; the smooth word that covers a treacherous intention, the smile that masks the dagger. Such people &ldquo;do not regard the works of the LORD or the work of his hands&rdquo; (28:5); they live as though God were blind and history were meaningless. David asks God to &ldquo;repay them according to their work&rdquo; not out of personal vindictiveness but out of a longing that the moral order of the universe be vindicated, that evil not have the last word, that the God who sees would finally act.&nbsp;",
    },
    {
      id: "t-turn",
      title: "Blessed Be the LORD &mdash; The Turn to Praise",
      reference: "Psalm 28:6&ndash;7",
      body:
        "Then comes the hinge of the whole psalm, the dramatic mid-poem turn: &ldquo;Blessed be the LORD! For he has heard the voice of my pleas for mercy&rdquo; (28:6). Something has happened between verse 5 and verse 6. The prayer that began in the terror of divine silence now erupts in the certainty of divine hearing. Whether by an answer received, an assurance granted, or simply the deep settling of faith, David passes from petition to praise. &ldquo;The LORD is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him&rdquo; (28:7). The trembling supplicant has become a singer. This is the characteristic movement of biblical lament: it does not end where it begins.&nbsp;",
    },
    {
      id: "t-shepherd",
      title: "Save Your People, Be Their Shepherd",
      reference: "Psalm 28:8&ndash;9",
      body:
        "The psalm does not end privately. Having found his own footing, David widens his gaze to the whole covenant people: &ldquo;The LORD is the strength of his people; he is the saving refuge of his anointed. Oh, save your people and bless your heritage! Be their shepherd and carry them forever&rdquo; (28:8&ndash;9). The personal &ldquo;my strength&rdquo; of verse 7 becomes the corporate &ldquo;strength of his people.&rdquo; The king who has been heard now intercedes for the nation, and his final petition reaches for the tenderest image in Scripture &mdash; God as a shepherd who carries his flock. This anticipates Isaiah&rsquo;s vision of the LORD who &ldquo;will gather the lambs in his arms&rdquo; (Isaiah 40:11) and the Good Shepherd of John 10 who lays down his life for the sheep.&nbsp;",
    },
    {
      id: "t-rock",
      title: "My Rock, My Strength, My Shield",
      reference: "Psalm 28:1, 7&ndash;8",
      body:
        "Three images of refuge hold the psalm together: rock, strength, and shield. God is the &ldquo;rock&rdquo; (v.1) &mdash; immovable, ancient, the firm ground beneath a sinking soul. God is &ldquo;strength&rdquo; (vv.7&ndash;8) &mdash; the power that the weak draw upon when their own resources fail. God is a &ldquo;shield&rdquo; (v.7) &mdash; the protection that stands between the believer and the blows of the enemy. These are not decorative metaphors; they are confessions wrung from experience. David has discovered that the living God is not merely a doctrine to be affirmed but a fortress to be inhabited. The same God who seemed silent in verse 1 is the rock, the strength, and the shield by verse 7 &mdash; not because God changed, but because faith took hold.&nbsp;",
    },
  ];

  const verses: VerseBlock[] = [
    {
      id: "v1",
      reference: "Psalm 28:1&ndash;2",
      label: "The Cry From the Edge of the Pit",
      body:
        "&ldquo;To you, O LORD, I call; my rock, be not deaf to me, lest, if you be silent to me, I become like those who go down to the pit. Hear the voice of my pleas for mercy, when I cry to you for help, when I lift up my hands toward your most holy sanctuary.&rdquo; The psalm begins at the boundary between life and death. David&rsquo;s deepest dread is not his enemies but God&rsquo;s silence; he would rather face any foe than face a God who will not answer. Notice the direction of his prayer &mdash; toward the sanctuary, the place of atonement and presence. He does not pray into a void but toward the throne of mercy. The lifted hands declare his emptiness; the chosen direction declares his confidence that mercy has a dwelling place and that he knows where to find it.&nbsp;",
    },
    {
      id: "v2",
      reference: "Psalm 28:3&ndash;5",
      label: "Not Dragged Off With the Wicked",
      body:
        "&ldquo;Do not drag me off with the wicked, with the workers of evil, who speak peace with their neighbors while evil is in their hearts. Give to them according to their work and according to the evil of their deeds; give to them according to the work of their hands; render them their due reward. Because they do not regard the works of the LORD or the work of his hands, he will tear them down and build them up no more.&rdquo; David prays for separation &mdash; not to share the fate of those whose words and hearts do not match. The sin he names is treacherous hypocrisy, the public smile over the private scheme. His plea for just recompense is rooted in the conviction that God governs and God sees. Those who ignore &ldquo;the works of the LORD&rdquo; will find that the Architect of history will not let their building stand.&nbsp;",
    },
    {
      id: "v3",
      reference: "Psalm 28:6&ndash;7",
      label: "The Turn: Blessed Be the LORD",
      body:
        "&ldquo;Blessed be the LORD! For he has heard the voice of my pleas for mercy. The LORD is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.&rdquo; Here the whole psalm pivots. The fearful petition becomes confident praise; the trembling voice becomes a singing voice. David is sure he has been heard &mdash; not because the crisis is visibly over, but because faith has laid hold of God. Verse 7 stacks one assurance upon another: strength, shield, trust, help, exultation, song. The progression is psychological as well as theological &mdash; trust precedes help in the order of the verse, for the heart that trusts is already being helped. This is the golden center of the psalm, and the key verse of the guide.&nbsp;",
    },
    {
      id: "v4",
      reference: "Psalm 28:8&ndash;9",
      label: "Save Your People, Carry Them Forever",
      body:
        "&ldquo;The LORD is the strength of his people; he is the saving refuge of his anointed. Oh, save your people and bless your heritage! Be their shepherd and carry them forever.&rdquo; The psalm closes by lifting its eyes from the individual to the community. The personal experience of being heard becomes the ground of intercession for the whole people of God. David prays for salvation, blessing, shepherding, and carrying &mdash; four verbs that together describe the entire pastoral care of God for his flock. To be carried &ldquo;forever&rdquo; is to be borne not just through one crisis but through every age, all the way home. The closing image anticipates Isaiah 40:11 and supremely the Good Shepherd of John 10, who gathers, carries, and never loses one of his own.&nbsp;",
    },
  ];

  const appSections: AppSection[] = [
    {
      title: "When God Seems Silent",
      accent: PURPLE,
      body:
        "Every believer eventually meets the experience that opens this psalm: the heavens seem made of brass, the prayers seem to fall back unanswered, and the silence of God feels like the nearness of the grave. Psalm 28 does not scold this experience; it sanctifies it. David teaches us to keep calling precisely when calling feels futile, to direct our prayers toward the place of mercy even when no answer comes, and to remember that the felt silence of God is not the same as his absence. The God who seemed deaf in verse 1 is the strength and shield of verse 7 &mdash; and the journey between them is the journey of faith. Do not interpret silence as rejection. Keep lifting your hands toward the sanctuary.&nbsp;",
    },
    {
      title: "From Petition to Praise",
      accent: GOLD,
      body:
        "The structure of Psalm 28 is itself a discipleship lesson. It moves deliberately from complaint to confidence, from pleading to praise. We are not meant to camp permanently in lament, nor are we meant to leap straight to praise while denying our real distress. The psalm honors both. It gives full voice to the fear and then, by faith, turns the corner into thanksgiving. When you pray, let your prayers travel this arc. Begin honestly with your need, but do not end there. Press through to the &ldquo;Blessed be the LORD&rdquo; of verse 6, trusting that the God who hears the voice of your pleas is worthy of a song even before the deliverance is visible.&nbsp;",
    },
    {
      title: "Trusting the Rock and the Shield",
      accent: TEAL,
      body:
        "&ldquo;In him my heart trusts, and I am helped&rdquo; (28:7). Notice the order: trust comes first, then help. David is not saying he trusted God after the rescue arrived; he is saying that the very act of trusting was itself the beginning of being helped. To trust the Rock is already to stand on solid ground; to take refuge behind the Shield is already to be protected. Our application is not to manufacture feelings of confidence but to relocate ourselves &mdash; to step off the sinking sand of our own resources and onto the unshakable ground of God&rsquo;s character. The Rock does not move. The Shield does not fail. Faith is simply taking shelter where shelter actually is.&nbsp;",
    },
    {
      title: "Praying Beyond Yourself",
      accent: GREEN,
      body:
        "Psalm 28 will not let us end in the singular. The moment David is steadied, he prays for the whole people of God: &ldquo;Oh, save your people and bless your heritage!&rdquo; (28:9). Personal deliverance is meant to overflow into intercession. The grace we receive is never merely for us; it equips us to pray for others, to carry the burdens of the wider flock, to ask God to shepherd and carry his people forever. When God answers your prayer, let your gratitude widen into petition for your church, your family, the suffering saints around the world. The healed heart becomes an interceding heart.&nbsp;",
    },
    {
      title: "The Shepherd Who Carries",
      accent: ROSE,
      body:
        "The final word of the psalm is &ldquo;forever&rdquo; &mdash; &ldquo;Be their shepherd and carry them forever&rdquo; (28:9). This is the tenderest possible note on which to end a prayer that began in terror. The God who is a rock to stand on is also a shepherd who stoops to lift and carry the weary lamb. For the Christian, this image finds its fulfillment in Jesus, the Good Shepherd of John 10, who lays down his life for the sheep and carries them on his shoulders all the way home. When you are too weak to walk, this psalm reminds you that your Shepherd does not merely lead &mdash; he carries. And what he carries, he carries forever.&nbsp;",
    },
  ];

  const questions = [
    "When have you experienced the &ldquo;silence&rdquo; of God that David dreads in verse 1? How did you keep praying through it &mdash; or did you stop?",
    "David lifts his hands &ldquo;toward your most holy sanctuary&rdquo; (28:2). What does it mean for you to direct your prayers toward the place of mercy rather than into a vague void?",
    "The psalm turns sharply from lament to praise at verse 6. What helps you make that turn in your own prayers, from honest complaint to confident thanksgiving?",
    "Verse 7 says &ldquo;in him my heart trusts, and I am helped.&rdquo; How have you seen trust precede help in your own experience?",
    "David widens his prayer from himself to the whole people of God in verse 9. Who are the people God is calling you to carry in intercession right now?",
    "The psalm ends with God as a Shepherd who carries his people forever. How does the image of being carried &mdash; not merely led &mdash; change the way you face your present weakness?",
  ];

  const headingStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: TEXT,
  };

  const paraStyle: React.CSSProperties = {
    color: MUTED,
    lineHeight: 1.85,
    fontSize: "1.02rem",
  };

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 14,
    padding: "1.6rem 1.7rem",
    marginBottom: "1.4rem",
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
      <header
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "2.5rem 1.5rem 1rem",
        }}
      >
        <p
          style={{
            color: PURPLE,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontSize: "0.82rem",
            marginBottom: "0.6rem",
          }}
        >
          A Study in the Psalms
        </p>
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "0.9rem",
          }}
        >
          Psalm 28
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: "1.18rem",
            lineHeight: 1.6,
            maxWidth: 720,
          }}
        >
          A prayer for help that turns to praise and intercession &mdash; from
          the edge of the pit to the song of the helped heart.
        </p>
        <div
          style={{
            marginTop: "1.8rem",
            background: `linear-gradient(135deg, ${CARD}, #0c0c18)`,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: 12,
            padding: "1.5rem 1.6rem",
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.22rem",
              lineHeight: 1.65,
              color: TEXT,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;The LORD is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.&rdquo;",
            }}
          />
          <p
            style={{
              marginTop: "0.8rem",
              color: GOLD,
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            Psalm 28:7
          </p>
        </div>
      </header>

      <nav
        style={{
          maxWidth: 980,
          margin: "1.5rem auto 0",
          padding: "0 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.6rem",
          borderBottom: `1px solid ${BORDER}`,
          paddingBottom: "0.9rem",
        }}
      >
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            style={{
              background: tab === t ? PURPLE : "transparent",
              color: tab === t ? "#fff" : MUTED,
              border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              borderRadius: 999,
              padding: "0.55rem 1.2rem",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </nav>

      <main
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "2.2rem 1.5rem 5rem",
        }}
      >
        {tab === "overview" && (
          <section>
            <div style={cardStyle}>
              <h2 style={headingStyle}>A Prayer at the Edge of the Pit</h2>
              <p
                style={paraStyle}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 28 is a psalm of David that begins in the deepest distress and ends in the highest praise. It opens with the terror of divine silence &mdash; David fears that if God will not answer, he will become &ldquo;like those who go down to the pit&rdquo; (28:1). He lifts up his hands toward the holy sanctuary, pleads not to be dragged off with the wicked, and then, at the very center of the psalm, something shifts. Suddenly he is no longer pleading but praising: &ldquo;Blessed be the LORD! For he has heard the voice of my pleas for mercy&rdquo; (28:6). The trembling supplicant becomes a singer.",
                }}
              />
              <p
                style={{ ...paraStyle, marginTop: "1.1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This dramatic mid-psalm turn from lament to thanksgiving is one of the most characteristic movements in all the Psalter. The psalm does not pretend the distress away; it walks straight through it and out the other side into confidence. And it does not end privately &mdash; David widens his gaze from his own deliverance to the whole people of God, closing with the tender intercession, &ldquo;Be their shepherd and carry them forever&rdquo; (28:9).",
                }}
              />
            </div>

            <div style={cardStyle}>
              <h2 style={headingStyle}>Structure of the Psalm</h2>
              <p
                style={paraStyle}
                dangerouslySetInnerHTML={{
                  __html:
                    "The psalm falls into two clear halves that mirror its movement of soul. The first half (vv.1&ndash;5) is <strong style='color:#F2F2F8'>petition and complaint</strong>: the urgent cry not to be met with silence, the lifted hands, and the plea not to share the fate of the wicked who speak peace while harboring evil. The second half (vv.6&ndash;9) is a sudden <strong style='color:#F2F2F8'>turn to confidence and thanksgiving</strong>: blessing the LORD who has heard, confessing him as strength and shield, and interceding for the whole covenant people.",
                }}
              />
              <p
                style={{ ...paraStyle, marginTop: "1.1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This lament-to-praise structure is not unique to Psalm 28; it is the deep grammar of biblical prayer. The believer is invited to bring the full weight of distress to God and then, by faith, to press through to praise &mdash; not because the crisis is necessarily over, but because the God who hears is worthy of a song.",
                }}
              />
            </div>

            <div style={cardStyle}>
              <h2 style={headingStyle}>Context and Imagery</h2>
              <p
                style={paraStyle}
                dangerouslySetInnerHTML={{
                  __html:
                    "Three images of refuge anchor the psalm: God as <strong style='color:#F2F2F8'>rock</strong> (v.1), as <strong style='color:#F2F2F8'>strength</strong> (vv.7&ndash;8), and as <strong style='color:#F2F2F8'>shield</strong> (v.7). These are not decorative; they are confessions wrung from a soul that has found God to be a fortress in trouble. The closing &ldquo;shepherd&rdquo; and &ldquo;carry&rdquo; imagery (v.9) anticipates the LORD of Isaiah 40:11 who &ldquo;will gather the lambs in his arms,&rdquo; and supremely the Good Shepherd of John 10 who lays down his life for the sheep and carries them home.",
                }}
              />
              <p
                style={{ ...paraStyle, marginTop: "1.1rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "As a royal psalm, verse 8 mentions the LORD as &ldquo;the saving refuge of his anointed&rdquo; &mdash; the king who represents the people. The pattern of the anointed one being heard and then interceding for the whole flock points forward to Christ, the true Anointed, whose own prayers were heard and who now intercedes for all his people.",
                }}
              />
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            <p
              style={{
                ...paraStyle,
                marginBottom: "1.6rem",
                fontSize: "1.08rem",
              }}
            >
              Six threads weave through Psalm 28, carrying it from the edge of
              the grave to the song of the helped heart. Tap each to explore.
            </p>
            {themes.map((th) => (
              <div
                key={th.id}
                style={{
                  background: CARD,
                  border: `1px solid ${open === th.id ? PURPLE : BORDER}`,
                  borderRadius: 12,
                  marginBottom: "1rem",
                  overflow: "hidden",
                  transition: "border-color 0.15s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(th.id)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "1.3rem 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "1.12rem",
                        color: TEXT,
                      }}
                    >
                      {th.title}
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: PURPLE,
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        marginTop: "0.25rem",
                      }}
                      dangerouslySetInnerHTML={{ __html: th.reference }}
                    />
                  </span>
                  <span
                    style={{
                      color: MUTED,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {open === th.id ? "-" : "+"}
                  </span>
                </button>
                {open === th.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p
                      style={paraStyle}
                      dangerouslySetInnerHTML={{ __html: th.body }}
                    />
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <p
              style={{
                ...paraStyle,
                marginBottom: "1.6rem",
                fontSize: "1.08rem",
              }}
            >
              Walk through Psalm 28 section by section, from the opening cry to
              the closing intercession.
            </p>
            {verses.map((v) => (
              <div
                key={v.id}
                style={{
                  background: CARD,
                  border: `1px solid ${open === v.id ? GOLD : BORDER}`,
                  borderRadius: 12,
                  marginBottom: "1rem",
                  overflow: "hidden",
                  transition: "border-color 0.15s ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(v.id)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "1.3rem 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span>
                    <span
                      style={{
                        display: "block",
                        color: GOLD,
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                      }}
                      dangerouslySetInnerHTML={{ __html: v.reference }}
                    />
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: TEXT,
                        marginTop: "0.25rem",
                      }}
                    >
                      {v.label}
                    </span>
                  </span>
                  <span
                    style={{
                      color: MUTED,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {open === v.id ? "-" : "+"}
                  </span>
                </button>
                {open === v.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p
                      style={paraStyle}
                      dangerouslySetInnerHTML={{ __html: v.body }}
                    />
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {tab === "application" && (
          <section>
            <div style={{ marginBottom: "2.2rem" }}>
              {appSections.map((a, i) => (
                <div
                  key={i}
                  style={{
                    ...cardStyle,
                    borderLeft: `4px solid ${a.accent}`,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      marginBottom: "0.8rem",
                      color: TEXT,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={paraStyle}
                    dangerouslySetInnerHTML={{ __html: a.body }}
                  />
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: "1.2rem",
                  color: TEXT,
                }}
              >
                Questions for Reflection
              </h3>
              <ol style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {questions.map((q, i) => (
                  <li
                    key={i}
                    style={{
                      color: MUTED,
                      lineHeight: 1.75,
                      marginBottom: "1rem",
                      fontSize: "1.02rem",
                      paddingLeft: "0.4rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                margin: "2.4rem 0 1.3rem",
                color: TEXT,
              }}
            >
              Watch and Reflect
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.3rem",
                marginBottom: "2.4rem",
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p
                    style={{
                      padding: "0.9rem 1.1rem",
                      color: MUTED,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                    }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                background: `linear-gradient(135deg, ${CARD}, #0c0c18)`,
                border: `1px solid ${BORDER}`,
                borderTop: `4px solid ${PURPLE}`,
                borderRadius: 14,
                padding: "2rem 1.9rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  color: TEXT,
                }}
              >
                A Closing Prayer
              </h3>
              <p
                style={{
                  ...paraStyle,
                  fontStyle: "italic",
                  color: TEXT,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "O LORD, my rock, do not be deaf to me. When your silence frightens me and the pit seems near, teach me to keep lifting my hands toward the place of mercy. Bring me through complaint to confidence, through pleading to praise, until my trembling voice becomes a song. Be my strength and my shield; let my heart trust in you and find that it is helped. And do not let my gratitude end with me &mdash; save your people, bless your heritage, be our shepherd, and carry us forever, all the way home. Through Jesus, the Good Shepherd, who laid down his life for the sheep. Amen.",
                }}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
