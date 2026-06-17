"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const videoItems = [
  { id: "cM3nWaBpJ7f", title: "Isaiah 60 - Arise Shine for Your Light Has Come" },
  { id: "dN8oCbQqK2g", title: "The Glory of the LORD Rises Upon You - Isaiah 60 Study" },
  { id: "eO1pDcRrL5h", title: "Isaiah 60 Verse by Verse - Nations Come to Your Light" },
  { id: "fP6qEdSsM9i", title: "Isaiah 60 Explained - The Eternal City of God" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const keyThemes = [
  {
    id: "t1",
    color: "#D97706",
    title: "Arise and Shine",
    body: "The command is addressed directly to the people of God: &quot;Arise, shine.&quot; While God&apos;s glory comes upon them from outside &mdash; as gift, not achievement &mdash; they have a responsive action: to arise from their diminished posture and reflect the light they have received. The church is called to visibility in a dark world. Matthew 5:16 echoes this exactly: &quot;Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.&quot; The arising is not self-promotion but faithful responsiveness to the light that has already come. The light is derivative &mdash; it comes from the glory of the LORD rising upon them &mdash; but it is genuinely theirs to carry.",
  },
  {
    id: "t2",
    color: "#a78bfa",
    title: "Darkness and Glory Contrasted",
    body: "&quot;See, darkness covers the earth and thick darkness is over the peoples, but the LORD rises upon you and his glory appears over you&quot; (v. 2). The global darkness makes the divine light more spectacular rather than threatening it. God&apos;s glory is not competed with or dimmed by surrounding darkness &mdash; it is displayed against it. The contrast structure of the verse is deliberate: the worse the surrounding darkness, the more brilliant the light of God&apos;s presence appears. This is a word for the church in seasons when the cultural darkness seems overwhelming. The darkness is real and acknowledged; but the LORD&apos;s rising is more real and more certain.",
  },
  {
    id: "t3",
    color: "#3a7d56",
    title: "The Nations Streaming to Zion",
    body: "Kings come bearing gifts, the wealth of nations arrives, ships bring gold and silver, camels bearing incense from Sheba come proclaiming the praise of the LORD. This fulfills the Abrahamic promise that all nations would be blessed through Israel (Genesis 12:3). It anticipates Revelation 21:24-26 where the nations bring their glory and honor into the new Jerusalem. The missionary force of this passage is universal: the light of God is not a private possession but a public invitation. Isaiah 60 sees a centripetal movement &mdash; nations streaming inward toward the light &mdash; that complements the centrifugal mission of Isaiah 52 where heralds go outward with the news.",
  },
  {
    id: "t4",
    color: "#0D9488",
    title: "The LORD as Everlasting Light",
    body: "&quot;The sun will no more be your light by day, nor will the brightness of the moon shine on you, for the LORD will be your everlasting light, and your God will be your glory&quot; (v. 19). The created luminaries yield to the uncreated Light. This is the eschatological reality &mdash; creation&apos;s purpose finally fulfilled in the Creator&apos;s immediate presence. Revelation 21:23 quotes this verse directly: &quot;The city does not need the sun or the moon to shine on it, for the glory of God gives it light, and the Lamb is its lamp.&quot; The sun and moon, which have served creation so faithfully, are not destroyed but superseded by a greater light. The days of sorrow end when this light comes permanently.",
  },
  {
    id: "t5",
    color: "#E11D48",
    title: "The Least Becoming a Thousand",
    body: "&quot;The least of you will become a thousand, the smallest a nation; I am the LORD; in its time I will do this swiftly&quot; (v. 22). God specializes in multiplication from small and despised beginnings. The mustard seed principle (Matthew 13:31) echoes this promise directly: what begins as the smallest of seeds becomes large enough for birds to nest in its branches. The remnant theology of the Old Testament finds its fulfillment in the explosive growth of the gospel among the nations. The promise carries a divine signature &mdash; &quot;I am the LORD&quot; &mdash; that makes it unconditional, and a divine timetable &mdash; &quot;in its time&quot; &mdash; that makes it certain even if not yet visible.",
  },
];

const verses = [
  {
    id: "v1",
    ref: "vv. 1-3",
    color: "#D97706",
    body: "Arise, shine, for your light has come, and the glory of the LORD rises upon you. See, darkness covers the earth and thick darkness is over the peoples, but the LORD rises upon you and his glory appears over you. Nations will come to your light, kings to the brightness of your dawn. The chapter opens with two imperative verbs &mdash; &quot;arise&quot; and &quot;shine&quot; &mdash; addressed to Zion. The light has already come; the command is to respond to it. The grammar is significant: the light is not something Zion must generate but something that has arrived and now shines upon her. The twofold reference to glory rising both upon the individual and over the community signals comprehensiveness. Nations and kings are drawn not by compulsion but by the attractiveness of the light itself.",
  },
  {
    id: "v2",
    ref: "vv. 4-7",
    color: "#3a7d56",
    body: "Lift up your eyes and look about you; all assemble and come to you; your sons come from afar; your daughters are carried on the hip. Then you will look and be radiant; your heart will throb and swell with joy. The wealth of the seas will be brought to you; the riches of the nations will come; herds of camels will cover your land, camels from Midian and Ephah; all from Sheba will come bearing gold and incense and proclaiming the praise of the LORD. The vision of gathering is comprehensive &mdash; the scattered children return, and with them come the resources of the nations. The emotional language of verse 5 is striking: Zion will look and be radiant, her heart will throb and swell. The worship that accompanies the wealth &mdash; proclaiming the praise of the LORD &mdash; indicates that the nations are coming not merely to pay tribute but to honor God himself.",
  },
  {
    id: "v3",
    ref: "vv. 8-9",
    color: "#6B4FBB",
    body: "Who are these that fly along like clouds, like doves to their nests? Surely the islands look to me; in the lead are the ships of Tarshish, bringing your children from afar, with their silver and gold, to the honor of the LORD your God, the Holy One of Israel, for he has endowed you with splendor. The rhetorical question &quot;Who are these?&quot; captures the astonishment of the observer watching an unprecedented gathering. The simile of doves returning to their nests suggests both homing instinct and the peace of arrival. Tarshish, representing the far western extremity of the known world, brings its wealth. The phrase &quot;to the honor of the LORD your God&quot; frames the entire economic and demographic movement as ultimately an act of divine glorification.",
  },
  {
    id: "v4",
    ref: "vv. 10-12",
    color: "#0D9488",
    body: "Foreigners will rebuild your walls; their kings will serve you; for in my wrath I struck you, but in my favor I will show you compassion. Your gates will always stand open; they will never be shut, day or night, so that people may bring you the wealth of nations &mdash; their kings led in triumphal procession. For the nation or kingdom that will not serve you will perish; it will be utterly ruined. The former oppressors now become builders of Zion. The gates that were shut in siege now stand permanently open &mdash; a reversal so complete that the very symbol of defeat becomes the symbol of endless hospitality and abundant welcome. The theological explanation is given: God&apos;s past wrath was real, but his favor now overflows. The open gates of the city are a powerful image for the church&apos;s calling to radical welcome.",
  },
  {
    id: "v5",
    ref: "vv. 13-16",
    color: "#E11D48",
    body: "The glory of Lebanon will come to you &mdash; the juniper, the fir and the cypress together &mdash; to adorn my sanctuary; and I will glorify the place where my feet rest. The children of your oppressors will come bowing before you; all who despise you will bow down at your feet and call you the City of the LORD, Zion of the Holy One of Israel. You will know that I, the LORD, am your Savior, your Redeemer, the Mighty One of Jacob. The materials of the finest temples come to adorn God&apos;s sanctuary. The reversal of social status is total: those who once oppressed bow before Zion. The accumulation of divine titles in verse 16 &mdash; Savior, Redeemer, Mighty One of Jacob &mdash; represents a theological climax. These are the names God has been known by throughout Israel&apos;s history; now their meaning is fully demonstrated.",
  },
  {
    id: "v6",
    ref: "vv. 17-20",
    color: "#a78bfa",
    body: "Instead of bronze I will bring you gold; instead of iron I will bring you silver; instead of wood, bronze; instead of stones, iron. I will make peace your governor and well-being your ruler. No longer will violence be heard in your land, nor ruin or destruction within your borders; but you will call your walls Salvation and your gates Praise. The sun will no more be your light by day, nor will the brightness of the moon shine on you, for the LORD will be your everlasting light, and your God will be your glory. The escalating substitutions &mdash; bronze for gold, iron for silver &mdash; represent divine extravagance replacing human poverty. The naming of the walls Salvation and the gates Praise anticipates the new Jerusalem of Revelation 21. The culminating verse about the LORD as everlasting light is one of the most quoted in the entire book of Revelation.",
  },
  {
    id: "v7",
    ref: "vv. 21-22",
    color: "#3a7d56",
    body: "Then all your people will be righteous and they will possess the land forever; they are the shoot I have planted, the work of my hands for the display of my splendor. The least of you will become a thousand, the smallest a nation; I am the LORD; in its time I will do this swiftly. The final verses bring the chapter to a remarkable conclusion. The righteousness of all the people is not achieved but bestowed &mdash; they are the shoot the LORD has planted, the work of his hands. The multiplication promise &mdash; the least becoming a thousand &mdash; grounds all the preceding visions in the faithfulness of God who multiplies from small beginnings. The closing divine signature &quot;I am the LORD&quot; seals every promise in the chapter as absolutely certain.",
  },
];

const appPoints = [
  {
    id: "a1",
    color: "#D97706",
    title: "Arise from Spiritual Smallness",
    body: "The command &quot;Arise, shine&quot; addresses a posture problem before a performance problem. Many Christians live in a diminished, hunched posture &mdash; as if the light has not yet come. But the grammar of Isaiah 60:1 is clear: the light has already arrived. The arising is a response to a completed event, not a preparation for a future one. Where have you been living smaller than the light that has come upon you? Ask God to show you one area where you need to stand up, square your shoulders, and live in the full stature of the gospel you carry.",
  },
  {
    id: "a2",
    color: "#a78bfa",
    title: "Do Not Be Paralyzed by Surrounding Darkness",
    body: "Isaiah 60:2 acknowledges the darkness directly &mdash; it does not minimize or deny it. &quot;Thick darkness is over the peoples.&quot; This is honest realism about the world. But the verse immediately pivots: &quot;but the LORD rises upon you.&quot; The darkness around you does not diminish the light upon you. In fact, the darker the context, the more vivid the contrast. When you are tempted to withdraw because the cultural darkness seems overwhelming, return to this logic: your visibility as a light-bearer matters most precisely when the darkness is thickest. Do not retreat; arise and shine.",
  },
  {
    id: "a3",
    color: "#3a7d56",
    title: "Pray for Nations to Stream to Christ&apos;s Light",
    body: "The movement of nations toward the light in Isaiah 60 is not accidental &mdash; it is a response to the radiance of a community that has received and reflects God&apos;s glory. Missional prayer is grounded in this passage. Pray specifically for nations, not merely for generic &quot;lost people.&quot; Ask God to draw kings and peoples toward the light of the gospel. The Abrahamic promise that all nations would be blessed through Israel is fulfilled in Christ, who is the true light; and the church, which reflects his glory, becomes the instrument through which the nations are drawn.",
  },
  {
    id: "a4",
    color: "#0D9488",
    title: "Open Your Life with the Gates of the City",
    body: "The image of gates standing open day and night (v. 11) is one of radical hospitality. In the ancient world, gates were shut at night for protection. Open gates meant vulnerability. But Zion&apos;s open gates are not careless &mdash; they reflect the security of a city protected by God himself. How open are you to those seeking God? Are there people you have implicitly closed the gate on &mdash; because of their background, their questions, their mess, their difference from you? The city of God in Isaiah 60 practices unlimited welcome because its security is in the LORD, not in selective admission.",
  },
  {
    id: "a5",
    color: "#E11D48",
    title: "Let God Replace Your Diminished Resources",
    body: "The pattern of substitution in verses 17-18 &mdash; gold for bronze, silver for iron &mdash; speaks to the way God replaces inadequate provision with overflowing abundance. What area of your ministry, your vocation, your family life feels like bronze when you need gold? Bring it before God not as a complaint but as a faith-statement: you serve a God who upgrades. The escalation is not about material wealth but about the quality of divine provision replacing human limitation. Where you have been operating on human resources, invite the divine substitution.",
  },
  {
    id: "a6",
    color: "#6B4FBB",
    title: "Trust That Small Beginnings Yield a Thousand",
    body: "The closing promise of Isaiah 60 &mdash; &quot;the least of you will become a thousand, the smallest a nation&quot; &mdash; is the mustard seed principle written large. Do not despise the day of small things. The remnant that returned from exile was tiny. The band of disciples that Jesus sent into the world was small. The early church looked insignificant. But God&apos;s mathematics are different from ours &mdash; he multiplies from the least and the smallest. Your faithful witness in a small sphere, your consistent love in an ordinary neighborhood, your persistent prayer for one person: these are not inadequate. They are the seeds from which a thousand grows.",
  },
];

export default function Isaiah60GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  function toggleAccordion(id: string) {
    setOpenAccordion((prev) => (prev === id ? null : id));
  }

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: "#07070F",
        minHeight: "100vh",
        color: "#F2F2F8",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* -- HERO ------------------------------------------------------- */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(217,119,6,0.16) 0%, rgba(13,148,136,0.09) 55%, transparent 100%)",
          padding: "72px 24px 56px",
          textAlign: "center",
          borderBottom: "1px solid #1E1E32",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(217,119,6,0.12)",
            border: "1px solid rgba(217,119,6,0.30)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              color: "#D97706",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            BIBLE STUDY GUIDE
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "16px",
            color: "#F2F2F8",
          }}
        >
          Isaiah 60
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "#9898B3",
            lineHeight: 1.6,
            maxWidth: "640px",
            margin: "0 auto 12px",
          }}
        >
          Arise, Shine, for Your Light Has Come
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#6B6B88",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          22 verses &mdash; Expository Study with Video, Commentary, and Application
        </p>
      </section>

      {/* -- TAB BAR ---------------------------------------------------- */}
      <div
        style={{
          background: "#12121F",
          borderBottom: "1px solid #1E1E32",
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            gap: "0",
            overflowX: "auto",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab ? "3px solid #D97706" : "3px solid transparent",
                color: activeTab === tab ? "#D97706" : "#9898B3",
                cursor: "pointer",
                fontFamily: "system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: activeTab === tab ? 700 : 500,
                padding: "16px 20px",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* -- MAIN CONTENT ----------------------------------------------- */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 100px" }}>

        {/* -- VIDEO GRID ---------------------------------------------- */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#D97706",
              marginBottom: "24px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            VIDEO TEACHING
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "20px",
            }}
          >
            {videoItems.map((v) => (
              <div
                key={v.id}
                style={{
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <VideoEmbed videoId={v.id} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <p
                    style={{
                      color: "#F2F2F8",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: 1.45,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {v.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -- OVERVIEW TAB -------------------------------------------- */}
        {activeTab === "Overview" && (
          <section>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderLeft: "4px solid #D97706",
                borderRadius: "16px",
                padding: "40px 40px 40px 36px",
                marginBottom: "40px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 900,
                  color: "#F2F2F8",
                  marginBottom: "24px",
                  lineHeight: 1.25,
                }}
              >
                Chapter Overview
              </h2>
              <p
                style={{
                  color: "#C0C0D8",
                  fontSize: "17px",
                  lineHeight: 1.9,
                  marginBottom: "20px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 60 is one of the most radiant chapters in all of Scripture &mdash; a vision of the glorified Zion bathed in the light of God himself. The chapter opens with the famous command: &quot;Arise, shine, for your light has come, and the glory of the LORD rises upon you.&quot; While thick darkness covers the earth and its peoples, the LORD rises over his people like the dawn, and nations and kings are drawn to stream toward this light.",
                }}
              />
              <p
                style={{
                  color: "#C0C0D8",
                  fontSize: "17px",
                  lineHeight: 1.9,
                  marginBottom: "20px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The wealth of the nations pours in &mdash; flocks, herds, gold, silver, incense from Sheba. The gates of the city stand open day and night as an inexhaustible welcome. Former oppressors come bowing down. The sun and moon fade into irrelevance because the LORD himself is the everlasting light of his people. The days of sorrow end when his permanent presence replaces the temporary lights of creation.",
                }}
              />
              <p
                style={{
                  color: "#C0C0D8",
                  fontSize: "17px",
                  lineHeight: 1.9,
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 60 is a foretaste of Revelation 21 &mdash; the new Jerusalem descending, radiant with the glory of God, needing no sun because the Lamb is its lamp. The chapter closes with one of the most audacious promises in the Bible: &quot;the least of you will become a thousand, the smallest a nation; I am the LORD; in its time I will do this swiftly.&quot;",
                }}
              />
            </div>

            {/* Key Facts */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              {[
                { label: "Book", value: "Isaiah", color: "#D97706" },
                { label: "Chapter", value: "60", color: "#3a7d56" },
                { label: "Verses", value: "22", color: "#6B4FBB" },
                { label: "Genre", value: "Prophecy", color: "#0D9488" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  style={{
                    background: "#12121F",
                    border: `1px solid ${fact.color}33`,
                    borderTop: `3px solid ${fact.color}`,
                    borderRadius: "14px",
                    padding: "20px 24px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      color: "#9898B3",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      marginBottom: "8px",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {fact.label.toUpperCase()}
                  </p>
                  <p
                    style={{
                      color: fact.color,
                      fontSize: "22px",
                      fontWeight: 800,
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Revelation connections */}
            <div
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.22)",
                borderRadius: "16px",
                padding: "32px",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  color: "#a78bfa",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "16px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                REVELATION CONNECTIONS
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Revelation 21:11 &mdash; the new Jerusalem shines with the glory of God, like a jasper, clear as crystal (cf. Isaiah 60:1-2)",
                  "Revelation 21:23 &mdash; the city does not need the sun or moon, for God&apos;s glory and the Lamb are its light (cf. Isaiah 60:19-20)",
                  "Revelation 21:24-26 &mdash; the nations bring their glory into the city; the gates are never shut (cf. Isaiah 60:3, 11)",
                  "Revelation 21:27 &mdash; only the righteous enter; all your people will be righteous (cf. Isaiah 60:21)",
                  "Revelation 22:5 &mdash; the Lord God will be their light; they will reign forever (cf. Isaiah 60:20, 22)",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      color: "#C0C0D8",
                      fontSize: "15px",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        color: "#a78bfa",
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      &rsaquo;
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Key verse callout */}
            <div
              style={{
                background: "rgba(217,119,6,0.08)",
                border: "1px solid rgba(217,119,6,0.22)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  color: "#D97706",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "14px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                KEY VERSE
              </h3>
              <blockquote
                style={{
                  margin: 0,
                  borderLeft: "3px solid #D97706",
                  paddingLeft: "20px",
                }}
              >
                <p
                  style={{
                    color: "#F2F2F8",
                    fontSize: "18px",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    marginBottom: "10px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "&quot;Arise, shine, for your light has come, and the glory of the LORD rises upon you.&quot;",
                  }}
                />
                <cite
                  style={{
                    color: "#D97706",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Isaiah 60:1
                </cite>
              </blockquote>
            </div>
          </section>
        )}

        {/* -- KEY THEMES TAB ------------------------------------------ */}
        {activeTab === "Key Themes" && (
          <section>
            <p
              style={{
                color: "#9898B3",
                fontSize: "15px",
                lineHeight: 1.7,
                marginBottom: "32px",
                fontFamily: "system-ui, sans-serif",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Five major theological threads illuminate Isaiah 60. Each connects to the New Testament and to the lived experience of the church in every generation.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {keyThemes.map((theme) => {
                const isOpen = openAccordion === theme.id;
                return (
                  <div
                    key={theme.id}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(theme.id)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "20px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        textAlign: "left",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: theme.color,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            color: "#F2F2F8",
                            fontSize: "16px",
                            fontWeight: 700,
                            fontFamily: "system-ui, sans-serif",
                          }}
                          dangerouslySetInnerHTML={{ __html: theme.title }}
                        />
                      </div>
                      <span
                        style={{
                          color: theme.color,
                          fontSize: "20px",
                          fontWeight: 700,
                          flexShrink: 0,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 24px 48px",
                          borderTop: `1px solid ${theme.color}22`,
                        }}
                      >
                        <p
                          style={{
                            color: "#C0C0D8",
                            fontSize: "16px",
                            lineHeight: 1.85,
                            paddingTop: "20px",
                          }}
                          dangerouslySetInnerHTML={{ __html: theme.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Thematic chart */}
            <div
              style={{
                marginTop: "40px",
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  color: "#9898B3",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                CONTRASTS IN ISAIAH 60
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1px",
                  background: "#1E1E32",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                {[
                  { before: "Thick darkness over the peoples", after: "The LORD rises upon you" },
                  { before: "Shame and oppression", after: "Nations bow and serve" },
                  { before: "Walls in ruins", after: "Foreigners rebuild your walls" },
                  { before: "Sorrow and mourning", after: "Days of sorrow ended" },
                  { before: "Sun and moon as light", after: "The LORD as everlasting light" },
                  { before: "The least and smallest", after: "A thousand and a nation" },
                ].map((row, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#12121F",
                      padding: "14px 16px",
                      gridColumn: "span 1",
                      display: "contents",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(225,29,72,0.06)",
                        padding: "14px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: "#E11D48", fontSize: "12px", fontWeight: 800, fontFamily: "system-ui, sans-serif" }}>BEFORE</span>
                      <p
                        style={{ color: "#9898B3", fontSize: "13px", lineHeight: 1.5, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: row.before }}
                      />
                    </div>
                    <div
                      style={{
                        background: "rgba(58,125,86,0.06)",
                        padding: "14px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: "#3a7d56", fontSize: "12px", fontWeight: 800, fontFamily: "system-ui, sans-serif" }}>AFTER</span>
                      <p
                        style={{ color: "#C0C0D8", fontSize: "13px", lineHeight: 1.5, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: row.after }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* -- VERSE BY VERSE TAB -------------------------------------- */}
        {activeTab === "Verse by Verse" && (
          <section>
            <div
              style={{
                background: "rgba(217,119,6,0.07)",
                border: "1px solid rgba(217,119,6,0.18)",
                borderRadius: "14px",
                padding: "20px 24px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This section walks through all 22 verses of Isaiah 60 in grouped sections, with expository commentary on the meaning, context, and theological significance of each passage.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {verses.map((v) => {
                const isOpen = openAccordion === v.id;
                return (
                  <div
                    key={v.id}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderLeft: `4px solid ${v.color}`,
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(v.id)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "20px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          color: v.color,
                          fontSize: "15px",
                          fontWeight: 700,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {v.ref}
                      </span>
                      <span
                        style={{
                          color: v.color,
                          fontSize: "20px",
                          fontWeight: 700,
                          flexShrink: 0,
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 24px 24px",
                          borderTop: `1px solid ${v.color}22`,
                        }}
                      >
                        <p
                          style={{
                            color: "#C0C0D8",
                            fontSize: "16px",
                            lineHeight: 1.9,
                            paddingTop: "20px",
                          }}
                          dangerouslySetInnerHTML={{ __html: v.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* -- APPLICATION TAB ----------------------------------------- */}
        {activeTab === "Application" && (
          <section>
            <div
              style={{
                background: "#12121F",
                border: "1px solid #1E1E32",
                borderRadius: "16px",
                padding: "32px",
                marginBottom: "32px",
              }}
            >
              <h2
                style={{
                  color: "#F2F2F8",
                  fontSize: "22px",
                  fontWeight: 900,
                  marginBottom: "12px",
                }}
              >
                Putting Isaiah 60 Into Practice
              </h2>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "15px",
                  lineHeight: 1.75,
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 60 is not merely prophecy about a distant future &mdash; it is a present address to the people of God who carry the light of Christ into the world. These applications are drawn directly from the chapter&apos;s imagery and theology.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {appPoints.map((ap, idx) => (
                <div
                  key={ap.id}
                  style={{
                    background: "#12121F",
                    border: "1px solid #1E1E32",
                    borderRadius: "16px",
                    padding: "28px 32px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      marginBottom: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: ap.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "#07070F",
                        fontWeight: 900,
                        fontSize: "14px",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {idx + 1}
                    </div>
                    <h3
                      style={{
                        color: "#F2F2F8",
                        fontSize: "18px",
                        fontWeight: 800,
                        lineHeight: 1.3,
                        paddingTop: "4px",
                      }}
                      dangerouslySetInnerHTML={{ __html: ap.title }}
                    />
                  </div>
                  <p
                    style={{
                      color: "#C0C0D8",
                      fontSize: "15px",
                      lineHeight: 1.85,
                      paddingLeft: "48px",
                    }}
                    dangerouslySetInnerHTML={{ __html: ap.body }}
                  />
                </div>
              ))}
            </div>

            {/* Reflection questions */}
            <div
              style={{
                marginTop: "48px",
                background: "rgba(217,119,6,0.08)",
                border: "1px solid rgba(217,119,6,0.22)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  color: "#D97706",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                REFLECTION QUESTIONS
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Where have you been living in a diminished posture when the light has already come? What would it look like to arise and shine in that specific area?",
                  "How does the contrast in Isaiah 60:2 &mdash; darkness over the peoples, glory over you &mdash; change the way you see the cultural darkness around you?",
                  "Who are the &quot;nations&quot; in your sphere of life that God may be drawing toward the light through your witness? Pray for three specific people this week.",
                  "In what area of your life or ministry do you feel like the &quot;least&quot; or the &quot;smallest&quot;? How does the promise of verse 22 speak to that feeling?",
                  "The city&apos;s gates are open day and night. Who might you be unconsciously keeping outside your circle of welcome? What would it take to open the gate?",
                ].map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "#D97706",
                        fontWeight: 800,
                        flexShrink: 0,
                        fontSize: "15px",
                        fontFamily: "system-ui, sans-serif",
                        paddingTop: "2px",
                      }}
                    >
                      {i + 1}.
                    </span>
                    <p
                      style={{
                        color: "#C0C0D8",
                        fontSize: "15px",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div
              style={{
                marginTop: "48px",
                background:
                  "linear-gradient(135deg, rgba(217,119,6,0.12) 0%, rgba(13,148,136,0.08) 100%)",
                border: "1px solid rgba(217,119,6,0.22)",
                borderRadius: "20px",
                padding: "48px 40px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  color: "#F2F2F8",
                  fontSize: "26px",
                  fontWeight: 900,
                  marginBottom: "12px",
                  lineHeight: 1.25,
                }}
              >
                Continue Your Study
              </h3>
              <p
                style={{
                  color: "#9898B3",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "480px",
                  margin: "0 auto 28px",
                  fontFamily: "system-ui, sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Isaiah 60 is deeply connected to Isaiah 61 &mdash; the passage Jesus read in the Nazareth synagogue to announce the fulfillment of Isaiah&apos;s vision of light, liberty, and jubilee in himself.",
                }}
              />
              <a
                href="/bible-study"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #D97706, #F59E0B)",
                  color: "#07070F",
                  borderRadius: "12px",
                  padding: "14px 28px",
                  fontWeight: 800,
                  fontSize: "15px",
                  textDecoration: "none",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Explore More Bible Studies
              </a>
            </div>
          </section>
        )}
      </div>

      {/* -- FOOTER STRIP ----------------------------------------------- */}
      <div
        style={{
          borderTop: "1px solid #1E1E32",
          background: "#12121F",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#6B6B88",
            fontSize: "13px",
            fontFamily: "system-ui, sans-serif",
          }}
          dangerouslySetInnerHTML={{
            __html:
              "Isaiah 60 &mdash; Part of The Vine&apos;s expository Bible study series. Scripture quotations based on the NIV.",
          }}
        />
      </div>
    </div>
  );
}
