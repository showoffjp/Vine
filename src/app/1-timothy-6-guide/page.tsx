"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const OVERVIEW_PARAGRAPHS = [
  {
    heading: "The Final Chapter of Paul&rsquo;s First Letter",
    body: "First Timothy 6 brings Paul&rsquo;s first letter to a close with some of the most searching and memorable instruction in the Pastoral Epistles. Written to his young protege Timothy, who was leading the church at Ephesus, this chapter addresses three overlapping concerns: the danger of false teachers who have turned faith into a financial enterprise, the liberating power of godliness with contentment, and the serious responsibility that comes with material wealth. The chapter climaxes in one of the most exalted doxologies in all of Paul&rsquo;s letters &mdash; a soaring declaration of God&rsquo;s sovereignty before the charge to Timothy to guard the deposit entrusted to him.",
  },
  {
    heading: "The Context of Ephesian Prosperity",
    body: "Ephesus was one of the great commercial cities of the Roman world &mdash; home to the temple of Artemis, a major banking center, and a hub of trade routes. The temptation to use religious influence for personal financial gain was not abstract. Paul has already addressed the problem of false teachers in chapters 1, 4, and 6. Here he names the root: imagining that godliness is a means of gain (v.5). The remedy Paul offers is not asceticism or poverty but a radical reorientation: godliness with contentment is itself the great gain, precisely because it requires nothing that can be taken away.",
  },
  {
    heading: "The Structure of Chapter 6",
    body: "The chapter opens with instruction about slaves and masters (vv.1-2), which carries an implicit critique of the social ordering of Ephesian commerce. Paul then turns to a profile of false teachers (vv.3-5) and delivers his famous counter-word: the great gain is godliness with contentment (vv.6-10). A direct personal charge to Timothy follows &mdash; flee, pursue, fight, take hold &mdash; culminating in a magnificent ascription of glory to God (vv.11-16). Paul then turns to the wealthy with practical instruction (vv.17-19) before closing with a brief but weighty personal appeal to Timothy to guard what has been entrusted to him (vv.20-21).",
  },
];

