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
const ROSE = "#E11D48";

const tabs = [
  { id: "mishpat", label: "Mishpat", color: GOLD },
  { id: "prophets", label: "The Prophets", color: ROSE },
  { id: "jesus", label: "Jesus and the Poor", color: GREEN },
  { id: "jubilee", label: "Jubilee", color: PURPLE },
  { id: "integration", label: "Justice & Evangelism", color: TEAL },
  { id: "videos", label: "Videos", color: MUTED },
];

export default function ChristianJusticeGuide() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState("mishpat");

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
          background: `linear-gradient(180deg, rgba(224,44,32,0.06) 0%, transparent 100%)`,
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            color: ROSE,
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Christian Justice Guide
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
          Do Justice, Love Kindness, Walk Humbly
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: MUTED,
            maxWidth: 620,
            margin: "0 auto 1.5rem",
            lineHeight: 1.7,
          }}
        >
          Justice is not a political add-on to the gospel — it is woven into the character of God and
          the vocation of his people from Genesis to Revelation.
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
          &ldquo;He has told you, O man, what is good; and what does the Lord require of you but to do
          justice, and to love kindness, and to walk humbly with your God?&rdquo;
          <span
            style={{
              display: "block",
              marginTop: "0.4rem",
              color: MUTED,
              fontStyle: "normal",
              fontSize: "0.85rem",
            }}
          >
            Micah 6:8
          </span>
        </blockquote>
      </div>

      {/* Tabs */}
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
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              flexShrink: 0,
              padding: "0.5rem 1.1rem",
              borderRadius: 2,
              border: `1px solid ${active === t.id ? t.color : BORDER}`,
              background: active === t.id ? `${t.color}18` : "transparent",
              color: active === t.id ? t.color : MUTED,
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.18s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {/* Mishpat */}
        {active === "mishpat" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GOLD }}>
              Mishpat: The Biblical Concept of Justice
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The Hebrew word mishpat appears over 200 times in the Old Testament. It means more than
              our narrow legal sense of &ldquo;justice&rdquo; — it encompasses right relationship, proper
              order, and active vindication of the vulnerable.
            </p>

            <div
              style={{
                background: `${GOLD}0D`,
                border: `1px solid ${GOLD}30`,
                borderRadius: 6,
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 600, marginBottom: "0.75rem" }}>
                Two Dimensions of Mishpat
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  {
                    label: "Punitive Justice",
                    desc: "Rendering to wrongdoers what they deserve. Stopping the oppressor. Holding the powerful accountable. Courts, laws, and righteous judgment.",
                  },
                  {
                    label: "Restorative Justice",
                    desc: "Actively restoring what was taken. Not just stopping evil but repairing the damage. The widow, orphan, and alien restored to fullness.",
                  },
                ].map((d) => (
                  <div
                    key={d.label}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 4, padding: "1rem" }}
                  >
                    <p style={{ fontWeight: 600, color: GOLD, marginBottom: "0.4rem", fontSize: "0.9rem" }}>
                      {d.label}
                    </p>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                ref: "Psalm 146:6–9",
                heading: "God the Just",
                body: "The Psalms describe God as one who &ldquo;executes justice for the oppressed, who gives food to the hungry.&rdquo; The Lord &ldquo;watches over the sojourners, he upholds the widow and the fatherless.&rdquo; Justice is not a human ideal imposed on God — it flows from his character. To know God is to pursue what he pursues.",
              },
              {
                ref: "Isaiah 1:17",
                heading: "Learn to Do Good",
                body: "&ldquo;Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow&rsquo;s cause.&rdquo; Isaiah&rsquo;s word &ldquo;learn&rdquo; is important — justice is a practice to be cultivated, not just a sentiment to be felt. It requires skill, knowledge, persistence, and engagement with specific people in specific situations.",
              },
              {
                ref: "Proverbs 31:8–9",
                heading: "Speak Up",
                body: "&ldquo;Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the poor and needy.&rdquo; Proverbs is practical wisdom. This command is simply: use your voice for those who have none. The church&rsquo;s voice is its greatest asset on behalf of the vulnerable.",
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

        {/* The Prophets */}
        {active === "prophets" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: ROSE }}>
              The Prophets&rsquo; Passion for Justice
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The Hebrew prophets were not primarily predictors of the future but covenant enforcement
              officers who held Israel accountable to God&rsquo;s character — especially his care for
              the vulnerable.
            </p>

            {[
              {
                prophet: "Amos",
                ref: "Amos 5:21–24",
                body: "&ldquo;I hate, I despise your feasts, and I take no delight in your solemn assemblies... But let justice roll down like waters, and righteousness like an ever-flowing stream.&rdquo; Amos speaks God&rsquo;s verdict on worship that coexists with exploitation. Liturgy without justice is not acceptable worship — it is an affront to the God being worshiped.",
              },
              {
                prophet: "Isaiah",
                ref: "Isaiah 58:6–7",
                body: "The fast God chooses: &ldquo;to loose the bonds of wickedness, to undo the straps of the yoke, to let the oppressed go free... to share your bread with the hungry and bring the homeless poor into your house.&rdquo; Isaiah insists that spiritual discipline and social action are not separate — the fast God wants includes feeding the hungry.",
              },
              {
                prophet: "Jeremiah",
                ref: "Jeremiah 22:3",
                body: "&ldquo;Do justice and righteousness, and deliver from the hand of the oppressor him who has been robbed. And do no wrong or violence to the resident alien, the fatherless, and the widow.&rdquo; Jeremiah connects knowledge of God with practice of justice (22:16): &ldquo;He judged the cause of the poor and needy... Is not this to know me?&rdquo;",
              },
              {
                prophet: "Micah",
                ref: "Micah 6:8",
                body: "The distilled summary: do mishpat (justice), love hesed (covenant loyalty/kindness), walk humbly with God. These are not three separate commands — they are one integrated posture. You cannot truly humble yourself before God while ignoring his image in the poor.",
              },
            ].map((item) => (
              <div
                key={item.prophet}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${ROSE}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", marginBottom: "0.4rem" }}>
                  <span style={{ fontWeight: 700, color: ROSE }}>{item.prophet}</span>
                  <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: MUTED }}>{item.ref}</span>
                </div>
                <p
                  style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Jesus and the Poor */}
        {active === "jesus" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>
              Jesus and the Poor
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Jesus&rsquo; first public sermon declared the inauguration of jubilee (Luke 4:18-19). His
              ministry was disproportionately directed toward those society discarded.
            </p>

            <div
              style={{
                background: `${GREEN}0D`,
                border: `1px solid ${GREEN}30`,
                borderRadius: 6,
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ color: GREEN, fontWeight: 600, marginBottom: "0.75rem" }}>
                Luke 4:18–19 — The Nazareth Manifesto
              </h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic", marginBottom: "0.75rem" }}>
                &ldquo;The Spirit of the Lord is upon me, because he has anointed me to proclaim good news
                to the poor. He has sent me to proclaim liberty to the captives and recovering of sight
                to the blind, to set at liberty those who are oppressed, to proclaim the year of the
                Lord&rsquo;s favor.&rdquo;
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                Jesus says &ldquo;Today this Scripture has been fulfilled in your hearing&rdquo; (v.21). His
                kingdom announcement had material dimensions from the start. The gospel is good news for
                the whole person — not just souls but bodies, not just eternity but history.
              </p>
            </div>

            {[
              {
                title: "Blessed Are the Poor (Luke 6:20)",
                body: "Luke&rsquo;s version of the beatitudes is materially direct: &ldquo;Blessed are you who are poor, for yours is the kingdom of God.&rdquo; This does not romanticize poverty — it announces that the kingdom reverses the world&rsquo;s hierarchies. The last shall be first. The exalted shall be humbled.",
              },
              {
                title: "Matthew 25: What You Did to the Least",
                body: "&ldquo;Inasmuch as you did it to one of the least of these my brothers, you did it to me.&rdquo; Jesus identifies himself with the hungry, the stranger, the naked, the sick, the prisoner. This is not social gospel replacing evangelism — it is the King declaring that how you treat his people is how you treat him.",
              },
              {
                title: "Justice vs. Charity",
                body: "Charity addresses symptoms; justice addresses causes. Both are needed. Feeding the hungry is charity; addressing why they are hungry is justice. The church needs both — immediate compassion for the person in front of us, and structural engagement with the systems that produce suffering. Archbishop Desmond Tutu: &ldquo;There comes a point where we need to stop just pulling people out of the river. We need to go upstream and find out why they&rsquo;re falling in.&rdquo;",
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
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: GREEN }}>
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

        {/* Jubilee */}
        {active === "jubilee" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: PURPLE }}>
              The Jubilee Principle
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Leviticus 25 describes the Year of Jubilee — every 50 years, debts cancelled, slaves
              freed, land returned. It is the most radical economic reset in ancient or modern history.
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
                Leviticus 25 — Three Provisions
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { provision: "Land Returns", detail: "Every family&rsquo;s ancestral land reverts — no permanent consolidation of land ownership. Inequality cannot become permanent." },
                  { provision: "Debts Cancelled", detail: "The Sabbath year (every 7 years) cancelled debts. Poverty traps could not become multigenerational." },
                  { provision: "Slaves Freed", detail: "Debt-slaves freed in the Jubilee year. No one could be permanently enslaved due to economic circumstance." },
                ].map((p) => (
                  <div
                    key={p.provision}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 4,
                      padding: "0.9rem 1.1rem",
                      display: "flex",
                      gap: "0.75rem",
                    }}
                  >
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.88rem", flexShrink: 0 }}>
                      {p.provision}
                    </span>
                    <p
                      style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: p.detail }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Jubilee as Eschatological Vision",
                body: "The Jubilee was never perfectly practiced in Israel&rsquo;s history — but it encoded a vision of what God&rsquo;s society looks like. When Jesus quoted Isaiah 61 in Luke 4, he was announcing that the true Jubilee had arrived. Christians live now in the overlap of the ages — between the inauguration and consummation of Jubilee, embodying its principles in anticipation of its fulfillment.",
              },
              {
                title: "The Early Church as Jubilee Community",
                body: "Acts 2:44–45: &ldquo;All who believed were together and had all things in common. They were selling their possessions and belongings and distributing the proceeds to all, as any had need.&rdquo; This was not communism — it was voluntary Jubilee. A community where no one went without, as a sign of the kingdom.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${PURPLE}`,
                  borderRadius: 4,
                  padding: "1.4rem",
                  marginBottom: "1.2rem",
                }}
              >
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: PURPLE }}>
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

        {/* Justice & Evangelism */}
        {active === "integration" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: TEAL }}>
              Integrating Justice and Evangelism
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The false choice between the &ldquo;social gospel&rdquo; and personal evangelism has divided
              the church for a century. Scripture refuses the dichotomy.
            </p>

            {[
              {
                icon: "✝",
                title: "Two Wings of the Same Bird",
                body: "John Stott argued that evangelism and social action are both part of Christian mission — like two wings: remove one and the bird cannot fly. Evangelism without justice can become a spiritual escapism that abandons the suffering world. Justice without evangelism can become mere social work without the transforming power of the gospel.",
              },
              {
                icon: "🌍",
                title: "The Lausanne Covenant (1974)",
                body: "The landmark evangelical document affirmed: &ldquo;In the church&rsquo;s mission of sacrificial service, evangelism is primary. World evangelization requires the whole church to take the whole gospel to the whole world.&rdquo; Primary does not mean exclusive. The whole gospel addresses the whole person — body, soul, community, and creation.",
              },
              {
                icon: "🏘",
                title: "Presence, Proclamation, Demonstration",
                body: "Effective mission involves: (1) Presence — being in the community, knowing its people and needs. (2) Proclamation — announcing the gospel in word. (3) Demonstration — showing the gospel through deeds of love and justice. All three together witness to the full reality of the kingdom.",
              },
              {
                icon: "🔄",
                title: "Justice as Pre-Evangelism",
                body: "Acts of justice create credibility for proclamation. When the church serves the poor without strings attached, it demonstrates that the gospel is not a sales pitch but a way of life. Many people who were closed to the message of the church become open after experiencing its love in action.",
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
                  marginBottom: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: TEAL }}>
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
        {active === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Videos on Christian Justice
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Biblical teaching on justice, mercy, and the integration of the gospel with care for the
              vulnerable.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <VideoEmbed
                  videoId="eJlN9jdQFSc"
                  title="Justice, Mercy, and Humility — Tim Keller"
                />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  Tim Keller on Micah 6:8 and what a biblically integrated vision of justice looks
                  like for the church in the city.
                </p>
              </div>

              <div>
                <VideoEmbed
                  videoId="9WyYPAHbfnw"
                  title="God&rsquo;s Heart for the Poor — N.T. Wright"
                />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  N.T. Wright on the biblical theology of the poor and why justice is central to the
                  gospel, not peripheral.
                </p>
              </div>

              <div>
                <VideoEmbed
                  videoId="wB-GEbYWXE4"
                  title="The Prophets and Social Justice — Desiring God"
                />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  An exploration of the prophetic tradition — Amos, Isaiah, Micah — and what it means
                  for the church today.
                </p>
              </div>
            </div>

            <div
              style={{
                background: `${ROSE}0D`,
                border: `1px solid ${ROSE}30`,
                borderRadius: 6,
                padding: "1.75rem",
                marginTop: "3rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.75rem", color: ROSE }}>
                Justice Is Not Optional
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}>
                The God who declares himself &ldquo;a father to the fatherless, a defender of widows&rdquo;
                (Psalm 68:5) calls his people to reflect his character in the world. Pursuing justice
                is not a political preference — it is obedience to the God who &ldquo;loves righteousness
                and justice&rdquo; (Psalm 33:5). Start where you are. Find one vulnerable person or
                community, and begin.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
