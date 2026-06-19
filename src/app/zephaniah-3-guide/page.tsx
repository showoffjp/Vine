"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48", BLUE = "#3B82F6";
const ACCENT = TEAL;

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const THEMES = [
  {
    id: "corrupt-leaders",
    color: ROSE,
    title: "The Indictment of Jerusalem&rsquo;s Leaders",
    html: "Zephaniah 3:1&ndash;4 contains one of the most concentrated leadership indictments in the Minor Prophets. Four institutions are charged in four verses, each with its own devastating metaphor. The officials (princes/rulers) are &ldquo;roaring lions&rdquo; (v. 3) &mdash; predators within the city rather than protectors of it. The judges are &ldquo;evening wolves that leave nothing till the morning&rdquo; &mdash; so rapacious that by dawn nothing remains of what they have consumed. The prophets are &ldquo;wanton, faithless persons&rdquo; (NRSV: &ldquo;reckless, treacherous men&rdquo;) &mdash; the word in Hebrew suggests someone who effervesces, someone light and untethered, unable to be trusted with the word of God. The priests &ldquo;profane what is holy and do violence to the law.&rdquo; Each institution has failed at its core function: rulers protect but devour; judges adjudicate but consume; prophets speak truth but are faithless; priests guard holiness but desecrate it. The cumulative indictment is of a city whose entire institutional architecture has inverted. This is not peripheral corruption &mdash; it is systemic. And yet God remains in the city&rsquo;s midst (v. 5), righteous every morning, revealing his justice &mdash; a standing rebuke to the corruption around him.",
  },
  {
    id: "gods-righteousness",
    color: GOLD,
    title: "The Contrast with God&rsquo;s Steadfast Righteousness",
    html: "Verse 5 is the theological hinge of the chapter&rsquo;s opening section: &ldquo;The LORD within her is righteous; he does no injustice; every morning he shows forth his justice; each dawn he does not fail; but the unjust knows no shame.&rdquo; The structure is deliberate: verses 1&ndash;4 catalog the failure of every human institution in Jerusalem; verse 5 plants God himself in the center of the city as the one who has not failed. Every morning &mdash; the same phrase used of God&rsquo;s new mercies in Lamentations 3:23 &mdash; God reveals his justice. The contrast with the leaders could not be sharper: they hide injustice at night; God reveals righteousness at dawn. The tragedy noted in the verse&rsquo;s second half is the city&rsquo;s response: &ldquo;the unjust knows no shame.&rdquo; God&rsquo;s visible righteousness does not produce repentance &mdash; the corrupt have become anesthetized to the contrast between themselves and the God in their midst. This is one of Scripture&rsquo;s most searching descriptions of moral hardening: not ignorance of God&rsquo;s righteousness, but indifference to it.",
  },
  {
    id: "purified-remnant",
    color: TEAL,
    title: "The Purified Remnant: No Lies, No Deceit",
    html: "Zephaniah 3:9&ndash;13 introduces one of the most striking features of the prophetic restoration vision: the purified people who speak no lies and have no deceitful tongue. Verse 9 promises a &ldquo;pure speech&rdquo; (Hebrew: <em>saphah berurah</em> &mdash; literally &ldquo;a purified lip&rdquo;) given to the peoples so they may call on the LORD and serve him with one accord. This echoes and reverses Babel (Genesis 11), where diverse language scattered the nations; here, purified speech re-gathers them around the worship of God. The remnant that remains in Israel is described with striking specificity (v. 13): they &ldquo;shall do no injustice and speak no lies; nor shall there be found in their mouth a deceitful tongue.&rdquo; The three offenses &mdash; injustice, lies, deceit &mdash; are precisely the offenses named in the indictment of Jerusalem&rsquo;s leaders (v. 1&ndash;4). The remnant is defined by the absence of what destroyed the city. They are humble and lowly (v. 12), seeking refuge in the name of the LORD &mdash; the opposite of the proud and arrogant who did not trust God (v. 2). They will &ldquo;pasture and lie down, and none shall make them afraid&rdquo; (v. 13) &mdash; an image of shalom as secure rest, echoing the pastoral images of Micah 4:4 and Ezekiel 34:25.",
  },
  {
    id: "reversal-joy",
    color: PURPLE,
    title: "The Great Reversal: From Judgment to Uncontainable Joy",
    html: "Zephaniah 3:14&ndash;17 is among the most astonishing reversals in the entire Old Testament. Without narrative transition, the voice of doom becomes a voice of exultation: &ldquo;Sing aloud, O daughter of Zion; shout, O Israel! Rejoice and exult with all your heart, O daughter of Jerusalem!&rdquo; (v. 14). The imperative to sing comes immediately after the description of the humble, speechless remnant &mdash; as if the only appropriate response to what God has done is the song that was silenced during judgment. The theological explanation for the reversal is given in verse 15: &ldquo;The LORD has taken away the judgments against you; he has cleared away your enemies. The King of Israel, the LORD, is in your midst; you shall never again fear evil.&rdquo; Two things have happened: the sentence has been lifted, and the enemy has been removed. And the presence of the King in the midst of the city &mdash; which in 3:5 was a rebuke to corruption &mdash; is now the source of total security. The climax of the reversal is verse 17, which contains what is arguably the most beautiful verse in the Minor Prophets. The fear that characterized Judah throughout the judgment period is directly addressed: &ldquo;Do not fear, O Zion; let not your hands grow weak&rdquo; (v. 16). God himself will replace the city&rsquo;s fear with his own presence.",
  },
  {
    id: "god-singing",
    color: GREEN,
    title: "The Singing God: Zephaniah 3:17 and the Only Place in the Old Testament Where God Sings",
    html: "Zephaniah 3:17 contains a theological datum of extraordinary significance: <strong>this is the only place in the entire Old Testament where God is described as singing</strong>. &ldquo;The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.&rdquo; Every element of this verse is theologically dense. <em>Mighty one who will save</em>: the combination of power and salvation is the gospel in miniature &mdash; the mighty one does not merely have the ability to save but actively, personally does so. <em>Rejoice over you with gladness</em>: God&rsquo;s emotional state is gladness, directed toward his people &mdash; not reluctant mercy but genuine delight. <em>He will quiet you by his love</em>: the Hebrew here is disputed. Some translations have &ldquo;he will be silent in his love&rdquo; (the silent contemplation of deep love) or &ldquo;he will renew you in his love.&rdquo; Either way the image is of love so deep it produces either reverent silence or transformative renewal. <em>He will exult over you with loud singing</em>: the word for &ldquo;exult&rdquo; (gil) describes the spinning, leaping joy of celebration; the word for &ldquo;singing&rdquo; (rinnah) is the shout of joy used in the psalms. The God who created music and commanded his people to sing is here himself singing &mdash; and his song is about them. This verse has been called &ldquo;the gospel in the Old Testament&rdquo; by multiple commentators. It anticipates the NT image of the rejoicing father running to meet the prodigal son, and ultimately the joy of the Lamb&rsquo;s wedding supper in Revelation 19.",
  },
];

