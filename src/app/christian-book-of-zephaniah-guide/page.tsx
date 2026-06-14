"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Great Day of the Lord",
  "Against Complacency",
  "Judgment on the Nations",
  "Seek the Lord",
  "The Lord Your God in Your Midst",
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
    id: "The Great Day of the Lord",
    heading: "The Great Day of the Lord",
    reference: "Zephaniah 1:1&ndash;18",
    paragraphs: [
      "The Book of Zephaniah opens with a thunderclap. The prophet, who traces his lineage back four generations to King Hezekiah, ministers in the days of Josiah, king of Judah &mdash; a generation that had drifted far from the Lord even as reform stirred in the land. His message begins not with comfort but with a sweeping, almost cosmic announcement of judgment: &ldquo;I will utterly sweep away everything from the face of the earth, declares the Lord&rdquo; (1:2). The language deliberately echoes the days of Noah, a reversal of creation itself.",
      "At the heart of the whole book stands one towering theme: the Day of the Lord. Zephaniah names it again and again, pressing upon his hearers its nearness and its terror. &ldquo;The great day of the Lord is near, near and hastening fast&rdquo; (1:14). It is not a distant rumor but an approaching storm, a day appointed by God when he will visit the earth to set right what sin has broken and to judge those who have rejected him.",
      "The prophet piles up images to convey the weight of that day. &ldquo;A day of wrath is that day, a day of distress and anguish, a day of ruin and devastation, a day of darkness and gloom, a day of clouds and thick darkness, a day of trumpet blast and battle cry&rdquo; (1:15&ndash;16). The relentless repetition is meant to overwhelm, to strip away every false sense of security and leave the hearer trembling before the holiness of God.",
      "Judah is not exempt. The Lord declares that he will stretch out his hand against Judah and against all the inhabitants of Jerusalem, cutting off the remnant of Baal and the idolatrous priests, those who bow down on the rooftops to the host of the heavens, and those who have turned back from following the Lord, &ldquo;who do not seek the Lord or inquire of him&rdquo; (1:6). The judgment begins at the house of God before it spreads to the nations.",
      "Neither wealth nor status will offer any refuge in that hour. &ldquo;Neither their silver nor their gold shall be able to deliver them on the day of the wrath of the Lord&rdquo; (1:18). The whole earth, Zephaniah warns, shall be consumed in the fire of his jealousy. It is a sobering opening &mdash; yet by setting the darkness so starkly, the prophet prepares the way for the astonishing light that will break through before his book is done.",
    ],
  },
  {
    id: "Against Complacency",
    heading: "Against Complacency",
    reference: "Zephaniah 1:12&ndash;13",
    paragraphs: [
      "Among all the sins Zephaniah names, one receives a particularly memorable and pointed rebuke: spiritual complacency. The Lord declares, &ldquo;I will search Jerusalem with lamps, and I will punish the men who are complacent, those who say in their hearts, The Lord will not do good, nor will he do ill&rdquo; (1:12). These are not loud blasphemers but quiet, settled skeptics who have decided that God is irrelevant to daily life.",
      "The prophet captures their condition in a vivid and unforgettable image: they are &ldquo;those who are complacent, like wine left on its dregs&rdquo; (1:12, NIV). Wine that is never poured from vessel to vessel grows thick and stagnant, settling on its sediment until it loses its flavor and clarity. So too a soul that is never stirred, never challenged, never moved &mdash; it congeals into a dull and lifeless indifference toward God.",
      "The complacent have not necessarily abandoned religion outright; their problem is subtler and more dangerous. They have concluded in their hearts that God neither blesses nor punishes, that he sits idle and detached, that human conduct makes no difference to him. This practical atheism &mdash; affirming God with the lips while denying his active involvement in the heart &mdash; is the very mindset Zephaniah declares the Lord will search out with lamps and expose.",
      "Against such settled ease the prophet announces a fitting reversal. &ldquo;Their goods shall be plundered, and their houses laid waste. Though they build houses, they shall not inhabit them; though they plant vineyards, they shall not drink wine from them&rdquo; (1:13). The very security in which they trusted &mdash; their homes, their vineyards, their comfortable routines &mdash; will be swept away, proving that the God they thought indifferent is anything but.",
      "Zephaniah&rsquo;s warning against complacency speaks across the centuries. It confronts every age that grows comfortable and assumes that God will neither act nor notice. The summons is to be stirred from the dregs, to abandon the lie that the Lord does nothing, and to live as those who know that the living God is watching, working, and very near.",
    ],
  },
  {
    id: "Judgment on the Nations",
    heading: "Judgment on the Nations",
    reference: "Zephaniah 2:4&ndash;3:7",
    paragraphs: [
      "Having pronounced judgment upon Judah and Jerusalem, Zephaniah turns his gaze outward to the surrounding nations. The Day of the Lord is not a private affair for Israel alone; it is a reckoning that encompasses the whole world. One by one the prophet names the peoples around Judah, sweeping the compass from west to east and from south to north, declaring that no nation stands beyond the reach of God&rsquo;s justice.",
      "To the west lie the Philistine cities &mdash; Gaza, Ashkelon, Ashdod, and Ekron &mdash; whose seacoast shall become a land of pastures, with meadows for shepherds and folds for flocks (2:4&ndash;7). To the east stand Moab and Ammon, who taunted and reviled the people of God; they shall become &ldquo;like Sodom and Gomorrah&rdquo; (2:9), a perpetual waste, because of their pride and their boasting against the Lord of hosts.",
      "Far to the south, the prophet declares that the Cushites too shall be slain by the sword of the Lord (2:12). And to the north, the mighty empire of Assyria, with its proud capital Nineveh &mdash; the superpower of the age &mdash; will be made a desolation, dry as the desert. &ldquo;This is the exultant city that lived securely, that said in her heart, I am, and there is no one else&rdquo; (2:15). Her arrogant boast of self-sufficiency will be answered with ruin.",
      "Then, strikingly, the prophet brings the indictment home again. After surveying the nations, he returns to Jerusalem with one of the most searching denunciations in the book: &ldquo;Woe to her who is rebellious and defiled, the oppressing city&rdquo; (3:1). Her officials are roaring lions, her judges evening wolves, her prophets reckless, her priests profaners of the holy. The city that should have led the nations in righteousness has become chief among the guilty.",
      "Yet even in this judgment there is a note of grieved appeal. The Lord recalls how he had hoped his people would learn from his dealings: &ldquo;I said, Surely you will fear me; you will accept correction&rdquo; (3:7). But they rose early and made all their deeds corrupt. The judgment on the nations and on Jerusalem together reveals a God who is righteous in the midst of his people, who &ldquo;does no injustice; every morning he shows forth his justice&rdquo; (3:5), and who will not leave the wrong unaddressed.",
    ],
  },
  {
    id: "Seek the Lord",
    heading: "Seek the Lord",
    reference: "Zephaniah 2:1&ndash;3",
    paragraphs: [
      "In the midst of the gathering darkness, Zephaniah lifts up a clear and gracious summons. Before the judgment falls, there is still time to turn. &ldquo;Gather together, yes, gather, O shameless nation, before the decree takes effect&hellip; before there comes upon you the day of the anger of the Lord&rdquo; (2:1&ndash;2). The very nearness of the day that should provoke fear is also the reason to seek God now, while mercy may yet be found.",
      "The call comes in a memorable threefold form: &ldquo;Seek the Lord, all you humble of the land, who do his just commands; seek righteousness; seek humility&rdquo; (2:3). To seek the Lord is to turn the whole orientation of the heart back toward him. To seek righteousness is to pursue the doing of what is just and right. To seek humility is to lay down the pride and self-sufficiency that the whole book has condemned in nation after nation.",
      "It is significant that this invitation is addressed to &ldquo;the humble of the land&rdquo; &mdash; those who already bend low before God, who do not say in their hearts that the Lord will do nothing. The prophet calls the meek to seek still more earnestly, for in a day of judgment it is the lowly and the contrite, not the proud and the complacent, who find shelter beneath the wings of the Almighty.",
      "Zephaniah holds out a tender, guarded hope: &ldquo;perhaps you may be hidden on the day of the anger of the Lord&rdquo; (2:3). The word &ldquo;perhaps&rdquo; is not uncertainty about God&rsquo;s mercy but reverence before his freedom; it refuses to presume upon grace even while it earnestly seeks it. To be &ldquo;hidden&rdquo; is to be sheltered in the secret place of God&rsquo;s protection when the storm breaks over the world.",
      "This summons stands at the very center of the prophet&rsquo;s message and marks the hinge of the whole book. The God who threatens to sweep everything away is the same God who opens a door of escape and bids his people walk through it. The Day of the Lord need not be a day of wrath for those who, in humility, seek the Lord, seek righteousness, and seek humility before the decree takes effect.",
    ],
  },
  {
    id: "The Lord Your God in Your Midst",
    heading: "The Lord Your God in Your Midst",
    reference: "Zephaniah 3:14&ndash;20",
    paragraphs: [
      "After two and a half chapters of unrelenting judgment, the Book of Zephaniah turns at last to one of the most beautiful passages of joy in all the Old Testament. The tone shifts from threat to celebration, from the trumpet of war to the song of gladness. &ldquo;Sing aloud, O daughter of Zion; shout, O Israel! Rejoice and exult with all your heart, O daughter of Jerusalem!&rdquo; (3:14). The dawn breaks after the long night.",
      "The reason for this sudden joy is the Lord himself drawing near to dwell among his people. &ldquo;The Lord has taken away the judgments against you; he has cleared away your enemies. The King of Israel, the Lord, is in your midst; you shall never again fear evil&rdquo; (3:15). The very presence that brought terror as judge now becomes the source of unshakable security as Savior and King.",
      "Then comes the verse that has comforted believers for ages, a promise breathtaking in its tenderness: &ldquo;The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing&rdquo; (3:17). It is a staggering picture &mdash; the God of all the earth not merely tolerating his people but delighting in them, singing over them as a father sings over a beloved child.",
      "The God who was pictured singing over his people now stills their anxious hearts. He gathers the lame and the outcast, turns their shame into praise, and promises to deal with all their oppressors. &ldquo;At that time I will bring you in, at the time when I gather you together; for I will make you renowned and praised among all the peoples of the earth&rdquo; (3:20). The ones who were scattered and shamed will be honored before all nations.",
      "So the book that began with the threat to sweep everything from the face of the earth ends with God gathering his people home and rejoicing over them with singing. Zephaniah holds together, in a single short prophecy, the severity and the kindness of God &mdash; the dreadful Day of the Lord and the gladsome promise of his abiding presence. For all who seek him in humility, the final word is not wrath but love, and a God who is in their midst.",
    ],
  },
];

