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
  { id: "versebyverse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "gPT-PbIWGdQ", title: "2 Thessalonians Overview -- BibleProject" },
  { videoId: "7vMaC31b-Ks", title: "The Man of Lawlessness -- 2 Thessalonians 2" },
  { videoId: "z5NxvNPjroM", title: "Standing Firm in the Last Days -- 2 Thess 2:15" },
  { videoId: "9KnFGIkZBEo", title: "The Restrainer and the Day of the Lord Explained" },
];

const VERSE_ITEMS = [
  {
    ref: "2 Thessalonians 2:1&ndash;2",
    heading: "Do Not Be Quickly Shaken -- The Day Has Not Come",
    color: GOLD,
    body: "&ldquo;Now concerning the coming of our Lord Jesus Christ and our being gathered to him, we ask you, brothers, not to be quickly shaken in mind or alarmed, either by a spirit or a spoken word, or a letter seeming to be from us, to the effect that the day of the Lord has come.&rdquo; Paul opens with a pastoral emergency: the Thessalonian community has been destabilized by the claim that the day of the Lord has already arrived. The sources of this destabilization are carefully listed &mdash; a spirit (prophetic utterance), a spoken word (oral teaching), or a letter purportedly from Paul. The three channels of false information cover the full range of communication available in the ancient world. The word translated &ldquo;shaken&rdquo; (saleuthenai) is used in secular Greek of the tossing of a ship on the sea; the metaphor conveys the disorienting, destabilizing effect of the false claim on the community&rsquo;s emotional and theological equilibrium. &ldquo;Alarmed&rdquo; (throeisthai) implies a continuing state of agitation, not merely a momentary shock. Paul&rsquo;s purpose throughout the chapter is to give the Thessalonians theological resources sufficient to stabilize them against exactly this kind of eschatological alarm.",
  },
  {
    ref: "2 Thessalonians 2:3&ndash;5",
    heading: "The Rebellion Must Come First -- The Man of Lawlessness",
    color: ROSE,
    body: "&ldquo;Let no one deceive you in any way. For that day will not come, unless the rebellion comes first, and the man of lawlessness is revealed, the son of destruction, who opposes and exalts himself against every so-called god or object of worship, so that he takes his seat in the temple of God, proclaiming himself to be God. Do you not remember that when I was still with you I told you these things?&rdquo; Paul asserts that the day of the Lord cannot have arrived because two events must precede it: the apostasia (rebellion, defection, falling away) and the revelation of the man of lawlessness. The apostasia is deliberately ambiguous; it can mean a religious defection (apostasy from the faith) or a political rebellion. The phrase &ldquo;man of lawlessness&rdquo; (anomias) and the synonymous title &ldquo;son of destruction&rdquo; (apoleia &mdash; the same word used of Judas in John 17:12) describe a figure who embodies opposition to God in its most concentrated and personal form. The description &mdash; opposing and exalting himself above every so-called god, taking his seat in the temple &mdash; echoes Daniel&rsquo;s vision of the abomination of desolation (Daniel 9:27, 11:36) and anticipates the beast of Revelation 13. Paul&rsquo;s appeal to prior oral teaching (&ldquo;do you not remember that when I was still with you I told you these things?&rdquo;) indicates that this eschatological framework was part of his foundational missionary instruction.",
  },
  {
    ref: "2 Thessalonians 2:6&ndash;8",
    heading: "The Restrainer -- Revealed in His Time",
    color: TEAL,
    body: "&ldquo;And you know what is restraining him now so that he may be revealed in his time. For the mystery of lawlessness is already at work. Only he who now restrains it will do so until he is out of the way. And then the lawless one will be revealed, whom the Lord Jesus will kill with the breath of his mouth and bring to nothing by the appearance of his coming.&rdquo; The identity of &ldquo;the restrainer&rdquo; (to katechon in the neuter in v. 6, ho katechon in the masculine in v. 7) is one of the most debated questions in New Testament scholarship. Proposed identifications include the Roman Empire and its emperors (so Tertullian), the preaching of the gospel, Michael the archangel, the Holy Spirit, the principle of ordered government, and Paul himself. The grammatical shift from neuter to masculine may reflect a distinction between an impersonal force and a personal agent. What is clear from the passage is that the restrainer is real, currently active, and will eventually be removed at the appointed time (&ldquo;in his time&rdquo; &mdash; en to auto kairo, suggesting divine sovereignty over the timing). The denouement is dramatically stated: the Lord Jesus will destroy the lawless one simply by the breath of his mouth &mdash; an echo of Isaiah 11:4, where the Branch of Jesse &ldquo;shall strike the earth with the rod of his mouth&rdquo; &mdash; and by the appearance of his coming (epiphaneia tes parousias).",
  },
  {
    ref: "2 Thessalonians 2:9&ndash;12",
    heading: "The Strong Delusion -- Sent to Those Who Refused the Truth",
    color: PURPLE,
    body: "&ldquo;The coming of the lawless one is by the activity of Satan with all power and false signs and wonders and with all wicked deception for those who are perishing, because they refused to love the truth and so be saved. Therefore God sends them a strong delusion, so that they may believe what is false, in order that all may be condemned who did not believe the truth but had pleasure in unrighteousness.&rdquo; Paul identifies the ultimate source of the lawless one&rsquo;s power: it is Satanic activity. The coming (parousia) of the lawless one is a deliberate parody of the coming (parousia) of the Lord Jesus Christ. His power includes false signs and wonders &mdash; the same vocabulary used of authentic divine miracles but in the service of deception. The description of the perishing is theologically precise: they are perishing &ldquo;because they refused to love the truth.&rdquo; The Greek anthi hon indicates exchange &mdash; in place of loving the truth, they embraced deception, and God&rsquo;s judicial response is to confirm them in that choice by sending a strong delusion (plane ischura). This is judicial hardening of the kind described in Romans 1:24, 26, 28 &mdash; God&rsquo;s wrath expressed not as direct punishment but as the confirmation of a choice already made. The verse stands as a solemn warning: the refusal to love the truth is not a neutral act but one that carries eschatological consequences.",
  },
  {
    ref: "2 Thessalonians 2:13&ndash;15",
    heading: "Chosen as Firstfruits -- Stand Firm in the Traditions",
    color: GREEN,
    body: "&ldquo;But we ought always to give thanks to God for you, brothers beloved by the Lord, because God chose you as the firstfruits to be saved, through sanctification by the Spirit and belief in the truth. To this he called you through our gospel, so that you may obtain the glory of our Lord Jesus Christ. So then, brothers, stand firm and hold to the traditions that you were taught, whether by our spoken word or by our letter.&rdquo; After the extended and disturbing portrait of the man of lawlessness and the strong delusion, Paul pivots with a dramatic &ldquo;but&rdquo; (de) to the Thessalonians&rsquo; situation: they are beloved by the Lord, chosen by God, sanctified by the Spirit, and called through the gospel to obtain the glory of Christ. The contrast could not be sharper &mdash; those who refused to love the truth perish in their delusion; these beloved brothers are being saved through exactly what the perishing refused: belief in the truth. The practical exhortation that follows is: &ldquo;stand firm and hold to the traditions.&rdquo; The word &ldquo;traditions&rdquo; (paradoseis) here does not mean human customs but the apostolic teaching that was delivered (paradidomi) to the Thessalonians by Paul both orally and in writing. Stability in the face of eschatological alarm is achieved not through speculative calculation but through rootedness in the apostolic gospel.",
  },
  {
    ref: "2 Thessalonians 2:16&ndash;17",
    heading: "Comfort and Strength in Every Good Work",
    color: BLUE,
    body: "&ldquo;Now may our Lord Jesus Christ himself, and God our Father, who loved us and gave us eternal comfort and good hope through grace, comfort your hearts and establish you in every good work and word.&rdquo; The chapter concludes with a benediction of profound pastoral beauty. After the urgency of the preceding verses &mdash; the rebellion, the man of lawlessness, the strong delusion, the call to stand firm &mdash; Paul offers not a strategy but a prayer: that Christ himself and God our Father would do what the chapter has been pointing toward. The ground of the prayer is stated with theological precision: God &ldquo;loved us&rdquo; (aorist, a decisive past act) and &ldquo;gave us&rdquo; (also aorist, a completed gift) eternal comfort and good hope through grace. The comfort is eternal (aionion) &mdash; not the temporary relief of resolved circumstances but the unshakeable foundation of divine love. The hope is good (agathan) &mdash; not wishful optimism but the confident expectation rooted in what God has already done in Christ. This double gift &mdash; eternal comfort and good hope &mdash; is the basis for the stability that Paul has been urging throughout the chapter. It is not achieved through eschatological calculation but received through divine grace.",
  },
];

