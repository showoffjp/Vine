"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

const VIDEOS = [
  {
    videoId: "a7FpHGYQvGE",
    title: "How to Share Your Faith — Practical Evangelism",
    channel: "Desiring God",
    description: "John Piper unpacks what it means to share the gospel faithfully in everyday life — addressing the fear of rejection and the confidence that comes from Christ&rsquo;s authority.",
  },
  {
    videoId: "W0O5bA7yXVo",
    title: "Evangelism and the Sovereignty of God",
    channel: "Ligonier Ministries",
    description: "R.C. Sproul examines how God&rsquo;s sovereignty is not an obstacle to evangelism but its greatest foundation — we share because God is already at work.",
  },
  {
    videoId: "MF8SKAkF7oo",
    title: "The Gospel in Six Minutes",
    channel: "The Gospel Coalition",
    description: "A concise, accessible presentation of the euangelion — the good news — covering creation, fall, redemption, and restoration for anyone learning to articulate their faith.",
  },
];

const SECTIONS = [
  {
    id: "great-commission",
    color: GREEN,
    title: "The Great Commission: Go, Therefore",
    ref: "Matthew 28:18-20",
    body: [
      "The last words of the risen Christ before his ascension are not a suggestion — they are a commission issued from one who holds all authority in heaven and on earth. &ldquo;All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.&rdquo; (Matthew 28:18-20)",
      "The grammar matters: the main verb is &ldquo;make disciples.&rdquo; &ldquo;Going,&rdquo; &ldquo;baptizing,&rdquo; and &ldquo;teaching&rdquo; are participles — they describe how disciplemaking happens. The church is not given a commission to simply announce and withdraw but to accompany people through the full journey of faith. Evangelism is the front door of a much larger house.",
      "The bookends of the commission are equally important: it begins with Christ&rsquo;s universal authority and ends with his abiding presence. We do not go in our own strength or on our own credibility — we go as ambassadors of the one who is already sovereign, already present, already at work in the hearts of those we approach.",
    ],
  },
  {
    id: "euangelion",
    color: GOLD,
    title: "Euangelion: What Is the Good News?",
    ref: "Romans 1:16; 1 Corinthians 15:3-5",
    body: [
      "The Greek word euangelion means &ldquo;good news&rdquo; — and in the first-century Roman world, it was used for the announcements of military victory and imperial proclamation. When the gospel writers and Paul chose this word, they were making a political claim: the announcement of Jesus Christ is the supreme royal proclamation, the news of a victory that outranks Caesar&rsquo;s.",
      "Paul defines the euangelion with precision in 1 Corinthians 15:3-5: &ldquo;that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures, and that he appeared to Cephas, then to the twelve.&rdquo; This is not a vague spiritual feeling but a datable, historically anchored set of events with named eyewitnesses. The gospel is news because it is about something that happened.",
      "Romans 1:16 gives the missionary force: &ldquo;For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.&rdquo; The word for power is dunamis — the root of our word &ldquo;dynamite.&rdquo; The gospel is not a moral improvement program or a set of values to adopt. It is a power — God&rsquo;s own power — that actually rescues people from the domain of darkness and transfers them into the kingdom of his beloved Son (Col 1:13).",
    ],
  },
  {
    id: "kerygma",
    color: PURPLE,
    title: "Kerygma: The Shape of Early Proclamation",
    ref: "Acts 2:14-41; Acts 17:22-34",
    body: [
      "New Testament scholars use the term kerygma (Greek: proclamation) to describe the core message the early apostles preached. C.H. Dodd identified its recurring pattern in the sermons of Acts: Jesus of Nazareth fulfilled the prophetic promises of Israel; he went about doing good and performing mighty works; he was crucified; God raised him from the dead; he is now exalted as Lord and will come again as judge; therefore, repent and receive forgiveness and the Holy Spirit.",
      "What is striking about the kerygma is its historical and public character. Peter does not preach a private religious experience. He preaches publicly verifiable events — events his hearers in Jerusalem could investigate, events with named witnesses. Christian evangelism has always made this move: from the interior (my experience) to the exterior (what God did in history for all people).",
      "The kerygma also had a clear call: repent. Evangelism that does not include the call to turn is incomplete. The good news presupposes bad news — the diagnosis of sin and its consequences — without which the remedy makes no sense. Preaching grace without naming what grace rescues from produces a Christianity without transformation.",
    ],
  },
  {
    id: "areopagus",
    color: TEAL,
    title: "Paul at the Areopagus: Contextual Witness",
    ref: "Acts 17:16-34",
    body: [
      "Acts 17 is the master class in contextual evangelism. Paul arrives in Athens — the intellectual capital of the ancient world — and instead of condemning the city, he walks through it carefully enough to notice the altar &ldquo;To the Unknown God.&rdquo; He takes their own religious yearning seriously as a starting point. He quotes their own poets — Epimenides and Aratus — not to flatter them but to show that even the best of pagan thought is reaching toward a truth only the gospel can deliver.",
      "Paul&rsquo;s Areopagus address is not a watered-down gospel — it ends with the resurrection and the call to repentance. But it begins where his hearers actually are. He meets them in their own intellectual world before inviting them into his. This is not compromise; it is the strategic wisdom of an ambassador who knows the culture he is entering.",
      "The results are instructive: some mocked, some said &ldquo;we will hear you again,&rdquo; and some believed — including Dionysius the Areopagite and a woman named Damaris. The evangelist&rsquo;s task is not to guarantee conversion but to bear faithful witness. The results belong to God. The faithfulness belongs to us.",
    ],
  },
  {
    id: "friendship",
    color: BLUE,
    title: "Friendship Evangelism vs. Proselytizing",
    ref: "John 1:41-42; Luke 19:1-10",
    body: [
      "There is a crucial difference between evangelism and proselytizing. Proselytizing treats the other person as a conversion target — a project to be completed, a soul to be won. Friendship evangelism treats the other person as a human being made in the image of God, worthy of genuine relationship first and gospel witness within that relationship. The difference is not in the message but in the posture.",
      "Andrew&rsquo;s first act after meeting Jesus is to find his brother Simon Peter and bring him. &ldquo;We have found the Messiah&rdquo; — not a formal proclamation but a natural overflow of genuine excitement, shared first with family. Most New Testament conversions happen along relational lines: household to household, friend to friend. The gospel spread through the Roman Empire not primarily through mass meetings but through the testimony of people who trusted each other.",
      "Friendship evangelism is not a technique or a strategy — it is simply being genuinely present with people who do not yet know Christ, loving them for who they are, and sharing the hope that is in you when the moment is right. The fear of manipulation is real and worth naming: the relationship must be genuine and not merely instrumental. The friend who feels befriended only for the sake of conversion will be right to feel that the friendship was a fraud.",
    ],
  },
  {
    id: "testimony",
    color: "#EF4444",
    title: "Personal Testimony and the Fear of Rejection",
    ref: "1 Peter 3:15; John 9:25",
    body: [
      "1 Peter 3:15 gives the posture of the witness: &ldquo;Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect.&rdquo; Notice what precedes the answer: people asking. The life of the Christian should be distinctive enough to provoke the question. We speak when asked — and when asked, we speak with gentleness, not a legal brief.",
      "The man born blind in John 9 offers the most disarming testimony in Scripture when the Pharisees press him on Jesus&rsquo;s identity: &ldquo;Whether he is a sinner I do not know. One thing I know: I was blind, and now I see.&rdquo; He cannot win the theological debate. He is not equipped for it. But he knows what happened to him, and no argument can take that away. Your personal testimony has this same invulnerable quality — it is your story, not a philosophical claim that can be refuted.",
      "The fear of rejection is real and should not be minimized. Jesus himself was rejected. Paul was mocked at Athens, beaten in Philippi, and run out of Thessalonica. Faithfulness in witness does not guarantee a warm reception. But the fear of rejection, when it silences us entirely, reveals that we are more concerned with our own comfort than with the one we claim to love. We share because the news is true and because the person in front of us is eternal.",
    ],
  },
];

