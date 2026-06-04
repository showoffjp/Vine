"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "views" | "texts" | "pastoral" | "videos";

const PRED_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "Predestination — What It Is and Why It Matters", channel: "Tim Keller / Gospel in Life", description: "Keller explains election, predestination, and their relationship to assurance, evangelism, and love of God." },
  { videoId: "ACZbpLkY8To", title: "The Five Points of Calvinism", channel: "Ligonier Ministries", description: "R.C. Sproul's classic teaching on TULIP — what the five points actually say and why they matter theologically." },
  { videoId: "fJnGJN6laqE", title: "Does God Choose Who Will Be Saved?", channel: "Desiring God", description: "John Piper exegetes key Pauline texts on election and shows how unconditional election produces humility, not pride." },
  { videoId: "Z8lkuuhVkOI", title: "Calvinist vs. Arminian — What's at Stake?", channel: "The Gospel Coalition", description: "A fair presentation of both views, exploring where they agree and disagree on grace, faith, and salvation." },
];

const THEOLOGY_ITEMS = [
  {
    title: "Election in the Old Testament",
    body: "Israel is introduced as God's chosen people in Deuteronomy 7:6-7: 'The LORD your God has chosen you out of all the peoples on the face of the earth to be his people, his treasured possession. The LORD did not set his affection on you and choose you because you were more numerous than other peoples, for you were the fewest of all peoples.' The election of Israel was not for privilege but for purpose and mission. Abraham's election in Genesis 12:1-3 is paradigmatic: he is called and blessed so that all peoples on earth will be blessed through him. 'Chosen' in the Old Testament carries the weight of calling, not merely status. To be chosen is to be sent. The election of Israel was always missiological at its core, a fact that too much later theology has overlooked.",
  },
  {
    title: "Election in Paul",
    body: "Paul is the primary New Testament theologian of election. Romans 8:28-30 gives the so-called golden chain: those God foreknew he predestined, those he predestined he called, those he called he justified, those he justified he glorified. Ephesians 1:4-5 presses back before creation: 'he chose us in him before the foundation of the world to be holy and blameless in his sight. In love he predestined us for adoption.' Romans 9 is the most contested: the election of Jacob over Esau before birth ('so that God's purpose in election might stand'), the hardening of Pharaoh, the potter and the clay. 2 Timothy 1:9 adds: God 'saved us and called us with a holy calling, not because of our works but because of his own purpose and grace, which he gave us in Christ Jesus before the ages began.'",
  },
  {
    title: "Election and the People of God",
    body: "A crucial exegetical insight is that New Testament election language is primarily corporate before it is individual. To be 'in Christ' is to be in the elect one. The church inherits the election language of Israel: 1 Peter 2:9 applies to the church exactly the terms used of Israel in Exodus 19:5-6: 'a chosen people, a royal priesthood, a holy nation, God's special possession.' This corporate framework does not eliminate individual election but it contextualizes it. Election is not first and foremost 'God chose me' but 'God chose a people, and I am incorporated into that people through union with Christ.' Many debates between Calvinists and Arminians have been distorted by excessive individualism on both sides.",
  },
  {
    title: "Foreknowledge",
    body: "Romans 8:29 begins the golden chain with 'those whom he foreknew.' This term has generated enormous debate. The Arminian tradition reads 'foreknew' as God's prior knowledge of who would freely believe, so that predestination follows foreseen faith. Election is conditional on what God foreknew. The Reformed tradition argues that in biblical usage, 'to know' often carries relational meaning (Genesis 4:1, Amos 3:2, Matthew 7:23), and that 'foreknew' means 'fore-loved' or 'fore-chose' rather than 'had advance information about.' On the Reformed reading, foreknowledge is the ground of predestination, not its result. Romans 11:2 ('God did not reject his people, whom he foreknew') and Acts 2:23 ('handed over by God's deliberate plan and foreknowledge') inform the debate.",
  },
  {
    title: "The Role of Christ",
    body: "Ephesians 1:4 says we were 'chosen in him before the creation of the world.' The phrase 'in him' is theologically determinative. Election is not an abstract, impersonal decree; it is an election that is located in Christ. Karl Barth's contribution in Church Dogmatics II/2 is significant here: Barth argued that Jesus Christ is both the electing God and the elected man. The doctrine of election is not about a hidden divine decree standing behind or apart from Christ, but is identical with the person and history of Jesus. Christ is elected and rejected in our place. Whatever one thinks of Barth's universalist tendency, his Christological concentration has permanently enriched the doctrine and corrected the tendency to speculate about election apart from Christ.",
  },
  {
    title: "The Goal of Election",
    body: "Election is not an end in itself, and individual salvation is not the final goal. Romans 8:29 states the aim: 'to be conformed to the image of his Son.' Ephesians 1:6, 12, and 14 name the goal three times: 'to the praise of his glorious grace,' 'to the praise of his glory,' 'to the praise of his glory.' Ephesians 2:10 adds the missional dimension: 'we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.' Election is thus teleological: it aims at Christlikeness, the worship of God, and participation in God's good works in the world. The person who uses election as a reason for passivity has misread the goal entirely.",
  },
];

