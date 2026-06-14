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
  "Solomons Temple and Glory",
  "The Divided Kingdom",
  "The Faithful Kings of Judah",
  "Revival and Reform",
  "The Fall and the Hope",
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
    id: "Solomons Temple and Glory",
    heading: "Solomon&rsquo;s Temple and Glory",
    reference: "2 Chronicles 1&ndash;9",
    paragraphs: [
      "The Book of 2 Chronicles opens where 1 Chronicles left off, with Solomon established on the throne and the great work of his father David ready to be fulfilled. At Gibeon, God appears to the young king and offers him whatever he will ask. Solomon asks not for riches or honor or long life, but for wisdom and knowledge to govern God&rsquo;s great people. Because his heart was right, God grants him wisdom &mdash; and riches and honor besides, &ldquo;such as none of the kings had who were before you&rdquo; (1:12).",
      "The crowning achievement of Solomon&rsquo;s reign is the building of the temple, the permanent house for the name of the Lord that David had so longed to see and had prepared for with such care. Solomon makes a treaty with Hiram of Tyre for cedar and skilled craftsmen, conscripts a vast workforce, and begins to build on Mount Moriah, &ldquo;where the Lord had appeared to David his father&rdquo; (3:1). For seven years the work proceeds, and the chronicler dwells with delight on the gold-overlaid sanctuary, the great cherubim, the bronze altar, the pillars, and the sea of cast metal.",
      "When the temple is finished, Solomon gathers all Israel to bring up the ark of the covenant into the Most Holy Place. As the priests come out, the singers and trumpeters join as one to praise the Lord, &ldquo;For he is good, for his steadfast love endures forever&rdquo; (5:13). And in that moment of united worship the house is filled with a cloud, &ldquo;so that the priests could not stand to minister&hellip; for the glory of the Lord filled the house of God&rdquo; (5:13&ndash;14). The visible glory of God descends to dwell among his people.",
      "Solomon then offers a magnificent prayer of dedication, kneeling before the whole assembly with hands spread toward heaven. He marvels that God, whom heaven and the highest heaven cannot contain, would dwell with man on earth, and he pleads that the Lord would hear every prayer offered toward this house &mdash; prayers for forgiveness, for rain, for deliverance, and above all for a sinful people who repent and turn back. When he finishes, fire comes down from heaven and consumes the offerings, and the glory of the Lord fills the temple again, and the people bow with their faces to the ground in worship.",
      "It is here that God gives one of the most cherished promises of Scripture: &ldquo;If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land&rdquo; (7:14). Solomon&rsquo;s reign rises to its height in wealth, wisdom, and renown &mdash; the queen of Sheba comes and is left breathless &mdash; yet the chronicler has already set before his readers the true measure of the kingdom: a temple filled with the glory of God, and a people called to humble, repentant prayer.",
    ],
  },
  {
    id: "The Divided Kingdom",
    heading: "The Divided Kingdom",
    reference: "2 Chronicles 10&ndash;12",
    paragraphs: [
      "After Solomon&rsquo;s death, the kingdom that had stood united under David and Solomon is torn in two. His son Rehoboam goes to Shechem to be made king, and the people ask him to lighten the heavy burden of labor and taxation that Solomon had laid upon them. Rejecting the counsel of the old men and following the rash advice of his young companions, Rehoboam answers harshly: &ldquo;My father made your yoke heavy, but I will add to it&rdquo; (10:14). The ten northern tribes revolt, and only Judah and Benjamin remain loyal to the house of David.",
      "From this point the chronicler makes a decisive choice that shapes the whole rest of the book. He follows almost exclusively the kings of Judah &mdash; the southern kingdom, the line of David, the place of the temple in Jerusalem. The northern kingdom of Israel, with its rival worship and its succession of dynasties founded on bloodshed, fades from view except where its story touches Judah. The chronicler&rsquo;s concern is the Davidic line and the true worship of God, for it is there that the covenant promises rest.",
      "This focus carries deep meaning for the book&rsquo;s first readers. The exiles who returned from Babylon were the heirs of Judah, gathered again around Jerusalem and the rebuilt temple. By tracing the kings of Judah, the chronicler shows them their own roots and reminds them that the promise of an everlasting throne, made to David, still belonged to them despite all that had befallen the nation.",
      "Rehoboam&rsquo;s own reign sets the pattern that will recur again and again through the book. When he and the people are strong, they grow proud and abandon the law of the Lord, and God sends Shishak king of Egypt against Jerusalem in judgment. But when the leaders humble themselves and confess, &ldquo;The Lord is righteous&rdquo; (12:6), God relents and grants some deliverance. The chronicler draws the lesson plainly: faithfulness brings blessing, and pride and unfaithfulness bring discipline.",
      "Through the reigns that follow, this rhythm of seeking the Lord and forsaking him plays out king by king. The throne of David endures through generations of mingled faithfulness and failure, held secure not by the worthiness of its kings but by the steadfast promise of God. The divided kingdom is a story of decline, yet running beneath it is the unbroken thread of God&rsquo;s commitment to the house of David, which no failure could finally sever.",
    ],
  },
  {
    id: "The Faithful Kings of Judah",
    heading: "The Faithful Kings of Judah",
    reference: "2 Chronicles 14&ndash;20",
    paragraphs: [
      "Amid the long line of Judah&rsquo;s kings, the chronicler shines a special light on those who sought the Lord with a whole heart. These faithful kings become living illustrations of the book&rsquo;s great theme: that those who seek God find him, and those who rely on him are upheld. Their reigns are marked by reform, by trust in the Lord against overwhelming odds, and by the recovery of true worship.",
      "Asa removes the foreign altars and high places, commands Judah to seek the Lord, and when an immense Ethiopian army comes against him, he cries out a prayer that has echoed through the ages: &ldquo;O Lord, there is none like you to help, between the mighty and the weak. Help us, O Lord our God, for we rely on you&rdquo; (14:11). God strikes down the vast host before Asa, and the prophet Azariah meets him with the heart of the book&rsquo;s message: &ldquo;The Lord is with you while you are with him. If you seek him, he will be found by you, but if you forsake him, he will forsake you&rdquo; (15:2).",
      "Jehoshaphat, Asa&rsquo;s son, walks in the good ways of his father. He sends officials and Levites throughout the land to teach the law of the Lord to the people, and his kingdom is established and at peace. When a great coalition of Moab and Ammon marches against him, Jehoshaphat proclaims a fast, gathers all Judah, and prays, &ldquo;We do not know what to do, but our eyes are on you&rdquo; (20:12). God answers through a Levite: &ldquo;The battle is not yours but God&rsquo;s&rdquo; (20:15). Judah goes out singing praises, and the Lord sets ambushes against their enemies, who destroy one another. They return to Jerusalem with joy.",
      "These narratives are told to encourage a small and vulnerable people. The returned exiles faced enemies and hardships of their own, with little strength of their own to meet them. In the example of Asa and Jehoshaphat the chronicler presses home a single conviction: that the God who delivered Judah when they relied on him is the same God who can be sought and found by his people still, and that no enemy is too great for the Lord to overcome.",
      "Yet the chronicler is honest about the cost of unfaithfulness even in good kings. Asa, late in life, relies on the king of Syria rather than on the Lord, and is rebuked for it; when diseased in his feet, he seeks physicians but not the Lord. Jehoshaphat unwisely allies himself with wicked Ahab of Israel and is warned by a prophet. The lesson holds throughout: blessing follows trust in God, and trouble follows reliance on human strength, even for those whose hearts are largely true.",
    ],
  },
  {
    id: "Revival and Reform",
    heading: "Revival and Reform",
    reference: "2 Chronicles 29&ndash;35",
    paragraphs: [
      "Some of the brightest chapters of 2 Chronicles tell of the great revivals under Judah&rsquo;s reforming kings, when worship long neglected was gloriously restored. After the wicked reign of Ahaz, who had shut the doors of the temple and led the people into idolatry, his son Hezekiah comes to the throne and, in the very first month of his reign, throws open the doors of the house of the Lord and summons the priests and Levites to consecrate themselves and cleanse the temple.",
      "Hezekiah restores the worship of God with overflowing joy. The Levites take their places with instruments of music, the burnt offering begins, and &ldquo;the song to the Lord began also&hellip; and all this continued until the burnt offering was finished&rdquo; (29:27&ndash;28). Then Hezekiah invites all Israel, north and south, to come to Jerusalem to keep the Passover, sending couriers throughout the land. Though some mock the messengers, many humble themselves and come, and Judah keeps the Passover and the Feast of Unleavened Bread with such gladness that &ldquo;there was great joy in Jerusalem, for since the time of Solomon&hellip; there had been nothing like this&rdquo; (30:26).",
      "Hezekiah&rsquo;s reforms are matched, generations later, by the great revival under Josiah, who comes to the throne as a boy and seeks the God of David his father while still young. In the course of repairing the temple, the Book of the Law is found and read before the king. Stricken with grief at how far the nation has strayed from God&rsquo;s word, Josiah tears his clothes, leads the people in renewing the covenant, and sweeps the land clean of idols.",
      "Josiah then keeps a Passover so great that the chronicler declares, &ldquo;No Passover like it had been kept in Israel since the days of Samuel the prophet&rdquo; (35:18). The Levites are stationed by their divisions, the singers are in their places, and the whole service of the Lord is carried out exactly according to the command of David and Solomon. These revivals show the chronicler&rsquo;s deepest hope: that a people who return to God&rsquo;s word and restore his worship will know again the joy of his presence.",
      "Yet the chronicler does not pretend that revival under a single king could heal the nation forever. Hezekiah&rsquo;s reforms gave way to the wickedness of Manasseh; Josiah&rsquo;s zeal could not turn aside the judgment already pronounced. The revivals are real and precious, true seasons of grace, but they also point beyond themselves to a deeper renewal that no earthly king could fully accomplish &mdash; a longing that the whole story leaves unsatisfied, awaiting a greater Son of David still to come.",
    ],
  },
  {
    id: "The Fall and the Hope",
    heading: "The Fall and the Hope",
    reference: "2 Chronicles 36",
    paragraphs: [
      "The final chapter of 2 Chronicles brings the long story of the kings of Judah to its sorrowful end. After Josiah&rsquo;s death the throne passes quickly through a succession of weak and wicked kings, each doing evil in the sight of the Lord. The nation has gone too far. &ldquo;The Lord, the God of their fathers, sent persistently to them by his messengers&hellip; but they kept mocking the messengers of God, despising his words and scoffing at his prophets, until the wrath of the Lord rose against his people, till there was no remedy&rdquo; (36:15&ndash;16).",
      "And so the judgment so long delayed at last falls. Nebuchadnezzar king of Babylon comes against Jerusalem, burns the house of God, breaks down the wall of the city, and carries away to Babylon all who had survived the sword. The temple that had once been filled with the glory of God is plundered and destroyed; its sacred vessels are taken away; the city of David lies in ruins. The chronicler notes that the land kept its sabbaths during the seventy years of desolation, as the word of the Lord through Jeremiah had foretold.",
      "It would be a bleak place to end &mdash; the temple in ashes, the people in exile, the line of David seemingly extinguished. Yet the chronicler does not leave his readers there. With deliberate purpose he refuses to close the book on a note of despair, for he writes to a people whom God has already begun to restore, and he wants them to see that the story is not over.",
      "The very last words of the book turn from darkness to dawn. After seventy years the Lord stirs up the spirit of Cyrus king of Persia, and a decree goes out across his whole kingdom: &ldquo;The Lord, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem&hellip; Whoever is among you of all his people, may the Lord his God be with him. Let him go up&rdquo; (36:23). The book ends not with the slamming of a prison door but with the opening of the way home.",
      "This closing decree is the chronicler&rsquo;s final word of hope to a battered remnant. The God who keeps covenant had not abandoned his people; the exile was not the end of the story. The same faithfulness that ran from Adam through David, the same promise of an everlasting throne, still held firm. And for those who read with the eyes of the New Testament, the unfinished hope of 2 Chronicles &mdash; a people called to go up and a house yet to be built &mdash; finds its true and final fulfillment in Jesus Christ, the Son of David, in whom God comes at last to dwell with his people forever.",
    ],
  },
];

