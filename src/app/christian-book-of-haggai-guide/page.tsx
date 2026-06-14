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
  "Consider Your Ways",
  "Rebuilding the Temple",
  "The Greater Glory",
  "Blessing from This Day",
  "The Signet Ring",
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
    id: "Consider Your Ways",
    heading: "Consider Your Ways",
    reference: "Haggai 1:1&ndash;11",
    paragraphs: [
      "The Book of Haggai opens with a precise date: the second year of Darius the king, in the sixth month, on the first day of the month (1:1). The exiles have returned from Babylon some eighteen years earlier, full of hope and zeal to rebuild the house of the Lord. But the work on the temple, begun with such enthusiasm, had long since stalled. Opposition, hardship, and the slow erosion of zeal had left the foundation lying bare and the project abandoned. Into this spiritual lethargy the word of the Lord comes through Haggai the prophet to Zerubbabel the governor and Joshua the high priest.",
      "The people had a ready excuse. &ldquo;These people say the time has not yet come to rebuild the house of the Lord&rdquo; (1:2). It was not the right season, they claimed; circumstances were not favorable; there were more pressing concerns. But the Lord exposes the hollowness of this reasoning with a piercing question: &ldquo;Is it a time for you yourselves to dwell in your paneled houses, while this house lies in ruins?&rdquo; (1:4). They had found time and resources to build comfortable, even luxurious homes for themselves, while God&rsquo;s house lay neglected.",
      "Twice in this short chapter the Lord issues a summons that becomes the keynote of Haggai&rsquo;s ministry: &ldquo;Consider your ways&rdquo; (1:5, 1:7). It is a call to honest self-examination, to stop and reckon with the true state of their priorities. The Hebrew phrase literally means to set the heart upon one&rsquo;s ways &mdash; to think carefully about the direction of one&rsquo;s life and where it has led.",
      "And where had their misplaced priorities led? To a frustrating emptiness. &ldquo;You have sown much, and harvested little. You eat, but you never have enough; you drink, but you never have your fill. You clothe yourselves, but no one is warm; and he who earns wages does so to put them into a bag with holes&rdquo; (1:6). Their relentless self-focus had not even produced the security they sought. God had withheld his blessing; the heavens had withheld the dew and the earth its produce, for they had run each to his own house while the house of God lay waste (1:9&ndash;11).",
      "The diagnosis is searching and timeless. The people had inverted the proper order of things, placing their own comfort above the worship and honor of God, and discovering that a life built on such an inversion never satisfies. Haggai&rsquo;s &ldquo;consider your ways&rdquo; calls every generation to examine whether the things we pour our energy into have crowded out the one thing that truly matters.",
      "Yet this rebuke is not given to crush but to redirect. The God who withholds blessing when his people stray is the God who longs to bless them when they return. The opening chapter sets the stage not for despair but for a turning &mdash; a summons to lift their eyes from their paneled houses to the ruined house of God, and to take up again the work they had laid down.",
    ],
  },
  {
    id: "Rebuilding the Temple",
    heading: "Rebuilding the Temple",
    reference: "Haggai 1:12&ndash;15",
    paragraphs: [
      "What follows Haggai&rsquo;s rebuke is one of the most encouraging responses to a prophetic word in all of Scripture. There is no argument, no delay, no excuse. &ldquo;Then Zerubbabel the son of Shealtiel, and Joshua the son of Jehozadak, the high priest, with all the remnant of the people, obeyed the voice of the Lord their God, and the words of Haggai the prophet&rdquo; (1:12). Leaders and people alike heard the word and bowed before it together.",
      "Their response was not merely outward compliance but inward reverence: &ldquo;the people feared the Lord&rdquo; (1:12). The summons to consider their ways had done its work; it had awakened a holy fear, a fresh recognition of God&rsquo;s claim upon their lives. This is the heart of true repentance &mdash; not grudging activity, but a renewed reverence that flows naturally into renewed obedience.",
      "To this responsive people the Lord gives a word of breathtaking grace. &ldquo;Then Haggai, the messenger of the Lord, spoke to the people with the Lord&rsquo;s message, &lsquo;I am with you, declares the Lord&rsquo;&rdquo; (1:13). The same God who had withheld blessing now pledges his very presence. There is no condemnation lingering over those who turn back to him; instead there is the assurance that carries the whole rest of the book: I am with you.",
      "With that assurance, the Lord himself supplies the energy for the work. &ldquo;And the Lord stirred up the spirit of Zerubbabel&hellip; and the spirit of Joshua&hellip; and the spirit of all the remnant of the people. And they came and worked on the house of the Lord of hosts, their God&rdquo; (1:14). The obedience that began as their decision is revealed to be God&rsquo;s own gracious work within them, stirring their hearts to take up the tools and rebuild.",
      "The chapter closes with another careful date: &ldquo;on the twenty-fourth day of the month, in the sixth month&rdquo; (1:15). From the first day, when the word came, to the twenty-fourth day, when the work began, only twenty-three days had passed. The transformation from apathy to action was swift and decisive once the people set their hearts to obey. The ruins that had lain untouched for years would now begin to rise again.",
      "This brief account is a portrait of revival. A faithful word is spoken; a people humbly receive it; God promises his presence and stirs their hearts; and the work long abandoned is taken up with fresh zeal. It teaches that the path out of spiritual stagnation begins not with better circumstances but with simple, reverent obedience to the voice of the Lord.",
    ],
  },
  {
    id: "The Greater Glory",
    heading: "The Greater Glory",
    reference: "Haggai 2:1&ndash;9",
    paragraphs: [
      "Not long after the work resumed, a new discouragement set in. Among the people were some old enough to remember Solomon&rsquo;s temple in its former splendor, destroyed seventy years before. As the new foundation took shape, the contrast was painful. The Lord himself voices their unspoken grief: &ldquo;Who is left among you who saw this house in its former glory? How do you see it now? Is it not as nothing in your eyes?&rdquo; (2:3). Compared with the glory of the past, this new house seemed small and poor.",
      "To this fresh wave of discouragement the Lord speaks a threefold word of courage, addressed in turn to Zerubbabel, to Joshua, and to all the people of the land: &ldquo;Be strong&hellip; be strong&hellip; be strong&hellip; and work, for I am with you, declares the Lord of hosts&rdquo; (2:4). The remedy for their dismay is not a grander building but the renewed promise of God&rsquo;s presence. The same assurance given when the work began is repeated now to keep it going.",
      "The Lord roots this promise in the covenant of old: &ldquo;according to the covenant that I made with you when you came out of Egypt. My Spirit remains in your midst. Fear not&rdquo; (2:5). The God who had dwelt among them at Sinai and in the wilderness had not changed; his presence, not the splendor of the structure, was the true glory of any temple. They were to work not in their own strength but in the confidence of the abiding Spirit of God.",
      "Then comes one of the great prophetic promises of the book. &ldquo;Yet once more, in a little while, I will shake the heavens and the earth and the sea and the dry land. And I will shake all nations, so that the treasures of all nations shall come in, and I will fill this house with glory, says the Lord of hosts&rdquo; (2:6&ndash;7). The modest house they were building would become the focal point of a cosmic work of God, drawing in the wealth and the worship of the nations.",
      "The promise rises to its climax in a verse that has stirred the hope of believers ever since: &ldquo;The latter glory of this house shall be greater than the former, says the Lord of hosts. And in this place I will give peace, declares the Lord of hosts&rdquo; (2:9). The new temple, however humble in appearance, would surpass even Solomon&rsquo;s in glory &mdash; a promise fulfilled supremely when the Lord himself, the desire of the nations, would one day walk in its courts.",
      "Haggai&rsquo;s message to the discouraged is that God measures glory differently than we do. What looks small and unimpressive in human eyes may be the very place where God pours out a glory greater than anything that came before. The people were to lift their gaze from the modest scale of their work to the vast purpose of the God who was with them, and to take heart and build.",
    ],
  },
  {
    id: "Blessing from This Day",
    heading: "Blessing from This Day",
    reference: "Haggai 2:10&ndash;19",
    paragraphs: [
      "Two months after the message of the greater glory, the word of the Lord comes again, this time framed as a question of priestly law. Haggai asks the priests two rulings about holiness and defilement: if consecrated meat touches ordinary food, does the holiness spread? No. But if someone unclean by contact with a dead body touches food, does the uncleanness spread? Yes (2:11&ndash;13). The lesson is sobering: holiness is not contagious, but defilement is.",
      "The Lord applies this principle directly to the people: &ldquo;So is it with this people, and with this nation before me, declares the Lord, and so with every work of their hands. And what they offer there is unclean&rdquo; (2:14). While the temple lay in ruins and their priorities were disordered, even their religious offerings were tainted. Their neglect of God&rsquo;s house had spread its defilement through everything they did. No amount of activity could make an impure life pure.",
      "Then the Lord calls them to reflect on their experience during the years of disobedience. &ldquo;Consider from this day onward. Before stone was placed upon stone in the temple of the Lord&hellip; the heaps of grain were but half, the wine vat but twenty&rdquo; (2:15&ndash;16). He had struck their labors with blight, mildew, and hail, and yet, he says with grief, &ldquo;you did not turn to me&rdquo; (2:17). Their hardship had been a summons they failed to heed.",
      "But now everything changes, and the change is tied to a single, decisive moment. &ldquo;Consider from this day onward, from the twenty-fourth day of the ninth month. Since the day that the foundation of the Lord&rsquo;s temple was laid, consider&rdquo; (2:18). From the very day they obeyed and took up the work in earnest, a new era of blessing would begin. The turning point was not a change in their fortunes but a change in their obedience.",
      "The promise is wonderfully concrete: &ldquo;Is the seed yet in the barn? Indeed, the vine, the fig tree, the pomegranate, and the olive tree have yielded nothing. But from this day on I will bless you&rdquo; (2:19). Even before the harvest, before any visible evidence of change, God pledges his blessing. The barns were still empty and the trees bare, yet the word of the Lord guaranteed abundance to come for a people who had returned to put him first.",
      "The lesson stands as a permanent encouragement. God ties his blessing not to perfect circumstances but to the moment his people turn to obey him. &ldquo;From this day on I will bless you&rdquo; marks the difference that wholehearted obedience makes &mdash; the day a life is reordered around the honor of God becomes the day from which his favor begins to flow.",
    ],
  },
  {
    id: "The Signet Ring",
    heading: "The Signet Ring",
    reference: "Haggai 2:20&ndash;23",
    paragraphs: [
      "On the very same day as the promise of blessing, the word of the Lord comes to Haggai a second time, now with a message addressed personally to Zerubbabel, the governor of Judah and the descendant of David (2:20&ndash;21). The book that began by addressing the people&rsquo;s neglect ends by lifting their eyes to the future of God&rsquo;s kingdom through the line of David. This closing oracle is the messianic crown of the whole prophecy.",
      "The Lord announces a great upheaval of the world order: &ldquo;I am about to shake the heavens and the earth, and to overthrow the throne of kingdoms. I am about to destroy the strength of the kingdoms of the nations, and overthrow the chariots and their riders. And the horses and their riders shall go down, every one by the sword of his brother&rdquo; (2:21&ndash;22). The proud powers of the earth, which seem so permanent, will be toppled by the hand of God.",
      "Against the backdrop of this shaking of nations, the Lord makes a stunning promise to his chosen servant: &ldquo;On that day, declares the Lord of hosts, I will take you, O Zerubbabel my servant, the son of Shealtiel, declares the Lord, and make you like a signet ring, for I have chosen you, declares the Lord of hosts&rdquo; (2:23). Where the kingdoms of the world will be overthrown, Zerubbabel will be lifted up and held secure.",
      "The image of the signet ring is rich with meaning. A signet ring bore the king&rsquo;s seal; it was the mark of his authority, his most prized and personal possession, used to stamp royal decrees. To be made God&rsquo;s signet ring is to be the bearer of his authority and the object of his special care. Strikingly, this promise reverses an earlier judgment: of Zerubbabel&rsquo;s grandfather Jehoiachin the Lord had said that even if he were the signet ring on his right hand, he would tear him off (Jeremiah 22:24). Now, in Zerubbabel, the line is restored and chosen anew.",
      "Zerubbabel himself never became a king, and yet the promise reaches far beyond him. He stands in the genealogy of Jesus, and through his line the true and final Son of David would come &mdash; the one in whom all the shaking of the nations finds its purpose and all the authority of God is sealed. The signet ring points forward to the Messiah, the chosen servant in whom God&rsquo;s kingdom is established forever.",
      "So the short book of Haggai closes on a note of soaring hope. It begins with a ruined temple and a complacent people and ends with the shaking of empires and the choosing of God&rsquo;s servant. Through a humble work of rebuilding, God was advancing a purpose that no earthly power could overthrow &mdash; reminding every generation that those who put his honor first are caught up into a kingdom that cannot be shaken.",
    ],
  },
];

