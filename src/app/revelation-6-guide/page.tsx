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

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const videoItems = [
  { videoId: "c8fzO3ZWmCk", title: "Revelation 6 - The Four Horsemen Explained" },
  { videoId: "4Q7I9IWJIl4", title: "The Seven Seals - Revelation 6 Commentary" },
  { videoId: "XBYrFAMRRXk", title: "The Cry of the Martyrs - Revelation 6:9-11" },
  { videoId: "pZ0h4VrFqiM", title: "The Wrath of the Lamb - Revelation 6:12-17" },
];

const KEY_THEMES = [
  {
    id: "first-seal",
    color: TEAL,
    title: "First Seal &mdash; White Horse: Conquest (vv.1-2)",
    body: "When the Lamb opens the first seal, one of the four living creatures cries &ldquo;Come!&rdquo; and a white horse appears. Its rider holds a bow, is given a crown, and &ldquo;rode out as a conqueror bent on conquest.&rdquo; Interpreters are divided: Is this Christ himself riding in victory (cf. Rev 19:11)? Or is it a false conqueror &mdash; the antichrist, the spirit of militaristic imperialism, the parody of the true Victor? In the sequence of the four horsemen, the weight of evidence points to the latter: a conquering power that mimics divine authority but brings only destruction. The Zechariah background (Zech 1:8; 6:1-8) shows colored horses as agents of divine inspection and judgment across the whole earth. The white horse opens a series of judgments that escalate in severity. Conquest &mdash; whether Roman imperial expansion or the recurring spirit of empire throughout history &mdash; is the first wave of the earth&rsquo;s suffering under sin."
  },
  {
    id: "second-seal",
    color: ROSE,
    title: "Second Seal &mdash; Red Horse: War (vv.3-4)",
    body: "The second living creature calls forth a fiery red horse. Its rider &ldquo;was given power to take peace from the earth and to make people kill each other.&rdquo; He carries a large sword. The red color signals blood and violence. War follows conquest: the first rider establishes dominance; the second unleashes the internecine violence that empire provokes. This is not random chaos but divinely permitted judgment &mdash; the sword is &ldquo;given&rdquo; to the rider. God is not the author of war, but in giving humanity over to its own violence, he permits history&rsquo;s consequences to fall on those who choose the way of the sword. The large sword (Greek: &ldquo;machaira&rdquo;) may point to the Roman short sword, the weapon of military might that Rome wielded to enforce the Pax Romana &mdash; a peace built on the threat of annihilation. Revelation unmasks this &ldquo;peace&rdquo; as the red horse."
  },
  {
    id: "third-seal",
    color: GOLD,
    title: "Third Seal &mdash; Black Horse: Famine (vv.5-6)",
    body: "The third rider carries a pair of scales &mdash; the instrument of commercial measurement &mdash; and rides a black horse. A voice announces food prices at famine level: a quart of wheat for a day&rsquo;s wages, three quarts of barley for the same. But then: &ldquo;do not damage the oil and the wine.&rdquo; The scales and pricing suggest a severe economic crisis where staple foods become unaffordable for ordinary people while luxury goods (oil and wine) are protected. This is not merely natural famine; it is the kind of economic distortion in which the wealthy protect their comforts while the poor starve. War produces famine: supply chains collapse, fields lie fallow, workers are conscripted. The black horse follows the red as surely as poverty follows war. The economic details are precise and historically accurate to conditions in Roman Asia Minor."
  },
  {
    id: "fourth-seal",
    color: PURPLE,
    title: "Fourth Seal &mdash; Pale Horse: Death and Hades (vv.7-8)",
    body: "The fourth horse is described with the Greek word &ldquo;chloros&rdquo; &mdash; the pallid, sickly green-gray of a corpse. Its rider is named Death, and Hades follows close behind. They are given authority over a quarter of the earth &ldquo;to kill by sword, famine and plague, and by the wild animals of the earth.&rdquo; These four agents of death echo Ezekiel 14:21, where God sends sword, famine, wild beasts, and plague as his four dreadful judgments. Death and Hades are personified as two figures: Death strikes; Hades swallows the dead. This pair will appear again at the final judgment (Rev 20:13-14), where Death and Hades give up their dead and are themselves thrown into the lake of fire. The pale horse is the culmination of the first four seals: conquest leads to war, war to famine, famine to plague and death. The pattern is as old as human civilization."
  },
  {
    id: "fifth-seal",
    color: GREEN,
    title: "Fifth Seal &mdash; The Cry of the Martyrs (vv.9-11)",
    body: "The fifth seal is entirely different in character. No horse, no rider of judgment. Instead, John sees &ldquo;under the altar the souls of those who had been slain because of the word of God and the testimony they had maintained.&rdquo; These martyrs cry out: &ldquo;How long, Sovereign Lord, holy and true, until you judge the inhabitants of the earth and avenge our blood?&rdquo; This is the prayer of lament &mdash; &ldquo;how long, O Lord?&rdquo; &mdash; that runs through the Psalms (Ps 6:3; 13:1-2; 79:5; 94:3). It is a bold, anguished cry that does not suppress grief but brings it directly to God. The martyrs are given white robes and told to wait a little longer. Their deaths are not forgotten; their blood is not wasted. The altar imagery connects to the sacrificial system: their deaths, like sacrifices, ascend to God and demand response. This seal answers the pastoral question burning in John&rsquo;s readers: What happens to those who die for the faith? They are held, clothed, and heard."
  },
  {
    id: "sixth-seal",
    color: TEAL,
    title: "Sixth Seal &mdash; Cosmic Signs (vv.12-17)",
    body: "The sixth seal unleashes cosmic catastrophe: a great earthquake, the sun turning black as sackcloth, the moon turning blood red, stars falling to earth like figs shaken from a tree, the sky rolling up like a scroll, every mountain and island displaced. Every stratum of human society &mdash; kings, princes, generals, the rich, the mighty, every slave and free person &mdash; hides in caves, crying for the mountains to fall on them: &ldquo;Hide us from the face of him who sits on the throne and from the wrath of the Lamb! For the great day of their wrath has come, and who can withstand it?&rdquo; The cosmic imagery echoes Isaiah (Is 13:10; 34:4), Joel (Joel 2:10, 31), and Jesus in the Olivet Discourse (Luke 21:25-26). These are not necessarily literal astronomical events but the stock imagery of prophetic literature for the collapse of the existing order when God acts decisively in history. The most terrifying feature: the wrath belongs not only to God on the throne but to the Lamb. The slaughtered Lamb is also the judge."
  },
];