const videoItems = [
  { videoId: "d0A6Uchb1F8", title: "BibleProject - Overview - 2 Chronicles" },
  { videoId: "rGSf7d4XAh0", title: "Solomon Builds the Temple and the Glory of God Fills It" },
  { videoId: "qY8Dw3wXM3A", title: "The Reforming Kings of Judah - 2 Chronicles Explained" },
  { videoId: "MkETkBv2nSY", title: "The Fall of Jerusalem and the Hope of Return" },
];

export default function ChristianBookOf2ChroniclesGuidePage() {
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
            The Book of 2 Chronicles
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The story of Judah from glory to exile and hope &mdash; Solomon building and dedicating the temple as the glory of God descends, the dividing of the kingdom, the faithful reformer kings who sought the Lord, the great revivals and Passovers, and the fall of Jerusalem closing with the decree of Cyrus that opened the way home.
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
              Deepen your study of 2 Chronicles through visual teaching on Solomon&rsquo;s temple and the glory of God, the kings of Judah, the great revivals and reforms, and the fall of Jerusalem with its closing hope of return.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>If My People Will Humble Themselves</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            2 Chronicles traces Judah from the glory of the temple to the ashes of exile, yet it never loses sight of God&rsquo;s steadfast love. Its enduring call still sounds: &ldquo;If my people who are called by my name humble themselves, and pray and seek my face&hellip; then I will hear from heaven and will forgive their sin and heal their land.&rdquo; The book ends not in despair but with the way home flung open &mdash; a hope fulfilled at last in Jesus Christ, the Son of David.
          </p>
        </div>
      </main>
    </div>
  );
}
