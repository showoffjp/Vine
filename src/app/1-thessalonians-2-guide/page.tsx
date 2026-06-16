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
  { videoId: "No7KHCyTkAI", title: "1 Thessalonians Overview -- BibleProject" },
  { videoId: "kNMNIRPN4R4", title: "Paul&rsquo;s Ministry in Thessalonica -- Acts 17" },
  { videoId: "Dhl2U4K5NxM", title: "Authentic Ministry -- 1 Thessalonians 2" },
  { videoId: "q08VWMDcT5E", title: "Pastoral Love and the Gospel -- 1 Thess 2:8" },
];

const VERSE_ITEMS = [
  {
    ref: "1 Thessalonians 2:1&ndash;2",
    heading: "Our Coming Was Not in Vain -- Bold After Suffering",
    color: GOLD,
    body: "&ldquo;For you yourselves know, brothers, that our coming to you was not in vain. But though we had already suffered and been shamefully treated at Philippi, as you know, we had boldness in our God to declare to you the gospel of God in the midst of much conflict.&rdquo; Paul begins his defense of his ministry not with abstract credentials but with the Thessalonians&rsquo; own knowledge. They were there; they saw what happened. The phrase &ldquo;not in vain&rdquo; (ou kene) suggests Paul is answering critics who alleged that his hasty departure from Thessalonica revealed an empty, self-serving mission. Against this charge, Paul points to what he and his team did before arriving: they had suffered at Philippi. The Acts 16 account fills in the details &mdash; Paul and Silas were beaten with rods and thrown into prison. To then travel to Thessalonica and preach openly in the face of &ldquo;much conflict&rdquo; (pollos agon &mdash; the word can denote an athletic contest or a military engagement) was not the behavior of hirelings seeking easy reward. It was the boldness that comes from knowing that God himself is the one who sends the messenger.",
  },
  {
    ref: "1 Thessalonians 2:3&ndash;6",
    heading: "Speaking to Please God, Not Men",
    color: TEAL,
    body: "&ldquo;For our appeal does not spring from error or impurity or any attempt to deceive, but just as we have been approved by God to be entrusted with the gospel, so we speak, not to please man, but to please God who tests our hearts. For we never came with words of flattery, as you know, nor with a pretext for greed &mdash; God is witness. Nor did we seek glory from people, whether from you or from others, though we could have made demands as apostles of Christ.&rdquo; Paul offers what amounts to a negative catalog of ministerial motivations: he is not driven by error (plane &mdash; the wandering of a deceiver), by impurity (akatharsia &mdash; possibly sexual immorality or moral uncleanness more broadly), or by any attempt to deceive (dolos &mdash; bait or trickery). These were real charges leveled at itinerant teachers in the ancient world, and Paul meets them directly. The positive ground of his ministry is that God has &ldquo;approved&rdquo; him (dokimazo &mdash; tested and found genuine, the language of refining metals). The test is God&rsquo;s: &ldquo;God who tests our hearts.&rdquo; This is the ultimate accountability &mdash; not to human assessment but to the divine examiner of interior motives. Flattery, greed, and the craving for human glory are the three great corruptions of ministry; Paul dismisses all three.",
  },
  {
    ref: "1 Thessalonians 2:7&ndash;8",
    heading: "Gentle as a Nursing Mother -- Ready to Share Ourselves",
    color: GREEN,
    body: "&ldquo;But we were gentle among you, like a nursing mother taking care of her own children. So, being affectionately desirous of you, we were ready to share with you not only the gospel of God but also our own selves, because you had become very dear to us.&rdquo; The mother image is one of the most striking and tender in Paul&rsquo;s letters. The word translated &ldquo;gentle&rdquo; (epios) appears only rarely in Greek literature and suggests a disposition of softness and warmth. The nursing mother image (trophos) captures not just gentleness but the intimacy of the nursing relationship &mdash; body-to-body nourishment, absolute vulnerability, unreserved giving. Paul says the missionaries were &ldquo;affectionately desirous&rdquo; of the Thessalonians &mdash; the Greek word (homeiromai) is extremely rare and almost certainly conveys a deep yearning. The crucial addition is &ldquo;not only the gospel of God but also our own selves.&rdquo; Gospel transmission is not merely information transfer. It is the giving of the person who carries the gospel. Effective ministry requires self-donation, not just doctrinal delivery. The Thessalonians had become &ldquo;very dear&rdquo; (agapetoi &mdash; beloved) to Paul and his team &mdash; the love described is not professional affection but the love of a parent for a child.",
  },
  {
    ref: "1 Thessalonians 2:9&ndash;12",
    heading: "Labor and Toil -- Urging as a Father",
    color: PURPLE,
    body: "&ldquo;For you remember, brothers, our labor and toil: we worked night and day, that we might not be a burden to any of you, while we proclaimed to you the gospel of God. You are witnesses, and God also, how holy and righteous and blameless was our conduct toward you believers. For you know how, like a father with his children, we exhorted each one of you and encouraged you and charged you to walk in a manner worthy of God, who calls you into his own kingdom and glory.&rdquo; The verb pair &ldquo;labor and toil&rdquo; (kopos kai mochthos) describes exhausting, grinding effort &mdash; the same phrase Paul uses in 2 Corinthians 11:27 when cataloging his sufferings. Paul worked with his own hands (likely as a tentmaker, as in Acts 18:3) so that he would not be financially dependent on the Thessalonians and thereby give the appearance of preaching for payment. This was a deliberate apostolic strategy: the gospel must not look like a product for sale. Having established the mother image in vv. 7&ndash;8, Paul now deploys the father image: &ldquo;like a father with his children, we exhorted each one of you.&rdquo; The father&rsquo;s role in this passage is not authority but formation &mdash; the verbs are &ldquo;exhorted,&rdquo; &ldquo;encouraged,&rdquo; and &ldquo;charged.&rdquo; The goal of this formation is not personal loyalty to Paul but a life worthy of God, who calls his people into his &ldquo;kingdom and glory.&rdquo;",
  },
  {
    ref: "1 Thessalonians 2:13&ndash;16",
    heading: "Receiving the Word as the Word of God",
    color: BLUE,
    body: "&ldquo;And we also thank God constantly for this, that when you received the word of God, which you heard from us, you accepted it not as the word of men but as what it really is, the word of God, which is at work in you believers.&rdquo; This verse is one of the most explicit statements of the divine character of the apostolic message in the entire New Testament. Paul makes a distinction that is fundamental to all Christian theology: there is a difference between the word of men and the word of God, and what the Thessalonians received when they heard Paul preach was the latter. The phrase &ldquo;at work in you believers&rdquo; (energeitai en humin tois pisteuousin) describes an ongoing interior activity &mdash; the word of God is not merely accepted once and filed away; it is actively operative in those who believe. Paul then draws a parallel between the Thessalonians&rsquo; suffering and the suffering of the Judean churches, who have endured persecution from their own compatriots. Both communities bear witness to the same gospel-producing cost: receiving the word of God as God&rsquo;s word means participating in the pattern of Jesus himself, who was rejected by those who should have received him.",
  },
  {
    ref: "1 Thessalonians 2:17&ndash;20",
    heading: "Satan&rsquo;s Hindrance -- You Are Our Glory and Joy",
    color: ROSE,
    body: "&ldquo;But since we were torn away from you, brothers, for a short time, in person not in heart, we endeavored the more eagerly and with great desire to come to you &mdash; because we wanted to come to you &mdash; I, Paul, again and again &mdash; but Satan hindered us. For what is our hope or joy or crown of boasting before our Lord Jesus at his coming? Is it not you? For you are our glory and joy.&rdquo; The word translated &ldquo;torn away&rdquo; (aporphanizein) is the word for being bereaved of a parent or orphaned &mdash; the separation from the Thessalonians was experienced by Paul not as a tactical inconvenience but as a kind of bereavement. The phrase &ldquo;Satan hindered us&rdquo; (enekopsen hemas ho Satanas) is a remarkable acknowledgment that the spiritual opposition to gospel work is personal and active. Satan is not merely an abstract principle of evil but an agent who acts to obstruct the advance of the gospel. Paul does not explain precisely how Satan hindered him &mdash; it may have been the bond Jason had posted (Acts 17:9), illness, or other circumstances &mdash; but he is clear about the ultimate source of the opposition. The passage closes with an extraordinary declaration of pastoral affection: &ldquo;you are our glory and joy.&rdquo; The Thessalonian congregation is not a professional achievement but a personal joy, and it is the ground of Paul&rsquo;s hope at the coming of Christ. The language of &ldquo;crown of boasting&rdquo; (stephanos kaucheseos) echoes the victor&rsquo;s crown in athletic competition; the Thessalonians will be Paul&rsquo;s crown at the judgment seat of Christ.",
  },
];