const videoItems = [
  { videoId: "juPvv_xcX-U", title: "BibleProject - Overview - Haggai" },
  { videoId: "fXHWlHWUTC8", title: "Consider Your Ways - A Study of Haggai 1" },
  { videoId: "Q5b9jGz4Z9w", title: "The Greater Glory of Gods House - Haggai 2" },
  { videoId: "x9wL3jZK0nE", title: "Zerubbabel and the Signet Ring - Haggai Explained" },
];

export default function ChristianBookOfHaggaiGuidePage() {
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
            The Book of Haggai
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A prophet&rsquo;s call to the returned exiles who built their own paneled houses while God&rsquo;s house lay in ruins &mdash; to consider their ways and rebuild the temple, with the promise that the latter glory of this house will be greater than the former, that blessing will flow from the day they obey, and that Zerubbabel will be God&rsquo;s chosen signet ring.
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
              Deepen your study of Haggai through visual teaching on the call to consider your ways, the rebuilding of the temple, the promise of a greater glory, and the choosing of Zerubbabel as God&rsquo;s signet ring.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Consider Your Ways and Build</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Haggai confronts a people who built their own comfort while God&rsquo;s house lay in ruins, and calls them to consider their ways and take up the work again. Its enduring promise is that the God who says &ldquo;I am with you&rdquo; gives a latter glory greater than the former, pours out blessing from the day his people obey, and is advancing through his chosen servant a kingdom that cannot be shaken.
          </p>
        </div>
      </main>
    </div>
  );
}