const KEY_THEMES = [
  {
    id: "contentment",
    color: GREEN,
    title: "Godliness with Contentment as Great Gain",
    verse: "1 Timothy 6:6-8",
    body: "Paul&rsquo;s contrast is precise: the false teachers think godliness is a means of financial gain. Paul agrees that godliness is gain &mdash; but only when paired with contentment. The word translated &ldquo;contentment&rdquo; (autarkeia in Greek) carried Stoic resonances of self-sufficiency, but Paul fills it with a different meaning: sufficiency found in God rather than in self. We brought nothing into the world; we can take nothing out. The person who has learned to be satisfied with food and clothing has achieved something more valuable than the wealthiest person who is never satisfied. This is not a command to prefer poverty; it is a liberating reorientation of what counts as gain.",
  },
  {
    id: "love-of-money",
    color: ROSE,
    title: "The Love of Money as Root of All Kinds of Evil",
    verse: "1 Timothy 6:9-10",
    body: "Paul does not say money is evil, or even that wealth is evil &mdash; he says the love of money is a root of all kinds of evil. The Greek philarguria (love of silver) names a disordered affection: when money becomes what the heart trusts, pursues, and depends on, it functions as an idol. Paul describes a progression: the desire to be rich leads to temptation, then to a snare, then to harmful desires, then to ruin and destruction. He then adds a heartbreaking pastoral observation: some, through this craving, have wandered from the faith and pierced themselves with many pangs. The love of money is a spiritual danger, not just a moral one.",
  },
  {
    id: "fight-of-faith",
    color: BLUE,
    title: "Fleeing and Pursuing &mdash; The Fight of Faith",
    verse: "1 Timothy 6:11-12",
    body: "The dramatic reversal of verse 11 &mdash; &ldquo;But as for you, O man of God&rdquo; &mdash; marks a sharp contrast with the false teachers. Timothy is given two complementary imperatives. First, flee: there are things the person of God must run from, and they include the love of money, the spirit of controversy, and the corruption of those who imagine godliness is a financial strategy. Second, pursue: righteousness, godliness, faith, love, steadfastness, gentleness. The list is comprehensive &mdash; it touches the vertical (godliness, faith), the horizontal (love, gentleness), the inward (righteousness), and the persevering (steadfastness). The fight of faith is not passive; it is an active contest of the will directed by grace.",
  },
  {
    id: "charge-to-timothy",
    color: PURPLE,
    title: "The Charge to Timothy and the Doxology",
    verse: "1 Timothy 6:13-16",
    body: "Paul grounds his charge to Timothy in the presence of God who gives life to all things and of Christ Jesus who in his testimony before Pilate made the good confession. The repetition of &ldquo;I charge you&rdquo; (vv.13 and 17) signals that these are solemn commands, not mere suggestions. The charge culminates in a doxology that is among the most elevated in the New Testament: God who is the blessed and only Sovereign, the King of kings and Lord of lords, who alone has immortality, who dwells in unapproachable light, whom no one has ever seen or can see &mdash; to him be honor and eternal dominion. The glorious sovereignty of God is the ultimate ground of the fight of faith.",
  },
  {
    id: "charge-to-rich",
    color: GOLD,
    title: "The Charge to the Rich in This Present Age",
    verse: "1 Timothy 6:17-19",
    body: "Paul does not tell Timothy to command the wealthy to divest. He gives a more nuanced and demanding charge. The rich are not to be haughty &mdash; wealth produces a subtle pride, a sense of self-sufficiency and social superiority. They are not to set their hopes on the uncertainty of riches &mdash; wealth is inherently unstable; what seems like security is actually precarity. Instead they are to set their hopes on God who richly provides. And the rich are to be generous and ready to share &mdash; storing up treasure for the future by giving treasure away in the present. This is a form of eternal investing: laying up a good foundation for what is to come.",
  },
  {
    id: "guard-the-deposit",
    color: TEAL,
    title: "Guard the Deposit Entrusted to You",
    verse: "1 Timothy 6:20-21",
    body: "The letter ends with a personal appeal that summarizes the entire pastoral concern: guard what has been entrusted to you. The language of &ldquo;deposit&rdquo; (paratheke) is the language of banking and stewardship &mdash; something of great value placed in your keeping by another. Paul uses it again in 2 Timothy 1:12 and 1:14. The deposit is the sound teaching, the gospel, the pattern of words that Timothy has received from Paul. Two dangers threaten it: irreverent babble (empty talk that has the form of spiritual discourse but not the substance) and contradictions of what is falsely called knowledge. The false teachers claimed superior gnosis. Timothy is to avoid their chatter and keep his eyes on the deposit.",
  },
];

