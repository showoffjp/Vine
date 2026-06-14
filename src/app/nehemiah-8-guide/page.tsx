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
  "Ezra Reads the Law",
  "Weeping and Joy",
  "Feast of Booths",
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
    heading: "Overview of Nehemiah 8",
    reference: "Nehemiah 8:1&ndash;18",
    paragraphs: [
      "Nehemiah 8 stands as one of the most remarkable scenes in all of the Old Testament &mdash; a great national assembly in which the returned exiles of Israel gather as one people in Jerusalem and hear the Word of God read aloud for the first time in living memory. The walls of the city have just been rebuilt under Nehemiah&rsquo;s leadership, but the more important rebuilding that must now occur is the rebuilding of the people&rsquo;s knowledge of and commitment to the Law of God. What unfolds in this chapter is nothing less than a spiritual revival ignited by the public reading and faithful explanation of Scripture.",
      "The chapter divides naturally into three movements. First, the people assemble and Ezra the scribe reads from the Book of the Law of Moses from early morning until midday, while the Levites circulate among the crowd and explain the meaning so that all can understand (vv. 1&ndash;8). Second, the people weep when they hear the words of the Law &mdash; presumably because they recognize how far they have fallen short &mdash; but Nehemiah, Ezra, and the Levites call them to joyful celebration instead, because &ldquo;the joy of the LORD is your strength&rdquo; (vv. 9&ndash;12). Third, on the following day the leaders gather again and discover the instruction about the Feast of Booths, which they had not been keeping; within days the whole community is celebrating the feast for the first time since the days of Joshua (vv. 13&ndash;18).",
      "The occasion takes place on the first day of the seventh month, Tishri, which was already a sacred day in Israel&rsquo;s calendar &mdash; the day that would later be known as Rosh Hashanah, the New Year. It is a new beginning for the post-exilic community, not just in terms of the calendar, but in terms of their identity as the people of God. The wall is finished; now the covenant must be renewed. The physical restoration of the city is complete; now the spiritual restoration of the people must begin. Nehemiah 8 is the hinge on which that transformation turns.",
      "The setting itself is charged with symbolic meaning. The people gather &ldquo;as one man&rdquo; in the square before the Water Gate &mdash; a public space that recalls the great covenant assemblies of Israel&rsquo;s past. Men and women and all who could understand are present; the hearing of God&rsquo;s Word is not restricted to a priestly or scholarly elite. Ezra stands on a wooden platform built for the purpose, visible to all, and when he opens the book, all the people stand. The reverence of the moment is palpable: the people rise before the Word of God, then bow their faces to the ground in worship before they even hear it read.",
      "The theology of Nehemiah 8 is profoundly relevant for every generation of God&rsquo;s people. Revival does not begin with programs or strategies; it begins with the recovery of the Word. Where God&rsquo;s people have drifted from Scripture &mdash; whether through exile, neglect, or simple busyness &mdash; the path back is the same: gather, listen, understand, respond. Ezra and the Levites model what faithful Scripture ministry looks like: they read distinctly, they give the sense, and they cause the people to understand the reading. The result is not passive information transfer but a transformation that issues in tears, in joy, in celebration, and ultimately in obedience.",
      "Nehemiah 8 is also one of the key texts behind the Christian practice of public Scripture reading and expository preaching. Ezra did not merely recite sacred syllables; he and his colleagues worked to make the meaning plain to ordinary people in the vernacular of their day. The model is clear: the church that wants to know the joy of Nehemiah 8 must be a church that reads, explains, and applies the Word of God with the same seriousness and love that Ezra and the Levites brought to that great assembly in the square before the Water Gate.",
    ],
  },
  {
    id: "Ezra Reads the Law",
    heading: "Ezra Reads the Book of the Law",
    reference: "Nehemiah 8:1&ndash;8",
    paragraphs: [
      "The initiative for the great assembly of Nehemiah 8 comes from the people themselves. &ldquo;All the people gathered as one man into the square before the Water Gate. And they told Ezra the scribe to bring the Book of the Law of Moses that the LORD had commanded Israel&rdquo; (8:1). This is not a clergy-driven event imposed from above; the people are hungry for the Word. They have endured seventy years of exile, lived under pagan empires, and returned to a ruined city. Now, with the walls rebuilt, they are reaching for the thing that makes them Israel: the covenant law of their God.",
      "Ezra brings the Law before the assembly on the first day of the seventh month. The audience is comprehensive: men and women, and all who could understand &mdash; a phrase that probably indicates children old enough to follow the reading. The assembly spans the entire covenant community. There is no inner circle of the learned who possess the Scriptures while the ordinary people remain ignorant. This is a reading for everyone, and everyone is expected to hear and to understand.",
      "When Ezra opens the book, all the people stand. This act of rising before the reading of Scripture is striking. They are not standing out of social convention or formality; they are rising in reverence before the Word of the living God. Ezra blesses the LORD the great God, and all the people answer, &ldquo;Amen, Amen,&rdquo; lifting up their hands, and they bowed their heads and worshiped the LORD with their faces to the ground (8:6). The scene is one of profound corporate worship &mdash; not as a prelude to the reading but as an integral part of it. To receive the Word is to worship the God who gave it.",
      "The reading continues from early morning until midday &mdash; a period of perhaps five or six hours. This is not a brief homily or a selected passage; it is sustained, extended engagement with the text of the Law. The platform on which Ezra stands, built of wood, elevates him above the crowd so that his voice can carry and so that the visual symbol of the occasion is clear: the reader of the Law stands above the assembly not in pride but in service, holding up the Word that belongs to them all.",
      "The crucial detail of the passage is the role of the Levites. Thirteen Levites are named who &ldquo;helped the people to understand the Law, while the people remained in their places&rdquo; (8:7). Verse 8 explains what this involved: &ldquo;They read from the book, from the Law of God, clearly, and they gave the sense, so that the people understood the reading.&rdquo; The Hebrew phrase translated &ldquo;gave the sense&rdquo; likely refers to explanation &mdash; perhaps translation into Aramaic, the common spoken language of the returned exiles, along with clarification of the meaning. Understanding was the goal, not mere recitation.",
      "This model of Scripture ministry &mdash; read the text, explain it clearly, aim for understanding &mdash; is as needed in the twenty-first century as it was in the fifth century B.C. The Levites who circulated among the people to ensure comprehension were not dumbing the Law down; they were honoring its importance by refusing to let it remain inaccessible. The Word of God is given to the whole people of God, not to an academic elite. Every element of the Nehemiah 8 assembly is designed to ensure that ordinary men, women, and children receive, understand, and respond to the living words of their covenant Lord.",
    ],
  },
  {
    id: "Weeping and Joy",
    heading: "Weeping and the Joy of the LORD",
    reference: "Nehemiah 8:9&ndash;12",
    paragraphs: [
      "The response of the people to the reading of the Law is immediate and deeply human: they weep. &ldquo;All the people wept as they heard the words of the Law&rdquo; (8:9). The text does not explain precisely why &mdash; but the most natural reading is that the people hear the Law and recognize the gap between what it requires and what Israel has done. The Law holds up a mirror, and the reflection is painful. Decades of neglect, the catastrophe of the Exile, and the continued hardships of the restoration all press in upon them as they hear the words of the covenant they have so often broken.",
      "These tears are not the tears of despair. They are the tears of genuine conviction, which in the economy of God&rsquo;s grace is always a preliminary to genuine renewal. The weeping of Nehemiah 8 is not unlike the weeping of the congregation at Josiah&rsquo;s great reform (2 Kings 22:11&ndash;13) or the mourning that characterizes true repentance throughout the Psalms and the Prophets. When God&rsquo;s people truly hear God&rsquo;s Word, they cannot remain unmoved. The Scriptures &ldquo;are living and active, sharper than any two-edged sword&rdquo; &mdash; they cut, and the cut produces grief before it produces healing.",
      "But Nehemiah, Ezra, and the Levites respond to the people&rsquo;s weeping with a surprising command: stop. &ldquo;And Nehemiah, who was the governor, and Ezra the priest and scribe, and the Levites who taught the people said to all the people, &lsquo;This day is holy to the LORD your God. Do not mourn or weep&rsquo;&rdquo; (8:9). The holiness of the day &mdash; the first day of the seventh month, a sacred appointed time &mdash; demands not grief but joy. The time for mourning is not now. This is a feast day, and feast days call for celebration.",
      "The command that follows has echoed through the centuries: &ldquo;Go your way. Eat the fat and drink sweet wine and send portions to anyone who has nothing ready, for this day is holy to our Lord. And do not be grieved, for the joy of the LORD is your strength&rdquo; (8:10). Every phrase here is charged with meaning. The feasting is not escapism or the denial of spiritual seriousness; it is the appropriate response to a holy day. The sharing of portions with those who have nothing is the social dimension of covenant joy: no one is left out of the celebration. And the famous declaration &mdash; &ldquo;the joy of the LORD is your strength&rdquo; &mdash; reorients the whole community.",
      "The &ldquo;joy of the LORD&rdquo; in this phrase can be read in two ways, and both are probably intended. It is the joy that comes from the LORD &mdash; a gift of grace to his people, not manufactured by human effort or positive thinking. And it is also the joy that is characteristic of the LORD, the delight that God himself takes in his people, his covenant, and his purposes in the world. When God&rsquo;s people draw near to him in his Word and in worship, they participate in his joy. That participated joy becomes the source of their strength for the difficult work of living faithfully in a fallen world.",
      "The people obey. &ldquo;And all the people went their way to eat and drink and to send portions and to make great rejoicing, because they had understood the words that were declared to them&rdquo; (8:12). The connection is important: their joy flows from understanding. This is not an emotional response manufactured by atmospheric music or rhetorical manipulation. Their joy is a fruit of the mind illumined by the Word. Understanding produces worship; worship produces joy; joy produces strength. The sequence of Nehemiah 8 is a pattern for the whole Christian life.",
    ],
  },
  {
    id: "Feast of Booths",
    heading: "The Feast of Booths Restored",
    reference: "Nehemiah 8:13&ndash;18",
    paragraphs: [
      "On the second day, the heads of families, the priests, and the Levites gather around Ezra to study the words of the Law more carefully. In the course of that study they discover something they have apparently not been doing: the command to observe the Feast of Booths (also called the Feast of Tabernacles or Sukkot) in the seventh month by dwelling in temporary shelters made of branches (8:14&ndash;15; cf. Leviticus 23:39&ndash;43). The discovery of a neglected command is itself a fruit of serious engagement with Scripture &mdash; and their response to the discovery is immediate action.",
      "The Feast of Booths was one of the three great annual pilgrim feasts of Israel, celebrated after the final harvest and designed to commemorate the forty years Israel spent living in temporary shelters in the wilderness. For seven days the people were to dwell in booths made of branches &mdash; a tangible, embodied reminder of their dependence on God during the wandering years, and a joyful celebration of his faithfulness in bringing them through. The feast was to be a time of great rejoicing: &ldquo;You shall rejoice before the LORD your God seven days&rdquo; (Leviticus 23:40).",
      "The community mobilizes with remarkable speed. A proclamation goes out through all the towns: go to the hills and bring branches to make booths. People set them up on their rooftops, in their courtyards, in the courts of the Temple, and in the squares of the city. &ldquo;And all the assembly of those who had returned from the captivity made booths and lived in the booths, for from the days of Jeshua the son of Nun to that day the people of Israel had not done so. And there was very great rejoicing&rdquo; (8:17). The hyperbole of that note &mdash; since the days of Joshua &mdash; underscores the magnitude of what is happening.",
      "The phrase &ldquo;since the days of Joshua&rdquo; is startling. It does not necessarily mean the feast was never observed at all in the intervening centuries &mdash; there are references to its celebration in 1 Kings 8 and Ezra 3, for example &mdash; but rather that the full scope of its observance, including the dwelling in booths, had not been seen with this level of communal completeness and joy since the conquest generation. The returned exiles are recapturing something ancient and precious that had been largely lost. They are recovering their own story.",
      "The theological significance of the booths is particularly poignant for a community of returned exiles. These are people who know what it is to be homeless, to be displaced, to live as strangers in a land that is not their own. Building booths &mdash; deliberate, temporary structures &mdash; and dwelling in them for a week is a powerful enactment of the truth that God&rsquo;s people are always, in a sense, pilgrims on the earth. The permanent security they seek is not in stone walls or rebuilt cities but in the covenant faithfulness of the God who led their ancestors through the wilderness and has now brought them home again.",
      "Day by day, from the first day to the last, Ezra continues to read from the Book of the Law of God. The feast lasts seven days, and on the eighth day there is a solemn assembly, according to the rule (8:18). The combination of feasting, dwelling in booths, and daily Scripture reading paints a picture of what a healthy covenant community looks like: grounded in the Word, gathered in joy, living in visible dependence on God, and celebrating together the goodness of the One who has never abandoned them. Nehemiah 8 closes with a community that has been rebuilt not just in brick and mortar but in faith, knowledge, and joy.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Nehemiah 8 Today",
    reference: "Nehemiah 8 &mdash; For the Life of the Church",
    paragraphs: [
      "Nehemiah 8 is one of the most important texts in Scripture for understanding why the public reading and preaching of God&rsquo;s Word is so central to the life of the church. The scene at the Water Gate &mdash; the gathered people, the open book, the clear explanation, the understanding, the tears, the joy &mdash; is not a historical curiosity. It is a paradigm. Every generation of God&rsquo;s people stands in need of the same thing the returned exiles needed: a fresh, serious, communal encounter with the words of God. The gathered church that opens its Bibles together and works to understand what those words mean and why they matter is doing precisely what Ezra and the Levites did in Jerusalem.",
      "The detail that the people asked for the reading of the Law is worth dwelling on. They were not passive recipients of a service programmed for them; they were hungry people who reached for spiritual food. The contemporary church will benefit from cultivating this same appetite in its people &mdash; an appetite for the Word that is not dependent on the preacher being entertaining or the format being innovative, but that is rooted in the conviction that God speaks through Scripture and that his words are more necessary than bread. Where that hunger exists, the Spirit can work. Where it does not, even the best preaching falls on deaf ears.",
      "The role of the Levites in Nehemiah 8 models what Christian education and pastoral ministry should look like at every level. They did not simply read the words and leave people to make of them what they would. They gave the sense; they caused the people to understand. This is the calling of every Sunday school teacher, every small group leader, every pastor and elder who opens the Scripture with the congregation. The goal is not to display one&rsquo;s own learning or to fill a time slot; it is to bring ordinary people into genuine comprehension of what God has said, so that comprehension can bear its natural fruit in transformation.",
      "The transformation of weeping into joy that occurs in Nehemiah 8:9&ndash;12 offers a pattern for pastoral care around conviction and repentance. The tears of genuine conviction are sacred and must not be brushed aside &mdash; they are the mark of a conscience that is alive and responsive to the Word. But conviction is not the end of the story; it is the doorway into grace. The pastor who leads people through conviction to joy &mdash; who can say, as Nehemiah did, &ldquo;this day is holy; do not be grieved; go, eat with gladness and share with others&rdquo; &mdash; is giving his congregation the full gospel. Conviction that leads nowhere but sorrow is law; conviction that leads to joy in God is the gospel at work.",
      "The discovery and celebration of the Feast of Booths speaks to the power of recovered practices in the Christian community. There are dimensions of Christian worship and practice that many churches have neglected &mdash; the reading of large portions of Scripture aloud, extended prayer, fasting, the celebration of the church calendar, the regular corporate confession of sin &mdash; that, when recovered, bring something ancient and nourishing back into the community&rsquo;s life. The question Nehemiah 8 poses to every church is: what have we stopped doing that God commanded us to do? And what would happen if we started again?",
      "Finally, the joy that pervades the closing verses of Nehemiah 8 is a needed corrective to a Christianity that has become grim, anxious, or performance-driven. &ldquo;The joy of the LORD is your strength&rdquo; is not a slogan for the self-help shelf; it is a theological declaration about the nature of God&rsquo;s kingdom and the resource available to his people. Joy is not a luxury or a personality trait; it is a fruit of the Spirit and a mark of the community that is living in the light of God&rsquo;s grace. The community that understands God&rsquo;s Word, that has been convicted by it and released into joy by the gospel, is a community that has strength for the long and difficult work of faithfulness in the world.",
    ],
  },
];

