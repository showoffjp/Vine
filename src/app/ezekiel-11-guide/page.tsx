"use client";
import { useState, useEffect, useCallback } from "react";
import VideoEmbed from "@/components/VideoEmbed";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48", BLUE = "#3B82F6";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type E11Tab = "overview" | "themes" | "verse" | "application" | "journal" | "videos";

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const OVERVIEW_FACTS = [
  { label: "Chapter", value: "Ezekiel 11" },
  { label: "Setting", value: "Exile &mdash; Babylon, 593-592 BCE" },
  { label: "Genre", value: "Prophetic Vision" },
  { label: "Context", value: "Part of the Temple Vision (Ezek 8-11)" },
  { label: "Theme", value: "Heart transformation and the departure of the glory" },
  { label: "Key Verse", value: "Ezek 11:19" },
];

const OVERVIEW_PARAGRAPHS = [
  "Ezekiel 11 completes the extended vision of the departing glory of God that began in chapter 8. Ezekiel had been transported in a vision from Babylon to Jerusalem to witness the abominations being committed in the temple and the city &mdash; the hidden rooms of images (8:7-12), women weeping for Tammuz (8:14), men bowing to the sun (8:16). The glory of the LORD, which had been associated with the inner sanctuary, began to withdraw: first to the threshold of the temple (9:3, 10:4), then to the east gate of the temple court (10:19). Chapter 11 completes this movement with the final departure of the glory eastward to the mountain east of the city &mdash; the Mount of Olives.",
  "The chapter opens dramatically: the Spirit lifts Ezekiel to the east gate of the LORD&rsquo;s house (11:1), where he sees twenty-five men, including Jaazaniah son of Azzur and Pelatiah son of Benaiah, described as leaders of the people who are giving wicked counsel. Their counsel is summarized in a striking phrase: &lsquo;The time is not near to build houses; this city is the pot and we are the meat&rsquo; (11:3). The image of the pot and the meat is an assertion of false security: we are safely inside the city walls, protected and insulated from harm, like meat in a cooking pot. Ezekiel is commanded to prophesy against them (11:4).",
  "As Ezekiel prophesies, Pelatiah son of Benaiah dies (11:13). The death occurs mid-prophecy and is terrifying in its immediacy: the word of judgment spoken through Ezekiel kills in the moment of prophesying. Ezekiel cries out: &lsquo;Ah, Lord GOD! Will you make a full end of the remnant of Israel?&rsquo; (11:13). This is the same cry as in 9:8 &mdash; the prophet as intercessor, anguished at the scope of the judgment he is witnessing.",
  "The oracle that follows (11:14-21) is among the most remarkable in the entire book of Ezekiel. Those remaining in Jerusalem have said about the exiles in Babylon: &lsquo;They have gone far from the LORD; this land is given to us as a possession&rsquo; (11:15). They regard geographical proximity to the temple as spiritual advantage &mdash; they are still in the land, still near the sanctuary, while the exiles are far from God. God&rsquo;s response completely inverts this hierarchy: the exiles ARE his people; he himself has been a sanctuary (literally, a small sanctuary, miqdash me&rsquo;at) to them in the lands where they have gone. He will gather them from the peoples, return them to the land, give them a new heart and a new spirit, remove the heart of stone and give a heart of flesh &mdash; the very language that Ezekiel 36:26 will expand into one of the central promises of the entire prophetic corpus.",
  "The chapter closes with the final departure of the glory: the cherubim lift their wings, the wheels beside them, and the glory of the God of Israel rises from the city and stands on the mountain east of the city (11:22-23). Then the Spirit brings Ezekiel back to the exiles in Chaldea. He tells them everything the LORD had shown him (11:24-25). The prophet is the eyewitness, the reporter, the one who has seen what others cannot see and must return to tell the community what God is doing.",
];

