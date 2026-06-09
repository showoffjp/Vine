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
  { id: "crisis", label: "The Crisis" },
  { id: "gospel", label: "Gospel Defense" },
  { id: "law", label: "Law & Gospel" },
  { id: "abraham", label: "Abraham & Faith" },
  { id: "freedom", label: "Christian Freedom" },
  { id: "spirit", label: "Life in the Spirit" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const CRISIS_ITEMS = [
  {
    title: "The Situation: Judaizers in Galatia",
    color: GOLD,
    body: "Paul planted churches in the region of Galatia on his first missionary journey (Acts 13–14). After he left, a group of Jewish-Christian teachers (usually called \'Judaizers\') arrived insisting that Gentile converts must be circumcised and observe the Mosaic law to be truly saved. This was not a minor controversy — Paul calls it \'a different gospel\' and says those who preach it are under a curse (1:8–9). The stakes could not be higher: if salvation requires anything added to faith in Christ, then Christ\'s death was unnecessary (2:21: \'if righteousness could be gained through the law, Christ died for nothing\'). The crisis is an attack on the gospel itself.",
  },
  {
    title: "The Confrontation with Peter (Gal 2:11–21)",
    color: GREEN,
    body: "Paul publicly opposed Peter (Cephas) at Antioch because he was acting hypocritically. Peter had been eating freely with Gentiles — then, when certain people from James arrived, he withdrew and separated himself, \'fearing those who belonged to the circumcision group\' (2:12). Even Barnabas was carried away by this hypocrisy. Paul confronts Peter in front of everyone: \'You are a Jew, yet you live like a Gentile. How is it, then, that you force Gentiles to follow Jewish customs?\' The confrontation is not merely social — Peter\'s behavior implied that Gentiles must adopt Jewish practices to have full standing before God, which undermines the gospel.",
  },
  {
    title: "What Was at Stake",
    color: TEAL,
    body: "The Galatian crisis was about the basis of acceptance before God. The Judaizers said: faith in Christ + circumcision + law-observance = salvation. Paul said: faith in Christ alone = salvation. The difference seems small but is absolute. If anything is required in addition to Christ, then Christ\'s death was supplementary rather than sufficient. Paul sees adding circumcision to the gospel as \'falling away from grace\' (5:4) — not because circumcision is evil but because adding it as a requirement communicates that Christ\'s work was insufficient. The same logic applies to any works added to the gospel as conditions of acceptance.",
  },
  {
    title: "Paul\'s Apostolic Authority",
    color: PURPLE,
    body: "Galatians 1–2 defend Paul\'s apostolic credentials, which the Judaizers had apparently challenged. Paul insists his gospel was \'not received from any man, nor was I taught it; rather, I received it by revelation from Jesus Christ\' (1:12). He did not confer with any human authority after his conversion but went to Arabia and then Damascus. Only after three years did he go to Jerusalem to visit Peter — and even then spent only 15 days with him. His gospel does not depend on Jerusalem\'s approval; it was given directly by the risen Christ. The defense is pastoral: if his apostolic authority falls, his gospel message falls with it.",
  },
];

const GOSPEL_ITEMS = [
  {
    id: "gos1",
    title: "Galatians 1:6–9 — No Other Gospel",
    content: "\'I am astonished that you are so quickly deserting the one who called you to live in the grace of Christ and are turning to a different gospel — which is really no gospel at all.\' The word \'gospel\' means \'good news\' — but a gospel of grace-plus-works is not good news; it is impossible news. Paul invokes an anathema twice: \'Even if we or an angel from heaven should preach a gospel other than the one we preached to you, let them be under God\'s curse!\' The repetition is deliberate: this is not overstated rhetoric — it is the pastoral alarm of a man who knows that the souls of his converts depend on getting this right.",
  },
  {
    id: "gos2",
    title: "Galatians 2:15–21 — The Heart of the Argument",
    content: "The theological core: \'We who are Jews by birth and not sinful Gentiles know that a person is not justified by the works of the law, but by faith in Jesus Christ.\' Even Jewish Christians are not justified by law-keeping — they too are saved by faith. \'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.\' Paul\'s personal testimony embeds the doctrine: crucified with Christ, alive in Christ. \'I do not set aside the grace of God, for if righteousness could be gained through the law, Christ died for nothing!\'",
  },
  {
    id: "gos3",
    title: "Justification by Faith — What It Means",
    content: "Justification (Greek: dikaiōsis) is a legal term: the judge declares the defendant righteous. It is forensic — a declaration, not an infusion. To be justified is to be declared not guilty, to have the righteous verdict pronounced over you. The Protestant Reformation held that this declaration is by faith alone (sola fide) — the instrument through which the gift is received — and in Christ alone (solus Christus) — his righteousness is imputed to our account. The Roman Catholic view: justification is a process of being made righteous (infusion), not merely declared righteous (imputation). Galatians and Romans are the decisive texts in this debate.",
  },
  {
    id: "gos4",
    title: "The Phrase \'Works of the Law\'",
    content: "The \'works of the law\' that cannot justify are debated. The traditional Reformation reading: all human moral effort — law-keeping in general — cannot earn God\'s acceptance. The New Perspective (Sanders, Dunn, Wright): \'works of the law\' specifically refers to \'boundary markers\' — circumcision, food laws, Sabbath — that marked Israel off from Gentiles. On this view, Paul opposes ethnocentric exclusivism, not human effort per se. Most scholars hold a both/and: the boundary markers are the presenting issue, but Paul\'s argument encompasses all law-keeping as insufficient for justification (see 3:10: \'all who rely on works of the law are under a curse\').",
  },
];

const LAW_ITEMS = [
  {
    title: "The Curse of the Law (Gal 3:10–14)",
    color: GOLD,
    body: "\'All who rely on the works of the law are under a curse, for it is written: \'Cursed is everyone who does not continue to do everything written in the Book of the Law.\'\' The law demands perfect, comprehensive obedience — and those who stake their relationship with God on law-keeping are under the curse that the law pronounces on failure. The solution: \'Christ redeemed us from the curse of the law by becoming a curse for us, for it is written: \'Cursed is everyone who is hung on a pole\'\' (Deut 21:23). Jesus absorbed the curse on the cross so that \'the blessing given to Abraham might come to the Gentiles through Christ Jesus\' — the Spirit received through faith.",
  },
  {
    title: "The Purpose of the Law (Gal 3:19–25)",
    color: GREEN,
    body: "If the law cannot justify, why was it given? \'Because of transgressions, until the Seed to whom the promise referred had come\' (3:19). The law was a temporary, supervisory measure — a \'guardian\' (paidagōgos, 3:24 — the household slave who accompanied children to school). \'Before the coming of this faith, we were held in custody under the law, locked up until the faith that was to come would be revealed.\' Now that Christ has come, \'we are no longer under a guardian\' (3:25). The law served its purpose: revealing sin (Rom 3:20), driving us to Christ. But the law was never the means of justification — that was always faith in the promise.",
  },
  {
    title: "Law and the Christian (Gal 5:13–14)",
    color: TEAL,
    body: "\'You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love. For the entire law is fulfilled in keeping this one command: \'Love your neighbor as yourself.\'\' Freedom from the law as a means of justification does not mean freedom to sin — it means freedom to serve. The Spirit-filled life actually fulfills the law\'s intent (love) through a completely different mechanism: not rule-following but Spirit-transformation. Paul is not antinomian (without law); he is a-nomian in justification and Spirit-led in sanctification.",
  },
  {
    title: "Flesh vs. Spirit (Gal 5:16–26)",
    color: PURPLE,
    body: "The two competing powers in the Christian life: \'So I say, walk by the Spirit, and you will not gratify the desires of the flesh.\' The flesh (sarx — not the body but the fallen self, the old orientation) and the Spirit are in conflict. The \'works of the flesh\' (sexual immorality, idolatry, rage, envy, drunkenness...) contrast with the \'fruit of the Spirit\' (love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control). Note: works (plural, produced by effort) vs. fruit (singular, produced by abiding). The Spirit-led life is not lawless — \'against such things there is no law\' (5:23). The Spirit produces what the law demanded but could never produce.",
  },
];

const FREEDOM_ITEMS = [
  {
    id: "fr1",
    title: "Galatians 5:1 — Stand Firm in Freedom",
    content: "\'It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.\' Freedom is both the goal (\'for freedom\') and the present reality (\'has set us free\'). The yoke of slavery is the return to law-based acceptance — the anxious performance-treadmill where one\'s standing before God is always in question because it depends on one\'s own obedience. Christ\'s freedom is the settled certainty that God\'s acceptance is a gift received by faith, not a reward earned by performance. \'Stand firm\' — the freedom can be lost not by sin but by belief: if you believe you need something beyond Christ, you have surrendered the freedom.",
  },
  {
    id: "fr2",
    title: "Galatians 3:26–29 — All One in Christ",
    content: "\'So in Christ Jesus you are all children of God through faith, for all of you who were baptized into Christ have clothed yourselves with Christ. There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.\' This verse has profound social implications: in Christ, the primary markers of social division (ethnicity, class, gender) do not determine covenant status. All are equally children of God, equally heirs of the Abrahamic promise. This is not a claim that these distinctions cease to exist — but that they do not determine standing before God or value in the community of Christ.",
  },
  {
    id: "fr3",
    title: "Freedom and the Antinomian Danger",
    content: "\'You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh\' (5:13). Christian freedom is not a license for moral indifference. Paul\'s response to those who might say \'If I\'m already accepted, why does behavior matter?\' (cf. Rom 6:1): because you are in Christ, not apart from him. To use freedom as license is to misunderstand what freedom is for. Freedom is not freedom from obligation — it is freedom from the law\'s condemnation so that we can serve from love rather than fear. The Spirit-filled life is the life of joyful, spontaneous obedience — not resentful law-keeping and not lawless self-indulgence.",
  },
  {
    id: "fr4",
    title: "Galatians 6:1–10 — Life in Community",
    content: "The freedom of the new community is expressed in mutual burden-bearing: \'Carry each other\'s burdens, and in this way you will fulfill the law of Christ\' (6:2). \'Do not be deceived: God cannot be mocked. A man reaps what he sows. Whoever sows to please their flesh, from the flesh will reap destruction; whoever sows to please the Spirit, from the Spirit will reap eternal life\' (6:7–8). The moral seriousness remains — but the motivation is different: \'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up\' (6:9). Freedom and responsibility held together.",
  },
];

const FRUIT_ITEMS = [
  { fruit: "Love", color: GOLD, body: "Agape — the self-giving love modeled by Christ on the cross. The summary of the entire law (5:14; cf. Matt 22:39). The first and defining fruit from which all others flow. Paul\'s description in 1 Cor 13 is the fullest portrait." },
  { fruit: "Joy", color: GREEN, body: "Chara — the settled delight in God and his gifts, independent of circumstances. Joy is the fruit of knowing who you are in Christ — beloved, accepted, secure. Paul writing from prison: \'Rejoice in the Lord always\' (Phil 4:4)." },
  { fruit: "Peace", color: TEAL, body: "Eirēnē — the shalom of right relationship with God (Rom 5:1: \'justified by faith, we have peace with God\') expressed outward in relationships with others. The peace that \'transcends all understanding\' (Phil 4:7)." },
  { fruit: "Patience / Kindness / Goodness", color: PURPLE, body: "Makrothymia (patience — long-suffering toward people), chrēstotēs (kindness — goodwill in action), agathōsynē (goodness — moral excellence expressed generously). Together these describe the person who is slow to anger and quick to help." },
  { fruit: "Faithfulness / Gentleness / Self-Control", color: GOLD, body: "Pistis (faithfulness — reliability), prautēs (gentleness/meekness — strength under control; Jesus described himself as \'meek and gentle\'), egkrateia (self-control — mastery of the appetites). Against such things there is no law — they are intrinsically good, the Spirit\'s natural expression." },
];

const VIDEOS = [
  { videoId: "vmx4UjRFp0M", title: "The Book of Galatians — BibleProject Overview" },
  { videoId: "jOe4BrgCxYg", title: "Galatians Part 1 — BibleProject" },
  { videoId: "Ej8IG8N8sUc", title: "Galatians Part 2 — BibleProject" },
  { videoId: "j6gT5WE7Q2s", title: "Justification by Faith — Paul vs. Judaizers" },
  { videoId: "Ij5mSlSVlh0", title: "The Fruit of the Spirit — Galatians 5" },
  { videoId: "FfI4ghsrHDk", title: "Freedom in Christ — Galatians 5:1" },
];

export default function GalatiansGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_gal_tab", "overview");
  const [openGos, setOpenGos] = useLocalStorage("vine_gal_gos", "");
  const [openFr, setOpenFr] = useLocalStorage("vine_gal_fr", "");
  const [journal, setJournal] = useLocalStorage("vine_gal_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Bible Study</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Book of Galatians</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          Galatians is Paul&apos;s most passionate letter — written in urgent defense of the gospel of grace against teachers who were adding human works to faith. Luther called it his &#8220;Katharina von Bora&#8221; — the letter he was married to. It is the Magna Carta of Christian freedom: &#8220;It is for freedom that Christ has set us free.&#8221;
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
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction to Galatians</h2>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${GOLD}`, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }}>
                &ldquo;The letter to the Galatians is my own epistle. I have betrothed myself to it; it is my Katharina von Bora.&rdquo;
              </p>
              <p style={{ color: MUTED, fontSize: 13 }}>— Martin Luther</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Galatians is probably the earliest of Paul&apos;s letters (c. 48 AD, before the Jerusalem Council of Acts 15) or written shortly after (c. 55 AD). It begins without the customary thanksgiving — Paul is too alarmed. He goes straight to the crisis: the Galatians are deserting the gospel.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                The letter divides into three main sections: personal and historical (1–2), theological argument (3–4), and practical application (5–6). The theological section is the most compressed and powerful defense of justification by faith in Scripture — building the case from the Abrahamic promise, the purpose of the law, and the transition to the age of the Spirit.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Structure</h3>
              {[
                "Personal Defense of the Gospel (1:1–2:21)",
                "The Theological Argument — Justification by Faith (3:1–4:31)",
                "The Practical Application — Freedom and the Spirit (5:1–6:18)",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontWeight: 700, minWidth: 24 }}>{i + 1}.</span>
                  <span style={{ color: MUTED }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "crisis" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>The Crisis in Galatia</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {CRISIS_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "gospel" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Paul&apos;s Gospel Defense (Gal 1–2)</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Paul defends both the content and the source of his gospel — because the Judaizers had attacked both.</p>
            {GOSPEL_ITEMS.map((item) => {
              const isOpen = openGos === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenGos(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "law" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Law &amp; Gospel</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {LAW_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "abraham" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Abraham and the Promise (Gal 3–4)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "The Galatians\' Own Experience (Gal 3:1–5)", color: GOLD, body: "\'You foolish Galatians! Who has bewitched you?\' Paul appeals first to their own experience: \'Did you receive the Spirit by the works of the law, or by believing what you heard?\' (3:2). The answer is obvious: none of them received the Spirit by law-keeping; it happened when they heard and believed the gospel. The Spirit is the firstfruits of salvation (Rom 8:23). If they began with the Spirit, why are they now trying to finish with the flesh? Their own conversion story is an argument for the gospel of grace." },
                { title: "Abraham Justified by Faith (Gal 3:6–9)", color: GREEN, body: "\'Consider Abraham: \'He believed God, and it was credited to him as righteousness.\'\' (Gen 15:6). Abraham\'s justification was by faith — confirmed in Genesis, before circumcision (Rom 4:10), before the Mosaic law. \'Those who have faith are blessed along with Abraham, the man of faith\' (3:9). The gospel was \'announced in advance to Abraham\': \'All nations will be blessed through you\' (Gen 12:3). This blessing is justification — Gentiles are justified by faith in the same way Abraham was, and they are included in the Abrahamic family." },
                { title: "The Seed of Abraham (Gal 3:15–18)", color: TEAL, body: "The promises were spoken to Abraham and \'to his seed\' — Paul notes it says \'seed\' (singular), not \'seeds\' (plural): \'meaning one person, who is Christ\' (3:16). The covenant with Abraham was confirmed by God; the law, which came 430 years later, cannot annul it. The inheritance comes by promise, not by law. The law was a \'guardian\' until the time of faith; now that Christ has come, we are no longer under the guardian. We are Abraham\'s seed and heirs of the promise — through faith in Christ." },
                { title: "Hagar and Sarah — Two Covenants (Gal 4:21–31)", color: PURPLE, body: "Paul\'s allegorical reading of Genesis: Hagar (the slave woman) = Sinai covenant = Mt. Sinai in Arabia = the present Jerusalem = slavery. Sarah (the free woman) = the covenant of promise = the Jerusalem above = freedom. \'The son born according to the flesh persecuted the son born by the power of the Spirit\' — the same is happening now. \'Throw out the slave woman and her son, for the slave woman\'s son will never share in the inheritance with the free woman\'s son.\' The argument: those who seek to be justified by law are children of Hagar, not of Sarah. Freedom comes only from the line of promise." },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "freedom" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Christian Freedom (Gal 5–6)</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Freedom in Christ is the great theme of Galatians 5–6. It is not freedom from all obligation — it is freedom from the law as a means of justification, and freedom for love-motivated service.</p>
            {FREEDOM_ITEMS.map((item) => {
              const isOpen = openFr === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenFr(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.7 }}>{item.content}</div>}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "spirit" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Life in the Spirit — The Fruit</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>The fruit of the Spirit (Gal 5:22–23) is the natural result of a life yielded to the Spirit — not produced by effort but by abiding. The singular \'fruit\' suggests a unified cluster, not individual items to check off.</p>
            <div style={{ display: "grid", gap: 12 }}>
              {FRUIT_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 16, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 8 }}>{item.fruit}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.6, fontSize: 14 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>In what areas of your life are you tempted to add something to Christ as a condition of God&apos;s acceptance? What would it look like to \'stand firm in the freedom Christ has won for you\'?</p>
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
