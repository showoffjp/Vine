"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 12 - The Pure Words of the LORD" },
  { videoId: "Q2oNOlXzBhY", title: "When the Faithful Vanish: A Study of Psalm 12" },
  { videoId: "8phkAg8PMHE", title: "Now I Will Arise: God's Promise to the Poor" },
  { videoId: "fNk_zzaMoSs", title: "Silver Refined Seven Times: The Reliability of Scripture" },
];

const VERSE_SECTIONS = [
  {
    id: "vp1",
    ref: "Psalm 12:1-2",
    title: "Save, O LORD: The Cry When the Faithful Vanish",
    color: GOLD,
    content:
      "Save, O LORD, for the godly one is gone; for the faithful have vanished from among the children of man. Everyone utters lies to his neighbor; with flattering lips and a double heart they speak. The psalm opens not with praise but with an alarm bell &mdash; the Hebrew imperative hoshiah (save! deliver! rescue!) is the same root from which we get Hosanna. David surveys his society and reaches a desolate conclusion: the chasid (the godly, devout, covenant-loyal one) is gone, and the emunim (the faithful, the trustworthy ones) have vanished (the verb pasu suggests they have failed, ceased, disappeared from circulation). This is the language of social collapse, the sense that the people who can be relied upon have evaporated. The diagnosis in verse 2 is verbal: everyone speaks shav (emptiness, falsehood, worthlessness) to his neighbor. The two-fold description is precise. There are siphat chalaqot &mdash; smooth, flattering, slippery lips &mdash; and there is a lev valev, literally a &lsquo;heart and a heart,&rsquo; a double heart, a divided interior that says one thing and means another. The double heart is the opposite of the integrity the Psalter prizes (Psalm 86:11, &lsquo;unite my heart to fear your name&rsquo;). David is not merely complaining about rude speech; he is describing a society in which language itself has been weaponized, where words no longer correspond to reality, where every conversation must be decoded for hidden agendas. It is a portrait of a culture of spin.",
  },
  {
    id: "vp2",
    ref: "Psalm 12:3-4",
    title: "The Boast of the Tongue: Who Is Master Over Us?",
    color: ROSE,
    content:
      "May the LORD cut off all flattering lips, the tongue that makes great boasts, those who say, &lsquo;With our tongue we will prevail, our lips are with us; who is master over us?&rsquo; Having described the disease, David now prays against it. The petition that the LORD would yakret (cut off, sever, destroy) the flattering lips and the boastful tongue is an imprecation, an appeal to divine justice against an evil that human courts cannot reach. The boast David quotes is breathtaking in its arrogance: &lsquo;With our tongue we will prevail (nagbir, we will be mighty, we will gain mastery); our lips are with us (they are our weapon, our ally, our possession); who is master (adon, lord) over us?&rsquo; This is the speech of those who believe that words are unaccountable power. They have discovered that with enough flattery, enough propaganda, enough confident lying, they can shape reality and bend others to their will &mdash; and they recognize no authority above their own tongues. &lsquo;Who is lord over us?&rsquo; is the question of practical atheism. They do not deny that God exists; they live as though their speech is answerable to no one. This is the same spirit as the builders of Babel (Genesis 11:4) and the boast of the king of Babylon (Isaiah 14:13-14). The irony, which the psalm will expose, is that the very faculty they think makes them autonomous &mdash; the tongue &mdash; belongs to a God who has the final word.",
  },
  {
    id: "vp3",
    ref: "Psalm 12:5",
    title: "The Divine Response: Now I Will Arise",
    color: TEAL,
    content:
      "&lsquo;Because the poor are plundered, because the needy groan, I will now arise,&rsquo; says the LORD; &lsquo;I will place him in the safety for which he longs.&rsquo; This is the hinge of the psalm and one of the most dramatic verses in the Psalter: God himself speaks. After eleven lines of human speech &mdash; lies, flattery, boasting, lament &mdash; the LORD breaks his silence. The reason he gives is moral and specific: mishod aniyim, the devastation of the poor (aniyim, the afflicted, oppressed, lowly), and the groaning (enqat) of the evyonim, the needy. God is not indifferent to the misuse of words because the misuse of words has victims. Flattery and lies are not abstract sins; they are how the powerful plunder the powerless. And so the LORD declares: attah aqum &mdash; &lsquo;now I will arise.&rsquo; The verb qum (to rise up, to stand) is the language of a judge taking the bench, a warrior entering the field, a king moving to act. The divine &lsquo;now&rsquo; answers the human &lsquo;now&rsquo; of the oppressors&rsquo; boasting. God promises to set the victim be-yesha, in the salvation, the safety, the deliverance for which he yapiach (pants, longs, breathes out his desire). The God who seemed absent in verse 1 declares himself present and active in verse 5. This is the structural and theological center of the entire psalm.",
  },
  {
    id: "vp4",
    ref: "Psalm 12:6-7",
    title: "The Pure Words of the LORD: Silver Refined Seven Times",
    color: PURPLE,
    content:
      "The words of the LORD are pure words, like silver refined in a furnace on the ground, purified seven times. You, O LORD, will keep them; you will guard us from this generation forever. Here is the climactic contrast of the psalm, and the source of its enduring importance for the doctrine of Scripture. Over against the lies, flattery, and boasting of human speech, David sets the imrot (sayings, utterances, words) of the LORD. They are tehorot &mdash; pure, clean, unmixed, unalloyed. The image is metallurgical: kesef tsaruph, silver refined in a ba-alil (a crucible, furnace, or smelting-place) on the ground, and purified shivathayim &mdash; seven times, the number of completion and perfection. Refined silver, heated and skimmed of dross seven times over, is silver of absolute purity. This is what God&rsquo;s words are: there is no impurity, no deception, no hidden agenda, no dross of falsehood mixed in. In a world where every human word must be decoded for the lie within it, God&rsquo;s words can be trusted completely. Verse 7 draws the pastoral conclusion: &lsquo;You, O LORD, will keep them (tishmerem, you will guard, watch over, preserve them).&rsquo; The pronoun has been read two ways &mdash; God will preserve his words, or God will preserve his people (the poor and needy of verse 5). Both are true and the ambiguity may be intentional. The God whose words are pure is the God who keeps both his promises and the people to whom he makes them, guarding them from &lsquo;this generation&rsquo; (a phrase the NT echoes for a crooked age) forever.",
  },
  {
    id: "vp5",
    ref: "Psalm 12:8",
    title: "The Wicked Prowl: When Vileness Is Exalted",
    color: GREEN,
    content:
      "On every side the wicked prowl, as vileness is exalted among the children of man. The psalm ends not with a tidy resolution but with a sober realism that has comforted believers for three thousand years precisely because it does not pretend. Even after the magnificent assurance of God&rsquo;s pure words and protecting care, the wicked still yithhallakun &mdash; they walk about, prowl, parade themselves on every side. The closing clause is difficult in the Hebrew but its sense is clear: this happens kerum zullut, &lsquo;when vileness (zullut, what is cheap, worthless, contemptible) is exalted (rum, lifted high, honored)&rsquo; among the sons of men. David names the cultural inversion in which the contemptible is celebrated and the honorable is despised &mdash; precisely the world of Isaiah 5:20, &lsquo;woe to those who call evil good and good evil.&rsquo; Crucially, the psalm does not end here because David has lost faith. He ends here because faith does not require pretending the danger has passed. The wicked still prowl, vileness is still exalted &mdash; and yet, between verse 8 and the reader stands verse 6: the words of the LORD are pure, refined seven times, and he will keep his own forever. The realism of verse 8 is held within the assurance of verse 7. This is the mature faith of the Psalter: it sees the world exactly as it is and trusts God exactly as he has spoken.",
  },
];