const THEME_ITEMS = [
  {
    title: "The Day of the Lord Has Not Yet Come",
    color: GOLD,
    body: "The controlling concern of 2 Thessalonians 2 is stabilizing a community that has been told the day of the Lord has already arrived. Paul&rsquo;s response establishes a pattern for Christian engagement with eschatological agitation that has remained relevant in every generation: identify the preconditions that have not yet been met, and use them to anchor the community against premature alarm. The two preconditions Paul identifies &mdash; the rebellion (apostasia) and the revelation of the man of lawlessness &mdash; function not as a timeline for calculation but as theological safeguards against being &ldquo;quickly shaken in mind.&rdquo; The Thessalonians&rsquo; problem was not that they took the day of the Lord too seriously but that they had been deceived about its timing. Paul takes the eschatological hope with complete seriousness while correcting the false claim that it has already been fulfilled. This is the model for Christian eschatological maturity: holding the hope firmly while refusing to be manipulated by claims about its timing.",
  },
  {
    title: "The Man of Lawlessness and Satanic Deception",
    color: ROSE,
    body: "The figure Paul calls the man of lawlessness, the son of destruction, is the most concentrated portrait of eschatological evil in Paul&rsquo;s letters. Several features of the portrait are theologically significant. First, the figure&rsquo;s power is derived and Satanic &mdash; &ldquo;the coming of the lawless one is by the activity of Satan&rdquo; (v. 9). He is not an autonomous evil but an agent of the one who is himself a creature, already defeated at the cross. Second, the figure&rsquo;s method is deceptive: &ldquo;false signs and wonders&rdquo; that mimic the authentic works of God. Third, the figure&rsquo;s destruction is effortless from God&rsquo;s perspective: the Lord Jesus kills him with the breath of his mouth and the appearance of his coming (v. 8). The grandeur of the Satanic counterfeit is met by the casual sovereignty of Christ. This asymmetry is an important pastoral resource: the threat is real but the outcome is not in doubt.",
  },
  {
    title: "The Restrainer Who Holds Back Lawlessness",
    color: TEAL,
    body: "The doctrine of the restrainer (to katechon, ho katechon) in vv. 6&ndash;7 is one of the most theologically mysterious passages in the New Testament. What is clear from the text is that something or someone is actively restraining the full manifestation of the mystery of lawlessness that is already at work in the world. The restraint is effective but temporary: it will be removed &ldquo;until he is out of the way.&rdquo; Whatever one concludes about the restrainer&rsquo;s specific identity, the passage teaches that God&rsquo;s sovereign governance of history includes providential means of preventing evil from reaching its full eschatological intensity before the appointed time. The world is not subject to the unrestrained malevolence of Satan; there is a limiting, holding back of the full manifestation of lawlessness that is part of God&rsquo;s governance. This is a theologically important counterweight to pessimistic views of history that see evil as unchecked.",
  },
  {
    title: "Loving the Truth as the Condition for Salvation",
    color: PURPLE,
    body: "The negative description in verse 10 &mdash; those who are perishing &ldquo;refused to love the truth and so be saved&rdquo; &mdash; implies a positive description of what salvation requires: a love of the truth. This is a striking and unusual formulation. Elsewhere Paul speaks of &ldquo;believing the truth&rdquo; (v. 13) or obeying the gospel, but &ldquo;loving the truth&rdquo; introduces a dimension of affective desire that goes beyond mere intellectual assent. The perishing are not simply those who failed to encounter the truth or lacked the cognitive equipment to assess it; they are those who actively refused to love it. This implies a moral element in the rejection of the gospel that goes beyond intellectual error. The love of truth &mdash; or its absence &mdash; is not merely an epistemological stance but a moral orientation of the will toward or away from reality as God defines it. The strong delusion that God sends is the confirmation, not the initiation, of a stance already taken.",
  },
];

