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

type J36Tab = "overview" | "themes" | "verse" | "application" | "journal" | "videos";

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const OVERVIEW_FACTS = [
  { label: "Chapter", value: "Jeremiah 36" },
  { label: "Date", value: "605 BCE (Jehoiakim's 4th year)" },
  { label: "Genre", value: "Prophetic Narrative" },
  { label: "Key Figure", value: "Baruch son of Neriah" },
  { label: "Theme", value: "The fate of God&rsquo;s written word" },
  { label: "Key Verse", value: "Jer 36:28" },
];

const OVERVIEW_PARAGRAPHS = [
  "Jeremiah 36 is one of the most compelling narratives in the entire prophetic corpus. In the fourth year of King Jehoiakim &mdash; 605 BCE, the same year Nebuchadnezzar won the decisive battle of Carchemish and Babylon became the dominant world power &mdash; God commands Jeremiah to write all his accumulated words on a scroll. The scroll is not a new oracle; it is a summary of everything Jeremiah has spoken from the beginning of his ministry in the thirteenth year of Josiah through the present. The purpose is explicit: perhaps the house of Judah will hear all the disaster I plan to bring on them, so that everyone will turn from his evil way (36:3). The scroll is an act of mercy disguised as a literary project.",
  "Jeremiah is restricted from going to the temple himself &mdash; we are not told why, though it may reflect an earlier ban following his temple sermon (Jer 26). So Baruch son of Neriah, his faithful scribe and companion, becomes the public reader of the scroll. The chapter traces the scroll through three successive readings, each ascending in danger: first to the people gathered in the temple during a fast day (36:8-10), then to the gathered officials in Elishama the secretary&rsquo;s chamber (36:11-19), then through the courtier Jehudi to King Jehoiakim himself (36:20-26).",
  "The king is sitting in his winter house with a brazier burning before him. As Jehudi reads three or four columns of the scroll, Jehoiakim takes a penknife &mdash; a scribe&rsquo;s tool, an object associated with the work of writing and preservation &mdash; and uses it to cut the columns off and throw them into the fire. He does this deliberately, column by column, until the entire scroll has burned. No one tears their garments in grief. No one intercedes. The contrast with Josiah weeping at the law (2 Kings 22:11) is absolute and devastating.",
  "God&rsquo;s response (36:27-32) is not panic or despair. Jeremiah is commanded to take another scroll and write on it all the former words. He does, and Baruch writes them from Jeremiah&rsquo;s dictation &mdash; and the new scroll contains all the former words plus many similar words added to them (36:32). The king who thought he could silence the word only succeeded in producing a more complete version of it. Along with the new scroll comes a personal oracle against Jehoiakim: none of his descendants will sit on David&rsquo;s throne; his dead body will be thrown out to the heat by day and the frost by night; the disaster announced against Jerusalem and Judah will come because Jehoiakim refused to listen.",
];

