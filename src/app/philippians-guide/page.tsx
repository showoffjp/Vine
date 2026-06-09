"use client";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "ch1", label: "Chapter 1" },
  { id: "kenosis", label: "Kenosis Hymn" },
  { id: "ch2", label: "Chapter 2" },
  { id: "ch3", label: "Chapter 3" },
  { id: "ch4", label: "Chapter 4" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const CH1_ITEMS = [
  {
    title: "Philippians 1:1–11 — Thanksgiving and Prayer",
    color: GOLD,
    body: "Paul thanks God for the Philippians\' \'partnership in the gospel\' and prays that their love would abound \'in knowledge and depth of insight\' — not merely sentimental affection but love formed by wisdom. \'Being confident of this, that he who began a good work in you will carry it to completion until the day of Christ Jesus\' (1:6). The theological spine of Christian confidence: God is the one who began it, God is the one who sustains it, God is the one who will complete it. Our perseverance rests on God\'s faithfulness, not our own strength.",
  },
  {
    title: "Philippians 1:12–26 — Imprisoned but Unstoppable",
    color: GREEN,
    body: "Paul\'s chains have advanced the gospel: his imprisonment has become known throughout the whole palace guard, and most of the brothers have become \'more bold to speak the word of God without fear.\' Some preach out of envy; Paul doesn\'t care — Christ is proclaimed. \'For to me, to live is Christ and to die is gain\' (1:21). The most compressed Christological statement of values in the NT: life\'s content = Christ; death\'s outcome = gain. Paul is \'torn between the two\' — desiring to depart and be with Christ (better) or to remain for the Philippians\' progress in faith.",
  },
  {
    title: "Philippians 1:27–30 — Citizens of Heaven",
    color: TEAL,
    body: "\'Whatever happens, conduct yourselves in a manner worthy of the gospel of Christ.\' The word \'conduct yourselves\' (politeuesthe) is a political term: live as citizens of the gospel commonwealth. Philippi was a Roman colony whose citizens took pride in their Roman identity; Paul says the church\'s citizenship is in heaven (3:20). Suffering is not a sign of abandonment — \'it has been granted to you on behalf of Christ not only to believe in him, but also to suffer for him\' (1:29). Suffering for Christ is a gift, not a problem to be explained away.",
  },
];

const KENOSIS_TEXT = `The Kenosis Hymn (Philippians 2:5–11) is among the most profound Christological texts in the NT — possibly an early Christian hymn that Paul quotes or adapts.

Structure: The hymn has two movements — descent and ascent.

DESCENT: "Who, being in very nature God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing by taking the very nature of a servant, being made in human likeness. And being found in appearance as a man, he humbled himself by becoming obedient to death — even death on a cross!"

ASCENT: "Therefore God exalted him to the highest place and gave him the name that is above every name, that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue acknowledge that Jesus Christ is Lord, to the glory of God the Father."

Key theological question — "Kenosis": The Greek kenōsis (from kenōō — "to empty") describes what the Son "made himself" in the incarnation. What did he "empty himself" of? Three main views:
1. He emptied himself of certain divine attributes (omniscience, omnipotence) — Classical kenotic Christology (19th c.)
2. He emptied himself of the "form of God" — his divine prerogatives and glory — while retaining his divine nature
3. He emptied himself of independent use of divine attributes, relying instead on the Spirit (Functional kenosis)

The Reformed/Orthodox position: the Son did not cease to be divine or give up divine attributes — "emptying" is explained by the addition that follows: "by taking the very nature of a servant, being made in human likeness." The emptying is the humiliation of incarnation, not subtraction of deity.

Exaltation: The Father raises the humiliated Son to the highest place — not as a promotion of a lesser being but as the rightful vindication of the Lord who condescended. The name "Lord" (kyrios — the Greek translation of YHWH) is applied to the risen Christ. Every knee shall bow — Isaiah 45:23, originally referring to God, is now applied to Jesus. The highest possible Christological claim.`;

const CH3_ITEMS = [
  {
    title: "Philippians 3:1–11 — Counting Everything Loss",
    color: GOLD,
    body: "Paul warns against \'mutilators of the flesh\' (Judaizers demanding circumcision) — \'we are the circumcision, we who serve God by his Spirit, who boast in Christ Jesus, and who put no confidence in the flesh\' (3:3). Paul\'s credentials are impeccable: circumcised on the eighth day, Israelite, Benjaminite, Pharisee, blameless under the law. \'But whatever were gains to me I now consider loss for the sake of Christ.\' More than that: \'I consider them garbage, that I may gain Christ and be found in him, not having a righteousness of my own that comes from the law, but that which is through faith in Christ.\' The most dramatic personal testimony to justification by faith in the NT.",
  },
  {
    title: "Philippians 3:12–16 — Pressing On",
    color: GREEN,
    body: "\'Not that I have already obtained all this, or have already arrived at my goal, but I press on to take hold of that for which Christ Jesus took hold of me.\' Paul does not claim to have \'arrived\' spiritually; he is still in process. The athletic metaphor: \'forgetting what is behind and straining toward what is ahead, I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus.\' The Christian life is forward movement — not static maintenance but energetic pursuit of conformity to Christ. The goal is not self-improvement but \'knowing Christ and the power of his resurrection\' (3:10).",
  },
  {
    title: "Philippians 3:17–21 — Citizens of Heaven",
    color: TEAL,
    body: "Some \'live as enemies of the cross of Christ\' — their god is their stomach, their glory is their shame, their mind is on earthly things (3:19). In contrast: \'our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ, who, by the power that enables him to bring everything under his control, will transform our lowly bodies so that they will be like his glorious body\' (3:20–21). The resurrection of the body is the Christian\'s eschatological hope — not a disembodied heaven but the physical transformation of the body into glory. \'Eagerly await\' — Christian hope is active anticipation.",
  },
];

const CH4_ITEMS = [
  {
    title: "Philippians 4:1–9 — The Peace Passage",
    color: GOLD,
    body: "\'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.\' Three elements: prayer (relationship), petition (specific request), thanksgiving (trust). The alternative to anxiety is not positive thinking but prayerful bringing everything to God. Then the famous list of what to think about: true, noble, right, pure, lovely, admirable, excellent, praiseworthy — the discipline of directing attention. The God of peace will be with the one who practices these things (4:9).",
  },
  {
    title: "Philippians 4:10–13 — Learned Contentment",
    color: GREEN,
    body: "Paul rejoices in the Philippians\' renewed concern for him — but adds: \'I have learned to be content whatever the circumstances.\' Contentment is not natural; it is acquired (memathēka — the perfect of manthano: \'I have learned\'). \'I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want. I can do all this through him who gives me strength.\' The \'strength\' is Christ; the \'all things\' is all circumstances — not unlimited achievement.",
  },
  {
    title: "Philippians 4:19–23 — God\'s Provision",
    color: TEAL,
    body: "\'And my God will meet all your needs according to the riches of his glory in Christ Jesus.\' The context: the Philippians have given generously to Paul\'s need; God will supply their need. The promise is not unlimited wealth but covenantal provision: the God who owns \'cattle on a thousand hills\' (Ps 50:10) will not let those who give in his name go without. The final greetings include \'the saints who belong to Caesar\'s household\' — the gospel has penetrated the imperial household while Paul is under house arrest. The irony: Caesar\'s house is producing saints.",
  },
];

const THEMES = [
  { title: "Joy and Suffering Together", color: GOLD, body: "Written from prison, possibly facing death, Philippians uses \'joy\' and \'rejoice\' 16 times. This is not forced cheerfulness — it is the profound testimony that joy rooted in Christ is not circumstance-dependent. The letter models what it preaches: in the same breath Paul describes imprisonment, possible death, rivals preaching out of envy, conflict between church members — and joy. This is among the most countercultural aspects of the Christian gospel." },
  { title: "Partnership in the Gospel", color: GREEN, body: "Koinōnia (fellowship, partnership) runs through the letter: \'your partnership in the gospel\' (1:5), \'one in spirit and of one mind\' (2:2), \'fellowship with his sufferings\' (3:10), \'share in my troubles\' (4:14). The Philippians are not passive recipients of ministry — they are active partners. The Christian life is communal, not merely personal. The church is a body whose members share in each other\'s work, suffering, and joy." },
  { title: "The Mind of Christ", color: TEAL, body: "\'In your relationships with one another, have the same mindset as Christ Jesus\' (2:5). The kenosis hymn follows as the model: humility, self-giving, other-orientation. \'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others\' (2:3–4). The shape of Christ\'s life — descent into humility followed by exaltation — is the pattern for Christian community." },
  { title: "\'To Live Is Christ\'", color: PURPLE, body: "1:21 is the letter\'s thesis: \'For to me, to live is Christ and to die is gain.\' Every element of Paul\'s life — his ministry, his relationships, his suffering, his joy, his future — is defined by his union with Christ. Not \'Christ is important in my life\' but \'my life = Christ.\' This is the goal of Christian formation: not moral improvement but the progressive filling of life with Christ until there is no remainder." },
];

const VIDEOS = [
  { videoId: "oE9qqW1-BkU", title: "The Book of Philippians — BibleProject Overview" },
  { videoId: "OcbfgA9GIPQ", title: "Philippians Chapter by Chapter" },
  { videoId: "JfOuSbpgLG8", title: "Philippians 2:5–11 — The Kenosis Hymn" },
  { videoId: "6sbFf5Qx5LU", title: "Joy in Suffering — Philippians 1" },
  { videoId: "3AK5He5Dgis", title: "Philippians 4 — Peace, Contentment, Provision" },
  { videoId: "YhxR9DG4Rlg", title: "\'To Live Is Christ\' — Philippians 1:21" },
];

export default function PhilippiansGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_phil_tab", "overview");
  const [journal, setJournal] = useLocalStorage("vine_phil_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Bible Study</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Book of Philippians</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          Philippians is the epistle of joy — written from prison, possibly facing execution, by a man whose life was defined by one thing: &#8220;For to me, to live is Christ and to die is gain.&#8221; It contains the greatest Christological hymn in the NT (the kenosis of Phil 2:5–11), the most personal testimony to justification by faith (Phil 3), and the most famous passage on peace and contentment (Phil 4).
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#fff" : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction to Philippians</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Paul founded the Philippian church on his second missionary journey (Acts 16) — the first church he planted in Europe. Lydia, a dealer in purple cloth, was the first convert; the jailer and his household followed. The Philippians were Paul&apos;s closest partners in ministry, supporting him financially multiple times (4:15–16). This letter is more warm and personal than any other Pauline epistle.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                Written from Rome (c. 60–62 AD) while Paul was under house arrest awaiting trial. Despite his circumstances, the letter radiates joy, confidence, and affection. It addresses a specific conflict between Euodia and Syntyche (4:2–3) — two women who had &#8220;contended at my side in the cause of the gospel&#8221; — and warns against both Judaizers (3:2) and antinomians (3:18–19).
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Structure</h3>
              {["Chapter 1: Joy in Chains — partnership, suffering, \'to live is Christ\'", "Chapter 2: The Mind of Christ — kenosis hymn, working out salvation", "Chapter 3: Knowing Christ — counting everything loss, pressing on", "Chapter 4: The Secret of Contentment — peace, anxiety, \'I can do all things\'"].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontWeight: 700, minWidth: 24 }}>{i + 1}.</span>
                  <span style={{ color: MUTED }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "ch1" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Chapter 1 — Joy in Chains</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {CH1_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "kenosis" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>The Kenosis Hymn (Phil 2:5–11)</h2>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${GOLD}` }}>
              <p style={{ color: MUTED, lineHeight: 1.8, whiteSpace: "pre-line" }}>{KENOSIS_TEXT}</p>
            </div>
          </div>
        )}

        {activeTab === "ch2" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Chapter 2 — The Mind of Christ</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "Philippians 2:1–4 — United in Humility", color: GOLD, body: "\'If you have any encouragement from being united with Christ, if any comfort from his love, if any common sharing in the Spirit, if any tenderness and compassion, then make my joy complete by being like-minded, having the same love, being one in spirit and of one mind.\' The theological basis (union with Christ, love, Spirit) grounds the practical imperative (unity). \'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.\' The word for \'humility\' (tapeinophrosynē) was almost never used positively in Greek culture — the gospel inverts cultural values." },
                { title: "Philippians 2:12–18 — Working Out Salvation", color: GREEN, body: "\'Therefore, my dear friends, as you have always obeyed — not only in my presence, but now much more in my absence — continue to work out your salvation with fear and trembling, for it is God who works in you to will and to act in order to fulfill his good purpose.\' The tension: \'work out\' (human responsibility) because \'God works in you\' (divine initiative). This is not two-stage salvation (God starts, you finish) — it is the paradox of synergy: God\'s work enables and requires our working. Do everything without grumbling — \'shine like stars in the sky as you hold firmly to the word of life.\'" },
                { title: "Timothy and Epaphroditus (2:19–30)", color: TEAL, body: "Paul commends Timothy — \'I have no one else like him, who will show genuine concern for your welfare\' — and Epaphroditus, the Philippians\' messenger who \'almost died for the work of Christ, risking his life to make up for the help you yourselves could not provide.\' These are concrete examples of the kenotic pattern: self-giving for others. The pastoral insight: theology must be embodied in persons, not just propositions. Timothy and Epaphroditus are living demonstrations of the mind of Christ." },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "ch3" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Chapter 3 — Knowing Christ</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {CH3_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "ch4" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Chapter 4 — Peace and Contentment</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {CH4_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "themes" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Key Themes</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {THEMES.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>What would it mean for you to say \'to live is Christ\'? What are the things you are tempted to count as gain that Paul would call \'loss for the sake of Christ\'?</p>
            <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }} />
            <p style={{ color: MUTED, fontSize: 12, marginTop: 8 }}>Saved locally to your device.</p>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Video Teaching</h2>
            <div style={{ display: "grid", gap: 20 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
