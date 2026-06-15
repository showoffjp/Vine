"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Covenant Renewed",
  "The Great Purge",
  "Passover and Death",
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
    heading: "Judah's Greatest Reformation",
    reference: "2 Kings 23",
    paragraphs: [
      "2 Kings 23 records the most sweeping religious reformation in the history of Judah, carried out by King Josiah in response to the rediscovery of the Book of the Law during the temple repairs of the previous chapter. Confronted by the words he had never fully heard, Josiah does not retreat into private piety but moves decisively to bring the whole nation back into covenant with the Lord. The chapter is a portrait of Scripture-driven repentance translated into action on a national scale.",
      "The reformation begins with a public reading and a renewed covenant (vv.1&ndash;3). Josiah gathers all the elders of Judah and Jerusalem, goes up to the house of the Lord with priests, prophets, and people &ldquo;both small and great,&rdquo; and reads in their hearing all the words of the Book of the Covenant. Standing by the pillar, the king commits himself to walk after the Lord with all his heart and soul, and the people join in the covenant.",
      "What follows is a systematic and costly purge of idolatry (vv.4&ndash;20). Josiah strips the temple of the vessels made for Baal, Asherah, and the host of heaven; deposes the idolatrous priests; tears down the houses of the cult prostitutes; defiles Topheth so no child can be sacrificed to Molech; and pulls down the high places that had stood since the days of Solomon. He even crosses into Bethel and demolishes Jeroboam&rsquo;s altar, fulfilling a prophecy spoken generations before (1 Kings 13).",
      "Having cleansed the land, Josiah commands a Passover unlike any kept since the days of the judges (vv.21&ndash;23). He also removes the mediums, necromancers, household gods, and idols (vv.24&ndash;25). The historian gives him the highest tribute of any king in the books of Kings: no king before or after him turned to the Lord so wholeheartedly, according to all the Law of Moses.",
      "Yet the chapter refuses to end on an unqualified high note. The Lord&rsquo;s fierce wrath against Judah, kindled by the sins of Manasseh, has not turned away (vv.26&ndash;27). Even this great reformation cannot undo the judgment already set against the nation. Josiah is killed at Megiddo confronting Pharaoh Neco (vv.29&ndash;30), and his successors swiftly return Judah to evil, hastening the exile (vv.31&ndash;37).",
      "Together these movements teach a sober and searching lesson. Josiah shows what wholehearted obedience to God&rsquo;s Word looks like, and his reforms stand as a model of zeal, courage, and corporate repentance. Yet the chapter also reveals the tragic limits of even the best reform when a nation&rsquo;s heart has not truly changed and judgment has already been pronounced. 2 Kings 23 holds up both the beauty of one man&rsquo;s faithfulness and the long shadow of a coming exile that no human reformation could finally avert.",
    ],
  },
  {
    id: "The Covenant Renewed",
    heading: "The Covenant Renewed Before the Lord",
    reference: "2 Kings 23:1&ndash;3",
    paragraphs: [
      "The reformation opens not with demolition but with the Word of God read aloud. &ldquo;Then the king sent, and all the elders of Judah and Jerusalem were gathered to him&rdquo; (v.1). Josiah does not keep the rediscovered Law to himself or confine it to the priests; he summons the whole leadership of the nation, determined that the people he governs will hear for themselves the words that had so shaken him.",
      "The gathering is strikingly inclusive. &ldquo;And the king went up to the house of the Lord, and with him all the men of Judah and all the inhabitants of Jerusalem and the priests and the prophets, all the people, both small and great&rdquo; (v.2). The phrase &ldquo;both small and great&rdquo; sweeps in every rank and station. This is no private royal devotion but a national assembly before God, a deliberate effort to bind the entire people to the covenant together.",
      "At the heart of the scene is the reading of Scripture. &ldquo;And he read in their hearing all the words of the Book of the Covenant that had been found in the house of the Lord&rdquo; (v.2). The reformation is anchored in the text itself. Josiah reads &ldquo;all the words,&rdquo; holding nothing back, letting the full weight of God&rsquo;s commands, blessings, and warnings fall on the ears of the people. Everything that follows flows from this encounter with the written Word.",
      "Then the king takes his stand and makes his pledge. &ldquo;And the king stood by the pillar and made a covenant before the Lord, to walk after the Lord and to keep his commandments and his testimonies and his statutes with all his heart and all his soul, to perform the words of this covenant that were written in this book&rdquo; (v.3). His commitment is comprehensive: commandments, testimonies, and statutes, embraced with all his heart and all his soul. He does not pick and choose, but binds himself to the whole.",
      "The covenant is not the king&rsquo;s alone. &ldquo;And all the people joined in the covenant&rdquo; (v.3). What Josiah models, the people embrace. The renewal moves from the leader to the led, from one heart to the whole assembly. This is corporate repentance in its purest form, a nation standing together to recommit itself to the God of its fathers in light of his Word.",
      "These three verses set the pattern for everything that follows in the chapter. Reformation begins with Scripture heard and taken seriously, leads to wholehearted personal commitment, and overflows into communal renewal. Before a single altar is torn down, the foundation has been laid: the Word read, the king pledged, the people joined. The visible reforms of the rest of the chapter are simply the working out of this covenant, a model of how God&rsquo;s Word, when truly heard, reshapes both the leader and the people he serves.",
    ],
  },
  {
    id: "The Great Purge",
    heading: "The Great Purge of Idolatry",
    reference: "2 Kings 23:4&ndash;20",
    paragraphs: [
      "With the covenant renewed, Josiah turns to action, and the scope of his reform is staggering. He begins at the very center: &ldquo;The king commanded Hilkiah the high priest and the priests of the second order and the keepers of the threshold to bring out of the temple of the Lord all the vessels made for Baal, for Asherah, and for all the host of heaven&rdquo; (v.4). These he burns and carries away, cleansing the house of God of every trace of false worship that had crept into it over generations.",
      "The purge reaches the personnel as well as the objects. Josiah deposes &ldquo;the idolatrous priests whom the kings of Judah had ordained to make offerings in the high places&rdquo; (v.5), those who had burned incense to Baal, the sun, the moon, and the constellations. He tears down &ldquo;the houses of the male cult prostitutes who were in the house of the Lord&rdquo; (v.7). No corner of corruption is left untouched; the reform removes both the system and the servants of idolatry.",
      "Some of the most grievous evils are confronted head-on. Josiah &ldquo;defiled Topheth, which is in the Valley of the Son of Hinnom, that no one might burn his son or his daughter as an offering to Molech&rdquo; (v.10). He removes the horses dedicated to the sun and burns the chariots of the sun (v.11). He pulls down the altars that Ahaz and Manasseh had made, smashing them and throwing their dust into the Kidron (v.12). The reform reaches into the darkest practices of child sacrifice and astral worship.",
      "Even the ancient compromises of Solomon are not spared. Josiah &ldquo;defiled the high places that were east of Jerusalem&hellip; which Solomon the king of Israel had built for Ashtoreth the abomination of the Sidonians, and for Chemosh the abomination of Moab, and for Milcom the abomination of the Ammonites&rdquo; (v.13). What had stood for centuries, tolerated by king after king, is finally torn down. Josiah&rsquo;s zeal honors no idol because of its antiquity.",
      "The reform then crosses the old border into the territory of the former northern kingdom. At Bethel, Josiah tears down the altar and high place that Jeroboam had made, &ldquo;that altar with the high place he pulled down and burned&rdquo; (v.15). He burns human bones upon it to defile it, fulfilling &ldquo;the word of the Lord that the man of God proclaimed&rdquo; long before (v.16) &mdash; the very prophecy cried out against that altar in 1 Kings 13, now coming to pass by name through Josiah.",
      "The cost of this obedience is severe and unflinching. Josiah removes all the shrines of the high places in the cities of Samaria, and &ldquo;he sacrificed all the priests of the high places who were there, on the altars, and burned human bones on them&rdquo; (v.20). The reform is no half-measure or symbolic gesture; it is a sweeping, costly, and thorough obedience that spares neither object, nor priest, nor ancient tradition. Josiah&rsquo;s purge stands as a vivid picture of what it means to put away every rival to the Lord without compromise.",
    ],
  },
  {
    id: "Passover and Death",
    heading: "Josiah's Passover and His Death",
    reference: "2 Kings 23:21&ndash;37",
    paragraphs: [
      "Having cleansed the land, Josiah calls the nation to celebrate. &ldquo;And the king commanded all the people, Keep the Passover to the Lord your God, as it is written in this Book of the Covenant&rdquo; (v.21). Once again the reform is governed by Scripture: the Passover is to be kept not by custom or convenience but exactly &ldquo;as it is written.&rdquo; The feast becomes the joyful counterpart to the purge, a positive act of obedient worship following the removal of idolatry.",
      "The historian marks this Passover as unparalleled. &ldquo;For no such Passover had been kept since the days of the judges who judged Israel, or during all the days of the kings of Israel or of Judah&rdquo; (v.22). Across centuries of national life, no celebration had matched it in faithfulness to the Law. It stands as the high-water mark of covenant worship, a moment when the whole people kept the feast as God had commanded.",
      "Josiah&rsquo;s reform continues to root out hidden evils. &ldquo;Moreover, Josiah put away the mediums and the necromancers and the household gods and the idols and all the abominations that were seen in the land of Judah and in Jerusalem&rdquo; (v.24). Spiritism, divination, and household idolatry are swept away along with the public shrines. The king&rsquo;s zeal reaches into the private and the hidden, leaving no sanctioned place for any rival to the Lord.",
      "Then comes the historian&rsquo;s unmatched tribute: &ldquo;Before him there was no king like him, who turned to the Lord with all his heart and with all his soul and with all his might, according to all the Law of Moses, nor did any like him arise after him&rdquo; (v.25). No king in all of Judah&rsquo;s story is praised so highly. Josiah embodies the great command to love the Lord with heart, soul, and might, and his wholehearted obedience sets him apart from every other ruler.",
      "Yet the chapter turns, with sobering force, to judgment already pronounced. &ldquo;Still the Lord did not turn from the burning of his great wrath, by which his anger was kindled against Judah, because of all the provocations with which Manasseh had provoked him&rdquo; (v.26). The Lord declares he will remove Judah out of his sight as he had removed Israel (v.27). Even this great reform cannot undo the sentence; the nation&rsquo;s heart has not truly changed, and the day of exile draws near.",
      "Josiah&rsquo;s own end is abrupt and tragic. He dies at Megiddo, struck down when he goes out to confront Pharaoh Neco (vv.29&ndash;30). The people make Jehoahaz king, but Neco soon deposes him and sets up Jehoiakim in his place, who taxes the land heavily and does evil in the sight of the Lord (vv.31&ndash;37). The best king Judah ever knew is followed swiftly by rulers who undo his work, revealing the tragic limits of even the most faithful reform when judgment is set and a nation&rsquo;s heart remains hard.",
    ],
  },
];