const KEY_THEMES = [
  {
    color: GOLD,
    title: "The Written Word as Vehicle of Divine Prophecy",
    body: "Jeremiah 36 is one of the few passages in the Bible that gives us a glimpse into how prophetic books were actually produced. God commands the writing; Baruch executes the writing; the scroll serves as the medium for reaching people Jeremiah cannot personally address. The chapter reveals that written Scripture is not a secondary form of the divine word &mdash; it is a full vehicle of prophetic authority. The scroll carries all the force of Jeremiah speaking in person.",
  },
  {
    color: TEAL,
    title: "Baruch &mdash; The Faithful Scribe",
    body: "Baruch son of Neriah is one of the most important supporting figures in the entire Old Testament. He writes the scroll from dictation (36:4), reads it publicly in the temple (36:10), reads it again to the officials (36:15), and is warned to hide along with Jeremiah when the king orders their arrest (36:26). In chapter 45, Jeremiah addresses Baruch directly in an oracle of personal consolation. Baruch is not a passive secretary; he is a man of courage who accepts personal risk to carry the prophetic word.",
  },
  {
    color: PURPLE,
    title: "The Three Readings &mdash; Ascending Danger",
    body: "The scroll passes through three audiences in ascending order of power and danger: the gathered people (36:8-10), the royal officials (36:11-19), and the king himself (36:20-26). Each reading is more politically fraught than the last. The officials are genuinely afraid when they hear the words &mdash; they tell Baruch and Jeremiah to hide &mdash; but they cannot ultimately stop the king from destroying what he refuses to hear. The structure mirrors the problem of prophetic truth entering a court culture designed to suppress unwelcome news.",
  },
  {
    color: ROSE,
    title: "Jehoiakim vs. Josiah &mdash; Two Responses to the Word",
    body: "The implicit comparison running through Jeremiah 36 is between Jehoiakim and his father Josiah. When Josiah heard the words of the law discovered in the temple (2 Kings 22:11), he tore his clothes and wept. When Jehoiakim hears Jeremiah&rsquo;s scroll, he cuts it apart and burns it. The two responses represent two postures toward the word of God: humble receptivity that leads to repentance versus contemptuous destruction that hardens judgment. The chapter leaves no ambiguity about which posture God honors and which he judges.",
  },
  {
    color: GREEN,
    title: "The Brazier and the Penknife &mdash; Instruments of Suppression",
    body: "The specific details of Jehoiakim&rsquo;s burning are chosen with care. The penknife was a scribe&rsquo;s tool &mdash; the very instrument used to prepare and correct scrolls. Jehoiakim turns a tool of literary preservation into a tool of literary destruction. The brazier fire is the ordinary winter fire of palace life &mdash; not a ceremonial burning, not an act of religious purification, but a dismissive disposal. These details underscore the contempt: the king is not wrestling with the word; he is discarding it as casually as he might discard waste paper.",
  },
  {
    color: BLUE,
    title: "God&rsquo;s Word Cannot Be Silenced &mdash; The New Scroll",
    body: "The theological climax of the chapter is the new scroll (36:28, 32). God does not respond to Jehoiakim&rsquo;s burning with silence or defeat. He commands the word to be re-written &mdash; and the new scroll is more complete than the original. The one who destroys the word only produces a more comprehensive version. This pattern &mdash; attempted suppression leading to multiplication &mdash; runs throughout the history of biblical persecution and is one of the foundational promises of the prophetic tradition: the word of the LORD will endure.",
  },
  {
    color: GOLD,
    title: "Added Judgment for Those Who Destroy the Word",
    body: "Jehoiakim&rsquo;s oracle (36:29-31) is personal and specific. The king had said that Nebuchadnezzar will come and destroy this land (36:29 &mdash; mocking the scroll&rsquo;s message). God responds: you will have no descendant on David&rsquo;s throne; your dead body will lie unburied; I will punish you and your offspring and your servants for their iniquity. The oracle is not simply a prediction of disaster that would have come anyway; it is an intensification of judgment because of the contemptuous act of burning. Those who silence the prophetic word do not escape it; they ensure that the word spoken against them will be amplified.",
  },
  {
    color: TEAL,
    title: "The Faithfulness of Those Who Read the Word",
    body: "Alongside the drama of royal contempt, Jeremiah 36 preserves the memory of several officials who responded to the scroll with fear and seriousness: Micaiah son of Gemariah (36:11-13), Gemariah son of Shaphan who had tried to stop the king (36:25), and Elnathan and Delaiah and Gemariah who also urged the king not to burn it. These are not heroes in the conventional sense; they could not stop what the king determined to do. But they are remembered by name. The text honors those who take the word seriously even when they lack the power to defend it.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "Jer 36:1-7",
    color: GOLD,
    title: "The Command to Write &mdash; Baruch Writes &mdash; Perhaps They Will Hear",
    body: "The command arrives in the fourth year of Jehoiakim (605 BCE): take a scroll and write on it all the words I have spoken to you against Israel and Judah and all the nations, from the day I first spoke to you in Josiah&rsquo;s day until now (36:2). This is not a new oracle but a compilation &mdash; all of Jeremiah&rsquo;s accumulated prophecy put into permanent written form. The stated purpose is pastoral and hopeful: perhaps when the house of Judah hears all the disaster I intend to bring on them, they will each turn from their evil ways, and I will forgive their iniquity and their sin (36:3). The scroll is an act of divine patience. Jeremiah dictates; Baruch writes (36:4). The word diktatzo appears &mdash; Jeremiah speaking from his mouth, Baruch writing with his hand. Their labor is a collaboration. Jeremiah explains to Baruch that he himself is prevented from going to the LORD&rsquo;s house, so Baruch must go and read the scroll on a fast day when the people will be gathered (36:5-7). The scroll is to be read, not just preserved.",
  },
  {
    ref: "Jer 36:8-19",
    color: TEAL,
    title: "Baruch Reads in the Temple &mdash; Officials Summoned &mdash; Fear",
    body: "Baruch reads the scroll in the temple in the ninth month of the fifth year of Jehoiakim &mdash; roughly a year after it was written, during a fast that has been proclaimed (36:9). He reads in the chamber of Gemariah son of Shaphan the secretary, in the upper court, at the entrance of the New Gate of the house of the LORD, in the hearing of all the people (36:10). The public reading is completed. Micaiah son of Gemariah hears it and goes down to the secretary&rsquo;s chamber where all the officials are assembled and reports what he has heard (36:11-13). The officials summon Baruch and have him read the scroll to them (36:14-15). Their response is striking: they were afraid both among themselves and said to Baruch, We must report all these words to the king (36:16). They ask Baruch how the scroll was produced &mdash; did Jeremiah dictate it? &mdash; and Baruch confirms it. Then the officials tell Baruch and Jeremiah to hide and not let anyone know where they are (36:19). The officials are not enemies; they are frightened men caught between a word they know is true and a king they know will not receive it.",
  },
  {
    ref: "Jer 36:20-26",
    color: ROSE,
    title: "The King Burns the Scroll &mdash; Column by Column &mdash; No One Mourned",
    body: "The officials bring the scroll to Jehoiakim. It is winter; the king is sitting in his winter house with the fire burning in the brazier before him (36:22). Jehudi reads three or four columns &mdash; and the king takes the penknife and cuts them off and throws them into the brazier fire. He does this until the entire scroll has been consumed. The detail that no one among them was afraid, nor did they tear their garments (36:24) is a carefully constructed contrast with Josiah&rsquo;s response in 2 Kings 22:11 and with the officials&rsquo; own fear in 36:16. Three officials &mdash; Elnathan, Delaiah, and Gemariah &mdash; urge the king not to burn the scroll, but he will not listen to them (36:25). He orders the arrest of Baruch and Jeremiah, but the LORD has hidden them (36:26). The king&rsquo;s contempt is total, his violence is bureaucratic, and his plan is frustrated by divine providence.",
  },
  {
    ref: "Jer 36:27-31",
    color: PURPLE,
    title: "God Commands a New Scroll &mdash; Oracle Against Jehoiakim",
    body: "After Jehoiakim burns the scroll, the word of the LORD comes to Jeremiah: Take another scroll and write on it all the former words that were on the first scroll, which Jehoiakim the king of Judah burned (36:28). Then comes the oracle directly against Jehoiakim (36:29-31). The king had mocked: why have you written that the king of Babylon will certainly come and destroy this land? God responds point by point. He will have no one to sit on David&rsquo;s throne; his dead body will be thrown out and exposed to heat by day and frost by night; I will punish him and his offspring and his servants for their iniquity; I will bring on them, on the inhabitants of Jerusalem, and on the people of Judah all the disaster that I have pronounced against them, but they have not listened (36:31). The oracle is specific, personal, and irrevocable. The king who burned the word of the LORD did not destroy the word; he ensured it would be spoken more fully against him.",
  },
  {
    ref: "Jer 36:32",
    color: GREEN,
    title: "Baruch Writes a New Scroll &mdash; The Former Words Plus Many More",
    body: "The final verse is terse and powerful: Then Jeremiah took another scroll and gave it to Baruch the scribe, the son of Neriah, who wrote on it from the dictation of Jeremiah all the words of the book which Jehoiakim king of Judah had burned in the fire; and many similar words were added to them (36:32). The king&rsquo;s fire produced not silence but multiplication. The new scroll contains everything the old scroll contained, plus many more words added to them. This is the biblical pattern for the fate of God&rsquo;s word under suppression: the attempt to destroy it results in a more complete version. Baruch&rsquo;s hand, guided by Jeremiah&rsquo;s voice, guided by the divine word, outlasts the brazier of a contemptuous king.",
  },
];