const videoItems = [
  { videoId: "XAHOFuBhKj8", title: "Nehemiah 8 - Ezra Reads the Law and the People Weep" },
  { videoId: "1qvGWx-JTDI", title: "BibleProject - Overview of Ezra-Nehemiah" },
  { videoId: "4YFqKfpXfMA", title: "The Feast of Booths - Understanding the Fall Feasts of Israel" },
  { videoId: "8HVEeGPVAK8", title: "The Joy of the LORD Is Your Strength - Nehemiah 8 Study" },
];

export default function Nehemiah8GuidePage() {
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
            Nehemiah 8 &mdash; The Word Restored
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Ezra reads the Book of the Law to the returned exiles, the Levites explain its meaning, the people weep and then rejoice, and the forgotten Feast of Booths is celebrated for the first time since Joshua &mdash; &ldquo;the joy of the LORD is your strength.&rdquo;
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Nehemiah 8 through these video teachings on Ezra&rsquo;s reading of the Law, the weeping and joy of the returned exiles, and the celebration of the Feast of Booths.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Joy of the LORD Is Your Strength</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Nehemiah 8 shows that the renewal of God&rsquo;s people begins with the recovery of God&rsquo;s Word. When the returned exiles heard the Law read, understood it, wept over it, and then feasted in holy joy, they were not merely performing a ritual &mdash; they were being reconstituted as the covenant people of God. The same pattern holds for every generation: hear the Word, understand it, let it break you open, and then receive the joy that comes not from your own strength but from the LORD who gave his Law as a gift of love.
          </p>
        </div>
      </main>
    </div>
  );
}
