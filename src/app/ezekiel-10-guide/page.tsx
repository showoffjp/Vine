"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const ROSE = "#E11D48";

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
  "Application",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Ezekiel 10 &mdash; The Glory Departs",
    reference: "Ezekiel 10:1&ndash;22",
    paragraphs: [
      "Ezekiel 10 records what may be the single most theologically devastating event in the entire Old Testament: the departure of the glory of the Lord from the temple in Jerusalem. It is not a sudden withdrawal. It is a staged, deliberate, almost reluctant movement &mdash; from the inner sanctuary, to the threshold of the temple, to the east gate of the temple court &mdash; each pause a kind of divine lingering, as if God is slow to go. But go he does. And the slow departure of the divine glory is the theological catastrophe that explains everything else: the destruction of Jerusalem, the exile of the people, the silence of prophecy. God has left the building.",
      "The chapter revisits the vision of chapter 1, but now the setting is no longer the Chebar canal in exile. Ezekiel is transported in the Spirit to Jerusalem itself (chapters 8-11 form a single extended vision of the city and the temple), and what he sees is the divine chariot-throne of chapter 1 positioned at the temple, present in the place where God had promised to dwell. But rather than the inauguration of presence, Ezekiel 10 is the reversal of it. The God who came to dwell in the tabernacle in Exodus 40, whose glory filled the temple at Solomon&rsquo;s dedication in 1 Kings 8, is now departing from that same space.",
      "The chapter opens with the vision of the platform above the cherubim (10:1), which corresponds to the expanse and throne of chapter 1. The man clothed in linen &mdash; who in the preceding chapter (9:3) had been given a writing case to mark the faithful in Jerusalem &mdash; is now commanded by God to take burning coals from between the cherubim and scatter them over the city (10:2). This is a judgment image of the most serious kind: fire from the divine presence itself raining down on Jerusalem, consuming what has been corrupted by the idolatries catalogued in chapters 8 and 9.",
      "The moment that changes everything comes in verse 4: &ldquo;Then the glory of the Lord moved from the cherub to the threshold of the house, and the house was filled with the cloud, and the court was filled with the brightness of the glory of the Lord.&rdquo; The glory moves. It does not disappear instantly; it moves to the threshold &mdash; the doorway &mdash; as if pausing before leaving. Jewish and Christian interpreters have long noted the aching theology of this movement. God is at the door. He has not yet gone, but he is no longer within. The threshold is the boundary between presence and absence, and the glory of God stands upon it.",
      "The chapter then provides a lengthy re-description of the cherubim and wheels, paralleling and expanding on the account in chapter 1 (10:9-17). There is a theological reason for this repetition. In chapter 1, the cherubim and wheels were a vision of the divine throne coming to Ezekiel in exile &mdash; the God who is not bound to a building or a city. In chapter 10, the same throne is seen departing from the building and the city. The God who is free to come is also free to go. The divine presence is a gift, not a guarantee; a grace, not a possession. No institution, no building, no religious system can contain or compel it.",
      "Ezekiel 10:15 and 10:20 contain moments of personal recognition for the prophet: &ldquo;These were the living creatures that I saw under the God of Israel by the Chebar canal; and I knew that they were cherubim.&rdquo; Ezekiel connects what he is seeing now in Jerusalem with what he saw in exile. The throne-chariot that came to him in Babylon is the same one he now sees departing from the temple. This cross-reference matters: if God could come to his exiled people in Babylon, perhaps the departure from the temple does not mean the end of the relationship &mdash; only its painful reorganization on terms God, not the people, will determine.",
      "The movement that began at the threshold in verse 4 accelerates in verse 18: &ldquo;Then the glory of the Lord went out from the threshold of the house and stood over the cherubim.&rdquo; From the threshold the glory mounts to the cherubim. In verse 19 the departure reaches the east gate: &ldquo;And the cherubim lifted up their wings and mounted up from the earth before my eyes as they went out, with the wheels beside them. And they stood at the entrance of the east gate of the house of the Lord, and the glory of the God of Israel was over them.&rdquo; The full departure &mdash; eastward, to the Mount of Olives &mdash; will be narrated in 11:23. But by the end of chapter 10, God&rsquo;s departure from the temple is underway and cannot be stopped.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes in Ezekiel 10",
    reference: "Ezekiel 10:1&ndash;22",
    paragraphs: [
      "The departing glory &mdash; ichabod &mdash; is the central and all-encompassing theme of Ezekiel 10. The word ichabod comes from 1 Samuel 4:21, where the wife of Phinehas names her son &ldquo;Ichabod,&rdquo; meaning &ldquo;the glory has departed,&rdquo; after the ark of God was captured by the Philistines. In Ezekiel 10, the departure is not of the ark but of the glory itself &mdash; the divine presence that the ark was designed to accompany and represent. The theological weight is staggering: if the glory has gone, everything built around the assumption of divine presence has been emptied of its foundation.",
      "The staged, reluctant departure is a theme that has exercised the imagination of interpreters for centuries. God does not vanish instantaneously; he moves from sanctuary to threshold, from threshold to the eastern gate, and will finally ascend to the Mount of Olives in chapter 11. Each pause is a theological statement. God does not delight in withdrawal. The slow departure is both a judgment &mdash; the rebellious city is being abandoned to the consequences of its choices &mdash; and an act of mercy: each stage is a space in which repentance might yet occur. The lingering glory is grace extended to the undeserving.",
      "The cherubim identified with the living creatures of Ezekiel 1 is a key structural theme that ties the vision of chapter 10 back to the vision of chapter 1. The prophet&rsquo;s recognition (10:15, 20) that these are the same creatures he saw by the Chebar canal is not a throwaway detail. It establishes the theological continuity between the God who came to his exiled people and the God who is now departing from the temple. It also establishes the theological truth that God&rsquo;s presence is not a fixed, static thing attached to a building; it is living, mobile, carried by cherubim and wheels, going where God wills.",
      "Burning coals as judgment is a motif drawn from the most archaic images of divine holiness in the Old Testament. Fire from the divine presence is both purifying and consuming. In Isaiah 6, a burning coal from the altar touched the prophet&rsquo;s lips and cleansed his guilt. In Ezekiel 10, coals from between the cherubim are scattered over the city of Jerusalem that has been defiled by the abominations catalogued in chapter 8. What the fire does in Ezekiel 10 is not purification but judgment: the consumption of what has become irredeemably corrupt through persistent and deliberate idolatry.",
      "The omnipresence and omniscience of God, symbolized by the wheels full of eyes, appears again in chapter 10. The eyes on the rims of the wheels (10:12) signify that God sees everything &mdash; every act of idolatry, every abomination, every chamber of images &mdash; before his glory departs. The departure is not a withdrawal into ignorance; it is a withdrawal in full knowledge of everything that has been done. This is perhaps the most sobering implication of the eyes: God does not leave because he does not know what has happened. He leaves because he knows exactly what has happened and has judged accordingly.",
      "The theological significance of the divine freedom &mdash; the fact that God&rsquo;s presence is not owed to any institution or guaranteed by any religious structure &mdash; is perhaps Ezekiel 10&rsquo;s most enduring contribution to biblical theology. The temple was the holiest building in the world, built by the wisest king in Israel&rsquo;s history, dedicated with prayer and sacrifice, filled with the glory of God at its opening. And God leaves it. This is not a failure of the building but a judgment on the people who had turned it into a house of idols (8:10-12) while still expecting divine protection. No religious institution has a lien on the presence of God.",
    ],
  },
  {
    id: "Verse by Verse",
    heading: "Verse by Verse Through Ezekiel 10",
    reference: "Ezekiel 10:1&ndash;22",
    paragraphs: [
      "Verses 1&ndash;3: &ldquo;Then I looked, and behold, on the expanse that was over the heads of the cherubim there appeared above them something like a sapphire, in appearance like a throne. And he said to the man clothed in linen, &lsquo;Go in among the whirling wheels underneath the cherubim. Fill your hands with burning coals from between the cherubim, and scatter them over the city.&rsquo; And he went in before my eyes. Now the cherubim were standing on the south side of the house, when the man went in, and a cloud filled the inner court.&rdquo; The sapphire throne above the cherubim is the same image as 1:26. The setting here is the temple itself. The command to scatter burning coals over Jerusalem is the enactment of judgment &mdash; fire from the holiest place falling on the city that has desecrated it. The cloud that fills the inner court is reminiscent of the cloud at the dedication of the tabernacle and the temple &mdash; but here the cloud accompanies departure, not arrival.",
      "Verses 4&ndash;5: &ldquo;And the glory of the Lord went up from the cherub to the threshold of the house, and the house was filled with the cloud, and the court was filled with the brightness of the glory of the Lord. And the sound of the wings of the cherubim was heard as far as the outer court, like the voice of God Almighty when he speaks.&rdquo; The first movement of the departing glory is from the cherub to the threshold. The house is filled with cloud, the court with brightness &mdash; not as a sign of arrival but as the radiance of the departing God. The sound of the wings of the cherubim is compared to the voice of God Almighty: the departure of the glory is itself a proclamation, an announcement of what is happening.",
      "Verses 6&ndash;8: &ldquo;And when he commanded the man clothed in linen, &lsquo;Take fire from between the whirling wheels, from between the cherubim,&rsquo; he went in and stood beside a wheel. And a cherub stretched out his hand from between the cherubim to the fire that was between the cherubim, and took some of it and put it into the hands of the man clothed in linen, who took it and went out. The cherubim appeared to have the form of a human hand under their wings.&rdquo; The man clothed in linen receives the coals from the hand of a cherub &mdash; a detail that emphasizes the direct divine origin of the judgment. The fire is not from a human altar; it comes from between the cherubim, from the heart of the divine presence.",
      "Verses 9&ndash;14: The wheels are described in language closely parallel to chapter 1, with the addition in verse 12 that &ldquo;their whole body, their rims, their spokes, their wings, and the wheels were full of eyes all around.&rdquo; This expansion of the eye motif to include the entire bodies of the cherubim &mdash; not merely the wheel rims &mdash; amplifies the all-seeing character of the divine throne-chariot. Nothing that has happened in Jerusalem has been unseen. The four faces of the cherubim are also described, with one difference from chapter 1: where chapter 1 lists the ox face, here verse 14 lists the face of the cherub &mdash; the only occurrence of the word &ldquo;cherub&rdquo; as one of the four faces, possibly a self-referential description of the creatures themselves.",
      "Verses 15&ndash;17: &ldquo;And the cherubim mounted up. These were the living creatures that I saw by the Chebar canal. And when the cherubim went, the wheels went beside them. And when the cherubim lifted up their wings to mount up from the earth, the wheels did not turn from beside them. When they stood still, these stood still, and when they mounted up, these mounted up with them, for the spirit of the living creatures was in them.&rdquo; Ezekiel&rsquo;s recognition that these are the living creatures of the Chebar canal vision is the theological hinge of the chapter. The mobile throne that came to him in exile is the same one departing from the temple. The God who is not confined to the temple is also not confined to Jerusalem; he can and will go with his people into exile &mdash; but on his own terms.",
      "Verses 18&ndash;22: &ldquo;Then the glory of the Lord went out from the threshold of the house and stood over the cherubim. And the cherubim lifted up their wings and mounted up from the earth before my eyes as they went out, with the wheels beside them. And they stood at the entrance of the east gate of the house of the Lord, and the glory of the God of Israel was over them above. These were the living creatures that I saw underneath the God of Israel by the Chebar canal, and I knew that they were cherubim.&rdquo; The departure reaches the east gate. This is not yet the final departure &mdash; that comes in 11:23, when the glory moves to the Mount of Olives. But the direction is established: east, away from the city, toward the same Babylon from which Ezekiel had seen the divine throne-chariot approach. The journey of the glory is toward the exiles, not away from them.",
    ],
  },
  {
    id: "Application",
    heading: "Application &mdash; When the Glory Departs",
    reference: "Ezekiel 10:1&ndash;22",
    paragraphs: [
      "Ezekiel 10 confronts one of the most uncomfortable truths in all of Scripture: the possibility that divine presence can be forfeited. The people of Jerusalem assumed that the temple guaranteed God&rsquo;s protection &mdash; that the God who had chosen to dwell there could not and would not leave. Ezekiel 8 had catalogued the abominations committed within and around the temple itself: idol worship, sun worship, women weeping for Tammuz, image chambers with every creeping thing. The temple had become a site of religious performance without genuine fidelity. And God left. The first and most searching application of Ezekiel 10 is this: institutional religion, no matter how ancient or prestigious or architecturally magnificent, does not guarantee the presence of God.",
      "The grief of ichabod moments &mdash; the experience that the glory has departed &mdash; is something every person and community of faith must eventually reckon with. There are seasons in individual lives and in communities and in churches when the sense of God&rsquo;s presence that once seemed vivid and near becomes distant and muted. Ezekiel 10 does not promise that such seasons will not come. It does, however, situate them within the narrative of a God who departs for reasons &mdash; reasons rooted in the accumulated choices of his people &mdash; and who does not depart permanently. The departure of the glory is not the end of the story. Ezekiel himself will prophecy its return in chapters 43-44.",
      "The staged departure as space for repentance is a pastoral reading of Ezekiel 10 with profound contemporary application. The glory moves slowly. From the sanctuary to the threshold: a pause. From the threshold to the east gate: another pause. God does not abandon with a single swift act. Each station of the departing glory is an invitation to repentance, a moment in which the departure might yet be reversed. For communities experiencing the withdrawal of God&rsquo;s felt presence, the question Ezekiel 10 presses is: what is God moving away from, and what is being done about it? The slow departure is mercy extended, not mercy exhausted.",
      "The promise of return that reverses Ezekiel 10 is found in Ezekiel 43-44, where the glory of God returns to the temple from the east &mdash; the same direction from which it departed. The return is even more dramatic than the departure: &ldquo;And behold, the glory of the God of Israel was coming from the east. And the sound of his coming was like the sound of many waters, and the earth shone with his glory&rdquo; (43:2). Christian readers have long seen in this promised return the fulfillment prefigured in Jesus, whose own body he called the temple (John 2:21), and in whom the departed glory returned in human form. The incarnation is the reversal of Ezekiel 10; the Word made flesh is the glory that comes back.",
      "The all-seeing eyes on the wheels and the bodies of the cherubim have a personal application that is worth sitting with. God sees everything. Every act of private idolatry, every chamber of secret images, every religious performance covering interior apostasy &mdash; God sees it. The departure of the glory from the Jerusalem temple was not a departure from ignorance but a departure in full knowledge. Nothing was hidden from the eyes of the One whose chariot-throne is covered in eyes. This is both a terrifying and a hopeful truth: terrifying because nothing can be hidden, hopeful because the God who sees everything still sent his prophet, still spoke his word, still promised a return. Omniscience in God is never merely surveillance; it is the seeing of a God who knows and still pursues.",
    ],
  },
  {
    id: "Videos",
    heading: "Video Teaching on Ezekiel 10",
    reference: "Ezekiel 10:1&ndash;22",
    paragraphs: [
      "These video resources provide deeper engagement with the themes of Ezekiel 10: the identification of the living creatures of chapter 1 as cherubim, the burning coals of judgment scattered over Jerusalem, the devastating and slow departure of the divine glory from the threshold to the east gate, the theological significance of ichabod, and the promise that the departure of the glory points forward to its return in Jesus Christ.",
    ],
  },
];

