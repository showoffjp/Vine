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
const TEAL = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ROSE = "#E11D48";

type Tab = "overview" | "themes" | "verse" | "application";

export default function FirstThessalonians3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "No7KHCyTkAI", title: "1 Thessalonians Overview -- BibleProject" },
    { videoId: "kNMNIRPN4R4", title: "Paul in Thessalonica -- Acts 17 and the Early Church" },
    { videoId: "Dhl2U4K5NxM", title: "Timothy -- God&rsquo;s Fellow Worker in the Gospel" },
    { videoId: "q08VWMDcT5E", title: "Standing Fast in the Lord -- Faith Under Affliction" },
  ];

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg, #0d0d1a 0%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, borderRadius: 24, padding: "4px 18px", fontSize: 13, color: PURPLE, fontWeight: 700, marginBottom: 18, letterSpacing: "0.04em" }}>
            1 THESSALONIANS 3
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Now We Live, If You Are Standing Fast
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 640, margin: "0 auto 28px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "First Thessalonians 3 is Paul&rsquo;s account of pastoral anxiety and relief. Separated from the young church at Thessalonica and unable to bear it any longer, Paul sends Timothy to strengthen and encourage them in faith. When Timothy returns with good news of their faith and love, Paul writes that &ldquo;now we live&rdquo; &mdash; their steadfastness under affliction has restored the apostle&rsquo;s own life. The chapter closes with a prayer for abounding love and blameless holiness." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { label: "Sending Timothy", color: PURPLE },
              { label: "Good News of Faith", color: GREEN },
              { label: "Now We Live", color: GOLD },
              { label: "Abounding in Love", color: BLUE },
              { label: "Blameless in Holiness", color: TEAL },
            ].map((badge) => (
              <span key={badge.label} style={{ background: `${badge.color}18`, border: `1px solid ${badge.color}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: badge.color, fontWeight: 700 }}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key verse banner */}
      <div style={{ background: `${PURPLE}12`, borderTop: `1px solid ${PURPLE}30`, borderBottom: `1px solid ${PURPLE}30`, padding: "20px 20px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 18, fontStyle: "italic", color: TEXT, margin: 0, lineHeight: 1.65 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;For now we live, if you are standing fast in the Lord.&rdquo; &mdash; 1 Thessalonians 3:8" }}
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
                background: activeTab === t.id ? PURPLE : "transparent",
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

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>HISTORICAL AND LITERARY CONTEXT</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, margin: "0 0 14px" }}>Paul&rsquo;s Pastoral Anxiety and Relief</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "First Thessalonians is almost certainly the earliest surviving letter of Paul and one of the earliest documents in the entire New Testament, written around AD 49-51 from Corinth. Paul and his team (Silvanus and Timothy) had founded the church in Thessalonica during their second missionary journey (Acts 17:1-9), but were forced to leave suddenly after only a few weeks due to violent opposition from the local synagogue. The abrupt departure left a newly formed community of believers facing hostility without the continued presence of their founding apostle." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Chapter 3 is Paul&rsquo;s emotional and theological account of what happened in the aftermath of that departure. Unable to return to Thessalonica and desperate for news, he sent Timothy to strengthen and encourage the young believers. Timothy&rsquo;s return with a good report of their faith and love produced in Paul the response that defines the chapter&rsquo;s emotional peak: &ldquo;For now we live, if you are standing fast in the Lord&rdquo; (v.8). The chapter closes with one of Paul&rsquo;s most beautiful prayers &mdash; for the Thessalonians to increase and abound in love toward one another and toward all, and to be established blameless in holiness before God." }}
              />
            </div>

            {/* Two-column grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GOLD, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>VERSES 1-5</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>Sending Timothy in Anxiety</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Paul and Silvanus were willing to be left alone at Athens in order to send Timothy &mdash; their fellow worker in the gospel &mdash; to establish and exhort the Thessalonians in their faith. Paul was anxious that the afflictions faced by the young church would cause some to be moved, knowing that they were appointed for this very thing." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>VERSES 6-13</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>Good News and Overflowing Prayer</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Timothy returned with the good news of the Thessalonians&rsquo; faith and love. Paul&rsquo;s joy overflowed: &ldquo;For now we live, if you are standing fast in the Lord.&rdquo; Gratitude and longing pour into prayer: that God would direct Paul&rsquo;s way to them, and that the Lord would make them increase and abound in love, establishing their hearts blameless in holiness." }}
                />
              </div>
            </div>

            {/* Key memory verses */}
            <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 16 }}>KEY MEMORY VERSES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>1 Thessalonians 3:2</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;We sent Timothy, our brother and God&rsquo;s coworker in the gospel of Christ, to establish and exhort you in your faith.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GREEN}` }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>1 Thessalonians 3:7-8</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;For this reason, brothers, in all our distress and affliction we have been comforted about you through your faith. For now we live, if you are standing fast in the Lord.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${BLUE}` }}>
                  <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>1 Thessalonians 3:12</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;May the Lord make you increase and abound in love for one another and for all, as we do for you.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${TEAL}` }}>
                  <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>1 Thessalonians 3:13</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;So that he may establish your hearts blameless in holiness before our God and Father, at the coming of our Lord Jesus with all his saints.&rdquo;" }}
                  />
                </div>
              </div>
            </div>

            {/* Chapter structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 14 }}>STRUCTURE OF THE CHAPTER</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv. 1-5", title: "Sending Timothy -- We Could Bear It No Longer", color: GOLD, summary: "Paul and Silvanus left alone at Athens to send Timothy as fellow worker in the gospel, to establish and exhort" },
                  { ref: "vv. 6-8", title: "Timothy&rsquo;s Good News -- Now We Live", color: GREEN, summary: "Timothy returns with the good news of faith and love -- Paul&rsquo;s life is sustained by their standing fast in the Lord" },
                  { ref: "vv. 9-10", title: "Overflowing Thanks -- Prayer Night and Day", color: PURPLE, summary: "What thanksgiving can return to God for the joy we feel? Praying night and day to see them face to face" },
                  { ref: "vv. 11-13", title: "The Prayer -- Abound in Love, Blameless in Holiness", color: TEAL, summary: "May God direct the way; may the Lord make them increase and abound in love; may hearts be established blameless at Christ&rsquo;s coming" },
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

            {/* The interconnected community */}
            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: BLUE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>THE INTERCONNECTED LIFE OF THE CHURCH</div>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>A Community Whose Life Is Tied Together</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "One of the most striking features of 1 Thessalonians 3 is Paul&rsquo;s language of mutual life-giving: &ldquo;now we live, if you are standing fast&rdquo; (v.8). This is not rhetorical flourish; it is a window into the profound interdependence of authentic Christian community. Paul&rsquo;s own well-being &mdash; his capacity to &ldquo;live&rdquo; in the fullest sense &mdash; was genuinely bound up with the spiritual vitality of the people he had planted in Thessalonica." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "This mutuality runs in both directions. Paul needs the Thessalonians&rsquo; steadfastness to sustain his ministry. The Thessalonians needed Timothy&rsquo;s presence to be established in faith. Timothy needed Paul&rsquo;s direction and the Thessalonians&rsquo; reception. The Christian community is not a collection of self-sufficient individuals who occasionally gather; it is an organism of mutual dependence in which each member&rsquo;s growth and suffering and steadfastness genuinely affects the others. This is the body of Christ not as metaphor but as lived reality." }}
              />
            </div>

            {/* Timothy note */}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>TIMOTHY AS FELLOW WORKER</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s description of Timothy in verse 2 is remarkable for its warmth and theological precision: &ldquo;our brother and God&rsquo;s coworker in the gospel of Christ.&rdquo; The phrase &ldquo;God&rsquo;s coworker&rdquo; (synergon tou theou) is striking &mdash; Timothy is not just Paul&rsquo;s coworker but God&rsquo;s. Some manuscripts have &ldquo;servant of God&rdquo; to soften the audacity of the claim, but the best manuscripts read &ldquo;fellow worker with God.&rdquo; Paul has no hesitation in describing human ministry as a genuine partnership with God&rsquo;s own work in the world. The young man Timothy, probably only in his late teens or early twenties, is sent to a threatened community as God&rsquo;s own coworker in the gospel. This is the dignity that the gospel ministry confers on even the youngest and least experienced of its servants." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Key Themes in 1 Thessalonians 3</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "First Thessalonians 3 moves through five interlocking themes: pastoral anxiety and its resolution, the sending of a fellow worker to establish new believers, the transforming power of good news from a loved community, the prayer for steadfast faith, and the vision of holiness as the goal of love. Together they paint a portrait of what authentic Christian community looks like across geographic separation and affliction." }}
              />
            </div>

            {[
              {
                color: GOLD,
                title: "Concern for New Believers -- Pastoral Anxiety as Love",
                icon: "THE COST OF PASTORAL CARE",
                body1: "Verse 1 opens with a remarkable phrase: &ldquo;when we could bear it no longer.&rdquo; The Greek (meketi stegontes) carries the sense of something that can no longer be contained or covered &mdash; a pressure that has built to the point where it must release. Paul and Silvanus&rsquo; concern for the Thessalonians was not mild pastoral interest; it was an anguish that they could no longer endure in silence. The word &ldquo;bear&rdquo; is the same word Paul uses in 1 Corinthians 13:7 when he says love &ldquo;bears all things&rdquo; &mdash; here it is love pressed to its limit by separation and uncertainty.",
                body2: "The willingness to &ldquo;be left behind at Athens alone&rdquo; in order to send Timothy reveals a characteristic of mature pastoral love: the willingness to accept personal deprivation for the sake of the community&rsquo;s strengthening. Paul and Silvanus were willing to be without their most trusted coworker in order to ensure that the Thessalonians had the support they needed. Pastoral anxiety that produces this kind of costly action is not weakness; it is the form that genuine love takes when the beloved is under threat.",
              },
              {
                color: PURPLE,
                title: "Timothy as God&rsquo;s Fellow Worker -- Delegation in Ministry",
                icon: "SHARING THE WEIGHT OF MINISTRY",
                body1: "The sending of Timothy in verse 2 opens a window onto the collegial nature of Pauline ministry. Paul does not attempt to do everything alone; he has built a team, he trusts his coworkers, and he deploys them for specific purposes. Timothy is sent with a precise mission: to establish (sterixai &mdash; to fix firmly, to stabilize) and to exhort (parakalesai &mdash; to come alongside, to encourage, to console) the Thessalonians in their faith. The double purpose is important: it is both structural (stability in doctrine and community life) and relational (encouragement and consolation in suffering).",
                body2: "The designation &ldquo;God&rsquo;s coworker in the gospel of Christ&rdquo; dignifies what might seem like a simple errand into an act of cosmic significance. Timothy is not just carrying a pastoral message; he is participating in God&rsquo;s own work of establishing his people in the gospel. This reframes the whole enterprise of Christian ministry: those who teach, encourage, counsel, and support believers in their faith are not merely doing human service work. They are fellow workers with God in the project of building the community that will stand blameless before him at the coming of Christ.",
              },
              {
                color: GREEN,
                title: "The Good News That Restored Paul&rsquo;s Life",
                icon: "MUTUAL STRENGTHENING IN THE BODY",
                body1: "The emotional peak of the chapter is verse 8: &ldquo;For now we live, if you are standing fast in the Lord.&rdquo; This is one of the most intimate sentences Paul ever wrote. He does not say &ldquo;we are greatly encouraged&rdquo; or &ldquo;we are greatly comforted.&rdquo; He says &ldquo;now we live.&rdquo; Before Timothy&rsquo;s return, Paul and Silvanus were in a kind of spiritual diminishment &mdash; unable to fully live their apostolic calling because of their urgent, unresolved anxiety for the Thessalonians. Timothy&rsquo;s good news that their faith and love were intact did not merely relieve anxiety; it restored vitality.",
                body2: "This extraordinary claim opens up the theology of the body of Christ. Paul&rsquo;s life &mdash; his capacity to flourish, to rejoice, to give thanks &mdash; was genuinely bound to the spiritual vitality of a community 300 miles away that he could not visit. The health of one member affected the health of another, even across distance. The good news Timothy carried was not only news about the Thessalonians; it was, literally, life-giving news for Paul. This mutual life-sustaining is what distinguishes Christian community from a mere organization: the members of the body give life to one another.",
              },
              {
                color: BLUE,
                title: "Abounding Love as the Desire of the Apostle",
                icon: "LOVE AS THE MEASURE OF GROWTH",
                body1: "Paul&rsquo;s prayer in verses 11-13 specifies what he most wants for the Thessalonians, and the answer is not doctrinal precision, not church growth, not public influence, not financial stability. The central petition is that the Lord would &ldquo;make you increase and abound in love for one another and for all, as we do for you.&rdquo; The verb &ldquo;increase&rdquo; (pleonazo) means to multiply, to be in excess; &ldquo;abound&rdquo; (perisseuo) means to overflow, to be present beyond what is needed. Paul is not asking for adequate love; he is asking for a love that exceeds any container the Thessalonians might construct for it.",
                body2: "The scope of this love is also significant: &ldquo;for one another and for all.&rdquo; The love of the Christian community does not stop at the boundary of the congregation. It spills outward toward all people, in the same way that Paul&rsquo;s own love for the Thessalonians was unbounded. This is not a counsel of naive universalism; it is the insistence that authentic Christian love has an essentially outward direction. It begins in the community and flows beyond it. The church that loves well internally but has no love for those outside has not yet understood the love that Paul is praying for.",
              },
              {
                color: TEAL,
                title: "Established and Blameless in Holiness",
                icon: "HOLINESS AS THE GOAL OF LOVE",
                body1: "The prayer of verse 13 reveals Paul&rsquo;s teleology: the goal of abounding love is not merely better relationships or a more pleasant community. It is that God would &ldquo;establish your hearts blameless in holiness before our God and Father, at the coming of our Lord Jesus with all his saints.&rdquo; The eschatological horizon is critical. Paul is not praying for holiness as an end in itself or as a social achievement; he is praying for holiness that will stand before God at the return of Christ. The goal of all Christian formation is that moment: standing before God, established in holiness, blameless.",
                body2: "The connection between love (v.12) and holiness (v.13) is not accidental. Paul does not move from love to holiness as if they were two separate concerns. The abounding love he prays for in verse 12 is the means by which the holiness of verse 13 is produced. Love is not opposed to holiness in Paul&rsquo;s theology; love is the path to holiness. To increase and abound in love for one another and for all is precisely the process by which hearts are established blameless before God. Holiness is not a solo achievement; it is the product of a community learning to love as God has loved it.",
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

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Verse by Verse: 1 Thessalonians 3</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "A passage-by-passage study of 1 Thessalonians 3, tracing Paul&rsquo;s emotional and theological movements through pastoral anxiety, joyful relief, and overflowing prayer." }}
              />
            </div>

            {[
              {
                ref: "Verses 1-5",
                color: GOLD,
                heading: "When We Could Bear It No Longer -- Sending Timothy",
                verses: [
                  {
                    v: "vv.1-2",
                    text: "\"Therefore when we could bear it no longer, we were willing to be left behind at Athens alone, and we sent Timothy, our brother and God's coworker in the gospel of Christ, to establish and exhort you in your faith.\"",
                    note: "The &ldquo;therefore&rdquo; connects this passage to the longing of 2:17-20, where Paul described his separation from the Thessalonians as &ldquo;being torn away from you in person, not in heart.&rdquo; The phrase &ldquo;could bear it no longer&rdquo; (meketi stegontes) appears twice in this chapter (also v.5) &mdash; its repetition signals the intensity of the anxiety that drove the decision to send Timothy. The willingness to be left at Athens &ldquo;alone&rdquo; (monoi) reveals the cost: Paul and Silvanus sacrificed their most valuable traveling companion and coworker for the sake of the Thessalonians&rsquo; stability. The description of Timothy as &ldquo;God&rsquo;s coworker in the gospel of Christ&rdquo; elevates the sending from a practical necessity to a theological act: it is God&rsquo;s own work being carried out through Timothy&rsquo;s journey."
                  },
                  {
                    v: "vv.3-5",
                    text: "\"That no one be moved by these afflictions. For you yourselves know that we are destined for this. For when we were with you, we kept telling you beforehand that we were to suffer affliction, just as it has come to pass, and just as you know. For this reason, when I could bear it no longer, I sent to learn about your faith, for fear that somehow the tempter had tempted you and our labor would be in vain.\"",
                    note: "The purpose of Timothy&rsquo;s mission is negatively stated first: so that no one would &ldquo;be moved&rdquo; (sainesthai &mdash; the word can mean to be wagged, shaken, or beguiled) by the afflictions they were facing. Paul had warned them in advance that affliction was not an unexpected intrusion but the appointed context of Christian life: &ldquo;we are destined for this&rdquo; (literally, &ldquo;we are laid down into this&rdquo; &mdash; appointed, placed there by God). The reference to &ldquo;the tempter&rdquo; (ho peirazon) is Paul&rsquo;s only explicit use of this title for Satan in his letters. The specific fear is that the tempter has exploited the afflictions to undermine the faith that the apostolic labor planted. The phrase &ldquo;our labor would be in vain&rdquo; echoes 2:1 (&ldquo;our coming to you was not in vain&rdquo;) &mdash; the anxiety about vain labor is the anxiety of a pastor who loves the people he has given himself to serve."
                  },
                ],
              },
              {
                ref: "Verses 6-8",
                color: GREEN,
                heading: "Timothy&rsquo;s Good News -- For Now We Live",
                verses: [
                  {
                    v: "vv.6-7",
                    text: "\"But now Timothy has come to us from you, and has brought us the good news of your faith and love and reported that you always remember us kindly and long to see us, as we long to see you. For this reason, brothers, in all our distress and affliction we have been comforted about you through your faith.\"",
                    note: "The word Paul uses for Timothy&rsquo;s report is euangelisamenos &mdash; &ldquo;having brought us the good news.&rdquo; The same word used for preaching the gospel of Christ is used here for the news of the Thessalonians&rsquo; faith. Paul is not being casual; he is making a deliberate point: news of the community&rsquo;s faithfulness is a form of the gospel, because the gospel is not merely a proposition but a community-forming power whose effects can be reported as &ldquo;good news.&rdquo; The specific content of the good news is threefold: their faith, their love, and their warm remembrance of Paul and longing to see him. The mutual longing (&ldquo;as we long to see you&rdquo;) reveals that the relationship was genuinely reciprocal, not merely dependent."
                  },
                  {
                    v: "v.8",
                    text: "\"For now we live, if you are standing fast in the Lord.\"",
                    note: "This single sentence is the emotional and theological summit of the chapter. The particle &ldquo;now&rdquo; (nun) is charged with significance: it points to the specific moment of Timothy&rsquo;s return and the good news he carried. The conditional &ldquo;if you are standing fast&rdquo; is not a worried doubt but a confidence expressed through the conditional form &mdash; the condition that has been reported as true. &ldquo;Standing fast in the Lord&rdquo; (stekete en kurio) is a military metaphor: holding one&rsquo;s position under pressure, not retreating. The Thessalonians were holding their ground under affliction, and this fact gave Paul his own ground to stand on: &ldquo;now we live.&rdquo; The language is not sentimental; Paul is describing a genuine life-giving dependency."
                  },
                ],
              },
              {
                ref: "Verses 9-10",
                color: PURPLE,
                heading: "What Thanksgiving Can We Return -- Prayer Night and Day",
                verses: [
                  {
                    v: "vv.9-10",
                    text: "\"For what thanksgiving can we return to God for you, for all the joy that we feel for your sake before our God, as we pray most earnestly night and day that we may see you face to face and supply what is lacking in your faith?\"",
                    note: "The rhetorical question &ldquo;what thanksgiving can we return?&rdquo; (tina gar eucharistian dunamai&hellip;antapodounai) is an overflow statement: the gratitude is more than language can contain. Paul does not provide an answer to the question because no adequate answer exists. This kind of thanksgiving &mdash; that exceeds the capacity of expression &mdash; is itself a form of prayer, a reaching toward God with what cannot be articulated. The &ldquo;joy we feel before our God&rdquo; locates the rejoicing explicitly in God&rsquo;s presence, not merely in the pleasant news itself. The &ldquo;praying most earnestly night and day&rdquo; (hyperekperissou deomenoi nuktos kai hemeras) uses an intensive double compound for &ldquo;most earnestly&rdquo; &mdash; literally &ldquo;beyond all excess.&rdquo; And the goal of the prayer is not comfort or success but completion: &ldquo;supply what is lacking in your faith.&rdquo; Paul&rsquo;s joy in their faith does not prevent him from knowing its incompleteness."
                  },
                ],
              },
              {
                ref: "Verses 11-13",
                color: TEAL,
                heading: "The Prayer -- Directed Way, Abounding Love, Blameless Holiness",
                verses: [
                  {
                    v: "vv.11-12",
                    text: "\"Now may our God and Father himself, and our Lord Jesus, direct our way to you, and may the Lord make you increase and abound in love for one another and for all, as we do for you.\"",
                    note: "Paul&rsquo;s prayer is addressed to &ldquo;our God and Father himself, and our Lord Jesus&rdquo; &mdash; a formulation that treats Father and Son as a single subject of the prayer, with the singular verb &ldquo;direct&rdquo; (kateuthunai). This is one of the early indications in Paul&rsquo;s letters of the divine status he attributes to Jesus: he can be addressed alongside God the Father in a single prayer, with a singular verb, without any felt tension. The first petition is personal: that God would direct Paul&rsquo;s way back to them. The second petition is for the Thessalonians: that the Lord would make them &ldquo;increase and abound in love.&rdquo; The two verbs (pleonazo &mdash; to multiply, and perisseuo &mdash; to overflow) together describe a love that does not simply grow but exceeds any expectation. The scope (&ldquo;for one another and for all&rdquo;) is crucially inclusive."
                  },
                  {
                    v: "v.13",
                    text: "\"So that he may establish your hearts blameless in holiness before our God and Father, at the coming of our Lord Jesus with all his saints.\"",
                    note: "The purpose clause (&ldquo;so that&rdquo;) shows how love and holiness connect: the abounding love of verse 12 is the means; the established, blameless holiness of verse 13 is the end. The verb &ldquo;establish&rdquo; (sterixai) is the same word used in verse 2 for Timothy&rsquo;s mission to &ldquo;establish&rdquo; the Thessalonians in their faith. What Timothy was sent to do in the present is what God himself will accomplish definitively: the stabilizing, the fixing, the founding of the heart in holiness. &ldquo;Blameless&rdquo; (amemptos) does not mean sinless perfection; it means that at the eschatological accounting &mdash; &ldquo;at the coming of our Lord Jesus with all his saints&rdquo; &mdash; no legitimate charge can be brought. The holiness is real and established, not merely imputed and covering. And it is accomplished by love, not by law."
                  },
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

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 8px" }}>Living 1 Thessalonians 3 Today</h2>
              <p style={{ color: MUTED, fontSize: 15, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "First Thessalonians 3 addresses real and perennial questions in Christian life and ministry: What does it mean to genuinely care for others in faith? How do we sustain one another across distance and affliction? What is the relationship between love and holiness? And how do we pray for those we love with the specificity and earnestness that their situation demands? Here is how the chapter&rsquo;s movements speak to everyday discipleship." }}
              />
            </div>

            {[
              {
                color: GOLD,
                number: "01",
                title: "Let Your Pastoral Anxiety Become Pastoral Action",
                verses: "1 Thessalonians 3:1-5",
                body1: "Paul&rsquo;s anxiety about the Thessalonians did not remain private. It produced a costly action: the sacrifice of his most valued coworker and the willingness to be left alone at Athens. This is the pattern of love that cannot bear remaining inert in the face of another&rsquo;s need. We may not all have a Timothy to send, but most of us know the experience of genuine concern for another person in difficulty &mdash; a new believer facing opposition, a friend in spiritual crisis, a community under threat. The question that 1 Thessalonians 3 poses is not &ldquo;Are you concerned?&rdquo; but &ldquo;What is your concern producing?&rdquo;",
                body2: "Genuine pastoral love is always costly. Paul and Silvanus were willing to be without their most trusted colleague because the need of the Thessalonians outweighed their own comfort and efficiency. This is the difference between sympathy (feeling with someone at a safe distance) and love that &ldquo;can bear it no longer&rdquo; and takes concrete action. The person who is genuinely concerned for another&rsquo;s faith will eventually find themselves doing something about it &mdash; making a phone call, crossing a distance, giving up a resource, sending someone in their place when they cannot go themselves.",
                practice: "Think of one person in your life whose faith you are genuinely concerned about. Have you let your concern produce action, or has it remained a private anxiety? Identify one concrete thing you can do this week &mdash; a message, a visit, a prayer shared in person &mdash; that costs you something real. Do not let it remain internal.",
              },
              {
                color: PURPLE,
                number: "02",
                title: "Invest in Others as Fellow Workers in the Gospel",
                verses: "1 Thessalonians 3:2",
                body1: "Timothy was young, potentially inexperienced, and not the obvious first choice for a sensitive pastoral mission to a threatened community. Paul sent him anyway &mdash; and described him in the most generous possible terms: &ldquo;our brother and God&rsquo;s coworker in the gospel of Christ.&rdquo; This is not flattery; it is the deliberate elevation of a younger colleague into the dignity of his calling. Paul could have sent a more experienced emissary or simply tried to return himself; instead he trusted Timothy with a task that mattered deeply.",
                body2: "The practice of investing in others as fellow workers is one of the most important and undervalued aspects of Christian ministry at every level. The parent who treats a teenager&rsquo;s emerging faith as genuine and significant &mdash; not merely a phase to be managed &mdash; is doing what Paul did for Timothy. The pastor who sends a lay leader into a difficult pastoral situation with full confidence and endorsement is doing what Paul did. The senior colleague who introduces a junior colleague as &ldquo;God&rsquo;s coworker in the gospel&rdquo; rather than as &ldquo;my assistant&rdquo; is forming the next generation of ministry in the pattern of apostolic generosity.",
                practice: "Who in your life is a potential &ldquo;Timothy&rdquo; &mdash; someone younger or less experienced in faith who could be trusted with a meaningful task in the life of your community? This week, find one opportunity to give that person genuine responsibility and to introduce or describe them in terms of their calling rather than their inexperience.",
              },
              {
                color: GREEN,
                number: "03",
                title: "Let Your Steadfastness Give Life to Those Who Lead You",
                verses: "1 Thessalonians 3:7-8",
                body1: "&ldquo;For now we live, if you are standing fast in the Lord.&rdquo; Most people in the pew have no idea what it means to a pastor, a teacher, a mentor, or a spiritual parent when the people they have invested in continue to stand firm in faith. Paul&rsquo;s &ldquo;now we live&rdquo; reveals the profound degree to which those in leadership are sustained &mdash; quite literally &mdash; by the faithfulness of those they serve. This is not an unhealthy dependency; it is the proper reciprocity of the body of Christ.",
                body2: "If you are in a community of faith and you are &ldquo;standing fast in the Lord&rdquo; &mdash; remaining in faith and love despite affliction and difficulty &mdash; you are almost certainly doing more for those who lead and teach you than you know. Your faithfulness is not invisible. It gives life. The inverse is also true: drift and disengagement are not private matters. They diminish the community and those who gave themselves to form it. One of the most significant acts of love available to any believer is to persevere visibly &mdash; to be among those who are standing fast, whose presence and faithfulness can be reported as good news.",
                practice: "Consider your relationship with those who have invested in your faith &mdash; a pastor, a teacher, a mentor, a parent in the faith. Have you let them know recently that their labor has not been in vain? Write a message or make a call this week to tell one person specifically how their investment in your faith has produced something real in you. Give them the gift of knowing that they can &ldquo;live&rdquo; because you are standing fast.",
              },
              {
                color: BLUE,
                number: "04",
                title: "Pray for Others with Specific, Earnest Intercession",
                verses: "1 Thessalonians 3:9-10",
                body1: "Paul&rsquo;s prayer in verses 9-10 is specific in its content (&ldquo;supply what is lacking in your faith&rdquo;), earnest in its frequency (&ldquo;night and day&rdquo;), and excessive in its thanksgiving (&ldquo;what thanksgiving can we return to God for you?&rdquo;). This is not the polite general prayer of &ldquo;bless so-and-so&rdquo; but the prayer of someone who knows the people they are praying for well enough to identify what is lacking and to bring it specifically before God with consistent, earnest intercession.",
                body2: "The practice of specific intercessory prayer is one of the most powerful forms of love available to any believer. To pray &ldquo;night and day&rdquo; for another person&rsquo;s faith is to make their spiritual life a constant presence before God. It is to carry them into the throne room of grace repeatedly, with specific requests drawn from knowledge of their actual condition. Paul does not pray for the Thessalonians&rsquo; comfort or success; he prays that what is lacking in their faith would be supplied. This requires the kind of attentive love that knows another person&rsquo;s spiritual state well enough to name its deficiencies honestly before God.",
                practice: "Choose one person to intercede for specifically this week with the specificity of 1 Thessalonians 3:10 &mdash; naming not general blessing but what is specifically lacking in their faith or spiritual life. Pray for them at least once in the morning and once before sleep for seven days. At the end of the week, notice what this practice has done to your love for them and your awareness of God&rsquo;s work in their life.",
              },
              {
                color: TEAL,
                number: "05",
                title: "Pursue Holiness Through Abounding Love",
                verses: "1 Thessalonians 3:12-13",
                body1: "The connection Paul makes between love and holiness in verses 12-13 is counterintuitive for many Christians who have been formed to think of holiness primarily in terms of personal avoidance &mdash; not doing certain things, staying away from certain influences, maintaining certain disciplines. Paul&rsquo;s prayer does not neglect these realities, but the path to holiness he envisions runs through love: the heart is established blameless in holiness as a consequence of increasing and abounding in love. You cannot be established in holiness by refusing love; you are established in holiness by giving it.",
                body2: "This is not a soft account of holiness. &ldquo;Blameless before our God and Father at the coming of our Lord Jesus&rdquo; is an eschatological standard &mdash; the ultimate accountability of the last day. Paul is not interested in a holiness that merely looks good to other people or satisfies a personal sense of achievement. He is interested in a holiness that will stand in the presence of God when all pretense is stripped away. And his claim is that this deep, enduring, eschatological holiness is produced in the community that learns to love &mdash; to increase and abound in love for one another and for all. Love is not the enemy of holiness; it is the engine of it.",
                practice: "Identify one concrete way you can increase your love for someone in your community this week &mdash; not a feeling but an action. Then ask: what would it look like to let this act of love be part of your formation in holiness, rather than treating it as separate from your spiritual life? Bring both the love and the desire for holiness before God in prayer, asking him to make the connection between them real in your experience.",
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
            <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 26, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>SUMMARY</div>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>First Thessalonians 3 as a Word for Our Moment</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "First Thessalonians 3 was written for a community under affliction and an apostle in anxiety, separated by distance and sustained by nothing except the report of each other&rsquo;s faithfulness. Paul could not return to Thessalonica; the Thessalonians could not go to Paul; Timothy carried the connection between them at personal cost. And yet the result was the overflowing joy of verse 9, the &ldquo;now we live&rdquo; of verse 8, and the prayer of verses 11-13 that has nourished the church&rsquo;s life ever since. The interconnected life of the body of Christ is not a metaphor; it is the actual condition of those who belong to Jesus together. Our standing fast genuinely sustains those who served us. Their intercession for us genuinely forms us in holiness. The love that abounds between us is the very instrument by which God establishes our hearts blameless for the day of his coming." }}
              />
            </div>
          </div>
        )}

        {/* Videos section -- always visible below tabs */}
        <div style={{ marginTop: 48, marginBottom: 60 }}>
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 16, marginBottom: 28 }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Video teachings on 1 Thessalonians 3 and the early church in Thessalonica &mdash; for deeper study and group use." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.5 }}>1 Thessalonians 3 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div style={{ background: `linear-gradient(135deg, ${PURPLE}18 0%, ${BLUE}12 100%)`, border: `1px solid ${PURPLE}30`, borderRadius: 16, padding: 36, marginBottom: 60, textAlign: "center" }}>
          <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 12 }}>GO DEEPER</div>
          <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 26, margin: "0 0 14px", lineHeight: 1.2 }}>Continue Your Study of 1 Thessalonians</h2>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "First Thessalonians 3 sits at the heart of Paul&rsquo;s most personal letter. Study the surrounding chapters to understand the full arc of his pastoral relationship with the Thessalonian community." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {[
              { label: "1 Thess 1 Guide", href: "/1-thessalonians-1-guide", color: GOLD },
              { label: "1 Thess 2 Guide", href: "/1-thessalonians-2-guide", color: GREEN },
              { label: "1 Thess 4 Guide", href: "/1-thessalonians-4-guide", color: TEAL },
              { label: "Full Thessalonians Guide", href: "/christian-book-of-1-thessalonians-guide", color: PURPLE },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ background: `${link.color}18`, border: `1px solid ${link.color}40`, borderRadius: 10, padding: "10px 20px", fontSize: 14, color: link.color, fontWeight: 700, textDecoration: "none", display: "inline-block" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
