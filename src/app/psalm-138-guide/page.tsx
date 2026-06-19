"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface Accordion { id: string; title: string; ref: string; body: string; }

const THEME_ITEMS: Accordion[] = [
  {
    id: "theme-wholehearted",
    title: "Wholehearted Thanksgiving Before the Gods",
    ref: "Psalm 138:1",
    body:
      "<p>David opens this psalm with undivided devotion: &ldquo;I give you thanks, O LORD, with my whole heart; before the gods I sing your praise&rdquo; (138:1). The thanksgiving is total &mdash; nothing held back, no corner of the heart withheld. To give thanks with the whole heart is to refuse the divided, half-hearted worship that so easily creeps in.</p>" +
      "<p>And David sings this praise &ldquo;before the gods.&rdquo; Whether this means the rival deities of the nations, the powers of the heavenly realm, or the rulers who fancied themselves gods, the point is bold confidence. David lifts his voice to the one true God in the very presence of every rival power, unashamed and unafraid. His worship is not a private matter whispered in the dark but a public declaration made in the face of all competing loyalties.</p>" +
      "<p>This is the posture every believer is called to. In a world full of substitute gods &mdash; money, power, self, and a hundred other rivals &mdash; we are to sing the praise of the LORD wholeheartedly and openly, declaring that he alone is God. (Compare Daniel 3:16&ndash;18 and the bold confession of those who would not bow.)</p>",
  },
  {
    id: "theme-name-word",
    title: "Exalted Above All: God's Name and His Word",
    ref: "Psalm 138:2",
    body:
      "<p>David bows in worship: &ldquo;I bow down toward your holy temple and give thanks to your name for your steadfast love and your faithfulness&rdquo; (138:2). He thanks God for the two great pillars of the covenant &mdash; <em>hesed</em>, steadfast love, and <em>emet</em>, faithfulness. These are the qualities that make God utterly trustworthy: a love that will not let go and a faithfulness that never fails.</p>" +
      "<p>Then comes one of the most remarkable statements in all the Psalms: &ldquo;for you have exalted above all things your name and your word&rdquo; (138:2). God has magnified his word, his promise, to a place of supreme honor. The God who is high above all has bound himself to keep his word, and he holds that word in the highest esteem.</p>" +
      "<p>This is staggering when we consider it. The God who needs nothing has chosen to stake his own name on his promises. He will be faithful to what he has spoken because he has exalted his word above all things. For the believer, this means the promises of Scripture rest on the highest possible foundation &mdash; the honor of God&rsquo;s own name. &ldquo;Heaven and earth will pass away, but my words will not pass away&rdquo; (Matthew 24:35; see also Isaiah 55:11).</p>",
  },
  {
    id: "theme-answered",
    title: "Answered Prayer That Increases Inner Strength",
    ref: "Psalm 138:3",
    body:
      "<p>David recalls a specific experience of answered prayer: &ldquo;On the day I called, you answered me; my strength of soul you increased&rdquo; (138:3). Two things stand out. First, God answered &mdash; not eventually, not vaguely, but &ldquo;on the day I called.&rdquo; God is not deaf to the cries of his people; he hears and he responds.</p>" +
      "<p>Second, the answer was not merely outward but inward: God &ldquo;increased the strength of his soul.&rdquo; The deepest answer to prayer is often not the removal of the trouble but the strengthening of the one who prays. God pours courage and resolve into the inner person, making the believer bold and steady where before there was fear and weakness.</p>" +
      "<p>This is a pattern worth treasuring. When we cry to God, he may change our circumstances, but he will certainly strengthen our souls. The Apostle Paul knew this well: when he pleaded three times for his thorn to be removed, the answer he received was, &ldquo;My grace is sufficient for you, for my power is made perfect in weakness&rdquo; (2 Corinthians 12:9). God&rsquo;s answers reach all the way to the soul.</p>",
  },
  {
    id: "theme-kings",
    title: "All the Kings of the Earth Shall Give Thanks",
    ref: "Psalm 138:4&ndash;5",
    body:
      "<p>David&rsquo;s vision now widens to take in the whole earth: &ldquo;All the kings of the earth shall give you thanks, O LORD, for they have heard the words of your mouth, and they shall sing of the ways of the LORD, for great is the glory of the LORD&rdquo; (138:4&ndash;5). The praise that began in David&rsquo;s single heart is destined to fill the courts of kings and the ends of the earth.</p>" +
      "<p>What moves these kings to worship? &ldquo;They have heard the words of your mouth.&rdquo; It is the word of God &mdash; the very thing God has exalted above all things &mdash; that draws the nations to praise. The same exalted word that secures the believer&rsquo;s confidence will one day bring even the rulers of the earth to their knees in thanksgiving.</p>" +
      "<p>This is a prophetic glimpse of the kingdom of God, when the gospel goes out to all nations and the kings of the earth bring their glory into the city of God (Revelation 21:24). The psalm of one man&rsquo;s thanksgiving becomes a window onto the worship of the whole redeemed world, all singing of the ways of the LORD because great is his glory.</p>",
  },
  {
    id: "theme-lowly",
    title: "The High God Who Regards the Lowly",
    ref: "Psalm 138:6",
    body:
      "<p>At the center of the psalm stands a beautiful paradox: &ldquo;For though the LORD is high, he regards the lowly, but the haughty he knows from afar&rdquo; (138:6). The greatness of God is displayed not in distance from the small but in his tender attention to them. The highest God stoops to regard the lowliest people.</p>" +
      "<p>This divine condescension runs all through Scripture. &ldquo;For thus says the One who is high and lifted up... I dwell in the high and holy place, and also with him who is of a contrite and lowly spirit&rdquo; (Isaiah 57:15). Mary sang of the God who &ldquo;has looked on the humble estate of his servant&rdquo; and &ldquo;has brought down the mighty from their thrones and exalted those of humble estate&rdquo; (Luke 1:48, 52). &ldquo;God opposes the proud but gives grace to the humble&rdquo; (James 4:6).</p>" +
      "<p>The haughty, by contrast, God &ldquo;knows from afar&rdquo; &mdash; he keeps the proud at a distance, refusing them the nearness he grants to the humble. The way to the heart of the high God is the way down, the way of lowliness. The lower we bow, the nearer he draws; the higher we exalt ourselves, the farther we place ourselves from his grace.</p>",
  },
  {
    id: "theme-purpose",
    title: "The LORD Will Fulfill His Purpose for Me",
    ref: "Psalm 138:7&ndash;8",
    body:
      "<p>The psalm rises to a great crescendo of confidence. First, preservation in trouble: &ldquo;Though I walk in the midst of trouble, you preserve my life; you stretch out your hand against the wrath of my enemies, and your right hand delivers me&rdquo; (138:7). David does not expect a life free of trouble, but he is certain that God will keep him through it.</p>" +
      "<p>Then comes the towering promise: &ldquo;The LORD will fulfill his purpose for me; your steadfast love, O LORD, endures forever&rdquo; (138:8). David is confident that God has a purpose for his life and that God himself will bring it to completion. This is not self-confidence but God-confidence &mdash; the certainty that the One who began his work will finish it. Paul echoes this very hope: &ldquo;he who began a good work in you will bring it to completion at the day of Jesus Christ&rdquo; (Philippians 1:6).</p>" +
      "<p>The psalm ends with a tender plea that flows from that confidence: &ldquo;Do not forsake the work of your hands&rdquo; (138:8). David sees himself as God&rsquo;s ongoing project, a work still being shaped by the Maker&rsquo;s hands. He asks God not to abandon what he has begun &mdash; and the asking is itself an act of faith, for he knows the God of steadfast love does not forsake the work of his hands.</p>",
  },
];

