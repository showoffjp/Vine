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
const ACCENT = "#3a7d56";

type SPTab = "overview" | "divinepromises" | "transfiguration" | "falseteachers" | "lastdays" | "paulletters" | "themes" | "journal" | "videos";
type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const TABS: { id: SPTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "divinepromises", label: "Divine Power & Promises" },
  { id: "transfiguration", label: "The Transfiguration" },
  { id: "falseteachers", label: "False Teachers" },
  { id: "lastdays", label: "The Last Days" },
  { id: "paulletters", label: "Paul's Letters as Scripture" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const JOURNAL_KEY = "vine_2peter_journal";

export default function SecondPeterGuide() {
  const [activeTab, setActiveTab] = usePersistedState<SPTab>("vine_2peter_tab", "overview");
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
            <span style={{ background: ACCENT + "22", color: ACCENT, padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" }}>NT Letter · Petrine</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 12 }}>The Second Letter of Peter</h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 32, maxWidth: 680 }}>
            Peter's farewell letter — written knowing death is near — stirs his readers to hold fast to the faith. Divine power, precious promises, the transfiguration he witnessed on the mountain, a devastating analysis of false teachers, the patience behind God's apparent delay, and a remarkable endorsement of Paul's letters.
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

          {/* Overview */}
          {activeTab === "overview" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Peter's Last Letter</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>
                Second Peter is one of the most disputed letters in the NT canon — debated from the early church onward regarding authorship. But its content is theologically extraordinary: Peter (or a Petrine author writing in his tradition) sets down the theological foundations for holding the faith against the corrosive pressure of false teaching.
              </p>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>KEY VERSE</div>
                <div style={{ color: TEXT, fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7 }}>
                  "His divine power has granted to us all things that pertain to life and godliness, through the knowledge of him who called us to his own glory and excellence, by which he has granted to us his precious and very great promises, so that through them you may become partakers of the divine nature."
                </div>
                <div style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>— 2 Peter 1:3-4</div>
              </div>

              <AccordionItem id="author" title="Authorship and Date">
                <p>The letter claims Petrine authorship: "Simeon Peter, a servant and apostle of Jesus Christ" (1:1). It mentions the Transfiguration as a personal memory (1:16-18), refers to an earlier letter (3:1, probably 1 Peter), and includes the famous "I know that the putting off of my body will be soon, as our Lord Jesus Christ made clear to me" (1:14 — probably referencing John 21:18-19).</p>
                <p style={{ marginTop: 8 }}>The authorship debate centers on: (1) heavy linguistic differences from 1 Peter; (2) possible dependence on Jude (which would reverse the usual dating); (3) reference to Paul's letters as "Scripture" suggesting late date. Conservative scholars argue these objections are answerable; others accept pseudonymous authorship in a Petrine tradition. The theological content is authoritative regardless of one's conclusion about authorship.</p>
                <p style={{ marginTop: 8 }}>Date: if Peter wrote it, before AD 68 (his death). If pseudonymous, late 1st or early 2nd century.</p>
              </AccordionItem>

              <AccordionItem id="structure" title="Structure">
                <p><strong style={{ color: TEXT }}>Chapter 1:</strong> Divine power and precious promises (1:3-4); the chain of virtues from faith to love (1:5-7); eyewitness testimony at the Transfiguration (1:16-21); prophetic Scripture as lamp in dark place.</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: TEXT }}>Chapter 2:</strong> False teachers — their character, their methods, their end. Three OT examples: fallen angels, Noah's flood, Sodom and Gomorrah. Balaam the prophet who prophesied for profit. The terrible image: "It would have been better for them never to have known the way of righteousness than after knowing it to turn back" (2:21).</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: TEXT }}>Chapter 3:</strong> The last days and scoffers who ask "Where is the promise of his coming?" (3:4). God's time is not human time ("a thousand years as one day," 3:8). The patience of God as salvation. The new heavens and new earth (3:13). Paul's letters called Scripture (3:15-16).</p>
              </AccordionItem>

              <AccordionItem id="jude" title="2 Peter and Jude: The Relationship">
                <p>Second Peter chapter 2 and the letter of Jude share extensive parallel material — enough that scholars are certain one drew on the other. Which came first? Two main positions: (1) Jude was written first and 2 Peter expanded it; (2) 2 Peter was written first and Jude is a condensed version. Most scholars today favor Jude's priority.</p>
                <p style={{ marginTop: 8 }}>The similarities: both warn about false teachers who "crept in"; both use the angels-Noah-Sodom trio of OT examples; both reference Balaam; both end with doxology-like statements. The differences: 2 Peter expands the false teacher material considerably, uses future tense ("will come among you," 2:1) where Jude uses past tense, and adds the unique "last days" material of chapter 3.</p>
              </AccordionItem>
            </div>
          )}

          {/* Divine Promises */}
          {activeTab === "divinepromises" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Divine Power and Precious Promises (1:3-11)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                The letter opens with one of the most theologically rich passages in the NT: God's divine power has given believers everything needed for life and godliness. The response? A chain of virtues building from faith to love.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>2 PETER 1:3-4</div>
                <div style={{ color: TEXT, fontSize: "0.95rem", fontStyle: "italic", lineHeight: 1.8 }}>
                  "His divine power has granted to us all things that pertain to life and godliness, through the knowledge of him who called us to his own glory and excellence, by which he has granted to us his precious and very great promises, so that through them you may become partakers of the divine nature, having escaped from the corruption that is in the world because of sinful desire."
                </div>
              </div>

              <AccordionItem id="dp1" title="'Partakers of the Divine Nature'">
                <p>"Partakers of the divine nature" (koinōnoi theias physeōs) is one of the most striking phrases in the NT — and the most developed in Eastern Orthodox theology under the term theosis. The idea is not that we become God, but that we share in God's life, his moral character, his nature as the divine power works in and through us.</p>
                <p style={{ marginTop: 8 }}>This language was common in Hellenistic philosophy (the Stoics spoke of sharing in the divine nature), which may explain why Peter uses it in a letter to Gentile audiences. But Peter gives it a specifically Christian content: participation in the divine nature comes "through his precious and very great promises" — the promises of the Gospel about what God has done and will do in Christ.</p>
                <p style={{ marginTop: 8 }}>The process: knowledge of Christ → escape from corruption → participation in divine nature. This is not a quick transaction but a lifelong transformation, which is why Peter immediately follows with the chain of virtues.</p>
              </AccordionItem>

              <AccordionItem id="dp2" title="The Chain of Virtues (1:5-7)">
                <p>"Make every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love."</p>
                <p style={{ marginTop: 8 }}>This is called a sorites — a logical chain where each term builds on the previous. The structure is similar to Romans 5:3-5 and James 1:3-4. Seven virtues added to faith: virtue (aretē — moral excellence), knowledge (gnōsis), self-control (enkrateia), steadfastness (hypomonē), godliness (eusebeia), brotherly affection (philadelphia), love (agapē).</p>
                <p style={{ marginTop: 8 }}>Note: the chain starts with faith but adds these qualities. Faith without them is insufficient — "whoever lacks these qualities is so nearsighted that he is blind, having forgotten that he was cleansed from his former sins" (1:9). Genuine faith generates fruit. The false teachers of chapter 2 are the counter-example: they have "knowledge" (of a sort) but lack self-control and love.</p>
              </AccordionItem>

              <AccordionItem id="dp3" title="The Promise of Entry (1:11)">
                <p>"For in this way there will be richly provided for you an entrance into the eternal kingdom of our Lord and Savior Jesus Christ." The imagery is of a Roman triumph — a victorious entrance, richly provided, not a narrow escape. The believer who supplements their faith with this chain of virtues will not merely "enter" the kingdom but be welcomed with abundance.</p>
                <p style={{ marginTop: 8 }}>This verse responds to the scoffers of chapter 3 who mock the second coming. Peter's word: those who are prepared will not be caught off guard. The preparation begins now with these virtues.</p>
              </AccordionItem>
            </div>
          )}

          {/* Transfiguration */}
          {activeTab === "transfiguration" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>The Transfiguration: Eyewitness Foundation</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Against the charge that the apostolic message is "cleverly devised myths" (1:16), Peter appeals to something no myth-maker could fabricate: the Transfiguration on the holy mountain. He was there. He saw it. He heard the voice.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>2 PETER 1:16-18</div>
                <div style={{ color: TEXT, fontSize: "0.95rem", fontStyle: "italic", lineHeight: 1.8 }}>
                  "For we did not follow cleverly devised myths when we made known to you the power and coming of our Lord Jesus Christ, but we were eyewitnesses of his majesty. For when he received honor and glory from God the Father, and the voice was borne to him by the Majestic Glory, 'This is my beloved Son, with whom I am well pleased,' we ourselves heard this very voice borne from heaven, for we were with him on the holy mountain."
                </div>
              </div>

              <AccordionItem id="tr1" title="Eyewitness Testimony as Apologetic">
                <p>"We were eyewitnesses of his majesty" — Peter is making an historical claim, not a theological interpretation. He saw the Transfiguration. His testimony is primary, not secondary. This is important because the context suggests false teachers are questioning the second coming as mythological.</p>
                <p style={{ marginTop: 8 }}>NT scholar Richard Bauckham has argued extensively (in Jesus and the Eyewitnesses, 2006) that the Gospels and early letters preserve the testimony of named eyewitnesses who were known to the earliest Christian communities. Peter's claim here is the strongest single NT assertion of eyewitness foundation: I was there. I heard the voice. This is not mythology.</p>
              </AccordionItem>

              <AccordionItem id="tr2" title="The Transfiguration in the Gospels">
                <p>The Transfiguration is recorded in Matthew 17:1-8, Mark 9:2-8, Luke 9:28-36. Peter was one of three witnesses (with James and John). Jesus' face shone like the sun; his clothes became white as light; Moses and Elijah appeared with him. The voice from the cloud declared: "This is my beloved Son, with whom I am well pleased; listen to him."</p>
                <p style={{ marginTop: 8 }}>The Transfiguration anticipates both the resurrection appearances (similar light, transformed body) and the second coming (the full glory of the Son of Man). Peter's appeal to it in 2 Peter grounds the future hope (the Parousia of Christ) in a past event that he personally witnessed. If you doubt the second coming is real, Peter says: I saw what Christ really is on that mountain.</p>
              </AccordionItem>

              <AccordionItem id="tr3" title="Scripture as Lamp (1:19-21)">
                <p>After the eyewitness account, Peter immediately adds a second ground for confidence: "We have the prophetic word more fully confirmed, to which you will do well to pay attention as to a lamp shining in a dark place, until the day dawns and the morning star rises in your hearts."</p>
                <p style={{ marginTop: 8 }}>The prophetic word (OT Scripture) is like a lamp in a dark world — giving light and direction until the full dawn of Christ's return. The key verse for biblical interpretation: "no prophecy of Scripture comes from someone's own interpretation. For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit" (1:20-21).</p>
                <p style={{ marginTop: 8 }}>"Carried along" (pheromenoi) — the same word used of a ship driven by the wind in Acts 27:15. The prophets were not mechanical dictation machines, but neither were they simply expressing their own views. They were like sailors in the wind — using their agency, but moved by the Spirit. This is the standard evangelical doctrine of inspiration.</p>
              </AccordionItem>
            </div>
          )}

          {/* False Teachers */}
          {activeTab === "falseteachers" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>False Teachers: The Anatomy of Apostasy (Chapter 2)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Second Peter 2 is one of the most vivid and devastating descriptions of false teachers in the NT. Peter describes their character, their methods, their spiritual condition, and their inevitable end.
              </p>

              <AccordionItem id="ft1" title="How False Teachers Enter (2:1-3)">
                <p>"But false prophets also arose among the people, just as there will be false teachers among you, who will secretly bring in destructive heresies, even denying the Master who bought them, bringing upon themselves swift destruction."</p>
                <p style={{ marginTop: 8 }}>Three observations: (1) "Secretly bring in" (pareisaxousin) — same stealth language as Jude's "crept in unnoticed." False teaching doesn't announce itself; it infiltrates. (2) "Denying the Master who bought them" — even the false teachers were bought by Christ; their apostasy is not ignorance but betrayal of one who redeemed them. This verse is significant for debates about eternal security. (3) "Destructive heresies" — not just wrong opinions but spiritually destructive ones.</p>
              </AccordionItem>

              <AccordionItem id="ft2" title="Three OT Examples of Judgment">
                <p>Peter uses three OT examples of divine judgment to establish that God does not spare the guilty while preserving the righteous:</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: TEXT }}>1. The fallen angels (v.4):</strong> "God did not spare angels when they sinned, but cast them into hell and committed them to chains of gloomy darkness to be kept until the judgment." (Same tradition as Jude 6 — the angels who "did not keep their own domain")</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: TEXT }}>2. Noah's flood (v.5):</strong> "God did not spare the ancient world, but preserved Noah, a herald of righteousness, with seven others, when he brought a flood upon the world of the ungodly." Noah as "herald of righteousness" — an addition not in Genesis, suggesting an ancient tradition about Noah's preaching.</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: TEXT }}>3. Sodom and Gomorrah (v.6-8):</strong> "By turning the cities of Sodom and Gomorrah to ashes he condemned them to extinction, making them an example of what is going to happen to the ungodly; and if he rescued righteous Lot..." — Lot described as "greatly distressed by the sensual conduct of the wicked" (2:7).</p>
                <p style={{ marginTop: 8 }}>The pattern: God judges the ungodly AND rescues the righteous (2:9). The false teachers should not think that the delay of judgment means it won't come.</p>
              </AccordionItem>

              <AccordionItem id="ft3" title="Balaam: The Prophet for Profit">
                <p>"Forsaking the right way, they have gone astray. They have followed the way of Balaam, the son of Beor, who loved gain from wrongdoing, but was rebuked for his own transgression; a speechless donkey spoke with human voice and restrained the prophet's madness" (2:15-16).</p>
                <p style={{ marginTop: 8 }}>Balaam appears in Numbers 22-24 — a pagan prophet hired by Moab's king to curse Israel, who ends up blessing them instead because God won't let him do otherwise. His legacy in the prophets (Micah 6:5; Neh 13:2; Rev 2:14) is of a man who tried to monetize his prophetic gift, leading Israel into moral corruption.</p>
                <p style={{ marginTop: 8 }}>The false teachers "follow the way of Balaam" — they use spiritual gifts and teaching for personal gain. The donkey that rebuked Balaam is one of the Bible's great comic moments: the animal sees the angel that the prophet cannot see. Even a donkey discerned what the self-seeking prophet missed.</p>
              </AccordionItem>

              <AccordionItem id="ft4" title="The Terrible Warning (2:20-22)">
                <p>"For if, after they have escaped the defilements of the world through the knowledge of our Lord and Savior Jesus Christ, they are again entangled in them and overcome, the last state has become worse for them than the first. For it would have been better for them never to have known the way of righteousness than after knowing it to turn back from the holy commandment delivered to them."</p>
                <p style={{ marginTop: 8 }}>This is one of the most sobering verses in the NT. The false teachers are not merely ignorant — they once knew the way of righteousness and deliberately turned from it. The comparison to a washed pig returning to mud and a dog returning to vomit (2:22) is deliberately visceral. Peter's pastoral intent: warn the faithful, not frighten the genuine believer who struggles with sin. The false teachers are described as having made a deliberate, sustained reversal of their initial knowledge — this is apostasy, not spiritual struggle.</p>
              </AccordionItem>
            </div>
          )}

          {/* Last Days */}
          {activeTab === "lastdays" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>The Last Days: God's Patience and the New Creation (Chapter 3)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                Chapter 3 addresses the most practical eschatological question: if Christ is coming, why hasn't he come yet? Peter answers the scoffers, explains God's patience, and describes the new heavens and new earth with breathtaking scope.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>2 PETER 3:8-9</div>
                <div style={{ color: TEXT, fontSize: "0.95rem", fontStyle: "italic", lineHeight: 1.8 }}>
                  "But do not overlook this one fact, beloved, that with the Lord one day is as a thousand years, and a thousand years as one day. The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance."
                </div>
              </div>

              <AccordionItem id="ld1" title="The Scoffers' Argument">
                <p>"They will say, 'Where is the promise of his coming? For ever since the fathers fell asleep, all things are continuing as they were from the beginning of creation'" (3:4). The scoffers argue from the regularity of nature: the world has always continued the same way; there's no reason to expect a dramatic interruption.</p>
                <p style={{ marginTop: 8 }}>Peter's response: they "deliberately overlook" (3:5) — this is willful ignorance, not honest skepticism. They forget the flood (3:6), which was a massive interruption of nature's regularity. God has intervened before; he will intervene again.</p>
              </AccordionItem>

              <AccordionItem id="ld2" title="'A Thousand Years as One Day'">
                <p>Peter quotes Psalm 90:4: "A thousand years in your sight are but as yesterday when it is past." God's relationship to time is fundamentally different from ours. What seems like "delay" from a human perspective is not delay from God's perspective — and more importantly, the "delay" is purposeful: "not wishing that any should perish, but that all should reach repentance" (3:9).</p>
                <p style={{ marginTop: 8 }}>This verse is one of the NT's clearest statements about God's universal salvific will — he wants everyone to be saved. This doesn't mean everyone will be saved (the context describes judgment for the unrepentant), but it does mean that every day of the "delay" is another day of grace, another opportunity for repentance.</p>
                <p style={{ marginTop: 8 }}>Pastoral application: when believers grow impatient waiting for Christ's return or for justice in the world, Peter's word is: God's patience is an expression of love, not indifference. The delay is for the sake of those not yet saved.</p>
              </AccordionItem>

              <AccordionItem id="ld3" title="The New Heavens and New Earth (3:10-13)">
                <p>"But the day of the Lord will come like a thief, and then the heavens will pass away with a roar, and the heavenly bodies will be burned up and dissolved, and the earth and the works that are done on it will be exposed."</p>
                <p style={{ marginTop: 8 }}>The dissolution of the present order is described with vivid imagery — fire, roar, dissolution. Peter draws on Jewish apocalyptic tradition (Isaiah 34:4; 65:17; 66:22). The language may be metaphorical (conveying utter transformation rather than literal annihilation), but the point is clear: the current order is temporary.</p>
                <p style={{ marginTop: 8 }}>The new heavens and new earth: "According to his promise we are waiting for new heavens and a new earth in which righteousness dwells" (3:13). This is the great hope. Not escape from creation but creation renewed. Not souls floating in the sky but a transformed cosmos where "righteousness dwells" — justice is native, not exceptional.</p>
                <p style={{ marginTop: 8 }}>This connects to Revelation 21:1-5, Isaiah 65:17-25, and Romans 8:18-25 where creation itself groans for transformation. The Christian hope is cosmic, not merely personal.</p>
              </AccordionItem>

              <AccordionItem id="ld4" title="Practical Eschatology: Holy Lives">
                <p>"Since all these things are thus to be dissolved, what sort of people ought you to be in lives of holiness and godliness, waiting for and hastening the coming of the day of God?" (3:11-12). This is practical eschatology — the future shapes the present.</p>
                <p style={{ marginTop: 8 }}>The phrase "hastening the coming" is remarkable — it implies that human behavior (prayer, repentance, mission) can in some sense hasten the eschaton. This connects to the Lord's Prayer ("your kingdom come"), to missions theology, and to the Jewish tradition that the Messiah comes when Israel fully repents.</p>
                <p style={{ marginTop: 8 }}>The conclusion: "be diligent to be found by him without spot or blemish, and at peace" (3:14). The knowledge that the day is coming should produce peace (not anxiety) and diligence (not passivity). This is the psychological goal of good eschatology — stability and mission, not fear and paralysis.</p>
              </AccordionItem>
            </div>
          )}

          {/* Paul's Letters */}
          {activeTab === "paulletters" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Paul's Letters Called Scripture</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                One of the most theologically significant moments in the NT occurs in 2 Peter 3:15-16 — Peter explicitly refers to Paul's letters as "Scripture." This is the NT calling itself Scripture within the NT itself.
              </p>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>2 PETER 3:15-16</div>
                <div style={{ color: TEXT, fontSize: "0.95rem", fontStyle: "italic", lineHeight: 1.8 }}>
                  "And count the patience of our Lord as salvation, just as our beloved brother Paul also wrote to you according to the wisdom given him, as he does in all his letters when he speaks in these matters. There are some things in them that are hard to understand, which the ignorant and unstable twist to their own destruction, as they do the other Scriptures."
                </div>
              </div>

              <AccordionItem id="pl1" title="The Significance of 'Our Beloved Brother Paul'">
                <p>"Our beloved brother Paul" — this is a striking phrase. Paul and Peter had a public confrontation at Antioch (Galatians 2:11-14) in which Paul opposed Peter "to his face" because Peter was "not acting in step with the truth of the gospel." Here, Peter refers to Paul as a beloved brother whose wisdom came from God. Whatever the tension, reconciliation was genuine.</p>
                <p style={{ marginTop: 8 }}>The relationship between Peter and Paul is one of the great pastoral stories in the NT. Two leaders with different backgrounds, different approaches, one real conflict — and a recognition that the same Spirit works through different instruments. Neither abandoned his distinctives; neither allowed disagreement to fracture the fundamental bond.</p>
              </AccordionItem>

              <AccordionItem id="pl2" title="'As He Does in All His Letters When He Speaks... as They Do the Other Scriptures'">
                <p>The Greek phrase tas loipas graphas ("the other Scriptures") is unambiguous: Paul's letters are ranked with "the Scriptures" — the term used for the OT. This is astonishing. Peter is writing a letter that will itself become Scripture, referring to Paul's letters as Scripture, probably while Paul is still alive.</p>
                <p style={{ marginTop: 8 }}>This is the earliest explicit NT reference to a NT letter as Scripture. It shows that the church's recognition of authoritative apostolic writings began in the apostolic period itself, not centuries later in church councils. The canon was not invented by councils but recognized — and the recognition began with the authors themselves.</p>
              </AccordionItem>

              <AccordionItem id="pl3" title="'Hard to Understand' — Paul Is Not Easy">
                <p>"There are some things in them that are hard to understand, which the ignorant and unstable twist to their own destruction." Peter acknowledges that Paul is difficult. This is refreshing honesty — the NT itself recognizes that Paul requires careful reading.</p>
                <p style={{ marginTop: 8 }}>The false teachers apparently twisted Paul's teaching — probably his doctrine of grace and freedom (Romans 6:1-2 type misreadings: "shall we sin that grace may abound?"). Peter's word: Paul's letters are Scripture and require the same careful, humble reading as the OT. Twisting them is as serious as twisting the prophets.</p>
                <p style={{ marginTop: 8 }}>Hermeneutical principle: Scripture must be read with the understanding that it can be misread. The antidote is not avoiding difficult texts but reading them carefully with the guidance of the community and the Spirit.</p>
              </AccordionItem>
            </div>
          )}

          {/* Themes */}
          {activeTab === "themes" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: ACCENT }}>Key Theological Themes</h2>

              {[
                {
                  title: "Knowing Christ as Foundation",
                  text: "The phrase 'knowledge of him' (epignōsis) appears five times in 2 Peter. True knowledge of Christ is the foundation for virtue (1:3), the condition for escape from corruption (1:4), and what the false teachers distort (2:20). 2 Peter's theology is epistemological at its core: what you know about Christ shapes who you become.",
                },
                {
                  title: "Eyewitness Foundation for Faith",
                  text: "Peter's appeal to the Transfiguration (1:16-18) establishes that the apostolic message rests on eyewitness testimony, not mythology. This is not blind faith but historically grounded faith — the same point made in Luke 1:1-4, 1 John 1:1-3, and 1 Corinthians 15:5-8.",
                },
                {
                  title: "Theosis: Participation in Divine Nature",
                  text: "2 Peter 1:4 introduces the concept of 'participating in the divine nature' — central to Eastern Orthodox spirituality (theosis). Salvation is not merely forgiveness and escape from hell but transformation into the likeness of God's own character. The chain of virtues (1:5-7) is the practical program of this transformation.",
                },
                {
                  title: "The Patience of God as Grace",
                  text: "The apparent 'delay' of Christ's return is not God's inaction but his patience — 'not wishing that any should perish' (3:9). This reframes the entire eschatological question: every day of the delay is a day of mercy, an opportunity for repentance. The waiting is not abandonment but love.",
                },
                {
                  title: "New Creation Hope",
                  text: "The new heavens and new earth (3:13) set the horizon for Christian hope. Not escape from creation but creation renewed and purified — 'in which righteousness dwells.' The Christian life is oriented toward this future: holy living, hastening the kingdom, waiting in peace.",
                },
                {
                  title: "Apostolic Authority and Canon",
                  text: "2 Peter's reference to Paul's letters as Scripture (3:15-16) shows that canonical consciousness began in the apostolic period. The church didn't create the NT canon — it recognized what was already functioning with divine authority in the communities.",
                },
              ].map(th => (
                <AccordionItem key={th.title} id={th.title} title={th.title}>
                  <p>{th.text}</p>
                </AccordionItem>
              ))}

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginTop: 24 }}>
                <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 12 }}>CROSS-REFERENCES</div>
                {[
                  { ref: "Jude 4-18", text: "Parallel material on false teachers — likely same source tradition" },
                  { ref: "1 Peter 1:1-2", text: "The companion letter with different emphases" },
                  { ref: "Psalm 90:4", text: "Source for '1,000 years as one day'" },
                  { ref: "Galatians 2:11-14", text: "The Antioch confrontation — Peter and Paul's recorded conflict" },
                  { ref: "Revelation 21:1", text: "New heavens and new earth — John's parallel vision" },
                  { ref: "Romans 8:19-23", text: "Creation groaning for transformation — cosmic eschatology" },
                ].map(cr => (
                  <div key={cr.ref} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 140, flexShrink: 0 }}>{cr.ref}</span>
                    <span style={{ color: MUTED, fontSize: 13 }}>{cr.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Journal */}
          {activeTab === "journal" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: ACCENT }}>Personal Journal</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>
                What in 2 Peter speaks to where you are? The chain of virtues? God's patience? Waiting for the new creation?
              </p>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>VERSE OR PASSAGE</label>
                  <input
                    value={verse}
                    onChange={e => setVerse(e.target.value)}
                    placeholder="e.g., 2 Peter 1:3-4, 3:9..."
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

          {/* Videos */}
          {activeTab === "videos" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: ACCENT }}>Video Resources</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>Explore 2 Peter's themes through these teaching videos.</p>
              <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                <VideoEmbed videoId="kCfHCHUSIME" title="The Book of 2 Peter Explained" />
                <VideoEmbed videoId="NnGBhG03g4M" title="2 Peter 1 — Divine Power and Precious Promises" />
                <VideoEmbed videoId="ZGk1hl1nNrw" title="The Transfiguration and Eyewitness Faith" />
                <VideoEmbed videoId="oNpTha80yyE" title="God's Patience and the New Creation — 2 Peter 3" />
              </div>
            </div>
          )}

        </div>
        <Footer />
      </div>
    </>
  );
}
