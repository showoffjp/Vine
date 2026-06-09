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
const BLUE = "#3B82F6";
const RED = "#EF4444";

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
  { id: "problem", label: "The Problem (1–3)" },
  { id: "justification", label: "Justification (3–5)" },
  { id: "union", label: "Union with Christ (6–7)" },
  { id: "spirit", label: "Spirit & Groaning (8)" },
  { id: "israel", label: "Israel's Mystery (9–11)" },
  { id: "ethics", label: "Kingdom Ethics (12–16)" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const PROBLEM_ITEMS = [
  {
    id: "p1",
    label: "The Gospel Introduced (1:1-17)",
    content: "Romans opens with Paul's most compressed gospel summary: the gospel is 'the power of God that brings salvation to everyone who believes' (1:16). The righteousness of God — not merely his attribute but his saving activity — is 'revealed from faith to faith' (1:17), citing Habakkuk 2:4: 'The righteous shall live by faith.' This verse launched the Reformation: Luther's discovery that God's righteousness is not his demand for our perfection but his gift of right standing through faith. The theme of the whole letter is established here.",
  },
  {
    id: "p2",
    label: "Gentile Guilt (1:18-32)",
    content: "God's wrath is revealed against all ungodliness and unrighteousness. The Gentile world has suppressed the truth about God available in creation (natural revelation — 1:20), and this suppression leads to progressive degradation: idolatry, sexual immorality, and a catalog of vices. The key phrase: 'God gave them over' (1:24, 26, 28) — God's wrath is not primarily active punishment but the judgment of allowing people to suffer the consequences of what they choose. Refusing to honor God as God leads to dehumanization.",
  },
  {
    id: "p3",
    label: "Jewish Guilt (2:1–3:8)",
    content: "The Jewish reader who was nodding at the Gentile indictment is confronted: you who judge do the same things (2:1). Privilege (circumcision, the law) does not automatically produce righteousness. God judges impartially (2:11). The law, which was the Jew's advantage, becomes an instrument of condemnation when disobeyed: the uncircumcised Gentile who keeps the law's requirements by conscience is more 'circumcised' than the Jew who has the law but disobeys it (2:25-29). True Jewishness is inward, not outward.",
  },
  {
    id: "p4",
    label: "Universal Guilt (3:9-20)",
    content: "'What shall we conclude then? Do we have any advantage? Not at all! For we have already made the charge that Jews and Gentiles alike are all under the power of sin' (3:9). Paul's catena of OT texts (Psalms 14, 53, 5, 10, 36; Isaiah 59) builds the case: no one is righteous, no one seeks God, no one does good — not even one. 'Whatever the law says, it says to those who are under the law, so that every mouth may be silenced and the whole world held accountable to God' (3:19). The verdict is universal.",
  },
];

const JUSTIFICATION_ITEMS = [
  { color: GREEN, title: "The Righteousness of God (3:21-26)", body: "Now the great 'but now' of the gospel: 'But now apart from the law the righteousness of God has been made known' (3:21). This righteousness is through faith in Jesus Christ to all who believe. 'All have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus' (3:23-24). Verse 25 is among the richest in Scripture: Jesus as the hilastērion (mercy seat / propitiation) — the place where God's wrath against sin is absorbed and his forgiveness demonstrated. Justification is free; it was purchased at the price of the Son." },
  { color: GOLD, title: "Justification by Faith Alone (3:27–4:25)", body: "Paul eliminates boasting: if justification is by faith, no one can claim it as personal achievement. Abraham (4:1-25) is the paradigm: he was justified by faith before circumcision (4:11) and before the law (4:13). His faith was 'credited as righteousness' (Gen 15:6, quoted three times). This is the doctrine of imputation: Abraham's faith was reckoned, credited, counted as righteousness — not because faith itself is meritorious but because it grasps the promise of God. The pattern applies to all who believe in the one 'who raised Jesus our Lord from the dead' (4:24)." },
  { color: PURPLE, title: "Peace, Access, and Hope (5:1-11)", body: "'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ, through whom we have gained access by faith into this grace in which we now stand' (5:1-2). The result of justification: peace (end of enmity with God), access (ongoing nearness), and hope (5:2). Suffering produces perseverance → character → hope (5:3-4) — the same chain as James 1. The ground of all: 'God demonstrates his own love for us in this: While we were still sinners, Christ died for us' (5:8). The past act guarantees the future deliverance (5:9)." },
  { color: TEAL, title: "Adam and Christ (5:12-21)", body: "The famous typological contrast: through one man (Adam) sin entered and death spread to all; through one man (Jesus Christ) grace overflows and life comes to many. 'If, because of one man's trespass, death reigned through that one man, much more will those who receive the abundance of grace and the free gift of righteousness reign in life through the one man Jesus Christ' (5:17). The logic is asymmetric: the gift outpaces the sin. Where sin increased, grace increased all the more (5:20). This is the most extended treatment of original sin in the NT." },
];

const UNION_ITEMS = [
  {
    id: "u1",
    label: "Dead to Sin, Alive to God (Romans 6)",
    content: "Chapter 6 answers the antinomian objection: 'Shall we go on sinning so that grace may increase?' (6:1). The answer is emphatically no — not because the believer still fears judgment but because they are united to Christ in his death and resurrection. Baptism symbolizes and seals this union: buried with Christ, raised with him. 'Our old self was crucified with him' (6:6). The tense matters: the crucifixion of the old self is past and definitive — it has happened. The command follows the indicative: 'Do not let sin reign in your mortal body' (6:12). Freedom from sin flows from the fact of union, not vice versa.",
  },
  {
    id: "u2",
    label: "Slavery Metaphor (Romans 6:15-23)",
    content: "Paul uses the slavery metaphor to explain the impossibility of neutrality: no one is truly free — everyone is a slave, either to sin or to righteousness. Obedience leads to righteousness; sin leads to death. The transfer of masters — from sin to God — is the essence of conversion. 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord' (6:23) — the most famous contrast in the chapter. Wages are earned; the gift is free. Sin pays what is owed; God gives what is undeserved.",
  },
  {
    id: "u3",
    label: "The Law's Problem (Romans 7)",
    content: "Paul describes the believer's relationship to the law using the marriage metaphor: death releases from the previous covenant. 'Now, by dying to what once bound us, we have been released from the law so that we serve in the new way of the Spirit, and not in the old way of the written code' (7:6). Then the agonizing autobiographical passage (7:7-25): 'I do not do the good I want to do, but the evil I do not want to do — this I keep on doing' (7:19). The debate: does this describe Paul before or after conversion? The most natural reading of the present tenses suggests the ongoing experience of the believer who loves the law of God but finds another law at war with it.",
  },
];

const SPIRIT_ITEMS = [
  { color: GREEN, title: "No Condemnation (8:1-4)", body: "'Therefore, there is now no condemnation for those who are in Christ Jesus' (8:1) — arguably the most important verse in the letter. The reason: 'the law of the Spirit who gives life has set you free from the law of sin and death' (8:2). What the law could not do in that it was weakened by the flesh, God did by sending his own Son (8:3). The Spirit-indwelt believer fulfills the righteous requirement of the law not by external compliance but by the Spirit working from within. The two walks: according to the flesh vs. according to the Spirit (8:4-8)." },
  { color: BLUE, title: "Spirit of Adoption (8:14-17)", body: "'The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, \"Abba, Father\"' (8:15). Adoption (huiothesia) is one of the richest salvation metaphors — not just forgiveness of guilt but entrance into the family. Co-heirs with Christ: sharing both his suffering and his glory (8:17). The Spirit's testimony that we are God's children addresses the conscience and provides assurance beyond what rational argument can supply." },
  { color: TEAL, title: "Creation Groaning (8:18-25)", body: "The cosmic scope of salvation: 'the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God' (8:21). Three groanings: creation (8:22), we ourselves (8:23), and the Spirit (8:26) — all together in the birth pangs of the new creation. This is the basis for Christian environmental concern: creation matters because God is going to redeem it, not discard it. Present suffering is not worth comparing to the coming glory (8:18)." },
  { color: GOLD, title: "The Golden Chain (8:28-30)", body: "'And we know that in all things God works for the good of those who love him, who have been called according to his purpose' (8:28). The 'good' is defined: conformity to Christ (8:29). The chain: foreknew → predestined → called → justified → glorified — all past tense, including glorification. This is the most concentrated statement of Reformed soteriology in the NT. The chain is unbreakable: everyone foreknown is ultimately glorified. Romans 8:31-39 draws the doxological conclusion: nothing can separate us from the love of God in Christ Jesus." },
];

const ISRAEL_ITEMS = [
  {
    id: "i1",
    label: "God's Word Has Not Failed (9:1-29)",
    content: "Paul's grief over Israel introduces the problem: if Israel, the covenant people, is not saved, has God's word failed? (9:6). No — 'not all who are descended from Israel are Israel' (9:6). God's election was always selective within ethnic Israel (Isaac not Ishmael; Jacob not Esau). The potter and clay passage (9:20-23) addresses the objection: who are you to talk back to God? God has the right to show mercy to whom he will and to harden whom he will. This is the classical proof text for unconditional election in Reformed theology.",
  },
  {
    id: "i2",
    label: "Israel's Stumbling (9:30–10:21)",
    content: "Israel stumbled because they pursued righteousness by works, not faith (9:32). They were 'zealous for God, but their zeal is not based on knowledge. Since they did not know the righteousness of God and sought to establish their own, they did not submit to God's righteousness' (10:2-3). The confession of faith: 'If you declare with your mouth, \"Jesus is Lord,\" and believe in your heart that God raised him from the dead, you will be saved' (10:9). This is the basis for evangelism (10:14-17): faith comes by hearing the word of Christ. Israel heard but did not believe.",
  },
  {
    id: "i3",
    label: "A Mystery: All Israel Will Be Saved (11:1-36)",
    content: "Has God rejected his people? By no means (11:1) — Paul himself is evidence of a Jewish remnant. The hardening of Israel is partial and temporary, serving the purpose of bringing salvation to the Gentiles. The wild olive branch (Gentiles) grafted into the cultivated olive (Israel) — but don't be arrogant, warns Paul; the roots support you, not the other way (11:18). 'All Israel will be saved' (11:26) — debated: ethnic Israel in the end times? The full number of elect Jews? The doxology (11:33-36) is the only appropriate response to this mystery: 'Oh, the depth of the riches of the wisdom and knowledge of God!'",
  },
];

const ETHICS_ITEMS = [
  { title: "Living Sacrifice (12:1-2)", color: GOLD, body: "'Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God — this is your true and proper worship' (12:1). The ethical section begins with 'therefore' — it flows from the theological sections. The comprehensive call: present the whole body (not just the mind or spirit) as an act of worship. 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind' (12:2) — the locus of transformation is the mind; the means is the ongoing renewal of thought patterns." },
  { title: "Gifts and Humility (12:3-8)", color: TEAL, body: "The body metaphor from 1 Corinthians 12 appears here: different members with different gifts, all belonging to one body. Seven gifts listed (prophecy, service, teaching, exhortation, giving, leading, mercy) with modifiers: the giver gives generously; the leader leads diligently; the merciful show mercy cheerfully. The whole section is framed by sober self-assessment: 'Do not think of yourself more highly than you ought' (12:3)." },
  { title: "Love in Practice (12:9-21)", color: GREEN, body: "The most concentrated ethical instruction in Paul: love sincerely, hate evil, honor one another above yourselves, be joyful in hope, patient in affliction, faithful in prayer, practice hospitality, bless those who persecute you (12:14), rejoice with the rejoicing, weep with the weeping, do not be proud. The climax: 'Do not repay anyone evil for evil... Do not be overcome by evil, but overcome evil with good' (12:17-21). This is the Sermon on the Mount applied to community life." },
  { title: "Governing Authorities (13:1-7)", color: BLUE, body: "Submit to governing authorities — they are God's servants (13:1-4). Paul writes under Nero's Rome; the instructions are practical, not endorsements of any political system. The key: the state has legitimate authority to punish evil and commend good. Christians pay taxes and show respect. The pastoral context: some Roman Christians may have been resisting Roman authorities; Paul corrects this while not endorsing the state as absolute." },
  { title: "Love Fulfills the Law (13:8-14)", color: PURPLE, body: "'Whoever loves others has fulfilled the law' (13:8). The commandments (adultery, murder, stealing, coveting) are summed up in 'Love your neighbor as yourself' (13:9). Not that love replaces the law, but love fulfills its intent. The urgency: 'the hour has come for you to wake from sleep' (13:11) — the eschatological framework makes ethical seriousness urgent. 'Put on the Lord Jesus Christ' (13:14) — the armor metaphor for taking on Christ's character as the basis for ethical action." },
];

const VIDEOS = [
  { videoId: "0SVTl4Xa5fY", title: "Romans Overview — BibleProject" },
  { videoId: "K3bkCOXmBek", title: "Romans 8 in Full — John Piper" },
  { videoId: "NkqL_lE48ys", title: "Justification by Faith in Romans — Tim Keller" },
  { videoId: "lMflRJGgRps", title: "Romans 9 and God's Sovereignty — R.C. Sproul" },
  { videoId: "5fXHRtxhZ-8", title: "Romans 12 — Living Sacrifice — Matt Chandler" },
];

export default function RomansGuide() {
  const [tab, setTab] = useLocalStorage("vine_romans_tab", "overview");
  const [probOpen, setProbOpen] = useLocalStorage("vine_romans_prob", "");
  const [unionOpen, setUnionOpen] = useLocalStorage("vine_romans_union", "");
  const [isrOpen, setIsrOpen] = useLocalStorage("vine_romans_isr", "");
  const [journal, setJournal] = useLocalStorage("vine_romans_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: GOLD + "22", color: GOLD, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>PAUL · ROMANS</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>The Book of Romans</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          Paul's magnum opus — the most systematic presentation of the gospel in the New Testament, covering sin, justification, sanctification, Israel, and ethics.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? GOLD : BORDER, background: tab === t.id ? GOLD + "22" : "transparent", color: tab === t.id ? GOLD : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Introduction to Romans</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Romans has shaped the church more than any other epistle. Augustine read Romans 13:13-14 and was converted. Luther read 1:17 and the Reformation began. Wesley's heart was strangely warmed at a reading of Romans. Barth's commentary on Romans (1919) transformed 20th-century theology. The letter is Paul's most systematic treatment of the gospel — written to a church he had not founded, preparing the way for a mission to Spain, and addressing the Jewish-Gentile tensions in the Roman community.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Author", value: "Paul (Tertius as amanuensis)", color: BLUE },
                { label: "Date", value: "~AD 57, from Corinth", color: GREEN },
                { label: "Audience", value: "Jews and Gentiles in Rome", color: PURPLE },
                { label: "Key Verse", value: "1:16-17 (power of God)", color: GOLD },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: "0.95rem" }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.8rem", color: GOLD }}>The Argument of Romans</h3>
              <ul style={{ color: MUTED, lineHeight: 2.1, paddingLeft: "1.2rem" }}>
                <li><strong style={{ color: TEXT }}>1:1-17</strong> — The gospel introduced: God's power, righteousness by faith</li>
                <li><strong style={{ color: TEXT }}>1:18–3:20</strong> — The universal problem: Gentile guilt, Jewish guilt, all guilty</li>
                <li><strong style={{ color: TEXT }}>3:21–5:21</strong> — Justification: righteousness of God, faith, imputation (Abraham), peace, Adam/Christ</li>
                <li><strong style={{ color: TEXT }}>6:1–7:25</strong> — Union with Christ: dead to sin, alive to God; the law's problem</li>
                <li><strong style={{ color: TEXT }}>8:1-39</strong> — The Spirit: no condemnation, adoption, creation's groaning, golden chain, doxology</li>
                <li><strong style={{ color: TEXT }}>9:1–11:36</strong> — Israel: election, stumbling, mystery, all Israel saved, doxology</li>
                <li><strong style={{ color: TEXT }}>12:1–16:27</strong> — Kingdom ethics: living sacrifice, gifts, love, governing authorities</li>
              </ul>
            </div>
          </div>
        )}

        {/* THE PROBLEM */}
        {tab === "problem" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Universal Problem (Romans 1–3)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Before Paul can announce the solution, he must establish the problem: every human being — Gentile and Jew — is guilty before God and incapable of self-rescue.
            </p>
            {PROBLEM_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${probOpen === item.id ? RED : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setProbOpen(probOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: RED, fontSize: "1.2rem" }}>{probOpen === item.id ? "−" : "+"}</span>
                </button>
                {probOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* JUSTIFICATION */}
        {tab === "justification" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Justification by Faith (Romans 3–5)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The great reversal: after establishing universal guilt, Paul announces universal provision — justification freely given through Christ's atoning work, received by faith alone.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {JUSTIFICATION_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* UNION WITH CHRIST */}
        {tab === "union" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Union with Christ and the Law (Romans 6–7)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Justification is the foundation; union with Christ in his death and resurrection is the basis for sanctification. Romans 6–7 answers the objection that grace leads to license.
            </p>
            {UNION_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${unionOpen === item.id ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setUnionOpen(unionOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{unionOpen === item.id ? "−" : "+"}</span>
                </button>
                {unionOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SPIRIT AND GROANING */}
        {tab === "spirit" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Romans 8 — The Spirit, Adoption, and No Condemnation</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Romans 8 is the mountain peak of the letter — no condemnation, life in the Spirit, adoption as children of God, groaning toward redemption, the golden chain, and the unbreakable love of God.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {SPIRIT_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ISRAEL'S MYSTERY */}
        {tab === "israel" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Mystery of Israel (Romans 9–11)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Three of the most theologically dense and disputed chapters in the NT — addressing divine election, Israel's hardening, and the ultimate mystery of all Israel being saved.
            </p>
            {ISRAEL_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${isrOpen === item.id ? TEAL : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setIsrOpen(isrOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{isrOpen === item.id ? "−" : "+"}</span>
                </button>
                {isrOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* KINGDOM ETHICS */}
        {tab === "ethics" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Kingdom Ethics (Romans 12–16)</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The theological argument of Romans 1–11 grounds the ethical imperatives of 12–16. 'Therefore' (12:1) — in view of God's mercy — is the hinge. The ethics flow from the gospel.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {ETHICS_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reflection Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Questions for meditating on Romans.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "Romans 3:23 says all have sinned. How does the depth of that diagnosis change your appreciation for Romans 3:24?",
                "Romans 5:8 — while we were still sinners. What difference does it make that Christ died for us before we sought him?",
                "Romans 8:1 — no condemnation. Do you live in the freedom of that verdict? What prevents you?",
                "Romans 12:1 — a living sacrifice. What area of your life is most resistant to being offered to God?",
              ].map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                  <div style={{ color: GOLD, fontWeight: 600, fontSize: "0.9rem" }}>{q}</div>
                </div>
              ))}
            </div>
            <textarea value={journal} onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here — saved locally in your browser..."
              style={{ width: "100%", minHeight: 220, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, color: TEXT, padding: "1rem", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Video Teaching</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Teaching through the book of Romans from trusted biblical scholars.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "0.9rem 1rem" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{v.title}</div>
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