const VERSE_ITEMS: Accordion[] = [
  {
    id: "verse-1",
    title: "I Give You Thanks with My Whole Heart",
    ref: "Psalm 138:1&ndash;3",
    body:
      "<p>&ldquo;I give you thanks, O LORD, with my whole heart; before the gods I sing your praise&rdquo; (138:1). David begins with undivided, wholehearted thanksgiving, sung boldly in the presence of every rival power. His worship is total and unafraid, declaring the LORD alone to be God in the face of all competitors.</p>" +
      "<p>&ldquo;I bow down toward your holy temple and give thanks to your name for your steadfast love and your faithfulness, for you have exalted above all things your name and your word&rdquo; (138:2). David thanks God for his steadfast love and faithfulness &mdash; the twin pillars of the covenant &mdash; and marvels that God has lifted his own word to the place of supreme honor. The promises of God rest on the highest of all foundations: the honor of his name.</p>" +
      "<p>&ldquo;On the day I called, you answered me; my strength of soul you increased&rdquo; (138:3). David recalls a particular answer to prayer. God did not delay, and his answer reached the inner person: he increased the strength of David&rsquo;s soul. The deepest gift of answered prayer is often a soul made strong and bold by grace.</p>",
  },
  {
    id: "verse-2",
    title: "All the Kings of the Earth Shall Give Thanks",
    ref: "Psalm 138:4&ndash;6",
    body:
      "<p>&ldquo;All the kings of the earth shall give you thanks, O LORD, for they have heard the words of your mouth&rdquo; (138:4). David&rsquo;s personal praise widens into a prophetic vision: the rulers of the whole earth will one day join the song, drawn by the very words of God&rsquo;s mouth. The exalted word of God will gather the nations to worship.</p>" +
      "<p>&ldquo;And they shall sing of the ways of the LORD, for great is the glory of the LORD&rdquo; (138:5). The kings will not merely acknowledge God but sing of his ways, celebrating his glory. What began as one man&rsquo;s thanksgiving becomes a window onto the worship of the redeemed world.</p>" +
      "<p>&ldquo;For though the LORD is high, he regards the lowly, but the haughty he knows from afar&rdquo; (138:6). At the heart of the psalm stands this beautiful paradox: the high God stoops to regard the lowly, while keeping the proud at a distance. His greatness shines precisely in his tender attention to the humble. The way to the heart of the exalted God is the way of lowliness.</p>",
  },
  {
    id: "verse-3",
    title: "Though I Walk in the Midst of Trouble",
    ref: "Psalm 138:7",
    body:
      "<p>&ldquo;Though I walk in the midst of trouble, you preserve my life&rdquo; (138:7). David is honest about the reality of trouble &mdash; he expects to walk through the midst of it &mdash; yet he is equally certain of God&rsquo;s preserving care. The path of faith leads through danger, not around it, but the believer is kept safe within it.</p>" +
      "<p>&ldquo;You stretch out your hand against the wrath of my enemies, and your right hand delivers me&rdquo; (138:7). David pictures God actively intervening: stretching out his hand against the rage of his foes and saving him with his powerful right hand. The same God who increased the strength of his soul also acts in power to deliver him.</p>" +
      "<p>This single verse holds together two truths the believer must always keep together: trouble is real, and God&rsquo;s preserving hand is real. We are not promised a life without enemies or distress, but we are promised that the right hand of God will deliver us through every trial appointed to us.</p>",
  },
  {
    id: "verse-4",
    title: "The LORD Will Fulfill His Purpose for Me",
    ref: "Psalm 138:8",
    body:
      "<p>&ldquo;The LORD will fulfill his purpose for me&rdquo; (138:8). The psalm reaches its summit with one of the great statements of confidence in all of Scripture. David is sure that God has a purpose for his life and that God himself will see it through to completion. This is not self-confidence but rest in the persevering work of God.</p>" +
      "<p>&ldquo;Your steadfast love, O LORD, endures forever&rdquo; (138:8). The ground of David&rsquo;s confidence is God&rsquo;s eternal <em>hesed</em>. Because God&rsquo;s steadfast love never runs out, his purpose for his people will never be abandoned. The same love that began the work guarantees its completion.</p>" +
      "<p>&ldquo;Do not forsake the work of your hands&rdquo; (138:8). The psalm ends in prayer. David sees himself as God&rsquo;s handiwork, a project still being shaped, and he asks the Maker not to abandon what he has begun. The plea is itself an act of faith, resting on the certainty that the God of everlasting love will indeed finish what he started (compare Philippians 1:6).</p>",
  },
];