const THEMES = [
  {
    color: PURPLE,
    title: "The Purity of God's Words vs. the Corruption of Human Words",
    body:
      "The architecture of Psalm 12 is a sustained contrast between two kinds of speech. Human words in this psalm are shav (empty, false), chalaqot (smooth, flattering), and the product of a lev valev (a double heart). They are weaponized to plunder the poor and to boast of autonomy. Against this, the imrot of the LORD are tehorot &mdash; pure words, like silver refined seven times (v.6). This is one of the foundational texts for the doctrine of Scripture&rsquo;s purity and reliability. Where human speech is mixed with the dross of deception, God&rsquo;s speech is unalloyed truth. Proverbs 30:5 echoes the metaphor exactly: &lsquo;Every word of God proves true; he is a shield to those who take refuge in him.&rsquo; Psalm 19:8-9 calls the LORD&rsquo;s words pure and true and righteous altogether; Psalm 119:140 says &lsquo;your promise is well tried, and your servant loves it.&rsquo; In a culture of spin, the believer is anchored by the conviction that there is one Voice that never deceives.",
  },
  {
    color: GOLD,
    title: "The Cry of the Faithful Remnant in a Society of Lies",
    body:
      "Psalm 12 opens with the lonely cry, &lsquo;Save, O LORD, for the godly one is gone; the faithful have vanished&rsquo; (v.1). This is the perennial experience of the faithful remnant &mdash; the sense that one stands alone, that the reliable and the devout have disappeared, that lies have become the common currency of society. Elijah voiced the same despair: &lsquo;I, even I only, am left&rsquo; (1 Kings 19:10), and received the same answer &mdash; God had preserved seven thousand who had not bowed to Baal. The feeling that &lsquo;everyone utters lies&rsquo; can be overwhelming and is often partly an illusion born of discouragement, but the psalm does not rebuke David for the feeling; it answers it. The remnant is never as alone as it feels, because God himself is the most faithful presence in the room. The believer who looks around and sees only flattery and falsehood is invited to look up and remember the God whose words are pure.",
  },
  {
    color: TEAL,
    title: "God Arises for the Poor and the Needy",
    body:
      "The theological center of the psalm is the divine speech of verse 5: &lsquo;Because the poor are plundered, because the needy groan, I will now arise, says the LORD.&rsquo; This connects the abuse of language directly to the oppression of the vulnerable. Lies and flattery are not victimless; they are the instruments by which the strong plunder the weak. The God of the Bible is consistently and emphatically the defender of the aniyim (poor) and evyonim (needy): &lsquo;He raises the poor from the dust&rsquo; (1 Samuel 2:8); &lsquo;the LORD works righteousness and justice for all who are oppressed&rsquo; (Psalm 103:6); and supremely, the Son of God announces his mission with &lsquo;he has anointed me to proclaim good news to the poor&rsquo; (Luke 4:18). The promise that God will &lsquo;arise&rsquo; (qum) is the assurance that the apparent triumph of falsehood is temporary, and that the groaning of the oppressed reaches a throne.",
  },
  {
    color: ROSE,
    title: "The Arrogance of Autonomous Speech: Who Is Master Over Us?",
    body:
      "The boast of verse 4 &mdash; &lsquo;With our tongue we will prevail; our lips are with us; who is master over us?&rsquo; &mdash; is the speech of practical atheism. It is the conviction that words are unaccountable power, that with enough propaganda and flattery one can master reality itself and answer to no one. This is the spirit of Babel (Genesis 11), of the king of Babylon who said &lsquo;I will ascend above the heights&rsquo; (Isaiah 14:13-14), and of every tyranny built on lies. The psalm exposes the folly: the very tongue they think makes them autonomous belongs to the God who has the first and final word. James 3 develops the same theme &mdash; the tongue is a small member that boasts of great things, a fire, a world of unrighteousness, set on fire by hell &mdash; and yet no human can tame it; only God is master over it. The question &lsquo;who is lord over us?&rsquo; has an answer, and it is the LORD whose words are pure.",
  },
  {
    color: GREEN,
    title: "Honest Realism: Faith That Sees the World Clearly",
    body:
      "Psalm 12 ends, strikingly, not with resolution but with the wicked still prowling and vileness still exalted (v.8). This honest realism is itself a model of mature faith. The psalm does not pretend that trusting God&rsquo;s pure words makes the danger disappear. The faithful still live in a world where the contemptible is celebrated and the honorable despised, where lies still circulate and the powerful still plunder. What faith provides is not the illusion that evil has vanished but the certainty that God has spoken, that he has arisen for the poor, and that he will keep his own forever. The structure of the psalm holds verse 8 (the wicked prowl) within verse 7 (you will guard us forever). The believer is thus equipped to face the world without either despair or denial &mdash; to name evil honestly while trusting God completely. This is the same posture Jesus commends: &lsquo;In the world you will have tribulation. But take heart; I have overcome the world&rsquo; (John 16:33).",
  },
];

