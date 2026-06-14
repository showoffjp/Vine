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
  "The Decree of Cyrus",
  "The Return from Exile",
  "Rebuilding the Temple",
  "Ezra the Scribe",
  "Covenant Renewal",
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
    id: "The Decree of Cyrus",
    heading: "The Decree of Cyrus",
    reference: "Ezra 1&ndash;2",
    paragraphs: [
      "The Book of Ezra opens at one of the great hinge points of biblical history. The seventy years of exile that Jeremiah had foretold are drawing to a close, and the curtain rises not on Jerusalem but on the throne of a pagan empire. &ldquo;In the first year of Cyrus king of Persia, that the word of the Lord by the mouth of Jeremiah might be fulfilled, the Lord stirred up the spirit of Cyrus king of Persia&rdquo; (1:1). The God of Israel is shown to be sovereign over the most powerful ruler on earth, bending the heart of a Persian king to accomplish his ancient promise.",
      "Cyrus issues a remarkable decree, sending it throughout his kingdom in writing: &ldquo;The Lord, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem, which is in Judah&rdquo; (1:2). Where empires before had carried peoples into captivity, Cyrus does the opposite &mdash; he commissions the exiles of Judah to return to their homeland and rebuild the temple of the Lord that the Babylonians had destroyed.",
      "The decree is not only permission to go but a charge to build, and it comes with material support. Cyrus declares that whoever among God&rsquo;s people goes up to Jerusalem should be helped by their neighbors with silver, gold, goods, and beasts, alongside freewill offerings for the house of God. The return is to be no impoverished trickle but a restoration backed by royal authority and the generosity of the people.",
      "Cyrus also restores the sacred vessels of the temple, which Nebuchadnezzar had carried off from Jerusalem and placed in the house of his gods. These are counted out and handed over &mdash; basins of gold and silver, censers, and other vessels, numbering in the thousands. The very articles that had been stripped from the first temple are returned to be used again in the worship of the Lord, a tangible sign of continuity between what was lost and what is now being restored.",
      "Chapter two then records the long list of those who returned: families, towns, priests, Levites, singers, gatekeepers, and temple servants, numbering some forty-two thousand, besides their servants. Far from a dry register, this roll call is a roster of faith &mdash; the names of those who left the relative comfort of Babylon to undertake a hard journey toward a ruined city, trusting the promise of God. Their genealogies mattered, for purity of worship and priesthood depended on knowing who truly belonged to the people of God.",
      "As the returning exiles arrive, the heads of families make freewill offerings for the house of God, to erect it on its site, giving according to their ability to the treasury of the work. The whole opening movement of Ezra sets the theme for the book: a faithful God keeping his word, a remnant stirred to respond, and a people gathering not merely to resettle a land but to restore the worship of the Lord at its center.",
    ],
  },
  {
    id: "The Return from Exile",
    heading: "The Return from Exile",
    reference: "Ezra 2&ndash;3",
    paragraphs: [
      "The first return is led by Zerubbabel, a descendant of David in the royal line, together with Jeshua the high priest. Under their leadership the remnant makes the long journey back from Babylon to the land of their fathers, settling each in their own towns throughout Judah. After decades in exile, the people of God set foot again in the land of promise, though they return to ruins rather than to glory.",
      "When the seventh month comes, the people gather as one man to Jerusalem. Their very first act is not to fortify the city or rebuild their own homes but to restore the worship of God. Jeshua and Zerubbabel set to work to build the altar of the God of Israel, to offer burnt offerings on it, as it is written in the Law of Moses (3:2). Worship takes priority over comfort and security.",
      "There is a poignant note of fear in this first act: they set the altar in its place, &ldquo;for fear was on them because of the peoples of the lands&rdquo; (3:3), yet they offer burnt offerings to the Lord, morning and evening. Surrounded by hostile neighbors and uncertain of the future, the returned exiles choose to anchor their fragile new beginning in the daily rhythm of sacrifice and prayer. They also keep the Feast of Booths and resume the appointed feasts of the Lord.",
      "With the altar restored and worship reestablished, the people turn to the greater task of rebuilding the temple itself. They give money to the masons and carpenters, and food, drink, and oil to the Sidonians and Tyrians, to bring cedar trees from Lebanon to the sea, to Joppa, according to the grant they had from Cyrus &mdash; the same arrangement by which Solomon had once built the first temple, deliberately echoing that earlier glory.",
      "In the second year after their arrival, the foundation of the house of the Lord is laid. The builders set the priests in their vestments with trumpets, and the Levites with cymbals, to praise the Lord. They sing responsively, &ldquo;For he is good, for his steadfast love endures forever toward Israel&rdquo; (3:11), and all the people shout with a great shout when the foundation is laid. The covenant praise of generations past rises again over the rebuilt foundation.",
      "Yet the joy is mingled with sorrow. Many of the older priests and Levites and heads of families, who had seen the first temple in its splendor, weep with a loud voice when they see the foundation of this house, while many others shout aloud for joy. &ldquo;The people could not distinguish the sound of the joyful shout from the sound of the people&rsquo;s weeping&rdquo; (3:13). The new beginning is real but modest, and the mingled cry of grief and gladness captures the bittersweet hope of a people rebuilding from the ruins.",
    ],
  },
  {
    id: "Rebuilding the Temple",
    heading: "Rebuilding the Temple",
    reference: "Ezra 4&ndash;6",
    paragraphs: [
      "No sooner is the foundation laid than opposition arises. The adversaries of Judah and Benjamin approach Zerubbabel, offering to help build, claiming to worship the same God. But the leaders discern the danger of a compromised partnership and refuse: &ldquo;You have nothing to do with us in building a house to our God&rdquo; (4:3). The refusal turns the would-be helpers into open enemies who set out to frustrate the work.",
      "The people of the land discourage the builders and make them afraid, bribing counselors against them to frustrate their purpose all the days of Cyrus and on into the reign of later kings. Letters of accusation are sent to the Persian court, charging that Jerusalem is a rebellious and wicked city that, if rebuilt, will refuse to pay tribute. The campaign of opposition succeeds: by force and power the work on the house of God in Jerusalem is made to cease, and it stops until the second year of the reign of Darius king of Persia.",
      "For roughly sixteen years the temple stands unfinished, its work halted and the people grown weary and distracted. Then God stirs his people again, this time through the preaching of two prophets. &ldquo;Now the prophets, Haggai and Zechariah the son of Iddo, prophesied to the Jews who were in Judah and Jerusalem, in the name of the God of Israel&rdquo; (5:1). Their stirring word rouses Zerubbabel and Jeshua to rise and begin to build the house of God again, with the prophets of God beside them, supporting them.",
      "The opposition flares once more as the governor of the province, Tattenai, questions by what authority they build and sends a report to King Darius. But God&rsquo;s hand is on the elders of the Jews, and the work is not stopped while the matter is investigated. Darius orders a search of the royal archives, and there in the citadel of Ecbatana the original scroll of Cyrus&rsquo;s decree is found, confirming that the temple was to be rebuilt at the king&rsquo;s expense.",
      "Darius not only upholds the decree but strengthens it, commanding Tattenai to keep away from the work and to pay its full cost from the royal revenue, along with whatever the priests need for sacrifices, so that they may offer prayers for the life of the king and his sons. The very opposition meant to stop the work becomes, in God&rsquo;s providence, the occasion for greater royal support. &ldquo;They finished their building by decree of the God of Israel and by decree of Cyrus and Darius&rdquo; (6:14).",
      "The temple is completed in the sixth year of Darius, and the people of Israel, the priests and the Levites, and the rest of the returned exiles celebrate its dedication with joy, offering hundreds of sacrifices and a sin offering for all Israel. They keep the Passover, having purified themselves, and observe the Feast of Unleavened Bread seven days with joy, &ldquo;for the Lord had made them joyful&rdquo; (6:22). What enemies had labored to prevent, God had brought to completion in his appointed time.",
    ],
  },
  {
    id: "Ezra the Scribe",
    heading: "Ezra the Scribe",
    reference: "Ezra 7&ndash;8",
    paragraphs: [
      "With the temple long completed, the narrative leaps forward roughly sixty years to introduce the man whose name the book bears. &ldquo;Now after this, in the reign of Artaxerxes king of Persia, Ezra&hellip; went up from Babylonia. He was a scribe skilled in the Law of Moses that the Lord, the God of Israel, had given&rdquo; (7:1, 6). Ezra is a priest in the line of Aaron and a scholar devoted to the Scriptures, and through him the focus of the book shifts from rebuilding the temple to rebuilding the people around the word of God.",
      "The heart of Ezra&rsquo;s character is captured in a single, often-quoted verse: &ldquo;For Ezra had set his heart to study the Law of the Lord, and to do it and to teach his statutes and rules in Israel&rdquo; (7:10). His devotion follows a deliberate order &mdash; to study, to do, and then to teach. He does not merely master the text; he lives it and passes it on, making him the model of a faithful teacher of God&rsquo;s law and a pattern for every generation that would handle the Scriptures rightly.",
      "King Artaxerxes grants Ezra a remarkable letter of authority, sending him with a second wave of returning exiles and giving him whatever he needs from the royal treasury for the house of God, along with freedom to appoint magistrates and judges who know the laws of his God and to teach those who do not. The repeated refrain through the account is that all this is granted &ldquo;for the hand of the Lord his God was on him&rdquo; (7:6, 9). Ezra sees the favor of the king as the favor of God.",
      "Before setting out, Ezra gathers the returning company by the river Ahava and proclaims a fast, &ldquo;that we might humble ourselves before our God, to seek from him a safe journey for ourselves, our children, and all our goods&rdquo; (8:21). He confesses that he had been ashamed to ask the king for soldiers and horsemen to protect them against the enemy on the way, because he had told the king that the hand of God is for good on all who seek him. So he stakes the safety of the whole company on his testimony to God&rsquo;s faithfulness, choosing prayer over an armed escort.",
      "Ezra also entrusts the immense treasure for the temple &mdash; silver, gold, and sacred vessels &mdash; to twelve leading priests, weighing it out carefully and charging them to guard it as holy to the Lord until it can be weighed again in Jerusalem. The careful accounting reflects a heart that takes holiness seriously, treating what belongs to God with reverence and integrity.",
      "They set out from the river Ahava, and the hand of their God is upon them, delivering them from the hand of the enemy and ambushes by the way. Arriving safely in Jerusalem after a journey of about four months, they rest three days, then weigh out the silver and gold in the house of God and offer burnt offerings to the Lord. The second return, like the first, is framed from beginning to end by worship and by trust in the protecting hand of God.",
    ],
  },
  {
    id: "Covenant Renewal",
    heading: "Covenant Renewal",
    reference: "Ezra 9&ndash;10",
    paragraphs: [
      "Ezra has scarcely arrived when he is confronted with a grievous problem. The officials come to him and report that the people of Israel, including priests and Levites, have not separated themselves from the surrounding peoples but have intermarried with them, mingling the holy seed with the peoples of the lands. The danger is not ethnic but spiritual &mdash; the same compromise that had drawn Israel into idolatry before the exile threatens to undo the very restoration God has accomplished.",
      "Ezra&rsquo;s response is one of the most striking pictures of godly grief in Scripture. &ldquo;As soon as I heard this, I tore my garment and my cloak and pulled hair from my head and beard and sat appalled&rdquo; (9:3). He sits stunned until the evening sacrifice, and then he falls on his knees and spreads out his hands to the Lord in one of the great prayers of confession in the Bible, identifying himself fully with the sin of his people.",
      "In his prayer Ezra does not stand apart from the people as an accuser but stands among them as a confessor: &ldquo;O my God, I am ashamed and blush to lift my face to you, my God, for our iniquities have risen higher than our heads&rdquo; (9:6). He recalls that it was for such unfaithfulness that the exile came, and he marvels that God has shown grace in leaving a remnant and giving them a secure hold in his holy place. He fears that, after such mercy, the people will provoke God to destroy them entirely.",
      "Ezra&rsquo;s heartbroken prayer moves the whole assembly. As he weeps and confesses before the house of God, a great crowd gathers and weeps bitterly with him. One of the leaders, Shecaniah, speaks for the people: &ldquo;We have broken faith with our God&hellip; but even now there is hope for Israel in spite of this&rdquo; (10:2). He proposes that they make a covenant with God to put away the foreign wives, and he urges Ezra to arise and act, promising the people&rsquo;s support.",
      "A proclamation goes out gathering all the returned exiles to Jerusalem within three days. They assemble in the open square before the house of God, trembling both because of the matter and because of the heavy rain. Ezra calls them to confess and to separate themselves from the peoples of the land, and the assembly answers with a loud voice, &ldquo;It is so; we must do as you have said&rdquo; (10:12). Because of the cold and the rain and the magnitude of the matter, they appoint a careful process, with elders and judges, to examine each case over the following months.",
      "The book closes on this sober and painful note of covenant renewal. The list of those who had married foreign wives is recorded, and the matter is set right at great personal cost to many families. It is not a triumphant ending but an honest one, showing a people newly committed to holiness and willing to undergo painful reform to be faithful to their God. Ezra leaves the restored community not with the temple alone rebuilt, but with the people themselves resolved to walk in obedience to the Law of the Lord.",
    ],
  },
];