const APPLICATION_ITEMS: Accordion[] = [
  {
    id: "app-wholehearted",
    title: "Worship Wholeheartedly and Boldly",
    ref: "Psalm 138:1",
    body:
      "<p>David gives thanks &ldquo;with my whole heart&rdquo; and sings &ldquo;before the gods.&rdquo; Our worship is often divided and timid &mdash; half-attentive, easily distracted, quietly ashamed before a watching world. The psalm calls us to undivided, unafraid praise that declares the LORD alone to be God in the face of every rival.</p>" +
      "<p>Examine where your heart is divided. What rival &ldquo;gods&rdquo; &mdash; comfort, approval, security, success &mdash; quietly compete for your devotion? Bring your whole heart back to the one true God, and let your worship be bold and public, unashamed to sing his praise before all competing loyalties.</p>",
  },
  {
    id: "app-word",
    title: "Trust the Word God Has Exalted",
    ref: "Psalm 138:2",
    body:
      "<p>God has &ldquo;exalted above all things&rdquo; his name and his word. The promises of Scripture are not fragile hopes but the firmest reality in the universe, secured by the honor of God&rsquo;s own name. When everything else feels uncertain, the word of God remains exalted above all.</p>" +
      "<p>Build your life on the promises God has spoken. When fear and doubt assail you, return to his word and rest your weight on it. The God who magnifies his own word above all things will be faithful to keep it. &ldquo;Heaven and earth will pass away, but my words will not pass away&rdquo; (Matthew 24:35).</p>",
  },
  {
    id: "app-strength",
    title: "Pray for Strength of Soul",
    ref: "Psalm 138:3",
    body:
      "<p>&ldquo;On the day I called, you answered me; my strength of soul you increased.&rdquo; We often pray only for our circumstances to change. But the deepest answer to prayer is a strengthened soul &mdash; courage, steadiness, and resolve poured into the inner person, even when the trouble remains.</p>" +
      "<p>When you bring your burdens to God, ask not only that he would change your situation but that he would increase the strength of your soul to meet it. He may or may not lift the trial, but he delights to make his power perfect in weakness, strengthening you from within (2 Corinthians 12:9).</p>",
  },
  {
    id: "app-lowly",
    title: "Walk in Lowliness Before the High God",
    ref: "Psalm 138:6",
    body:
      "<p>&ldquo;Though the LORD is high, he regards the lowly, but the haughty he knows from afar.&rdquo; The way to the nearness of God is the way down. Pride keeps us at arm&rsquo;s length from his grace, while humility draws us into his presence. The high God stoops to the lowly.</p>" +
      "<p>Cultivate lowliness of heart. Resist the pull toward self-importance and self-sufficiency that keeps the proud at a distance from God. Humble yourself under his mighty hand, knowing that he gives grace to the humble and will lift you up in due time (James 4:6, 10; 1 Peter 5:6).</p>",
  },
  {
    id: "app-purpose",
    title: "Rest in God's Purpose for Your Life",
    ref: "Psalm 138:7&ndash;8",
    body:
      "<p>&ldquo;The LORD will fulfill his purpose for me... do not forsake the work of your hands.&rdquo; You are God&rsquo;s ongoing project, a work still being shaped by his hands. Your hope does not rest on your own strength or consistency but on the persevering love of the God who began the work and has promised to complete it.</p>" +
      "<p>When you feel unfinished, discouraged by your own slow progress, or afraid of failing, return to this confidence. The God of everlasting steadfast love will not abandon the work of his hands. &ldquo;He who began a good work in you will bring it to completion at the day of Jesus Christ&rdquo; (Philippians 1:6). Rest in his purpose, and ask him, with David, never to forsake the work he is doing in you.</p>",
  },
];

