"use client";

import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "AzmYV8GNAIM", title: "Romans Overview (Chapters 1-4)" },
  { videoId: "0SVTl4Xa5fY", title: "Romans Overview (Chapters 5-16)" },
  { videoId: "Cus-z1hgAXw", title: "Faith Comes by Hearing - Romans 10" },
  { videoId: "iVwauTiyFjM", title: "The Word of Faith and the Call to All" },
];

const THEME_ITEMS = [
  {
    color: GOLD,
    title: "Zeal Without Knowledge",
    body: "Paul opens with a confession of his own heart: his deepest desire and prayer to God is for the salvation of his kinsmen Israel (10:1). He grants them a genuine and earnest religious zeal, but a zeal that is &ldquo;not according to knowledge&rdquo; (10:2). This is one of the most sobering diagnoses in all of Scripture, because it shows that sincerity, intensity, and devotion are not enough if they are aimed at the wrong object. A misdirected zeal can be as ruinous as outright indifference, for it builds an entire life of effort upon a foundation that God never laid.",
  },
  {
    color: GREEN,
    title: "Christ the End (Telos) of the Law",
    body: "The pivot of the chapter is verse 4: &ldquo;Christ is the end of the law for righteousness to everyone who believes.&rdquo; The Greek word telos carries the dual sense of termination and goal, of finish line and intended purpose. Christ is both the place where the law&rsquo;s demand for righteousness comes to rest and the very aim toward which the law was always pointing. The law was never an alternate road to acceptance with God; it was a signpost whose every command and sacrifice anticipated the One who would fulfill it perfectly on our behalf.",
  },
  {
    color: PURPLE,
    title: "The Nearness of the Word of Faith",
    body: "Drawing on Deuteronomy 30, Paul insists that the righteousness of faith does not require an impossible ascent into heaven or a descent into the abyss (10:6-7). What seemed unreachable has been brought near: &ldquo;The word is near you, in your mouth and in your heart&rdquo; (10:8). Salvation is not a distant treasure guarded by heroic religious achievement; it is a gift already placed within reach by God himself. The gospel humbles human pride precisely because it removes every ladder we might climb and simply asks us to receive what God has done.",
  },
  {
    color: TEAL,
    title: "Confession and Belief",
    body: "The great confession of verses 9 and 10 joins the mouth and the heart: &ldquo;If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.&rdquo; The two are not two separate conditions but two aspects of one saving response &mdash; inward trust that overflows into public testimony. To name Jesus as Lord (Kyrios) was, in the first century, to assign him the very title the Greek Old Testament used for God himself. The earliest Christian creed was therefore not a slogan but a confession of allegiance that could cost a believer everything.",
  },
  {
    color: ROSE,
    title: "The Universal Call",
    body: "Quoting Joel 2:32, Paul declares that &ldquo;everyone who calls on the name of the Lord will be saved&rdquo; (10:13). The word everyone shatters every wall: &ldquo;there is no distinction between Jew and Greek; for the same Lord is Lord of all, bestowing his riches on all who call on him&rdquo; (10:12). The promise once spoken of calling on Yahweh is now applied directly to Jesus, a stunning testimony to his deity. No ethnicity, no moral history, and no social status places a person beyond the reach of this open invitation.",
  },
  {
    color: GOLD,
    title: "Faith Comes by Hearing",
    body: "Paul then traces the logical chain that makes this universal call effective in the world (10:14-15). People cannot call on one they have not believed; they cannot believe in one they have not heard; they cannot hear without someone preaching; and no one preaches unless sent. The conclusion crowns the argument: &ldquo;faith comes from hearing, and hearing through the word of Christ&rdquo; (10:17). The Greek word akoe ties faith directly to the proclaimed message, making the sending of preachers the indispensable engine of God&rsquo;s saving purpose among the nations.",
  },
];

