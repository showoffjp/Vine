"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";
const ACCENT = "#a78bfa";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { id: "uE1fOsYhB7x", title: "Isaiah 50 - The Third Servant Song Explained" },
  { id: "vF4gPtZiC2y", title: "I Set My Face Like Flint - Isaiah 50 Study" },
  { id: "wG8hQuAjD5z", title: "Isaiah 50 Verse by Verse - Obedience Despite Suffering" },
  { id: "xH3iRvBkE9a", title: "Trust in God in Darkness - Isaiah 50 Bible Study" },
];

const keyThemes = [
  {
    id: "t1",
    color: TEAL,
    title: "The Servant's Instructed Tongue",
    body: "\"The Sovereign LORD has given me an instructed tongue, to know the word that sustains the weary\" (v.4). The Servant&apos;s ministry flows from daily listening &mdash; &ldquo;He wakens me morning by morning, wakens my ear to listen like one being instructed.&rdquo; This is the pattern of all fruitful ministry: the disciple before the servant. The word that sustains the weary can only be spoken by someone who has themselves been sustained. You cannot give from an empty reservoir; the morning ear precedes the afternoon word.",
  },
  {
    id: "t2",
    color: ROSE,
    title: "The Servant's Suffering Without Shame",
    body: "The description of suffering &mdash; beaten back, beard pulled, cheeks struck, spitting &mdash; is explicitly fulfilled in Jesus&apos;s passion narrative (Matthew 26&ndash;27). Yet the Servant&apos;s response is not defeat but fierce resolve: &ldquo;I set my face like flint.&rdquo; The verb set (in Hebrew: siym) means to establish deliberately, to plant with intention. Suffering in the will of God is not humiliation but a display of unshakeable trust. The flint face is the image of someone who has calculated the cost and has not retreated.",
  },
  {
    id: "t3",
    color: PURPLE,
    title: "The Legal Challenge of Faith",
    body: "\"Who then will bring charges against me? Let us face each other. Who is my accuser? Let him confront me. It is the Sovereign LORD who helps me. Who will condemn me?\" (vv.8&ndash;9). This courtroom language of confidence anticipates Paul in Romans 8:31&ndash;34 almost exactly: &ldquo;If God is for us, who can be against us?... Who will bring any charge against those whom God has chosen?... Who is he that condemns?&rdquo; Paul draws directly on the Servant&apos;s legal confidence and transfers it to every believer in Christ.",
  },
  {
    id: "t4",
    color: GOLD,
    title: "Walking in Darkness and Trusting in God",
    body: "The chapter closes with a counterintuitive call: those who fear God but walk in darkness &mdash; no sense of light or direction &mdash; should &ldquo;trust in the name of the LORD and rely on their God&rdquo; &mdash; not light their own torches. This is one of the most pastorally powerful verses in Isaiah. The assumption is that faithful people can walk in genuine darkness: spiritual dryness, suffering, confusion, grief. The call is not to manufacture certainty but to trust the name and character of the God you have known.",
  },
  {
    id: "t5",
    color: ACCENT,
    title: "The Danger of Self-Lit Torches",
    body: "Verse 11 warns those who light their own fires and walk by their own torches: &ldquo;This is what you shall receive from my hand: you will lie down in torment.&rdquo; Self-made light is a fatal substitute for divine guidance. The temptation when God seems silent is to create artificial certainty through human schemes &mdash; to force a decision, engineer a solution, or manufacture a sense of direction when God has called us to wait. Isaiah warns that walking by our own torch leads to torment, not to the destination we sought.",
  },
];

