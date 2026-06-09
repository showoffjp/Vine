"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ACCENT = "#D97706";

type NahumTab = "overview" | "nineveh" | "character" | "poetry" | "fall" | "jonahconnect" | "themes" | "journal" | "videos";
type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const TABS: { id: NahumTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "nineveh", label: "Nineveh's Crimes" },
  { id: "character", label: "God's Character" },
  { id: "poetry", label: "The Poetry" },
  { id: "fall", label: "The Fall Described" },
  { id: "jonahconnect", label: "Jonah & Nahum" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const JOURNAL_KEY = "vine_nahum_journal";

export default function NahumGuide() {
  const [activeTab, setActiveTab] = usePersistedState<NahumTab>("vine_nahum_tab", "overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(JOURNAL_KEY);
      if (saved) setEntries(JSON.parse(saved));
    } catch { /* noop */ }
  }, []);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      verse: verse.trim(), reflection: reflection.trim(), prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }, [entries]);

  const toggle = (key: string) => setOpenAccordion(prev => prev === key ? null : key);

  const AccordionItem = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <div style={{ borderBottom: `1px solid ${BORDER}`, marginBottom: 4 }}>
      <button
        onClick={() => toggle(id)}
        style={{ width: "100%", textAlign: "left", background: "none", border: "none", color: TEXT, padding: "14px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 15, fontWeight: 600 }}
      >
        {title}
        <span style={{ color: MUTED, fontSize: 13 }}>{openAccordion === id ? "▲" : "▼"}</span>
      </button>
      {openAccordion === id && (
        <div style={{ paddingBottom: 16, color: MUTED, fontSize: 14, lineHeight: 1.8 }}>{children}</div>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px" }}>

          {/* Header */}
          <div style={{ marginBottom: 8 }}>
            <span style={{ background: ACCENT + "22", color: ACCENT, padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" }}>Minor Prophet · Old Testament</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 12 }}>The Book of Nahum</h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32, maxWidth: 680 }}>
            One hundred and fifty years after Jonah, Nineveh repented and was spared. Now Nahum announces its final fall. God's patience is real — but it is not infinite. Justice delayed is not justice denied. The same city that received mercy now faces judgment.
          </p>

          {/* Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36, borderBottom: `1px solid ${BORDER}`, paddingBottom: 16 }}>
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: "8px 18px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                  background: activeTab === t.id ? ACCENT : CARD,
                  color: activeTab === t.id ? "#fff" : MUTED,
                  transition: "all 0.15s",
                }}
              >{t.label}</button>
            ))}
          </div>

          {/* TAB: Overview */}
          {activeTab === "overview" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>The Other Side of Jonah</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>
                Nahum is the theological sequel to Jonah — the other side of the same coin. In Jonah, God spares Nineveh and the book ends with God's compassion: "Should I not be concerned about Nineveh?" In Nahum, roughly 150 years later, the verdict changes: Nineveh is judged. Together, the two books give the full picture of God's character — a God who relents when people repent, and whose patience, when exhausted, gives way to justice.
              </p>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>KEY VERSE</div>
                <div style={{ color: TEXT, fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7 }}>
                  "The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty. His way is in whirlwind and storm, and the clouds are the dust of his feet."
                </div>
                <div style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>— Nahum 1:3</div>
              </div>

              <AccordionItem id="author" title="Author, Date, and Historical Context">
                <p>Nahum is "the Elkoshite" — a town whose location is disputed (Galilee? Judah? Assyria?). He prophesied between 663 BC (the fall of Thebes, which he mentions as past in 3:8) and 612 BC (the fall of Nineveh, which he announces as future). Most scholars date him to the 660s-620s BC, making him a contemporary of Zephaniah and possibly Jeremiah in his early years.</p>
                <p style={{ marginTop: 8 }}>Historical context: Nineveh was the capital of the Assyrian Empire, which had destroyed the Northern Kingdom of Israel in 722 BC and invaded Judah under Sennacherib in 701 BC (2 Kings 18-19 — Hezekiah's great crisis). Assyria was the superpower. Nahum's announcement of its fall would have seemed as impossible to his contemporaries as announcing the fall of Rome to a 4th-century Roman. Nineveh fell to a coalition of Babylonians and Medes in 612 BC — exactly as Nahum predicted.</p>
              </AccordionItem>

              <AccordionItem id="structure" title="Structure of the Book">
                <p><strong style={{ color: TEXT }}>Chapter 1:</strong> A theological foundation — the character of God. An incomplete acrostic poem on the LORD as divine warrior, culminating in the announcement that Nineveh will be destroyed and Judah will be freed. The famous verse: "The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty" (1:3).</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: TEXT }}>Chapter 2:</strong> A vivid battle scene — the siege and fall of Nineveh described in present tense as if Nahum is watching it happen. Shields flashing red, chariots racing, the river gates opened, the palace melting. "Halt! Halt!" the cry goes up — but no one stands firm.</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: TEXT }}>Chapter 3:</strong> "Woe to the bloody city!" — the reason for judgment. Nahum catalogs Nineveh's crimes: endless plunder, lies, robbery, harlotry, sorcery, the slave trade. Comparison to Thebes (No-Amon), which seemed impregnable but fell. The book ends with bitter irony: "All who hear the news about you clap their hands over you. For upon whom has not come your unceasing evil?" (3:19).</p>
              </AccordionItem>

              <AccordionItem id="title" title="The Title: 'The Book of the Vision of Nahum'">
                <p>Nahum means "comfort" or "consolation" (the same root as Nehemiah). His book opens: "The burden (oracle/massa) of Nineveh. The book of the vision of Nahum the Elkoshite." The word "vision" (chazon) means prophetic revelation — what is seen, not just heard. Nahum sees Nineveh's fall before it happens.</p>
                <p style={{ marginTop: 8 }}>The name "comfort" is ironic — this is a book of judgment on Israel's oppressor. But the comfort is for Israel: God sees. God acts. The Assyrian boot on Israel's neck will be removed. The message of Nahum to the oppressed of every age: history is not without its author, and the author sees what is done in the darkness.</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: Nineveh's Crimes */}
          {activeTab === "nineveh" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Why Nineveh? The Indictment</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Nahum 3 catalogs Nineveh's offenses with prosecutorial precision. This isn't divine caprice — the fall of Nineveh is a moral verdict, justified by specific crimes against humanity and against God.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>NAHUM 3:1-4 — THE INDICTMENT</div>
                <div style={{ color: TEXT, fontSize: "1rem", fontStyle: "italic", lineHeight: 1.8 }}>
                  "Woe to the bloody city, all full of lies and plunder — no end to the prey! The crack of the whip, and rumble of the wheel, galloping horse and bounding chariot! Horsemen charging, flashing sword and glittering spear, hosts of slain, heaps of corpses, dead bodies without end — they stumble over the bodies! And all for the countless whorings of the prostitute, graceful and of deadly charms, who betrays nations with her whorings, and peoples with her charms."
                </div>
              </div>

              <AccordionItem id="bloody" title="The Bloody City">
                <p>"Woe to the bloody city" (3:1) — Hebrew ir damim, "city of bloods." This language appears in Ezekiel 22 against Jerusalem itself — a reminder that Nahum is not merely pronouncing against foreigners but applying a standard that applies universally. The designation "bloody city" was historically accurate for Nineveh: Assyrian reliefs in the British Museum depict their systematic use of torture, impalement, and mass deportation as deliberate instruments of terror.</p>
              </AccordionItem>

              <AccordionItem id="slave" title="The Slave Trade and Economic Exploitation">
                <p>Nahum 3:4 — "the countless whorings of the prostitute... who betrays nations with her whorings." The sexual imagery was a common prophetic metaphor for corrupt economic and political alliances — nations seduced into dependency on Assyrian power, then exploited and enslaved. Assyria built its wealth on tribute extracted through the threat of annihilation. Archaeological records confirm Nineveh received tribute from dozens of vassal states, including Israel and Judah.</p>
                <p style={{ marginTop: 8 }}>The slave trade: Assyrian policy included mass deportation of conquered peoples — designed to destroy ethnic cohesion and prevent rebellion. The Northern Kingdom of Israel (722 BC) was largely deported, the "ten lost tribes." Nahum indicts this specifically (3:4, 10).</p>
              </AccordionItem>

              <AccordionItem id="thebes" title="The Thebes Comparison (3:8-11)">
                <p>Nahum asks rhetorically: "Are you better than Thebes (No-Amon) that sat by the Nile, with water around her, her rampart a sea, and water her wall?" (3:8). Thebes was the great capital of Egypt — surrounded by rivers, defended by Ethiopia and Egypt and Put and the Libyans (3:9). It seemed impregnable. But it fell to Assyria in 663 BC. "Yet she became an exile; she went into captivity" (3:10).</p>
                <p style={{ marginTop: 8 }}>The irony is devastating: Assyria destroyed Thebes. Now Nineveh will fall the same way it made others fall. The instrument of judgment becomes the subject of judgment. This is the principle Obadiah also announced: "As you have done, it shall be done to you." God uses one nation to judge another, and then uses another to judge that one.</p>
              </AccordionItem>

              <AccordionItem id="end" title="The Final Taunt (3:18-19)">
                <p>Nahum ends with bitter irony addressed to the King of Assyria: "Your shepherds are asleep, O king of Assyria; your nobles slumber. Your people are scattered on the mountains with none to gather them. There is no easing your hurt; your wound is grievous. All who hear the news about you clap their hands over you. For upon whom has not come your unceasing evil?"</p>
                <p style={{ marginTop: 8 }}>The world clapping at Nineveh's fall — this is the universal reaction when a systematic oppressor falls. Not vindictiveness but relief. The weight of "unceasing evil" had pressed on the entire ancient world. Nineveh's fall was genuinely good news for every nation under the Assyrian boot.</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: God's Character */}
          {activeTab === "character" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Nahum 1:2-8: The Character of God</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Before Nahum says anything about Nineveh, he establishes who God is. Chapter 1 is a theological foundation — a partial acrostic poem on God's character that draws on one of the most famous passages in the OT (Exodus 34:6-7).
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>NAHUM 1:2-3</div>
                <div style={{ color: TEXT, fontSize: "1rem", fontStyle: "italic", lineHeight: 1.8 }}>
                  "The LORD is a jealous and avenging God; the LORD is avenging and wrathful; the LORD takes vengeance on his adversaries and keeps wrath for his enemies. <strong>The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty.</strong>"
                </div>
              </div>

              <AccordionItem id="exodus34" title="The Exodus 34 Echo">
                <p>Exodus 34:6-7 is the most quoted self-description of God in the OT — Moses asks to see God's glory, and God passes by proclaiming: "The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness, keeping steadfast love for thousands, forgiving iniquity and transgression and sin, but who will by no means clear the guilty, visiting the iniquity of the fathers on the children..."</p>
                <p style={{ marginTop: 8 }}>Nahum 1:3 quotes this exactly — "slow to anger" and "will by no means clear the guilty" — but in a different order. Other prophets (Joel 2:13, Jonah 4:2, Psalm 103:8) quote the merciful attributes. Nahum emphasizes the judicial. Both quotations are faithful to the original. The full character of God includes both: extravagant mercy and uncompromising justice. You cannot have one without the other — a God who is merely merciful is not just; a God who is merely just is not loving.</p>
              </AccordionItem>

              <AccordionItem id="slowtoanger" title="'Slow to Anger' — Not 'Never Angry'">
                <p>"Slow to anger" (arek apayim — literally "long of nose"; anger is described in Hebrew as nostrils flaring) is a key attribute. It means God is patient, not indifferent. It means he endures, delays, waits — as he waited 150 years after Jonah's preaching before bringing judgment on Nineveh. But it does not mean the judgment never comes.</p>
                <p style={{ marginTop: 8 }}>2 Peter 3:9 makes the same point about the second coming: "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance." God's delay is patience, not absence. Nahum's message: the patience is real; so is the power.</p>
              </AccordionItem>

              <AccordionItem id="refuge" title="The God Who Is a Refuge">
                <p>Nahum 1:7 is the pivot of the chapter: "The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him." Surrounded by language of storm, earthquake, dried-up seas, and burning mountains — this one verse is an island of peace. For Nahum's Judean audience, threatened by the same Assyria, this was the anchor.</p>
                <p style={{ marginTop: 8 }}>The word "knows" (yodea) has deep covenantal resonance — not mere intellectual recognition but intimate relationship. "He knows those who take refuge in him" — God's knowledge of his people is relational, personal, and the basis of their security even when the mountains quake and the rivers dry up around them.</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: Poetry */}
          {activeTab === "poetry" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Nahum's Poetry: Literature of Judgment</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Nahum is widely regarded as one of the most powerful poets in the Hebrew Bible. His battle descriptions (chapter 2) and the "woe oracle" (chapter 3) are literary masterpieces — rapid, violent, brilliantly observed. Reading Nahum requires acknowledging that Scripture encompasses the full range of human literary expression, including literature about judgment.
              </p>

              <AccordionItem id="chariots" title="The Chariot Scene (2:3-4)">
                <p>Nahum 2:3-4: "The shield of his mighty men is red; his soldiers are clothed in scarlet. The chariots come with flashing metal on the day he musters them; the cypress spears are brandished. The chariots race madly through the streets; they rush to and fro through the squares; they gleam like torches; they dart like lightning."</p>
                <p style={{ marginTop: 8 }}>The Hebrew text here is rapid, staccato, kinetic. Scholars have noted that this description — particularly "they rush to and fro through the squares" — reads like an eyewitness account of the Babylonian-Median assault on Nineveh in 612 BC. Whether Nahum wrote before or at the time of the fall, the precision is remarkable.</p>
              </AccordionItem>

              <AccordionItem id="lion" title="The Lion Taunt (2:11-13)">
                <p>One of the book's great literary passages — a taunt against Nineveh using the lion as Assyria's own royal symbol. Assyrian kings regularly depicted themselves as lion hunters on their palace reliefs; the lion was the imperial symbol of power. Nahum turns it back on them: "Where is the den of the lions, the feeding place of the young lions, where the lion and lioness went, where his cubs were, with none to disturb? The lion tore enough for his cubs and strangled prey for his lionesses; he filled his caves with prey and his dens with torn flesh."</p>
                <p style={{ marginTop: 8 }}>Then the devastating divine declaration: "Behold, I am against you, declares the LORD of hosts, and I will burn your chariots in smoke, and the sword shall devour your young lions. I will cut off your prey from the earth, and the voice of your messengers shall no longer be heard" (2:13).</p>
              </AccordionItem>

              <AccordionItem id="beautiful" title="'Behold, on the Mountains' (1:15)">
                <p>Nahum 1:15 (= Isaiah 52:7 in parallel): "Behold, upon the mountains, the feet of him who brings good news, who publishes peace! Keep your feasts, O Judah; fulfill your vows, for never again shall the worthless pass through you; he is utterly cut off."</p>
                <p style={{ marginTop: 8 }}>Isaiah 52:7 uses almost identical words — "How beautiful upon the mountains are the feet of him who brings good news, who publishes peace..." — in its great servant passage. Paul quotes Isaiah 52:7 in Romans 10:15 as announcing the Gospel of Christ. The "good news" of Nahum — Nineveh's fall, Judah's freedom — foreshadows the good news of the Gospel: the defeat of the power that oppresses, the announcement of true peace.</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: The Fall */}
          {activeTab === "fall" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>The Fall of Nineveh: Prophecy and History</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Nineveh fell in 612 BC to a coalition of Babylonians (under Nabopolassar), Medes (under Cyaxares), and Scythians. The ancient Greek historian Diodorus Siculus preserves a tradition that the river flooded and breached the city walls — possibly what Nahum 2:6 refers to: "The river gates are opened; the palace melts away." Whatever the mechanism, the city that had ruled the world for two centuries fell in a single campaign season.
              </p>

              <AccordionItem id="gates" title="The River Gates (2:6)">
                <p>"The river gates are opened; the palace melts away." The Khosr River ran through Nineveh; ancient tradition preserved by Diodorus says heavy rains flooded the river, breaching the walls during the siege. Whether or not this is exactly what happened, Nahum's description is consistent with how Nineveh fell. The archaeological site of Nineveh (modern Mosul, Iraq) was excavated in the 19th century by Austen Henry Layard — the British Museum's Assyrian galleries house some of the remarkable artifacts recovered.</p>
              </AccordionItem>

              <AccordionItem id="huzzab" title="The Disputed Word: Huzzab (2:7)">
                <p>Nahum 2:7 contains one of the most disputed words in the Minor Prophets: "Huzzab is stripped; she is carried off, her slave girls lamenting..." The Hebrew word huzzab appears nowhere else in the Bible. Options: a proper name (a queen of Nineveh), a title, a verb meaning "it is decreed," or a symbolic reference to the city itself personified. Translation committees are divided. The uncertainty is itself instructive — some parts of Scripture defy full resolution, and that is fine. The surrounding context is clear: Nineveh is being stripped and carried off.</p>
              </AccordionItem>

              <AccordionItem id="aftermath" title="Nineveh's Aftermath">
                <p>After 612 BC, Nineveh was so thoroughly destroyed that within two centuries it was simply legend. When Xenophon and his Greek army (the "Ten Thousand") marched past the site in 401 BC, they found only ruins — and the local people had no memory of what the great city had been. Alexander the Great fought his decisive battle of Gaugamela (331 BC) just miles from the site without apparently knowing Nineveh had ever existed there.</p>
                <p style={{ marginTop: 8 }}>This complete obliteration of the most powerful city in the world within a single generation is one of the most remarkable fulfillments of prophecy in the ancient record. Nahum had declared: "You will be hidden" (3:11) and "Nineveh is like a pool whose waters run away" (2:8). Run away they did — completely.</p>
              </AccordionItem>

              <AccordionItem id="significance" title="The Theological Significance">
                <p>Nineveh's fall mattered not just politically but theologically. For over a century, the Assyrians had ravaged the ancient Near East. Their propaganda machine told a simple story: the Assyrian god Assur was greater than all other gods; Assyrian power proved divine favor; the conquered were abandoned by their gods. Nahum's prophecy — and its fulfillment — was a counter-testimony: the God of Israel, who had seemed to abandon his people to Assyrian dominance, had not forgotten. Power is not the measure of divine favor. The Assyrian story was not the final story.</p>
              </AccordionItem>
            </div>
          )}

          {/* TAB: Jonah Connection */}
          {activeTab === "jonahconnect" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Jonah and Nahum: The Full Picture of God</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Jonah and Nahum are the only two prophetic books in the Hebrew Bible addressed to Nineveh. They tell opposite stories — and together they tell the most complete story about God's character in the Minor Prophets.
              </p>

              {[
                {
                  id: "jvsn1",
                  title: "Jonah's Nineveh: Mercy Extended",
                  content: "In Jonah (likely 8th century BC), God sends a reluctant prophet to Nineveh. The Ninevites repent. God relents. The book ends with God's famous unanswered question: 'Should I not be concerned about Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?' (Jon 4:11). God's compassion extends even to the enemy, even to the oppressor. This is unsettling news for anyone who wants God to be merely tribal.",
                },
                {
                  id: "jvsn2",
                  title: "Nahum's Nineveh: Patience Exhausted",
                  content: "Nahum (7th century BC, ~150 years later) announces judgment. Nineveh's repentance under Jonah apparently didn't last. The city returned to its patterns of violence, exploitation, and arrogance. Nahum 1:3 — 'slow to anger but will by no means clear the guilty' — is the answer to those who read Jonah and conclude that God's compassion means he never judges. The patience of God is real. Its exhaustion is also real.",
                },
                {
                  id: "jvsn3",
                  title: "What the Two Books Together Teach",
                  content: "Read together, Jonah and Nahum give the full character of God: (1) God's compassion is genuine and extends to unexpected people — even Israel's worst enemies. (2) God's patience is real — he gives time and opportunity for repentance. (3) God's justice is also real — repentance not sustained, mercy not received, leads ultimately to judgment. The two books prevent two theological errors: cheap grace (Jonah without Nahum: God just forgives everyone; it doesn't matter what you do) and merciless religion (Nahum without Jonah: God is only about judgment; there is no offer of mercy).",
                },
                {
                  id: "jvsn4",
                  title: "Nahum's Comfort for the Oppressed",
                  content: "Remember Nahum means 'comfort.' This judgment oracle was comfort to the Judeans who had suffered under Assyrian dominance for over a century. When power seems eternal and abuse seems unchecked, the word of Nahum is pastoral: God sees. God is not indifferent. The oppressor does not escape. This is what Paul means in Romans 12:19 — 'Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, Vengeance is mine, I will repay, says the Lord.' The confidence that God will deal with injustice frees his people from the burden of revenge.",
                },
              ].map(item => (
                <AccordionItem key={item.id} id={item.id} title={item.title}>
                  <p>{item.content}</p>
                </AccordionItem>
              ))}
            </div>
          )}

          {/* TAB: Themes */}
          {activeTab === "themes" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Key Theological Themes</h2>

              {[
                {
                  title: "Divine Justice as Good News",
                  text: "Nahum's 'good news' (1:15) is that judgment on Nineveh is announced. This is jarring for those who think good news only means forgiveness. But for the oppressed, the fall of the oppressor is genuinely good news. The Gospel includes both: mercy for the repentant and justice for the persistently unrepentant.",
                },
                {
                  title: "The Full Character of God",
                  text: "Nahum 1:3 quotes Exodus 34:6-7 selectively — emphasizing the judicial attributes. This is not a distortion but a facet. God is both merciful (Jonah's emphasis) and just (Nahum's emphasis). Any theology that keeps only one attribute becomes a false god — either a cosmic pushover or a merciless tyrant.",
                },
                {
                  title: "The Temporality of Human Power",
                  text: "Nineveh was the superpower of its age. Its fall reminded the ancient world and reminds every subsequent age: no empire is permanent. Political power is always provisional. This is not nihilism but eschatology — history moves toward a kingdom that cannot be shaken (Heb 12:28).",
                },
                {
                  title: "'I Am Against You'",
                  text: "Twice in Nahum God says 'Behold, I am against you' (2:13; 3:5). This is the inverse of 'Immanuel — God with us.' The most terrifying word is not condemnation but divine opposition. Every person and every institution must ask: does God stand for what I am doing, or against it?",
                },
                {
                  title: "The Refuge in the Storm",
                  text: "Nahum 1:7 — 'The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him' — offers pastoral comfort amid terrifying descriptions of divine power. The same God whose way is in whirlwind and storm is a stronghold for his people. Shelter and justice are both attributes of the same God.",
                },
              ].map(th => (
                <AccordionItem key={th.title} id={th.title} title={th.title}>
                  <p>{th.text}</p>
                </AccordionItem>
              ))}

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginTop: 24 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>CROSS-REFERENCES</div>
                {[
                  { ref: "Exodus 34:6-7", text: "God's self-disclosure — the foundation of Nahum 1:3" },
                  { ref: "Jonah 4:11", text: "The question Jonah ends with — Nahum answers from the other side" },
                  { ref: "Isaiah 52:7", text: "Parallel to Nahum 1:15 — beautiful feet bringing good news" },
                  { ref: "Romans 10:15", text: "Paul quotes Isaiah/Nahum's good news language for the Gospel" },
                  { ref: "2 Peter 3:9", text: "God is slow to anger — not absent; patience ≠ indifference" },
                  { ref: "Romans 12:19", text: "Vengeance belongs to God — Nahum's patience argument applied pastorally" },
                ].map(cr => (
                  <div key={cr.ref} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 140, flexShrink: 0 }}>{cr.ref}</span>
                    <span style={{ color: MUTED, fontSize: 13 }}>{cr.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: Journal */}
          {activeTab === "journal" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: ACCENT }}>Personal Journal</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>
                Where do you see yourself in Nahum's story? The oppressed trusting in God's refuge? Wrestling with God's justice? Holding onto 1:7 in the midst of 1:2-8?
              </p>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>VERSE OR PASSAGE</label>
                  <input
                    value={verse}
                    onChange={e => setVerse(e.target.value)}
                    placeholder="e.g., Nahum 1:3, 1:7, 1:15..."
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, boxSizing: "border-box" }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>REFLECTION</label>
                  <textarea
                    value={reflection}
                    onChange={e => setReflection(e.target.value)}
                    placeholder="What is God saying to you through this passage?"
                    rows={4}
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>PRAYER</label>
                  <textarea
                    value={prayer}
                    onChange={e => setPrayer(e.target.value)}
                    placeholder="Respond in prayer..."
                    rows={3}
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <button
                  onClick={saveEntry}
                  style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "11px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
                >Save Entry</button>
              </div>
              {entries.length > 0 && (
                <div>
                  <h3 style={{ fontWeight: 700, color: MUTED, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1, fontSize: 12 }}>Saved Entries ({entries.length})</h3>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13 }}>{e.verse || "No verse"}</span>
                        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                          <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                          <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button>
                        </div>
                      </div>
                      {e.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.reflection}</p>}
                      {e.prayer && <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", borderTop: `1px solid ${BORDER}`, paddingTop: 8, marginTop: 8 }}>Prayer: {e.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB: Videos */}
          {activeTab === "videos" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: ACCENT }}>Video Resources</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>Explore Nahum's message about God's justice and the fall of Nineveh.</p>
              <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                <VideoEmbed videoId="4Eg_di-O8nM" title="The Book of Nahum Explained" />
                <VideoEmbed videoId="oNpTha80yyE" title="Nahum and Jonah: The Full Picture" />
                <VideoEmbed videoId="ZGk1hl1nNrw" title="Nineveh's Fall and God's Justice" />
                <VideoEmbed videoId="NnGBhG03g4M" title="The LORD Is Slow to Anger — Nahum 1" />
              </div>
            </div>
          )}

        </div>
        <Footer />
      </div>
    </>
  );
}