const THEME_ITEMS = [
  {
    title: "Ministry Motivated by Love, Not Applause",
    color: GOLD,
    body: "The controlling contrast in 1 Thessalonians 2 is between speaking to please men and speaking to please God (v. 4). The word &ldquo;please&rdquo; (aresko) describes the fundamental motivation that drives a person&rsquo;s behavior. Paul insists that the apostolic mission was not driven by the desire for human approval &mdash; not flattery, not greed, not the craving for glory from people. This is one of the most searching diagnostic questions any minister, teacher, or Christian worker can ask: what is the fundamental motivation behind what I am doing? Am I seeking God&rsquo;s approval or human applause? The two are not always opposed, but they diverge at precisely the moments that matter most: when telling the truth is unpopular, when faithful ministry is misunderstood, when the message is unwelcome. Paul&rsquo;s ministry was approved by God (v. 4 &mdash; the same word used for testing and approving refined metal) before it was exercised toward human beings. The order matters: God-approval produces God-shaped ministry; man-approval produces ministry shaped by whatever its audience happens to want.",
  },
  {
    title: "The Mother and Father Model of Pastoral Care",
    color: GREEN,
    body: "Paul&rsquo;s use of two parental images in a single passage &mdash; the nursing mother (v. 7) and the exhorting father (v. 11) &mdash; is deliberate and complementary. Together they describe a complete model of Christian pastoral care. The mother image emphasizes tenderness, intimacy, and self-giving nourishment; the nursing mother does not merely provide food but herself. The father image emphasizes formation, direction, and accountability; the father exhorts, encourages, and charges his children to walk in a manner worthy of God. Both images are essential. Ministry that has only the mother dimension may become indulgent, failing to form character and confront sin. Ministry that has only the father dimension may become harsh and domineering, driving people away rather than drawing them toward God. Paul practiced both because the Thessalonians needed both. The community of faith is described in Scripture as a family precisely because family relationships capture dimensions of care that purely professional or organizational relationships cannot.",
  },
  {
    title: "Receiving the Word as the Word of God",
    color: TEAL,
    body: "The theological claim in verse 13 is foundational for all subsequent Christian theology and practice: what Paul and his team spoke when they preached the gospel was not merely their own interpretation of religious experience but the actual word of God. The Thessalonians&rsquo; acceptance of the message &ldquo;not as the word of men but as what it really is, the word of God&rdquo; is presented by Paul as the defining act of their conversion and the ground of their ongoing formation. This claim has enormous consequences. If the apostolic message is the word of God, then it carries divine authority and can legitimately make demands on human life, thought, and allegiance. It also means that the word is &ldquo;at work&rdquo; in believers &mdash; not merely a deposit of information to be stored but an active, living force that changes those it inhabits. The contemporary tendency to approach Scripture as one voice among many, to be evaluated by personal preference or cultural consensus, is precisely what Paul says the Thessalonians did not do. Their reception of the word as God&rsquo;s word was the condition for the word&rsquo;s power at work in them.",
  },
  {
    title: "Satanic Opposition and Pastoral Perseverance",
    color: ROSE,
    body: "The acknowledgment in verse 18 that &ldquo;Satan hindered us&rdquo; is not a theological novelty but a pastoral realism that runs through the New Testament. Paul is operating with a cosmology in which the advance of the gospel is not merely met with human resistance but with active spiritual opposition. The enemy is personal (&ldquo;Satan&rdquo; &mdash; not a vague force of evil), strategic (he targets the apostle who could most strengthen the Thessalonians), and effective (the hindrance actually prevented Paul from returning, at least in the short term). This perspective has a profound effect on how Christians interpret the circumstances of ministry. When a gospel worker is frustrated in their purpose, when a pastoral relationship is repeatedly disrupted, when a church community encounters obstacle after obstacle in its mission, the scriptural framework includes the possibility that personal spiritual opposition is part of the picture. This does not eliminate human responsibility or deny secondary causes; it adds a layer of spiritual seriousness to the interpretation of providential circumstances.",
  },
];