const VIEWS_DATA = [
  {
    id: "high-calvinist",
    label: "High Calvinism / TULIP",
    keyClaim: "God unconditionally elected particular individuals to salvation before creation, and has also passed over others who will bear the consequences of their sin (double predestination). Grace is irresistible for the elect.",
    proponents: "John Calvin, R.C. Sproul, John Piper, John MacArthur",
    scriptures: "Romans 9:13-23, Ephesians 1:4-5, John 6:37-44, Acts 13:48",
    strength: "Takes the sovereignty of God with full seriousness. Does not soften the hard texts. Provides a coherent account of why some believe and others do not. Produces deep assurance and gratitude.",
    weakness: "The problem of double predestination and God's character: if God created individuals whom he determined would be damned, serious questions arise about God's justice and goodness. Hard texts in 1 Timothy 2:4 and 2 Peter 3:9 require careful handling.",
  },
  {
    id: "moderate-calvinist",
    label: "Moderate Calvinism / 4-Point",
    keyClaim: "Unconditional election (God chose based on nothing in us) but not double predestination in the strict sense. God elects some for salvation but has not actively decreed the damnation of others. Most mainstream Reformed confessions land here.",
    proponents: "Most Reformed and Presbyterian denominations, Bruce Ware, many Westminster-tradition theologians",
    scriptures: "Romans 9, Ephesians 1:4-5, John 6:37-44",
    strength: "Maintains unconditional election and irresistible grace while softening the logical endpoint of double predestination. More pastorally comfortable while retaining the Reformed core.",
    weakness: "Critics (both Calvinist and Arminian) argue that the distinction between active reprobation and passing over is less coherent than it appears. High Calvinists say it lacks courage; Arminians say it retains the essential problem.",
  },
  {
    id: "arminian",
    label: "Arminianism",
    keyClaim: "Election is conditional on foreknown faith. God genuinely desires all to be saved (1 Tim 2:4), gives prevenient grace that restores the ability to respond, and elects those he foreknows will freely believe. Grace is resistible. Apostasy is possible.",
    proponents: "Jacob Arminius, John Wesley, Roger Olson, much of the evangelical world",
    scriptures: "1 Timothy 2:4, 2 Peter 3:9, John 3:16, Romans 10:13",
    strength: "Takes human responsibility with full seriousness. Avoids the theological problems of double predestination. Fits naturally with the universal gospel offer. Straightforward reading of the 'all' passages.",
    weakness: "The foreknowledge debate: does simple foreknowledge give God sufficient control over history? If God knows the future because it is fixed, is libertarian free will coherent? The 'middle knowledge' move (Molinism) is a response to this problem.",
  },
  {
    id: "molinist",
    label: "Molinism",
    keyClaim: "God possesses 'middle knowledge' of what free creatures would freely do in any possible circumstance (counterfactuals of creaturely freedom). God actualizes the world in which those he desires to save freely believe, preserving both sovereignty and libertarian free will.",
    proponents: "Luis de Molina, Alvin Plantinga, William Lane Craig",
    scriptures: "Matthew 11:21-23 (Tyre and Sidon), 1 Samuel 23:11-12 (David at Keilah), Acts 2:23",
    strength: "Offers a philosophically sophisticated account of how God can be sovereign in salvation without determining human choices in a way that undermines genuine freedom. Avoids the pastoral problems of double predestination.",
    weakness: "The concept of middle knowledge is philosophically contested. Robert Adams and others have argued that there may be no fact of the matter about what a free creature 'would' do in non-actual circumstances (the 'grounding objection'). Critics call it a heroic philosophical solution to a problem the Bible does not try to solve.",
  },
];