const VERSE_SECTIONS = [
  {
    ref: "vv. 1-2",
    title: "Slaves and Masters &mdash; Honor That Glorifies the Gospel",
    color: TEAL,
    body: "Paul opens the final chapter with instruction about those who are under the yoke of slavery &mdash; a significant portion of the Ephesian church. The instruction may seem alien to modern ears, but Paul&rsquo;s pastoral concern is clear: he does not want the gospel to be blasphemed. The reputation of the teaching matters. Specifically, Christian slaves with Christian masters are not to take advantage of the brotherhood as license for disrespect &mdash; rather, they are to serve all the better because those who benefit are beloved brothers. This establishes the pattern of the chapter: external status is not the measure of spiritual value, and the gospel is not a tool for social leverage. It is a call to faithful and honorable conduct in every station.",
  },
  {
    ref: "vv. 3-5",
    title: "False Teachers &mdash; Godliness as a Means of Gain",
    color: ROSE,
    body: "Paul now sketches the profile of the false teacher with clinical precision. The mark of false doctrine is that it does not agree with the sound words of our Lord Jesus Christ and with the teaching that accords with godliness. When the teaching is unhealthy, the teacher is sick: Paul says he is puffed up with conceit and understands nothing. He has a morbid craving for controversy and quarrels about words &mdash; producing envy, dissension, slander, evil suspicions, and constant friction. The clinical diagnosis is devastating: these are people who imagine that godliness is a means of gain. The false teacher has turned the gospel into a business. This is the theological root of everything that follows: what do you actually think godliness is for?",
  },
  {
    ref: "vv. 6-10",
    title: "Great Gain, Great Loss &mdash; Contentment and the Love of Money",
    color: GREEN,
    body: "Paul&rsquo;s counter-argument is one of the most compressed and powerful in his letters. Yes, godliness is great gain &mdash; but only when accompanied by contentment. The logic: we arrived in the world with nothing; we leave with nothing; the interval between those two nothings is where we imagine ourselves entitled to accumulate. Paul radically simplifies the baseline: food and clothing. If we have that, we have enough. But those who desire to be rich &mdash; note it is the desire, not the possession &mdash; fall into temptation and a snare. Paul quotes what appears to be a well-known proverb: the love of money is a root of all kinds of evils. The love, not the possession. And the pastoral wound: some have wandered from the faith and pierced themselves with many pangs. Wealth-love is a spiritual peril with spiritual consequences.",
  },
  {
    ref: "vv. 11-16",
    title: "The Man of God &mdash; Flee, Pursue, Fight, Take Hold",
    color: BLUE,
    body: "The sharp &ldquo;But as for you, O man of God&rdquo; is one of the most dramatic rhetorical turns in Paul&rsquo;s letters. It draws a bright line between Timothy and the false teachers. The imperatives cascade: flee these things, pursue righteousness, godliness, faith, love, steadfastness, gentleness; fight the good fight of the faith; take hold of the eternal life. The commands are alternately negative (flee) and positive (pursue, take hold), urgent (fight) and receptive (take hold of what has already been given). Paul grounds the charge in a double witness: God who gives life to all things, and Christ Jesus who before Pilate made the good confession. Timothy is to keep the commandment unstained until the appearing of our Lord &mdash; and then Paul breaks into doxology: the blessed and only Sovereign, the King of kings and Lord of lords, who alone has immortality, who dwells in unapproachable light. The fight of faith is fought before an audience of infinite majesty.",
  },
  {
    ref: "vv. 17-19",
    title: "The Rich in This Present Age &mdash; Hope and Generosity",
    color: GOLD,
    body: "Paul distinguishes the merely wealthy from those who desire wealth (v.9). For those who already possess riches, the instruction is specific and practical. Do not be haughty: wealth produces pride, a sense of having been favored, of being above ordinary need. Do not set your hope on the uncertainty of riches: wealth feels stable but is radically uncertain &mdash; it can evaporate through theft, market collapse, disaster, or death. Set your hope on God who richly provides us with everything to enjoy. The antidote to wealth-pride is wonder at the God who gives. The antidote to wealth-trust is trust in the Giver rather than the gift. And the practical expression of both: be rich in good works, be generous, be ready to share &mdash; thus storing up treasure in the form of a good foundation for the age to come.",
  },
  {
    ref: "vv. 20-21",
    title: "Guard the Deposit &mdash; The Final Charge to Timothy",
    color: PURPLE,
    body: "Paul closes the letter not with a blessing but with an urgent personal appeal. &ldquo;O Timothy&rdquo; &mdash; the vocative is emphatic, almost anxious. Guard the deposit entrusted to you. Avoid the irreverent babble and contradictions of what is falsely called knowledge, for by professing it some have swerved from the faith. The deposit is the whole gospel &mdash; the teaching, the pattern, the tradition that Paul has handed over. The danger is not frontal assault but quiet drift: people who started well, began to love the sophisticated-sounding alternatives, and gradually swerved from what matters. The letter ends as it began: with the urgency of sound doctrine in the face of its skilled imitations. Grace be with you.",
  },
];