const VERSES = [
  {
    id: "v1-5",
    ref: "Zephaniah 3:1&ndash;5",
    color: ROSE,
    title: "Woe to Jerusalem: Pollution, Oppression, Faithless Leaders",
    html: "The chapter opens with a woe oracle that turns from Nineveh (Zephaniah 2:13&ndash;15) to Jerusalem itself &mdash; a move as shocking in its original context as it would be to a congregation today. Verse 1: &ldquo;Woe to her who is rebellious and defiled, the oppressing city!&rdquo; The Hebrew word translated &ldquo;defiled&rdquo; (ga&rsquo;al) has connotations of ritual pollution, perhaps with the double sense of ceremonial uncleanness and moral corruption. The word &ldquo;oppressing&rdquo; (yonah) means &ldquo;dove&rdquo; but is used here in its verbal form meaning to oppress or do violence. Verse 2 delivers four parallel failures, each using a negative: she has not obeyed God&rsquo;s voice, she has not accepted correction, she has not trusted in the LORD, she has not drawn near to her God. The negative is doing important theological work: Jerusalem&rsquo;s failure is not a failure to perform religious acts (the temple was active and busy) but a failure to actually orient toward God. Performance without trust; ritual without reliance. Verses 3&ndash;4 apply the indictment to each institutional sector: rulers as predatory lions, judges as nocturnal wolves, prophets as light and faithless, priests as desecrators. Verse 5 plants God himself in Jerusalem&rsquo;s midst as the righteous exception: &ldquo;every morning he shows forth his justice; each dawn he does not fail.&rdquo; The shamelessness of the corrupt is the tragedy: they are surrounded by God&rsquo;s visible righteousness and feel nothing.",
  },
  {
    id: "v6-8",
    ref: "Zephaniah 3:6&ndash;8",
    color: GOLD,
    title: "God&rsquo;s Universal Judgment Prepares the Way: Wait for the Day",
    html: "Verses 6&ndash;8 describe God&rsquo;s prior acts of judgment on the nations as failed pedagogical opportunities for Jerusalem. God has &ldquo;cut off nations&rdquo; and made &ldquo;their streets desolate, with no one passing through&rdquo; (v. 6) &mdash; historical examples of divine judgment that Jerusalem could have taken as warnings. His expectation: &ldquo;Surely you will fear me; you will accept correction&rdquo; (v. 7). The result: &ldquo;But all the more they were eager to make all their deeds corrupt.&rdquo; This is a chilling picture of moral deterioration: divine warning and historical example produce not repentance but acceleration of wickedness. The mechanism of hardening is not ignorance but eagerness to corrupt. Verse 8 pivots to divine resolve: &ldquo;Therefore wait for me, declares the LORD, for the day when I rise up to seize the prey.&rdquo; The word &ldquo;wait&rdquo; (chakah) is the same word used in Isaiah 40:31 (&ldquo;they who wait for the LORD shall renew their strength&rdquo;). It is a call to patient, expectant trust. The judgment described in verse 8 is comprehensive &mdash; &ldquo;all the earth shall be consumed by the fire of my jealous wrath&rdquo; &mdash; but it sets the stage for the global restoration that follows in verses 9&ndash;13. Universal judgment is not the last word; it is the clearing of the ground.",
  },
  {
    id: "v9-13",
    ref: "Zephaniah 3:9&ndash;13",
    color: TEAL,
    title: "The Purified Remnant: Pure Speech, No Lies, Safe in the LORD",
    html: "Verses 9&ndash;13 describe the post-judgment restoration with two interlocking promises: one for the nations and one for the remnant of Israel. For the nations (v. 9): God will give &ldquo;purified speech&rdquo; (Hebrew: <em>saphah berurah</em>, a purified lip) so that &ldquo;all of them may call upon the name of the LORD and serve him with one accord.&rdquo; The language of &ldquo;one accord&rdquo; (a single shoulder, as in bearing a yoke together) suggests unified, cooperative worship replacing the fragmented, competing worship of the nations&rsquo; idols. Verse 10 promises that even the most distant peoples (&ldquo;from beyond the rivers of Cush&rdquo;) will bring offerings to God. This is a vision of global worship that anticipates Acts 2 and Revelation 7. For Israel (vv. 11&ndash;13): the proud and arrogant who were the cause of shame will be removed from the midst of the city. What remains is a people defined not by pride or power but by humility: &ldquo;a people humble and lowly&rdquo; who &ldquo;shall seek refuge in the name of the LORD&rdquo; (v. 12). The remnant&rsquo;s character is described negatively &mdash; what they do not do: no injustice, no lies, no deceit in the mouth (v. 13). The silence of deceit is replaced by the rest of shalom: they &ldquo;shall pasture and lie down, and none shall make them afraid.&rdquo;",
  },
  {
    id: "v14-17",
    ref: "Zephaniah 3:14&ndash;17",
    color: PURPLE,
    title: "The Great Reversal: Sing! The King Is in Your Midst. He Rejoices Over You with Singing.",
    html: "This is the theological and emotional climax of the entire book of Zephaniah and one of the most luminous passages in the Minor Prophets. Verse 14 opens with a cascade of imperatives: &ldquo;Sing aloud, O daughter of Zion; shout, O Israel! Rejoice and exult with all your heart, O daughter of Jerusalem!&rdquo; Four verbs of celebration in one verse &mdash; rinnah (shout of joy), ruah (shout), samach (rejoice), alas (exult) &mdash; express a joy that cannot be contained in a single word. The theological basis is given in verse 15: &ldquo;The LORD has taken away the judgments against you; he has cleared away your enemies.&rdquo; The sentence is lifted. The enemy is gone. The King &mdash; God himself &mdash; is in the midst of the city. Verse 16 directly addresses the fear that had characterized Judah throughout: &ldquo;On that day it shall be said to Jerusalem: Do not fear, O Zion; let not your hands grow weak.&rdquo; The &ldquo;weak hands&rdquo; image appears elsewhere in the prophets as a description of terror-induced paralysis (Isaiah 35:3; Jeremiah 6:24). God&rsquo;s answer to weak hands and fearful hearts is not exhortation but presence. And then verse 17: &ldquo;The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.&rdquo; <strong>This is the only place in the Old Testament where God is described as singing.</strong> The God who commanded psalms of praise now sings his own song of joy &mdash; and his people are the subject of the song. It is perhaps the most tender image of God in all the Minor Prophets.",
  },
  {
    id: "v18-20",
    ref: "Zephaniah 3:18&ndash;20",
    color: BLUE,
    title: "Gathering the Outcasts, Dealing with Oppressors, Bringing Praise in Every Land",
    html: "The chapter concludes with three specific promises that complete the reversal begun in verse 14. Verse 18 is grammatically difficult and variously translated, but the sense is clear: God will gather those who sorrow over the appointed feasts &mdash; those who could not participate in worship because of exile or oppression. What was pain will become praise. Verse 19 promises direct action against the oppressors: &ldquo;I will deal with all your oppressors at that time. And I will save the lame and gather the outcast, and I will change their shame into praise and renown in all the earth.&rdquo; The reversal of shame into renown (literally, a name and a praise) is a structural reversal of the shame language used in the book&rsquo;s judgments. Those who were shamed by exile and oppression will be named and praised. Verse 20 closes with the comprehensive promise: &ldquo;At that time I will bring you in, at the time when I gather you together; for I will make you renowned and praised among all the peoples of the earth, when I restore your fortunes before your eyes.&rdquo; The phrase &ldquo;restore your fortunes&rdquo; (shub shebut) is a standard prophetic formula for complete reversal &mdash; the full undoing of what exile had done. The book of Zephaniah, which opened with the terrifying global destruction of the &ldquo;Day of the LORD&rdquo; sweeping everything from the face of the earth (1:2&ndash;3), closes with a song of God singing over his gathered, restored, and beloved people.",
  },
];