const videoItems = [
  { videoId: "Jq4tZ7nM2Lp", title: "2 Kings 23 - Josiah and Judah's Greatest Reformation" },
  { videoId: "Kc8vR3Wb6Hn", title: "The Covenant Renewed - Scripture Read to All the People" },
  { videoId: "Lp2xN5Mz9Jr", title: "The Great Purge - Tearing Down the High Places" },
  { videoId: "Nd6wT4Qp1Ky", title: "Josiah's Passover and the Shadow of Judgment" },
];

export default function SecondKings23GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Kings Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            2 Kings 23
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            King Josiah leads Judah&rsquo;s greatest reformation: he reads the rediscovered Book of the Law to all the people and renews the covenant, then systematically destroys the idolatrous high places and altars throughout the land, keeps a Passover unlike any since the days of the judges, and yet cannot turn away the Lord&rsquo;s wrath kindled by Manasseh&rsquo;s sins.
          </p>
        </header>

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

        {currentSection && (
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 2 Kings 23 through visual teaching on Josiah&rsquo;s renewal of the covenant before the Lord, his sweeping purge of idolatry from temple to high place to Bethel, the great Passover unlike any since the days of the judges, and the sobering shadow of judgment that even the best reformation could not lift.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Zeal and Its Limits</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            2 Kings 23 holds two truths together. Josiah shows what wholehearted obedience to God&rsquo;s Word looks like &mdash; covenant renewed, idolatry purged, Passover kept &ldquo;as it is written.&rdquo; Yet the same chapter reveals the tragic limits of even the best reform when judgment has already been set, as the Lord&rsquo;s wrath against Judah for Manasseh&rsquo;s sins still burns and the long shadow of exile draws near.
          </p>
        </div>
      </main>
    </div>
  );
}