const KEY_THEMES = [
  {
    color: ROSE,
    title: "The &quot;City Is the Pot&quot; Fallacy &mdash; False Security in Jerusalem",
    body: "The twenty-five men&rsquo;s declaration &mdash; &lsquo;the city is the pot and we are the meat&rsquo; (11:3) &mdash; is a theological assertion about protection and status. Being inside Jerusalem, near the temple, in the land, made them feel insulated from judgment. God&rsquo;s response (11:7-12) is devastating: your slain are the meat, and the city is the pot, but I will bring you out of it. The image is turned against them. They assumed the pot protected them; God says the pot will be their undoing. The false security of proximity to sacred geography &mdash; the land, the city, the temple &mdash; is one of the recurring temptations of Israel&rsquo;s religion, and Ezekiel 11 confronts it directly.",
  },
  {
    color: PURPLE,
    title: "The Death of Pelatiah &mdash; Enacted Judgment",
    body: "The death of Pelatiah son of Benaiah as Ezekiel prophesies (11:13) is one of the most unsettling moments in the chapter. It is not described as gradual illness or military death; it happens in the moment of the prophetic word. This is the word of God as genuinely dangerous reality &mdash; the oracle against the leaders does not merely predict future judgment; it participates in bringing it about. Pelatiah&rsquo;s death also functions as a confirmation of the prophetic word: Ezekiel&rsquo;s vision is not fantasy; it is describing a real situation with real consequences. The death triggers Ezekiel&rsquo;s anguished intercessory cry.",
  },
  {
    color: GOLD,
    title: "The Exiles as God&rsquo;s True People &mdash; Reversal of Assumed Hierarchy",
    body: "Those in Jerusalem assumed they were the remnant, the ones God was preserving, while the exiles had been removed from his presence. God&rsquo;s oracle in 11:14-17 completely reverses this. The exiles &mdash; those who have been scattered among the nations &mdash; are the people God calls &lsquo;my people.&rsquo; God has been present with them in exile as a sanctuary. The reversal is pastoral as well as theological: Ezekiel is himself among the exiles in Babylon. The people around him, who feel abandoned and far from God, are being told that God has been with them in their displacement. Distance from the temple does not mean distance from God.",
  },
  {
    color: TEAL,
    title: "&quot;I Will Be Their Sanctuary&quot; in Exile &mdash; Ezek 11:16",
    body: "The phrase &lsquo;I will be for them a sanctuary in small measure&rsquo; (miqdash me&rsquo;at, literally &lsquo;a little sanctuary&rsquo;) is one of the most theologically dense phrases in Ezekiel. God himself becomes the sanctuary for those who no longer have access to the Jerusalem temple. This promise anticipates the trajectory from temple to synagogue in Jewish history and from synagogue to the incarnation in Christian theology: God himself becoming the dwelling place rather than being located in a fixed geographic structure. The promise that God&rsquo;s presence is not tied to the temple building is revolutionary in the context of ancient Near Eastern religion.",
  },
  {
    color: GREEN,
    title: "The New Heart and New Spirit &mdash; Previewing Ezekiel 36",
    body: "The promise in 11:19-20 &mdash; &lsquo;I will give them one heart, and I will put a new spirit within them. I will take the heart of stone out of their flesh and give them a heart of flesh&rsquo; &mdash; is one of the most important theological promises in the entire Old Testament. It announces a divine transformation of human interiority as the solution to the problem of covenant unfaithfulness. Israel&rsquo;s fundamental problem is not political or military but anthropological: they have hearts of stone that cannot respond to God. The solution is divine surgery: God removes what is hard and unresponsive and replaces it with something alive and receptive. Ezekiel 36:25-27 will expand this promise to include the cleansing of water and the giving of the Spirit.",
  },
  {
    color: ROSE,
    title: "Heart of Stone to Heart of Flesh &mdash; The Anatomy of Transformation",
    body: "The contrast between stone and flesh is not primarily about hardness versus softness in an emotional sense; it is about responsiveness to God. A stone heart cannot hear, cannot respond, cannot receive the divine word. A heart of flesh &mdash; which is what a living heart is made of &mdash; can feel, respond, and be shaped. The transformation Ezekiel 11:19 promises is not self-improvement or spiritual discipline; it is divine replacement. God removes the organ that is incapable of covenant response and gives a new one. This promise is the OT foundation for the NT theology of regeneration and for Paul&rsquo;s contrast between the law written on tablets of stone and the Spirit writing on tablets of human hearts (2 Corinthians 3:3).",
  },
  {
    color: BLUE,
    title: "The Final Departure of the Glory to the Mount of Olives",
    body: "The glory of the LORD&rsquo;s departure from the city is described with aching precision (11:22-23). The cherubim lift their wings, the wheels move beside them, the glory of the God of Israel rises from the city &mdash; and stands on the mountain east of the city. This is the Mount of Olives, the mountain that overlooks Jerusalem from the east. The glory does not depart entirely from the earth; it pauses on the mountain across the valley from the city that has rejected it. The geographical precision invites theological reflection on what it means for God&rsquo;s glory to be present near but not in Jerusalem &mdash; and on the eschatological significance of this mountain in both Zechariah 14:4 and the ascension of Christ from the Mount of Olives in Acts 1.",
  },
  {
    color: PURPLE,
    title: "The Prophet as Eyewitness and Reporter &mdash; Ezekiel&rsquo;s Return",
    body: "The chapter closes with Ezekiel&rsquo;s return to the exiles in Babylon (11:24-25): the Spirit brings him back; the vision ends; and he tells the exiles everything the LORD had shown him. This is the prophetic office at its most fundamental: Ezekiel has been transported in the Spirit to see what others cannot see, and his task is to return and report faithfully. He does not interpret, embellish, or soften. He tells them everything. The prophet as eyewitness is a recurring role in Ezekiel: someone who has been shown the hidden reality of what God is doing and who is commissioned to bring that vision back to the community so they can understand their situation truthfully.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Ezek 11:1-7",
    color: ROSE,
    title: "Twenty-Five Men &mdash; The City Is the Pot &mdash; Your Slain Are the Meat",
    body: "The Spirit lifts Ezekiel to the east gate of the LORD&rsquo;s house &mdash; the same gate where the glory had paused in its departure (10:19). There he sees twenty-five men, two of whom are specifically named: Jaazaniah son of Azzur and Pelatiah son of Benaiah, who are described as &lsquo;leaders of the people&rsquo; (11:1). Their counsel is quoted directly: &lsquo;The time is not near to build houses; this city is the pot and we are the meat&rsquo; (11:3). Commentators have debated whether this means they are refusing to prepare for long-term settlement (against Jeremiah&rsquo;s advice in Jer 29:4-7) or asserting their safety inside the city. The pot-and-meat image seems primarily to be about protection and status: the pot holds and cooks the meat; the city walls hold and protect the inhabitants. God&rsquo;s response (11:5-7) turns the image: Ezekiel is to prophesy against them. God knows what they are saying. But the slain bodies within the city &mdash; those killed by violence &mdash; are the real meat in the pot. The leaders&rsquo; false security is built on a foundation of injustice and death.",
  },
  {
    ref: "Ezek 11:8-12",
    color: GOLD,
    title: "Judgment &mdash; You Will Be Brought Out &mdash; They Will Know I Am the LORD",
    body: "The judgment oracle in 11:8-12 addresses the leaders&rsquo; false security directly. You have feared the sword, and the sword is what I will bring upon you (11:8). The very thing they thought the city&rsquo;s walls would protect them from &mdash; military violence &mdash; will come to them. More pointedly, God says he will bring them out of the city (11:9). The pot that they claimed would protect them will not. They will be judged at the border of Israel &mdash; likely a reference to judgment at Riblah (cf. 2 Kings 25:20-21, where Nebuchadnezzar executed Judah&rsquo;s leaders). Then they will know that I am the LORD (11:10, 12). This recognition formula &mdash; &lsquo;and they will know that I am the LORD&rsquo; &mdash; appears over sixty times in Ezekiel. God&rsquo;s judgment is not meaningless violence; it is a disclosure of divine identity. Even those who refused to know God through his word will know him through his acts of judgment.",
  },
  {
    ref: "Ezek 11:13",
    color: PURPLE,
    title: "Pelatiah Dies &mdash; Ezekiel Cries Out &mdash; Will You Make a Full End?",
    body: "Verse 13 is one of the most dramatic single verses in the chapter. As Ezekiel prophesies, Pelatiah son of Benaiah dies. The connection is unmistakable: the prophetic word is not merely describing future events; it is participating in present reality. Ezekiel&rsquo;s immediate response is to fall on his face and cry out: &lsquo;Ah, Lord GOD! Will you make a full end of the remnant of Israel?&rsquo; (11:13). This is the intercessory cry of a prophet who is genuinely anguished at the scope of the judgment he is witnessing and conveying. The same cry appeared in 9:8, after the executioners were sent through the city. Ezekiel is not a detached oracle-deliverer; he is a man caught between God&rsquo;s righteous judgment and his own love for his people. His intercession here is answered not by a reversal of judgment but by the oracle of hope that follows &mdash; the promise to the exiles.",
  },
  {
    ref: "Ezek 11:14-21",
    color: TEAL,
    title: "The Exiles Are God&rsquo;s People &mdash; I Will Gather Them &mdash; New Heart, New Spirit",
    body: "The oracle in 11:14-21 is the theological heart of the chapter and one of the most extraordinary passages in Ezekiel. God tells Ezekiel what the Jerusalem residents have said about the exiles: &lsquo;They have gone far from the LORD; this land is given to us as a possession&rsquo; (11:15). The exiles are being written off by those who remain. God responds: Although I have sent them far away among the nations and have scattered them among the countries, yet I will be a sanctuary for them for a little while in the countries where they have gone (11:16). &lsquo;A sanctuary for a little while&rsquo; &mdash; God himself substitutes for the temple building during the period of exile. Then comes the promise of gathering (11:17): I will gather you from the nations; I will give you back the land of Israel. And then the astounding inner transformation: I will give them one heart, and put a new spirit within them; I will take the heart of stone out of their flesh and give them a heart of flesh, so that they may follow my statutes and keep my ordinances and obey them. And they shall be my people, and I will be their God (11:19-20). The promise is divine surgery &mdash; God replaces the organ of interiority that has been incapable of covenant faithfulness with one that can respond. This is the OT foundation for regeneration.",
  },
  {
    ref: "Ezek 11:22-25",
    color: BLUE,
    title: "The Glory Departs to the Mountain East of the City &mdash; Ezekiel Reports to the Exiles",
    body: "The vision of the departing glory reaches its conclusion. The cherubim lift their wings with the wheels beside them, and the glory of the God of Israel is over them (11:22). Then the glory of the LORD went up from the midst of the city and stood on the mountain which is on the east side of the city (11:23). The glory that had been in the inner sanctuary (1:26-28, 8:4), then at the threshold (9:3, 10:4), then at the east gate (10:19), now rises from the city entirely and stands on the mountain east of the city &mdash; the Mount of Olives. It does not disappear; it withdraws to a position of proximity without presence. Then the Spirit takes Ezekiel back to the exiles in Chaldea (11:24). The vision ends, and Ezekiel tells the exiles everything the LORD had shown him (11:25). The chapter closes with an act of faithful reporting: the prophet who has been shown the hidden things of God returns to his community and speaks what he has seen.",
  },
];