export default function Psalm12Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openSection, setOpenSection] = useState<string | null>(null);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            Book of Psalms &middot; Psalm 12
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            Psalm 12: A Society of Lies and the Pure Words of the LORD
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "Psalm 12 is a lament over a culture where words have become weapons &mdash; a society of flattery, lies, and double hearts (vv.1&ndash;4). At its center God himself breaks the silence to declare that he will arise for the plundered poor (v.5), and the psalm climaxes in the supreme contrast: against the corrupt speech of men stand &lsquo;the words of the LORD,&rsquo; pure words, like silver refined seven times (vv.6&ndash;7)." }}
          />

          {/* Key verse callout */}
          <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 12, padding: "18px 22px", marginBottom: 20 }}>
            <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Verse &middot; Psalm 12:6</div>
            <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}
              dangerouslySetInnerHTML={{ __html: "&ldquo;The words of the LORD are pure words, like silver refined in a furnace on the ground, purified seven times.&rdquo;" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "Psalms", color: PURPLE },
              { label: "Psalm", value: "12 (8 verses)", color: TEAL },
              { label: "Author", value: "David", color: GOLD },
              { label: "Type", value: "Lament", color: GREEN },
            ].map(item => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`,
                background: activeTab === t.id ? `${PURPLE}22` : "transparent",
                color: activeTab === t.id ? PURPLE : MUTED,
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Psalm Overview</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 12 is a lament of David that diagnoses a society in which language itself has collapsed. The faithful seem to have vanished, and on every side people speak lies to one another with flattering lips and a divided heart. It is a psalm for any age in which truth seems to be a casualty &mdash; an age of propaganda, spin, and weaponized words. Yet the psalm is not finally about the corruption of human speech; it is about the purity of God&rsquo;s speech." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The structure pivots on verse 5, where the LORD himself speaks. After the lament over human lies and the prayer against boastful tongues, God breaks his silence: &lsquo;Because the poor are plundered, because the needy groan, I will now arise.&rsquo; The misuse of language is not abstract &mdash; it is how the powerful plunder the powerless, and God will not stay silent before it." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The climax is the metallurgical image of verse 6: the words of the LORD are pure, like silver refined seven times. This is a cornerstone text for the doctrine of Scripture&rsquo;s purity and reliability. The psalm ends with sober realism (v.8, the wicked still prowl), but that realism is held within the assurance that God keeps his words &mdash; and his people &mdash; forever." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>The Structure of Psalm 12</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv.1-2", label: "The Lament: The Godly Are Gone, the Faithful Have Vanished", color: GOLD },
                  { ref: "vv.3-4", label: "The Imprecation: Against Flattering Lips and Boastful Tongues", color: ROSE },
                  { ref: "v.5", label: "The Divine Oracle: Now I Will Arise for the Poor", color: TEAL },
                  { ref: "vv.6-7", label: "The Assurance: Pure Words, Refined Seven Times, Kept Forever", color: PURPLE },
                  { ref: "v.8", label: "The Realism: The Wicked Prowl as Vileness Is Exalted", color: GREEN },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: BG, borderRadius: 10, padding: "12px 14px" }}>
                    <span style={{ background: `${item.color}22`, border: `1px solid ${item.color}44`, borderRadius: 6, padding: "2px 10px", fontSize: 11, color: item.color, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Historical and Literary Context</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The superscription attributes the psalm to David and adds the musical notation &lsquo;according to the Sheminith&rsquo; (likely a reference to an eight-stringed instrument or a lower octave), the same direction given to Psalm 6. No specific occasion is named, which is part of the psalm&rsquo;s enduring power: it fits any era in which truth is in retreat and the faithful feel isolated." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 12 belongs to a cluster of early Davidic psalms (3&ndash;14) marked by the tension between the small, threatened community of the faithful and a hostile, deceptive world. It shares its concern for the speech of the wicked with Psalm 5 (&lsquo;there is no truth in their mouth&rsquo;) and its confidence in the LORD&rsquo;s pure words with Psalm 19. The dramatic device of a divine oracle breaking into a lament (v.5) also appears in Psalm 60 and Psalm 91, and gives the psalm its decisive turn." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Hebrew Words</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Imrot", transliteration: "im-ROHT", meaning: "Sayings, utterances, words; the spoken word of God", verse: "v.6 &mdash; the words (imrot) of the LORD are pure", color: PURPLE },
                  { word: "Tehorot", transliteration: "te-ho-ROHT", meaning: "Pure, clean, unmixed, free of dross", verse: "v.6 &mdash; pure (tehorot) words, like refined silver", color: TEAL },
                  { word: "Chalaqot", transliteration: "cha-la-KOHT", meaning: "Smooth, slippery, flattering (of lips)", verse: "vv.2-3 &mdash; flattering (chalaqot) lips", color: ROSE },
                  { word: "Lev Valev", transliteration: "lev va-LEV", meaning: "A heart and a heart; a double, divided heart", verse: "v.2 &mdash; with a double heart they speak", color: GOLD },
                  { word: "Qum", transliteration: "koom", meaning: "To rise up, stand, take action (as a judge or warrior)", verse: "v.5 &mdash; now I will arise (aqum), says the LORD", color: GREEN },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap", marginBottom: 4 }}>
                      <span style={{ color: item.color, fontWeight: 800, fontSize: 16 }}>{item.word}</span>
                      <span style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{item.transliteration}</span>
                    </div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.meaning}</div>
                    <div style={{ color: MUTED, fontSize: 13 }} dangerouslySetInnerHTML={{ __html: item.verse }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Psalm 12</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five interlocking themes carry the theology of Psalm 12 &mdash; the contrast between human and divine speech, the cry of the faithful remnant, God&rsquo;s rising for the poor, the arrogance of autonomous words, and the honest realism that marks mature faith. Each is anchored in the text and connected to the wider witness of Scripture." }}
              />
            </div>
            {THEMES.map(theme => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${theme.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 17, margin: "0 0 12px" }}>{theme.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Two Kinds of Words: A Side-by-Side Contrast</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The whole psalm can be read as a study in two kinds of speech. Set the human words and the divine words side by side and the contrast that organizes the poem becomes unmistakable:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "v.2", text: "Human words: empty, flattering, spoken from a double heart.", color: ROSE },
                  { ref: "v.4", text: "Human words: boastful, autonomous, claiming no master.", color: ROSE },
                  { ref: "v.5", text: "Divine words: the LORD speaks to defend the plundered poor.", color: TEAL },
                  { ref: "v.6", text: "Divine words: pure, like silver refined in a furnace seven times.", color: PURPLE },
                  { ref: "v.7", text: "Divine words: kept and guarded by God, preserving his people forever.", color: GREEN },
                ].map(item => (
                  <div key={item.ref} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>{item.ref}</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                dangerouslySetInnerHTML={{ __html: "The contrast is the point. In a world where every human word must be tested for the lie within it, there is one Voice that has never deceived and never will &mdash; refined, tested, true. To trust that Voice is the rest the psalm offers." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Psalm 12</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "All eight verses of Psalm 12 are grouped below by movement &mdash; lament, imprecation, divine oracle, assurance, and realism. Each accordion provides detailed commentary on the Hebrew text and its connections across Scripture. Click any section to expand." }}
              />
            </div>

            {VERSE_SECTIONS.map(section => (
              <div
                key={section.id}
                style={{ background: CARD, border: `1px solid ${openSection === section.id ? section.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ background: `${section.color}22`, border: `1px solid ${section.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {section.ref}
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{section.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>{openSection === section.id ? "-" : "+"}</span>
                </button>
                {openSection === section.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>Key Verse References</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Psalm 12:1", "Psalm 12:2", "Psalm 12:3", "Psalm 12:4", "Psalm 12:5", "Psalm 12:6", "Psalm 12:7", "Psalm 12:8", "Proverbs 30:5", "Psalm 19:8", "Isaiah 5:20", "James 3:6"].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: Living by Pure Words in a World of Lies</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 12 speaks with uncanny directness to an age of spin, propaganda, and weaponized speech. The central question it presses on the contemporary believer is this: when truth seems to be in retreat and the faithful feel isolated, where do you stand? The psalm answers: stand on the pure, refined, tested words of the LORD &mdash; the one Voice that does not deceive." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The applications below move from the most foundational (anchoring in God&rsquo;s pure words) to the most concrete (guarding our own speech and acting for the vulnerable)." }}
              />
            </div>

            {[
              {
                color: PURPLE,
                title: "Anchor Your Life in the One Voice That Does Not Lie",
                icon: "01",
                body: "In a culture where you must decode every human word for its hidden agenda, Psalm 12:6 offers an anchor: the words of the LORD are pure, refined seven times. The practical discipline that flows from this is a daily return to Scripture &mdash; not as one voice among many competing for your trust, but as the one Voice that has been tested and found without dross. When the swirl of news, advertising, and social media leaves you unsure what is true, the believer has somewhere to stand. This is not anti-intellectualism or refusal to think; it is the recognition that all human words must be weighed, and that there is one Word that weighs them. Make the reading and re-reading of Scripture the load-bearing habit of your week, because in a society of lies, the pure words of the LORD are the only firm ground.",
              },
              {
                color: GOLD,
                title: "Resist the Despair of the Isolated Remnant",
                icon: "02",
                body: "Psalm 12 opens with the cry that the godly are gone and the faithful have vanished (v.1). Many believers feel exactly this isolation &mdash; that they are the last one standing for truth, that everyone around them speaks lies. The psalm does not rebuke the feeling, but it does answer it. Like Elijah, who thought he alone was left and learned that God had preserved seven thousand (1 Kings 19), you are never as alone as discouragement makes you feel. The practical step is twofold: refuse the cynicism that says &lsquo;everyone is corrupt,&rsquo; which is usually an illusion of despair, and actively seek out the remnant &mdash; the faithful community that God has always preserved. Loneliness in the truth is real, but it is not the whole story, because God himself is the most faithful presence in the room.",
              },
              {
                color: GREEN,
                title: "Guard Your Own Tongue: Be the Faithful One",
                icon: "03",
                body: "It is easy to read Psalm 12 as a complaint about other people&rsquo;s lies. But the psalm presses a question back on the reader: are you the godly one, the faithful one, whose absence David laments? The flattering lips, the double heart, the boastful tongue &mdash; these are not only the sins of distant villains; they are temptations in every heart. The believer who longs for a society of truth must begin by becoming a person of truth: speaking plainly, refusing flattery, closing the gap between the inner heart and the outer word so that there is no lev valev, no double heart. James 3 reminds us that no one can tame the tongue by willpower alone; it requires the ongoing work of God. But the call is clear: do not merely lament the lies of the age; be, by grace, one of the faithful whose word can be trusted.",
              },
              {
                color: TEAL,
                title: "Act for the Plundered Poor as God Does",
                icon: "04",
                body: "The center of the psalm is God&rsquo;s declaration that he will arise because the poor are plundered and the needy groan (v.5). This reveals that the abuse of language is never abstract &mdash; it has victims, usually the most vulnerable. The God who arises for the poor calls his people to the same concern. The practical application is to listen for the groaning that lies and flattery are designed to drown out, and to act. Where deceptive speech is used to exploit the powerless &mdash; in business, in politics, in the church &mdash; the people of God should be found defending the truth and the vulnerable together. To worship the God of Psalm 12 is to share his attentiveness to those whom the world&rsquo;s lies are designed to plunder.",
              },
              {
                color: ROSE,
                title: "Face the World with Honest Realism, Not Denial",
                icon: "05",
                body: "Psalm 12 ends with the wicked still prowling and vileness still exalted (v.8). It does not pretend that trusting God makes evil vanish. This is a model for mature faith: see the world exactly as it is, and trust God exactly as he has spoken. The temptation is to swing to one of two extremes &mdash; despair (the wicked have won) or denial (everything is fine). The psalm refuses both. The wicked prowl, and God keeps his own forever. The believer can therefore name evil honestly without being crushed by it, and rest in God&rsquo;s promises without pretending the danger has passed. Jesus said it plainly: &lsquo;In the world you will have tribulation. But take heart; I have overcome the world&rsquo; (John 16:33).",
              },
            ].map(item => (
              <div key={item.icon} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 16, margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "David cries that the faithful have vanished (v.1). When have you felt isolated as one of the few standing for truth? How does the example of Elijah and his hidden seven thousand reframe that feeling?",
                  "The psalm describes a society of flattery and double hearts (v.2). Where do you encounter weaponized words today, and how do you guard yourself against being deceived by them?",
                  "Verse 4 quotes the boast, 'who is master over us?' In what areas are you tempted to treat your own words and reputation as answerable to no one?",
                  "God says, 'Now I will arise' for the plundered poor (v.5). Whose groaning might God be calling you to hear and act upon? What would it look like to share his concern this week?",
                  "Psalm 12:6 calls God's words pure silver refined seven times. How central is Scripture as your anchor when you are unsure what is true? What habit would deepen that anchoring?",
                  "The psalm ends with the wicked still prowling (v.8). How do you hold honest realism about evil together with real trust in God's promises, without falling into either despair or denial?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${PURPLE}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderLeft: `4px solid ${GOLD}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>A Closing Prayer</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Faithful LORD, in a world of flattery and lies, where the godly seem to vanish and vileness is exalted, we lift our eyes to you. Your words are pure words, like silver refined seven times, and we take refuge in the one Voice that has never deceived. Arise, as you have promised, for the plundered poor and the groaning needy; let us hear them and act for them as you do. Unite our divided hearts, that we might speak truth from a single, undivided heart, and become the faithful ones whose word can be trusted. Keep us, O LORD; guard us from this generation forever; and let us rest, not in the illusion that evil has passed, but in the certainty that you have spoken and you will keep your own. Through Jesus Christ, the Word made flesh, who is full of grace and truth. Amen." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on Psalm 12.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