const APPLICATION_SECTIONS = [
  {
    color: GOLD,
    title: "The Endurance of God&rsquo;s Word Against All Attempts to Suppress It",
    body: "Jeremiah 36 is a foundational text for the doctrine of the preservation of Scripture. The word that Jehoiakim burned was not destroyed; it was amplified. Throughout history, every attempt to eradicate the biblical text has failed, and often the attempt has produced greater distribution and more careful preservation. The chapter teaches that the word of God is not dependent on the protection of powerful people; it survives precisely because it is God&rsquo;s word, and God himself stands behind it. The practical application is confidence: we are not the guardians of a fragile text that needs our protection. We are stewards of a word that has outlasted every power that tried to silence it.",
  },
  {
    color: TEAL,
    title: "The Contrast Between Josiah and Jehoiakim &mdash; Two Postures Toward Scripture",
    body: "The implicit comparison between Josiah and Jehoiakim is one of the chapter&rsquo;s most powerful rhetorical moves. Josiah, who had heard the words of the law, tore his clothes and wept (2 Kings 22:11). Jehoiakim, who hears Jeremiah&rsquo;s scroll, tears the scroll instead and burns it. These are not just historical figures; they represent two postures that remain available in every generation. The question the chapter presses on the reader is simple and searching: Which response do I bring to the word of God? The posture of humble receptivity that leads to repentance and life, or the posture of contemptuous dismissal that leads to intensified judgment?",
  },
  {
    color: PURPLE,
    title: "Our Own Posture Toward Scripture",
    body: "Jeremiah 36 refuses to let us be neutral observers. The scroll is read three times; three different audiences respond to it. The people hear it (and are not described as responding). The officials hear it and are afraid &mdash; they take it seriously. The king hears it and burns it &mdash; he treats it as a threat to be eliminated. Our own engagement with Scripture places us somewhere on this spectrum. Indifference, fearful receptivity, and contemptuous dismissal are all represented in the chapter. The text invites us to ask not merely what we believe about the Bible but how we actually treat it: Do we read it? Do we let it disturb us? Do we find ways of cutting off the columns that make us uncomfortable?",
  },
  {
    color: ROSE,
    title: "The Courage of Baruch",
    body: "Baruch is one of the Bible&rsquo;s unsung figures of courage. He writes the scroll from Jeremiah&rsquo;s dictation, knowing its contents. He reads it publicly in the temple, knowing it will provoke powerful opposition. He reads it again before the officials, who are afraid of what they have heard. He is warned to hide &mdash; because the king has issued an arrest warrant for him. He hides. And then, after all of it, he writes the new, expanded scroll from Jeremiah&rsquo;s dictation again. Baruch&rsquo;s courage is not dramatic heroism; it is the steady, faithful courage of a person who keeps doing the next right thing when the stakes are high. He is a model for every believer who has been asked to carry or communicate a word that powerful people do not want to hear.",
  },
  {
    color: GREEN,
    title: "The Cost of Those Who Read the Word Faithfully",
    body: "Reading God&rsquo;s word publicly has never been cost-free in contexts where the word challenges entrenched power. Baruch reads and is endangered. Jeremiah is banned from the temple. Even the officials who urged the king not to burn the scroll could not protect Baruch or themselves from the king&rsquo;s wrath. The chapter is realistic about what happens when the prophetic word enters a world that does not want to hear it: there is resistance, suppression, and personal danger for those who carry it. This has been true throughout church history in contexts of persecution, and it remains true wherever the biblical word challenges the assumptions and practices of those who hold power.",
  },
  {
    color: BLUE,
    title: "What It Means to Be a &quot;Jehudi&quot; vs. an &quot;Elishama&quot;",
    body: "The chapter peoples its story with individuals who make different choices in a crisis. Jehudi reads the scroll to the king column by column &mdash; and keeps reading even as the king cuts and burns. He is not described as protesting. He is an instrument of the king&rsquo;s will, carrying out the destruction by continuing to read for the king&rsquo;s disposal. Elishama (in whose chamber the scroll was read to the officials) and Gemariah, Elnathan, and Delaiah all urged the king not to burn. They failed, but they tried. The question the chapter leaves for us is which figure we resemble in our own context: those who simply keep doing what is asked of them without moral resistance, or those who speak up for the integrity of the word even when they cannot control the outcome.",
  },
];