const APPLICATION_SECTIONS = [
  {
    color: ROSE,
    title: "Not Confusing Proximity to Sacred Places with Relationship with God",
    body: "The twenty-five men in Ezekiel 11 assumed that being in Jerusalem &mdash; in the land, near the temple, part of the institutional religious community &mdash; constituted spiritual security. Their theology equated geographic and institutional proximity with divine favor. This is a perennial temptation: assuming that church membership, regular attendance, cultural Christianity, or association with Christian institutions constitutes relationship with God. Ezekiel 11 says the assumption can be exactly reversed. Those who appear to be closest (in the city, at the temple) may be furthest from God, while those who appear to be distant (exiled to Babylon) are the ones with whom God is present. The question is not where you are located but whether God is with you.",
  },
  {
    color: TEAL,
    title: "The Promise That God Himself Is Our Sanctuary Even in Exile",
    body: "The promise of 11:16 &mdash; &lsquo;I will be a sanctuary for them in small measure&rsquo; &mdash; is one of the most pastoral promises in the Hebrew Bible. God does not simply promise to restore the exiles to the temple; he promises to be their temple in the meantime. This promise has sustained Jewish communities through centuries of diaspora and has been the theological foundation for the synagogue movement, which preserved Jewish faith and practice without a central temple. For Christians, the promise finds its deepest fulfillment in the incarnation: God himself dwelling among his people as the true temple (John 2:19-21), and then the Spirit of God indwelling the community of believers as God&rsquo;s new temple (1 Corinthians 3:16-17). Those who feel spiritually exiled &mdash; far from community, disconnected from worship, stripped of familiar religious supports &mdash; are promised the same thing the Babylonian exiles received: God himself as sanctuary.",
  },
  {
    color: GREEN,
    title: "Receiving the New Heart as a Gift, Not an Achievement",
    body: "The heart transformation promised in 11:19 is entirely God&rsquo;s act. There is no human initiative, no spiritual exercise, no moral improvement program that accomplishes it. God takes out the heart of stone and puts in the heart of flesh. The passive verbs matter: the heart is given, the spirit is put within, the stone is removed and the flesh installed. The beneficiary of the promise does not earn, achieve, or produce the transformation; they receive it. This is the OT foundation for the NT&rsquo;s insistence that regeneration is the work of the Spirit, not human effort (John 3:5-8, Titus 3:5). The practical application is freedom from the exhausting project of self-transformation and openness to receiving what God has promised to give.",
  },
  {
    color: PURPLE,
    title: "The Holy Spirit as the Fulfillment of the &quot;New Spirit&quot; Promise",
    body: "When the New Testament writers interpret the promises of Ezekiel 11 and 36, they understand them as fulfilled in the outpouring of the Holy Spirit at Pentecost and in the ongoing work of the Spirit in believers. Peter&rsquo;s Pentecost sermon quotes Joel 2:28-32, and Paul&rsquo;s letters are saturated with the language of the Spirit as the one who enables what the law demanded but could not produce (Romans 8:3-4). The &lsquo;new spirit&rsquo; of Ezekiel 11:19 is identified with the Spirit of God himself in Ezekiel 36:27 &mdash; &lsquo;I will put my Spirit within you.&rsquo; The promise of Ezekiel 11 is thus not only about moral improvement but about divine indwelling: the God who had been outside the community (in temple, in tabernacle, in glory-cloud) will now be inside each person, enabling from within the covenant faithfulness that the law required from without.",
  },
  {
    color: GOLD,
    title: "Hope for Those in Spiritual Exile",
    body: "Ezekiel 11 was written for people who had lost everything that made their religion feel real: the land, the city, the temple, the familiar worship structures. They were in Babylon, surrounded by a foreign culture, being told by the people who remained in Jerusalem that they were far from God. The oracle in 11:14-21 reverses this verdict completely. The exiles are God&rsquo;s people; God himself is their sanctuary; he will gather them; he will transform them. The chapter addresses anyone who feels that their circumstances have placed them outside the reach of God&rsquo;s care &mdash; geographically displaced, institutionally disconnected, spiritually dry, or judged by others as being &lsquo;far from the LORD.&rsquo; The word to such people is the word God gave Ezekiel: yet I will be a sanctuary for them.",
  },
  {
    color: BLUE,
    title: "The Departure of the Glory and Its Eschatological Return",
    body: "The glory of the LORD departs Jerusalem in Ezekiel 10-11 and stands on the Mount of Olives &mdash; the mountain east of the city. It does not return until the final vision of Ezekiel 40-48, when the glory enters the new temple from the east (43:1-5). The theology of the departing and returning glory frames the entire book of Ezekiel. For Christians, the connection between the Mount of Olives, departure, and return carries additional resonance: Jesus ascends from the Mount of Olives (Acts 1:12), and his return is promised from there (Zechariah 14:4, Acts 1:11). The eschatological hope embedded in the departure of the glory is that God has not abandoned his creation but will return to it &mdash; and when he does, the new heart promised in 11:19 will be fully and finally realized in the community of those who dwell in his presence.",
  },
];