export default function ChristianEvangelismGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const toggleSection = (id: string) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(160deg, #0e1a14 0%, ${BG} 60%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "64px 20px 56px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: `${GREEN}22`,
              border: `1px solid ${GREEN}44`,
              borderRadius: 24,
              padding: "5px 16px",
              color: GREEN,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            The Great Commission
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Christian Evangelism:
            <br />
            <span style={{ color: GREEN }}>Go and Make Disciples</span>
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 620,
              margin: "0 auto 32px",
            }}
          >
            From the euangelion that shook Rome to Paul debating philosophers on Mars Hill &mdash; what it means
            to bear faithful witness, overcome the fear of rejection, and share the hope within you.
          </p>
          <blockquote
            style={{
              background: CARD,
              border: `1px solid ${GREEN}33`,
              borderLeft: `4px solid ${GREEN}`,
              borderRadius: 10,
              padding: "18px 24px",
              margin: "0 auto",
              maxWidth: 540,
              textAlign: "left",
            }}
          >
            <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
              &ldquo;All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations.&rdquo;
            </p>
            <cite style={{ color: MUTED, fontSize: 12, fontStyle: "normal", marginTop: 8, display: "block" }}>
              Matthew 28:18&ndash;19
            </cite>
          </blockquote>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Key Concepts Strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 12,
            margin: "40px 0",
          }}
        >
          {[
            { label: "Euangelion", sub: "Good news — the core gospel", color: GOLD },
            { label: "Kerygma", sub: "The apostolic proclamation", color: PURPLE },
            { label: "Matt 28:18-20", sub: "The Great Commission", color: GREEN },
            { label: "Acts 17", sub: "Contextual witness — Athens", color: TEAL },
            { label: "1 Peter 3:15", sub: "Always be prepared", color: BLUE },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                background: CARD,
                border: `1px solid ${c.color}30`,
                borderRadius: 12,
                padding: "16px 18px",
                textAlign: "center",
              }}
            >
              <div style={{ color: c.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>
                {c.label}
              </div>
              <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Deep Sections — Accordion */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>A Biblical Theology of Evangelism</h2>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
            Six essential pillars — from the shape of the gospel to the posture of the witness. Expand each to read in depth.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SECTIONS.map((sec) => (
              <div
                key={sec.id}
                style={{
                  background: CARD,
                  border: `1px solid ${activeSection === sec.id ? sec.color + "55" : BORDER}`,
                  borderRadius: 14,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    cursor: "pointer",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div>
                    <div style={{ color: sec.color, fontWeight: 800, fontSize: 16, marginBottom: 3 }}>
                      {sec.title}
                    </div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{sec.ref}</div>
                  </div>
                  <span
                    style={{
                      color: sec.color,
                      fontSize: 26,
                      fontWeight: 300,
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {activeSection === sec.id ? "−" : "+"}
                  </span>
                </button>
                {activeSection === sec.id && (
                  <div
                    style={{
                      padding: "0 24px 28px",
                      borderTop: `1px solid ${BORDER}`,
                    }}
                  >
                    {sec.body.map((para, i) => (
                      <p
                        key={i}
                        style={{
                          color: TEXT,
                          fontSize: 14,
                          lineHeight: 1.85,
                          margin: i === 0 ? "20px 0 14px" : "0 0 14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Practical Application Grid */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Practical Application</h2>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>
            How to move from understanding the gospel to actually sharing it &mdash; without manipulation, without fear.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                color: GREEN,
                title: "Know the Core Story",
                steps: [
                  "Creation: God made the world good and made humans in his image",
                  "Fall: Humanity chose independence; sin broke the relationship",
                  "Redemption: Christ lived, died, and rose to restore what was lost",
                  "Restoration: All things will be made new; death is not the end",
                  "Practice telling this story in under three minutes",
                ],
              },
              {
                color: PURPLE,
                title: "Prepare Your Personal Testimony",
                steps: [
                  "Before: what was life without Christ actually like?",
                  "Encounter: how did you come to faith, and what changed?",
                  "After: what is different now, and why does it matter?",
                  "Keep it honest &mdash; vague testimonies invite vague responses",
                  "Practice it until it&rsquo;s natural, not rehearsed",
                ],
              },
              {
                color: GOLD,
                title: "Start with Curiosity, Not a Script",
                steps: [
                  "Ask what people actually believe before telling them what you believe",
                  "Listen to understand, not to respond",
                  "Find the genuine longing beneath the surface position",
                  'Paul found "To the Unknown God" &mdash; find their altar',
                  "Enter their world before inviting them into yours",
                ],
              },
              {
                color: TEAL,
                title: "Cultivate Genuine Friendship",
                steps: [
                  "Befriend people you are not trying to convert",
                  "Let the relationship be real, not instrumental",
                  "Serve, show up, and stay &mdash; the long game matters",
                  "Share the gospel when the moment is right, not on a schedule",
                  "Trust the Spirit to open the door",
                ],
              },
              {
                color: BLUE,
                title: "Handle the Fear of Rejection",
                steps: [
                  "Name the fear honestly &mdash; it is real and normal",
                  "Rejection of the message is not rejection of you",
                  "Jesus and Paul were both rejected &mdash; faithfulness is the goal, not success",
                  "Pray before conversations, not just about outcomes",
                  "Debrief with a friend who will keep you accountable to keep sharing",
                ],
              },
              {
                color: "#EF4444",
                title: "Pray First, Always",
                steps: [
                  "Ask God to open doors (Col 4:3) before walking through them",
                  "Pray for specific people by name, consistently",
                  "Ask for boldness, not just opportunity (Acts 4:29)",
                  "Intercession precedes proclamation in every apostolic pattern",
                  "The harvest belongs to the Lord of the harvest (Luke 10:2)",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: CARD,
                  border: `1px solid ${card.color}30`,
                  borderRadius: 14,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    color: card.color,
                    fontWeight: 800,
                    fontSize: 15,
                    marginBottom: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: card.color,
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  {card.title}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {card.steps.map((step, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span
                        style={{
                          color: card.color,
                          fontSize: 13,
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span
                        style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Go Deeper: Evangelism on Video</h2>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
            Teaching on the theology and practice of sharing your faith.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {VIDEOS.map((v) => (
              <div
                key={v.videoId}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "16px 20px" }}>
                  <h3
                    style={{
                      color: GREEN,
                      fontWeight: 700,
                      fontSize: 16,
                      marginBottom: 4,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                    {v.channel}
                  </p>
                  <p
                    style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scripture Gallery */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 24 }}>Scriptures for the Witness</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                ref: "Matthew 28:19-20",
                text: "&ldquo;Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;",
                color: GREEN,
              },
              {
                ref: "Romans 1:16",
                text: "&ldquo;I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.&rdquo;",
                color: GOLD,
              },
              {
                ref: "1 Corinthians 15:3-4",
                text: "&ldquo;Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.&rdquo;",
                color: PURPLE,
              },
              {
                ref: "1 Peter 3:15",
                text: "&ldquo;Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect.&rdquo;",
                color: TEAL,
              },
              {
                ref: "Luke 10:2",
                text: "&ldquo;The harvest is plentiful, but the laborers are few. Therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.&rdquo;",
                color: BLUE,
              },
              {
                ref: "Colossians 4:5-6",
                text: "&ldquo;Walk in wisdom toward outsiders, making the best use of the time. Let your speech always be gracious, seasoned with salt.&rdquo;",
                color: "#EF4444",
              },
            ].map((s) => (
              <div
                key={s.ref}
                style={{
                  background: CARD,
                  border: `1px solid ${s.color}30`,
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: 10,
                  padding: "16px 18px",
                }}
              >
                <div
                  style={{
                    color: s.color,
                    fontWeight: 700,
                    fontSize: 12,
                    marginBottom: 8,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.ref}
                </div>
                <p
                  style={{
                    color: TEXT,
                    fontSize: 13,
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Closing Encouragement */}
        <div
          style={{
            background: `linear-gradient(135deg, ${GREEN}18 0%, ${PURPLE}10 100%)`,
            border: `1px solid ${GREEN}33`,
            borderRadius: 20,
            padding: "40px 36px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 14, color: TEXT }}>
            He Is With You to the End of the Age
          </h2>
          <p
            style={{
              color: MUTED,
              fontSize: 15,
              lineHeight: 1.85,
              maxWidth: 580,
              margin: "0 auto 24px",
            }}
          >
            The Great Commission ends where it begins &mdash; with the authority and presence of Jesus. You are not an
            isolated voice shouting into indifference. You are an ambassador of the one who is already sovereign
            over every person you will ever speak to. He opened the hearts of those who came to faith before you;
            he will open the hearts of those who come to faith through you. Go with the confidence that the outcome
            is his, and the calling is yours.
          </p>
          <div
            style={{
              display: "inline-block",
              background: GREEN,
              color: BG,
              fontWeight: 800,
              fontSize: 14,
              padding: "12px 28px",
              borderRadius: 10,
              letterSpacing: "0.03em",
            }}
          >
            &ldquo;And behold, I am with you always, to the end of the age.&rdquo; &mdash; Matthew 28:20
          </div>
        </div>

      </div>
    </div>
  );
}