const JOURNAL_PROMPTS = [
  "Jeremiah 36 shows Jehoiakim burning the scroll column by column. Are there parts of Scripture you have been &rsquo;cutting off&rsquo; &mdash; avoiding, explaining away, or treating as less authoritative than others? What would it look like to read the whole scroll?",
  "Baruch took personal risk to carry Jeremiah&rsquo;s word publicly. When has faithfulness to the biblical word cost you something? What helped you continue?",
  "The officials told Baruch and Jeremiah to hide before reporting to the king. They were caught between truth and power. Have you ever been in a similar position? How did you navigate it?",
  "The new scroll contained all the former words plus many more (36:32). Where have you seen attempts to suppress or minimize the word of God result in its wider proclamation?",
  "Compare Josiah&rsquo;s response in 2 Kings 22:11 with Jehoiakim&rsquo;s in Jeremiah 36:24. Which response best describes your own instinct when Scripture confronts you with something uncomfortable?",
];

export default function Jeremiah36GuidePage() {
  const [tab, setTab] = useState<J36Tab>("overview");
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
      const raw = localStorage.getItem("vine_jer36_journal");
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
    localStorage.setItem("vine_jer36_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_jer36_journal", JSON.stringify(updated));
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
          <div style={{ background: `linear-gradient(135deg, #1a0a00 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: GOLD, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>JEREMIAH</span>
                <span style={{ color: MUTED, fontSize: 14 }}>Chapter 36 &bull; 605 BCE</span>
              </div>
              <h1 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                Jeremiah 36 &mdash; Jehoiakim Burns the Scroll
              </h1>
              <p style={{ fontSize: "clamp(0.95rem,2vw,1.15rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0 }}>
                A dramatic narrative of the fate of God&rsquo;s word in the hands of a contemptuous king &mdash; Baruch reads the scroll publicly, officials hear it with fear, the king burns it column by column on his brazier, and God responds by dictating a new scroll with added judgment and a personal oracle against Jehoiakim.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} type="button" onClick={() => setTab(t.id as J36Tab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", color: tab === t.id ? GOLD : MUTED, borderBottom: tab === t.id ? `2px solid ${GOLD}` : "2px solid transparent", transition: "color 0.15s" }}>
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Jeremiah 36 is one of the most carefully crafted narratives in the Hebrew prophetic corpus &mdash; a story of writing, reading, burning, and rewriting that illuminates both the human resistance to God&rsquo;s word and God&rsquo;s sovereign commitment to its preservation." }} />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {OVERVIEW_FACTS.map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>The Central Drama</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 12px" }} dangerouslySetInnerHTML={{ __html: "A scroll written. A scroll read three times to three different audiences. A scroll burned, column by column, by a king with a penknife and a brazier. A new scroll written &mdash; more complete than the first. This is the shape of Jeremiah 36. It is a chapter about the indestructibility of the divine word and the accountability of those who attempt to suppress it." }} />
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
                      { ref: "Jer 36:1-4", desc: "God commands the scroll; Jeremiah dictates; Baruch writes" },
                      { ref: "Jer 36:5-8", desc: "Jeremiah explains to Baruch why he cannot go to the temple" },
                      { ref: "Jer 36:9-10", desc: "Baruch reads the scroll to the people during a fast" },
                      { ref: "Jer 36:11-19", desc: "Officials summon Baruch; they are afraid; they warn him to hide" },
                      { ref: "Jer 36:20-26", desc: "Jehoiakim burns the scroll column by column; no one tears their garments" },
                      { ref: "Jer 36:27-31", desc: "God commands a new scroll; oracle against Jehoiakim" },
                      { ref: "Jer 36:32", desc: "Baruch writes the new scroll with all former words plus many more" },
                    ].map(p => (
                      <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 100, paddingTop: 2 }}>{p.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{p.desc}</span>
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Jeremiah 36 develops several interlocking theological themes that have shaped Jewish and Christian reflection on the nature and authority of Scripture, the posture of kings before God&rsquo;s word, and the sovereignty of God over those who oppose his purposes." }} />
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

                <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>The Key Contrast</h3>
                  <blockquote style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "When the king and all his servants heard all these words, the king was not afraid, nor did he tear his garments, but Jehoiakim with all his mighty men and all his officials burned the scroll in the fire, until it was consumed in the fire that was in the brazier." }} />
                    <cite style={{ color: MUTED, fontSize: 13 }}>Jeremiah 36:24 (cf. 2 Kings 22:11)</cite>
                  </blockquote>
                </div>
              </div>
            )}

            {/* VERSE BY VERSE TAB */}
            {tab === "verse" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Verse by Verse</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Jeremiah 36 moves with the pace and precision of careful literary art. Each section advances the narrative while deepening the theological stakes. The commentary below tracks the text section by section through the scroll&rsquo;s writing, its three readings, its burning, and its renewal." }} />
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

                <div style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 12, padding: 24, marginTop: 32 }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>The Narrative Arc</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Jeremiah 36 follows a precise narrative arc: divine command &rarr; faithful execution &rarr; public proclamation &rarr; official reception with fear &rarr; royal destruction with contempt &rarr; divine command renewed &rarr; expanded scroll produced. At every point where human power attempts to terminate the process, God initiates the next step. The chapter demonstrates that prophetic writing is not a human literary project subject to human destruction; it is a divine project that cannot be terminated by a penknife and a brazier." }} />
                </div>
              </div>
            )}

            {/* APPLICATION TAB */}
            {tab === "application" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Application</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Jeremiah 36 is not only a historical narrative; it is a mirror. The questions it raises about posture toward God&rsquo;s word, the courage required to carry it, and the accountability that comes from rejecting it are as urgent now as they were in 605 BCE." }} />

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

                <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h3>
                  <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Deepen your study of Jeremiah 36 with these video teachings on the scroll, Baruch, and the endurance of God&rsquo;s word.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {[
                      { id: "HkBcN7wZmQo", title: "Jeremiah 36: Jehoiakim Burns the Scroll (Full Study)" },
                      { id: "JmDtP4vJbNs", title: "Baruch and Jeremiah - The Faithful Scribe in Jeremiah 36" },
                      { id: "LnFpY9uBwLk", title: "God's Word Cannot Be Burned - Jeremiah 36 Commentary" },
                      { id: "NpHrT2xZfVm", title: "The King Who Burned God's Word - Jeremiah 36 Explained" },
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: "Jeremiah 36 invites honest self-examination about our own posture toward Scripture. Use this space to reflect, respond, and pray." }} />

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {JOURNAL_PROMPTS.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: GOLD, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
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
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Jer 36:28, Jer 36:24, Jer 36:32" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Reflection</label>
                      <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="What does this passage say to you about your own posture toward Scripture?" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Prayer</label>
                      <textarea value={prayer} onChange={e => setPrayer(e.target.value)} placeholder="Respond to God in prayer..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <button type="button" onClick={saveEntry}
                      style={{ background: GOLD, color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", fontWeight: 700, cursor: "pointer", fontSize: 15, alignSelf: "flex-start" }}>
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
                              <div style={{ fontWeight: 700, color: GOLD, fontSize: 14 }}>{e.verse || "No verse"}</div>
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Jeremiah 36 through these video teachings on the scroll, the faithful scribe Baruch, and the endurance of God&rsquo;s word against all attempts to silence it." }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  {[
                    { id: "HkBcN7wZmQo", title: "Jeremiah 36: Jehoiakim Burns the Scroll (Full Study)", desc: "A full study of Jeremiah 36 from the command to write through the burning and the new scroll &mdash; tracing the theological significance of each stage in the narrative." },
                    { id: "JmDtP4vJbNs", title: "Baruch and Jeremiah &mdash; The Faithful Scribe", desc: "An exploration of Baruch son of Neriah as a figure of faithful courage &mdash; what it means to carry the prophetic word at personal cost in service of another&rsquo;s calling." },
                    { id: "LnFpY9uBwLk", title: "God&rsquo;s Word Cannot Be Burned &mdash; Jeremiah 36 Commentary", desc: "Commentary on Jeremiah 36 focusing on the theological claim that God&rsquo;s word cannot be finally suppressed &mdash; the new scroll as the pattern of Scripture&rsquo;s preservation through history." },
                    { id: "NpHrT2xZfVm", title: "The King Who Burned God&rsquo;s Word &mdash; Jeremiah 36 Explained", desc: "An examination of Jehoiakim&rsquo;s act of burning and its contrast with Josiah&rsquo;s response in 2 Kings 22 &mdash; the two archetypal postures toward the word of God." },
                  ].map(v => (
                    <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <VideoEmbed videoId={v.id} title={v.title} />
                      <div style={{ padding: "16px 20px" }}>
                        <h4 style={{ color: GOLD, fontWeight: 700, fontSize: 16, marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: v.title }} />
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