const JOURNAL_PROMPTS = [
  "Ezekiel 11:3 records leaders who claimed false security: &lsquo;the city is the pot and we are the meat.&rsquo; What modern equivalents of this false security do you see in Christian culture? What might you personally be relying on instead of God?",
  "The promise in 11:16 &mdash; &lsquo;I will be a sanctuary for them&rsquo; &mdash; was spoken to people who had lost access to the temple. Have you ever experienced a season where familiar spiritual supports were removed? How did God meet you in that?",
  "The new heart in 11:19 is entirely God&rsquo;s gift, not human achievement. How does this change how you approach spiritual transformation? Where are you trying to change yourself rather than receiving what God promises to give?",
  "Ezekiel was transported to Jerusalem to see what was happening and then returned to report to the exiles. Is there a community around you that needs someone to help them see their situation truthfully? What would faithful reporting look like?",
  "The glory of God departs Jerusalem in 11:23 and stands on the Mount of Olives &mdash; near, but not in the city. Have you experienced a season where God seemed present near you but not in the places where you expected him? What did you learn?",
];

export default function Ezekiel11GuidePage() {
  const [tab, setTab] = useState<E11Tab>("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    try {
      const raw = localStorage.getItem("vine_ezek11_journal");
      if (raw) setEntries(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim() && !prayer.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      verse: verse.trim(),
      reflection: reflection.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_ezek11_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_ezek11_journal", JSON.stringify(updated));
  }, [entries]);

  const inputStyle = {
    width: "100%", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 15,
    outline: "none", boxSizing: "border-box" as const,
  };
  const labelStyle = { display: "block", color: MUTED, fontSize: 13, marginBottom: 6, fontWeight: 600 };

  if (!loaded) return null;

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>

          {/* Hero */}
          <div style={{ background: `linear-gradient(135deg, #080018 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: PURPLE, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>EZEKIEL</span>
                <span style={{ color: MUTED, fontSize: 14 }}>Chapter 11 &bull; 593-592 BCE</span>
              </div>
              <h1 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                Ezekiel 11 &mdash; &ldquo;I Will Give You a New Heart&rdquo;
              </h1>
              <p style={{ fontSize: "clamp(0.95rem,2vw,1.15rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0 }}>
                The judgment on Jerusalem&rsquo;s wicked leaders who say &ldquo;the city is the pot and we are the meat,&rdquo; the promise of heart transformation for the scattered exiles, and the final, complete departure of God&rsquo;s glory &mdash; eastward to the Mount of Olives.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} type="button" onClick={() => setTab(t.id as E11Tab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", color: tab === t.id ? PURPLE : MUTED, borderBottom: tab === t.id ? `2px solid ${PURPLE}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW TAB */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Ezekiel 11 stands at the hinge of the great temple vision of Ezekiel 8-11. It contains both the most devastating act of divine judgment in the vision &mdash; the departure of the glory from Jerusalem &mdash; and the most hopeful promise in the early chapters of the book: the new heart, the new spirit, the divine surgery that will make God&rsquo;s people capable of covenant faithfulness." }} />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {OVERVIEW_FACTS.map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>The Central Theology</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 12px" }} dangerouslySetInnerHTML={{ __html: "Ezekiel 11 stands at the intersection of judgment and hope. The God whose glory is departing Jerusalem is the same God who promises to be a sanctuary for his people in exile and to give them a new heart capable of receiving him. The departure of the glory is not the end of the story; it is the beginning of a new phase in which God will accomplish from within what his people have been unable to achieve from without." }} />
                </div>

                {OVERVIEW_PARAGRAPHS.map((para, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
                    <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: para }} />
                  </div>
                ))}

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 8 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Ezek 11:1-4", desc: "Twenty-five men at the east gate &mdash; their wicked counsel" },
                      { ref: "Ezek 11:3", desc: "The city is the pot and we are the meat &mdash; false security" },
                      { ref: "Ezek 11:8-12", desc: "Judgment oracle &mdash; the sword will come; they will be brought out" },
                      { ref: "Ezek 11:13", desc: "Pelatiah dies &mdash; Ezekiel&rsquo;s intercessory cry" },
                      { ref: "Ezek 11:14-16", desc: "God redefines his people &mdash; the exiles are mine; I am their sanctuary" },
                      { ref: "Ezek 11:17-20", desc: "I will gather them &mdash; new heart, new spirit &mdash; heart of stone to heart of flesh" },
                      { ref: "Ezek 11:22-23", desc: "The glory departs to the mountain east of the city" },
                      { ref: "Ezek 11:24-25", desc: "Ezekiel returns to the exiles and tells them everything" },
                    ].map(p => (
                      <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 110, paddingTop: 2 }}>{p.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* KEY THEMES TAB */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Key Themes</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Ezekiel 11 develops several major theological themes that run through the entire book and connect forward to the New Testament&rsquo;s theology of the Spirit, regeneration, and the indwelling presence of God." }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {KEY_THEMES.map(section => (
                    <div key={section.title} style={{ background: CARD, border: `1px solid ${openTheme === section.title ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button type="button" onClick={() => setOpenTheme(openTheme === section.title ? null : section.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openTheme === section.title ? "-" : "+"}</span>
                      </button>
                      {openTheme === section.title && (
                        <div style={{ padding: "0 20px 20px 42px" }}>
                          <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "8px 0 0" }} dangerouslySetInnerHTML={{ __html: section.body }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 12 }}>The Central Promise</h3>
                  <blockquote style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "I will give them one heart, and put a new spirit within them; I will take the heart of stone out of their flesh and give them a heart of flesh, so that they may follow my statutes and keep my ordinances and obey them. And they shall be my people, and I will be their God." }} />
                    <cite style={{ color: MUTED, fontSize: 13 }}>Ezekiel 11:19-20</cite>
                  </blockquote>
                </div>
              </div>
            )}

            {/* VERSE BY VERSE TAB */}
            {tab === "verse" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Verse by Verse</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Ezekiel 11 moves with the logic of a vision within a vision &mdash; Ezekiel transported in the Spirit, shown what God is doing, and then returned to report. Each section deepens both the scope of the judgment and the extraordinary nature of the promised transformation." }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {VERSE_SECTIONS.map(section => (
                    <div key={section.ref} style={{ background: CARD, border: `1px solid ${openVerse === section.ref ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button type="button" onClick={() => setOpenVerse(openVerse === section.ref ? null : section.ref)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ background: `${section.color}22`, border: `1px solid ${section.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}>{section.ref}</span>
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                        </div>
                        <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, marginLeft: 8 }}>{openVerse === section.ref ? "-" : "+"}</span>
                      </button>
                      {openVerse === section.ref && (
                        <div style={{ padding: "0 20px 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                          <p style={{ color: MUTED, lineHeight: 1.85, fontSize: 14, margin: "14px 0 0" }} dangerouslySetInnerHTML={{ __html: section.body }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>The Chapter&rsquo;s Shape</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Ezekiel 11 moves from false security (the pot-and-meat claim of the leaders) through enacted judgment (Pelatiah&rsquo;s death, the oracle of the sword) through the anguished intercessory cry through the extraordinary oracle of hope (I will be their sanctuary; new heart, new spirit) to the final departure of the glory. The movement is not simply from bad news to good news; it is from a false understanding of where God&rsquo;s presence resides to a true one. The glory leaves the city it can no longer inhabit and moves toward the community in exile where God promises to be present in a new way." }} />
                </div>
              </div>
            )}

            {/* APPLICATION TAB */}
            {tab === "application" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Ezekiel 11 addresses questions that are as pressing now as they were in 593 BCE: Where is God when familiar religious structures collapse? How does God transform hearts that are incapable of response? What does it mean to live in &lsquo;exile&rsquo; and still trust that God is present?" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {APPLICATION_SECTIONS.map(section => (
                    <div key={section.title} style={{ background: CARD, border: `1px solid ${openApp === section.title ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button type="button" onClick={() => setOpenApp(openApp === section.title ? null : section.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openApp === section.title ? "-" : "+"}</span>
                      </button>
                      {openApp === section.title && (
                        <div style={{ padding: "0 20px 20px 42px" }}>
                          <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: "8px 0 0" }} dangerouslySetInnerHTML={{ __html: section.body }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h3>
                  <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Deepen your study of Ezekiel 11 with these video teachings on the new heart, the departure of the glory, and the promise of God&rsquo;s sanctuary in exile.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {[
                      { id: "PrJcN5wZmQo", title: "Ezekiel 11: New Heart, New Spirit, and the Glory's Departure" },
                      { id: "RtLtP8vJbNs", title: "Heart of Stone to Heart of Flesh - Ezekiel 11 Study" },
                      { id: "TvNpY6uBwLk", title: "I Will Be Their Sanctuary - Ezekiel 11:16 Explained" },
                      { id: "VxPrT4xZfVm", title: "The Glory Departs to the Mount of Olives - Ezekiel 11" },
                    ].map(v => (
                      <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                        <VideoEmbed videoId={v.id} title={v.title} />
                        <div style={{ padding: "12px 16px" }}>
                          <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>{v.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* JOURNAL TAB */}
            {tab === "journal" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: "Ezekiel 11 invites honest reflection about false securities, spiritual exile, and the kind of heart transformation only God can give. Use this space to engage personally with the text." }} />

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {JOURNAL_PROMPTS.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: PURPLE, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: p }} />
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 20 }}>New Entry</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Verse or passage</label>
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Ezek 11:16, Ezek 11:19-20, Ezek 11:23" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Reflection</label>
                      <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="What does this passage say to you about God's presence in your own life?" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Prayer</label>
                      <textarea value={prayer} onChange={e => setPrayer(e.target.value)} placeholder="Respond to God in prayer..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <button type="button" onClick={saveEntry}
                      style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", fontWeight: 700, cursor: "pointer", fontSize: 15, alignSelf: "flex-start" }}>
                      {saved ? "Saved!" : "Save Entry"}
                    </button>
                  </div>
                </div>

                {entries.length > 0 && (
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Your Entries</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {entries.map(e => (
                        <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                            <div>
                              <div style={{ fontWeight: 700, color: PURPLE, fontSize: 14 }}>{e.verse || "No verse"}</div>
                              <div style={{ color: MUTED, fontSize: 12 }}>{e.date}</div>
                            </div>
                            <button type="button" onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>x</button>
                          </div>
                          {e.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Reflection:</strong> {e.reflection}</p>}
                          {e.prayer && <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VIDEOS TAB */}
            {tab === "videos" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Video Teaching</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Ezekiel 11 with these video teachings on the new heart, the promise of God as sanctuary in exile, and the departure of the divine glory to the Mount of Olives." }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  {[
                    { id: "PrJcN5wZmQo", title: "Ezekiel 11: New Heart, New Spirit, and the Glory&rsquo;s Departure", desc: "A full study of Ezekiel 11 tracing the twenty-five leaders, Pelatiah&rsquo;s death, the oracle of hope to the exiles, and the final movement of the divine glory to the mountain east of Jerusalem." },
                    { id: "RtLtP8vJbNs", title: "Heart of Stone to Heart of Flesh &mdash; Ezekiel 11 Study", desc: "An exploration of the promise in Ezekiel 11:19-20 &mdash; what the heart of stone means, what the heart of flesh promises, and how this oracle connects to Ezekiel 36 and the New Testament theology of regeneration." },
                    { id: "TvNpY6uBwLk", title: "I Will Be Their Sanctuary &mdash; Ezekiel 11:16 Explained", desc: "Commentary on Ezekiel 11:16 and the extraordinary promise that God himself becomes the sanctuary for those in exile &mdash; the theological foundation for the synagogue, the incarnation, and the indwelling Spirit." },
                    { id: "VxPrT4xZfVm", title: "The Glory Departs to the Mount of Olives &mdash; Ezekiel 11", desc: "An examination of the departure of the divine glory in Ezekiel 10-11 &mdash; its theological significance, its connection to Zechariah 14 and Acts 1, and the eschatological hope of the glory&rsquo;s return." },
                  ].map(v => (
                    <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <VideoEmbed videoId={v.id} title={v.title} />
                      <div style={{ padding: "16px 20px" }}>
                        <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: 16, marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: v.title }} />
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.desc }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