const REFLECTION_QUESTIONS: string[] = [
  "David gives thanks &ldquo;with my whole heart.&rdquo; Where is your own worship divided or half-hearted, and what would it look like to bring your whole heart back to God this week?",
  "What does it mean to praise God &ldquo;before the gods&rdquo; &mdash; boldly, in the face of rival loyalties? Which competing &ldquo;gods&rdquo; tempt you toward timid or compromised worship?",
  "God has &ldquo;exalted above all things&rdquo; his name and his word. How does the supreme honor God gives to his own promises strengthen your confidence in Scripture?",
  "Recall a time when God answered prayer not by changing your circumstances but by increasing the strength of your soul. How did that inner strengthening change you?",
  "How does the paradox of verse 6 &mdash; the high God who regards the lowly &mdash; reshape your understanding of true greatness and the path to God&rsquo;s nearness?",
  "&ldquo;The LORD will fulfill his purpose for me.&rdquo; How does the confidence that God will complete the work he began (Philippians 1:6) steady you when you feel unfinished or discouraged?",
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 138 &mdash; I Give You Thanks with My Whole Heart" },
  { videoId: "OjJ7GkWCHvA", title: "Exalted Above All: God&rsquo;s Name and His Word" },
  { videoId: "pHBzJ2dVXgk", title: "The High God Who Regards the Lowly" },
  { videoId: "3sO5FH2ybPY", title: "The LORD Will Fulfill His Purpose for Me" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

export default function Psalm138Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const wrap: React.CSSProperties = { maxWidth: 880, margin: "0 auto", padding: "0 1.25rem" };
  const card: React.CSSProperties = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.6rem", marginBottom: "1.25rem" };
  const sectionTitle: React.CSSProperties = { color: GOLD, fontSize: "1.35rem", fontWeight: 700, margin: "0 0 0.85rem" };
  const para: React.CSSProperties = { color: TEXT, fontSize: "1.02rem", lineHeight: 1.75 };

  const renderAccordion = (items: Accordion[], accent: string) => (
    <div>
      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: "0.85rem", overflow: "hidden", background: CARD }}>
            <button
              type="button"
              onClick={() => toggle(it.id)}
              aria-expanded={isOpen}
              style={{
                width: "100%", textAlign: "left", background: "transparent", border: "none", cursor: "pointer",
                padding: "1.1rem 1.3rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem",
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <span style={{ color: TEXT, fontSize: "1.08rem", fontWeight: 650 }}>{it.title}</span>
                <span style={{ color: accent, fontSize: "0.85rem", fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: it.ref }} />
              </span>
              <span style={{ color: accent, fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }}>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
              <div
                style={{ padding: "0 1.3rem 1.3rem", color: TEXT, fontSize: "1.0rem", lineHeight: 1.75 }}
                dangerouslySetInnerHTML={{ __html: it.body }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      {/* Hero */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: `linear-gradient(160deg, ${CARD}, ${BG})` }}>
        <div style={{ ...wrap, paddingTop: "2.75rem", paddingBottom: "2.5rem" }}>
          <p style={{ color: GREEN, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.82rem", margin: "0 0 0.65rem" }}>
            A Study Guide &mdash; The Vine
          </p>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0 0 0.75rem", lineHeight: 1.15 }}>
            Psalm 138
          </h1>
          <p style={{ color: MUTED, fontSize: "1.12rem", lineHeight: 1.6, margin: "0 0 1.5rem", maxWidth: 640 }}
            dangerouslySetInnerHTML={{ __html: "A thanksgiving of David &mdash; wholehearted praise sung before the gods, wonder at the God who exalts his word above all things and regards the lowly, and unshakable confidence that the LORD will fulfill his purpose for his people." }}
          />
          <div style={{ background: "rgba(58,125,86,0.10)", border: `1px solid ${GREEN}`, borderRadius: 14, padding: "1.3rem 1.5rem" }}>
            <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.07em", textTransform: "uppercase", margin: "0 0 0.55rem" }}>
              Key Verse &mdash; Psalm 138:8
            </p>
            <p style={{ color: TEXT, fontSize: "1.22rem", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD will fulfill his purpose for me; your steadfast love, O LORD, endures forever. Do not forsake the work of your hands.&rdquo;" }}
            />
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ ...wrap, display: "flex", gap: "0.4rem", overflowX: "auto", paddingTop: "0.7rem", paddingBottom: "0.7rem" }}>
          {TABS.map((t) => {
            const activeTab = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => { setTab(t); setOpen(null); }}
                style={{
                  flexShrink: 0, padding: "0.55rem 1.05rem", borderRadius: 999, cursor: "pointer",
                  fontSize: "0.92rem", fontWeight: 650,
                  border: `1px solid ${activeTab ? GREEN : BORDER}`,
                  background: activeTab ? GREEN : "transparent",
                  color: activeTab ? "#FFFFFF" : MUTED,
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Panels */}
      <div style={{ ...wrap, paddingTop: "2rem", paddingBottom: "4rem" }}>
        {tab === "overview" && (
          <div>
            <div style={card}>
              <h2 style={sectionTitle}>Summary</h2>
              <p style={para} dangerouslySetInnerHTML={{ __html: "Psalm 138 is a psalm of David, a thanksgiving overflowing with confident trust in God&rsquo;s purpose. It begins with wholehearted praise sung boldly &ldquo;before the gods,&rdquo; thanking the LORD for his steadfast love and faithfulness and marveling that he has exalted his name and his word above all things. David recalls a day of answered prayer when God increased the strength of his soul, and he looks ahead to a time when all the kings of the earth will give God thanks." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "At the heart of the psalm lies a beautiful paradox &mdash; though the LORD is high, he regards the lowly &mdash; and the psalm closes with one of Scripture&rsquo;s great statements of confidence: &ldquo;The LORD will fulfill his purpose for me; your steadfast love, O LORD, endures forever. Do not forsake the work of your hands.&rdquo; David rests his whole future on the persevering love of God." }} />
            </div>
            <div style={card}>
              <h2 style={sectionTitle}>Structure</h2>
              <p style={para} dangerouslySetInnerHTML={{ __html: "<strong>138:1&ndash;3 &mdash; Wholehearted Thanksgiving.</strong> Praise sung before the gods; thanks for God&rsquo;s steadfast love and faithfulness; his word exalted above all; answered prayer that strengthens the soul." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "<strong>138:4&ndash;6 &mdash; The Kings and the Lowly.</strong> All the kings of the earth will give thanks when they hear God&rsquo;s words; the high God who regards the lowly and knows the haughty from afar." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "<strong>138:7 &mdash; Preserved in Trouble.</strong> Though walking in the midst of trouble, God preserves his life and his right hand delivers." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "<strong>138:8 &mdash; The LORD Will Fulfill His Purpose.</strong> Confidence in God&rsquo;s persevering purpose; his everlasting steadfast love; the plea, &ldquo;Do not forsake the work of your hands.&rdquo;" }} />
            </div>
            <div style={card}>
              <h2 style={sectionTitle}>Context</h2>
              <p style={para} dangerouslySetInnerHTML={{ __html: "Psalm 138 is the first in a cluster of eight psalms of David that close the fifth book of the Psalter (Psalms 138&ndash;145), a series rich in personal thanksgiving and confident trust. Like much of David&rsquo;s poetry, it arises from real experience &mdash; a day of distress, a cry for help, and an answer that strengthened the soul &mdash; though the exact occasion is not named." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "Two great notes ring out through the psalm. First, the supreme honor God gives to his own word: &ldquo;you have exalted above all things your name and your word&rdquo; (138:2). The promises of God rest on the highest possible foundation. Second, the theme of divine condescension: &ldquo;though the LORD is high, he regards the lowly&rdquo; (138:6), a truth woven through Scripture (Isaiah 57:15; Luke 1:48&ndash;52; James 4:6) and embodied above all in the incarnation of Christ." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "The psalm&rsquo;s closing confidence &mdash; &ldquo;the LORD will fulfill his purpose for me&rdquo; &mdash; anticipates the New Testament assurance that &ldquo;he who began a good work in you will bring it to completion at the day of Jesus Christ&rdquo; (Philippians 1:6). The believer is God&rsquo;s ongoing work, shaped and kept by the everlasting love of the One who will never forsake the work of his hands." }} />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.0rem", lineHeight: 1.6, margin: "0 0 1.4rem" }}
              dangerouslySetInnerHTML={{ __html: "Six themes that carry the heart of Psalm 138. Tap each to open. Cross-references are woven throughout to connect the psalm to the wider testimony of Scripture." }}
            />
            {renderAccordion(THEME_ITEMS, GOLD)}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.0rem", lineHeight: 1.6, margin: "0 0 1.4rem" }}
              dangerouslySetInnerHTML={{ __html: "Move through Psalm 138 section by section. Each entry opens to a close reading of the text in its own movement, from wholehearted thanksgiving to confident trust in God&rsquo;s purpose." }}
            />
            {renderAccordion(VERSE_ITEMS, TEAL)}
          </div>
        )}

        {tab === "application" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.0rem", lineHeight: 1.6, margin: "0 0 1.4rem" }}
              dangerouslySetInnerHTML={{ __html: "Psalm 138 is not only to be admired but lived. These applications, questions, teaching videos, and a closing prayer are offered to help the truth of the psalm take root in daily life." }}
            />
            {renderAccordion(APPLICATION_ITEMS, PURPLE)}

            <div style={{ ...card, marginTop: "1.75rem", borderColor: ROSE }}>
              <h2 style={{ ...sectionTitle, color: ROSE }}>Questions for Reflection</h2>
              <ol style={{ margin: 0, paddingLeft: "1.25rem" }}>
                {REFLECTION_QUESTIONS.map((q, i) => (
                  <li key={i} style={{ color: TEXT, fontSize: "1.0rem", lineHeight: 1.7, marginBottom: "0.85rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h2 style={{ ...sectionTitle, marginTop: "2.25rem" }}>Teaching Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.4rem", marginBottom: "1rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", background: CARD }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: "0.92rem", padding: "0.8rem 1rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              ))}
            </div>

            <div style={{ ...card, marginTop: "1.5rem", background: "rgba(107,79,187,0.10)", borderColor: PURPLE }}>
              <h2 style={{ ...sectionTitle, color: PURPLE }}>A Closing Prayer</h2>
              <p style={para} dangerouslySetInnerHTML={{ __html: "O LORD our God, we give you thanks with our whole hearts and sing your praise before every rival power, for you alone are God. We thank you for your steadfast love and your faithfulness, and we marvel that you have exalted above all things your name and your word. Teach us to build our lives on the promises you have so highly honored." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "On the day we call, answer us, and increase the strength of our souls. Though you are high and lifted up, you regard the lowly; humble our hearts, draw us near, and keep us from the pride that you know only from afar. When we walk in the midst of trouble, preserve our lives, and let your right hand deliver us." }} />
              <p style={para} dangerouslySetInnerHTML={{ __html: "We rest in this confidence: you will fulfill your purpose for us, for your steadfast love endures forever. Do not forsake the work of your hands, but bring to completion the good work you have begun, until the day of Jesus Christ. Through him, the high God who came low for us, we pray. Amen." }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