const APPLICATION_ITEMS = [
  {
    heading: "Not Being Shaken by End-Times Speculation",
    color: GOLD,
    body: "The Thessalonians were destabilized not by persecution or by doubt about the resurrection but by a specific claim about eschatological timing: that the day of the Lord had already come. The claim came through multiple channels &mdash; prophetic utterance, spoken word, and a letter. Paul&rsquo;s response is a model for how Christian communities should handle the recurring waves of eschatological sensationalism that appear in every generation. The antidote is not to avoid eschatological thinking but to be well-grounded in the apostolic teaching about what must precede the end. A community that knows Paul&rsquo;s letter cannot be shaken by the claim that the day has already come because it knows the day has not yet met its preconditions. The practical implication is that solid eschatological teaching is not a luxury for theologically advanced Christians but a pastoral necessity for ordinary congregational life. People who have not been taught what the New Testament actually says about the end times are vulnerable to every new claim about prophetic timelines, current events, and apocalyptic timetables.",
  },
  {
    heading: "Recognizing Deception&rsquo;s Spiritual Source",
    color: ROSE,
    body: "Paul locates the source of the lawless one&rsquo;s power explicitly in Satanic activity (v. 9). This is not a retreat into superstition but a recognition that the ultimate source of the world&rsquo;s deepest deceptions is personal, intelligent, and hostile to God. The practical implication is that Christians engaging with cultural, intellectual, and religious deception should include in their analysis the possibility of spiritual dimension. This does not mean that every error is Satanic in its origin or that every mistaken idea requires a deliverance prayer. But it does mean that the category of Satanic deception is not merely a rhetorical figure &mdash; it describes a real dynamic operating in the world. The antidote to deception is always the same: love of the truth (v. 10), belief in the truth (v. 13), standing firm in the apostolic traditions (v. 15). The spiritual dimension of deception is countered by the spiritual discipline of truth.",
  },
  {
    heading: "The Importance of Loving the Truth",
    color: TEAL,
    body: "The phrase &ldquo;because they refused to love the truth and so be saved&rdquo; (v. 10) is one of the most sobering in the New Testament. It implies that the line between those who are saved and those who perish is not merely a matter of having heard or not heard the gospel but of what one does with the truth when it is encountered. The refusal to love the truth is an active, culpable stance. This has direct implications for how Christians think about their own relationship to Scripture, to theological truth, and to the uncomfortable demands of the gospel. Are there truths in Scripture that you have encountered but found it convenient not to love &mdash; not to let land, not to allow to reshape your life? The strong delusion that follows the refusal to love the truth is not an arbitrary punishment but a divinely-ordered consequence of a choice already made. The safeguard is not intellectual sophistication but the genuine love of truth that opens the heart to receive what God says even when it is uncomfortable.",
  },
  {
    heading: "Standing Firm in Apostolic Teaching",
    color: GREEN,
    body: "Paul&rsquo;s practical exhortation in verse 15 is deceptively simple: &ldquo;stand firm and hold to the traditions that you were taught, whether by our spoken word or by our letter.&rdquo; In a chapter dealing with eschatological complexity, spectacular claims about the man of lawlessness, and the sobering prospect of divine judicial hardening, the practical prescription is not to become a more sophisticated eschatological thinker but to hold fast to what was already delivered. The traditions (paradoseis) Paul refers to are not human conventions but the apostolic gospel in its full doctrinal and ethical content. The image of holding (krateo &mdash; to grasp firmly, to keep a strong grip) suggests not a casual or passive possession of the truth but an active, muscular retention of it against the forces that would pull it away. In the contemporary context, where Christian teaching is increasingly shaped by therapeutic culture, social media discourse, and the shifting priorities of public opinion rather than by Scripture and apostolic tradition, the call to &ldquo;hold to the traditions&rdquo; is more urgent, not less.",
  },
];

