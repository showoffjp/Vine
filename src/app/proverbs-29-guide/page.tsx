"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const ROSE = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "overview" | "themes" | "versebyverse" | "application";

export default function Proverbs29GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "ACrYZxKiNLg", title: "Proverbs 29 -- Leadership, Justice, and the Fear of Man" },
    { videoId: "HQQpPEYl2xM", title: "Breaking Free from the Fear of Man -- Proverbs 29:25" },
    { videoId: "8KJdp8PPLCE", title: "Proverbs on Wisdom, Correction, and Leadership" },
    { videoId: "YpXgcJp8s3Y", title: "Proverbs 29:18 -- Where There Is No Vision" },
  ];

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "versebyverse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, #0d0d1a 0%, ${BG} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 24, padding: "4px 18px", fontSize: 13, color: GOLD, fontWeight: 700, marginBottom: 18, letterSpacing: "0.04em" }}>
            PROVERBS 29
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Rulers, Reproof, and the Fear of Man
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 640, margin: "0 auto 28px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Proverbs 29 closes the second Solomonic collection with urgent warnings for leaders, judges, parents, and anyone who struggles with the approval of others. The chapter is a compressed wisdom manual on power, justice, correction, and the only safe place to stand &mdash; trust in the LORD." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { label: "Leadership & Power", color: GOLD },
              { label: "Fear of Man", color: ROSE },
              { label: "Justice for the Poor", color: GREEN },
              { label: "Correction & Wisdom", color: PURPLE },
            ].map((badge) => (
              <span key={badge.label} style={{ background: `${badge.color}18`, border: `1px solid ${badge.color}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: badge.color, fontWeight: 700 }}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key verse banner */}
      <div style={{ background: `${GOLD}12`, borderTop: `1px solid ${GOLD}30`, borderBottom: `1px solid ${GOLD}30`, padding: "20px 20px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 18, fontStyle: "italic", color: TEXT, margin: 0, lineHeight: 1.65 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;The fear of man lays a snare, but whoever trusts in the LORD is safe.&rdquo; &mdash; Proverbs 29:25" }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px 0" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, marginBottom: 36 }}>
          {tabs.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "11px 8px",
                borderRadius: 9,
                border: "none",
                background: activeTab === t.id ? GOLD : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>LITERARY CONTEXT</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, margin: "0 0 14px" }}>The Second Solomonic Collection</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 10&ndash;29 makes up the second major Solomonic collection, with chapters 25&ndash;29 specifically identified as &ldquo;proverbs of Solomon that the men of Hezekiah king of Judah copied&rdquo; (25:1). Proverbs 29 stands at the end of this long section as a kind of compressed finale &mdash; not a summary, but a thematically concentrated set of sayings that returns urgently to the most consequential questions: who leads well? who receives correction? who serves justice? who trusts the LORD alone?" }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter has a looser structure than some proverb collections &mdash; it does not follow a single narrative thread but gathers related wisdom clusters around the themes of leadership, discipline, the poor, self-control, and the fear of man. The density and urgency of the material suggest that the collector saw these topics as the hinge questions of covenant society." }}
              />
            </div>

            {/* Two columns */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: ROSE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>THE DANGER</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>Hardening to Reproof</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Verse 1 opens the chapter with the most severe warning in the entire book: &ldquo;He who is often reproved, yet stiffens his neck, will suddenly be broken beyond healing.&rdquo; The Hebrew berega &mdash; suddenly &mdash; and the phrase &ldquo;beyond healing&rdquo; (Hebrew ein marpe) signal the finality of hardened refusal to receive correction. Wisdom is not the absence of failure; it is the posture of receiving correction before it is too late." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>THE CONTRAST</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>Wise vs. Wicked Ruler</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The chapter returns repeatedly to the contrast between wise and wicked rulers. &ldquo;When the righteous thrive, the people rejoice; when the wicked rule, the people groan&rdquo; (v.2). &ldquo;A king who gives justice makes the land stable&rdquo; (v.4). &ldquo;If a ruler listens to falsehood, all his servants will be wicked&rdquo; (v.12). Leadership is not morally neutral in Proverbs &mdash; it produces either flourishing or groaning, depending on the character of the one who leads." }}
                />
              </div>
            </div>

            {/* Key verses */}
            <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 16 }}>KEY VERSES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${ROSE}` }}>
                  <div style={{ color: ROSE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Proverbs 29:1</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;He who is often reproved, yet stiffens his neck, will suddenly be broken beyond healing.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Proverbs 29:18</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Where there is no prophetic vision the people cast off restraint, but blessed is he who keeps the law.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GREEN}` }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Proverbs 29:25</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;The fear of man lays a snare, but whoever trusts in the LORD is safe.&rdquo;" }}
                  />
                </div>
              </div>
            </div>

            {/* Structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 14 }}>THEMATIC CLUSTERS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "v.1", title: "The Cost of Refusing Correction", color: ROSE, summary: "The person who hardens after repeated reproof will be broken suddenly and beyond healing" },
                  { ref: "vv.2, 4, 12", title: "The Wise Ruler vs. the Wicked Ruler", color: GOLD, summary: "Leadership determines whether people rejoice or groan; justice stabilizes the land; a ruler who listens to lies produces a wicked staff" },
                  { ref: "vv.5, 23, 25", title: "Flattery, Pride, and the Fear of Man", color: PURPLE, summary: "Flattery is a net; pride precedes a fall; the fear of man is a snare -- trusting God is safety" },
                  { ref: "vv.7, 13, 14", title: "Justice for the Poor", color: GREEN, summary: "The righteous cares about the cause of the poor; the LORD lights both the eyes of the poor and the oppressor; a king who judges truly makes his throne endure" },
                  { ref: "vv.11, 20, 22", title: "Self-Control and the Tongue", color: BLUE, summary: "A fool vents his whole spirit; a wise man holds back quietly; there is more hope for a fool than for a man hasty in words" },
                  { ref: "vv.15, 17", title: "The Discipline of Children", color: "#0D9488", summary: "The rod and reproof give wisdom; a child left to himself brings shame to his mother" },
                  { ref: "vv.25-26", title: "Fear of Man vs. Trust in the LORD", color: ROSE, summary: "The fear of man is a snare; trust in the LORD is safety; justice comes from the LORD, not from rulers" },
                ].map((s) => (
                  <div key={s.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ minWidth: 72, color: s.color, fontWeight: 800, fontSize: 13, paddingTop: 1 }}>{s.ref}</div>
                    <div>
                      <div style={{ color: s.color, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{s.title}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: s.summary }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* v.18 note */}
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>A NOTE ON VERSE 18</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 29:18 is often quoted in contemporary church and organizational contexts as though &ldquo;vision&rdquo; means a strategic plan or organizational mission statement. The Hebrew word is hazon &mdash; prophetic revelation, the word of the LORD mediated through a prophet. The KJV translation &ldquo;where there is no vision, the people perish&rdquo; is memorable but slightly misleading. The ESV &ldquo;where there is no prophetic vision, the people cast off restraint&rdquo; is closer: without God&rsquo;s revealed word shaping a community, it becomes unmoored. This is a text about the authority of Scripture and prophetic revelation in community life, not about organizational visioning." }}
              />
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Key Themes in Proverbs 29</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Six interlocking themes run through the chapter, forming a compressed theology of leadership, justice, self-mastery, and trust." }}
              />
            </div>

            {[
              {
                color: ROSE,
                title: "The Danger of Hardening to Reproof",
                icon: "Correction and the Stiff Neck",
                body1: "Verse 1 is the chapter&rsquo;s most sobering statement: &ldquo;He who is often reproved, yet stiffens his neck, will suddenly be broken beyond healing.&rdquo; The phrase &ldquo;often reproved&rdquo; implies a history of correction offered and rejected. The stiff neck (see Exodus 32:9; Deuteronomy 9:6) is a biblical image for the hardened resistance to God&rsquo;s correction. What is catastrophic is not a single refusal but the accumulated pattern &mdash; &ldquo;often reproved, yet stiffening.&rdquo;",
                body2: "The adverb &ldquo;suddenly&rdquo; (berega) is meant to shock: the person who thought they had time, who assumed the consequences would continue to be manageable, is broken without warning. &ldquo;Beyond healing&rdquo; (ein marpe) is the phrase used in 2 Chronicles 36:16 of Israel&rsquo;s final hardening before the Babylonian exile: &ldquo;until the wrath of the LORD rose against his people, until there was no remedy.&rdquo; The most dangerous spiritual condition is not gross sin but gradual, persistent, habitual refusal to receive correction.",
              },
              {
                color: GOLD,
                title: "The Wise Ruler and the Wicked Ruler",
                icon: "Leadership as Moral Responsibility",
                body1: "Proverbs 29 returns repeatedly to the contrast between wise and wicked leadership. Verse 2 states the social consequence: &ldquo;When the righteous thrive, the people rejoice; when the wicked rule, the people groan.&rdquo; Leadership is not morally neutral. The character of the ruler shapes the moral climate of the community. A king who gives justice makes the land stable (v.4); a king who exacts heavy tribute destroys it.",
                body2: "Verse 12 adds a further dimension: &ldquo;If a ruler listens to falsehood, all his servants will be wicked.&rdquo; The ruler&rsquo;s epistemic habits shape his staff. A leader who is willing to hear flattery and spin will inevitably surround himself with those who traffic in it &mdash; and those are precisely the people who will not tell him the truth when it matters most. The virtuous circle runs the other way: a ruler who insists on truth will attract truth-tellers. Leadership culture flows from the top.",
              },
              {
                color: GREEN,
                title: "Justice for the Poor",
                icon: "The Righteous Who Cares",
                body1: "Verse 7 draws one of the sharpest contrasts in the chapter: &ldquo;A righteous man knows the rights of the poor; a wicked man does not understand such knowledge.&rdquo; The knowledge of the rights of the poor is not primarily legal knowledge but moral perception &mdash; the ability to see the vulnerable as persons with legitimate claims. The wicked man is not described as hostile to the poor; he simply does not understand their claims. Indifference and blindness are forms of injustice.",
                body2: "Verse 13 offers a stunning theological grounding for concern about the poor: &ldquo;The poor man and the oppressor meet together; the LORD gives light to both their eyes.&rdquo; Both the poor and the one who oppresses them receive their sight from the same LORD. This is both an equalizing statement (all human beings depend on God for their existence) and an implicit indictment (the oppressor uses what God gave him to crush someone else who also received their life from God). Verse 14 adds the royal application: &ldquo;If a king faithfully judges the poor, his throne will be established forever.&rdquo;",
              },
              {
                color: PURPLE,
                title: "Flattery as a Net",
                icon: "The Danger of the Flatterer",
                body1: "Verse 5 gives a pointed image: &ldquo;A man who flatters his neighbor spreads a net for his feet.&rdquo; The net image is significant &mdash; flattery looks like a gift but functions as a trap. The person who flatters you is not giving you an accurate picture of yourself; they are giving you a distorted picture that, if believed, will lead you to make worse decisions, take inappropriate risks, and surround yourself with sycophants.",
                body2: "The connection to verse 12 (a ruler who listens to falsehood fills his court with the wicked) shows how flattery is not merely a personal problem but a systemic one. The flatterer depends on the receiver&rsquo;s willingness to be deceived &mdash; and verse 23 shows the root of that willingness: pride. &ldquo;A man&rsquo;s pride will bring him low, but he who is lowly in spirit will obtain honor.&rdquo; Pride makes a man susceptible to flattery; humility allows him to hear the truth he needs to hear.",
              },
              {
                color: BLUE,
                title: "Restraint, Vision, and the Tongue",
                icon: "Self-Control as Wisdom",
                body1: "Verse 11 captures one of the most practical distinctions in Proverbs: &ldquo;A fool gives full vent to his spirit, but a wise man quietly holds it back.&rdquo; The fool&rsquo;s problem is not that he feels strongly &mdash; it is that he has no filter between feeling and expression. Whatever arises, he says. The wise man also feels strongly; what distinguishes him is the capacity for interior self-regulation &mdash; the ability to feel the emotion without being driven by it.",
                body2: "Verse 18 links this to the prophetic: where there is no prophetic vision (hazon), the people cast off restraint. The word for &ldquo;restraint&rdquo; (para) means to let go, to be unrestrained, to be unmoored. Without the word of the LORD shaping the imagination and defining reality, a community loses its anchor and drifts. Verse 20 adds the practical warning: &ldquo;Do you see a man who is hasty in his words? There is more hope for a fool than for him.&rdquo; Haste in speech is treated as more dangerous than foolishness itself &mdash; because it combines ignorance with the power to act on it immediately.",
              },
              {
                color: ROSE,
                title: "The Fear of Man vs. Trust in the LORD",
                icon: "The Snare and the Safety",
                body1: "Verse 25 may be the most psychologically precise verse in the entire chapter: &ldquo;The fear of man lays a snare, but whoever trusts in the LORD is safe.&rdquo; The fear of man is not primarily a social anxiety disorder &mdash; it is a form of idolatry. To fear man is to grant man the power to define your worth, determine your safety, and control your choices. When human approval becomes the metric by which you measure your security, you are trapped &mdash; because human approval is endlessly variable, and you will never have enough of it.",
                body2: "Verse 26 adds the political dimension: &ldquo;Many seek the face of a ruler, but it is from the LORD that a man gets justice.&rdquo; The temptation is to seek justice from earthly power brokers &mdash; to work the room, to curry favor, to appeal to the influential. Proverbs says this is a category error: ultimate justice comes from the LORD. The practical implication is that both the fear of man and the trust in human power structures as the final court of appeal are forms of misplaced dependence.",
              },
            ].map((theme, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 14, padding: 26, marginBottom: 16 }}>
                <div style={{ color: theme.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 8 }}>{theme.icon}</div>
                <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 19, margin: "0 0 14px" }}>{theme.title}</h3>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: theme.body1 }}
                />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body2 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Verse by Verse: Proverbs 29</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of the chapter&rsquo;s major proverbs, with word studies and cross-references." }}
              />
            </div>

            {[
              {
                ref: "Verse 1",
                color: ROSE,
                heading: "The Suddenly Broken",
                verses: [
                  { v: "v.1", text: "\"He who is often reproved, yet stiffens his neck, will suddenly be broken beyond healing.\"", note: "The phrase &ldquo;often reproved&rdquo; (tokahot) implies a repeated pattern of correction offered. The stiff neck is the biblical image of Israel&rsquo;s stubbornness (Exodus 32:9; Deuteronomy 9:6; Nehemiah 9:16). &ldquo;Suddenly&rdquo; (berega) is the word of shock -- the person had no sense that the end was near. &ldquo;Beyond healing&rdquo; (ein marpe) echoes 2 Chronicles 36:16, the final hardening before exile. This verse is a mercy warning at the beginning of the chapter: do not harden. The chapter that follows is an extended illustration of why correction must be received." },
                ],
              },
              {
                ref: "Verses 2, 4, 12, 14",
                color: GOLD,
                heading: "Wise and Wicked Rulers",
                verses: [
                  { v: "v.2", text: "\"When the righteous increase, the people rejoice, but when the wicked rule, the people groan.\"", note: "The Hebrew tzadikim increase (rabbim, thrive, multiply) produces joy; the wicked &ldquo;rule&rdquo; (mashal, exercise dominion) produces groaning. The contrast is not abstract: when leadership is righteous, it creates conditions in which the people can flourish. When it is wicked, it creates conditions of oppression. Proverbs does not sentimentalize power -- it holds it to strict moral account." },
                  { v: "v.4", text: "\"A king who gives justice makes the land stable, but one who levies heavy taxes tears it down.\"", note: "The king who gives justice (mishpat) creates a stable (yaamod, stands firm) land. The one who levies excessive taxes -- or exacts tribute that benefits himself rather than the community -- tears it down. This is the economics of wisdom: justice is the foundation of durable society. Societies built on extraction cannot stand." },
                  { v: "v.12", text: "\"If a ruler listens to falsehood, all his servants will be wicked.\"", note: "The ruler&rsquo;s willingness to receive lies shapes his entire court. This is systemic: the ethical culture of a team flows from what the leader will tolerate hearing. A leader who rewards flattering reports will get only flattering reports &mdash; which means he will govern on the basis of unreality. The servants become wicked not because they were hired wicked but because the environment selects for those willing to traffic in falsehood." },
                  { v: "v.14", text: "\"If a king faithfully judges the poor, his throne will be established forever.\"", note: "The test of a king&rsquo;s justice is his treatment of the poor &mdash; those who have no power to reward or punish him. A king who gives the poor a fair hearing when there is nothing in it for him reveals a justice that is genuinely principled. That justice is what makes thrones durable. The word &ldquo;forever&rdquo; (laad) is hyperbolic but theologically serious: durable governance is always grounded in justice for the vulnerable." },
                ],
              },
              {
                ref: "Verses 5, 23",
                color: PURPLE,
                heading: "Flattery, Pride, and Humility",
                verses: [
                  { v: "v.5", text: "\"A man who flatters his neighbor spreads a net for his feet.\"", note: "The &ldquo;net&rdquo; image (reshet) is used in Psalms and Proverbs for the traps set by the wicked (Psalm 9:15; 25:15; 31:4). Flattery is a trap because it distorts the target&rsquo;s self-perception, leading to decisions based on an inflated or false picture. It also traps the flatterer in a web of false relationship that must be maintained with more flattery. Both the giver and receiver are ultimately caught." },
                  { v: "v.23", text: "\"One's pride will bring him low, but he who is lowly in spirit will obtain honor.\"", note: "The inversion is the recurring wisdom pattern: pride (gevah) brings low; humility (shefal ruach, literally &ldquo;low of spirit&rdquo;) receives honor. The theological grounding is James 4:6 and 1 Peter 5:5: &ldquo;God opposes the proud but gives grace to the humble.&rdquo; Pride is ultimately a misreading of reality -- a claim to independence and self-sufficiency that is structurally false for creatures." },
                ],
              },
              {
                ref: "Verse 7, 13",
                color: GREEN,
                heading: "The Poor and the Oppressor",
                verses: [
                  { v: "v.7", text: "\"A righteous man knows the rights of the poor; a wicked man does not understand such knowledge.\"", note: "The word &ldquo;knows&rdquo; (yodea) is more than intellectual awareness &mdash; it is the relational, engaged knowledge of someone who has paid attention. The righteous person has developed the perception to see the claims of the poor as legitimate and pressing. The wicked man does not understand (lo yavin) -- his blindness is a form of moral failure, not just ignorance." },
                  { v: "v.13", text: "\"The poor man and the oppressor meet together; the LORD gives light to the eyes of both.\"", note: "This verse is not naive -- it is not saying the poor and oppressor are equally positioned. It is saying that both exist and act within the same universe, governed by the same LORD who gives sight (metaphor for life and perception) to both. The implication: the oppressor cannot claim that his power exempts him from the LORD&rsquo;s oversight. He too was given his sight by God; he will answer to God for what he did with it." },
                ],
              },
              {
                ref: "Verses 11, 20, 22",
                color: BLUE,
                heading: "The Tongue and Self-Control",
                verses: [
                  { v: "v.11", text: "\"A fool gives full vent to his spirit, but a wise man quietly holds it back.\"", note: "The fool &ldquo;gives full vent&rdquo; (yaotsi) &mdash; he releases everything inside him without filter. The wise man holds it back (yeshabbehenna) &mdash; not suppresses it, but holds it in check. The difference is not the intensity of feeling but the presence or absence of an interior governor. Self-control is not the absence of strong emotion; it is the capacity to choose what to do with it." },
                  { v: "v.20", text: "\"Do you see a man who is hasty in his words? There is more hope for a fool than for him.\"", note: "Hastiness in words is treated as more dangerous than outright foolishness &mdash; because haste combines the wrong content with the wrong timing and then acts on it before wisdom can intervene. The fool at least doesn&rsquo;t know what he doesn&rsquo;t know; the hasty man knows something but acts on it so quickly that he can&rsquo;t be corrected before the damage is done." },
                  { v: "v.22", text: "\"A man of wrath stirs up strife, and one given to anger causes much transgression.\"", note: "The &ldquo;man of wrath&rdquo; (ish aph) is not merely someone who feels anger but someone who is defined by it, who is &ldquo;given to anger&rdquo; (baal hemah, literally &ldquo;owner of fury&rdquo;). Anger as a settled disposition, a mode of being rather than a response to injustice, is a generator of transgression &mdash; not just for the angry person but for those around him. Proverbs takes seriously the systemic damage of unregulated emotion." },
                ],
              },
              {
                ref: "Verse 15, 17, 18",
                color: "#0D9488",
                heading: "Children, Vision, and the Word",
                verses: [
                  { v: "v.15", text: "\"The rod and reproof give wisdom, but a child left to himself brings shame to his mother.\"", note: "The rod (shevet) and reproof (tokahah) are the twin instruments of formation. The rod without reproof is violence; reproof without the rod is ineffective sentimentality. Together they give wisdom. The contrast is not between discipline and love but between engaged discipline and abandonment -- &ldquo;a child left to himself&rdquo; (na&rsquo;ar mashlah) is one who has been given to himself as his own authority, without external formation. The result is shame." },
                  { v: "v.17", text: "\"Discipline your son, and he will give you rest; he will give delight to your heart.\"", note: "The other side of v.15: the discipline given now produces rest later. This is the logic of formation: costly in the short term, fruitful in the long term. The rest (menuha) and delight (maadannot) are not primarily the parent&rsquo;s emotional rewards but the signs of a person who has been shaped well enough to navigate life without constant crisis management from others." },
                  { v: "v.18", text: "\"Where there is no prophetic vision the people cast off restraint, but blessed is he who keeps the law.\"", note: "Hazon (prophetic vision, revealed word) is the anchor of community order. Without it, para &mdash; the people become unmoored, loose, unrestrained. The contrast is not between vision and law but between the presence and absence of the LORD&rsquo;s revealed word. Where the word is active in the community, there is law-keeping and blessing. Where it is absent, there is drift." },
                ],
              },
              {
                ref: "Verses 25-26",
                color: ROSE,
                heading: "The Fear of Man and Trust in the LORD",
                verses: [
                  { v: "v.25", text: "\"The fear of man lays a snare, but whoever trusts in the LORD is safe.\"", note: "The fear of man (haredath adam) is a settled orientation toward human approval as the source of safety and value. The snare (moqesh) is the trap that looks like relationship but is captivity. The alternative is not fearlessness in the psychological sense but a repositioning of trust: &ldquo;whoever trusts in the LORD is set on high&rdquo; (yesugav) &mdash; elevated to a place where the snare cannot reach. Edward Welch&rsquo;s work on this text shows how the fear of man is ultimately the worship of man &mdash; giving to human beings the authority that belongs to God alone." },
                  { v: "v.26", text: "\"Many seek the face of a ruler, but it is from the LORD that a man gets justice.\"", note: "The closing verse of this cluster identifies the systemic equivalent of the fear of man: seeking justice from rulers rather than from the LORD. Many (rabbim) seek the ruler&rsquo;s face &mdash; the face that grants or withholds favor. But mishpat &mdash; real justice &mdash; comes from the LORD. This is not a counsel to ignore earthly institutions but to relativize them: they are instruments, not sources. The final court of appeal is always the LORD." },
                ],
              },
            ].map((section, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 14, padding: 26, marginBottom: 20 }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: section.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 6 }}>{section.ref}</div>
                  <h3 style={{ color: section.color, fontWeight: 800, fontSize: 20, margin: 0 }}>{section.heading}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {section.verses.map((verse, j) => (
                    <div key={j} style={{ background: BG, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: section.color, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{verse.v}</div>
                      <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 10px", borderLeft: `2px solid ${section.color}50`, paddingLeft: 12 }}
                        dangerouslySetInnerHTML={{ __html: verse.text }}
                      />
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: verse.note }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 8px" }}>Living Proverbs 29 Today</h2>
              <p style={{ color: MUTED, fontSize: 15, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 29 is not ancient courtly wisdom for ancient Near Eastern kings. It is a surgical set of observations about human nature that are as accurate in the office, the classroom, the family, and the congregation as they were in the palace of Solomon. Here is how the chapter&rsquo;s major movements speak to life today." }}
              />
            </div>

            {[
              {
                color: ROSE,
                number: "01",
                title: "Receive Correction Before Hardening Leads to Ruin",
                verses: "Proverbs 29:1",
                body1: "Verse 1 is the most urgent warning in the chapter, and it deserves to be treated with seriousness rather than familiarity. The person who hardens after repeated reproof is not someone who refused one correction &mdash; it is someone who refused many, each time telling themselves they were the exception, that the rebuke was unfair, that the person correcting them did not understand. The hardening happens gradually, over time, and the breaking comes suddenly.",
                body2: "The practical question is: who in your life is permitted to correct you? Do you have structures of genuine accountability -- a small group, a mentor, a spouse, a friend -- who have actual permission to speak truth and be heard? The person who has surrounded themselves only with admirers is already on the path of verse 1. The posture that receives correction graciously is not weakness; it is the prerequisite for wisdom.",
                practice: "Name three people in your life who have permission to correct you. When did they last exercise that permission? If the answer is &ldquo;never,&rdquo; consider whether you have genuinely given them the permission you think you have. Write a specific prayer asking God to make you a person who receives reproof.",
              },
              {
                color: GOLD,
                number: "02",
                title: "Leadership as a Moral Responsibility",
                verses: "Proverbs 29:2, 4, 12, 14",
                body1: "Proverbs 29 does not allow leaders to hide behind institutional neutrality. The ruler who listens to lies creates a wicked staff (v.12). The king who levies heavy tribute tears down the land (v.4). The wicked who rule cause the people to groan (v.2). Leadership shapes the moral ecology of every community it leads &mdash; family, team, congregation, city, nation.",
                body2: "The most penetrating application is verse 12: the epistemic culture of a team or organization flows from what the leader is willing to hear. Leaders who reward loyalty over honesty, who punish the bearers of bad news, who prefer flattering reports to accurate ones, will create an organization that tells them what they want to hear &mdash; right up to the moment of catastrophic failure. The discipline of actively seeking hard truth, welcoming dissent, and rewarding those who tell you what you need to know rather than what you want to know is not just good management; it is wisdom.",
                practice: "If you lead anything &mdash; a family, a team, a classroom, a ministry &mdash; ask the people you lead: &ldquo;What am I not hearing that I need to hear? Where do you hesitate to tell me the truth?&rdquo; Do this in a context that makes honest answers safe. Then act on what you hear.",
              },
              {
                color: GREEN,
                number: "03",
                title: "Justice for the Vulnerable as a Mark of Wisdom",
                verses: "Proverbs 29:7, 13, 14",
                body1: "Verse 7 makes care for the poor a mark of righteousness rather than an optional act of generosity. The righteous person knows (yodea, relationally, engagedly) the rights of the poor. This knowledge is the result of paying attention &mdash; of being the kind of person who notices the claims of those who have no power to press them. The wicked man does not understand such knowledge; his blindness is not innocent.",
                body2: "Verse 13 provides the theological grounding: the poor and the oppressor both receive their sight from the LORD. This shared dependence on the same God is the basis of human dignity that transcends social position. The oppressor who crushes someone who also bears the image of God and whose life comes from the same divine gift is accountable to that God. Justice for the poor is not charity; it is the recognition of a claim that God himself underwrites.",
                practice: "Name one specific way your community or organization currently fails to see or serve the most vulnerable people in its reach. What would it look like to &ldquo;know the rights&rdquo; of those people &mdash; to engage with their actual situation, understand their actual needs, and act on the actual claims they have? Choose one concrete step.",
              },
              {
                color: ROSE,
                number: "04",
                title: "Breaking Free from the Fear of Man",
                verses: "Proverbs 29:25-26",
                body1: "Verse 25 is one of the most psychologically accurate verses in the wisdom literature: the fear of man is a snare. It is a snare because it feels like a natural, even virtuous, response to social reality &mdash; &ldquo;I just care what people think&rdquo; &mdash; while actually functioning as a trap that prevents honest speech, genuine action, and authentic obedience. The person trapped in the fear of man cannot tell the truth when it is costly, cannot say no when it would disappoint, cannot lead when it would make enemies.",
                body2: "The alternative Proverbs 29:25 offers is not stoic indifference or thick-skinned bravado; it is trust: &ldquo;whoever trusts in the LORD is set on high.&rdquo; The cure for the fear of man is not more self-confidence but a repositioning of ultimate dependence. When I know that my safety, my worth, and my outcome are held by the LORD and not by the approval of the people around me, I am freed to be honest, to act rightly, and to bear the consequences of truth-telling without being destroyed by them.",
                practice: "Edward Welch&rsquo;s book &ldquo;When People Are Big and God Is Small&rdquo; is the most thorough pastoral treatment of Proverbs 29:25. Read chapters 1-3 this week. Then identify one specific area of your life where the fear of man is currently shaping your decisions &mdash; a conversation you are avoiding, a truth you are withholding, an action you are delaying. Bring it to God in specific prayer and take one step.",
              },
              {
                color: PURPLE,
                number: "05",
                title: "Vision, Restraint, and the Word of God",
                verses: "Proverbs 29:18",
                body1: "Verse 18 is commonly misapplied to organizational strategy (&ldquo;we need a vision statement!&rdquo;) but its actual meaning is more urgent and more theological: without the prophetic word of God shaping a community, people become unmoored. They cast off restraint &mdash; not necessarily by committing spectacular sins but by losing the sense of a reality larger than themselves, a story they are part of, an authority to whom they answer.",
                body2: "For the church, this is a text about the ministry of Scripture. A congregation that is not regularly encountering the word of God &mdash; preached, taught, read, memorized, discussed &mdash; will drift. Not necessarily into dramatic apostasy but into a vague, unanchored Christianity that accommodates itself more and more to the surrounding culture because there is no active prophetic word pushing back. The blessed person in verse 18 is not the one who has a personal vision statement but the one who &ldquo;keeps the law&rdquo; &mdash; who lives within the revealed structure of God&rsquo;s word.",
                practice: "Assess your community&rsquo;s relationship to Scripture: is the word of God genuinely shaping your imagination, your decisions, and your community&rsquo;s practices? Or is it decorative &mdash; present on Sundays but not active in daily life? Choose one practice to increase your active engagement with Scripture: a reading plan, a memorization commitment, a study group, a practice of lectio divina.",
              },
              {
                color: BLUE,
                number: "06",
                title: "The Self-Controlled Person as the Wise Person",
                verses: "Proverbs 29:11, 20, 22",
                body1: "Proverbs 29 returns three times to the theme of self-control and the tongue (vv.11, 20, 22). This is not accidental. The chapter is concerned with leadership, justice, and the shape of community life &mdash; and all of these are destroyed or built by the quality of human speech. The fool vents everything (v.11); the hasty speaker acts on incomplete information before wisdom can correct him (v.20); the angry man generates strife wherever he goes (v.22).",
                body2: "The alternative is not silence but cultivation: the wise man &ldquo;quietly holds back&rdquo; (yeshabbehenna, keeps it at peace, quiets it). This is not repression &mdash; it is the interior work of self-mastery that allows a person to choose when and how to speak, rather than being driven by their impulses. James 1:19 echoes this exactly: &ldquo;be quick to hear, slow to speak, slow to anger.&rdquo; The formation of the tongue is a central discipline of the wisdom tradition because the tongue shapes reality &mdash; for good or for destruction.",
                practice: "For one week, practice the rule of &ldquo;one breath before responding.&rdquo; Before every significant response &mdash; in conversation, in email, in social media &mdash; take one breath, ask &ldquo;is this true, necessary, and timely?&rdquo; and then respond. Keep a simple journal of moments when the breath changed what you said. Review at the end of the week.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 14, padding: 26, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${item.color}18`, border: `2px solid ${item.color}50`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{item.number}</div>
                  <div>
                    <div style={{ color: item.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 4 }}>{item.verses}</div>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{item.title}</h3>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: item.body1 }}
                />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                  dangerouslySetInnerHTML={{ __html: item.body2 }}
                />
                <div style={{ background: `${item.color}10`, border: `1px solid ${item.color}25`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 12, letterSpacing: "0.07em", marginBottom: 6 }}>PRACTICE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.practice }}
                  />
                </div>
              </div>
            ))}

            {/* Closing summary */}
            <div style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 26, marginBottom: 20 }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>SUMMARY</div>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Proverbs 29 in a Single Sentence</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The person who receives correction, leads with justice, cares for the poor, controls the tongue, disciplines the next generation, and fears the LORD rather than man is the person whose life will stand &mdash; not because they are impressive but because they have built on what endures. The chapter closes with the observation that ultimate justice comes from the LORD, not from any ruler (v.26). To live wisely in Proverbs 29&rsquo;s world is to keep that truth at the center: everything else &mdash; leadership, correction, justice, speech, formation &mdash; flows from knowing who the final authority is and trusting him rather than the alternatives." }}
              />
            </div>
          </div>
        )}

        {/* Video section */}
        <div style={{ marginTop: 48, marginBottom: 60 }}>
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 16, marginBottom: 28 }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Video teachings on Proverbs 29 &mdash; leadership, the fear of man, justice, and wisdom for daily life." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GOLD, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.5 }}>Proverbs 29 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