const APP_SECTIONS = [
  {
    id: "app-leaders",
    color: ROSE,
    title: "Holding Leaders Accountable Without Losing Hope",
    html: "Zephaniah 3:1&ndash;4 provides a template for evaluating institutional leadership: rulers should protect, not devour; judges should adjudicate, not consume; prophets should speak truth faithfully, not effervescently; priests should guard holiness, not desecrate it. The chapter is ruthless in its diagnosis of leadership failure while simultaneously maintaining hope &mdash; God himself is in the city&rsquo;s midst, righteous every morning. Christians engaging with institutions &mdash; churches, governments, organizations &mdash; need both the clarity of Zephaniah&rsquo;s diagnostic and the theological grounding of verse 5. The diagnostic without hope produces cynicism; hope without the diagnostic produces complicity. Zephaniah holds both: name the failure clearly, and know that God&rsquo;s righteousness remains and will ultimately prevail.",
  },
  {
    id: "app-singing-god",
    color: GOLD,
    title: "The Singing God and the Transformation of Self-Understanding",
    html: "Zephaniah 3:17 &mdash; the only place in the Old Testament where God is described as singing &mdash; has profound implications for how we understand our identity before God. If God sings over his people with <em>rinnah</em> (the shout of joy) and <em>gil</em> (spinning, leaping exultation), then the fundamental posture of God toward those he has redeemed is not merely tolerant acceptance but active, joyful delight. This is the theological ground on which Paul&rsquo;s declaration in Romans 8:1 (&ldquo;there is therefore now no condemnation&rdquo;) stands. The singing God of Zephaniah 3 is the same God who, in the parable of the prodigal son, runs to meet his returning child and calls for celebration. If the God of the universe sings over you &mdash; a song of gladness, of love that quiets, of exultant joy &mdash; then the voice of condemnation, shame, and self-rejection is speaking from outside the gospel. The transformative pastoral application of Zephaniah 3:17 is learning to receive the song.",
  },
  {
    id: "app-remnant",
    color: TEAL,
    title: "The Remnant: Humility, Truth, and Refuge as the Shape of Faithful Community",
    html: "The remnant described in Zephaniah 3:12&ndash;13 is defined by three negative characteristics (no injustice, no lies, no deceit) and three positive ones (humble, lowly, seeking refuge in the name of the LORD). The positive characteristics are relational and dispositional; the negative ones are ethical and communicative. Together they describe a community that has learned to live without the strategies of power &mdash; lies, manipulation, exploitation &mdash; because it trusts in the LORD as its actual refuge. This is counter-cultural in any era. Contemporary Western culture rewards self-promotion, strategic ambiguity, and the pursuit of advantage. The Zephaniah remnant practices the opposite: truthful speech (no lies, no deceit), humble posture (lowly, not self-promoting), and genuine trust (refuge in the LORD rather than in the accumulation of resources or influence). The challenge for churches is whether they form communities that look like this remnant or communities that adopt the surrounding culture&rsquo;s strategies for survival and success.",
  },
  {
    id: "app-reversal",
    color: PURPLE,
    title: "Living in the Already-Not-Yet of Zephaniah&rsquo;s Reversal",
    html: "Zephaniah 3:14&ndash;20 describes a reversal so total that it requires eschatological fulfillment &mdash; the gathered outcasts, the shame turned to renown, the oppressors dealt with, the fortunes fully restored. Christians read this passage in the light of its partial fulfillment in the return from exile and its deeper fulfillment in the resurrection of Jesus (the definitive reversal of shame-to-glory) and its final fulfillment in the new creation. This means Christians live in the &ldquo;already-not-yet&rdquo; tension that Zephaniah&rsquo;s vision creates: the reversal has begun in Christ (shame into glory, exile into adoption, weakness into strength), but it is not yet complete (outcasts are still not all gathered, oppressors are still active, fortunes are not yet fully restored). The pastoral challenge is learning to be simultaneously honest about the &ldquo;not yet&rdquo; (the lament of Zephaniah 1) and anchored in the &ldquo;already&rdquo; (the song of Zephaniah 3). Both are real; neither negates the other.",
  },
];

