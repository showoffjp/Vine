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

type Tab = "overview" | "themes" | "verse" | "application";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

export default function FirstTimothy5GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "Y6NMq8HpBm0", title: "1 Timothy 5 - Caring for Widows and Honoring Elders" },
    { videoId: "pHLXUGNDMhA", title: "The Church as Family - Paul&rsquo;s Vision in 1 Timothy" },
    { videoId: "FkHK4jF0vhQ", title: "Leadership Accountability in the New Testament Church" },
    { videoId: "Wr4zplCiZxM", title: "Practical Wisdom for the Local Church - 1 Timothy" },
  ];

  const themes = [
    {
      color: GREEN,
      label: "The Church as Family",
      summary: "The opening verses of chapter 5 establish the governing metaphor for all of Paul&rsquo;s instructions: treat older men as fathers, younger men as brothers, older women as mothers, younger women as sisters. This is not sentimentality &mdash; it is a ecclesiological claim. The church is not a voluntary association, a religious club, or a service provider. It is a family. And family has obligations, patterns of respect, and forms of care that are not optional extras but constitutive of what family means. Every instruction in the chapter flows from this premise.",
    },
    {
      color: BLUE,
      label: "Honoring the Truly Vulnerable",
      summary: "The elaborate instructions about widows (vv.3&ndash;16) reflect Paul&rsquo;s pastoral concern for those who are genuinely without support. The repeated phrase &ldquo;truly widows&rdquo; (or &ldquo;real widows&rdquo;) distinguishes those who have no family network from those who have relatives who can care for them. Paul&rsquo;s concern is that the church&rsquo;s limited resources should reach those who have nowhere else to turn. This is not institutional meanness &mdash; it is the sober stewardship of care for the most vulnerable.",
    },
    {
      color: ROSE,
      label: "Family Responsibility First",
      summary: "One of the strongest statements in the chapter is verse 8: &ldquo;If anyone does not provide for his relatives, and especially for members of his household, he has denied the faith and is worse than an unbeliever.&rdquo; This is a striking escalation. The failure to care for one&rsquo;s family is not described as neglect or selfishness but as a denial of the faith &mdash; a practical apostasy. Paul&rsquo;s logic is that the gospel produces care and generosity; a life that produces neither reveals that the gospel has not taken hold.",
    },
    {
      color: GOLD,
      label: "The Danger of Idleness and Gossip",
      summary: "Paul&rsquo;s concern about younger widows being enrolled in the church&rsquo;s widow list (vv.11&ndash;15) centers on what he observes happening in practice: they &ldquo;learn to be idlers, going about from house to house, and not only idlers but also gossips and busybodies, saying what they should not.&rdquo; This is not a condemnation of widows as such &mdash; it is a pastoral observation that a guaranteed income without meaningful structure or purpose can create conditions for destructive patterns. The prescription is positive: marry, raise children, manage a household, give the adversary no occasion for slander.",
    },
    {
      color: PURPLE,
      label: "Double Honor for Elders Who Lead Well",
      summary: "Verse 17 introduces a second major subject: the treatment of church elders. Those who &ldquo;rule well&rdquo; are to be considered worthy of &ldquo;double honor,&rdquo; especially those who labor in preaching and teaching. The word translated &ldquo;honor&rdquo; (time) in the New Testament often includes material support (as in v.3 regarding widows). The quotation of Deuteronomy 25:4 (&ldquo;you shall not muzzle an ox while it is treading out the grain&rdquo;) and Jesus&rsquo; saying (&ldquo;the laborer deserves his wages&rdquo;) grounds this material support in both Old Testament precedent and dominical authority.",
    },
    {
      color: TEAL,
      label: "Accountability in Leadership",
      summary: "Verses 19 through 20 address the difficult question of what to do when an elder is accused of wrongdoing. Paul establishes a threshold of evidence (&ldquo;two or three witnesses&rdquo; &mdash; echoing Deuteronomy 19:15) before an accusation is received. But once the threshold is met, there is no cover-up: those who persist in sin are to be &ldquo;rebuked in the presence of all, so that the rest may stand in fear.&rdquo; The person&rsquo;s position in leadership does not grant immunity from accountability &mdash; if anything, it raises the stakes of public rebuke. Leadership requires greater accountability, not less.",
    },
  ];

  const versePassages = [
    {
      ref: "1 Timothy 5:1-2",
      color: GREEN,
      title: "The Church as Family",
      content: "&ldquo;Do not rebuke an older man but encourage him as you would a father, younger men as brothers, older women as mothers, younger women as sisters, in all purity.&rdquo; The chapter opens with relational ethics. Paul&rsquo;s instruction to Timothy is not simply about etiquette &mdash; it establishes the social imagination within which all church life is to be conducted. The church is a family, and family members have particular obligations toward one another based on age and relationship. The word translated &ldquo;rebuke&rdquo; (epiplesso) is strong &mdash; it means to strike upon, to rebuke sharply. Paul is not saying Timothy cannot correct older men; he is saying the manner of correction must reflect the family relationship. You do not rebuke your father; you appeal to him. You do not condemn your mother; you honor her. The concluding phrase &ldquo;in all purity&rdquo; is especially significant for the instruction about younger women &mdash; the family metaphor itself is the moral safeguard against exploitation.",
    },
    {
      ref: "1 Timothy 5:3-8",
      color: BLUE,
      title: "Honoring True Widows",
      content: "The instruction to &ldquo;honor widows who are truly widows&rdquo; (v.3) launches a complex section on the church&rsquo;s care for widows. Paul distinguishes immediately between those who have family support (v.4) and those who are genuinely alone (v.5). The &ldquo;true widow&rdquo; of verse 5 is defined by two marks: she is &ldquo;left all alone&rdquo; (no family support) and she &ldquo;has set her hope on God&rdquo; &mdash; she continues in prayer and supplication night and day. This is not merely a financial criterion but a spiritual one. Verses 6 and 7 contrast this faithful widow with one who &ldquo;is self-indulgent&rdquo; (literally, lives in pleasure) &mdash; she is &ldquo;dead even while she lives.&rdquo; Verse 8 delivers the culminating statement: any believer who refuses to care for relatives, especially household members, &ldquo;has denied the faith and is worse than an unbeliever.&rdquo; The logic is that even pagans care for their families; a Christian who refuses to do so has abandoned something more basic than doctrine.",
    },
    {
      ref: "1 Timothy 5:9-16",
      color: GOLD,
      title: "The Widow List and Younger Widows",
      content: "Paul now introduces a formal enrollment category for widows who will receive ongoing support from the church. The criteria are specific: not less than sixty years of age (v.9), a one-man woman (faithful to one husband), well-attested for her works of service &mdash; having raised children, shown hospitality, washed the feet of the saints, cared for the afflicted, and devoted herself to every good work (v.10). This is a picture of a lifetime of faithful service that the church now honors with material support. Verses 11 through 15 address younger widows with pastoral directness. Paul&rsquo;s concern is practical: he has observed that younger widows enrolled in the support list tend to develop patterns of idleness, gossip, and meddling that bring reproach on the church (v.13). His prescription is positive and life-giving: let them marry, bear children, and manage their households (v.14) &mdash; finding purpose, structure, and love in family life. Verse 16 closes the section by restating the principle: if a believing woman has widows in her family, she is to care for them rather than burdening the church, so the church&rsquo;s resources can reach those who are genuinely without support.",
    },
    {
      ref: "1 Timothy 5:17-20",
      color: PURPLE,
      title: "Honoring and Rebuking Elders",
      content: "The chapter&rsquo;s second major subject is elders. Verse 17 states the principle: &ldquo;Let the elders who rule well be considered worthy of double honor, especially those who labor in preaching and teaching.&rdquo; The double honor almost certainly includes financial support, as the scriptural proofs in verse 18 make clear &mdash; both Deuteronomy 25:4 (the ox treading grain) and Jesus&rsquo; own saying (&ldquo;the laborer deserves his wages&rdquo;) establish that those who labor for the community deserve material support from it. Verse 19 shifts to accountability: &ldquo;Do not admit a charge against an elder except on the evidence of two or three witnesses.&rdquo; The standard of evidence protects leaders from malicious or groundless accusations; but once the evidence threshold is met, there is no softening of the response. Verse 20 is striking in its bluntness: &ldquo;As for those who persist in sin, rebuke them in the presence of all, so that the rest may stand in fear.&rdquo; Public accountability for leaders is not cruelty &mdash; it is the protection of the whole community from the corruption that unchecked leadership sin produces.",
    },
    {
      ref: "1 Timothy 5:21-25",
      color: TEAL,
      title: "Impartiality, Purity, and Timothy&rsquo;s Health",
      content: "Paul closes the chapter with a series of personal instructions to Timothy. Verse 21 issues a solemn charge &mdash; before God, Christ Jesus, and the elect angels &mdash; to keep the instructions &ldquo;without prejudging, doing nothing from partiality.&rdquo; The charge to keep these rules without partiality reflects the danger that institutional pressures or personal relationships will distort Timothy&rsquo;s application of them. Verse 22 warns against hasty ordination: &ldquo;Do not be hasty in the laying on of hands, nor take part in the sins of others; keep yourself pure.&rdquo; The laying on of hands is an act of identification &mdash; ordaining someone associates the ordainer with the ordinand&rsquo;s subsequent ministry and failures. Speed in ordination creates exposure to others&rsquo; sins. Verses 23 through 25 offer a brief personal aside: Timothy apparently has a stomach ailment and a habit of drinking only water; Paul recommends &ldquo;a little wine for the sake of your stomach and your frequent ailments.&rdquo; This is both pastoral care for a real physical problem and a gentle correction of what may have been an overly ascetic approach to the body. The chapter closes with a reflection on the visibility of character: good works and sins alike eventually come to light &mdash; nothing is permanently hidden.",
    },
  ];

  const applications = [
    {
      color: GREEN,
      title: "Treating the Church as Family",
      body: "Paul&rsquo;s instruction to treat older men as fathers and younger women as sisters &ldquo;in all purity&rdquo; (vv.1-2) is both relational and protective. In a culture that increasingly treats relationships as transactional, the family metaphor reclaims something essential: the church is not a vendor of religious services but a community of genuine belonging. The practical application is uncomfortable: Do you actually treat older members of your church as you would treat your parents? Do you show the deference, warmth, and concern you would show your father or mother? The command is not a feeling to manufacture but a practice to adopt. The family metaphor is also a moral safeguard: when you see younger women in the church as sisters, the exploitative dynamics that corrupt so many communities become far more difficult.",
    },
    {
      color: ROSE,
      title: "The Responsibility to Provide for Family",
      body: "Paul&rsquo;s statement in verse 8 is among the strongest in his letters: &ldquo;If anyone does not provide for his relatives, and especially for members of his household, he has denied the faith and is worse than an unbeliever.&rdquo; This calls for honest reflection. Charitable giving and church service are good &mdash; but not if they come at the expense of caring for those in your own household and family. The ordering matters: household first, then extended family, then the church community. This is not selfishness &mdash; it is the biblical shape of care. The church is not meant to be a substitute for family responsibility; it is the community that supports those for whom no family exists.",
    },
    {
      color: GOLD,
      title: "The Destructive Power of Idleness",
      body: "Paul&rsquo;s pastoral observation about younger widows &mdash; that guaranteed support without meaningful structure can lead to idleness, gossip, and meddling (vv.11-13) &mdash; is a penetrating insight into human nature that goes well beyond its original context. Idleness is not simply the absence of work; it is the absence of meaningful vocation. People without a sense of purpose and direction tend to fill the void with destructive patterns &mdash; consuming information about others, intervening in matters that are not their concern, and speaking in ways that damage rather than build up. The prescription Paul offers &mdash; purposeful work, family responsibility, structured life &mdash; is not merely practical; it is a form of protection from what human beings become when they have nothing to do.",
    },
    {
      color: PURPLE,
      title: "Honoring Those Who Lead and Teach",
      body: "Paul&rsquo;s instruction that elders who rule well deserve &ldquo;double honor&rdquo; (v.17) &mdash; and especially those who labor in preaching and teaching &mdash; addresses a tendency in many communities to take leadership for granted. The metaphors Paul uses are striking: the ox that treads grain should be able to eat of it; the laborer deserves wages. These are not metaphors of gift or generosity but of justice. To receive the labor of teaching and not support the teacher is an injustice. This applies both to financial compensation where appropriate and to the less tangible honors of recognition, appreciation, and the assumption of good faith. Communities that consume leadership without honoring it produce burned-out leaders and impoverished communities.",
    },
    {
      color: TEAL,
      title: "Accountability in Church Leadership",
      body: "The balance Paul strikes in verses 19 and 20 is one of the most practically important in the chapter. On one side: protect leaders from groundless accusations by requiring the standard of Deuteronomy 19:15 (two or three witnesses). This safeguards against the weaponization of accusations in church politics. On the other side: when the evidence is sufficient, do not soften the accountability because of the person&rsquo;s position. Public rebuke for persistent sin &mdash; precisely because it is public &mdash; serves the whole community by demonstrating that leadership is not a zone of impunity. Churches that fail to hold leaders accountable are not showing grace; they are enabling harm and, eventually, producing the large-scale scandals that have damaged so many communities.",
    },
    {
      color: BLUE,
      title: "Not Being Hasty in Placing People in Leadership",
      body: "Verse 22&rsquo;s warning against hastiness in the laying on of hands carries a wisdom that is easy to ignore in communities eager for leadership. Speed in ordination or appointment has predictable costs: inadequately formed leaders, insufficient knowledge of character, and the community&rsquo;s implicit endorsement of someone whose hidden patterns later emerge. The laying on of hands is an act of identification, and Paul&rsquo;s warning is that haste makes the ordainer complicit in the consequences. The positive implication is that real investment in assessing character &mdash; the &ldquo;good works&rdquo; that go before (v.25) &mdash; is not an obstacle to raising up leaders but the condition for raising up leaders who will actually serve and not damage the church.",
    },
  ];

  function toggleAccordion(i: number) {
    setOpenAccordion(prev => (prev === i ? null : i));
  }

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, #0e0e1e 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "4px 14px", marginBottom: 18 }}>
            <span style={{ color: PURPLE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Bible Study Guide</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: TEXT }}>
            1 Timothy 5
          </h1>
          <p style={{ fontSize: 18, color: MUTED, maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Detailed instructions for caring for widows, honoring elders, and building a church community that functions as a genuine family." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}40`, color: GREEN, borderRadius: 20, padding: "4px 14px", fontSize: 13, fontWeight: 600 }}>25 Verses</span>
            <span style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, color: PURPLE, borderRadius: 20, padding: "4px 14px", fontSize: 13, fontWeight: 600 }}>Pastoral Epistle</span>
            <span style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}40`, color: GOLD, borderRadius: 20, padding: "4px 14px", fontSize: 13, fontWeight: 600 }}>Pauline Letters</span>
          </div>
        </div>
      </section>

      {/* Tab Bar */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px", display: "flex", gap: 0, overflowX: "auto" }}>
          {TABS.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === t.id ? `3px solid ${PURPLE}` : "3px solid transparent",
                color: activeTab === t.id ? PURPLE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 14,
                padding: "16px 22px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 16 }}>About This Chapter</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "First Timothy 5 is one of the most practically detailed chapters in the Pauline letters. Paul addresses Timothy with specific guidance on two major areas of church life: the care of widows (vv.3&ndash;16) and the treatment of elders (vv.17&ndash;25). Bracketing both sections is the foundational metaphor of verse 1: the church is a family. Every specific instruction flows from this governing image." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The widow instructions are elaborate because the situation is complex: the early church had limited resources and many needs. Paul&rsquo;s goal is to direct support toward those who are genuinely without any other recourse while encouraging family members to take responsibility for their own relatives. The result is a tiered system of care that protects both the vulnerable and the church&rsquo;s resources." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "The elder instructions address both the honor that faithful leadership deserves and the accountability that leadership requires. Paul refuses to separate these: the double honor of verse 17 and the public rebuke of verse 20 belong together. A church that only honors its leaders without holding them accountable, or that only holds them accountable without honoring them, has failed to grasp the full picture." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
              {[
                { label: "Author", value: "Paul the Apostle", color: PURPLE },
                { label: "Recipient", value: "Timothy, pastor at Ephesus", color: BLUE },
                { label: "Date", value: "c. AD 62&ndash;65", color: TEAL },
                { label: "Key Concern", value: "Church order and pastoral care", color: GOLD },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{item.label}</div>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Structure of the Chapter</h3>
              {[
                { ref: "vv. 1-2", label: "The Church as Family: Relating Across Generations", color: GREEN },
                { ref: "vv. 3-8", label: "Honor Widows Who Are Truly Widows; Family Responsibility First", color: BLUE },
                { ref: "vv. 9-16", label: "The Widow Enrollment List; Younger Widows", color: GOLD },
                { ref: "vv. 17-20", label: "Double Honor for Elders; Accountability for Sin", color: PURPLE },
                { ref: "vv. 21-25", label: "Impartiality, Ordination, Health, and the Visibility of Character", color: TEAL },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ background: `${item.color}18`, border: `1px solid ${item.color}40`, borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, color: item.color, flexShrink: 0, marginTop: 2 }}>{item.ref}</div>
                  <div style={{ color: TEXT, fontSize: 14, fontWeight: 500, paddingTop: 4 }}>{item.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>The Central Verse</h3>
              <blockquote style={{ margin: 0, padding: "16px 20px", borderLeft: `4px solid ${PURPLE}`, background: `${PURPLE}10`, borderRadius: "0 10px 10px 0" }}>
                <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.75, margin: "0 0 10px", fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Let the elders who rule well be considered worthy of double honor, especially those who labor in preaching and teaching. For the Scripture says, &lsquo;You shall not muzzle an ox when it treads out the grain,&rsquo; and, &lsquo;The laborer deserves his wages.&rsquo;&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontStyle: "normal", fontWeight: 600 }}>1 Timothy 5:17-18</cite>
              </blockquote>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Key Themes</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "First Timothy 5 addresses the practical architecture of church community: who cares for whom, on what basis, and with what accountability. The themes below trace the theological convictions underneath the practical instructions." }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {themes.map((theme, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 14, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(i)}
                    style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ color: theme.color, fontWeight: 700, fontSize: 16 }}>{theme.label}</span>
                    <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, lineHeight: 1 }}>{openAccordion === i ? "-" : "+"}</span>
                  </button>
                  {openAccordion === i && (
                    <div style={{ padding: "0 24px 24px" }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: theme.summary }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 28 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Connections in Paul&rsquo;s Letters</h3>
              {[
                { ref: "1 Timothy 3:1-13", note: "The qualifications for elders and deacons that precede chapter 5 &mdash; the character description that should inform the appointment process that chapter 5 guards against hastiness in." },
                { ref: "Titus 1:5-9", note: "The parallel set of elder qualifications in Titus, which shares the same concern for genuine character tested over time before appointment to leadership." },
                { ref: "Galatians 6:2, 10", note: "&ldquo;Bear one another&rsquo;s burdens&rdquo; and &ldquo;do good to everyone, and especially to those who are of the household of faith&rdquo; &mdash; the Galatians summary of the same priority structure that 1 Timothy 5 develops in detail." },
                { ref: "Ephesians 5:22-6:4", note: "The household code in Ephesians that establishes the family as the primary social unit within which Christian ethics are worked out &mdash; the same assumption underlying 1 Timothy 5&rsquo;s family care instructions." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: i < 3 ? `1px solid ${BORDER}` : "none" }}>
                  <div style={{ background: `${PURPLE}18`, color: PURPLE, padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700, flexShrink: 0, alignSelf: "flex-start", marginTop: 2 }}>{item.ref}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.note }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of 1 Timothy 5 with attention to Paul&rsquo;s pastoral logic, the social context of the early church, and the theological convictions underneath each instruction." }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {versePassages.map((passage, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${passage.color}30`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ background: `${passage.color}10`, padding: "18px 24px", borderBottom: `1px solid ${passage.color}20`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{ color: passage.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{passage.title}</h3>
                    <span style={{ background: `${passage.color}20`, color: passage.color, borderRadius: 8, padding: "3px 12px", fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{passage.ref}</span>
                  </div>
                  <div style={{ padding: "22px 24px" }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: passage.content }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: `${TEAL}08`, border: `1px solid ${TEAL}30`, borderRadius: 14, padding: 28, marginTop: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Greek Word Study</h3>
              {[
                { word: "time", def: "Honor &mdash; the word used in both v.3 (honor widows) and v.17 (double honor for elders). In the New Testament, time frequently carries the sense of material honor, not merely emotional respect. The connection between the two uses is deliberate: the same word covers the church&rsquo;s treatment of both the vulnerable and the leaders." },
                { word: "chera", def: "Widow &mdash; literally, &ldquo;one who is bereaved.&rdquo; In the ancient world, widows were among the most economically vulnerable members of society, having lost both husband and the social protection his status provided. Paul&rsquo;s repeated concern for widows in this chapter reflects both the Old Testament tradition of widow-care and the acute social reality of the first century." },
                { word: "presbuteros", def: "Elder &mdash; the word used in v.17 and the title of the office. In the New Testament, presbuteros (elder) and episkopos (overseer) appear to describe the same office. The emphasis in this chapter is on those who &ldquo;rule well&rdquo; and &ldquo;labor in preaching and teaching&rdquo; &mdash; leaders whose work is visible, sustained, and publicly evaluated." },
                { word: "prokeimai", def: "Evident, visible, manifest &mdash; underlying the concept in vv.24-25 that some sins and good works are &ldquo;manifest beforehand&rdquo; while others &ldquo;follow after.&rdquo; Paul&rsquo;s point is that the character required for leadership and accountability eventually becomes visible, whether or not it was hidden at first." },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < 3 ? `1px solid ${BORDER}` : "none" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 6 }}>
                    <span style={{ color: TEAL, fontWeight: 700, fontSize: 15, fontStyle: "italic" }}>{item.word}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.def }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Application</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "First Timothy 5 moves from abstract principle to concrete instruction with unusual specificity. The applications below draw out the practical wisdom in Paul&rsquo;s instructions for contemporary church life and personal discipleship." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
              {applications.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}25`, borderRadius: 14, padding: 26 }}>
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: 17, marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, marginBottom: 18 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Do you treat older members of your church community as you would treat your parents? What would that look like practically in the next week?",
                  "Is there a family member you are leaving to the church&rsquo;s care that is your responsibility to provide for? What does it mean that failing to do so is described as &ldquo;denying the faith&rdquo;?",
                  "Who in your church community is a &ldquo;true widow&rdquo; &mdash; someone genuinely without family support, who has set their hope on God? How is your community caring for them?",
                  "How does your church community honor those who lead and teach? Is there a gap between the labor they put in and the honor (material or otherwise) they receive?",
                  "How does your community handle accusations against leaders? Does the current process protect against both groundless accusations and the covering up of genuine sin?",
                  "Is there an area of your life where you are in &ldquo;idleness&rdquo; in the sense Paul describes &mdash; without meaningful purpose or structure, filling the void with patterns that do not build up?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, color: PURPLE, fontWeight: 700, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, paddingTop: 4 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>For Personal and Community Prayer</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Use the family metaphor of verses 1 and 2 as a framework for intercession. Pray for the older men in your church as you would pray for your father. Pray for older women as you would pray for your mother. Name them specifically. Ask God to show you what honoring them practically looks like in this season." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Pray for those in your community who are &ldquo;truly widows&rdquo; &mdash; those without family support, whose hope is set on God and who depend on the community&rsquo;s care. Ask God to give your community both the generosity and the wisdom to steward that care well." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "Pray for those who lead and teach in your church. Thank God for the specific ways their labor has formed you. Ask God to protect them from burnout and the particular temptations of leadership, and to give them both the honor and the accountability that faithful leadership requires." }}
              />
            </div>
          </div>
        )}

        {/* Videos Section - always visible below tabs */}
        <div style={{ marginTop: 48 }}>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 40, marginBottom: 28 }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Video teachings on 1 Timothy 5 and related themes in Paul&rsquo;s pastoral letters &mdash; widows, elders, family care, and the structure of the healthy church." }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 18px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>1 Timothy 5 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{ marginTop: 48, background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 32, textAlign: "center" }}>
          <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Continue Your Study</h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}
            dangerouslySetInnerHTML={{ __html: "First Timothy 5 sits within a letter full of practical church order. Reading chapters 3 and 6 alongside chapter 5 gives the full picture of Paul&rsquo;s vision for a healthy local church." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ background: `${PURPLE}20`, color: PURPLE, borderRadius: 8, padding: "8px 18px", fontSize: 14, fontWeight: 700 }}>1 Timothy 3 &mdash; Elder and Deacon Qualifications</span>
            <span style={{ background: `${GREEN}20`, color: GREEN, borderRadius: 8, padding: "8px 18px", fontSize: 14, fontWeight: 700 }}>1 Timothy 6 &mdash; Contentment and the Love of Money</span>
          </div>
        </div>

      </div>
    </div>
  );
}