const verseItems = [
  {
    id: "v1",
    ref: "vv.1-3",
    color: TEAL,
    title: "God's Arm Is Not Too Short",
    body: "This is what the LORD says: where is your mother&apos;s certificate of divorce? To whom did I sell you? It was for your sins you were sold; when I came why was there no one there? Was my arm too short to deliver? Surely the arm of the LORD is not too short to save. The chapter opens with two questions that expose a false inference Israel has drawn: that God&apos;s silence means God&apos;s absence, or that the exile means God has divorced or sold his people. God answers with rhetorical force: no divorce certificate exists, no sale receipt has been issued. Israel&apos;s captivity is a consequence of their own sin, not an abandonment by God. And when God came, no one responded. The arm that split the sea is not too short &mdash; the obstacle was not divine inability but human unresponsiveness.",
  },
  {
    id: "v2",
    ref: "v.4",
    color: GREEN,
    title: "The Instructed Tongue",
    body: "The Sovereign LORD has given me an instructed tongue, to know the word that sustains the weary; he wakens me morning by morning, wakens my ear to listen like one being instructed. The Servant now speaks for the first time in this song. The first thing he says is not about his mission but about his formation. Before he can sustain the weary, he must be wakened. Before he can speak, he must listen. The phrase &ldquo;morning by morning&rdquo; emphasizes regularity and daily dependence &mdash; this is not a one-time anointing but a daily discipline. The Servant is himself a student before he is a teacher, a receiver before he is a giver.",
  },
  {
    id: "v3",
    ref: "v.5",
    color: PURPLE,
    title: "Not Rebellious, Not Turned Away",
    body: "The Sovereign LORD has opened my ears; I have not been rebellious; I have not turned away. The opened ear is the precondition of obedience. The Hebrew idiom &ldquo;to open the ear&rdquo; means to reveal something, to draw someone into a confidence. God has brought the Servant into his counsel. And the Servant&apos;s response is complete: not rebellious (no active resistance) and not turned away (no passive withdrawal). Both dimensions of non-obedience &mdash; active disobedience and passive disengagement &mdash; are negated. Full obedience is the posture of the one who has heard.",
  },
  {
    id: "v4",
    ref: "vv.6-7",
    color: ROSE,
    title: "I Set My Face Like Flint",
    body: "I offered my back to those who beat me, my cheeks to those who pulled out my beard; I did not hide my face from mocking and spitting; because the Sovereign LORD helps me, I will not be disgraced; therefore I have set my face like flint. The grammar is important: the suffering is described in past tense (&ldquo;I offered... I did not hide&rdquo;) while the resolve is declared in present-future tense (&ldquo;I will not be disgraced... I have set my face&rdquo;). The experience of suffering is already absorbed; the determination to continue is fresh and firm. Flint is one of the hardest naturally occurring stones &mdash; it strikes sparks when struck. The Servant&apos;s face has become the hardest possible surface: unmoved, unturned, set toward Jerusalem. This exact language applies to Jesus in Luke 9:51: &ldquo;he steadfastly set his face to go to Jerusalem.&rdquo;",
  },
  {
    id: "v5",
    ref: "vv.8-9",
    color: PURPLE,
    title: "The Courtroom of Faith",
    body: "He who vindicates me is near; who then will bring charges against me? Let us face each other; who is my accuser? Let him confront me; it is the Sovereign LORD who helps me; who will condemn me? They will all wear out like a garment. The Servant summons his accusers to court with extraordinary confidence &mdash; not because he is invulnerable, but because his Vindicator is near. The adversarial imagery comes from the Hebrew legal system where accusation (rib) and vindication were formal judicial categories. Paul in Romans 8:33&ndash;34 borrows this exact framework: &ldquo;Who will bring any charge against those whom God has chosen? It is God who justifies. Who is he that condemns?&rdquo; The accusers wear out like a garment &mdash; temporary, decaying, unable to last against the permanence of divine justification.",
  },
  {
    id: "v6",
    ref: "vv.10-11",
    color: GOLD,
    title: "Walking in Darkness vs. Lighting Your Own Torch",
    body: "Who among you fears the LORD and obeys the word of his servant? Let the one who walks in the dark, who has no light, trust in the name of the LORD and rely on their God; but now, all you who light fires and provide yourselves with flaming torches, go, walk in the light of your fires; but this is what you shall have from my hand: you will lie down in torment. The chapter closes by addressing the community with two contrasting calls. To those walking in darkness without light &mdash; those who fear God but experience no clarity or consolation &mdash; the call is to trust and rely. Not to fix the darkness; not to manufacture light. To trust the name. The second call is a warning: those who cannot bear the darkness and choose to light their own fires will walk by their own torches &mdash; and the destination is torment, not safety. Human-generated certainty in the place of divine guidance is not a neutral substitute; it is actively destructive.",
  },
];

const applicationItems = [
  { id: "a1", color: TEAL, text: "Cultivate a morning discipline of listening to God before speaking for him &mdash; the Servant&apos;s instructed tongue was given morning by morning, not once for all." },
  { id: "a2", color: ROSE, text: "Set your face like flint in the direction God has called you when suffering comes; the Servant&apos;s resolve was not natural stoicism but confidence grounded in &ldquo;the Sovereign LORD helps me.&rdquo;" },
  { id: "a3", color: PURPLE, text: "Bring your accusations and fears into the courtroom of Romans 8 (and Isaiah 50); the question &ldquo;who will condemn?&rdquo; is answered definitively by the God who justifies." },
  { id: "a4", color: GOLD, text: "Resist lighting your own torch when God seems silent &mdash; trust in his name; the path of self-manufactured certainty ends in torment, not destination." },
  { id: "a5", color: GREEN, text: "Sustain weary people around you with words from your own sustained soul; what you give in ministry must first be received in the morning quiet." },
  { id: "a6", color: ACCENT, text: "Surrender the impulse to create your own certainty when God calls you to walk in faith; darkness is not the absence of God but often the context in which trust is most purely exercised." },
];

