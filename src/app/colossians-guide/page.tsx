"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  { id: "hymn", label: "Christ Hymn" },
  { id: "heresy", label: "The Heresy" },
  { id: "fullness", label: "Fullness in Christ" },
  { id: "risen", label: "Risen with Christ" },
  { id: "putoff", label: "Put Off / Put On" },
  { id: "household", label: "Household & Prayer" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const HYMN_TEXT = `The Christ Hymn of Colossians 1:15–20 is among the most exalted Christological poetry in the New Testament.

FIRST STANZA — Christ and Creation (vv. 15–17):
"The Son is the image of the invisible God, the firstborn over all creation. For in him all things were created: things in heaven and on earth, visible and invisible, whether thrones or powers or rulers or authorities; all things have been created through him and for him. He is before all things, and in him all things hold together."

SECOND STANZA — Christ and the Church (vv. 18–20):
"And he is the head of the body, the church; he is the beginning and the firstborn from among the dead, so that in everything he might have the supremacy. For God was pleased to have all his fullness dwell in him, and through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross."

Key theological notes:

"Image of the invisible God" (eikōn tou theou tou aoratou): Jesus does not merely represent God — he is the visible expression of the invisible God. In him, the unseen God becomes seen. Hebrews 1:3 calls him "the exact representation of his being."

"Firstborn over all creation" (prōtotokos pasēs ktiseōs): This phrase has been disputed since the 4th century (Arius used it to argue Christ was a created being). But "firstborn" in the OT is a title of preeminence and rights, not always temporal priority (Jacob over Esau; Ephraim over Manasseh). The parallel "firstborn from among the dead" (v.18) supports the title-of-honor reading. The next verse makes explicit he is the Creator, not a creature: "in him all things were created."

"All things hold together in him" (sunestēken): The cosmos is held in coherent existence by Christ's sustaining power. He is not merely its origin but its constant upholder. Without this ongoing work, creation would dissolve.

"All his fullness" (pān to plērōma): The divine fullness — the totality of God — dwells in Christ. This refutes the Gnostic idea that divine reality is parceled out through layers of intermediary spiritual beings.

"Reconcile all things": The cosmic scope of redemption. Not just individual souls but "all things in heaven and on earth" are the objects of Christ's reconciling work — a new creation reaching as far as the old one extended.`;

const HERESY_ITEMS = [
  {
    id: "her1",
    title: "What Was the Colossian Heresy?",
    content: "Paul warns against a \'hollow and deceptive philosophy, which depends on human tradition and the elemental spiritual forces of this world rather than on Christ\' (2:8). The heresy appears to have included: (1) worship of angels or other spiritual beings as intermediaries (2:18); (2) legal requirements — food laws, festival observance, new moon and Sabbath requirements (2:16); (3) harsh treatment of the body (2:23 — asceticism); (4) emphasis on visions and special spiritual experiences (2:18). Scholars debate whether it was Jewish, proto-Gnostic, a local syncretistic religion, or some combination. Whatever it was, Paul\'s response is: the fullness of God dwells in Christ; you need no other intermediary.",
  },
  {
    id: "her2",
    title: "\'Do Not Let Anyone Judge You\' (2:16–19)",
    content: "\'Therefore do not let anyone judge you by what you eat or drink, or with regard to a religious festival, a New Moon celebration or a Sabbath day. These are a shadow of the things that were to come; the reality, however, is found in Christ.\' Food laws and calendar observances were types pointing forward — now the reality has come. \'Do not let anyone who delights in false humility and the worship of angels disqualify you. Such a person also goes into great detail about what they have seen; they are puffed up with idle notions.\' The warning against spiritual elitism — people who claim special experiences or access that others don\'t have. The head (Christ) is the sole source of growth for the body (2:19).",
  },
  {
    id: "her3",
    title: "\'Harsh Treatment of the Body\' (2:20–23)",
    content: "\'Since you died with Christ to the elemental spiritual forces of this world, why, as though you still belonged to the world, do you submit to its rules: \'Do not handle! Do not taste! Do not touch!\'?\' Such rules \'have an appearance of wisdom, with their self-imposed worship, their false humility and their harsh treatment of the body, but they lack any value in restraining sensual indulgence.\' This is a remarkable statement: the most impressive-looking asceticism (extreme fasting, physical discipline, self-denial) is ultimately ineffective against sin. External restriction doesn\'t transform the heart. The solution to the flesh is death and resurrection with Christ — not rules.",
  },
];

const FULLNESS_ITEMS = [
  {
    title: "Fullness of God Dwells in Christ (1:19; 2:9)",
    color: GOLD,
    body: "\'For God was pleased to have all his fullness dwell in him\' (1:19). \'For in Christ all the fullness of the Deity lives in bodily form\' (2:9). The Greek is emphatic: pān to plērōma tēs theotētos — the full sum of divine being lives in Christ, in physical embodiment. This is the direct refutation of any system that distributes divine reality across multiple spiritual beings. If all divine fullness is in Christ, then access to God requires access to Christ — nothing and no one else. The incarnation is not a partial divine presence but the complete divine reality in human form.",
  },
  {
    title: "\'You Have Been Given Fullness in Christ\' (2:10)",
    color: GREEN,
    body: "\'And in Christ you have been brought to fullness. He is the head over every power and authority\' (2:10). The believer who is in Christ already participates in the divine fullness. There is no spiritual upgrade needed, no additional initiation to achieve, no special angel to appease. The Colossian heresy offered fuller spiritual experience beyond basic Christianity; Paul says: you already have everything in Christ. The Christian life is not a search for more but an appropriation of what is already given. \'Complete in Christ\' is the letter\'s pastoral cornerstone.",
  },
  {
    title: "Circumcision of the Heart (2:11–12)",
    color: TEAL,
    body: "\'In him you were also circumcised with a circumcision not performed by human hands. Your whole self ruled by the flesh was put off when you were circumcised by Christ, having been buried with him in baptism, in which you were also raised with him through your faith in the working of God, who raised him from the dead.\' Colossians connects circumcision (OT covenant sign) and baptism: both signify the same spiritual reality — the death of the old self and resurrection to new life. The internal transformation that circumcision pointed toward is accomplished through union with Christ in his death and resurrection.",
  },
  {
    title: "Nailing the Record to the Cross (2:13–15)",
    color: PURPLE,
    body: "\'He forgave us all our sins, having canceled the charge of our legal indebtedness, which stood against us and condemned us; he has taken it away, nailing it to the cross. And having disarmed the powers and authorities, he made a public spectacle of them, triumphing over them by the cross.\' The record of debts — the legal claim against us — is nailed to the cross and cancelled. The powers and authorities (spiritual forces behind the heresy\'s angelic worship) are publicly disarmed and humiliated in Christ\'s triumphal procession. The cross is simultaneously the defeat of our guilt and the defeat of the enemy.",
  },
];

const RISEN_ITEMS = [
  {
    title: "\'Seek the Things Above\' (3:1–4)",
    color: GOLD,
    body: "\'Since, then, you have been raised with Christ, set your hearts on things above, where Christ is, seated at the right hand of God. Set your minds on things above, not on earthly things.\' The imperative flows from the indicative: because you have been raised (fact), seek what is above (command). This is not world-denying escapism — it is a reordering of ultimate allegiance. The mind is to be shaped by the eschatological reality (Christ enthroned above) rather than the immediate reality (earthly ambitions, fears, pleasures). \'Your life is now hidden with Christ in God.\' The Christian\'s real life is not yet visible — it is concealed in Christ until the appearing.",
  },
  {
    title: "\'Put to Death\' — Mortification (3:5–9)",
    color: GREEN,
    body: "\'Put to death, therefore, whatever belongs to your earthly nature: sexual immorality, impurity, lust, evil desires and greed, which is idolatry.\' Paul lists two clusters of sin: the sins of the body (sexual immorality, impurity, lust) and the sins of relationship (anger, rage, malice, slander, filthy language). The metaphor is violent: \'put to death.\' John Owen: \'Be killing sin, or sin will be killing you.\' Mortification is not passive — it requires active, ongoing, violent refusal of the old patterns. The indicative supports it: these sins belong to the old self that has been put off (3:9) — they are anachronistic for someone who has died with Christ.",
  },
];

const PUTOFF_ITEMS = [
  {
    title: "The New Self (3:10–11)",
    color: TEAL,
    body: "\'You have taken off your old self with its practices and have put on the new self, which is being renewed in knowledge in the image of its Creator.\' The renewal is toward the image of God — the goal of creation (Gen 1:27) recovered through redemption. And the social implications: \'Here there is no Gentile or Jew, circumcised or uncircumcised, barbarian, Scythian, slave or free, but Christ is all, and is in all.\' The most comprehensive statement of social equality in Colossians: every human category that defined hierarchy in the ancient world is dissolved by the reality of Christ in all.",
  },
  {
    title: "Clothe Yourselves (3:12–17)",
    color: PURPLE,
    body: "\'Therefore, as God\'s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience.\' Five virtues as clothing — put on daily, consciously. Bear with each other; forgive as the Lord forgave you. And over all: love, \'which binds them all together in perfect unity.\' Let the peace of Christ rule in your hearts. Let the word of Christ dwell in you richly — teaching, admonishing, and singing psalms, hymns and spiritual songs with gratitude. \'And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him\' (3:17). The comprehensive principle: everything in Christ\'s name.",
  },
];

const VIDEOS = [
  { videoId: "pXTXlDxQsvc", title: "The Book of Colossians — BibleProject Overview" },
  { videoId: "s_RBJEGMJDE", title: "Colossians Part 1 — BibleProject" },
  { videoId: "Ph-5fR6Cqos", title: "Colossians Part 2 — BibleProject" },
  { videoId: "GtJNGBNJR2E", title: "Colossians 1:15–20 — The Christ Hymn" },
  { videoId: "BDqBbXxQbKY", title: "The Fullness of Christ — Colossians 2" },
  { videoId: "GdfxXmUJUbA", title: "Put On the New Self — Colossians 3" },
];

export default function ColossiansGuide() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_col_tab", "overview");
  const [openHer, setOpenHer] = useLocalStorage("vine_col_her", "");
  const [journal, setJournal] = useLocalStorage("vine_col_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Bible Study</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>The Book of Colossians</h1>
        <p style={{ color: MUTED, marginBottom: 24, lineHeight: 1.6 }}>
          Colossians is the epistle of Christ&apos;s supremacy — written to counter a syncretistic &#8220;philosophy&#8221; that was adding angelic intermediaries and ascetic practices to the gospel. Paul&apos;s response: the fullness of God dwells in Christ, and you are already complete in him. Nothing needs to be added; everything is already given.
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
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Introduction to Colossians</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                Colossians was written by Paul from prison (c. 60–62 AD) to a church he had not founded (Epaphras planted it — 1:7). The church was being influenced by a syncretistic teaching that added angelic veneration, calendar observances, asceticism, and mystical visions to the Christian faith. Paul does not engage the specific claims directly — instead he sets forth the absolute supremacy of Christ in creation, redemption, and the church.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>
                The letter&apos;s structure mirrors Ephesians: theological foundation (1–2) followed by practical application (3–4). The theological core is the Christ Hymn (1:15–20) — the most exalted statement of Christ&apos;s cosmic supremacy in the NT.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>Structure</h3>
              {["Ch 1: Christ Hymn and Paul\'s Ministry — supremacy in creation and redemption", "Ch 2: Warning against the Colossian heresy — fullness in Christ; free in Christ", "Ch 3: Risen with Christ — seek above; put off/put on", "Ch 4: Household codes; prayer; greetings and the letter to Laodicea"].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <span style={{ color: GOLD, fontWeight: 700, minWidth: 24 }}>{i + 1}.</span>
                  <span style={{ color: MUTED }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "hymn" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>The Christ Hymn (Col 1:15–20)</h2>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${GOLD}` }}>
              <p style={{ color: MUTED, lineHeight: 1.9, whiteSpace: "pre-line" }}>{HYMN_TEXT}</p>
            </div>
          </div>
        )}

        {activeTab === "heresy" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>The Colossian Heresy</h2>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.6 }}>Paul never names the false teaching, making it difficult to identify precisely. But his counter-argument reveals its contours.</p>
            {HERESY_ITEMS.map((item) => {
              const isOpen = openHer === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenHer(isOpen ? "" : item.id)}
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

        {activeTab === "fullness" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Fullness in Christ (Col 2)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {FULLNESS_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "risen" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Risen with Christ (Col 3:1–11)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {RISEN_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "putoff" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Put Off / Put On (Col 3:12–17)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {PUTOFF_ITEMS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}40`, borderRadius: 12, padding: 20, borderLeft: `4px solid ${item.color}` }}>
                  <h3 style={{ fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "household" && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Household Codes &amp; Closing (Col 3:18–4:18)</h2>
            <div style={{ display: "grid", gap: 16 }}>
              {[
                { title: "Household Codes (3:18–4:1)", color: GOLD, body: "Wives submit to husbands \'as is fitting in the Lord\'; husbands love wives and do not be harsh. Children obey parents; fathers do not embitter children. Servants obey masters \'not only to win favor when their eye is on you, but with sincerity of heart and reverence for the Lord. Whatever you do, work at it with all your heart, as working for the Lord, not for human masters\' (3:23–24). Masters treat servants justly — \'you also have a Master in heaven.\' The household codes humanize relationships within unjust structures while pointing toward a different order: working for the Lord, not for approval." },
                { title: "Prayer and Witness (4:2–6)", color: GREEN, body: "\'Devote yourselves to prayer, being watchful and thankful.\' \'Pray for us, too, that God may open a door for our message.\' \'Be wise in the way you act toward outsiders; make the most of every opportunity. Let your conversation always be full of grace, seasoned with salt, so that you may know how to answer everyone.\' (4:5–6). The balance of prayer and witness: faithful intercession and intentional presence in the world. \'Seasoned with salt\' — conversation that is flavorful, interesting, life-giving, not bland religious repetition." },
                { title: "Greetings and the Letter to Laodicea (4:7–18)", color: TEAL, body: "Paul names many co-workers: Tychicus, Onesimus (the former runaway slave of Philemon), Aristarchus, Mark (Barnabas\'s cousin), Jesus who is called Justus, Epaphras, Luke the beloved physician, Demas. Then: \'After this letter has been read to you, see that it is also read in the church of the Laodiceans and that you in turn read the letter from Laodicea\' (4:16). A letter to Laodicea — apparently not preserved. Paul\'s final instruction to Archippus: \'See to it that you complete the ministry you have received in the Lord.\' And the closing: \'I, Paul, write this greeting in my own hand. Remember my chains. Grace be with you.\'" },
              ].map((item, i) => (
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
            <p style={{ color: MUTED, marginBottom: 16, lineHeight: 1.6 }}>What does it mean to you that you are \'complete in Christ\'? Is there any spiritual practice or doctrine you have been tempted to add to Christ as a supplement?</p>
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
      <Footer />
    </>
  );
}