const TEXTS_ITEMS = [
  {
    title: "Romans 9:6-24",
    body: "This is the most contested predestination passage in Scripture. Paul argues that God's word has not failed (v.6), then invokes Jacob and Esau chosen before birth 'so that God's purpose in election might stand, not by works but by him who calls' (v.11-12), then Pharaoh ('I raised you up for this very purpose'), then the potter and clay (vv.20-23). John Piper in 'The Justification of God' argues for individual election to eternal salvation and damnation. N.T. Wright reads the chapter as primarily about God's sovereign right to define who belongs to the covenant community, not a decree about individual eternal destiny. The Arminian reading takes 'Jacob' and 'Esau' as corporate (nations) rather than individual, and the 'hardening' as judicial response to prior rejection. What Paul is 'actually arguing' is that God is free and faithful, not that every detail of individual fate is settled by eternal decree. The argument continues into chapters 10 and 11 and must be read as a whole.",
  },
  {
    title: "Ephesians 1:4-5",
    body: "'He chose us in him before the foundation of the world to be holy and blameless in his sight. In love he predestined us for adoption to sonship through Jesus Christ, in accordance with his pleasure and will.' The Calvinist reading: 'us' refers to the specific individuals who will be saved, chosen unconditionally before creation. The phrase 'in him' means the sphere of election is Christ. The Arminian reading: the election is of the body, the church in Christ, and individuals enter the elect company by faith-union with Christ. The phrase 'in him' is then the key: God did not choose individuals out of thin air but chose a people in Christ, and all who are in Christ are among the chosen. Both readings must account for the Christological center: the election is 'in him,' not in a decree abstracted from Christ.",
  },
  {
    title: "John 6:37-44",
    body: "'All that the Father gives me will come to me, and whoever comes to me I will never drive away' (v.37). 'No one can come to me unless the Father who sent me draws him' (v.44). The Calvinist reads these verses as teaching irresistible, particular grace: the Father gives a specific group to the Son, and that group infallibly comes. The 'drawing' of v.44 is effectual. John 6:65 ('no one can come to me unless it has been granted to him by the Father') is seen as confirmation. The Arminian responds that 'draw' (helkuo in Greek) does not mean compel but woo or attract, and that the universal drawing of John 12:32 ('when I am lifted up from the earth, I will draw all people to myself') shows the term does not require irresistibility. The debate over helkuo is real but not decisive in isolation.",
  },
  {
    title: "1 Timothy 2:4 and 2 Peter 3:9",
    body: "1 Timothy 2:4 states that God 'wants all people to be saved and to come to a knowledge of the truth.' 2 Peter 3:9 says he is 'not wanting anyone to perish, but everyone to come to repentance.' These are the classic universal salvific will texts. The Arminian reads them straightforwardly: God genuinely desires the salvation of every individual. The Calvinist offers two main responses. First, the 'all types of people' reading: 'all' means all types and classes of people (in the context of 1 Tim 2, kings and those in authority), not every individual without exception. Second, the 'all the elect' reading: God wills that all those he has chosen will be saved. Most interpreters find both responses strained. A third option: God has a genuine antecedent will that all be saved but a consequent will to permit some to remain in their rejection, a distinction with roots in John of Damascus and used by both Reformed and Arminian theologians.",
  },
  {
    title: "Acts 13:48",
    body: "'When the Gentiles heard this, they were glad and honored the word of the Lord; and all who were appointed to eternal life believed.' This is one of the clearest predestination statements in the Acts narrative. The word translated 'appointed' (tetagmenoi) is a perfect passive participle, implying prior divine appointment. The verse connects appointment to eternal life with the act of belief: those who believed are identified as those who were appointed. The Calvinist reads this as confirmation that belief is the result of divine appointment, not its ground. The Arminian response notes that the passive participle can be middle voice ('those who had disposed themselves to eternal life') and that Luke does not elaborate on the mechanism. The straightforward reading of the passive, however, makes the Calvinist reading the more natural one.",
  },
  {
    title: "Romans 8:28-30",
    body: "The golden chain: 'those God foreknew he also predestined to be conformed to the image of his Son... those he predestined, he also called; those he called, he also justified; those he justified, he also glorified.' Each link in the chain is in the aorist, including 'glorified,' treating future glorification as certain from the divine perspective. This passage is the pastoral anchor of the chapter: it grounds the assurance of Romans 8:31-39 ('if God is for us, who can be against us?'). 'Foreknew' is debated as discussed above. 'Predestined' carries the sense of pre-appointment to a goal. 'Called' in Paul typically means the effectual calling that produces faith, not merely the external gospel offer. 'Justified' is the forensic declaration. 'Glorified' is the eschatological completion. The chain is unbroken and the comfort is total: nothing in all creation can separate us from the love of God in Christ Jesus.",
  },
];