export default function Isaiah50GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${ROSE}20`, border: `1px solid ${ROSE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: ROSE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Isaiah 50 &mdash; Third Servant Song
          </div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.2 }}>
            I Set My Face Like Flint
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 660 }}>
            The third Servant Song: a short but devastating chapter on obedience in suffering. The Servant listens morning by morning, offers his back to those who beat him, and sets his face like flint &mdash; because the Sovereign LORD helps him. A call to trust in darkness rather than light your own torch.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
          {[
            ["Verses", "11"],
            ["Context", "Third Servant Song"],
            ["Key Quote", "Isa 50:7"],
          ].map(([k, v]) => (
            <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 16px" }}>
              <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? ROSE : BORDER}`,
                background: activeTab === t.id ? `${ROSE}20` : "transparent",
                color: activeTab === t.id ? ROSE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: ROSE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>Overview</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 50 is a short but profound chapter containing the third Servant Song (vv.4&ndash;9) &mdash; one of the most vivid descriptions of the Messiah&apos;s suffering and resolve in all of Scripture. At only eleven verses, it moves with extraordinary density: each verse carries more theological weight than entire chapters in other books. The chapter is a hinge in the four Servant Songs of Isaiah, standing between the song of mission (Isaiah 49) and the great song of substitutionary suffering (Isaiah 52:13&ndash;53:12)." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter opens with God questioning Israel in courtroom style: Did I send you away? No &mdash; your own sins sold you. Is my arm too short to redeem? Have I not split the sea? The opening verses (1&ndash;3) reestablish the capacity and willingness of God to save before the Servant speaks. This matters: the Servant&apos;s confidence in verses 4&ndash;9 is grounded in the same God whose redemptive power is asserted in verses 1&ndash;3." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Then the Servant speaks. He receives an instructed tongue morning by morning. He does not rebel or turn away. He offers his back to those who beat him, his cheeks to those who pull his beard, his face to mocking and spitting &mdash; and yet he is not disgraced. &ldquo;Because the Sovereign LORD helps me, I will not be disgraced; therefore I have set my face like flint.&rdquo; Luke 9:51 applies this flint-face image directly to Jesus: &ldquo;he steadfastly set his face to go to Jerusalem.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter closes (vv.10&ndash;11) with a pastoral call to the community: those who walk in darkness and have no light should trust in the name of the LORD &mdash; not manufacture their own. Those who light their own fires and walk by self-generated torchlight are warned: they will lie down in torment. The contrast between trusting in darkness and self-lighting in darkness is one of the most searching pastoral distinctions in Isaiah." }}
              />
            </div>

            {/* Key verse callout */}
            <div style={{ background: `${ROSE}12`, border: `1px solid ${ROSE}40`, borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
              <div style={{ color: ROSE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Key Verse &mdash; Isaiah 50:7</div>
              <p
                style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, fontStyle: "italic", margin: "0 0 10px" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Because the Sovereign LORD helps me, I will not be disgraced. Therefore have I set my face like flint, and I know I will not be put to shame.&rdquo;" }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Applied to Jesus in Luke 9:51 (&ldquo;he steadfastly set his face to go to Jerusalem&rdquo;) and in John 10:17&ndash;18 (the voluntary nature of his self-offering)." }}
              />
            </div>

            {/* Context cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
              {[
                { label: "The Four Servant Songs", color: TEAL, body: "Isaiah&apos;s four Servant Songs (42:1&ndash;9; 49:1&ndash;7; 50:4&ndash;9; 52:13&ndash;53:12) trace the Servant from his introduction and mission to his suffering and vindication. Isaiah 50 is the third song: the Servant who has been called and sent now faces suffering and chooses it with deliberate, flint-faced resolve." },
                { label: "New Testament Echoes", color: PURPLE, body: "The passion narrative in all four Gospels draws on Isaiah 50: the beating (Matthew 26:67; 27:26), the beard-pulling (implied in the mockery scenes), the spitting (Matthew 26:67; Mark 14:65; Luke 22:63). Romans 8:31&ndash;34 directly echoes the courtroom challenge of Isaiah 50:8&ndash;9. Luke 9:51 uses the flint-face imagery for Jesus." },
              ].map(c => (
                <div key={c.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: c.color, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>{c.label}</div>
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: c.body }}
                  />
                </div>
              ))}
            </div>

            {/* Videos section on overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 20px" }}>Teaching Videos</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {videoItems.map(v => (
                  <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "10px 12px" }}>
                      <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.5, margin: 0 }}>{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Isaiah 50</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 50&apos;s eleven verses carry five major theological threads: the formation of the Servant through daily listening, the nature of faithful suffering, the legal basis of confidence before accusers, the call to trust in divine darkness rather than self-generated light, and the warning against the self-lit torch. Each theme has profound pastoral implications for disciples of Jesus. Click to expand." }}
              />
            </div>

            {keyThemes.map(theme => (
              <div
                key={theme.id}
                style={{ background: CARD, border: `1px solid ${openTheme === theme.id ? theme.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenTheme(openTheme === theme.id ? null : theme.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, lineHeight: 1 }}>{openTheme === theme.id ? "-" : "+"}</span>
                </button>
                {openTheme === theme.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: theme.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Romans 8 connection box */}
            <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: "20px 24px", marginTop: 20 }}>
              <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Isaiah 50 and Romans 8 &mdash; Parallel Texts</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ color: TEAL, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>ISAIAH 50:8-9</div>
                  <p
                    style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;He who vindicates me is near. Who then will bring charges against me?... It is the Sovereign LORD who helps me. Who will condemn me? They will all wear out like a garment.&rdquo;" }}
                  />
                </div>
                <div>
                  <div style={{ color: ROSE, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>ROMANS 8:33-34</div>
                  <p
                    style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Who will bring any charge against those whom God has chosen? It is God who justifies. Who then is the one who condemns? No one.&rdquo;" }}
                  />
                </div>
              </div>
              <p
                style={{ color: MUTED, fontSize: 12, margin: "14px 0 0", lineHeight: 1.6 }}
                dangerouslySetInnerHTML={{ __html: "Paul is not paraphrasing Isaiah &mdash; he is applying the Servant&apos;s confidence to every believer who is &lsquo;in Christ.&rsquo; What the Servant experiences as the unique Son is transferred to all who are united with him." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse &mdash; Isaiah 50 (All 11 Verses)</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 50 is one of the densest short chapters in the Old Testament. It moves from God&apos;s legal self-defense (vv.1&ndash;3) to the Servant Song proper (vv.4&ndash;9) and closes with a pastoral call to the community (vv.10&ndash;11). Click each section to expand the commentary." }}
              />
            </div>

            {verseItems.map(item => (
              <div
                key={item.id}
                style={{ background: CARD, border: `1px solid ${openVerse === item.id ? item.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenVerse(openVerse === item.id ? null : item.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700, flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{item.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{openVerse === item.id ? "-" : "+"}</span>
                </button>
                {openVerse === item.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Structure summary */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 8 }}>
              <div style={{ color: TEXT, fontSize: 14, fontWeight: 700, marginBottom: 14 }}>Chapter Structure at a Glance</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { range: "vv.1-3", label: "God&apos;s Defense &mdash; My Arm Is Not Too Short", col: TEAL },
                  { range: "v.4", label: "The Morning Ear &mdash; The Instructed Tongue", col: GREEN },
                  { range: "v.5", label: "Opened Ear, No Rebellion", col: PURPLE },
                  { range: "vv.6-7", label: "Suffering Accepted &mdash; Face Set Like Flint", col: ROSE },
                  { range: "vv.8-9", label: "The Courtroom Challenge of Faith", col: PURPLE },
                  { range: "vv.10-11", label: "Trust in Darkness vs. Self-Lit Torch", col: GOLD },
                ].map(s => (
                  <div key={s.range} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ background: `${s.col}20`, color: s.col, fontSize: 11, fontWeight: 700, borderRadius: 6, padding: "2px 8px", flexShrink: 0, minWidth: 52, textAlign: "center" }}>{s.range}</span>
                    <p
                      style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.5 }}
                      dangerouslySetInnerHTML={{ __html: s.label }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Passion narrative connections */}
            <div style={{ background: `${ROSE}12`, border: `1px solid ${ROSE}40`, borderRadius: 12, padding: "20px 24px", marginTop: 14 }}>
              <div style={{ color: ROSE, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Fulfillment in the Passion Narrative</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { isa: "v.6a &mdash; back to those who beat me", nt: "Matthew 27:26; Mark 15:15 &mdash; flogged by Pilate&apos;s soldiers" },
                  { isa: "v.6b &mdash; cheeks to those who pulled beard", nt: "Matthew 26:67 &mdash; struck with fists and hands" },
                  { isa: "v.6c &mdash; face not hidden from spitting", nt: "Matthew 26:67; Mark 14:65 &mdash; they spat in his face" },
                  { isa: "v.7 &mdash; set face like flint", nt: "Luke 9:51 &mdash; steadfastly set his face toward Jerusalem" },
                ].map(c => (
                  <div key={c.isa} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <p style={{ color: ROSE, fontSize: 12, margin: 0, lineHeight: 1.5, fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: c.isa }} />
                    <p style={{ color: MUTED, fontSize: 12, margin: 0, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: c.nt }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Application</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 50 is one of the most practically demanding chapters in the Old Testament. The Servant&apos;s pattern &mdash; morning listening, non-rebellion, chosen suffering, flint-faced resolve, courtroom confidence, trust in darkness &mdash; is the pattern the New Testament calls disciples of Jesus to inhabit. These applications draw from the chapter&apos;s six major movements." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {applicationItems.map((a, i) => (
                <div key={a.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${a.color}20`, border: `1px solid ${a.color}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <span style={{ color: a.color, fontSize: 12, fontWeight: 800 }}>{i + 1}</span>
                  </div>
                  <p
                    style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: a.text }}
                  />
                </div>
              ))}
            </div>

            {/* The two paths diagram */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Two Responses to Darkness &mdash; Isaiah 50:10-11</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: TEAL, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Path 1 &mdash; Trust (v.10)</div>
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: "0 0 10px" }}
                    dangerouslySetInnerHTML={{ __html: "For those who fear the LORD and walk in darkness with no light: <strong style=\"color:#F2F2F8\">trust in the name of the LORD and rely on their God.</strong>" }}
                  />
                  <p style={{ color: TEAL, fontSize: 12, margin: 0 }}>Outcome: sustained by the God who is faithful in the dark</p>
                </div>
                <div style={{ background: `${ROSE}10`, border: `1px solid ${ROSE}30`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: ROSE, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Path 2 &mdash; Self-Light (v.11)</div>
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: "0 0 10px" }}
                    dangerouslySetInnerHTML={{ __html: "For those who light their own fires and walk by their own torches: <strong style=\"color:#F2F2F8\">go, walk in the light of your fires.</strong>" }}
                  />
                  <p style={{ color: ROSE, fontSize: 12, margin: 0 }}>Outcome: you will lie down in torment</p>
                </div>
              </div>
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: "16px 0 0" }}
                dangerouslySetInnerHTML={{ __html: "The contrast is between two kinds of people in darkness: those who trust God in it and those who resolve the discomfort by generating their own light. The first is faith; the second is a subtle form of idolatry &mdash; making yourself the source of guidance and certainty." }}
              />
            </div>

            {/* Reflection questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: ROSE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { q: "Do you have a consistent morning practice of listening to God before you speak for him? What does your morning routine communicate about the order of your discipleship?" },
                  { q: "Where in your life are you currently walking in darkness &mdash; genuine absence of clarity, direction, or consolation? What does Isaiah 50:10 call you to do in that place?" },
                  { q: "Are you tempted to light your own torch in a place where God has called you to wait? What form does self-generated certainty take in your specific situation?" },
                  { q: "The Servant set his face like flint because &ldquo;the Sovereign LORD helps me.&rdquo; What suffering in your life calls for the same flint-faced resolve rooted in divine help rather than personal toughness?" },
                  { q: "Romans 8:31&ndash;34 transfers the Servant&apos;s courtroom confidence to you. Do you live with that confidence? What accusations (internal or external) most need to be brought before the God who justifies?" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: ROSE, fontWeight: 800, fontSize: 14, flexShrink: 0, marginTop: 1 }}>Q{i + 1}</span>
                    <p
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Closing prayer prompt */}
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
              <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Prayer Prompt</div>
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 10px", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Sovereign LORD, waken my ear morning by morning before you send me out. Where you call me to suffer or to wait in darkness, let me set my face like flint &mdash; not by my own courage but because you help me. Silence every accuser with the answer that you justify. And where I have lit my own torch because I could not bear your silence, forgive me and call me back to trust in your name.&rdquo;" }}
              />
              <p
                style={{ color: MUTED, fontSize: 12, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Based on Isaiah 50:4, 7, 8-9, 10" }}
              />
            </div>

            {/* Videos at the bottom of application */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 20px" }}>Continue Learning &mdash; Teaching Videos</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(v => (
                  <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <p style={{ color: TEXT, fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
