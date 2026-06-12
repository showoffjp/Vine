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

const tabs = [
  { id: "vocation", label: "Vocation", color: GOLD },
  { id: "luther", label: "Luther on Work", color: PURPLE },
  { id: "colossians", label: "Working for the Lord", color: TEAL },
  { id: "ordinary", label: "Ordinary Labor", color: GREEN },
  { id: "distortions", label: "Work & Idolatry", color: BLUE },
  { id: "videos", label: "Videos", color: MUTED },
];

export default function ChristianWorkGuide() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState("vocation");

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
          background: `linear-gradient(180deg, rgba(212,121,6,0.06) 0%, transparent 100%)`,
        }}
      >
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase", marginBottom: "1rem" }}>
          Christian Work Guide
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.2rem", lineHeight: 1.15 }}>
          Whatever You Do, Do It for the Lord
        </h1>
        <p style={{ fontSize: "1.1rem", color: MUTED, maxWidth: 620, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
          Work is not a consequence of the Fall — it is a gift of creation. The Christian tradition
          reclaims every form of honest labor as participation in God&rsquo;s ongoing care for the world.
        </p>
        <blockquote style={{ fontStyle: "italic", color: GOLD, fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>
          &ldquo;Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord
          you will receive the inheritance as your reward. You are serving the Lord Christ.&rdquo;
          <span style={{ display: "block", marginTop: "0.4rem", color: MUTED, fontStyle: "normal", fontSize: "0.85rem" }}>
            Colossians 3:23–24
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

        {/* Vocation */}
        {active === "vocation" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GOLD }}>
              Vocation: Called to Work
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The Latin word vocatio (calling) gives us the word vocation. In Christian theology,
              every believer has a calling — not just pastors and missionaries, but plumbers and
              programmers, parents and professors.
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
                Work Before the Fall (Genesis 2:15)
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "0.75rem" }}>
                &ldquo;The Lord God took the man and put him in the garden of Eden to work it and keep it.&rdquo;
                Work existed before sin entered the world. The mandate to till and keep creation is part
                of what it means to bear the image of God — to be a co-creator, a steward, a maker.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                The Fall did not create work; it cursed it. Genesis 3:17-19 describes thorns and thistles,
                toil and sweat — the frustration of labor, not its invention. Redemption does not abolish
                work but redeems it, restoring the dignity that the curse obscured.
              </p>
            </div>

            {[
              {
                ref: "Ephesians 4:28",
                heading: "Work to Give",
                body: "Paul&rsquo;s instruction to the formerly stealing person: &ldquo;let him labor, doing honest work with his own hands, so that he may have something to share with anyone in need.&rdquo; Work is not just about provision for self but participation in a economy of generosity. Labor creates surplus; surplus enables love.",
              },
              {
                ref: "1 Thessalonians 4:11-12",
                heading: "The Gospel of the Quiet Life",
                body: "&ldquo;Aspire to live quietly, and to mind your own affairs, and to work with your hands, as we instructed you, so that you may walk properly before outsiders and be dependent on no one.&rdquo; Paul elevates manual labor and ordinary life. The quiet faithfulness of daily work is itself a witness.",
              },
              {
                ref: "Genesis 1:1",
                heading: "Made in the Image of the Worker",
                body: "The God who reveals himself first as a worker — who speaks, makes, evaluates, and rests — creates humans in that image. To make, build, design, grow, care for, or repair things is to exercise the imago Dei. Dorothy Sayers: the only thing humanity truly knows about the mind of God is that it creates.",
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
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.14em", color: GOLD, marginBottom: "0.4rem" }}>{item.ref}</p>
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{item.heading}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* Luther on Work */}
        {active === "luther" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: PURPLE }}>
              Luther&rsquo;s Revolution: All Work Is Holy
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Martin Luther&rsquo;s recovery of the doctrine of vocation was one of the Reformation&rsquo;s most
              practically radical contributions. He dismantled the sacred-secular divide that had
              elevated monks above cobblers.
            </p>

            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 6, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 600, marginBottom: "0.75rem" }}>
                The Cobbler and the Priest
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "0.75rem" }}>
                Luther wrote that when a cobbler makes a good shoe, he is serving God just as much as a
                monk in a monastery. The cobbler&rsquo;s vocation is not inferior to the priest&rsquo;s — it is
                different. God serves the world through both. The quality of the shoe is an act of
                worship.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                This was a bombshell in the 16th century. For centuries, the religious life — celibacy,
                poverty, monastic discipline — had been considered the only truly holy path. Luther said:
                no, the mother nursing her infant, the magistrate enforcing justice, the farmer plowing
                his field — all serve God in their stations.
              </p>
            </div>

            {[
              {
                title: "Masks of God (Larva Dei)",
                body: "Luther described daily work as God&rsquo;s way of caring for the world through human hands — we are his &ldquo;masks,&rdquo; or instruments. When a doctor heals, it is God healing through the doctor&rsquo;s skill. When a farmer grows food, it is God feeding the hungry through human labor. Work is the place where divine providence meets human responsibility.",
              },
              {
                title: "Station and Neighbor",
                body: "For Luther, vocation is always defined by its neighbor. Your work is not primarily about self-fulfillment — it is about serving the people around you. A teacher&rsquo;s vocation is defined by students. A parent&rsquo;s by children. A politician&rsquo;s by citizens. Ask not &ldquo;what job fulfills me?&rdquo; but &ldquo;how does my work serve my neighbor?&rdquo;",
              },
              {
                title: "The Reformation and Modern Work Culture",
                body: "Max Weber famously connected the Protestant work ethic to the rise of capitalism. The analysis is contested, but the observation stands: when ordinary work became holy, it acquired a dignity and intensity that changed civilization. The danger Luther could not have foreseen: the work ethic severed from its theological roots becomes workaholism.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 4, padding: "1.4rem", marginBottom: "1.2rem" }}
              >
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.6rem", color: PURPLE }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* Colossians */}
        {active === "colossians" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: TEAL }}>
              Working for the Lord (Colossians 3:23)
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Paul&rsquo;s instruction to slaves in Colossae became the founding text of a Christian theology
              of labor: the audience of your work is ultimately the Lord, whatever human structures
              surround it.
            </p>

            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 6, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 600, marginBottom: "0.75rem" }}>The Context Matters</h3>
              <p style={{ color: MUTED, lineHeight: 1.75 }}>
                Paul wrote to enslaved people — people with no labor rights, no choice of employer, no
                dignity in the eyes of their world. He told them to work &ldquo;heartily&rdquo; (ek psyches —
                from the soul) &ldquo;as for the Lord.&rdquo; If the theology of working for the Lord holds under
                those conditions, it holds under every condition. Your daily work — however humble, however
                undervalued — can be an act of worship rendered to the God who sees.
              </p>
            </div>

            {[
              {
                title: "Excellence as Worship",
                body: "Working heartily for the Lord is the theological foundation for professional excellence. Not perfectionism — that&rsquo;s performance anxiety directed at humans. But the real desire to do good work because the ultimate audience is Christ himself. The careless and the careful worker both have an audience. Choose yours.",
              },
              {
                title: "Meaning Beyond Meaning",
                body: "Many jobs feel meaningless. Colossians 3 offers a theologically rich response: even if the work itself seems trivial, the act of doing it faithfully for the Lord is never trivial. The bored data-entry worker, the exhausted caregiver, the frustrated employee stuck in a bad job — all can transform their work by changing its audience.",
              },
              {
                title: "The Inheritance (v.24)",
                body: "Paul immediately adds: &ldquo;knowing that from the Lord you will receive the inheritance as your reward.&rdquo; The enslaved person had no legal inheritance rights. Paul says: but you have an inheritance no legal system can give or take. Working for the Lord reframes the entire economy of reward and recognition.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${TEAL}`, borderRadius: 4, padding: "1.4rem", marginBottom: "1.2rem" }}
              >
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: TEAL }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* Ordinary Labor */}
        {active === "ordinary" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>
              The Dignity of Ordinary Labor
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              A culture obsessed with &ldquo;finding your passion&rdquo; and &ldquo;doing what you love&rdquo; has little
              room for the vast majority of human work, which is necessary, ordinary, and unglamorous.
              Scripture dignifies all of it.
            </p>

            {[
              {
                icon: "🔨",
                title: "Jesus the Carpenter",
                body: "For roughly 30 years, the Son of God worked with his hands making tables, yokes, and tools in a small Galilean village. He did not spend this time waiting for his real ministry to begin. This was his life. The incarnation dignifies ordinary work by placing God in the middle of it for three decades.",
              },
              {
                icon: "🌾",
                title: "Boaz and the Harvest",
                body: "The book of Ruth is largely a story of daily agricultural labor — gleaning, threshing, harvesting. Boaz&rsquo;s character is revealed not in a throne room but in how he treats workers and the vulnerable in his fields. Ordinary work is the arena where character is formed and revealed.",
              },
              {
                icon: "🏺",
                title: "The Potter (Jeremiah 18)",
                body: "God sends Jeremiah to the potter&rsquo;s house to learn theology. The potter at work — reshaping, reworking, patient and purposeful — becomes a parable of God&rsquo;s relationship with his people. God uses the ordinary laborer&rsquo;s craft as a window into divine sovereignty and patience.",
              },
              {
                icon: "📖",
                title: "Proverbs and the Value of Diligence",
                body: "Proverbs is relentlessly practical about work: &ldquo;The hand of the diligent will rule, while the slothful will be put to forced labor&rdquo; (12:24). &ldquo;The plans of the diligent lead surely to abundance&rdquo; (21:5). Wisdom literature treats ordinary competence and consistency as genuine virtues, not spiritual consolation prizes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ display: "flex", gap: "1rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 4, padding: "1.4rem", marginBottom: "1rem", alignItems: "flex-start" }}
              >
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: GREEN }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Work & Idolatry */}
        {active === "distortions" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem", color: BLUE }}>
              Work as Idol: The Distortions
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              The Protestant work ethic, severed from its theological roots, became the culture of
              workaholism. Work is a gift from God — and like every gift, it can be idolized.
            </p>

            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 6, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ color: BLUE, fontWeight: 600, marginBottom: "0.75rem" }}>
                Tim Keller: Work as Identity
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75 }}>
                Tim Keller identified work as one of the most powerful idols of modern secular culture:
                &ldquo;If you are successful in your career but you are not a good person, you feel terrible.
                But if you are a good person and your career fails, you feel even worse.&rdquo; When work
                becomes identity, its absence becomes annihilation. The loss of a job becomes the loss
                of a self.
              </p>
            </div>

            {[
              {
                title: "The Rich Fool (Luke 12:15-21)",
                body: "The man who built bigger barns was not condemned for working hard or investing wisely — he was condemned for defining his life by his abundance. &ldquo;Soul, you have ample goods laid up for many years.&rdquo; His soul&rsquo;s security was grain storage. Jesus&rsquo; verdict: &ldquo;Fool! This night your soul is required of you.&rdquo; Work cannot carry the weight of ultimate meaning.",
              },
              {
                title: "Rest as Theological Statement",
                body: "Sabbath is not just rest from work — it is a statement about work. To stop is to acknowledge that you are not indispensable, that the world does not depend on you, that your value is not your output. Walter Brueggemann: Sabbath is resistance to the anxiety-producing culture of production and consumption that drives modern work.",
              },
              {
                title: "The New Creation and Work",
                body: "Isaiah 65:17-25 describes the new creation with people building houses and planting vineyards — meaningful work without futility. Revelation 22 implies continuity between this age and the next. The Christian vision is not escape from work into idleness but work redeemed — free from futility, alienation, and the curse, fully expressive of the image of God.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${BLUE}`, borderRadius: 4, padding: "1.4rem", marginBottom: "1.2rem" }}
              >
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", color: BLUE }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* Videos */}
        {active === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>Videos on Christian Work</h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}>
              Biblical teaching on vocation, the theology of work, and integrating faith and daily labor.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <VideoEmbed videoId="6tv9DkVPjqU" title="Every Job Is Sacred — Tim Keller on Vocation" />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  Tim Keller on how the gospel transforms ordinary work into sacred vocation — and what
                  it means to do your job as an act of love.
                </p>
              </div>

              <div>
                <VideoEmbed videoId="K_JjTPSFz0s" title="Luther&rsquo;s Theology of Vocation — Reformation21" />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  An exploration of Luther&rsquo;s revolutionary doctrine that all honest work is holy
                  service to God and neighbor.
                </p>
              </div>

              <div>
                <VideoEmbed videoId="WMKJ-WTPQ6g" title="Working for the Lord — Colossians 3:23" />
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  An exposition of Colossians 3:23-24 and its radical implications for how Christians
                  approach their daily work.
                </p>
              </div>
            </div>

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
                Monday Morning Theology
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.95rem" }}>
                The real test of Sunday&rsquo;s worship is Monday morning&rsquo;s work. If the gospel does not
                reach your desk, your shop floor, your classroom, your kitchen — it has not yet reached
                you. Every act of honest labor, done faithfully for the Lord, is an act of worship.
                The whole world is his temple. Go to work.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