const APPLICATION_POINTS = [
  {
    color: GREEN,
    title: "Contentment as a Spiritual Discipline",
    body: "Paul says contentment must be learned &mdash; which means it can be practiced, cultivated, and grown. In a culture engineered to maximize desire and minimize satisfaction, contentment is a counter-formation practice. It begins with gratitude for specific, concrete gifts. It continues with honest examination: what am I actually hoping will satisfy me? And it culminates in the theological truth that God himself is the only adequate object of the soul&rsquo;s desire. Practices: a gratitude journal that names specific gifts; a deliberate fast from shopping or comparison; naming an &ldquo;enough&rdquo; threshold and resting in it.",
  },
  {
    color: ROSE,
    title: "Fleeing the Love of Money",
    body: "Paul&rsquo;s warning is not addressed to the obviously greedy but to ordinary people susceptible to ordinary desire. The love of money does not announce itself as idolatry; it presents as prudence, security-planning, ambition, or providing for one&rsquo;s family. The diagnostic questions are: What do I think about when I am anxious? What do I imagine would finally give me peace? What am I unwilling to give up? Generosity is the primary antidote to the love of money &mdash; not because it destroys the danger but because it retrains the heart&rsquo;s attachment from accumulation to gift.",
  },
  {
    color: BLUE,
    title: "The Comprehensive Pursuit of Godliness",
    body: "The six virtues Timothy is commanded to pursue in v.11 &mdash; righteousness, godliness, faith, love, steadfastness, gentleness &mdash; span the full range of Christian character. This is not a pick-three menu; it is a comprehensive calling. Righteousness (moral uprightness), godliness (the whole pattern of devotion to God), faith (active trust), love (the great commandment), steadfastness (endurance under pressure), gentleness (the settled non-reactive quality that comes from security in God). The fight of faith is fought on all these fronts simultaneously. There is no aspect of Christian character that is optional.",
  },
  {
    color: GOLD,
    title: "Living Generously with Whatever God Has Given",
    body: "Paul&rsquo;s charge to the rich is not a command to become poor &mdash; it is a command to become rich in good works. This reframes the question of wealth entirely. The issue is not how much you have; it is how you hold it and what you do with it. &ldquo;Ready to share&rdquo; in Greek is koinonikos &mdash; one who shares in common, a person of genuine community. The opposite is the person who holds wealth as private possession, sealed off from the needs of others. The generous person is participating in the mutual life of the body of Christ, which is itself a foretaste of the age to come where all things are held in common under God.",
  },
  {
    color: PURPLE,
    title: "Guarding Sound Doctrine to the End",
    body: "Paul&rsquo;s final charge to Timothy reminds every pastor, teacher, and Christian disciple that the gospel must be actively guarded. Sound doctrine does not maintain itself; it requires people who know what was entrusted to them, who love it, who understand its shape well enough to recognize its counterfeits, and who refuse to trade it for sophisticated alternatives. The practical disciplines: regular reading of Scripture in its plain sense, sitting under and supporting faithful preaching, reading the great theologians who have wrestled with the deposit, and maintaining fellowship with those who share the commitment. Guard the deposit.",
  },
];

const videoItems = [
  { videoId: "kbpBHqME2r8", title: "1 Timothy 6 - Godliness with Contentment" },
  { videoId: "FOhg8rNEIy8", title: "The Love of Money - 1 Timothy 6:6-10 Sermon" },
  { videoId: "oYaIGQRxNoM", title: "Fight the Good Fight of Faith - 1 Timothy 6:11-16" },
  { videoId: "W3Ld3wKLgU4", title: "Charge to the Rich - 1 Timothy 6:17-21 Bible Study" },
];

