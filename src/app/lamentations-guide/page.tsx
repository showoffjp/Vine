"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const ACCENT = TEAL;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "chapter1", label: "Desolate City" },
  { id: "chapter2", label: "God's Anger" },
  { id: "chapter3", label: "The Great Middle" },
  { id: "chapter4", label: "Siege & Fall" },
  { id: "chapter5", label: "Restore Us" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type LamTab = "overview" | "chapter1" | "chapter2" | "chapter3" | "chapter4" | "chapter5" | "themes" | "journal" | "videos";

const CH1_SECTIONS = [
  {
    color: RED,
    title: "How Lonely Sits the City — Lamentations 1:1–2",
    body: "'How lonely sits the city that was full of people! How like a widow has she become, she who was great among the nations! She who was a princess among the provinces has become a slave. She weeps bitterly in the night, with tears on her cheeks; among all her lovers she has none to comfort her; all her friends have dealt treacherously with her; they have become her enemies.' The book opens mid-grief, with no theological prologue. Jerusalem is not explained; she is personified as a widow — the most economically and socially vulnerable figure in the ancient world. The first word in Hebrew is 'Eikah' — 'How!' — an untranslatable word of stunned sorrow. It gives the whole book its Hebrew name.",
  },
  {
    color: GOLD,
    title: "The Acrostic Form — Structured Grief",
    body: "Chapters 1, 2, and 4 are acrostics: each verse begins with the successive letter of the Hebrew alphabet (22 letters, 22 verses). Chapter 3, the centerpiece, gives three verses to each letter — 66 verses total, the longest chapter. Chapter 5 has 22 verses but is not an acrostic. The acrostic structure is not decorative. When you are overwhelmed by chaos and grief, you create form. The alphabet is the complete unit of language — from aleph to taw, everything that can be said. The acrostic says: we will grieve the full extent of this, from beginning to end, with as much language as language can hold.",
  },
  {
    color: TEAL,
    title: "Is It Nothing to You? — Lamentations 1:12",
    body: "'Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow, which was brought upon me, which the LORD inflicted on the day of his fierce anger.' This verse became a part of the Christian Good Friday liturgy — applied to Jesus on the cross. It is a cry for witness: will no one see what I am going through? The isolation of deep grief is not only physical but existential — the sense that your suffering is invisible to others, that no one truly sees or understands. The book insists that this cry must be voiced, not suppressed.",
  },
  {
    color: PURPLE,
    title: "The LORD Is Righteous — Lamentations 1:18",
    body: "'The LORD is righteous, for I have rebelled against his commandment; please hear all you peoples, and see my suffering; my virgins and my young men have gone into captivity.' Even in the midst of raw grief, the voice of Jerusalem makes a theological confession: the LORD is righteous. The catastrophe is not arbitrary divine cruelty; it is the consequence of covenant unfaithfulness. This does not diminish the pain. It does, however, keep the door open for a future: a God who acts justly is a God who might also be faithful to his promises.",
  },
];

const CH2_SECTIONS = [
  {
    color: RED,
    title: "The LORD Did What He Threatened — Lamentations 2:1–2, 17",
    body: "'How the LORD in his anger has set the daughter of Zion under a cloud! He has cast down from heaven to earth the glory of Israel; he has not remembered his footstool in the day of his anger. The Lord has swallowed up without mercy all the habitations of Jacob...' Chapter 2 is theologically bold: it identifies God as the active agent of destruction. Not merely that God allowed it, or that enemies did it — but that 'the LORD has done what he purposed; he has carried out his word, which he commanded long ago' (2:17). The Deuteronomic warnings were real. This is one of the most confrontational passages in the Bible — grief that refuses to let God off the hook.",
  },
  {
    color: GOLD,
    title: "Cry Aloud to the Lord — Lamentations 2:18–19",
    body: "'Their heart cried to the Lord. O wall of the daughter of Zion, let tears stream down like a torrent day and night! Give yourself no rest, your eyes no respite! Arise, cry out in the night, at the beginning of the night watches! Pour out your heart like water before the presence of the Lord! Lift your hands to him for the lives of your children.' Even in the chapter that most unflinchingly attributes disaster to God, the instruction is: cry to God. The same God who brought the judgment is the only one who can end it. Lamentations does not resolve the theological tension; it holds it and tells us to keep praying anyway.",
  },
  {
    color: TEAL,
    title: "Where Are the Prophets? — Lamentations 2:14",
    body: "'Your prophets have seen for you false and deceptive visions; they have not exposed your iniquity to restore your fortunes, but have seen for you oracles that are false and misleading.' The prophets who said 'Peace, peace' when there was no peace (Jeremiah 6:14, Ezekiel 13:10) bear responsibility for the catastrophe. When the people most needed honest prophetic speech, they received comfortable lies. The fall of Jerusalem is partly the failure of the religious establishment to speak difficult truth. Lamentations holds the false prophets accountable alongside the sin of the people.",
  },
];

const CH3_SECTIONS = [
  {
    color: RED,
    title: "I Am the Man Who Has Seen Affliction — Lamentations 3:1–20",
    body: "'I am the man who has seen affliction under the rod of his wrath; he has driven and brought me into darkness without any light; surely against me he turns his hand again and again the whole day long. He has made my flesh and my skin waste away; he has broken my bones; he has besieged and enveloped me with bitterness and tribulation...' The first twenty verses of chapter 3 are among the most desolate in the Bible. A 'man' (geber — a strong man, a warrior) speaks of utter destruction. The imagery is total: flesh, bones, darkness, chains, walls, arrows, wormwood. God is described not as absent but as actively, personally pursuing the sufferer with destruction.",
  },
  {
    color: TEAL,
    title: "The Great Turn — Lamentations 3:21–23",
    body: "'But this I call to mind, and therefore I have hope: The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.' These three verses are the pivot of the entire book — positioned at the exact center of the acrostic, the center of the longest chapter, the center of the five poems. They do not deny the suffering described in the previous twenty verses. They do not pretend it is over. They are an act of will — 'this I call to mind' — a deliberate choice to remember something that the circumstances currently contradict. The Hebrew word for 'call to mind' suggests bringing something to memory that must be actively retrieved.",
  },
  {
    color: GOLD,
    title: "'Great Is Your Faithfulness' — Lamentations 3:23",
    body: "The hymn 'Great Is Thy Faithfulness' (1923) draws its text entirely from Lamentations 3:22–23. What many worshipers do not know is that the text comes not from a season of blessing but from the middle of a catastrophic poem about the destruction of Jerusalem. The 'new every morning' mercies are declared not in a sanctuary full of glad worshipers but in the rubble of a burned city by a person who has just described being hunted like an animal. The faithfulness of God is not claimed on the basis of pleasant circumstances; it is asserted against catastrophe. That is what gives it its power.",
  },
  {
    color: BLUE,
    title: "Quiet Waiting — Lamentations 3:24–33",
    body: "'The LORD is my portion, says my soul, therefore I will hope in him. The LORD is good to those who wait for him, to the soul who seeks him. It is good that one should wait quietly for the salvation of the LORD. It is good for a man that he bear the yoke in his youth... For the Lord will not cast off forever, but, though he cause grief, he will have compassion according to the abundance of his steadfast love; for he does not afflict from his heart or grieve the children of men.' The 'good' that appears three times (3:25, 26, 27) is not good-feelings but good-for-you — the goodness of what is spiritually formative even when painful. Quiet waiting under difficult providence is presented as a form of trust, not passivity.",
  },
  {
    color: PURPLE,
    title: "Call on His Name — Lamentations 3:55–58",
    body: "'I called on your name, O LORD, from the depths of the pit; you heard my plea, Do not close your ear to my cry for help! You came near when I called on you; you said, Do not fear! You have taken up my cause, O Lord; you have redeemed my life.' From the deepest point of the lament, the speaker recalls a prior experience of rescue. God heard. God came near. God said 'Do not fear.' This memory of God's past faithfulness becomes the basis for present hope. The structure of lament always points toward memory of what God has done before as ground for trust in what God can do again.",
  },
];

const CH4_SECTIONS = [
  {
    color: RED,
    title: "The Precious Sons of Zion — Lamentations 4:2",
    body: "'How the precious sons of Zion, worth their weight in fine gold, are now considered as earthen pots, the work of a potter's hands!' Chapter 4 describes the siege: the famine that reduced aristocratic children to begging, the collapse of social structures, the deaths of priests and elders, the failure of allies. The contrast between 'precious sons' and 'earthen pots' captures the total social inversion of catastrophe. What was valued is devalued. What was permanent is broken. The grief is not only spiritual but material, social, political.",
  },
  {
    color: GOLD,
    title: "Blacker Than Soot — Lamentations 4:7–8",
    body: "'Her princes were purer than snow, whiter than milk; their bodies were more ruddy than coral, the beauty of their form was like sapphire. Now their face is blacker than soot; they are not recognized in the streets; their skin has shriveled on their bones; it has become as dry as wood.' The physical description of famine's toll on the once-beautiful is harrowing. Lamentations does not protect its readers from the horror of what siege and starvation do to human bodies. The refusal to euphemize is part of the book's theological commitment: if you cannot name what happened, you cannot grieve it; if you cannot grieve it, you cannot begin to move through it.",
  },
  {
    color: TEAL,
    title: "Our Punishment Is Complete — Lamentations 4:22",
    body: "'The punishment of your iniquity, O daughter of Zion, is complete; he will keep you in exile no longer; but your iniquity, O daughter of Edom, he will punish; he will uncover your sins.' Chapter 4 closes with something remarkable: the declaration that the punishment is complete. The discipline has reached its end. The exile will not last forever. Even in the poem that describes the siege most graphically, a note of hope sounds at the end. The oppressor who gloated (Edom, who stood aside while Jerusalem fell) will face its own judgment.",
  },
];

const CH5_SECTIONS = [
  {
    color: TEAL,
    title: "Remember, O LORD — Lamentations 5:1–18",
    body: "'Remember, O LORD, what has befallen us; look, and see our disgrace! Our inheritance has been turned over to strangers, our homes to foreigners. We have become orphans, fatherless; our mothers are like widows...' Chapter 5 is a communal petition — not a personal cry but the prayer of the whole community. It catalogs the specific losses: land, homes, food sources, security, honor. The losses are concrete and social. Lamentations does not deal in vague spiritual abstractions; it names the actual things that were taken. This is one of the book's most important pastoral contributions: grief should be specific, not general.",
  },
  {
    color: PURPLE,
    title: "You, O LORD, Reign Forever — Lamentations 5:19",
    body: "'But you, O LORD, reign forever; your throne endures to all generations.' After eighteen verses of specific lament, the community makes a declaration about God's sovereignty. This is not a denial of the catastrophe; it is the assertion of a reality larger than the catastrophe. The throne of God endures through the fall of Jerusalem. This is the same theological logic as the Psalms: the lament gives way not to explanation but to a renewed declaration of who God is. The sovereignty of God is not comfortable in context — a sovereign God who allowed this — but it is the only ground on which hope for restoration can stand.",
  },
  {
    color: RED,
    title: "Restore Us, O LORD — Lamentations 5:21–22",
    body: "'Restore us to yourself, O LORD, that we may be restored! Renew our days as of old — unless you have utterly rejected us, and you remain exceedingly angry with us.' The book ends without resolution — not with confident assurance of restoration, but with a petition and a fear. 'Unless you have utterly rejected us' — the possibility remains open. This is extraordinary honesty. The book does not force a happy ending. The Jewish tradition, in reading Lamentations liturgically (on Tisha B'Av, the anniversary of the Temple's destruction), repeats verse 21 after verse 22 — to end with the prayer rather than the fear. But both are in the text. Both are true to the experience.",
  },
];

const THEMES = [
  {
    color: TEAL,
    title: "Lamentations 3:22–23 — The Great Center",
    body: "'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning.' This affirmation is not the book's resolution; it is its center — the pivot around which total catastrophe and the possibility of hope turn. It is declared, not proved. It is a choice, not a conclusion. That is what makes it so powerful.",
  },
  {
    color: RED,
    title: "Naming What Happened",
    body: "Lamentations gives language to catastrophic suffering that has no easy resolution. It models a crucial spiritual practice: naming what happened, in full, to God. The acrostic form says: we will go through the entire alphabet of this grief. Nothing will be left unsaid. You cannot grieve what you cannot name.",
  },
  {
    color: GOLD,
    title: "God as Agent of Suffering",
    body: "Lamentations does not remove God from the suffering. Chapter 2 repeatedly attributes the destruction to God's active agency. This is theologically uncomfortable but pastorally significant: a God who is absent from suffering cannot meet us there. The God of Lamentations is present in the catastrophe, even as its source — and therefore present to receive the cry.",
  },
  {
    color: PURPLE,
    title: "Structured Grief",
    body: "The acrostic form imposes structure on chaos. This reflects something true about the grief process: it is not random but has shape and movement. Going through the alphabet of grief is not endless — it has a taw, an end. Structure does not resolve grief; it makes grief survivable.",
  },
  {
    color: BLUE,
    title: "Corporate Lament",
    body: "Lamentations is primarily communal — the whole city, the whole people grieving together. Western Christianity often treats grief as individual and private. Lamentations models liturgical, corporate grief: we weep together, we name together, we petition together. The church needs to learn how to hold public sorrow as well as public joy.",
  },
  {
    color: GREEN,
    title: "Open Endings",
    body: "The book ends without resolution — with a prayer and a fear. Lamentations refuses to provide cheap comfort. It does not rush to the resurrection. It sits in the tomb and lets the grief be what it is. This is one of its most important pastoral gifts: permission to stay in the hard place without being told to hurry up and be better.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Lamentations 3:21 says 'But this I call to mind' — a deliberate act of remembrance against despair. What truth about God do you need to actively call to mind today?",
  "The book ends with 'unless you have utterly rejected us.' Have you ever sat with the fear that God might have abandoned you? What helped you stay in that place?",
  "Lamentations names suffering with extreme specificity — the physical toll, the social collapse, the named losses. What in your life most needs to be named before God right now?",
  "The acrostic form — going through the entire alphabet of grief — suggests grief has shape and can be traversed. Does that resonate with your experience of loss?",
  "'The steadfast love of the LORD never ceases' is declared in rubble, not in a sanctuary. How does the context of this verse change how you receive it?",
];

export default function LamentationsGuidePage() {
  const [tab, setTab] = usePersistedState<LamTab>("vine_lamentations_tab", "overview");
  const [openCh1, setOpenCh1] = useState<string | null>(null);
  const [openCh2, setOpenCh2] = useState<string | null>(null);
  const [openCh3, setOpenCh3] = useState<string | null>(null);
  const [openCh4, setOpenCh4] = useState<string | null>(null);
  const [openCh5, setOpenCh5] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_lamentations_journal");
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
    localStorage.setItem("vine_lamentations_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_lamentations_journal", JSON.stringify(updated));
  }, [entries]);

  const inputStyle = {
    width: "100%", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 15,
    outline: "none", boxSizing: "border-box" as const,
  };
  const labelStyle = { display: "block", color: MUTED, fontSize: 13, marginBottom: 6, fontWeight: 600 };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

          {/* Hero */}
          <div style={{ background: `linear-gradient(135deg, #001515 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>POETRY · OT</span>
                <span style={{ color: MUTED, fontSize: 14 }}>5 Poems · ~586 BC · After Jerusalem's Fall</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Lamentations
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                Five poems written in rubble. Grief named in full — and at the center of it all: <em style={{ color: TEXT }}>"The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning."</em>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as LamTab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Lamentations is the Bible's permission slip to grieve catastrophically. Five carefully structured poems written in the immediate aftermath of Babylon's destruction of Jerusalem (586 BC) — when the Temple was burned, the city razed, and the population killed or deported.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Attributed to Jeremiah" },
                    { label: "Date", value: "~586 BC" },
                    { label: "Setting", value: "After Babylon destroys Jerusalem" },
                    { label: "Structure", value: "5 acrostic poems" },
                    { label: "Hebrew Name", value: "Eikah (How!)" },
                    { label: "Key Verse", value: "Lamentations 3:22–23" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Great Center — Lamentations 3:22–23</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: 8 }}>
                      "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Lamentations 3:22–23 (ESV) — the center of the book, declared in ruins</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Lam 1:1", desc: "How lonely sits the city — the opening cry ('Eikah')" },
                      { ref: "Lam 1:12", desc: "'Is it nothing to you?' — the cry for witness; used in Good Friday liturgy" },
                      { ref: "Lam 2:17", desc: "The LORD has done what he purposed — God as active agent" },
                      { ref: "Lam 2:18–19", desc: "Let tears stream down — cry to the Lord through the night" },
                      { ref: "Lam 3:1–20", desc: "I am the man who has seen affliction — the depths of despair" },
                      { ref: "Lam 3:21–23", desc: "But this I call to mind — the great turn; steadfast love, new every morning" },
                      { ref: "Lam 3:24–33", desc: "Wait quietly for the salvation of the LORD" },
                      { ref: "Lam 3:55–58", desc: "I called on your name from the pit; you heard; you came near" },
                      { ref: "Lam 4:22", desc: "Your punishment is complete — the exile will not last forever" },
                      { ref: "Lam 5:19–22", desc: "You reign forever — restore us, O LORD" },
                    ].map(p => (
                      <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 80, paddingTop: 2 }}>{p.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CHAPTER 1 */}
            {tab === "chapter1" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Chapter 1 — The Desolate City</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The first poem personifies Jerusalem as a widow — the most vulnerable figure in the ancient world. It moves between a narrator describing the city's desolation and Jerusalem herself speaking.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {CH1_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenCh1(openCh1 === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openCh1 === s.title ? "−" : "+"}</span>
                      </button>
                      {openCh1 === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CHAPTER 2 */}
            {tab === "chapter2" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>{"Chapter 2 — The LORD's Anger"}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The second poem is theologically the most confrontational. It attributes the destruction directly to God and does not soften the attribution. Then, remarkably, it tells the survivors to keep crying to that same God.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {CH2_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenCh2(openCh2 === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openCh2 === s.title ? "−" : "+"}</span>
                      </button>
                      {openCh2 === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CHAPTER 3 */}
            {tab === "chapter3" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Chapter 3 — The Great Middle</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The centerpiece of the book — 66 verses, three per Hebrew letter. It descends to the deepest point of individual suffering and then pivots, at its exact center, to the most hopeful statement in all of Lamentations.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {CH3_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenCh3(openCh3 === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openCh3 === s.title ? "−" : "+"}</span>
                      </button>
                      {openCh3 === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CHAPTER 4 */}
            {tab === "chapter4" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Chapter 4 — The Siege and Fall</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The fourth poem describes in unflinching detail what the Babylonian siege did to the people of Jerusalem — famine, social collapse, the death of the privileged alongside the poor. It ends with a word about the completeness of the punishment.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {CH4_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenCh4(openCh4 === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openCh4 === s.title ? "−" : "+"}</span>
                      </button>
                      {openCh4 === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CHAPTER 5 */}
            {tab === "chapter5" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Chapter 5 — Restore Us</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The final poem is a communal prayer — the whole people petitioning together. It ends not with assurance but with a petition and a fear. The book refuses to manufacture resolution it does not have.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {CH5_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenCh5(openCh5 === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openCh5 === s.title ? "−" : "+"}</span>
                      </button>
                      {openCh5 === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 24 }}>Major Themes</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
                  {THEMES.map(t => (
                    <div key={t.title} style={{ background: CARD, border: `1px solid ${t.color}33`, borderRadius: 12, padding: "20px 22px" }}>
                      <button onClick={() => setOpenTheme(openTheme === t.title ? null : t.title)}
                        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h3 style={{ color: t.color, fontWeight: 700, margin: 0, fontSize: 15 }}>{t.title}</h3>
                          <span style={{ color: MUTED, fontSize: 18 }}>{openTheme === t.title ? "−" : "+"}</span>
                        </div>
                      </button>
                      {openTheme === t.title && (
                        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, marginTop: 10, marginBottom: 0 }}>{t.body}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* JOURNAL */}
            {tab === "journal" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Lamentations gives us permission to name what is hard. Use this space to do that honestly before God.</p>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {PROMPTS.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 20 }}>New Entry</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Verse or passage</label>
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Lamentations 3:22–23" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Reflection</label>
                      <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="What does this passage stir in you?" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Prayer</label>
                      <textarea value={prayer} onChange={e => setPrayer(e.target.value)} placeholder="Respond to God in prayer..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <button onClick={saveEntry}
                      style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", fontWeight: 700, cursor: "pointer", fontSize: 15, alignSelf: "flex-start" }}>
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
                              <div style={{ fontWeight: 700, color: ACCENT, fontSize: 14 }}>{e.verse || "No verse"}</div>
                              <div style={{ color: MUTED, fontSize: 12 }}>{e.date}</div>
                            </div>
                            <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
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

            {/* VIDEOS */}
            {tab === "videos" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Video Teaching</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Explore Lamentations through video — the structure of grief, the meaning of acrostic poetry, and how this book has sustained believers through catastrophic loss.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="p8GDFPdaQZQ" title="The Book of Lamentations" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Lamentations — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="v6bKkiWbr5Y" title="Lament — Word Study" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Lament — what it means and why it matters</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="SCkyWH4sS4s" title="Grief in the Bible" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>How Scripture holds grief — Old and New Testament</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="p8GDFPdaQZQ" title="Great Is Thy Faithfulness" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The context of Lamentations 3:22–23 and the hymn it inspired</p>
                  </div>
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