const PASTORAL_ITEMS = [
  {
    title: "How to Hold This Question",
    body: "Predestination is a secondary doctrine, not a gospel essential. Christians who hold differing views on election share the same gospel: Christ crucified for sinners, the need for faith and repentance, the new birth, the resurrection. The 'cage-stage Calvinist' phenomenon is real and damaging: the new convert who discovers Reformed theology and becomes obnoxious about it, treating the doctrine as a club rather than a comfort. Equally, the Arminian who refuses to engage the hard texts out of fear is not honoring Scripture. The goal is to think carefully, hold convictions charitably, discuss across lines of difference, and never allow the secondary to fracture the primary. Most robust evangelical traditions have lived with internal diversity on this question for centuries.",
  },
  {
    title: "Assurance and Election",
    body: "2 Peter 1:10 instructs: 'make your calling and election sure.' This implies that assurance of election is possible and that it comes through the Christian life, not through speculative introspection. The Calvinist grounds assurance in the doctrine itself: if God has elected you, he will preserve you; the evidence of genuine faith is a sign of election. The Arminian grounds assurance in present, active faith: you are saved now because you believe now, and the promise holds for all who believe. In practice, both converge: neither tradition tells anxious believers to speculate about an eternal decree. Both point to Christ, to faith, and to the fruit of the Spirit as the proper ground of confidence. Election was never meant to produce anxiety; it was meant to end it.",
  },
  {
    title: "Evangelism and Predestination",
    body: "The classic objection: if God has already determined who will be saved, why evangelize? The answer is that God ordains both the ends and the means. Acts 18:9-10 is instructive: God tells Paul in a vision to keep preaching in Corinth because 'I have many people in this city.' The existence of the elect is the reason for the evangelism, not a reason to abandon it. God brings his elect to faith through the preaching of the gospel; the preaching is the appointed means. Spurgeon, the great Calvinist evangelist, captured it: the elect have no labels on their foreheads, and until they are converted they are not distinguishable, so we preach to all. In practice, strong Calvinist theology has produced some of history's most urgent evangelists: Whitefield, Spurgeon, Carey. The doctrine has never in fact silenced evangelism; it has often intensified it.",
  },
  {
    title: "Prayer and Election",
    body: "The same logic applies to prayer: if God has determined outcomes, why pray? Because God ordains the prayers as means to the ends he has purposed. Daniel 9 is instructive: Daniel understood from Jeremiah's prophecy that the 70 years of exile were ending, and his response was not passive waiting but urgent intercessory prayer. The prophecy did not eliminate prayer; it provoked it. Prayer is not informing an uncertain God or persuading a reluctant one. It is the creature participating, by divine invitation, in God's sovereign working. The mystery of providence includes the mystery of prayer: God achieves his purposes through the genuine prayers of his people, not around them. This is the same logic as evangelism: means and ends are both ordained.",
  },
  {
    title: "The Doctrine for Suffering People",
    body: "Romans 8:28-39 is the pastoral climax of Paul's theology of election. 'In all things God works for the good of those who love him, who have been called according to his purpose.' The 'all things' is inclusive of suffering, loss, persecution, and death. The passage is not a promise that everything will feel good but that nothing is outside the sovereign care of God. The doctrine of the perseverance of the saints is the pastoral anchor: those who belong to God will not be finally lost. 'Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword?' The answer is no. Election, properly understood, is not a philosophical puzzle but a pastoral comfort for people in pain.",
  },
  {
    title: "Humility as the Test",
    body: "The true test of whether someone has understood the doctrine of election is whether it has produced humility or pride. 1 Corinthians 4:7 is the question that exposes every boast: 'What do you have that you did not receive? And if you did receive it, why do you boast as though you did not?' If salvation is by grace, if faith itself is a gift, if election is unconditional, then there is no ground for pride in being among the saved. The only appropriate response is gratitude. Those who grasp election and become arrogant about their theological sophistication or their elect status have missed the entire point. The doctrine should produce awe at grace, compassion for the lost, and deep, sustained gratitude, not a posture of superiority. Luther said theology proper makes the theologian, not a master of divinity, but a nothing before God.",
  },
];