const VERSE_SECTIONS = [
  {
    id: "v1-2",
    color: TEAL,
    title: "Verses 1-2: The First Seal &mdash; The White Horse",
    body: "John watches as the Lamb opens the first of the seven seals. One of the four living creatures speaks with a voice &ldquo;like thunder,&rdquo; saying &ldquo;Come!&rdquo; &mdash; a summons that sets the judgment in motion. A white horse appears, its rider holding a bow, given a crown (&ldquo;stephanos&rdquo; &mdash; the victor&rsquo;s crown), and he &ldquo;rode out as a conqueror bent on conquest.&rdquo; The Greek verb is &ldquo;nikao&rdquo; &mdash; to conquer, to overcome, the same word used of Christ himself throughout Revelation. This deliberate parallel creates an interpretive puzzle: Is this Christ? Most commentators say no. The rider on the white horse in chapter 19 is explicitly identified as the Word of God with a robe dipped in blood; this rider carries a bow but no sword from his mouth. The Zechariah background (Zech 1:8; 6:1-8) helps: colored horses are divine agents of inspection and judgment. The white horse of conquest is the first wave of God&rsquo;s permitted judgment on a world in rebellion &mdash; the spirit of empire, militarism, and domination that recurs throughout human history."
  },
  {
    id: "v3-4",
    color: ROSE,
    title: "Verses 3-4: The Second Seal &mdash; The Red Horse",
    body: "The second living creature summons the second horse &mdash; fiery red. Its rider is given power &ldquo;to take peace from the earth and to make people kill each other.&rdquo; He carries a large sword (&ldquo;machaira megale&rdquo;). The color red signals blood; the removal of peace signals civil war and internecine violence. Roman Asia Minor had experienced the catastrophic civil wars of 68-69 AD (the Year of the Four Emperors) within living memory of John&rsquo;s readers. The large sword evokes Roman military power. But the scope is cosmic: war is not just a Roman problem but the second horseman across all history, following conquest wherever it rides. Note the passive constructions: the rider &ldquo;was given&rdquo; power; peace &ldquo;was taken.&rdquo; This signals divine permission, not divine enthusiasm. God does not delight in war; he permits humanity to experience the consequences of the path it has chosen. The blood-red horse is the result of a world that has rejected the Prince of Peace."
  },
  {
    id: "v5-6",
    color: GOLD,
    title: "Verses 5-6: The Third Seal &mdash; The Black Horse",
    body: "The third horse is black; its rider holds a pair of scales (&ldquo;zugos&rdquo; &mdash; a balance for weighing). A voice from among the four living creatures announces: &ldquo;Two pounds of wheat for a day&rsquo;s wages, and six pounds of barley for a day&rsquo;s wages, and do not damage the oil and the wine!&rdquo; The scales are an instrument of commerce; black may symbolize mourning or the darkening of the sky over scorched fields. Wheat and barley were staple foods for the poor; a day&rsquo;s wage (denarius) buying only one quart of wheat means a laborer would spend his entire income on a single day&rsquo;s subsistence, with nothing for his family. Barley, cheaper food, goes slightly further but still at crisis prices. The protection of oil and wine &mdash; luxury goods &mdash; may indicate that the wealthy are insulated from the famine that devastates the poor, a pattern as contemporary as it is ancient. This is the third horseman: economic injustice, famine, the crushing of the poor that follows in the wake of war and conquest."
  },
  {
    id: "v7-8",
    color: PURPLE,
    title: "Verses 7-8: The Fourth Seal &mdash; The Pale Horse",
    body: "The fourth living creature summons the most terrifying rider. The horse is &ldquo;chloros&rdquo; in Greek &mdash; pale, sickly, the color of diseased flesh or a corpse. The rider&rsquo;s name is &ldquo;Death,&rdquo; and &ldquo;Hades was following close behind him.&rdquo; They are given authority over a quarter of the earth to kill &ldquo;by sword, famine and plague, and by the wild animals of the earth.&rdquo; This is the only rider explicitly named. Death and Hades appear as a pair, the hunter and the devourer. The four agents of death echo Ezekiel 14:21 precisely. The scope &mdash; a quarter of the earth &mdash; is limited: this is judgment that leaves room for the world to continue, not final annihilation. The Greek word translated &ldquo;plague&rdquo; is &ldquo;thanatos,&rdquo; which also means death, suggesting disease and mortality in their most acute forms. The pale horse is the end of the sequence: conquest generates war, war generates famine, famine generates plague and death. The four horsemen are not separate catastrophes but a single cascade."
  },
  {
    id: "v9-11",
    color: GREEN,
    title: "Verses 9-11: The Fifth Seal &mdash; Souls Under the Altar",
    body: "When the fifth seal is opened, there are no horses, no riders of judgment. Instead, John sees &ldquo;under the altar the souls of those who had been slain because of the word of God and the testimony they had maintained.&rdquo; The altar imagery is rich: in the temple, the blood of sacrificed animals ran under the altar (Lev 4:7). These martyrs&rsquo; lives, poured out in death, are presented as sacrifices ascending to God. They cry with a loud voice: &ldquo;How long, Sovereign Lord, holy and true, until you judge the inhabitants of the earth and avenge our blood?&rdquo; This is the &ldquo;how long, O Lord&rdquo; of the Psalms of lament (Ps 6:3; 13:1; 79:5; 94:3) &mdash; not impatient grumbling but the faithful, anguished prayer of those who know God is just and cannot understand the delay. They are given white robes &mdash; symbols of righteousness and vindication &mdash; and told to rest &ldquo;a little longer, until the full number of their fellow servants, their brothers and sisters, were killed just as they had been.&rdquo; This answer is both comfort and sobering: more martyrs will come before the end. But none are forgotten; all are held."
  },
  {
    id: "v12-14",
    color: TEAL,
    title: "Verses 12-14: The Sixth Seal &mdash; Cosmic Shaking",
    body: "The sixth seal releases cosmological upheaval on an enormous scale. A great earthquake &mdash; the earth itself convulses. The sun turns black &ldquo;like sackcloth made of goat hair&rdquo; &mdash; the coarsest mourning fabric. The moon turns blood red. Stars fall to earth &ldquo;as figs drop from a fig tree when shaken by a strong wind.&rdquo; The sky recedes &ldquo;like a scroll, rolling up.&rdquo; Every mountain and island is removed from its place. The imagery draws on the great prophetic passages of cosmic disruption: Isaiah 13:10 (judgment on Babylon), Isaiah 34:4 (judgment on Edom), Joel 2:10, 30-31 (the Day of the Lord), and Jesus&rsquo;s Olivet Discourse (Luke 21:25-26). In prophetic literature, this language signals the collapse of the existing political-religious order when God acts in history; it need not be interpreted as literal astronomical events. The rolling-up sky may echo Isaiah 34:4 directly (&ldquo;all the starry host will fall like withered leaves from the vine, like shriveled figs from the fig tree&rdquo;). The entire created order testifies that something decisive is happening."
  },
  {
    id: "v15-17",
    color: ROSE,
    title: "Verses 15-17: The Terror of the Wrath of the Lamb",
    body: "The sixth seal closes with a remarkable scene: all of humanity, stratified by power and class &mdash; kings, princes, generals, the rich, the mighty, every slave and every free person &mdash; hides in caves and among rocks, calling on the mountains and rocks: &ldquo;Fall on us and hide us from the face of him who sits on the throne and from the wrath of the Lamb! For the great day of their wrath has come, and who can withstand it?&rdquo; The list moves from the most powerful to the least: even kings hide. The paradox is stark: those who have wielded earthly power would rather be crushed by mountains than face the Lamb. The phrase &ldquo;wrath of the Lamb&rdquo; is one of the most theologically charged in the New Testament. A slaughtered lamb in wrath &mdash; the gentlest, most vulnerable creature now as judge. This is not contradiction but completion: the Lamb who absorbed human violence at the cross is the same one before whom all human violence is finally accountable. The question that closes the chapter &mdash; &ldquo;who can withstand it?&rdquo; &mdash; is answered in chapter 7: those sealed by the living God."
  },
];

