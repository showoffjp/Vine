"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Jehoiakim's Rebellion",
  "The First Deportation",
  "Zedekiah and Rebellion",
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
    heading: "Overview of 2 Kings 24",
    reference: "2 Kings 24:1&ndash;20",
    paragraphs: [
      "Second Kings chapter 24 marks the beginning of the end for the kingdom of Judah, the gathering darkness before the final catastrophe of the exile. It is a chapter of vassalage and rebellion, of siege and deportation, in which the long-threatened judgment of God begins to fall in earnest upon a covenant people who would not turn. The Babylonian power, raised up as the instrument of divine chastisement, presses ever more heavily upon Jerusalem, and the narrator makes plain at every turn that what unfolds is no mere accident of imperial politics but the righteous outworking of the word of the Lord.",
      "The chapter opens with the rebellion of Jehoiakim (24:1&ndash;7). Nebuchadnezzar of Babylon comes up and makes Jehoiakim his vassal, but after three years the king of Judah turns and rebels. In answer the Lord sends bands of Chaldeans, Syrians, Moabites, and Ammonites against Judah &ldquo;to destroy it, according to the word of the Lord.&rdquo; The narrator traces this judgment back to the sins of Manasseh and the innocent blood he had shed, sins the Lord would not pardon.",
      "Then comes the first great deportation (24:8&ndash;17). Jehoiachin succeeds his father and reigns only three months before Nebuchadnezzar besieges Jerusalem. The young king surrenders, and he is carried away to Babylon together with the treasures of the temple and the palace, the officials and craftsmen, the mighty men of valor, and ten thousand captives. Only the poorest of the land are left behind. It is a stripping of the nation&rsquo;s strength and a foretaste of the desolation to come.",
      "Finally the chapter sets the stage for the end (24:18&ndash;20). Nebuchadnezzar installs Mattaniah, Jehoiachin&rsquo;s uncle, as king in his place and changes his name to Zedekiah. Like those before him, Zedekiah does what is evil in the sight of the Lord, and at last he too rebels against the king of Babylon. This brief and ominous note prepares the reader for the final siege, the burning of the temple, and the full exile recorded in the chapter that follows.",
      "Throughout, the theology of the narrator is unmistakable. The fall of Judah is not the triumph of Babylon&rsquo;s gods over the God of Israel, nor the blind churning of empires, but the deliberate judgment of the Lord upon a people who had filled up the measure of their sin. &ldquo;Surely this came upon Judah at the command of the Lord, to remove them out of his sight.&rdquo; The covenant warnings of Deuteronomy, long delayed by divine patience, now arrive with terrible exactness.",
      "Read as a whole, 2 Kings 24 is a sober meditation on sin, judgment, and the faithfulness of God to his word, even his word of warning. It shows a kingdom crumbling under the weight of generations of unfaithfulness, kings who learn nothing from the fate of their fathers, and a Lord who is patient but not endlessly so. Yet even in the gathering gloom there is a thread of hope, for the God who removes his people from the land is the same God who will one day restore them, and the exile itself becomes the soil in which a chastened remnant will be prepared.",
    ],
  },
  {
    id: "Jehoiakim's Rebellion",
    heading: "Jehoiakim&rsquo;s Rebellion and the Word of Judgment",
    reference: "2 Kings 24:1&ndash;7",
    paragraphs: [
      "&ldquo;In his days Nebuchadnezzar king of Babylon came up, and Jehoiakim became his servant for three years. Then he turned and rebelled against him&rdquo; (24:1). The rising power of Babylon now presses upon Judah, and Jehoiakim is reduced to a vassal. For three years he submits, but then, trusting perhaps in Egypt or in his own strength, he rebels. It is a fateful miscalculation, the act of a king who reads neither the times nor the warnings of the prophets who spoke in his day.",
      "&ldquo;And the Lord sent against him bands of the Chaldeans and bands of the Syrians and bands of the Moabites and bands of the Ammonites, and sent them against Judah to destroy it&rdquo; (24:2). The raiders who harry the land are not merely the agents of imperial reprisal; they are sent by the Lord himself. The surrounding nations become the rod of God&rsquo;s anger, converging upon Judah from every side to accomplish a purpose set in heaven, &ldquo;according to the word of the Lord that he spoke by his servants the prophets.&rdquo;",
      "&ldquo;Surely this came upon Judah at the command of the Lord, to remove them out of his sight, for the sins of Manasseh, according to all that he had done&rdquo; (24:3). The narrator reaches back a generation to find the root of the disaster. The long reign of Manasseh, steeped in idolatry and violence, had filled up a measure of guilt that the reforms of Josiah could delay but not erase. The judgment now falling is the harvest of seeds sown decades before.",
      "&ldquo;And also for the innocent blood that he had shed. For he filled Jerusalem with innocent blood, and the Lord would not pardon&rdquo; (24:4). The weight falls especially upon the shedding of innocent blood, a crime that cried out for justice. There is a solemn finality in the words &ldquo;the Lord would not pardon,&rdquo; not because God lacks mercy, but because the persistent, unrepentant guilt of the nation had reached the point where judgment could no longer be stayed.",
      "&ldquo;Now the rest of the deeds of Jehoiakim and all that he did, are they not written in the Book of the Chronicles of the Kings of Judah?&rdquo; (24:5). The customary formula closes the account of his reign, but the brevity is itself eloquent. A king who might have led his people in repentance instead led them deeper into ruin, and his story is dispatched in a single sentence, swallowed up in the larger tragedy of the nation&rsquo;s fall.",
      "&ldquo;So Jehoiakim slept with his fathers, and Jehoiachin his son reigned in his place&rdquo; (24:6). The crown passes to a son who will inherit not a stable kingdom but a gathering storm. The succession seems orderly, yet it is the changing of the guard over a sinking ship, for the judgment set in motion by the father will break in full force upon the son within mere months of his accession.",
      "&ldquo;And the king of Egypt did not come again out of his land, for the king of Babylon had taken all that belonged to the king of Egypt from the Brook of Egypt to the river Euphrates&rdquo; (24:7). The shifting of imperial power is complete. Egypt, on whom Judah had leaned, is driven back within its own borders, stripped of its dominion in the region, and Babylon now stands unchallenged as the master of the world. The earthly props on which Judah relied are knocked away one by one, leaving the kingdom exposed to the judgment of God.",
    ],
  },
  {
    id: "The First Deportation",
    heading: "The Siege of Jerusalem and the First Deportation",
    reference: "2 Kings 24:8&ndash;17",
    paragraphs: [
      "&ldquo;Jehoiachin was eighteen years old when he became king, and he reigned three months in Jerusalem... And he did what was evil in the sight of the Lord, according to all that his father had done&rdquo; (24:8&ndash;9). The young king reigns a mere ninety days, yet long enough to walk in the evil ways of his father. The pattern of unfaithfulness runs unbroken through the generations, and the brevity of his reign only underscores how swiftly the judgment now descends upon the house of David.",
      "&ldquo;At that time the servants of Nebuchadnezzar king of Babylon came up to Jerusalem, and the city was besieged&rdquo; (24:10). The threat that had loomed now closes in. Babylon&rsquo;s armies encircle the holy city, and the long-delayed reckoning arrives at the gates of Jerusalem. &ldquo;And Nebuchadnezzar king of Babylon came to the city while his servants were besieging it&rdquo; (24:11), the great king himself coming to oversee the subjugation of Judah.",
      "&ldquo;And Jehoiachin the king of Judah gave himself up to the king of Babylon, himself and his mother and his servants and his officials and his palace officials&rdquo; (24:12). Faced with the overwhelming might of Babylon, the young king surrenders rather than resist to the death. He goes out with his household and his court, and &ldquo;the king of Babylon took him prisoner in the eighth year of his reign,&rdquo; an act that spares the city for a time but seals the captivity of its king and its leading men.",
      "&ldquo;And he carried off all the treasures of the house of the Lord and the treasures of the king&rsquo;s house, and cut in pieces all the vessels of gold... which Solomon king of Israel had made&rdquo; (24:13). The temple is plundered of its sacred wealth. The golden vessels fashioned in the days of Israel&rsquo;s glory are stripped out and broken up, fulfilling the word the Lord had spoken. The looting of the sanctuary is a sign that the glory has departed and the protection of God has been withdrawn.",
      "&ldquo;He carried away all Jerusalem and all the officials and all the mighty men of valor, 10,000 captives, and all the craftsmen and the smiths. None remained, except the poorest people of the land&rdquo; (24:14). The deportation is a deliberate stripping of the nation&rsquo;s strength. Its leaders, its warriors, its skilled artisans, all are carried off, leaving behind only the poor. A kingdom is hollowed out, its capacity to resist and even to rebuild deliberately broken.",
      "&ldquo;And he carried away Jehoiachin to Babylon. The king&rsquo;s mother, the king&rsquo;s wives, his officials, and the chief men of the land he took into captivity from Jerusalem to Babylon&rdquo; (24:15). The royal house itself is led away into exile. The king, the queen mother, the wives, and the nobility are marched to a foreign land, a humiliating reversal for the dynasty of David, yet a preservation as well, for the line is carried away rather than destroyed.",
      "&ldquo;And the king of Babylon brought captive to Babylon all the men of valor, 7,000, and the craftsmen and the metal workers, 1,000, all of them strong and fit for war&rdquo; (24:16). This first great deportation, around 597 BC, carried away the flower of Judah, and among the exiles was the young priest Ezekiel, who would prophesy by the rivers of Babylon. &ldquo;And the king of Babylon made Mattaniah, Jehoiachin&rsquo;s uncle, king in his place, and changed his name to Zedekiah&rdquo; (24:17), setting a puppet on a tottering throne.",
    ],
  },
  {
    id: "Zedekiah and Rebellion",
    heading: "Zedekiah and the Final Rebellion",
    reference: "2 Kings 24:18&ndash;20",
    paragraphs: [
      "&ldquo;Zedekiah was twenty-one years old when he became king, and he reigned eleven years in Jerusalem&rdquo; (24:18). The last king of Judah ascends a throne that is no longer free, a vassal raised up by Babylon and renamed by his overlord. His eleven years are a borrowed time, a final reprieve granted to a city already under sentence, and the story of his reign moves inexorably toward the catastrophe that closes the book.",
      "&ldquo;And he did what was evil in the sight of the Lord, according to all that Jehoiakim had done&rdquo; (24:19). The dreary refrain sounds once more. Zedekiah learns nothing from the deportation he has witnessed, nothing from the stripping of the temple and the exile of his kinsman. He walks the same path of evil that brought ruin upon his predecessors, proving that the heart of the nation remains unchanged even as judgment closes in around it.",
      "&ldquo;For because of the anger of the Lord it came to the point in Jerusalem and Judah that he cast them out from his presence&rdquo; (24:20). Here the narrator lifts the veil on the true cause of all that is happening. Behind the marching armies and the failing kings stands the anger of a holy God, who at last casts his people out from his presence. The exile is the dreadful consummation of the covenant curses, the removal of an unfaithful people from the land of promise.",
      "&ldquo;And Zedekiah rebelled against the king of Babylon&rdquo; (24:20). With these few words the chapter ends on a note of foreboding. The rebellion that will trigger the final siege, the burning of the temple, and the full destruction of Jerusalem is set in motion. What seems a bid for freedom is in truth the spark that ignites the conflagration, the final folly of a doomed kingdom.",
      "The brevity of this closing section is itself a kind of judgment. Where once the chronicles lingered over the deeds of kings, now the reign of the last king of Judah is dispatched in three terse verses, hurried along toward the inevitable end. There is no room for the leisurely recounting of accomplishments, for there are none worth telling; there is only the swift, grim march toward the abyss.",
      "Yet the narrator&rsquo;s theology shines clearly through the gloom. The exile is no accident of geopolitics, no triumph of Babylon&rsquo;s gods over the Lord, but the righteous judgment of God upon a covenant people who would not turn, even after every warning and every delay of mercy. The God who had borne with them for generations now acts in faithfulness to his own word, fulfilling the warnings spoken long before by Moses and the prophets.",
      "And so the chapter leaves the reader on the brink of the final catastrophe, with the temple still standing but its doom already sealed, and a rebel king upon a tottering throne. It is a solemn warning to every generation that the patience of God, though long, is not without limit, and that persistent, unrepentant sin will at last meet the judgment it has so long deserved. Yet even here, in the casting out, there lies hidden the seed of return, for the God of judgment is also the God of covenant, who will not abandon his people forever.",
    ],
  },
];

