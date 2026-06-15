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
  "Hezekiah's Reforms",
  "Sennacherib's Invasion",
  "The Rabshakeh's Taunt",
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
    heading: "A King Who Trusted, A Kingdom Under Siege",
    reference: "2 Kings 18",
    paragraphs: [
      "2 Kings 18 introduces one of the brightest figures in the long, dark history of Judah&rsquo;s monarchy: Hezekiah, who &ldquo;did what was right in the eyes of the Lord, according to all that David his father had done&rdquo; (v.3). After the catalog of compromise and collapse that fills the surrounding chapters, the narrator pauses on a king who genuinely sought the Lord. Hezekiah removed the high places, broke the sacred pillars, cut down the Asherah, and even destroyed the bronze serpent Moses had made, because Israel had turned it into an idol (vv.1&ndash;8).",
      "The chapter sets Hezekiah&rsquo;s faithfulness against the backdrop of catastrophe. The fall of Samaria, recounted in the previous chapter, is recalled here as a sober warning (vv.9&ndash;12): the northern kingdom has just been swept away into exile for the very idolatries Hezekiah is now uprooting in the south. Judah stands alone, and the reader is meant to feel the weight of that solitude. The same Assyrian empire that devoured Israel now turns its gaze southward.",
      "In Hezekiah&rsquo;s fourteenth year, Sennacherib king of Assyria comes up against all the fortified cities of Judah and takes them (v.13). Faced with an overwhelming empire, Hezekiah at first attempts appeasement, confessing fault and paying an enormous tribute &mdash; stripping even the gold from the temple doors to satisfy Assyria&rsquo;s demands (vv.14&ndash;16). But tribute does not buy peace; it only emboldens the aggressor.",
      "The heart of the chapter is the speech of the Rabshakeh, Sennacherib&rsquo;s chief field commander, delivered at the wall of Jerusalem (vv.17&ndash;37). It is a masterpiece of psychological warfare. Speaking deliberately in Hebrew so the common people on the wall can hear, he mocks Judah&rsquo;s alliance with Egypt as leaning on &ldquo;a broken reed,&rdquo; ridicules trust in the Lord, twists Hezekiah&rsquo;s reforms into evidence against him, and finally blasphemes outright: no god of any nation has delivered its land from the king of Assyria, so why should the Lord deliver Jerusalem?",
      "The chapter ends in tense silence. Hezekiah&rsquo;s officials beg the Rabshakeh to switch to Aramaic, the language of diplomacy, so the populace will not be demoralized, but he only presses louder. The people, under Hezekiah&rsquo;s command, answer not a word. His officials return to the king with their clothes torn in grief, reporting the words of the Assyrian (vv.36&ndash;37). The stage is set for Hezekiah&rsquo;s prayer and Isaiah&rsquo;s prophecy of deliverance in chapter 19.",
      "2 Kings 18 thus holds two truths in tension: real faithfulness does not exempt a believer from real crisis, and the taunts of the world are loudest precisely when God&rsquo;s people are most cornered. Hezekiah&rsquo;s trust will be vindicated, but not before it is tested to the breaking point. The chapter invites the reader to stand on the wall with the people of Jerusalem, hearing the enemy&rsquo;s blasphemy and waiting to see whether the God they trust will answer.",
    ],
  },
  {
    id: "Hezekiah's Reforms",
    heading: "Hezekiah's Reforms and the Bronze Serpent",
    reference: "2 Kings 18:1&ndash;12",
    paragraphs: [
      "Hezekiah was twenty-five years old when he began to reign, and he reigned twenty-nine years in Jerusalem (v.2). The narrator&rsquo;s verdict is unreserved and glowing: &ldquo;And he did what was right in the eyes of the Lord, according to all that David his father had done&rdquo; (v.3). The comparison to David is the highest praise the book of Kings can offer. After a procession of kings measured and found wanting, Hezekiah is set in the line of the ideal king.",
      "His faithfulness was not merely private piety but public reform. &ldquo;He removed the high places and broke the pillars and cut down the Asherah&rdquo; (v.4). The high places had survived even under good kings before him; Hezekiah is the first to tear them down. He attacked the physical apparatus of Judah&rsquo;s syncretism, the sacred pillars and the wooden image of the goddess, refusing to let half-measures stand.",
      "Most striking is what he did next: &ldquo;He broke in pieces the bronze serpent that Moses had made, for until those days the people of Israel had made offerings to it&rdquo; (v.4). The very object God had once commanded Moses to lift up in the wilderness, through which he had healed the people, had become an idol. Hezekiah called it &ldquo;Nehushtan&rdquo; &mdash; merely &ldquo;a piece of bronze.&rdquo; The act is a profound lesson: even a genuine relic of God&rsquo;s past mercy can be corrupted into an idol when the people venerate the gift rather than the Giver.",
      "The summary of his character follows: &ldquo;He trusted in the Lord, the God of Israel, so that there was none like him among all the kings of Judah after him, nor among those who were before him&rdquo; (v.5). Trust &mdash; the very thing the Rabshakeh will later mock &mdash; is named as the defining mark of Hezekiah&rsquo;s reign. &ldquo;For he held fast to the Lord. He did not depart from following him, but kept the commandments that the Lord commanded Moses&rdquo; (v.6).",
      "This trust bore fruit in deliverance and strength. &ldquo;And the Lord was with him; wherever he went out he prospered. He rebelled against the king of Assyria and would not serve him&rdquo; (v.7). Where the northern kings had bought survival with tribute, Hezekiah broke free from Assyrian vassalage. &ldquo;He struck down the Philistines as far as Gaza and its territory&rdquo; (v.8), reasserting Judah&rsquo;s strength against its old enemies on the coastal plain.",
      "The chapter then recalls the fall of Samaria as a deliberate counterpoint (vv.9&ndash;12). In Hezekiah&rsquo;s fourth year, Shalmaneser besieged Samaria, and after three years it was captured and Israel carried into exile &mdash; &ldquo;because they did not obey the voice of the Lord their God but transgressed his covenant&rdquo; (v.12). The recap is a warning placed deliberately beside Hezekiah&rsquo;s faithfulness: the north fell for the very sins the south&rsquo;s good king is now uprooting. The reader is left to ask whether trust and reform will spare Judah from the same fate.",
    ],
  },
  {
    id: "Sennacherib's Invasion",
    heading: "Sennacherib's Invasion and the Cost of Tribute",
    reference: "2 Kings 18:13&ndash;16",
    paragraphs: [
      "&ldquo;In the fourteenth year of King Hezekiah, Sennacherib king of Assyria came up against all the fortified cities of Judah and took them&rdquo; (v.13). The blow falls suddenly and on a vast scale. Assyrian records and the biblical account agree on the devastation: city after fortified city fell to the most formidable military machine of the ancient world. Hezekiah&rsquo;s rebellion against Assyria had provoked the empire&rsquo;s full fury, and Judah found itself stripped of its defenses, with only Jerusalem left standing.",
      "Faced with this overwhelming pressure, Hezekiah&rsquo;s first response is not faith but appeasement. He sends word to the king of Assyria at Lachish, where Sennacherib had established his campaign headquarters, and confesses fault: &ldquo;I have done wrong; withdraw from me. Whatever you impose on me I will bear&rdquo; (v.14). It is a striking moment of weakness from the king the narrator has just praised for his trust. Under the crushing weight of empire, even Hezekiah reaches first for the world&rsquo;s solutions.",
      "The terms are ruinous. Sennacherib demands &ldquo;three hundred talents of silver and thirty talents of gold&rdquo; (v.14) &mdash; an enormous sum, the price of buying off an empire. To meet it, Hezekiah empties the kingdom&rsquo;s reserves: &ldquo;And Hezekiah gave him all the silver that was found in the house of the Lord and in the treasuries of the king&rsquo;s house&rdquo; (v.15). The accumulated wealth of temple and palace is poured out in a desperate bid for relief.",
      "Even that is not enough. The text records a sorrowful detail: &ldquo;At that time Hezekiah stripped the gold from the doors of the temple of the Lord and from the doorposts that Hezekiah king of Judah had overlaid and gave it to the king of Assyria&rdquo; (v.16). The reforming king who had cleansed the temple now disfigures it, peeling the gold from the very doors he had once adorned. The house of the Lord is plundered not by the enemy but by its own king, to pay an enemy who will not be satisfied.",
      "This is the bitter cost of compromise under pressure. The tribute represents a turning to silver and gold rather than to the Lord whom Hezekiah trusted. And the strategy fails utterly. Far from securing peace, the payment only signals weakness and whets Assyria&rsquo;s appetite. Sennacherib takes the treasure and presses his advantage, sending his army against Jerusalem anyway. Appeasement of a ruthless power buys nothing but a brief delay and a demonstration of how much can be extorted.",
      "The episode functions as the dark valley before the chapter&rsquo;s climax. Hezekiah&rsquo;s momentary failure of nerve makes his later recovery of faith all the more powerful. The man who here strips the temple to satisfy Assyria will soon spread an Assyrian letter before the Lord in that same temple and pray. The narrative is honest about the gap between a believer&rsquo;s best convictions and his fearful first instincts under overwhelming threat &mdash; and it sets the stage for grace to meet him there.",
    ],
  },
  {
    id: "The Rabshakeh's Taunt",
    heading: "The Rabshakeh's Blasphemous Taunt",
    reference: "2 Kings 18:17&ndash;37",
    paragraphs: [
      "Having taken the tribute, Sennacherib breaks faith and sends a great army to Jerusalem, led by three high officials &mdash; the Tartan, the Rab-saris, and the Rabshakeh (v.17). They take their stand by the conduit of the upper pool, on the highway to the Washer&rsquo;s Field, the very spot where Isaiah had once met an earlier king of Judah. The Rabshakeh, the chief spokesman, calls for Hezekiah and is met instead by three of the king&rsquo;s officials. What follows is a calculated assault not on the city&rsquo;s walls but on its will to resist.",
      "The Rabshakeh opens by striking at the root: &ldquo;On what do you rest this trust of yours?&rdquo; (v.19). He dismisses Judah&rsquo;s words as &ldquo;mere words&rdquo; and exposes the futility of relying on Egypt: &ldquo;you are trusting now in Egypt, that broken reed of a staff, which will pierce the hand of any man who leans on it&rdquo; (v.21). The image is devastating &mdash; a cracked reed used as a walking stick that splinters and wounds the one who depends on it. Judah&rsquo;s political alliances are exposed as worse than useless.",
      "Then he turns to mock Judah&rsquo;s religious confidence, twisting Hezekiah&rsquo;s reforms into an argument against him: &ldquo;But if you say to me, We trust in the Lord our God, is it not he whose high places and altars Hezekiah has removed?&rdquo; (v.22). The Rabshakeh cynically suggests that Hezekiah, by tearing down the high places, has actually offended the Lord and stripped away the people&rsquo;s avenues of worship. He even claims divine authorization for the invasion: &ldquo;The Lord said to me, Go up against this land and destroy it&rdquo; (v.25).",
      "Hezekiah&rsquo;s officials grow alarmed at the effect on the watching crowd and plead, &ldquo;Please speak to your servants in Aramaic, for we understand it. Do not speak to us in the language of Judah within the hearing of the people who are on the wall&rdquo; (v.26). But this is exactly what the Rabshakeh intends. He answers that his message is precisely for those men on the wall, who face siege and starvation, and he raises his voice and calls out in Hebrew to demoralize the entire city (vv.27&ndash;28).",
      "His final speech is open blasphemy. He warns the people not to let Hezekiah deceive them or make them &ldquo;trust in the Lord&rdquo; (vv.29&ndash;30), promising prosperity if they surrender and come out to him. Then he reaches his climax: &ldquo;Has any of the gods of the nations ever delivered his land out of the hand of the king of Assyria?&rdquo; (v.33). He lists the fallen gods of Hamath, Arpad, and Sepharvaim, and concludes, &ldquo;Who among all the gods of the lands have delivered their lands out of my hand, that the Lord should deliver Jerusalem out of my hand?&rdquo; (v.35). He has set the living God on a level with the idols Assyria has already conquered.",
      "The chapter ends in disciplined silence and grief. &ldquo;But the people were silent and answered him not a word, for the king&rsquo;s command was, Do not answer him&rdquo; (v.36). Hezekiah&rsquo;s officials &mdash; Eliakim, Shebna, and Joah &mdash; return to the king &ldquo;with their clothes torn&rdquo; and report the Rabshakeh&rsquo;s words (v.37). The torn garments signal mourning and dread. The enemy&rsquo;s blasphemy hangs unanswered in the air, and the people wait. The stage is now perfectly set for chapter 19, where Hezekiah will take this very taunt into the house of the Lord, spread it before God, and find that the God who is mocked is also the God who answers.",
    ],
  },
];