const APPLICATION_ITEMS = [
  {
    heading: "Examining the Motivation Behind Ministry",
    color: GOLD,
    body: "The searching question Paul implies throughout 1 Thessalonians 2 is not &ldquo;Is my ministry effective?&rdquo; but &ldquo;For whom am I doing this?&rdquo; The distinction between speaking to please man and speaking to please God (v. 4) is not merely a question for professional clergy but for every Christian who teaches, counsels, leads a small group, mentors a younger believer, or engages in any form of Christian service. The pull toward flattery, greed, and human glory is not a pathology confined to corrupt televangelists; it operates in subtle forms in every Christian worker. Flattery means telling people what they want to hear rather than what they need to hear. Greed in ministry can be financial but can also be reputational &mdash; building a following rather than building the kingdom. The craving for human glory shows up whenever a ministry decision is made primarily because it will look good or be praised by the right people. The antidote Paul models is accountability to God as the one who &ldquo;tests our hearts&rdquo; &mdash; an interior orientation that does not require external validation because it is grounded in God&rsquo;s approval.",
  },
  {
    heading: "Practicing the Mother and Father Modes of Care",
    color: GREEN,
    body: "The two parental images in 1 Thessalonians 2 provide a framework for evaluating the quality of pastoral care in any Christian community. Ask two diagnostic questions. First, the mother question: are we giving ourselves, not just our programs? Paul says the missionaries shared &ldquo;not only the gospel of God but also our own selves&rdquo; (v. 8). This is the self-giving that goes beyond competent service delivery into genuine relational investment. Second, the father question: are we forming character, or just creating comfortable experiences? Paul as father &ldquo;exhorted each one of you and encouraged you and charged you to walk in a manner worthy of God&rdquo; (v. 11&ndash;12). Formation requires the courage to exhort &mdash; to say directly that something needs to change &mdash; and the patience to encourage when progress is slow. The balance between these two modes requires discernment: not every situation calls for the mother&rsquo;s tenderness, and not every situation calls for the father&rsquo;s charge. The pastor who cannot distinguish between them will be either too soft to form character or too hard to create the safety in which formation can happen.",
  },
  {
    heading: "Receiving Scripture as the Word of God",
    color: TEAL,
    body: "Paul&rsquo;s commendation of the Thessalonians for receiving the apostolic word &ldquo;not as the word of men but as what it really is, the word of God&rdquo; (v. 13) raises a direct challenge for contemporary Bible study. How do you actually approach the text of Scripture when you read it? There is a fundamental difference between approaching a text as a human document to be evaluated and approaching it as God&rsquo;s word to be received and obeyed. The first posture positions the reader as judge; the second positions the reader as a recipient. Neither demands naivety about the human dimension of the biblical text; Paul himself wrote these words as a real human being with pastoral concerns, rhetorical training, and a specific historical situation. But the human dimension does not eliminate the divine dimension. The Thessalonians&rsquo; willingness to receive the word as God&rsquo;s word was the condition for the word&rsquo;s active work in them (v. 13b). The practical implication is to approach Bible reading not as literary analysis alone but as a posture of receptive listening: what is God saying here, and what does he require of me in response?",
  },
  {
    heading: "Persevering in Gospel Work Despite Satanic Opposition",
    color: ROSE,
    body: "The frank acknowledgment that Satan hindered Paul from returning to Thessalonica (v. 18) is not a counsel of despair but a call to realistic perseverance. If even an apostle could be prevented from doing what he intended to do for the gospel, then the experience of blockage, frustration, and thwarted plans is not necessarily evidence that something is wrong with the worker or the mission. It may simply be the nature of gospel work in a world where spiritual opposition is real. The response modeled by Paul is not passivity &mdash; he says &ldquo;we endeavored the more eagerly and with great desire to come to you&rdquo; (v. 17) even while acknowledging the hindrance. He sent Timothy in his place (3:2). He continued praying (3:10). He eventually returned (Acts 20:1&ndash;2 may reflect a later visit to Macedonia including Thessalonica). The pastoral community remains Paul&rsquo;s &ldquo;glory and joy&rdquo; (v. 20) even when he cannot be physically present. Gospel workers who have been blocked should ask both questions: is this providential redirection that I should accept, or is this Satanic opposition that I should resist and work around?",
  },
];