const videoItems = [
  { videoId: "MkETkRv9tG8", title: "BibleProject - Overview - Ezra-Nehemiah" },
  { videoId: "C5Oc8VWBjEM", title: "Ezra-Nehemiah and the Return from Exile" },
  { videoId: "_b4cWAQK0Bw", title: "Rebuilding the Temple - Ezra Explained" },
  { videoId: "aF4MRH0sUs0", title: "Ezra the Scribe and Covenant Renewal" },
];

export default function ChristianBookOfEzraGuidePage() {
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
            The Book of Ezra
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The return from exile and the restoration of God&rsquo;s people &mdash; the decree of Cyrus, the first return under Zerubbabel, the rebuilding of the temple amid fierce opposition, the coming of Ezra the scribe with a second wave, and the painful renewal of the covenant in devotion to the Law of the Lord.
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
              Deepen your study of Ezra through visual teaching on the decree of Cyrus, the return from exile, the rebuilding of the temple amid opposition, and the ministry of Ezra the scribe in renewing the covenant.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Hand of God Upon His People</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ezra tells the story of a faithful God keeping his word, stirring the heart of a pagan king and a scattered remnant to rebuild both the temple and the people around the Law of the Lord. Its enduring call is the very pattern of Ezra&rsquo;s own life &mdash; to set our hearts to study the Word, to do it, and to teach it &mdash; trusting that the good hand of God is upon all who seek him.
          </p>
        </div>
      </main>
    </div>
  );
}