function AccordionItem({ title, body, expanded, onToggle }: { title: string; body: string; expanded: boolean; onToggle: () => void }) {
  return (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
      <button type="button"
        onClick={onToggle}
        style={{
          width: "100%", textAlign: "left", background: "transparent", border: "none",
          padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <span style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{title}</span>
        <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, marginLeft: 12 }}>{expanded ? "-" : "+"}</span>
      </button>
      {expanded && (
        <div style={{ padding: "0 22px 20px", color: TEXT, fontSize: 14, lineHeight: 1.85 }}>
          {body}
        </div>
      )}
    </div>
  );
}

export default function PredestinationPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_predestination_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedView, setSelectedView] = usePersistedState("vine_predestination_selected_view", "high-calvinist");

  function toggle(key: string) {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const currentView = VIEWS_DATA.find(v => v.id === selectedView) ?? VIEWS_DATA[0];

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Biblical Theology of Election" },
    { id: "views", label: "The Major Views" },
    { id: "texts", label: "Key Texts" },
    { id: "pastoral", label: "Pastoral Wisdom" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 80px" }}>

        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, margin: "0 0 10px", letterSpacing: "-0.5px" }}>
            Predestination & Election
          </h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Does God choose who will be saved, and if so, on what basis? This is one of
            theology's most contested questions and one Scripture addresses with surprising
            directness.
          </p>
        </div>

        <div style={{
          display: "flex", gap: 4, marginBottom: 36, background: CARD,
          borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, flexWrap: "wrap",
        }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1, minWidth: 140, padding: "10px 10px", borderRadius: 8, border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                body={item.body}
                expanded={!!expanded[`theology-${i}`]}
                onToggle={() => toggle(`theology-${i}`)}
              />
            ))}
          </div>
        )}

        {activeTab === "views" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{
              width: 200, flexShrink: 0, position: "sticky", top: 20,
              background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden",
            }}>
              {VIEWS_DATA.map(v => (
                <button type="button"
                  key={v.id}
                  onClick={() => setSelectedView(v.id)}
                  style={{
                    display: "block", width: "100%", textAlign: "left",
                    padding: "14px 16px", border: "none", borderBottom: `1px solid ${BORDER}`,
                    background: selectedView === v.id ? `${PURPLE}25` : "transparent",
                    color: selectedView === v.id ? GREEN : MUTED,
                    fontWeight: selectedView === v.id ? 800 : 500,
                    fontSize: 13, cursor: "pointer",
                  }}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, margin: "0 0 20px" }}>
                {currentView.label}
              </h2>

              <div style={{ marginBottom: 18 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>
                  Key Claim
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                  {currentView.keyClaim}
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
                <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}25`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>
                    Key Proponents
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                    {currentView.proponents}
                  </p>
                </div>
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>
                    Key Scriptures
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                    {currentView.scriptures}
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>
                    Strength
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                    {currentView.strength}
                  </p>
                </div>
                <div style={{ background: "#FF446610", border: "1px solid #FF446630", borderRadius: 10, padding: 14 }}>
                  <div style={{ color: "#FF4466", fontWeight: 700, fontSize: 11, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>
                    Weakness
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                    {currentView.weakness}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "texts" && (
          <div>
            {TEXTS_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                body={item.body}
                expanded={!!expanded[`texts-${i}`]}
                onToggle={() => toggle(`texts-${i}`)}
              />
            ))}
          </div>
        )}

        {activeTab === "pastoral" && (
          <div>
            {PASTORAL_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                body={item.body}
                expanded={!!expanded[`pastoral-${i}`]}
                onToggle={() => toggle(`pastoral-${i}`)}
              />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {PRED_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
