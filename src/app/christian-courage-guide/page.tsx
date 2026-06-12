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

const sections = [
  {
    id: "biblical-foundation",
    label: "Biblical Foundation",
    color: GOLD,
  },
  {
    id: "andreia-virtue",
    label: "Courage as Virtue",
    color: PURPLE,
  },
  {
    id: "courage-in-suffering",
    label: "Courage in Suffering",
    color: TEAL,
  },
  {
    id: "spiritual-warfare",
    label: "Spiritual Warfare",
    color: BLUE,
  },
  {
    id: "speak-truth",
    label: "Speaking Truth",
    color: GREEN,
  },
  {
    id: "videos",
    label: "Videos",
    color: MUTED,
  },
];

export default function ChristianCourageGuide() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("biblical-foundation");

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

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
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
          borderBottom: `1px solid ${BORDER}`,
          background: `linear-gradient(180deg, rgba(107,79,187,0.08) 0%, transparent 100%)`,
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            color: GOLD,
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Christian Courage Guide
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "1.2rem",
            lineHeight: 1.15,
          }}
        >
          Be Strong and Courageous
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: MUTED,
            maxWidth: 600,
            margin: "0 auto 1.5rem",
            lineHeight: 1.7,
          }}
        >
          Courage is not the absence of fear but faithfulness in its presence. Scripture calls God&rsquo;s
          people again and again to a holy boldness rooted not in temperament but in trust.
        </p>
        <blockquote
          style={{
            fontStyle: "italic",
            color: GOLD,
            fontSize: "1rem",
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          &ldquo;Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be
          dismayed, for the Lord your God is with you wherever you go.&rdquo;
          <span style={{ display: "block", marginTop: "0.4rem", color: MUTED, fontStyle: "normal", fontSize: "0.85rem" }}>
            Joshua 1:9
          </span>
        </blockquote>
      </div>

      {/* Nav tabs */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "0.25rem",
          padding: "1rem 1.5rem",
          borderBottom: `1px solid ${BORDER}`,
          scrollbarWidth: "none",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              flexShrink: 0,
              padding: "0.5rem 1.1rem",
              borderRadius: 2,
              border: `1px solid ${activeSection === s.id ? s.color : BORDER}`,
              background: activeSection === s.id ? `${s.color}18` : "transparent",
              color: activeSection === s.id ? s.color : MUTED,
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.18s",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {/* Biblical Foundation */}
        {activeSection === "biblical-foundation" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GOLD }}>
              Biblical Foundation for Courage
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The command to be courageous appears throughout Scripture — not as a personality trait to
              cultivate but as a response to God&rsquo;s presence and promises.
            </p>

            {[
              {
                ref: "Joshua 1:6–9",
                heading: "Three Commands, One Foundation",
                body: "God commands Joshua to &ldquo;be strong and courageous&rdquo; three times in four verses. The repetition is intentional: the foundation each time is not Joshua&rsquo;s inner strength but the Lord&rsquo;s presence (&ldquo;the Lord your God is with you&rdquo;) and the Lord&rsquo;s word (&ldquo;meditate on it day and night&rdquo;). Courage is the posture of someone who trusts a trustworthy God.",
              },
              {
                ref: "Deuteronomy 31:6",
                heading: "He Will Not Leave You",
                body: "Moses&rsquo; final charge to Israel: &ldquo;Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.&rdquo; Courage here is eschatological — it leans into a future secured by God&rsquo;s faithfulness.",
              },
              {
                ref: "Acts 4:13",
                heading: "Boldness That Startles the World",
                body: "When the Sanhedrin saw the boldness (parresia) of Peter and John, &ldquo;they recognized that they had been with Jesus.&rdquo; Parresia — free speech, fearless confidence before authorities — was the mark of the early church. It was not cultural; it was formed by encounter with the risen Christ.",
              },
              {
                ref: "Revelation 2:10",
                heading: "Faithful unto Death",
                body: "To the church at Smyrna: &ldquo;Do not fear what you are about to suffer... Be faithful unto death, and I will give you the crown of life.&rdquo; Martyr courage is not recklessness but faith that death cannot separate the believer from God (Romans 8:38). The crown is not earned by bravery but received through faithfulness.",
              },
              {
                ref: "Psalm 27:1",
                heading: "The Lord Is My Light",
                body: "&ldquo;The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?&rdquo; David wrote this likely during genuine threat. His courage is not denial of danger but displacement of fear by a greater object of awe: the Lord himself.",
              },
            ].map((item) => (
              <div
                key={item.ref}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${GOLD}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.14em", color: GOLD, marginBottom: "0.4rem" }}>
                  {item.ref}
                </p>
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.heading}</h3>
                <p
                  style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Courage as Virtue */}
        {activeSection === "andreia-virtue" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: PURPLE }}>
              Andreia: Courage as Christian Virtue
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The classical virtue of andreia (courage, manliness) was transformed by Christianity from
              military valor into something far more capacious and demanding.
            </p>

            <div
              style={{
                background: `${PURPLE}10`,
                border: `1px solid ${PURPLE}30`,
                borderRadius: 6,
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: PURPLE, fontWeight: 600, marginBottom: "0.75rem" }}>
                Aquinas on Courage (Fortitudo)
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75 }}>
                Thomas Aquinas identified fortitudo as one of the four cardinal virtues. For Aquinas,
                courage is not the absence of fear but its proper ordering: fearing the right things to
                the right degree. The courageous person fears disgrace more than danger, fears God more
                than death, and acts from reason and faith rather than passion.
              </p>
            </div>

            {[
              {
                title: "C.S. Lewis: Courage Is the Form of Every Virtue",
                body: "Lewis wrote that courage is not one virtue among others but &ldquo;the form of every virtue at the testing point.&rdquo; You cannot truly be patient without the courage to endure. You cannot be honest without the courage to tell the truth. You cannot love well without the courage to be vulnerable. Courage is the sinew that holds all other virtues together under pressure.",
              },
              {
                title: "Courage vs. Recklessness",
                body: "Aristotle placed courage as the mean between cowardice (too much fear) and recklessness (too little). Christian ethics agrees: courage is not the absence of prudence. Jesus sent his disciples &ldquo;as sheep in the midst of wolves&rdquo; — but also instructed them to be &ldquo;wise as serpents.&rdquo; Holy boldness does not abandon wisdom.",
              },
              {
                title: "The Courage of the Ordinary",
                body: "Scripture honors spectacular courage (Gideon, Esther, Paul before Felix) but equally honors quiet faithfulness. The widow who gave two mites, the woman who touched the hem of Jesus&rsquo; garment, the disciples who met secretly in upper rooms — courage is often small, sustained, and hidden. Ordinary faithfulness in difficult seasons is no less courageous than dramatic acts.",
              },
              {
                title: "Moral Courage vs. Physical Courage",
                body: "Many biblical calls to courage are not about facing armies but about speaking the truth, living differently from the culture, refusing to compromise, standing with the persecuted. Elijah&rsquo;s confrontation of Ahab, Nathan&rsquo;s rebuke of David, John the Baptist&rsquo;s preaching — moral courage is often more costly and rarer than physical bravery.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.6rem", color: PURPLE }}>
                  {item.title}
                </h3>
                <p
                  style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Courage in Suffering */}
        {activeSection === "courage-in-suffering" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: TEAL }}>
              Courage in Suffering
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Biblical courage is not tested most severely on battlefields but in prolonged suffering —
              illness, loss, persecution, and the long dark nights of the soul.
            </p>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 600, marginBottom: "1rem" }}>
                Shadrach, Meshach, and Abednego (Daniel 3)
              </h3>
              <div
                style={{
                  background: `${TEAL}10`,
                  border: `1px solid ${TEAL}30`,
                  borderRadius: 6,
                  padding: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                <p style={{ color: TEXT, lineHeight: 1.75, marginBottom: "1rem" }}>
                  Their response to Nebuchadnezzar stands as one of Scripture&rsquo;s most celebrated
                  declarations of courage: &ldquo;Our God whom we serve is able to deliver us from the
                  burning fiery furnace... But if not, be it known to you, O king, that we will not
                  serve your gods.&rdquo;
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                  The &ldquo;but if not&rdquo; is the pinnacle of faith-courage. They did not claim a
                  miracle in advance. They trusted God&rsquo;s goodness whether or not deliverance came.
                  Their courage was not optimism — it was theological conviction about God&rsquo;s
                  character independent of outcomes.
                </p>
              </div>
            </div>

            {[
              {
                title: "Paul: I Have Learned to Be Content",
                ref: "Philippians 4:11–13",
                body: "Paul wrote Philippians from prison. His declaration — &ldquo;I can do all things through him who strengthens me&rdquo; — is not triumphalism but suffering-forged contentment. The courage to be &ldquo;abased&rdquo; is as hard-won as the courage to &ldquo;abound.&rdquo; Paul learned it; it was not innate.",
              },
              {
                title: "The Suffering Servant",
                ref: "Isaiah 53:7",
                body: "&ldquo;He was oppressed and afflicted, yet he opened not his mouth; like a lamb that is led to the slaughter.&rdquo; Jesus&rsquo; silence before Pilate was not passivity — it was the most active courage in history. He chose the cross. Hebrews 12:2 says he endured it &ldquo;for the joy that was set before him.&rdquo; Suffering-courage sees beyond the present to the promised.",
              },
              {
                title: "Lament as Courageous Prayer",
                ref: "Psalm 88",
                body: "Psalm 88 ends with &ldquo;darkness is my closest friend&rdquo; — no resolution, no doxology. Bringing raw honest grief to God is itself a form of courage. The psalms of lament model honest, persistent, refusing-to-be-silenced prayer as a courageous act of faith.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${TEAL}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: TEAL, marginBottom: "0.25rem" }}>
                  {item.ref}
                </p>
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p
                  style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Spiritual Warfare */}
        {activeSection === "spiritual-warfare" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: BLUE }}>
              Courage in Spiritual Warfare
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Ephesians 6 presents the Christian life as a battlefield — but the armor belongs to God,
              and the victory has already been won. Courage in spiritual warfare is faith in a concluded
              war still being enforced.
            </p>

            <div
              style={{
                background: `${BLUE}10`,
                border: `1px solid ${BLUE}30`,
                borderRadius: 6,
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: BLUE, fontWeight: 600, marginBottom: "0.75rem" }}>
                The Full Armor of God (Ephesians 6:10–18)
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  { piece: "Belt of Truth", meaning: "Integrity — a life that matches its confession" },
                  { piece: "Breastplate of Righteousness", meaning: "Christ&rsquo;s righteousness covering our hearts" },
                  { piece: "Shoes of Peace", meaning: "Readiness to bring the gospel wherever you walk" },
                  { piece: "Shield of Faith", meaning: "Trust in God&rsquo;s promises extinguishes accusation" },
                  { piece: "Helmet of Salvation", meaning: "Assurance of salvation guards the mind" },
                  { piece: "Sword of the Spirit", meaning: "Scripture — the only offensive weapon named" },
                ].map((a) => (
                  <div
                    key={a.piece}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 4,
                      padding: "0.85rem 1rem",
                    }}
                  >
                    <p style={{ fontWeight: 600, fontSize: "0.88rem", color: BLUE, marginBottom: "0.25rem" }}>
                      {a.piece}
                    </p>
                    <p
                      style={{ fontSize: "0.82rem", color: MUTED, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: a.meaning }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Jesus&rsquo; Temptation as the Model",
                body: "In Matthew 4, Jesus models courageous resistance: Scripture wielded with precision, refusal to test God for dramatic proof, worship reserved for God alone. His courage was not raw willpower but total dependence on the Father. The wilderness did not break him — it revealed him.",
              },
              {
                title: "Resist the Devil",
                body: "James 4:7 gives the full sequence: &ldquo;Submit yourselves therefore to God. Resist the devil, and he will flee from you.&rdquo; The order matters. Resistance without submission is self-confidence. Submission without resistance is passivity. Spiritual courage is active surrender to God paired with active resistance to evil.",
              },
              {
                title: "The Overcomer Language of Revelation",
                body: "Seven letters, seven calls to overcome (nikao — to conquer, be victorious). The overcomer is not the spectacular warrior but the ordinary believer who holds fast through pressure and tribulation. They overcome &ldquo;by the blood of the Lamb and by the word of their testimony&rdquo; (Rev 12:11) — not by strength but by Christ&rsquo;s victory applied.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.6rem", color: BLUE }}>
                  {item.title}
                </h3>
                <p
                  style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Speaking Truth */}
        {activeSection === "speak-truth" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>
              The Courage to Speak Truth
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Parresia — bold speech, free confident declaration — is a hallmark of the New Testament
              church. It is not aggressiveness but a willingness to say what is true regardless of cost.
            </p>

            {[
              {
                icon: "⚔",
                title: "Nathan and David (2 Samuel 12)",
                body: "Nathan&rsquo;s courage before the most powerful man in Israel: &ldquo;You are the man.&rdquo; He risked his life to speak God&rsquo;s word. The prophetic tradition is a tradition of costly speech. Nathan spoke not from anger but from love — the hardest kind of courage.",
              },
              {
                icon: "🔥",
                title: "Elijah Before Ahab (1 Kings 18:17–18)",
                body: "Called &ldquo;troubler of Israel,&rdquo; Elijah redirected the accusation: &ldquo;I have not troubled Israel, but you have.&rdquo; Courage in the face of misrepresentation — holding your ground when the social pressure is to capitulate — is as hard as any physical act of bravery.",
              },
              {
                icon: "✉",
                title: "Paul&rsquo;s Parresia (Acts 9:27–28)",
                body: "Immediately after his conversion, Paul &ldquo;spoke boldly in the name of the Lord.&rdquo; The Greek is ekparresiazeto — he parresia&rsquo;d forth. This would cost him everything. He never lost it: even from prison he asked for prayer &ldquo;that words may be given to me in opening my mouth boldly.&rdquo; (Eph 6:19)",
              },
              {
                icon: "🌿",
                title: "Speaking Truth in Love (Ephesians 4:15)",
                body: "Paul pairs truth with love: aletheuontes en agape — &ldquo;truthing in love.&rdquo; Courageous speech without love becomes cruelty. The aim is not to win but to build up. Hard conversations entered with gentleness, persistence, and genuine care for the other person are the most demanding exercise of Christian courage.",
              },
              {
                icon: "🕊",
                title: "Practicing Courageous Speech",
                body: "Practical disciplines: (1) Pray before difficult conversations — ask for the Spirit&rsquo;s words. (2) Root the courage in the relationship, not the argument — people receive hard words from those they trust love them. (3) Speak about the behavior, not the person. (4) Be willing to be wrong — courageous speech includes the courage to listen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: GREEN }}>
                    {item.title}
                  </h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos */}
        {activeSection === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Videos on Christian Courage
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Teaching, testimony, and reflection on what it means to live and speak courageously as a
              follower of Jesus.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <VideoEmbed
                  videoId="E_jmpCRb3EM"
                  title="The Courage to Be Christian — John Piper"
                />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  John Piper on the biblical call to boldness — what it means to live without fear of
                  man when you fear God.
                </p>
              </div>

              <div>
                <VideoEmbed
                  videoId="sTsA8BDSqiQ"
                  title="Courage in the Christian Life — Tim Keller"
                />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  Tim Keller explores the shape of genuine courage in the gospel — how Christ&rsquo;s
                  courage at the cross becomes the foundation for ours.
                </p>
              </div>

              <div>
                <VideoEmbed
                  videoId="FhlUwiwHyNg"
                  title="Be Strong and Courageous — Desiring God"
                />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  An exposition of Joshua 1:9 — the repeated command, its context, and its application
                  to the believer facing real fear.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div
              style={{
                background: `${GOLD}0D`,
                border: `1px solid ${GOLD}30`,
                borderRadius: 6,
                padding: "1.75rem",
                marginTop: "3rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.75rem", color: GOLD }}>
                Courage Is Not Yours to Manufacture
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}>
                The consistent pattern in Scripture is this: God does not say &ldquo;gather your courage,&rdquo;
                he says &ldquo;I am with you.&rdquo; The courage he calls for is always proportioned to the
                presence he promises. Be strong — because he is your strength. Be courageous — because he
                has gone before you and will never leave you.
              </p>
              <p
                style={{
                  color: GOLD,
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  marginTop: "1rem",
                }}
              >
                &ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you,
                I will help you, I will uphold you with my righteous right hand.&rdquo; — Isaiah 41:10
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