const videoItems = [
  { videoId: "Hz9kT4nR2Lq", title: "2 Kings 18 - Hezekiah, A King Who Trusted the Lord" },
  { videoId: "Nb6xV8Wt3Hd", title: "Nehushtan - When God's Gift Becomes an Idol" },
  { videoId: "Sc4kP2Mx7Jp", title: "Sennacherib's Invasion and the Cost of Compromise" },
  { videoId: "Rd7wK5Bq1Hx", title: "The Rabshakeh's Taunt - Blasphemy at the Wall" },
];

export default function SecondKings18GuidePage() {
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
            Kings Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            2 Kings 18
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Hezekiah&rsquo;s reforms and his destruction of the bronze serpent, the recap of Samaria&rsquo;s fall, Sennacherib&rsquo;s overwhelming invasion of Judah, and the Rabshakeh&rsquo;s calculated, blasphemous taunt at the wall of Jerusalem.
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
              Deepen your study of 2 Kings 18 through visual teaching on Hezekiah&rsquo;s faithful reforms, the destruction of Nehushtan, the pressure of Sennacherib&rsquo;s invasion, and the blasphemous taunt of the Rabshakeh at the wall.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Trust Under Fire</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            2 Kings 18 holds two truths together: real faithfulness does not exempt a believer from real crisis, and the world&rsquo;s taunts grow loudest precisely when God&rsquo;s people are most cornered. Hezekiah trusted the Lord like no king before or after him &mdash; and that very trust would be tested to the breaking point at the wall of Jerusalem, where the God who is mocked proves to be the God who answers.
          </p>
        </div>
      </main>
    </div>
  );
}
