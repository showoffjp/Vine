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
  "The Call of Isaiah",
  "Judgment and Immanuel",
  "The Prince of Peace",
  "The Suffering Servant",
  "A New Creation",
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
    id: "The Call of Isaiah",
    heading: "The Call of Isaiah",
    reference: "Isaiah 1&ndash;6",
    paragraphs: [
      "Isaiah prophesied in Judah in the 8th century BC, during the reigns of several kings &mdash; Uzziah, Jotham, Ahaz, and Hezekiah &mdash; as the Assyrian empire rose to threaten the small kingdoms of the region. His ministry spanned decades of political turmoil, and his message ranged from searching indictments of his own people to soaring visions of a future redemption. Few books in Scripture are as vast in scope or as rich in their anticipation of Christ.",
      "The book opens with God&rsquo;s lawsuit against his rebellious people. Their worship is empty because their lives are unjust; sacrifices and festivals mean nothing while the vulnerable are oppressed. &ldquo;Wash yourselves; make yourselves clean&hellip; learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow&rsquo;s cause&rdquo; (1:16&ndash;17). True religion, Isaiah insists from the start, is inseparable from justice and mercy.",
      "Yet even amid the indictment, hope breaks through. &ldquo;Come now, let us reason together, says the Lord: though your sins are like scarlet, they shall be as white as snow&rdquo; (1:18). And chapter 2 lifts the eyes to the last days, when the mountain of the Lord shall be established, the nations shall stream to it, and they shall &ldquo;beat their swords into plowshares&rdquo; &mdash; a vision of universal peace under God&rsquo;s reign.",
      "The defining moment of these chapters is Isaiah&rsquo;s call in chapter 6. &ldquo;In the year that King Uzziah died I saw the Lord sitting upon a throne, high and lifted up; and the train of his robe filled the temple&rdquo; (6:1). Above him stood the seraphim, calling to one another, &ldquo;Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory&rdquo; (6:3). The threefold cry underscores that holiness is the very essence of God&rsquo;s being.",
      "Confronted with that holiness, Isaiah is undone: &ldquo;Woe is me! For I am lost; for I am a man of unclean lips, and I dwell in the midst of a people of unclean lips; for my eyes have seen the King, the Lord of hosts&rdquo; (6:5). The sight of God&rsquo;s purity exposes his own sin and the sin of his people. There is no posture before the holy God except confession.",
      "But grace follows. One of the seraphim flies to him with a burning coal taken from the altar and touches his lips, declaring, &ldquo;Behold, this has touched your lips; your guilt is taken away, and your sin atoned for&rdquo; (6:7). The cleansing comes from the altar &mdash; from sacrifice &mdash; foreshadowing how God will atone for sin and prepare unworthy people for his service.",
      "Then comes the commission. Isaiah hears the voice of the Lord saying, &ldquo;Whom shall I send, and who will go for us?&rdquo; And the cleansed prophet answers, &ldquo;Here I am! Send me&rdquo; (6:8). The pattern of this chapter &mdash; the vision of God&rsquo;s holiness, the confession of sin, the gift of cleansing, and the call to go &mdash; frames the entire book and sets the rhythm of the gospel itself.",
    ],
  },
  {
    id: "Judgment and Immanuel",
    heading: "Judgment and Immanuel",
    reference: "Isaiah 7&ndash;12",
    paragraphs: [
      "Against the backdrop of political crisis, Isaiah delivers some of the most famous messianic prophecies in the Bible. The northern kingdom of Israel and Syria have allied against Judah, and King Ahaz is paralyzed by fear, tempted to seek rescue from Assyria rather than to trust the Lord. Into this moment of faithless panic, Isaiah brings a word about a child whose birth will signal that God has not abandoned his people.",
      "To Ahaz, who will not even ask for a sign, Isaiah gives one anyway: &ldquo;Behold, the virgin shall conceive and bear a son, and shall call his name Immanuel&rdquo; &mdash; God with us (7:14). The New Testament reads this prophecy as ultimately fulfilled in Jesus; Matthew quotes it directly at the announcement of Christ&rsquo;s birth (Matthew 1:23), seeing in the name Immanuel the deepest truth of the incarnation.",
      "The prophecy expands gloriously in chapter 9. &ldquo;The people who walked in darkness have seen a great light&rdquo; (9:2), and then the announcement of the child: &ldquo;For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace&rdquo; (9:6). Each title points beyond any merely human king to one who is divine.",
      "&ldquo;Of the increase of his government and of peace there will be no end, on the throne of David and over his kingdom, to establish it and to uphold it with justice and with righteousness from this time forth and forevermore&rdquo; (9:7). Here is a kingdom without end &mdash; an everlasting reign of justice and peace that the New Testament identifies with the kingdom inaugurated by Jesus, the son of David.",
      "Chapter 11 envisions a shoot from the stump of Jesse &mdash; new life springing from the cut-down line of David. The Spirit of the Lord rests upon him: &ldquo;the Spirit of wisdom and understanding, the Spirit of counsel and might&rdquo; (11:2). He will not judge by what his eyes see but with righteousness, and &ldquo;with the breath of his lips he shall kill the wicked.&rdquo; His reign brings the restoration of all creation.",
      "The vision rises to its peak in the picture of the peaceable kingdom: &ldquo;The wolf shall dwell with the lamb, and the leopard shall lie down with the young goat&hellip; and a little child shall lead them&rdquo; (11:6). The whole earth will be transformed, for &ldquo;the earth shall be full of the knowledge of the Lord as the waters cover the sea&rdquo; (11:9). The coming King will heal not only his people but the created order itself.",
      "Throughout these chapters, judgment and hope are interwoven. God will indeed discipline his people through the empires that rise against them; the Assyrian will be his rod. Yet a remnant will be saved, and a King will come. Chapter 12 closes the section with a song of thanksgiving: &ldquo;Behold, God is my salvation; I will trust, and will not be afraid&rdquo; &mdash; the proper response to the promise of Immanuel.",
    ],
  },
  {
    id: "The Prince of Peace",
    heading: "The Prince of Peace",
    reference: "Isaiah 13&ndash;39",
    paragraphs: [
      "The middle section of Isaiah broadens the horizon far beyond Judah. It contains a series of oracles against the nations &mdash; Babylon, Assyria, Moab, Egypt, Tyre, and others &mdash; declaring that the Lord is sovereign over all the kingdoms of the earth, not merely the God of one small people. The empires that seem to hold history in their hands are, in truth, instruments and subjects of the Lord of hosts.",
      "Interwoven with these oracles are visions of future hope. The so-called &ldquo;little apocalypse&rdquo; of chapters 24&ndash;27 looks beyond all present judgments to the final triumph of God, when he will &ldquo;swallow up death forever&rdquo; and &ldquo;wipe away tears from all faces&rdquo; (25:8). This astonishing promise &mdash; the abolition of death itself &mdash; reaches forward to the final pages of the Bible, where it is taken up again in Revelation.",
      "Running through the section is a steady warning against trusting in political alliances rather than in God. When the nations are tempted to lean on Egypt for protection from Assyria, Isaiah declares, &ldquo;Woe to those who go down to Egypt for help&hellip; but do not look to the Holy One of Israel or consult the Lord&rdquo; (31:1). Security is found not in chariots and horses but in the living God.",
      "The historical chapters 36&ndash;39 dramatize this lesson in narrative form. The Assyrian king Sennacherib, having swept through the region, lays siege to Jerusalem and sends his commander to mock the city&rsquo;s hope: no god of any nation has saved his people from Assyria, so why should the Lord? The taunt is a direct challenge to the honor of God himself.",
      "King Hezekiah&rsquo;s response is to take the threatening letter into the temple and spread it before the Lord in prayer: &ldquo;O Lord our God, save us from his hand, that all the kingdoms of the earth may know that you alone are the Lord&rdquo; (37:20). It is the opposite of Ahaz&rsquo;s faithlessness &mdash; a king who, when the empire surrounds him, turns not to alliances but to God.",
      "The deliverance is sudden and total. The Lord answers through Isaiah, and that night the angel of the Lord strikes down the Assyrian host; Sennacherib withdraws and is later killed in his own land. The seemingly invincible army is undone without Judah lifting a sword &mdash; a vivid demonstration that trust in God, not in the strength of empires, is the path of life.",
      "These chapters form a hinge in the book. Chapter 39, in which Hezekiah foolishly displays his treasures to envoys from Babylon, foreshadows the coming exile and turns the reader&rsquo;s gaze forward. The first half of Isaiah, largely concerned with judgment, gives way to the second half, largely concerned with comfort &mdash; from the threat of Assyria to the hope held out to the exiles of Babylon.",
    ],
  },
  {
    id: "The Suffering Servant",
    heading: "The Suffering Servant",
    reference: "Isaiah 40&ndash;55",
    paragraphs: [
      "With chapter 40 the tone of the book shifts dramatically. The voice of judgment gives way to the voice of consolation: &ldquo;Comfort, comfort my people, says your God. Speak tenderly to Jerusalem, and cry to her that her warfare is ended, that her iniquity is pardoned&rdquo; (40:1&ndash;2). These chapters address the exiles &mdash; people far from home, tempted to think God has forgotten them &mdash; with breathtaking promises of restoration.",
      "Much of this section exalts the incomparable greatness of God over the idols and the nations. &ldquo;Have you not known? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He does not faint or grow weary&hellip; he gives power to the faint&rdquo; (40:28&ndash;29). And then the famous promise: &ldquo;they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles&rdquo; (40:31).",
      "Through these chapters move four passages known as the &ldquo;Servant Songs,&rdquo; which speak of a mysterious figure called the Servant of the Lord. He is anointed by the Spirit, gentle and persevering, called to bring justice to the nations and to be &ldquo;a light for the nations, that my salvation may reach to the end of the earth&rdquo; (49:6). The Servant&rsquo;s mission reaches beyond Israel to all peoples.",
      "The songs culminate in the most astonishing prophecy in the Old Testament, Isaiah 52:13&ndash;53:12. There the Servant is &ldquo;despised and rejected by men, a man of sorrows and acquainted with grief&rdquo; (53:3). Far from being honored, he is one from whom people hide their faces &mdash; and yet his suffering, the passage reveals, is not meaningless but redemptive.",
      "&ldquo;But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed. All we like sheep have gone astray; we have turned&mdash;every one&mdash;to his own way; and the Lord has laid on him the iniquity of us all&rdquo; (53:5&ndash;6). The Servant suffers not for his own sin but as a substitute, bearing the punishment his people deserved.",
      "The chapter describes a death and a vindication. &ldquo;They made his grave with the wicked and with a rich man in his death&rdquo; (53:9), yet afterward &ldquo;he shall see his offspring; he shall prolong his days&hellip; the will of the Lord shall prosper in his hand&rdquo; (53:10). The Servant who is cut off does not stay dead but lives to see the fruit of his suffering &mdash; a foreshadowing of resurrection.",
      "Written centuries before the cross, Isaiah 53 reads like an eyewitness account of the crucifixion. The New Testament repeatedly applies it to Jesus, who quoted it of himself and whose followers saw in it the meaning of his death. It is the clearest Old Testament picture of the atonement &mdash; the innocent dying for the guilty &mdash; and the heart of why Isaiah has been so treasured by the church.",
    ],
  },
  {
    id: "A New Creation",
    heading: "A New Creation",
    reference: "Isaiah 56&ndash;66",
    paragraphs: [
      "The final section of Isaiah looks beyond the return from exile to the ultimate renewal of all things. Restoration from Babylon, glorious as it is, turns out to be only a foretaste of a far greater redemption. These chapters reach toward the consummation of God&rsquo;s purposes &mdash; a renewed people in a renewed world, where the Lord himself dwells with them forever.",
      "The scope of God&rsquo;s salvation widens to include those once excluded. He promises to gather not only scattered Israel but also foreigners and outcasts who join themselves to him: &ldquo;these I will bring to my holy mountain, and make them joyful in my house of prayer&hellip; for my house shall be called a house of prayer for all peoples&rdquo; (56:7). The temple is to become a place for every nation, a theme Jesus invoked when he cleansed it.",
      "Yet the section does not flinch from confronting sin. Chapter 59 diagnoses the breach between God and his people: &ldquo;your iniquities have made a separation between you and your God&rdquo; (59:2). There is no human deliverer to be found, and so the Lord himself intervenes: &ldquo;his own arm brought him salvation&hellip; he put on righteousness as a breastplate&rdquo; (59:16&ndash;17). Salvation, as ever in Isaiah, must come from God.",
      "At the center of this section stands chapter 61, which Jesus read aloud in the synagogue at Nazareth to announce the beginning of his ministry (Luke 4). &ldquo;The Spirit of the Lord God is upon me, because the Lord has anointed me to bring good news to the poor&hellip; to proclaim liberty to the captives&hellip; to proclaim the year of the Lord&rsquo;s favor&rdquo; (61:1&ndash;2). In claiming these words, Jesus declared himself the one Isaiah foresaw.",
      "The book climaxes with the promise of a wholly renewed world: &ldquo;For behold, I create new heavens and a new earth, and the former things shall not be remembered or come into mind&rdquo; (65:17). In that new creation the sounds of weeping and distress shall be heard no more; people will inhabit the houses they build and enjoy the work of their hands, and the curse will be undone.",
      "Once more the peaceable kingdom appears: &ldquo;The wolf and the lamb shall graze together&hellip; they shall not hurt or destroy in all my holy mountain, says the Lord&rdquo; (65:25). The vision that began in chapter 11 returns at the book&rsquo;s end, framing the whole of Isaiah between two glimpses of a creation healed of all violence and reconciled under the reign of God.",
      "Isaiah, often called &ldquo;the fifth gospel&rdquo; for how thoroughly it anticipates Christ, ends with the hope of new heavens and a new earth that endure forever, where all flesh shall come to worship before the Lord. It is this vision that the book of Revelation takes up at the very close of the Bible &mdash; God dwelling with a renewed people, in a renewed creation, where every tear is wiped away.",
    ],
  },
];

const videoItems = [
  { videoId: "d0A6Uchb1F8", title: "BibleProject - Isaiah Overview Part 1" },
  { videoId: "_TzdEPuqgQg", title: "BibleProject - Isaiah Overview Part 2" },
  { videoId: "FrwYbZjEPI4", title: "The Suffering Servant - Isaiah 53 Explained" },
];

export default function ChristianBookOfIsaiahGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Isaiah
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The fifth gospel &mdash; the holiness of God and Isaiah&rsquo;s call, the promise of Immanuel and the Prince of Peace, comfort for the exiles, the suffering servant who bore our sins, and the vision of new heavens and a new earth.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Isaiah through visual teaching on the sweep of the book, its vision of judgment and hope, and the suffering servant of Isaiah 53 who anticipates the cross.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Word That Stands Forever</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Isaiah holds together the holiness of God and the hope of redemption, the depth of human sin and the height of divine grace. From the throne room of chapter 6 to the suffering servant of chapter 53 to the new creation of chapter 65, it points unmistakably toward Christ &mdash; for &ldquo;the grass withers, the flower fades, but the word of our God will stand forever.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