export default function FirstThessalonians2Guide() {
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
            1 Thessalonians 2
          </h1>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 680, marginBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s defense of his ministry among the Thessalonians and his expression of deep pastoral love &mdash; speaking to please God not men, gentle as a nursing mother, urging as a father, the congregation as his glory and joy, and the reality of Satanic opposition to gospel work." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              { label: "Book", value: "1 Thessalonians" },
              { label: "Chapter", value: "2" },
              { label: "Author", value: "Paul, Silvanus, Timothy" },
              { label: "Date", value: "c. AD 49&ndash;51" },
              { label: "Key Verse", value: "1 Thess 2:8" },
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
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "1.25rem" }}>Introduction to 1 Thessalonians 2</h2>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Historical Background</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.9rem" }}
                dangerouslySetInnerHTML={{ __html: "First Thessalonians 2 belongs to a section of the letter scholars call the &ldquo;apologetic narrative&rdquo; (chapters 1&ndash;3), in which Paul defends the character of his ministry against what appear to be charges circulating in Thessalonica after his departure. The accusations &mdash; that he was a deceiver, that he preached for money, that his leaving proved he was a hireling &mdash; were the standard attacks on itinerant philosophers and religious teachers in the Greco-Roman world. Paul answers not with abstract argument but with the Thessalonians&rsquo; own memories of what they witnessed." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The chapter is also one of the richest portraits of pastoral theology in the New Testament. Paul&rsquo;s description of his own ministry &mdash; its motivations, its methods, its emotional texture, its cost &mdash; provides a template for Christian ministry that has shaped reflection on pastoring, evangelism, and leadership for two millennia. The mother and father images in particular have never ceased to be theologically generative." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>Structure of Chapter 2</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  { ref: "vv. 1&ndash;2", desc: "Ministry not in vain &mdash; bold proclamation despite prior suffering at Philippi" },
                  { ref: "vv. 3&ndash;6", desc: "Negative apologetic &mdash; no error, impurity, or deceit; speaking to please God not men" },
                  { ref: "vv. 7&ndash;8", desc: "Positive portrait &mdash; gentle as a nursing mother, sharing gospel and selves" },
                  { ref: "vv. 9&ndash;12", desc: "The father image &mdash; labor and toil, holy and blameless conduct, exhorting each one" },
                  { ref: "vv. 13&ndash;16", desc: "The word received as God&rsquo;s word &mdash; at work in believers; parallel with Judean suffering" },
                  { ref: "vv. 17&ndash;20", desc: "Satan&rsquo;s hindrance &mdash; eager desire to return; you are our glory and joy" },
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
                dangerouslySetInnerHTML={{ __html: "First Thessalonians 2 is without parallel in the New Testament as a sustained reflection on the interior life of gospel ministry. Paul does not offer an organizational model or a list of ministry best practices; he opens the motivational architecture of his apostolic work and invites the Thessalonians to examine it. The result is a mirror in which every Christian worker can examine their own inner life: for whom am I doing this, and at what cost?" }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The chapter is also significant for its candor about spiritual opposition. Paul&rsquo;s frank statement that &ldquo;Satan hindered us&rdquo; (v. 18) introduces a pastoral realism about the spiritual dimension of ministry obstacles that is often absent from contemporary discussions of church health and missionary strategy. The chapter closes with one of the most emotionally powerful passages in Paul&rsquo;s letters: the declaration that the Thessalonian congregation is his &ldquo;glory and joy&rdquo; before the returning Lord." }}
              />
            </div>

            <div style={{ background: `linear-gradient(135deg, ${GREEN}18 0%, ${TEAL}0c 100%)`, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "0.65rem", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Key Verse</h3>
              <blockquote
                style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.8, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;So, being affectionately desirous of you, we were ready to share with you not only the gospel of God but also our own selves, because you had become very dear to us.&rdquo; &mdash; 1 Thessalonians 2:8" }}
              />
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "1.25rem" }}>Key Themes in 1 Thessalonians 2</h2>
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
                { label: "Boldness Under Opposition", color: ROSE, text: "The missionaries came to Thessalonica fresh from beatings and imprisonment in Philippi (Acts 16; 1 Thess 2:2). Their willingness to preach anyway &mdash; in the face of &ldquo;much conflict&rdquo; &mdash; was not a display of natural courage but of what Paul calls &ldquo;boldness in our God.&rdquo; God-grounded boldness is different from mere stubborn temperament; it derives from a conviction about who sent the message." },
                { label: "The Crown at Christ&rsquo;s Coming", color: BLUE, text: "Paul&rsquo;s &ldquo;crown of boasting&rdquo; before the Lord at his coming (v. 19) is not a personal achievement but a community &mdash; the Thessalonian believers themselves. This eschatological framework transforms how Paul thinks about his pastoral relationships: the people he serves are his inheritance, his joy at the final accounting. Gospel ministry is ultimately measured at the Lord&rsquo;s return." },
                { label: "Self-Supporting Ministry", color: PURPLE, text: "Paul&rsquo;s labor night and day so as not to burden the Thessalonians (v. 9) was a deliberate strategic choice: the gospel must not appear to be a product sold for financial gain. This was not because Paul believed ministers should never be supported (see 1 Cor 9) but because in Thessalonica the appearance of financial motivation would have given ammunition to critics and confused the nature of the gospel." },
                { label: "Each One -- Personal Formation", color: TEAL, text: "The phrase &ldquo;each one of you&rdquo; (hena hekaston) in verse 11 is significant. The father in this passage did not merely preach to the crowd; he engaged each individual with exhortation, encouragement, and charge. This is the description of a pastoral practice that takes persons seriously as individuals, not merely as members of an audience. Formation is inherently personal." },
              ].map((card) => (
                <div key={card.label} style={{ background: CARD, border: `1px solid ${card.color}28`, borderRadius: 12, padding: "1.25rem" }}>
                  <div style={{ color: card.color, fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }} dangerouslySetInnerHTML={{ __html: card.label }} />
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
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Verse by Verse: 1 Thessalonians 2</h2>
            <p
              style={{ color: MUTED, marginBottom: "1.75rem", lineHeight: 1.65 }}
              dangerouslySetInnerHTML={{ __html: "A close reading of every section in 1 Thessalonians 2 &mdash; observing what Paul says, what he means, and why it matters for ministry, pastoral care, and Christian life." }}
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
              <h3 style={{ color: BLUE, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.65rem" }}>Contextual Note: The Ancient World of Itinerant Teachers</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The charges Paul defends against in 1 Thessalonians 2 &mdash; deception, impurity, flattery, greed, and the pursuit of human glory &mdash; were standard accusations leveled at wandering philosophers and religious teachers in the Greco-Roman world. Figures like Apollonius of Tyana, Dio Chrysostom, and others navigated the same cultural suspicion. Paul distinguishes himself not by claiming to be above such criticism but by appealing to what the Thessalonians themselves witnessed: his conduct was visibly different from the charlatans who used religion for personal gain. The fact that he worked with his hands (v. 9) was a deliberate signal in a culture where manual labor was associated with the lower classes &mdash; Paul was not performing the respectable posture of a fee-charging sophist but doing the hard work of a craftsman-evangelist." }}
              />
            </div>

            <div style={{ background: `linear-gradient(135deg, ${GOLD}10 0%, ${TEAL}08 100%)`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "1.5rem", marginTop: "1rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.65rem" }}>Word Study: &ldquo;Gentle&rdquo; (Epios) and &ldquo;Affectionately Desirous&rdquo; (Homeiromai)</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: "The Greek word epios (translated &ldquo;gentle&rdquo; in v. 7) appears only twice in the New Testament &mdash; here and in 2 Timothy 2:24. Outside the NT it occurs in descriptions of a gentle nurse or a soothing remedy. The rarity of the word suggests Paul is reaching for unusual vocabulary to capture something specific about the character of his ministry. The word homeiromai (translated &ldquo;affectionately desirous&rdquo; in v. 8) is even more remarkable: it appears nowhere else in the New Testament and is extremely rare in Greek literature as a whole. Some scholars suggest it may have been a tender word used within families. Paul appears to be searching for language beyond the ordinary vocabulary of ministry relationships to describe what the Thessalonians meant to him and his team." }}
              />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Application: Living 1 Thessalonians 2 Today</h2>
            <p
              style={{ color: MUTED, marginBottom: "1.75rem", lineHeight: 1.65 }}
              dangerouslySetInnerHTML={{ __html: "How do the truths of 1 Thessalonians 2 shape the way we minister, serve, receive Scripture, and persevere? The following reflections move from observation to practice." }}
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
                  "Where in your ministry or service are you most tempted to speak to please people rather than to please God? What would it look like to actively resist that temptation this week?",
                  "Paul shared not only the gospel but himself (v. 8). In which relationships are you giving information and program without giving yourself? What is holding you back?",
                  "The nursing mother and the exhorting father represent two modes of care. Which comes more naturally to you? Which is more underdeveloped, and what would it take to cultivate it?",
                  "When you read the Bible, are you approaching it as &ldquo;the word of men&rdquo; to be evaluated or &ldquo;the word of God&rdquo; to be received? What would change about your reading if you consistently chose the latter posture?",
                  "Paul calls the Thessalonians his &ldquo;glory and joy.&rdquo; Who are the people in your life that represent the fruit of your gospel investment? Have you told them what they mean to you?",
                  "Where have you experienced what felt like Satanic hindrance in gospel work? How did you interpret it at the time, and how do you interpret it now in light of 1 Thessalonians 2:18?",
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
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>A Prayer Drawn from 1 Thessalonians 2</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Father, search our hearts as you searched Paul&rsquo;s. Expose the places where we are speaking to please people rather than you. Deliver us from flattery, from greed, from the craving for human glory. Give us the gentleness of the nursing mother &mdash; the willingness to give not only truth but ourselves. Give us the courage of the father who exhorts and encourages each one toward a life worthy of you. Let us receive your word not as the opinion of men but as what it truly is &mdash; the living, active, working word of God. And when Satan hinders us, as he hindered Paul, give us the perseverance to find another way and the faith to trust that our labor is not in vain. Make the people you have given us our glory and joy before the returning Lord Jesus. Amen." }}
              />
            </div>
          </div>
        )}

        {/* Video Section -- always visible below active tab content */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: TEXT, marginBottom: "0.4rem" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}
            dangerouslySetInnerHTML={{ __html: "Curated video resources to deepen your study of 1 Thessalonians 2 and Paul&rsquo;s pastoral theology." }}
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
              { title: "Paul&rsquo;s Pastoral Vision", author: "Thomas C. Oden", color: PURPLE },
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
              "Acts 16:19&ndash;24",
              "Acts 17:1&ndash;9",
              "1 Corinthians 2:1&ndash;5",
              "2 Corinthians 1:12",
              "2 Corinthians 11:7&ndash;11",
              "Galatians 4:12&ndash;20",
              "Philippians 4:1",
              "2 Timothy 2:24",
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