const QUESTIONS = [
  "Zephaniah 3:5 says God is righteous &ldquo;every morning&rdquo; but &ldquo;the unjust knows no shame.&rdquo; Where in your own life have you become so accustomed to God&rsquo;s visible righteousness that it no longer produces any response in you? What would it mean to recover the capacity to be moved by God&rsquo;s character?",
  "Zephaniah 3:17 is the only place in the Old Testament where God is described as singing. Spend time sitting with this image: God singing over you with gladness, quieting you with his love, exulting over you with a shout of joy. What does that do to the way you see yourself? What would change if you genuinely believed this was God&rsquo;s posture toward you?",
  "The remnant of Zephaniah 3:12&ndash;13 is characterized by no lies and no deceit. Where in your relationships or professional life are you tempted to use strategic ambiguity, half-truths, or impression management rather than straightforward truthfulness? What would it cost to live like the remnant?",
  "Zephaniah 3:1&ndash;4 indicts four institutional sectors: rulers, judges, prophets, priests. Apply this diagnostic to an institution you are part of (a church, workplace, community organization). Where does the institution protect rather than devour? Where has it inverted its core function? What is your response?",
  "The chapter moves from lament (vv. 1&ndash;8) to restoration (vv. 9&ndash;20) without any narrative of how the transition happens &mdash; God simply acts. Where are you in danger of making the &ldquo;not yet&rdquo; of lament the final word, when God has already spoken a song of restoration? How do you hold the tension honestly without collapsing into either despair or denial?",
  "Zephaniah 3:19 promises that God will &ldquo;change their shame into praise and renown in all the earth.&rdquo; Where are the places of deepest shame in your life or community? How does this promise speak into those places? What would it mean to begin living now as if the reversal is coming?",
];