export default function Timothy6GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0e1a14 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, border: `1px solid ${GREEN}55`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: GREEN, letterSpacing: 1, marginBottom: 18, textTransform: "uppercase" }}>
            Bible Study Guide
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: TEXT }}>
            1 Timothy 6
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 640, marginBottom: 24 }}
            dangerouslySetInnerHTML={{ __html: "Godliness with contentment is great gain &mdash; a verse-by-verse guide to the final chapter of Paul&rsquo;s first letter to Timothy, from the love of money to the fight of faith to the charge to guard the deposit." }}
          />
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "Book", value: "1 Timothy" },
              { label: "Chapter", value: "6" },
              { label: "Verses", value: "21" },
              { label: "Theme", value: "Godliness &amp; Contentment" },
            ].map((item) => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px" }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 2 }}
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
                <div style={{ fontSize: 14, color: TEXT, fontWeight: 700 }}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 24px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? `3px solid ${GREEN}` : "3px solid transparent",
                color: activeTab === tab.id ? GREEN : MUTED,
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 32 }}>
              <p style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>
                Key Verse
              </p>
              <p style={{ color: TEXT, fontSize: 18, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;But godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content.&rdquo; &mdash; 1 Timothy 6:6-8" }}
              />
            </div>

            {OVERVIEW_PARAGRAPHS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: TEXT, marginBottom: 12 }}
                  dangerouslySetInnerHTML={{ __html: item.heading }}
                />
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginTop: 24 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 18 }}>Chapter Structure at a Glance</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv. 1-2", summary: "Instruction to bondservants and masters &mdash; honoring the teaching", color: TEAL },
                  { ref: "vv. 3-5", summary: "Profile of the false teacher &mdash; godliness imagined as financial gain", color: ROSE },
                  { ref: "vv. 6-10", summary: "Godliness with contentment as great gain; the love of money as root of all evil", color: GREEN },
                  { ref: "vv. 11-16", summary: "Charge to Timothy: flee, pursue, fight, take hold; the King of kings doxology", color: BLUE },
                  { ref: "vv. 17-19", summary: "Charge to the wealthy: not haughty, not trusting riches, but rich in good works", color: GOLD },
                  { ref: "vv. 20-21", summary: "Final personal appeal: guard the deposit entrusted to you", color: PURPLE },
                ].map((row) => (
                  <div key={row.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ minWidth: 60, fontWeight: 800, fontSize: 13, color: row.color }}>{row.ref}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: row.summary }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "First Timothy 6 addresses several interlocking themes. Click each theme to explore it fully." }}
            />
            {KEY_THEMES.map((theme) => {
              const isOpen = openTheme === theme.id;
              return (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${isOpen ? theme.color + "60" : BORDER}`, borderRadius: 14, marginBottom: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button
                    type="button"
                    onClick={() => setOpenTheme(isOpen ? null : theme.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                      <div>
                        <div style={{ color: TEXT, fontWeight: 800, fontSize: 16 }}
                          dangerouslySetInnerHTML={{ __html: theme.title }}
                        />
                        <div style={{ color: theme.color, fontSize: 12, fontWeight: 700, marginTop: 2 }}>{theme.verse}</div>
                      </div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 22px 44px" }}>
                      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: theme.body }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}
              dangerouslySetInnerHTML={{ __html: "A section-by-section exposition of 1 Timothy 6, working through Paul&rsquo;s argument from the opening instruction about bondservants to the final charge to guard the deposit." }}
            />
            {VERSE_SECTIONS.map((section) => {
              const isOpen = openVerse === section.ref;
              return (
                <div key={section.ref} style={{ background: CARD, border: `1px solid ${isOpen ? section.color + "55" : BORDER}`, borderRadius: 14, marginBottom: 16, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpenVerse(isOpen ? null : section.ref)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ background: section.color, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{section.ref}</span>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 16 }}
                        dangerouslySetInnerHTML={{ __html: section.title }}
                      />
                    </div>
                    <span style={{ color: MUTED, fontSize: 22, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.85, margin: "20px 0 0" }}
                        dangerouslySetInnerHTML={{ __html: section.body }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 32 }}>
              <p style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>Living It Out</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "First Timothy 6 is not merely descriptive of a first-century problem &mdash; it is diagnostic of the perennial temptations that accompany material prosperity and the use of religious influence. These application points press the chapter&rsquo;s teaching into present-day discipleship." }}
              />
            </div>

            {APPLICATION_POINTS.map((point, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20, borderLeft: `4px solid ${point.color}` }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: point.color, marginBottom: 12 }}
                  dangerouslySetInnerHTML={{ __html: point.title }}
                />
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: point.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 28px", marginTop: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: TEXT, marginBottom: 20 }}>Discussion Questions</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Paul says godliness with contentment is great gain. What would it mean for you personally to be genuinely content with food and clothing? What is your actual &ldquo;enough&rdquo;?",
                  "The love of money is described as a root of all kinds of evils. Where do you see this dynamic &mdash; the desire for wealth producing spiritual, relational, or moral damage &mdash; in your own experience or in the world around you?",
                  "The six virtues Timothy is charged to pursue (righteousness, godliness, faith, love, steadfastness, gentleness) form a comprehensive portrait of Christian character. Which of these is most underdeveloped in your own life right now?",
                  "Paul&rsquo;s charge to the wealthy is not to give everything away but to be &ldquo;ready to share.&rdquo; How would you characterize the posture of your heart toward your material possessions? Are you holding them loosely or tightly?",
                  "What does it mean to &ldquo;guard the deposit&rdquo; in your own context &mdash; as a parent, a church member, a small group leader, a Christian in your workplace?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: BG, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <span style={{ minWidth: 26, height: 26, borderRadius: "50%", background: `${PURPLE}30`, color: PURPLE, fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always rendered below tabs */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: TEXT, marginBottom: 8 }}>Teaching Videos</h2>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}
            dangerouslySetInnerHTML={{ __html: "Sermons and expositions of 1 Timothy 6 from trusted Bible teachers." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: 0, lineHeight: 1.5 }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