export default function SecondThessalonians2Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0B0B18 0%, #0f0f1e 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2.5rem" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ marginBottom: "0.75rem" }}>
            <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Bible Study Guide</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.6rem)", fontWeight: 900, color: TEXT, marginBottom: "1rem", lineHeight: 1.15 }}>
            2 Thessalonians 2
          </h1>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 680, marginBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s most detailed teaching on the man of lawlessness and the day of the Lord &mdash; addressing eschatological alarm, revealing the restrainer who holds back lawlessness, warning against the strong delusion sent to those who refused to love the truth, and anchoring the community in God&rsquo;s sovereign comfort." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              { label: "Book", value: "2 Thessalonians" },
              { label: "Chapter", value: "2" },
              { label: "Author", value: "Paul, Silvanus, Timothy" },
              { label: "Date", value: "c. AD 50&ndash;52" },
              { label: "Key Verse", value: "2 Thess 2:15" },
            ].map((item) => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.4rem 0.85rem", display: "flex", gap: "0.4rem", alignItems: "center" }}>
                <span style={{ color: MUTED, fontSize: 11, fontWeight: 600 }}>{item.label}:</span>
                <span
                  style={{ color: TEXT, fontSize: 11, fontWeight: 700 }}
                  dangerouslySetInnerHTML={{ __html: item.value }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: BG, borderBottom: `1px solid ${BORDER}`, padding: "0 1rem" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", gap: "0.25rem", overflowX: "auto" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "0.85rem 1.2rem",
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GREEN}` : "2px solid transparent",
                color: activeTab === tab.id ? GREEN : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 400,
                cursor: "pointer",
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "2.5rem 1rem 4rem" }}>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "1.25rem" }}>Introduction to 2 Thessalonians 2</h2>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Historical Background</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Second Thessalonians was written shortly after 1 Thessalonians, likely from Corinth during Paul&rsquo;s eighteen-month stay there (Acts 18:11), around AD 50&ndash;52. The situation in Thessalonica has developed in a troubling direction: someone &mdash; through prophetic utterance, oral teaching, or a forged letter &mdash; has convinced some members of the community that the day of the Lord has already arrived. The result is the kind of eschatological panic that Paul addresses in chapter 2." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "Chapter 2 is the theological center of the letter and one of the most debated passages in the New Testament. The identity of the man of lawlessness, the nature of the restrainer, and the relationship of these figures to other eschatological texts in Daniel, the Gospels, and Revelation have generated an enormous volume of scholarly and popular commentary. Paul does not write as though he is introducing new ideas; he appeals repeatedly to what he taught the Thessalonians in person (&ldquo;do you not remember?&rdquo; v. 5; &ldquo;you know&rdquo; v. 6). The chapter presupposes a richer oral tradition of eschatological teaching than what is preserved in the letters." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Structure of Chapter 2</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  { ref: "vv. 1&ndash;2", desc: "Appeal not to be shaken &mdash; the day of the Lord has not yet come" },
                  { ref: "vv. 3&ndash;5", desc: "The rebellion must come first &mdash; the man of lawlessness revealed, son of destruction" },
                  { ref: "vv. 6&ndash;8", desc: "The restrainer holds back lawlessness &mdash; removed, then the lawless one destroyed by Christ" },
                  { ref: "vv. 9&ndash;12", desc: "The Satanic activity of the lawless one &mdash; strong delusion for those who refused the truth" },
                  { ref: "vv. 13&ndash;15", desc: "Thanksgiving for the Thessalonians&rsquo; election &mdash; stand firm in the traditions" },
                  { ref: "vv. 16&ndash;17", desc: "Benediction &mdash; comfort and establishment in every good work and word" },
                ].map((item) => (
                  <div key={item.ref} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: "0.8rem", minWidth: 72, paddingTop: 2 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                    <span style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.92rem" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Why This Chapter Matters</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "Second Thessalonians 2 is the most sustained treatment of eschatological evil in the Pauline letters and one of the most important texts in the New Testament for understanding the relationship between the present age and the coming day of the Lord. It introduces or develops several concepts that have shaped Christian theology for twenty centuries: the man of lawlessness (later interpreted in relation to Antichrist traditions), the restrainer, the mystery of lawlessness already at work, and the strong delusion sent by God to those who refuse the truth." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "At the same time, the chapter is profoundly pastoral in its orientation. Paul&rsquo;s purpose is not to satisfy eschatological curiosity but to stabilize a community that has been shaken. The pivot in verses 13&ndash;15 &mdash; from the dark portrait of the lawless one and the perishing to the bright declaration that the Thessalonians are beloved, chosen, and called &mdash; is one of the great rhetorical and theological movements in Paul&rsquo;s letters. The chapter ends not with calculations but with a prayer for comfort and establishment in every good work and word." }}
              />
            </div>

            <div style={{ background: `linear-gradient(135deg, ${GREEN}18 0%, ${TEAL}0c 100%)`, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "0.65rem", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Key Verse</h3>
              <blockquote
                style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.8, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;So then, brothers, stand firm and hold to the traditions that you were taught, whether by our spoken word or by our letter.&rdquo; &mdash; 2 Thessalonians 2:15" }}
              />
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "1.25rem" }}>Key Themes in 2 Thessalonians 2</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {THEME_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${item.color}30`, borderLeft: `4px solid ${item.color}`, borderRadius: 12, padding: "1.5rem" }}
                >
                  <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.8 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.25rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              {[
                { label: "The Mystery of Lawlessness Already at Work", color: ROSE, text: "The phrase &ldquo;mystery of lawlessness&rdquo; (mysterion tes anomias, v. 7) indicates that lawlessness is not merely a future threat but a present, partially-concealed reality. It is &ldquo;at work&rdquo; now, but not yet at full manifestation. The &ldquo;mystery&rdquo; terminology suggests that its full significance is hidden until the appointed time of revelation. Every generation of believers lives in the tension between the present, restrained operation of the mystery and its coming full revelation." },
                { label: "Gathered to Christ at His Coming", color: BLUE, text: "Paul opens the chapter with a reference to &ldquo;our being gathered to him&rdquo; (episynagoge &mdash; the great gathering, v. 1). This collection of believers to Christ at his coming is the eschatological horizon that gives shape to the entire chapter. The day of the Lord is not merely a day of judgment but a day of gathering &mdash; the completion of the community that God has been forming through the gospel." },
                { label: "Eternal Comfort and Good Hope", color: TEAL, text: "The benediction of vv. 16&ndash;17 centers on two gifts given through grace: eternal comfort (paraklesis aionios) and good hope (elpis agatha). Both are anchored in what God has already done in Christ &mdash; they are not hopes for things that might happen but gifts already given. The comfort is eternal because it derives from the eternal character of the God who gives it. The hope is good because it is grounded in the resurrection and the sovereignty of God over history." },
                { label: "Election and Sanctification Together", color: GREEN, text: "Paul&rsquo;s thanksgiving in v. 13 links divine election and the Spirit&rsquo;s sanctifying work: God chose the Thessalonians to be saved &ldquo;through sanctification by the Spirit and belief in the truth.&rdquo; Election is not the end of the story but the beginning of a process. The goal of election is not merely forensic justification but the transformation of the person through the Spirit. Election produces not passivity but active responsiveness to the work of God." },
              ].map((card) => (
                <div key={card.label} style={{ background: CARD, border: `1px solid ${card.color}28`, borderRadius: 12, padding: "1.25rem" }}>
                  <div style={{ color: card.color, fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{card.label}</div>
                  <p
                    style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: card.text }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Verse by Verse: 2 Thessalonians 2</h2>
            <p
              style={{ color: MUTED, marginBottom: "1.75rem", lineHeight: 1.65 }}
              dangerouslySetInnerHTML={{ __html: "A close reading of every section in 2 Thessalonians 2 &mdash; observing what Paul says about the day of the Lord, the man of lawlessness, the restrainer, and the strong delusion, and why it matters for faith and practice." }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {VERSE_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${item.color}30`, borderLeft: `4px solid ${item.color}`, borderRadius: 12, padding: "1.5rem" }}
                >
                  <div style={{ marginBottom: "0.35rem" }}>
                    <span
                      style={{ color: item.color, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
                      dangerouslySetInnerHTML={{ __html: item.ref }}
                    />
                  </div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{item.heading}</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.82 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            <div style={{ background: `linear-gradient(135deg, ${BLUE}12 0%, ${PURPLE}0a 100%)`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "1.5rem", marginTop: "1.5rem" }}>
              <h3 style={{ color: BLUE, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.65rem" }}>Contextual Note: The Man of Lawlessness in Interpretive History</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The identification of the man of lawlessness has been one of the most contested questions in the history of biblical interpretation. In the early church, Irenaeus and Hippolytus saw a future individual; Tertullian identified the restrainer as the Roman Empire. The Reformers, particularly Luther and Calvin, identified the papacy as the man of lawlessness &mdash; a reading driven by their historical circumstances and their conviction that the institutional church had exalted itself above God&rsquo;s word. Modern scholarship has focused on the background in Daniel 9&ndash;12, the Caligula crisis of AD 40 (when the Roman emperor threatened to place his statue in the Jerusalem Temple), and the broader pattern of eschatological evil in Jewish apocalyptic literature. No consensus has emerged. What is agreed is that Paul is describing a figure who embodies the ultimate opposition to God and who will be definitively destroyed by the returning Christ." }}
              />
            </div>

            <div style={{ background: `linear-gradient(135deg, ${GOLD}10 0%, ${TEAL}08 100%)`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "1.5rem", marginTop: "1rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.65rem" }}>Word Study: &ldquo;Apostasia&rdquo; and &ldquo;Paradoseis&rdquo;</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The word apostasia in verse 3 is the source of the English &ldquo;apostasy.&rdquo; In classical Greek it could refer to political defection or revolt; in Jewish usage it often specifically denoted abandonment of the Torah or the God of Israel. In verse 15, Paul uses the word paradoseis (traditions) to describe what the Thessalonians must hold fast. This is the same root as paradidomi, to hand over or deliver. The apostolic &ldquo;traditions&rdquo; are not human customs but the body of teaching that was formally delivered by the apostles to the churches &mdash; what Paul elsewhere calls &ldquo;the pattern of teaching to which you were committed&rdquo; (Romans 6:17). The command to hold to these traditions is the specific antidote to the apostasy that Paul warns about at the chapter&rsquo;s opening." }}
              />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Application: Living 2 Thessalonians 2 Today</h2>
            <p
              style={{ color: MUTED, marginBottom: "1.75rem", lineHeight: 1.65 }}
              dangerouslySetInnerHTML={{ __html: "How do the truths of 2 Thessalonians 2 shape the way we engage eschatology, recognize deception, love the truth, and stand firm in apostolic teaching?" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.75rem" }}>
              {APPLICATION_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{ background: CARD, border: `1px solid ${item.color}30`, borderLeft: `4px solid ${item.color}`, borderRadius: 12, padding: "1.5rem" }}
                >
                  <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: item.heading }} />
                  <p
                    style={{ color: MUTED, lineHeight: 1.82 }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Discussion and Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  "Paul warns against being &ldquo;quickly shaken in mind or alarmed&rdquo; about eschatological claims (v. 2). What kinds of claims &mdash; about current events, prophetic timelines, signs of the end &mdash; tend to produce that instability in you? What theological resources would stabilize you?",
                  "The man of lawlessness &ldquo;opposes and exalts himself above every so-called god&rdquo; (v. 4). In what cultural or ideological forms do you see this pattern of self-exaltation above God operating in the world today?",
                  "Paul says those who are perishing &ldquo;refused to love the truth&rdquo; (v. 10). Is there a truth in Scripture that you have known but found ways to avoid fully embracing? What would it mean to begin genuinely loving that truth?",
                  "The pivot in vv. 13&ndash;14 moves from the dark portrait of the perishing to the declaration that the Thessalonians are &ldquo;beloved by the Lord, chosen by God.&rdquo; How does the doctrine of election comfort you personally in a world where deception is spreading?",
                  "Paul commands &ldquo;stand firm and hold to the traditions&rdquo; (v. 15). What practices, disciplines, or communities help you maintain your grip on apostolic teaching when cultural pressure pulls you toward accommodation?",
                  "The benediction asks that God would &ldquo;comfort your hearts and establish you in every good work and word&rdquo; (v. 17). What would it mean in your specific situation for your heart to be comforted and your work and words to be established by God?",
                ].map((q, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: GOLD, fontWeight: 800, minWidth: 22, paddingTop: 1 }}>{idx + 1}.</span>
                    <span
                      style={{ color: MUTED, lineHeight: 1.7 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `linear-gradient(135deg, ${PURPLE}14 0%, ${BLUE}0c 100%)`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>A Prayer Drawn from 2 Thessalonians 2</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Lord Jesus Christ and God our Father &mdash; keep us from being quickly shaken or alarmed by the voices that claim more than they know about the end. Anchor us in what you have already told us through the apostles. Let us not be deceived by the signs and wonders that attend the mystery of lawlessness already at work in the world. Give us a love for the truth that is real, not theoretical &mdash; a love that receives what you say even when it is inconvenient and costly. Thank you that we are beloved, chosen, and being sanctified through the Spirit. Let that election produce the gratitude and the stability that no eschatological alarm can disturb. And where we have been shaken, restore us now &mdash; comfort our hearts, establish our words and works, and keep us standing firm in the traditions we received from your apostles, until your Son appears to destroy every opposition with the breath of his mouth. Come, Lord Jesus. Amen." }}
              />
            </div>
          </div>
        )}

        {/* Video Section -- always visible below active tab content */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: TEXT, marginBottom: "0.4rem" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}
            dangerouslySetInnerHTML={{ __html: "Curated video resources to deepen your study of 2 Thessalonians 2 and the day of the Lord." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            <section>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden", marginBottom: "1.25rem" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <div style={{ padding: "0.85rem 1rem" }}>
                    <p
                      style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem", margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* Further Study */}
        <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem" }}>
          <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Further Study Resources</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
            {[
              { title: "1&ndash;2 Thessalonians (NICNT)", author: "Leon Morris", color: GOLD },
              { title: "The Thessalonian Epistles", author: "D. Michael Martin", color: GREEN },
              { title: "The Letters to the Thessalonians", author: "Gene L. Green", color: BLUE },
              { title: "Antichrist: Two Thousand Years of the Human Fascination with Evil", author: "Bernard McGinn", color: ROSE },
            ].map((book) => (
              <div key={book.title} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                <div style={{ color: book.color, fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.25rem" }} dangerouslySetInnerHTML={{ __html: book.title }} />
                <div style={{ color: MUTED, fontSize: "0.78rem" }}>{book.author}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Related passages */}
        <div style={{ marginTop: "1.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem" }}>
          <h3 style={{ color: ROSE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Related Scripture Passages</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {[
              "Daniel 9:27",
              "Daniel 11:36&ndash;37",
              "Matthew 24:15",
              "Mark 13:14",
              "Romans 1:24&ndash;28",
              "1 John 2:18",
              "Revelation 13:1&ndash;10",
              "Isaiah 11:4",
            ].map((ref) => (
              <span
                key={ref}
                style={{ background: `${ROSE}12`, border: `1px solid ${ROSE}30`, borderRadius: 6, padding: "0.3rem 0.7rem", color: ROSE, fontSize: "0.8rem", fontWeight: 600 }}
                dangerouslySetInnerHTML={{ __html: ref }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