const VIDEO_ITEMS = [
  { id: "rNcERbkSTXU", title: "Zephaniah: The Day of the LORD and the Song of Joy" },
  { id: "OjJ7GkWCHvA", title: "The Book of Zephaniah Overview" },
  { id: "pHBzJ2dVXgk", title: "Zephaniah 3:17 &mdash; God Rejoices Over You" },
  { id: "XpNxCPHrRIY", title: "Minor Prophets: Zephaniah and the Remnant" },
];

export default function Zephaniah3Guide() {
  const [tab, setTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggleTheme = (id: string) => setOpenTheme(openTheme === id ? null : id);
  const toggleVerse = (id: string) => setOpenVerse(openVerse === id ? null : id);
  const toggleApp = (id: string) => setOpenApp(openApp === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #00161a 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
            <span style={{ color: MUTED, fontSize: 14 }}>3 Chapters &middot; 7th Century BC</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Zephaniah 3: From Judgment on Jerusalem to the Great Song of Joy
          </h1>
          <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 16, maxWidth: 700 }}>
            <p style={{ color: TEAL, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
              &ldquo;The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Zephaniah 3:17 &mdash; the only place in the entire Old Testament where God is described as singing</p>
          </div>
          <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
            The final chapter of Zephaniah moves from the sharpest possible indictment of Jerusalem&rsquo;s corrupt leadership to one of the most tender and joyful passages in all of Scripture &mdash; God himself singing over his restored, beloved people.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "16px 18px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: tab === t ? ACCENT : MUTED,
                borderBottom: tab === t ? `2px solid ${ACCENT}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Overview</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}>
              Zephaniah 3 is the climax of a book that begins with one of the Bible&rsquo;s most sweeping descriptions of divine judgment. Zephaniah 1:2&ndash;3 threatens to &ldquo;utterly sweep away everything from the face of the earth&rdquo; &mdash; human beings, animals, birds, fish, and &ldquo;the rubble with the wicked.&rdquo; Chapter 2 moves through oracles against surrounding nations. Chapter 3 turns the same devastating lens on Jerusalem before pivoting, without warning or transition, into the most tender song of divine joy in the entire Old Testament.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 16 }}>The Structure of Zephaniah 3</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "3:1&ndash;5", desc: "Woe to Jerusalem &mdash; polluted, oppressing city; her officials, judges, prophets, priests all corrupt; the LORD within her is righteous" },
                  { ref: "3:6&ndash;8", desc: "God&rsquo;s universal judgment prepares the way; the nations were cut off but Jerusalem did not learn; wait for the day I arise" },
                  { ref: "3:9&ndash;13", desc: "The purified remnant &mdash; pure speech, seeking refuge in the LORD, no lies, no deceit; they shall pasture and none shall make them afraid" },
                  { ref: "3:14&ndash;17", desc: "The great reversal &mdash; sing aloud O daughter of Zion; the King of Israel is in your midst; do not fear; he rejoices over you with singing" },
                  { ref: "3:18&ndash;20", desc: "Gathering the outcasts, dealing with oppressors, bringing praise and renown in every land; I will restore your fortunes before your eyes" },
                ].map(p => (
                  <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span
                      style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 90, paddingTop: 2 }}
                      dangerouslySetInnerHTML={{ __html: p.ref }}
                    />
                    <span
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}
                      dangerouslySetInnerHTML={{ __html: p.desc }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginBottom: 20 }}>
              {[
                { label: "Book", value: "Zephaniah" },
                { label: "Chapter", value: "3 (final chapter)" },
                { label: "Period", value: "7th century BC" },
                { label: "Historical context", value: "Reign of Josiah, before the Babylonian exile" },
                { label: "Movement", value: "Judgment to joy; indictment to song" },
                { label: "Key verse", value: "Zephaniah 3:17" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: TEXT }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>The Most Beautiful Verse in the Minor Prophets</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 14px" }}>
                Zephaniah 3:17 has been called &ldquo;the climax of the whole prophetic tradition&rdquo; by some commentators. It is unique in all of Scripture: the only place in the Old Testament where God is described as singing. The verse gathers up every dimension of the divine-human relationship &mdash; presence (&ldquo;in your midst&rdquo;), power (&ldquo;mighty one who will save&rdquo;), joy (&ldquo;rejoice over you with gladness&rdquo;), love (&ldquo;quiet you by his love&rdquo;), and exultation (&ldquo;exult over you with loud singing&rdquo;) &mdash; and places them all in the mode of God&rsquo;s response to his restored people.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                This is remarkable in itself. But it becomes even more remarkable when read against the backdrop of Zephaniah 3:1&ndash;8: the same God who pronounced woe on Jerusalem&rsquo;s corrupt leaders and declared universal judgment on the unrepentant is now &mdash; after judgment has done its work &mdash; singing. The song is possible because the sentence has been lifted (v. 15), the enemy removed, and the people restored. Zephaniah 3:17 is the gospel in a single verse: the mighty God who saves is also the joyful God who sings.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: TEXT }}>Zephaniah in Context</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 14px" }}>
                Zephaniah prophesied during the reign of King Josiah of Judah (640&ndash;609 BC), probably before Josiah&rsquo;s great reform in 621 BC (2 Kings 22&ndash;23). His concern is with the pre-reform Jerusalem: a city still engaged in syncretistic worship, with leaders who have adopted the customs of surrounding nations, and a population that has become indifferent to its covenant relationship with God. The superscription (1:1) traces Zephaniah&rsquo;s genealogy back four generations, unusually far, possibly to indicate a connection to the royal house of Hezekiah.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                The book&rsquo;s theological framework is organized around &ldquo;the Day of the LORD&rdquo; &mdash; the phrase appears more densely in Zephaniah than in almost any other prophetic book. But what distinguishes Zephaniah from other Day-of-the-LORD prophets is precisely chapter 3: after the Day brings judgment, it becomes the occasion for the most extravagant restoration promise in the Minor Prophets. The Day is not finally a day of destruction; it is a day of clearing and renewal.
              </p>
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}>
              Zephaniah 3 contains some of the richest theological material in the Minor Prophets, weaving together themes of institutional failure, divine faithfulness, remnant theology, and the astonishing reversal from judgment to joy.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEMES.map(t => (
                <div key={t.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggleTheme(t.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: t.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{openTheme === t.id ? "-" : "+"}</span>
                  </button>
                  {openTheme === t.id && (
                    <div
                      style={{ padding: "0 20px 22px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: t.html }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 28 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Zephaniah 3 and the New Testament</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 14px" }}>
                The New Testament draws on Zephaniah 3 at several key moments. The &ldquo;pure speech&rdquo; promise of verse 9, where peoples of all languages call on the LORD with one accord, is fulfilled at Pentecost (Acts 2) when the Spirit enables cross-language proclamation and the gathering of people from every nation under heaven. The gathering of the outcast and the reversal of shame in verses 18&ndash;20 are reflected in Luke&rsquo;s Gospel, which consistently features the inclusion of those on the margins &mdash; the poor, the despised, the Gentile.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 14px" }}>
                Zephaniah 3:17&rsquo;s image of God rejoicing over his people with gladness anticipates the parables of the lost sheep, lost coin, and lost son in Luke 15, where the explicit point is the joy of the one who finds what was lost (&ldquo;there is joy before the angels of God over one sinner who repents,&rdquo; Luke 15:10). The singing God of Zephaniah is the celebrating father who runs, embraces, and calls for the best robe and the feast.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                Finally, Revelation 19 &mdash; the marriage supper of the Lamb, with multitudes singing &ldquo;Hallelujah!&rdquo; and the Bride made ready &mdash; is the eschatological fulfillment of Zephaniah 3:14&ndash;17: the daughter of Zion called to sing aloud, the King present in her midst, all fear removed, the shame reversed into eternal glory.
              </p>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}>
              A section-by-section study of Zephaniah 3, tracing the remarkable movement from the sharpest prophetic indictment of Jerusalem through the promise of the purified remnant to the climactic song of divine joy.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VERSES.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggleVerse(v.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <span
                        style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 6, padding: "3px 10px", fontSize: 12, color: v.color, fontWeight: 700, flexShrink: 0 }}
                        dangerouslySetInnerHTML={{ __html: v.ref }}
                      />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{v.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{openVerse === v.id ? "-" : "+"}</span>
                  </button>
                  {openVerse === v.id && (
                    <div
                      style={{ padding: "0 20px 22px 20px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: v.html }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginTop: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>Zephaniah 3:17 &mdash; The Unique Verse</h3>
              <div style={{ background: BG, borderRadius: 10, padding: "18px 22px", marginBottom: 16 }}>
                <p style={{ color: TEAL, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
                  &ldquo;The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.&rdquo;
                </p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Zephaniah 3:17 (ESV)</p>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 14px" }}>
                This is the only verse in the entire Old Testament where God is described as singing. Five Hebrew words or phrases carry the weight of the verse: (1) <em>beqirbek</em> (&ldquo;in your midst&rdquo;) &mdash; the incarnational promise of presence; (2) <em>gibbor yoshia</em> (&ldquo;mighty one who will save&rdquo;) &mdash; power joined to salvation; (3) <em>yasis alayik besimchah</em> (&ldquo;rejoice over you with gladness&rdquo;) &mdash; God&rsquo;s emotional response to his restored people; (4) <em>yacharis be&rsquo;ahavato</em> (&ldquo;quiet/silent in his love&rdquo; or &ldquo;renew in his love&rdquo;) &mdash; love that reaches beyond expression; (5) <em>yagil alayik berinah</em> (&ldquo;exult over you with singing&rdquo;) &mdash; the shout of joy, <em>gil</em> (spinning, leaping celebration) combined with <em>rinnah</em> (the triumphant shout of victory and praise).
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                The God who created music, who commanded the psalms of lament and praise, who caused David to dance before the ark &mdash; this God is now himself singing. And the subject of his song is his people. This is the theological culmination of the entire book: after the Day of the LORD has done its work of judgment and purification, what remains is a God who cannot contain his joy over those he loves.
              </p>
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Application</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}>
              Zephaniah 3 speaks into multiple dimensions of Christian life: the courageous diagnosis of institutional failure, the formation of truthful community, the transformation of self-understanding through the singing God, and the hope of the final reversal that grounds endurance in the present.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {APP_SECTIONS.map(s => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggleApp(s.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: s.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{openApp === s.id ? "-" : "+"}</span>
                  </button>
                  {openApp === s.id && (
                    <div
                      style={{ padding: "0 20px 22px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: s.html }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Study Questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, color: TEXT }}>Discussion &amp; Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {QUESTIONS.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0, fontSize: 15 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 6, color: TEXT }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Video teaching on Zephaniah, the Day of the LORD, and the song of divine joy.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {VIDEO_ITEMS.map(v => (
                  <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: TEAL, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 14 }}>A Prayer from Zephaniah 3</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 14px", fontSize: 15, fontStyle: "italic" }}>
                Lord, you are the righteous one in the midst of the city. Every morning you show forth your justice; each dawn you do not fail. We confess that we have often been like the unjust who know no shame &mdash; surrounded by your visible righteousness, unmoved and unchanged. Forgive us for the way we have accumulated shame and lies and injustice while calling ourselves your people.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 14px", fontSize: 15, fontStyle: "italic" }}>
                Thank you that you are also the singing God. That after judgment has done its work, what remains is not your anger but your song &mdash; a song of gladness and love and exultation, sung over us. Let that song reach the places in us where shame has gone deepest, where we have felt most far from you, where we have been most afraid that your verdict against us was final.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 14px", fontSize: 15, fontStyle: "italic" }}>
                Form us as the remnant of Zephaniah 3:12&ndash;13: humble and lowly, seeking refuge in your name alone, speaking truth in our mouths, doing no injustice in our hands. And keep before us the vision of verse 17 &mdash; the mighty one who saves, who rejoices over us with gladness, who quiets us by love, who exults over us with singing.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: 15, fontStyle: "italic" }}>
                We say with the daughter of Zion: do not let our hands grow weak. The King of Israel, the LORD, is in our midst. In the name of Jesus, who is himself the singing God made flesh, the Word of joy become incarnate among us. Amen.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