const videoItems = [
  { videoId: "ZdKcR6wPmQo", title: "Ezekiel 10: The Glory Departs from the Temple" },
  { videoId: "BfMtN4vJbNs", title: "The Cherubim and Wheels - Ezekiel 10 Explained" },
  { videoId: "DhNpY8uBwLk", title: "Ichabod - The Glory Has Departed (Ezekiel 10 Study)" },
  { videoId: "FjQrT2xZfVm", title: "The Departing Glory of God - Ezekiel 10 Commentary" },
];

export default function Ezekiel10GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Prophets Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Ezekiel 10 &mdash; The Glory Departed
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The living creatures are revealed as cherubim, burning coals of judgment rain on Jerusalem, and the divine glory &mdash; slowly, stage by stage, as if reluctant to go &mdash; departs from the threshold of the temple toward the east gate. God is leaving. The most devastating theological event in the Old Testament unfolds in measured, painful steps.
          </p>
        </header>

        <div style={{ background: `${ROSE}18`, border: `1px solid ${ROSE}44`, borderRadius: 10, padding: "1rem 1.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
          <div style={{ color: ROSE, fontSize: "1.4rem", lineHeight: 1, paddingTop: 2 }}>!</div>
          <p style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: TEXT }}>Ichabod &mdash; the glory has departed (1 Samuel 4:21).</strong> Ezekiel 10 records the most devastating theological event in the Old Testament: not the fall of Jerusalem, not the destruction of the temple, but the departure of the glory of the LORD from the temple before either of those events. God left first. The city was destroyed because it was already empty of the presence that had made it holy.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: "2rem" }}>
          {[
            { label: "The Glory Moves", value: "3 stages", sub: "sanctuary, threshold, east gate" },
            { label: "Final Departure", value: "Ezek 11:23", sub: "to the Mount of Olives" },
            { label: "Glory Returns", value: "Ezek 43:2", sub: "from the east, in fullness" },
            { label: "Eyes on Wheels", value: "10:12", sub: "omniscience of God" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.25rem", textAlign: "center" }}>
              <div style={{ color: ACCENT, fontSize: "1.4rem", fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ color: TEXT, fontSize: 13, fontWeight: 700, marginTop: 4 }}>{stat.label}</div>
              <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && activeTab !== "Videos" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Key Themes" && (
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { title: "The Departing Glory &mdash; Ichabod", body: "The staged, reluctant departure of the glory of the Lord from the temple is the theological center of Ezekiel 10. Moving from the inner sanctuary to the threshold to the east gate, the glory lingers before it goes. Each pause is a mercy &mdash; a space in which repentance might have occurred. The departure is not the end of the relationship but its catastrophic disruption through the persistent rebellion catalogued in chapters 8-9." },
              { title: "The Cherubim Identified", body: "In 10:15 and 10:20, Ezekiel recognizes that the living creatures of chapter 1 are the cherubim. This identification ties the Chebar canal vision to the temple departure: the same mobile divine throne that came to the exiles in Babylon is the one departing from Jerusalem. God&rsquo;s presence is not attached to a building; it is carried by living creatures who go where God wills, and come and go as God determines." },
              { title: "Burning Coals as Judgment", body: "The coals scattered over Jerusalem in 10:2 come from between the cherubim &mdash; from the heart of the divine presence. This fire is not human in origin; it is drawn from the holiest space in the vision. The judgment on Jerusalem is not an act of divine distance but of divine nearness; it is fire from the very presence of the Holy One falling on those who have corrupted the place of his dwelling with every form of idolatry." },
              { title: "Omniscience &mdash; Eyes on the Wheels", body: "The expansion of the eye motif in 10:12 &mdash; from eyes on the rim of the wheels (as in chapter 1) to eyes covering the entire bodies of the cherubim and their wheels &mdash; amplifies the all-seeing character of the divine chariot-throne. Nothing in Jerusalem was hidden. Every abomination catalogued in chapter 8, every secret chamber of images, was fully visible to the God whose departure is itself a verdict on what was seen." },
              { title: "Divine Freedom &mdash; Presence as Gift", body: "The deepest theological truth of Ezekiel 10 is that no institution, however ancient and consecrated, has a guaranteed claim on the presence of God. The temple was the holiest site in the world, built by Solomon, dedicated with prayer and sacrifice, filled at its opening with the divine glory. And God leaves it. Divine presence is always grace, never debt. It cannot be coerced, purchased, or mechanically maintained. It is given and, when persistently rejected, withdrawn." },
            ].map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "0.6rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, fontSize: "0.97rem", lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Ezekiel 10 through video teaching on the identification of the living creatures as cherubim, the burning coals of divine judgment scattered over Jerusalem, the devastating and slow departure of the divine glory from the temple threshold to the eastern gate, the theological weight of ichabod, and the promise of the glory&rsquo;s return in Ezekiel 43 and in Jesus Christ as the new temple.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            The Glory That Departed Will Return
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ezekiel 10 is not the last word on the divine glory. In Ezekiel 43, the prophet sees the glory of the Lord return to the temple from the east &mdash; the same direction from which it departed. &ldquo;And behold, the glory of the God of Israel was coming from the east. And the sound of his coming was like the sound of many waters, and the earth shone with his glory.&rdquo; Christian readers see in this promised return the shape of the incarnation: the Word made flesh, in whom the departed glory returned to dwell among his people, and the body of Jesus called &ldquo;the temple&rdquo; (John 2:21). The departure of Ezekiel 10 is real and devastating. But it sets the stage for a return more glorious than anything that preceded it.
          </p>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            Key Cross-References
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { ref: "1 Samuel 4:21", note: "&ldquo;Ichabod &mdash; The glory has departed from Israel, because the ark of God has been captured.&rdquo; The word ichabod gives vocabulary to the experience of Ezekiel 10: the departure of the divine presence from the central symbol of God&rsquo;s covenant relationship with Israel." },
              { ref: "1 Kings 8:10&ndash;11", note: "At the dedication of Solomon&rsquo;s temple, the glory of the Lord filled the house so that the priests could not stand to minister. The same glory that filled the temple at its dedication is the glory that departs in Ezekiel 10." },
              { ref: "Ezekiel 11:23", note: "&ldquo;And the glory of the Lord went up from the midst of the city and stood on the mountain that is on the east side of the city.&rdquo; The final stage of the departure: the Mount of Olives. The same mountain from which Jesus will ascend and to which he promised to return." },
              { ref: "Ezekiel 43:2&ndash;4", note: "The glory of God returns from the east, filling the new temple. The departure of chapter 10 is answered by the return of chapter 43 &mdash; a return even more glorious than the original presence." },
              { ref: "John 2:19&ndash;21", note: "Jesus calls his own body &ldquo;this temple.&rdquo; In the incarnation, the glory that departed from the temple of stone returns in a temple of flesh &mdash; Emmanuel, God dwelling with us, the reversal of Ezekiel 10 in human form." },
            ].map((cr) => (
              <div key={cr.ref} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: "0.85rem", minWidth: 130, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: cr.ref }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: cr.note }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Study Questions for Reflection</h3>
          <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: "1.5rem", margin: 0, fontSize: "0.97rem" }}>
            <li>Where in your own life or community have you experienced what feels like an &ldquo;ichabod&rdquo; moment &mdash; a season when the sense of God&rsquo;s presence has grown distant or withdrawn? How do you understand that in light of Ezekiel 10?</li>
            <li>The departure of the glory from the temple was a response to the abominations catalogued in Ezekiel 8. What is the relationship between persistent, unrepented sin and the withdrawal of God&rsquo;s felt presence?</li>
            <li>God&rsquo;s departure is staged and slow, not instantaneous. How does the lingering of the glory at each station function as an act of mercy? What does that tell you about how God deals with his rebellious people?</li>
            <li>The cherubim of Ezekiel 10 are the same creatures Ezekiel saw at the Chebar canal in chapter 1. What does it mean for you that the God who came to his people in exile is the same God who departs from the temple &mdash; and that both movements are expressions of the same divine freedom?</li>
            <li>How does the departure of the glory in Ezekiel 10 prepare you to understand and appreciate the incarnation &mdash; the Word made flesh as the return of the departed glory?</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