const VERSE_ITEMS = [
  {
    ref: "Romans 10:1-2",
    heading: "A Pastor's Prayer for the Lost",
    body: "Paul has just concluded the agonized argument of chapter 9 about Israel&rsquo;s hardening, and lest anyone think his doctrine has cooled his love, he opens chapter 10 with the warmth of intercession. &ldquo;Brothers, my heart&rsquo;s desire and prayer to God for them is that they may be saved&rdquo; (10:1). His grief is not detached theological commentary but a wound he carries before God. He affirms that the Jews &ldquo;have a zeal for God, but not according to knowledge&rdquo; (10:2), honoring their earnestness while naming its tragic flaw with surgical honesty.",
  },
  {
    ref: "Romans 10:3-4",
    heading: "Their Own Righteousness Versus God's",
    body: "Being &ldquo;ignorant of the righteousness of God,&rdquo; Israel &ldquo;sought to establish their own&rdquo; and so &ldquo;did not submit to God&rsquo;s righteousness&rdquo; (10:3). The verb submit reveals that self-righteousness is finally a posture of pride, a refusal to bow to a gift one cannot earn. Then comes the thunderclap of verse 4: &ldquo;Christ is the end of the law for righteousness to everyone who believes.&rdquo; The endless striving of the law-keeper meets its terminus in Christ, who supplies the very righteousness the law demanded but could never produce in sinful flesh.",
  },
  {
    ref: "Romans 10:5-8",
    heading: "Two Righteousnesses Contrasted",
    body: "Paul sets two voices side by side. The righteousness of the law, quoting Leviticus 18:5, says, &ldquo;The person who does the commandments shall live by them&rdquo; &mdash; a way of doing that demands flawless obedience. The righteousness of faith, borrowing the cadence of Deuteronomy 30:12-14, says, &ldquo;Do not say in your heart, Who will ascend into heaven? or Who will descend into the abyss?&rdquo; (10:6-7). The point is that Christ has already come down and already risen, so no human expedition is required. &ldquo;The word is near you, in your mouth and in your heart&rdquo; (10:8): the gospel of faith we proclaim.",
  },
  {
    ref: "Romans 10:9-10",
    heading: "The Great Confession",
    body: "Here Paul gives the clearest formula of saving faith in the New Testament: &ldquo;If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved&rdquo; (10:9). Verse 10 unfolds the rhythm: &ldquo;for with the heart one believes and is justified, and with the mouth one confesses and is saved.&rdquo; Heart and mouth, belief and confession, the inward reality and its outward voice are bound together as one whole response. To call Jesus Lord is to surrender to him as the risen King who reigns over all of life.",
  },
  {
    ref: "Romans 10:11-13",
    heading: "No Distinction, No Exception",
    body: "Paul stacks two Scriptures to seal the promise. From Isaiah 28:16 he draws, &ldquo;Everyone who believes in him will not be put to shame&rdquo; (10:11), and from Joel 2:32, &ldquo;Everyone who calls on the name of the Lord will be saved&rdquo; (10:13). Between them he states the principle plainly: there is &ldquo;no distinction between Jew and Greek; for the same Lord is Lord of all, bestowing his riches on all who call on him&rdquo; (10:12). The riches of God are not rationed by pedigree; they pour out on every empty hand lifted to the Lord.",
  },
  {
    ref: "Romans 10:14-15",
    heading: "The Chain of Salvation",
    body: "From the promise that everyone who calls will be saved, Paul reasons backward through four linked questions. How will they call on one in whom they have not believed? How believe in one of whom they have never heard? How hear without someone preaching? And how preach unless they are sent? (10:14-15). Each link presupposes the one before it, exposing the missionary logic embedded in the gospel itself. He crowns it with Isaiah 52:7: &ldquo;How beautiful are the feet of those who preach the good news,&rdquo; dignifying the humble messenger who carries the saving word.",
  },
  {
    ref: "Romans 10:16-17",
    heading: "Faith Comes From Hearing",
    body: "Not all who hear obey, and Paul concedes this with Isaiah 53:1: &ldquo;Lord, who has believed what he heard from us?&rdquo; (10:16). Hearing the message is necessary but not automatically effective; the seed must fall on receptive soil. Yet the principle still stands as the great charter of preaching: &ldquo;So faith comes from hearing, and hearing through the word of Christ&rdquo; (10:17). Faith is never self-generated; it is awakened by the proclaimed word about Christ, which is why God ordains messengers and entrusts to them the ordinary means of an extraordinary grace.",
  },
  {
    ref: "Romans 10:18-21",
    heading: "Israel's Culpable Unbelief",
    body: "Paul closes by removing every excuse. Have they not heard? Indeed they have, for the word has gone out to the ends of the earth (10:18, quoting Psalm 19). Did Israel not understand? Moses and Isaiah foretold that God would provoke them through a people who were not seeking him, while the nations who did not ask for him would find him (10:19-20). The chapter ends with the heartbreaking image of Isaiah 65:2: &ldquo;All day long I have held out my hands to a disobedient and contrary people&rdquo; (10:21). God is not the reluctant party; he is the patient, outstretched-armed Father.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: GREEN,
    title: "Examine the Aim of Your Zeal",
    body: "Romans 10 confronts the comfortable assumption that earnestness alone pleases God. Israel was passionate, disciplined, and devout, yet their zeal missed its mark because it was &ldquo;not according to knowledge&rdquo; (10:2). The believer must ask whether religious energy is being poured into self-justification or into glad submission to the righteousness God provides. A faith aimed at impressing God by performance is a faith that has not yet understood the gospel, however fervent it may feel.",
  },
  {
    color: PURPLE,
    title: "Rest in the Nearness of the Word",
    body: "Many sincere people exhaust themselves trying to ascend to a God they imagine to be distant and demanding. Paul&rsquo;s answer is that the word is already near, in the mouth and in the heart (10:8), because Christ has already descended and risen. The Christian life does not begin with a heroic climb but with the empty-handed reception of what God has brought near. Assurance grows not by measuring our spiritual achievements but by resting in the finished work that the gospel announces.",
  },
  {
    color: TEAL,
    title: "Confess Jesus as Lord Out Loud",
    body: "The pairing of heart-belief and mouth-confession in verses 9 and 10 dignifies public testimony as part of the normal shape of faith. To confess &ldquo;Jesus is Lord&rdquo; is to declare an allegiance that reorders every loyalty, and in many places it remains a costly thing to say. Private conviction that never becomes spoken confession is incomplete; the gospel was always meant to be voiced, sung, and owned before others. Believers are called to let the inward reality break the surface into open, unashamed words.",
  },
  {
    color: ROSE,
    title: "Carry the Beautiful Feet",
    body: "The logical chain of verses 14 and 15 turns every Christian into a stakeholder in mission. If faith comes by hearing, and hearing requires a preacher, and preaching requires sending, then the church cannot be passive about the spread of the gospel. Some are called to go, and all are called to send, pray, and proclaim within their own reach. The promise that everyone who calls will be saved is not merely a comfort to keep but a commission to obey, for there are still many who have never heard.",
  },
];