const videoItems = [
  { videoId: "Lc4pVx7Hq2N", title: "BibleProject - 2 Kings and the Fall of Judah" },
  { videoId: "Md8cTw3Ks6R", title: "The Sins of Manasseh and the Judgment on Judah" },
  { videoId: "Nf2gJz9Cm4D", title: "The First Deportation - Jerusalem Carried to Babylon" },
  { videoId: "Pq6bBx1Ln8M", title: "Zedekiah and the Road to Exile" },
];

export default function SecondKings24GuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Second Book of Kings, Chapter 24
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The beginning of the end for Judah. Nebuchadnezzar of Babylon makes Jehoiakim his vassal, but Jehoiakim rebels, and the Lord sends raiders against Judah &ldquo;according to the word of the Lord&rdquo; because of the sins of Manasseh. Jehoiachin reigns three months before the first great deportation strips the city of its treasures, its leaders, and ten thousand captives, and Zedekiah is installed only to do evil and rebel, setting the stage for the final destruction.
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
              Deepen your study of 2 Kings 24 through visual teaching on the fall of Judah and the rise of Babylon, the sins of Manasseh that sealed the nation&rsquo;s judgment, the rebellion of Jehoiakim, the first great deportation that carried the treasures, the leaders, and ten thousand captives to Babylon, and the brief and ominous reign of Zedekiah that set the stage for the final exile.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Righteous Judgment of God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Kings 24 shows a kingdom crumbling under the weight of generations of unfaithfulness, kings who learn nothing from the fate of their fathers, and a Lord who is patient but not endlessly so. The narrator&rsquo;s theology is unmistakable: the exile is no accident of geopolitics but the righteous judgment of God on a covenant people who would not turn, even after every warning. Yet even in the casting out lies hidden the seed of return, for the God of judgment is also the God of covenant.
          </p>
        </div>
      </main>
    </div>
  );
}