const APPLICATION_SECTIONS = [
  {
    id: "app1",
    color: GOLD,
    title: "Reading Current Events Through the Seals",
    body: "Revelation 6 was written to Christians suffering under Roman imperialism who needed to understand what was happening to them and why. The four horsemen gave them a theological framework for interpreting history&rsquo;s catastrophes: conquest, war, famine, and death are not random or meaningless &mdash; they are the consequences of human sin operating under divine permission. This framework has pastoral power for every generation: when we see the cascading effects of militarism, economic exploitation, disease, and death, Revelation says these are not surprises to God. He is not absent. The seals are being opened by the Lamb who holds all authority. This should produce in us neither paralysis nor callousness, but a clear-eyed engagement: we see what is happening, we understand its spiritual dimensions, and we pray and work accordingly. The question Revelation presses is not &ldquo;What does this news event mean for a prophetic timeline?&rdquo; but &ldquo;How does the reality of God&rsquo;s sovereign judgment over history shape how I live, pray, and serve right now?&rdquo;"
  },
  {
    id: "app2",
    color: ROSE,
    title: "The Martyrs&rsquo; Lament as a Model for Prayer",
    body: "The fifth seal gives the church one of its most important models for prayer under suffering: the cry &ldquo;How long, Sovereign Lord?&rdquo; This is not doubt; it is faith expressed in lament. The martyrs under the altar do not accept their suffering with stoic silence. They bring their grief, their injustice, their unanswered questions directly to God &mdash; and they are heard. White robes are given; an answer (however incomplete) comes. The Psalms of lament teach us that honest complaint before God is itself an act of trust. You only cry &ldquo;how long?&rdquo; to someone you believe is listening, to someone you believe is capable of acting. The church in every age that is suffering has permission &mdash; indeed, a scriptural mandate &mdash; to pray this way: to bring the raw reality of persecution, loss, and injustice to the throne and say, &ldquo;How long, holy and true? We know you see; we know you are just; we are trusting you with our blood.&rdquo; This prayer changes those who pray it even before the situation changes."
  },
  {
    id: "app3",
    color: GREEN,
    title: "The Wrath of the Lamb and the Meaning of Judgment",
    body: "Modern Christians often struggle with the concept of divine wrath. Revelation 6 does not allow us to soften it. The wrath of the Lamb is real, is coming, and is terrifying to every level of human power and status. But understanding this wrath rightly requires seeing it in the context of the whole narrative. The Lamb has already absorbed cosmic violence at the cross. His wrath is not petulance or caprice &mdash; it is the final, definitive response of holiness to all that has harmed, exploited, and killed the vulnerable across history. The martyrs under the altar are crying for justice; the wrath of the Lamb is the answer to that cry. Far from being incompatible with love, the judgment of the Lamb is the ultimate expression of his love for the victims of history. This shapes how we speak about judgment in our own context: not as vengeful satisfaction but as the long-promised vindication of those who have suffered at the hands of power. &ldquo;Who can withstand it?&rdquo; becomes not a taunt but an invitation to be on the right side of the story &mdash; sealed, clothed in white, under the altar&rsquo;s protection."
  },
  {
    id: "app4",
    color: PURPLE,
    title: "Living as Witnesses in a World of Horsemen",
    body: "The four horsemen depict the recurring patterns of fallen history: conquest, war, famine, death. They are not distant prophecy but present reality in much of the world at any given moment. Revelation does not call the church to withdraw from this reality but to witness faithfully within it. The martyrs&rsquo; &ldquo;testimony&rdquo; (Greek: &ldquo;martyria&rdquo;) is the same word that gives us our word martyr. To be a witness in Revelation is to live in such a way that the reality of the Lamb&rsquo;s reign is made visible in the midst of the horsemen&rsquo;s destruction. This might mean relief work in famine-affected regions (resisting the black horse), peacemaking initiatives across conflict lines (resisting the red horse), advocacy for the dignity of the displaced (resisting the white horse&rsquo;s imperial logic), and care for the dying (not denying the pale horse but accompanying those in its shadow). The church does not defeat the horsemen in Revelation 6 &mdash; that awaits the Lamb&rsquo;s final victory &mdash; but it bears witness to a different order in the midst of them."
  },
];