const REFLECTION_QUESTIONS = [
  "Where in your life might you have zeal for God that is not yet shaped by the knowledge of his righteousness?",
  "What does it mean for you that Christ is the end, or goal, of the law, and how does that change the way you relate to God's commands?",
  "Have you allowed your inward belief to become an outward confession that Jesus is Lord, even when it is costly?",
  "If faith comes by hearing, who in your life still needs to hear the word of Christ, and what part might God be calling you to play?",
  "How does the image of God all day long holding out his hands to a disobedient people reshape your view of his patience toward you?",
];

export default function Romans10GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* Hero */}
      <header
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 2rem",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: GOLD,
            border: `1px solid ${BORDER}`,
            borderRadius: "999px",
            padding: "0.4rem 1rem",
            marginBottom: "1.5rem",
          }}
        >
          Chapter Guide
        </span>
        <h1
          style={{
            fontSize: "2.6rem",
            lineHeight: 1.15,
            margin: "0 0 1rem",
            fontWeight: 700,
          }}
        >
          Romans 10
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: MUTED,
            margin: "0 0 1.5rem",
            fontStyle: "italic",
          }}
        >
          The Word of Faith and the Universal Call
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            color: TEXT,
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
          dangerouslySetInnerHTML={{
            __html:
              "&ldquo;For with the heart one believes and is justified, and with the mouth one confesses and is saved. For everyone who calls on the name of the Lord will be saved.&rdquo; &mdash; Romans 10:10, 13",
          }}
        />
      </header>

      {/* Sticky tab nav */}
      <nav
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
          background: `${BG}EE`,
          backdropFilter: "blur(8px)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.75rem 1rem",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? GREEN : "transparent",
                color: activeTab === tab.id ? "#FFFFFF" : MUTED,
                border: `1px solid ${activeTab === tab.id ? GREEN : BORDER}`,
                borderRadius: "999px",
                padding: "0.5rem 1.1rem",
                fontSize: "0.95rem",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem 1rem",
        }}
      >
        {/* Overview */}
        {activeTab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: GOLD }}>
              The Heart of the Gospel Laid Bare
            </h2>
            <p
              style={{ lineHeight: 1.75, fontSize: "1.05rem", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "Romans 10 stands at the emotional and theological center of Paul&rsquo;s long meditation on Israel that spans chapters 9 through 11. Having wrestled in chapter 9 with the sovereignty of God in election, Paul now turns to the responsibility of human beings to believe, and he does so with the tenderness of a man whose own people are perishing. The chapter holds together two truths that the human mind struggles to keep in one hand: that God ordains salvation and that people must call upon him to be saved. It is here that Paul gives us the simplest and most quoted formula of saving faith in all his letters.",
              }}
            />
            <p
              style={{ lineHeight: 1.75, fontSize: "1.05rem", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "The argument moves with relentless logic from the diagnosis of Israel&rsquo;s misdirected zeal to the announcement that Christ is the end of the law, from the nearness of the word of faith to the great confession of the lips and the heart. It then opens outward to embrace the whole world: everyone who calls on the name of the Lord will be saved, with no distinction between Jew and Greek. The chapter does not let this remain an abstraction but presses on to ask how such calling can happen at all, building the famous chain that grounds the entire missionary enterprise of the church.",
              }}
            />
            <h3 style={{ fontSize: "1.35rem", marginTop: "2rem", color: TEAL }}>
              Why This Chapter Matters
            </h3>
            <p
              style={{ lineHeight: 1.75, fontSize: "1.05rem", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "Few chapters have shaped Christian evangelism and personal assurance as deeply as this one. Generation after generation has come to faith by hearing verses 9 and 13 read aloud, and countless missionaries have been sent out under the banner of the beautiful feet of verse 15. The chapter refuses to let salvation become either a private mysticism or a tribal possession; it is near, it is spoken, and it is for everyone. To study Romans 10 is to stand at the spring from which the river of gospel proclamation has flowed for two thousand years.",
              }}
            />
            <p
              style={{ lineHeight: 1.75, fontSize: "1.05rem", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "At the same time the chapter is profoundly sobering, for it ends not in triumph but in the image of God stretching out his hands all day long to a people who will not come. Israel&rsquo;s unbelief is not blamed on ignorance, for they heard and understood; it is laid at the door of a disobedience that turned away from grace. The believer reads this with trembling gratitude, knowing that the same outstretched hands have welcomed them in, and with renewed urgency for those who still stand at a distance.",
              }}
            />
          </section>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: GOLD }}>
              Key Themes of Romans 10
            </h2>
            <p
              style={{ lineHeight: 1.7, fontSize: "1.05rem", color: MUTED }}
              dangerouslySetInnerHTML={{
                __html:
                  "Six interlocking themes carry the weight of the chapter, moving from the failure of self-righteous zeal to the triumphant logic of gospel proclamation. Each one rewards careful meditation, for together they form a complete account of how God saves and how that salvation reaches the world.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.75rem" }}>
              {THEME_ITEMS.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `4px solid ${item.color}`,
                    borderRadius: "10px",
                    padding: "1.4rem 1.6rem",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.6rem", fontSize: "1.3rem", color: item.color }}>
                    {item.title}
                  </h3>
                  <p
                    style={{ margin: 0, lineHeight: 1.7, fontSize: "1.02rem", color: TEXT }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Verse by Verse */}
        {activeTab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: GOLD }}>
              Verse by Verse Through Romans 10
            </h2>
            <p
              style={{ lineHeight: 1.7, fontSize: "1.05rem", color: MUTED }}
              dangerouslySetInnerHTML={{
                __html:
                  "Walking through the chapter section by section reveals how tightly Paul has woven his argument, drawing on Leviticus, Deuteronomy, Joel, Isaiah, and the Psalms to build a case that is both deeply biblical and inescapably personal.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.75rem" }}>
              {VERSE_ITEMS.map((item) => (
                <div
                  key={item.ref}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "10px",
                    padding: "1.5rem 1.7rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: PURPLE,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.ref}
                  </span>
                  <h3 style={{ margin: "0 0 0.7rem", fontSize: "1.35rem", color: TEXT }}>
                    {item.heading}
                  </h3>
                  <p
                    style={{ margin: 0, lineHeight: 1.75, fontSize: "1.03rem", color: TEXT }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: GOLD }}>
              Living Out Romans 10
            </h2>
            <p
              style={{ lineHeight: 1.7, fontSize: "1.05rem", color: MUTED }}
              dangerouslySetInnerHTML={{
                __html:
                  "The truths of Romans 10 are not meant to remain on the page; they press upon the conscience, the lips, and the feet of every believer. Here are four ways the chapter calls us to respond.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.75rem" }}>
              {APPLICATION_ITEMS.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `4px solid ${item.color}`,
                    borderRadius: "10px",
                    padding: "1.4rem 1.6rem",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.6rem", fontSize: "1.3rem", color: item.color }}>
                    {item.title}
                  </h3>
                  <p
                    style={{ margin: 0, lineHeight: 1.7, fontSize: "1.02rem", color: TEXT }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "2.5rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "12px",
                padding: "1.8rem 1.8rem 1.4rem",
              }}
            >
              <h3 style={{ margin: "0 0 1rem", fontSize: "1.4rem", color: GOLD }}>
                Reflection Questions
              </h3>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", color: TEXT }}>
                {REFLECTION_QUESTIONS.map((q, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: "0.9rem", lineHeight: 1.65, fontSize: "1.02rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>
          </section>
        )}
      </main>

      {/* Always-visible video section */}
      <section
        style={{
          maxWidth: "880px",
          margin: "1.5rem auto 0",
          padding: "2.5rem 1.5rem 4rem",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: TEAL, textAlign: "center" }}>
          Watch and Go Deeper
        </h2>
        <p
          style={{ lineHeight: 1.7, fontSize: "1.05rem", color: MUTED, textAlign: "center", maxWidth: "620px", margin: "0 auto 2rem" }}
          dangerouslySetInnerHTML={{
            __html:
              "These teaching videos open up the message of Romans and the call of chapter 10. Use them alongside your own reading and prayer.",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {videoItems.map((video) => (
            <div
              key={video.videoId}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <VideoEmbed videoId={video.videoId} title={video.title} />
              <p
                style={{
                  margin: 0,
                  padding: "0.9rem 1.1rem",
                  fontSize: "0.98rem",
                  color: TEXT,
                  lineHeight: 1.5,
                }}
              >
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