const videoItems = [
  { videoId: "oFZknKPNvz8", title: "BibleProject - Overview - Zephaniah" },
  { videoId: "rGvfygCNNb4", title: "The Day of the Lord in Zephaniah Explained" },
  { videoId: "G08uVMjQ6sY", title: "Seek the Lord - A Study of Zephaniah 2" },
  { videoId: "qOJgUvntp5g", title: "He Will Rejoice Over You with Singing - Zephaniah 3" },
];

export default function ChristianBookOfZephaniahGuidePage() {
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
            The Book of Zephaniah
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The great Day of the Lord draws near &mdash; a sweeping announcement of judgment on the complacent and the nations alike, a tender call to seek the Lord, seek righteousness, and seek humility, and the astonishing closing promise that the Lord your God is in your midst, rejoicing over his people with singing.
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
              Deepen your study of Zephaniah through visual teaching on the great Day of the Lord, the rebuke of complacency, the judgment on the nations, and the tender promise that God will rejoice over his people with singing.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>He Will Rejoice Over You with Singing</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Zephaniah holds together the severity and the kindness of God &mdash; the dreadful Day of the Lord and the gladsome promise of his abiding presence. To the complacent who say the Lord will do nothing, it sounds a warning; to the humble who seek the Lord, seek righteousness, and seek humility, it holds out the tender word that the Lord your God is in your midst, a mighty one who will save.
          </p>
        </div>
      </main>
    </div>
  );
}