export default function Revelation6GuidePage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #1a0808 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: ROSE, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>REVELATION</span>
            <span style={{ color: MUTED, fontSize: 14 }}>Chapter 6 &bull; 17 Verses</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Revelation 6: The Seven Seals and the Four Horsemen of the Apocalypse
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,2vw,1.1rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0 }}>
            The Lamb begins opening the seven-sealed scroll from chapter 5. Each seal reveals a judgment on the earth. The four horsemen &mdash; white, red, black, and pale &mdash; are among the most iconic images in all of Scripture.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto", background: CARD }}>
        <div style={{ display: "flex", maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "16px 20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: activeTab === t ? ROSE : MUTED,
                borderBottom: activeTab === t ? `2px solid ${ROSE}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Overview of Revelation 6</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Revelation 6 marks the beginning of the Lamb&rsquo;s opening of the seven-sealed scroll that no one else in heaven or earth was found worthy to open (Rev 5:1-5). John watches from his position in the heavenly throne room as each seal is broken, and history unfolds in a succession of judgments that move from the terrestrial (the four horsemen) to the cosmic (the sixth seal&rsquo;s upheaval) to the eschatological (the question: &ldquo;who can withstand it?&rdquo;)." }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
              {[
                { label: "Book", value: "Revelation" },
                { label: "Chapter", value: "6" },
                { label: "Verse Count", value: "17" },
                { label: "Key Theme", value: "The Seals of Judgment" },
                { label: "Central Image", value: "The Four Horsemen" },
                { label: "Closing Question", value: "Who can withstand?" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: TEXT }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>Context: After the Throne Room Vision</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Chapters 4-5 established the theological center of the book: the throne of God is occupied; the Lamb who was slain holds all authority; and a great choir of angels, living creatures, and elders declares him worthy. Chapter 6 flows from that throne room vision into the unfolding of history. The seals are not a future timeline laid out in sequence so much as a theological interpretation of the present age: conquest, war, famine, death, martyrdom, and cosmic shaking are the recurring patterns of a world in rebellion against God, now being judged under the authority of the Lamb. The interlude of chapter 7 will answer the terrifying question that closes chapter 6 before the seventh seal is opened." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, color: TEXT }}>The Six Seals at a Glance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "6:1-2", color: TEAL, label: "First Seal", desc: "White horse &mdash; Rider with bow, given a crown, bent on conquest" },
                  { ref: "6:3-4", color: ROSE, label: "Second Seal", desc: "Red horse &mdash; Rider given power to take peace and make people kill each other" },
                  { ref: "6:5-6", color: GOLD, label: "Third Seal", desc: "Black horse &mdash; Rider with scales; famine prices for wheat and barley" },
                  { ref: "6:7-8", color: PURPLE, label: "Fourth Seal", desc: "Pale horse &mdash; Rider named Death, Hades following; authority over a quarter of earth" },
                  { ref: "6:9-11", color: GREEN, label: "Fifth Seal", desc: "Martyrs under the altar &mdash; &ldquo;How long, Sovereign Lord?&rdquo; &mdash; white robes given" },
                  { ref: "6:12-17", color: ROSE, label: "Sixth Seal", desc: "Cosmic signs &mdash; earthquake, sun black, moon red, stars fall, mountains flee; &ldquo;who can stand?&rdquo;" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 60, paddingTop: 2 }}>{item.ref}</span>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 100, paddingTop: 2 }}>{item.label}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: TEXT }}>Old Testament Background</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}
                dangerouslySetInnerHTML={{ __html: "The four horsemen draw on two key Old Testament sources. First, Zechariah 1:8 and 6:1-8, where colored horses are sent out to patrol the earth as divine agents &mdash; the same cosmic inspectors reappear in Revelation as agents of divine judgment. Second, Ezekiel 14:21, where God speaks of his &ldquo;four dreadful judgments&rdquo; against Jerusalem: sword, famine, wild beasts, and plague. The pale horse&rsquo;s four agents (sword, famine, plague, wild animals) quote Ezekiel precisely. The sixth seal draws on Isaiah 13:10 (judgment on Babylon), Isaiah 34:4 (judgment on Edom), and Joel 2:10 and 2:30-31 (the Day of the Lord)." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Zechariah 1:8",
                  "Zechariah 6:1-8",
                  "Ezekiel 14:21",
                  "Isaiah 13:10",
                  "Isaiah 34:4",
                  "Joel 2:10",
                  "Joel 2:30-31",
                  "Psalm 6:3",
                  "Psalm 13:1",
                  "Psalm 79:5",
                ].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Key Themes in Revelation 6</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "Each of the six seals opened in this chapter carries distinct theological weight. Taken together they form a coherent picture of how God&rsquo;s judgment operates in history: through permitted consequences, through escalating intensity, and always with the martyrs&rsquo; cry ringing in the heavenly court." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {KEY_THEMES.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Greek Word Study</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
                {[
                  { word: "sfragis", transliteration: "(sfra-GIS)", meaning: "seal &mdash; the wax or clay seal securing the scroll; each broken seal advances the revelation of history" },
                  { word: "chloros", transliteration: "(KHLO-ros)", meaning: "pale/green &mdash; used of the pale horse rider (Death); the same word used of green grass in Mark 6:39, here applied to the sickly pallor of a corpse" },
                  { word: "hades", transliteration: "(HA-dees)", meaning: "the realm of the dead, personified here as following Death; in Revelation both will be cast into the lake of fire (Rev 20:14)" },
                  { word: "martyria", transliteration: "(mar-ty-RI-a)", meaning: "testimony/witness &mdash; the martyrs died for their testimony; the word &lsquo;martyr&rsquo; in English comes from this Greek word for witness" },
                  { word: "sfragizo", transliteration: "(sfra-GI-zo)", meaning: "to seal &mdash; the act of sealing; the same verb used in ch.7 where the servants of God are sealed on their foreheads before judgment falls" },
                  { word: "orgee", transliteration: "(or-GAY)", meaning: "wrath &mdash; the settled, righteous anger of God against sin; used in &lsquo;the wrath of the Lamb&rsquo; (v.17), one of the most paradoxical phrases in Revelation" },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "14px 16px" }}>
                    <div style={{ color: GOLD, fontWeight: 800, fontSize: 16, fontStyle: "italic", marginBottom: 4 }}>{item.word}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginBottom: 6 }}>{item.transliteration}</div>
                    <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.meaning }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>Key Symbol: The Wrath of the Lamb</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;the wrath of the Lamb&rdquo; (v.16) is one of the most theologically loaded paradoxes in Scripture. A lamb is the gentlest of animals &mdash; the image of innocence, sacrifice, and vulnerability. In Jewish sacrifice, the lamb died for the sins of others. Yet here the Lamb is the agent of wrath that terrifies every stratum of human power. How do we hold this together? Revelation&rsquo;s answer is that the cross and the judgment are not opposites but sequential: the Lamb who absorbed all of history&rsquo;s violence at Calvary is the same one before whom all history&rsquo;s violence must answer. His wrath is not petulance but justice &mdash; the vindication of every soul under the altar, the answer to every &ldquo;how long, O Lord?&rdquo; ever cried. To understand the wrath of the Lamb rightly is to see that it is an expression of love for the victims of history." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Verse by Verse: Revelation 6:1-17</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A careful walk through all 17 verses of Revelation 6, examining the structure, background, and meaning of each passage. Click any section to expand it." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {VERSE_SECTIONS.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 40px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: 24, marginTop: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>Verse References in Context</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16, fontSize: 14 }}
                dangerouslySetInnerHTML={{ __html: "Hover over any reference to see the verse text. These are the key passages that illuminate Revelation 6&rsquo;s Old Testament background and New Testament echoes." }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Revelation 6:1",
                  "Revelation 6:2",
                  "Revelation 6:8",
                  "Revelation 6:9",
                  "Revelation 6:10",
                  "Revelation 6:16",
                  "Revelation 6:17",
                  "Zechariah 1:8",
                  "Zechariah 6:2",
                  "Ezekiel 14:21",
                  "Isaiah 13:10",
                  "Psalm 79:5",
                ].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Application: Living Under the Opened Seals</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "How does the reality of God&rsquo;s judgment in history &mdash; depicted through the four horsemen, the martyrs&rsquo; cry, and the cosmic shaking &mdash; shape our understanding of current events and our response to them? These sections explore the practical and pastoral implications of Revelation 6 for Christian life today." }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {APPLICATION_SECTIONS.map(section => (
                <div key={section.id} style={{ background: CARD, border: `1px solid ${open === section.id ? section.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpen(open === section.id ? null : section.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: section.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: section.title }} />
                    </div>
                    <span style={{ color: section.color, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>{open === section.id ? "-" : "+"}</span>
                  </button>
                  {open === section.id && (
                    <div style={{ padding: "0 20px 20px 42px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }} dangerouslySetInnerHTML={{ __html: section.body }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "When you see conquest, war, famine, or death in the news, how does knowing these are subject to the Lamb&rsquo;s authority change how you respond emotionally and prayerfully?",
                  "The fifth seal shows martyrs crying &ldquo;how long?&rdquo; Is there an area of your life or your community where you need to bring that kind of honest lament to God?",
                  "The wealthy and powerful hide from the Lamb in Revelation 6:15-16. What does it mean to live now in a way that you would not need to hide from the Lamb when he comes?",
                  "How does the image of souls under the altar &mdash; held, clothed, and heard &mdash; shape how you think about those who have died for their faith historically and in the present day?",
                  "If the four horsemen represent recurring historical patterns rather than a single future sequence, how does that change the way you read today&rsquo;s headlines through a biblical lens?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: ROSE, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 12 }}>Video Resources: Revelation 6</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Deepen your study of the four horsemen, the opened seals, and the martyrs&rsquo; cry through these video resources." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "10px 14px" }}>
                      <div style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `linear-gradient(135deg, #1a0a00 0%, ${CARD} 100%)`, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Closing: The Lamb Who Holds the Scroll</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The terrifying power of Revelation 6 is always held within the frame established in chapters 4 and 5: the scroll being opened is held by the Lamb who was slain. Every horseman rides under his authority. Every seal is broken by his hand. The question with which chapter 6 closes &mdash; &ldquo;who can withstand?&rdquo; &mdash; is answered not by human power, moral achievement, or religious performance, but by chapter 7&rsquo;s vision of the sealed and the multitude. The church that reads Revelation 6 with eyes to see does not read a newspaper in terror but reads history in the knowledge that its Author has already written the final chapter &mdash; and the Lamb wins." }}
              />
              <blockquote style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, margin: 0 }}>
                <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8, color: TEXT }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;They called to the mountains and the rocks, &lsquo;Fall on us and hide us from the face of him who sits on the throne and from the wrath of the Lamb! For the great day of their wrath has come, and who can withstand it?&rsquo;&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13 }}>-- Revelation 6:16-17 (NIV)</cite>
              </blockquote>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
