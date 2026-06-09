"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "elders", label: "Elder Qualifications" },
  { id: "godliness", label: "Godliness" },
  { id: "sounddoctrine", label: "Sound Doctrine" },
  { id: "timothy2", label: "2 Timothy" },
  { id: "titus", label: "Titus" },
  { id: "finish", label: "Finish Well" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const ELDER_QUALS = [
  { ref: "1 Tim 3:2a", color: GREEN, qual: "Above reproach", desc: "The umbrella qualification — all others are specifications of this. An elder must have no character fault that would bring legitimate discredit to the church or impede his ministry. Not sinless perfection but a life that withstands scrutiny." },
  { ref: "1 Tim 3:2b", color: BLUE, qual: "Husband of one wife", desc: "Literally a one-woman man. This does not necessarily prohibit remarriage after a spouse's death (1 Tim 5:14 recommends remarriage for younger widows), but describes exclusive marital faithfulness. The elder's relationship with his wife models the covenant faithfulness he will call others to." },
  { ref: "1 Tim 3:2c", color: PURPLE, qual: "Temperate, self-controlled, respectable", desc: "Three overlapping qualities of character: sober in judgment (not impulsive or given to extremes), self-controlled in desires (the Greek sophron — having mastery over oneself), and orderly in conduct (kosmios — life that has visible order and dignity)." },
  { ref: "1 Tim 3:2d", color: TEAL, qual: "Able to teach", desc: "The only leadership qualification that is a skill rather than a character trait. Elders must be able to hold firm to the trustworthy word as taught, so that he may be able to give instruction in sound doctrine and also to rebuke those who contradict it (Titus 1:9). Teaching is central to eldership." },
  { ref: "1 Tim 3:3", color: GOLD, qual: "Not violent, not quarrelsome, not a lover of money", desc: "Three prohibitions defining what an elder must not be. Violence (plektes — one who strikes) — he must not resolve conflict with his fists. Quarrelsome (amachos) — he must be able to oppose false teaching without being generally combative. Money-lover (aphilargyros — not a lover of silver) — the pastor who is in ministry for financial benefit has a fundamentally corrupted motivation." },
  { ref: "1 Tim 3:4-5", color: RED, qual: "Manages his household well", desc: "He must manage his own household well, with all dignity keeping his children submissive, for if someone does not know how to manage his own household, how will he care for God's church? The family is the proving ground for leadership. A man who cannot lead his household is not ready to lead a congregation. This does not demand perfect children but a household characterized by dignity and order." },
];

const GODLINESS_ITEMS = [
  { ref: "1 Tim 4:7-8", color: TEAL, title: "Train Yourself for Godliness", content: "Train yourself for godliness; for while bodily training is of some value, godliness is of value in every way, as it holds promise for the present life and also for the life to come. The Greek gymnaze (from which we get gymnasium) means intense physical training. Paul applies this athletic metaphor to spiritual formation: godliness requires the same disciplined effort as athletic training. It does not come automatically with conversion. You must work at it — but the return on investment is infinitely greater than physical fitness." },
  { ref: "1 Tim 6:6-8", color: GREEN, title: "Godliness with Contentment", content: "But godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content. Paul's formula for great gain is countercultural: not more money or status, but godliness + contentment. The contentment is grounded in a reality check: you arrived with nothing; you will leave with nothing. The things you own are temporary loan items. What remains — your character, your relationships, your faithfulness — is what was actually gained." },
  { ref: "2 Tim 2:22", color: BLUE, title: "Flee and Pursue", content: "Flee youthful passions and pursue righteousness, faith, love, and peace, along with those who call on the Lord from a pure heart. The two-directional command: flee and pursue. Running away from something without running toward something produces spiritual anxiety, not health. The pursuit is not solo: along with those who call on the Lord from a pure heart. Community is part of the strategy for godliness. You cannot pursue holiness in isolation." },
  { ref: "Titus 2:11-12", color: GOLD, title: "The Grace That Trains", content: "For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age. The remarkable claim: grace itself is the agent of discipline. The grace of God does not make godliness unnecessary — it trains us toward it. The indicative (grace has appeared, bringing salvation) drives the imperative (renounce ungodliness, live godly lives). We are not trained by the law but by grace." },
];

const SOUND_DOCTRINE = [
  { ref: "1 Tim 1:3-5", color: PURPLE, title: "The Goal of Our Instruction", content: "As I urged you when I was going to Macedonia, remain at Ephesus so that you may charge certain persons not to teach any different doctrine, nor to devote themselves to myths and endless genealogies, which promote speculations rather than the stewardship from God that is by faith. The aim of our charge is love that issues from a pure heart and a good conscience and a sincere faith. Paul specifies what false doctrine produces (speculation, controversy) and what sound doctrine produces (love from a pure heart, good conscience, sincere faith). Doctrine is not abstract — it has a character output. Bad doctrine eventually produces bad character." },
  { ref: "2 Tim 3:16-17", color: GREEN, title: "All Scripture Is God-Breathed", content: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work. Theopneustos — breathed out by God — is the key word. Scripture is not human opinion that happens to be holy; it is the exhalation of God, carrying divine authority. Its four purposes form a complete curriculum: teaching (what is true), reproof (what is error), correction (how to get back on track), training in righteousness (how to stay there)." },
  { ref: "2 Tim 4:2-4", color: RED, title: "Preach the Word", content: "Preach the word; be ready in season and out of season; reprove, rebuke, and exhort, with complete patience and teaching. For the time is coming when people will not endure sound teaching, but having itching ears they will accumulate for themselves teachers to suit their own passions. Itching ears do not want truth — they want affirmation. The temptation for pastors in such an environment is to give the people what they want. Paul commands the opposite: preach the word whether it is convenient or not. Complete patience suggests that faithfulness is long, slow work." },
  { ref: "Titus 1:9", color: TEAL, title: "Hold Firm to the Trustworthy Word", content: "He must hold firm to the trustworthy word as taught, so that he may be able to give instruction in sound doctrine and also to rebuke those who contradict it. Sound doctrine requires both positive instruction (teaching what is true) and negative defense (rebuking what is false). An elder who is gentle about false teaching is not more kind — he is less faithful. The trustworthy word is worth defending because it is the means by which God saves and forms his people." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type PastoralTab = "overview" | "elders" | "godliness" | "sounddoctrine" | "timothy2" | "titus" | "finish" | "journal" | "videos";

export default function PastoralEpistlesGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<PastoralTab>("vine_pastoral_tab", "overview");
  const [openElder, setOpenElder] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_pastoral_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_pastoral_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveEntry = useCallback(() => {
    if (!jForm.verse && !jForm.reflection) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...jForm };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2000);
  }, [jForm]);

  const deleteEntry = useCallback((id: string) => setJEntries(prev => prev.filter(e => e.id !== id)), []);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Pastoral Letters · NT</div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>The Pastoral Epistles</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>Paul&apos;s letters to Timothy and Titus — his two most trusted co-workers — on how to lead churches, guard sound doctrine, train for godliness, and finish the race well.</p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`, background: activeTab === t.id ? `${GREEN}20` : "transparent", color: activeTab === t.id ? GREEN : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The three Pastoral Epistles — 1 Timothy, 2 Timothy, and Titus — form a distinct cluster within Paul&apos;s letters. Unlike his letters to congregations (Corinthians, Galatians, Romans), these are addressed to individuals responsible for leading specific churches: Timothy in Ephesus and Titus in Crete. They are called &quot;pastoral&quot; not because they are for pastors only but because they address the pastoral task — the care, governance, and protection of the local church.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Their themes overlap: sound doctrine vs. false teaching, the qualifications and conduct of church leaders, practical instructions for different groups within the congregation, and above all the cultivation of godliness — eusebeia appears 15 times in the Pastorals and only 4 times in the rest of Paul&apos;s letters. These letters are Paul&apos;s final gift to the church: a manual for the generation that will carry the gospel forward after his death.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
              {[
                { letter: "1 Timothy", color: GREEN, context: "~AD 62-65", purpose: "Guard the deposit. Charges Timothy to resist false teachers, establishes church order, qualifications for elders and deacons, instructions for different groups, and a theology of godliness." },
                { letter: "2 Timothy", color: RED, context: "~AD 66-67", purpose: "Paul's final letter — written from prison, expecting execution. Guard the gospel (1:14), endure hardship, preach the word, finish the course. The most personal and urgent of the three." },
                { letter: "Titus", color: BLUE, context: "~AD 62-65", purpose: "Titus is organizing a new church in Crete. Appoint elders, teach sound doctrine, silence false teachers, and call Cretans to a transformed life — the grace that trains us." },
              ].map(l => (
                <div key={l.letter} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: l.color, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{l.letter}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 10 }}>{l.context}</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{l.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "elders" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Elder and Deacon Qualifications (1 Tim 3, Titus 1)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Paul provides two parallel lists of elder qualifications — one in 1 Timothy 3:1-7 and one in Titus 1:5-9. They overlap significantly with minor differences. The list is striking for what it emphasizes: the qualifications are almost entirely character traits, not skills or gifts. The church is not looking for the most talented person; it is looking for the most trustworthy person.</p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>This is a trustworthy saying: whoever aspires to be an overseer desires a noble task (1 Tim 3:1). The aspiration is good. The question is whether the life matches the aspiration.</p>
            </div>
            {ELDER_QUALS.map((q, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openElder === String(i) ? q.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenElder(openElder === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${q.color}20`, border: `1px solid ${q.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: q.color, fontWeight: 700 }}>{q.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{q.qual}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openElder === String(i) ? "−" : "+"}</span>
                </button>
                {openElder === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "14px 0 0" }}>{q.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "godliness" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Training for Godliness</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Eusebeia — godliness, reverence, piety — is the dominant theme of the Pastoral Epistles. It appears 15 times, more than in all the rest of Paul combined. Godliness is not a vague religious feeling; it is the practical orientation of a whole life toward God. Paul insists it must be trained for — it does not come by default. These letters contain the most sustained practical theology of spiritual formation in the NT.</p>
            </div>
            {GODLINESS_ITEMS.map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "sounddoctrine" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Sound Doctrine and the Faithful Word</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Sound doctrine (hygiainouse didaskalia — healthy teaching) appears 8 times in the Pastorals. Doctrine is compared to health: false doctrine is a disease that spreads (2 Tim 2:17, like gangrene); sound doctrine produces the health of love, good conscience, and sincere faith (1 Tim 1:5). Paul is not merely asking for intellectual orthodoxy — he is insisting that correct doctrine and correct character are inseparably connected.</p>
            </div>
            {SOUND_DOCTRINE.map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "timothy2" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>2 Timothy: Paul&apos;s Last Letter</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Second Timothy is Paul&apos;s final letter — written from a Roman prison, likely shortly before his execution under Nero. It is his most personal document: vulnerable, tender, urgent, and deeply theological. Paul is not despairing; he is completing. He is passing a torch to his son in the faith and charging him to guard what has been entrusted to him (1:14).</p>
            </div>
            {[
              { ref: "1:6-7", color: RED, title: "Fan Into Flame", content: "For this reason I remind you to fan into flame the gift of God, which is in you through the laying on of my hands. For God gave us a spirit not of fear but of power and love and self-control. The gift has not gone out — it has become embers. Fan it into flame. The word is anazopyrein: to rekindle a dying fire. Timothy appears to be struggling — perhaps intimidated by opposition or Paul's imprisonment. The antidote is not willpower but a reminder of what spirit God has given: not fear but power, love, and self-control. Courage is theological, not psychological." },
              { ref: "1:14", color: GREEN, title: "Guard the Good Deposit", content: "Guard the good deposit that was entrusted to you — guard it with the help of the Holy Spirit who lives in us. The good deposit is the gospel — the body of apostolic teaching entrusted to Timothy and his generation. Guarding it requires the Holy Spirit's help: Timothy cannot do this alone. The deposit is not Paul's personal property but God's — which is why it must be guarded so carefully. Every generation of the church receives this deposit and is responsible for passing it on intact." },
              { ref: "2:1-7", color: BLUE, title: "Three Metaphors for Ministry", content: "You then, my child, be strengthened by the grace that is in Christ Jesus... Share in suffering as a good soldier of Christ Jesus... An athlete is not crowned unless he competes according to the rules... It is the hard-working farmer who ought to have the first share of the crops. Three models of faithful ministry: the soldier (single-minded, undistracted, enduring hardship), the athlete (competing according to the rules — not cutting corners), and the farmer (consistent hard work that produces harvest). All three require suffering, discipline, and long-term faithfulness." },
              { ref: "4:6-8", color: GOLD, title: "I Have Finished the Race", content: "For I am already being poured out like a drink offering, and the time for my departure is near. I have fought the good fight, I have finished the race, I have kept the faith. Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day. The most beautiful ending of any Pauline letter. Paul does not rage against the dying of the light — he celebrates completion. The three perfects: fought, finished, kept. The confidence is not in his performance but in the Lord as the righteous Judge. The crown is stored, waiting. The race has a finish line, and Paul is crossing it." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "titus" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Titus: The Shortest Pastoral Epistle</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>Titus is the shortest of the three Pastoral Epistles — three chapters covering elder qualifications, instructions for various groups, the theological foundation of Christian ethics (Titus 2:11-14), and the practical expression of the gospel in social life. Titus is organizing a church in Crete — a culture with a notoriously bad reputation for dishonesty and laziness. Paul does not soften the challenge; he addresses it theologically.</p>
            </div>
            {[
              { ref: "Titus 1:5", color: BLUE, title: "Appoint Elders in Every Town", content: "The reason I left you in Crete was so that you might put in order what was left unfinished and appoint elders in every town, as I directed you. Paul&apos;s first practical instruction: establish leadership. A church without accountable elders is unfinished. The plural elders in every town suggests that the normative pattern is a plurality of elders per congregation, not a single pastor. Titus&apos; task is to identify those who meet the qualifications (1:6-9) and appoint them." },
              { ref: "Titus 2:11-14", color: GOLD, title: "The Grace That Trains", content: "For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age, while we wait for the blessed hope — the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works. This is Paul&apos;s clearest statement that grace is the engine of sanctification, not merely the basis of justification. Grace appeared (the first coming), grace trains us now, and we await the blessed hope (the second coming). The whole Christian life is bracketed by grace." },
              { ref: "Titus 3:3-7", color: PURPLE, title: "We Ourselves Were Once Foolish", content: "For we ourselves were once foolish, disobedient, led astray, slaves to various passions and pleasures... But when the goodness and loving kindness of God our Savior appeared, he saved us, not because of works done by us in righteousness, but according to his own mercy... so that being justified by his grace we might become heirs according to the hope of eternal life. The most complete statement of the gospel in the Pastoral Epistles. The before (foolish, disobedient, enslaved) contrasts sharply with the after (saved by mercy, justified by grace, heirs of eternal life). The transition point is not our decision but God&apos;s appearing." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "finish" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Finishing Well</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The dominant pastoral concern of 2 Timothy is finishing the race well. Paul is at the end of his own race and is writing to a younger man who must carry the baton forward. The call is not to spectacular achievement but to sustained faithfulness — to complete what was started, to keep what was entrusted, to pass on what was received. This is the pastoral theology of Christian maturity.</p>
            </div>
            {[
              { color: RED, title: "The Danger of Drifting", text: "The Pastorals repeatedly warn against a specific kind of failure: not catastrophic sin but gradual drift. Some people have wandered from the faith (1 Tim 6:10). Some have shipwrecked their faith (1 Tim 1:19). Others have gone astray like Hymenaeus and Philetus who have departed from the truth (2 Tim 2:18). The failure is slow — a series of small compromises that accumulate into departure. The warning is for everyone: guard carefully, hold firmly, press on." },
              { color: BLUE, title: "The Faithful Saying", text: "Four times in the Pastorals Paul uses the phrase This is a trustworthy saying — a rhetorical formula marking particularly reliable doctrine. The four faithful sayings: (1) Christ Jesus came into the world to save sinners (1 Tim 1:15); (2) Whoever aspires to be an overseer desires a noble work (1 Tim 3:1); (3) Godliness has value for all things (1 Tim 4:8); (4) If we died with him, we will also live with him (2 Tim 2:11). These are the distillations of Christian reality that must be memorized, preached, and lived." },
              { color: GREEN, title: "The Local Church as Pillar and Buttress", text: "Although I hope to come to you soon, I am writing these things to you so that, if I delay, you may know how one ought to behave in the household of God, which is the church of the living God, a pillar and buttress of the truth (1 Tim 3:14-15). The church is not merely a helpful institution — it is the household of God, the dwelling place where God lives among his people. And it is the pillar and buttress of the truth — the structure that holds up and supports the gospel against all assaults. Local church faithfulness is not a small thing." },
              { color: TEAL, title: "The Reliable Transmission of the Gospel", text: "And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also (2 Tim 2:2). This single verse contains four generations: Paul → Timothy → faithful men → others. The transmission of the gospel is a multigenerational project. Each generation receives what was delivered and passes it on intact. The continuity of the church through history depends on faithful men and women who take seriously this responsibility to guard and transmit what they have received." },
            ].map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Pastoral Epistles Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record insights on leadership, godliness, sound doctrine, and finishing well from your study of 1 & 2 Timothy and Titus.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Passage</label><textarea rows={2} value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. 1 Tim 4:7-8, 2 Tim 4:6-8, Titus 2:11-14" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label><textarea rows={4} value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What does this passage mean for your leadership, your spiritual formation, or your ministry?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer response</label><textarea rows={3} value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="What are you asking God for based on what you've read?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={saveEntry} style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{jSaved ? "Saved ✓" : "Save Entry"}</button>
              </div>
            </div>
            {jEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {jEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span><button type="button" onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button></div>
                    {e.verse && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.verse}</p></div>}
                    {e.reflection && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Reflection</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.reflection}</p></div>}
                    {e.prayer && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Prayer</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.prayer}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on the Pastoral Epistles</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Sermons and lectures on church leadership, sound doctrine, godliness, and Paul&apos;s final letter.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "9muFNM9RKpA", title: "1-2 Timothy and Titus Overview", channel: "BibleProject", description: "BibleProject's overview of the Pastoral Epistles — the context, the key themes of sound doctrine and godliness, and Paul's final charge to Timothy and Titus." },
                  { videoId: "9S83K5wtA0E", title: "I Have Finished the Race — 2 Timothy", channel: "Tim Keller", description: "Keller on 2 Timothy 4:6-8 — Paul's final words, the pouring out like a drink offering, and what it looks like to finish the Christian race well." },
                  { videoId: "FiMp3WNAP9s", title: "The Qualifications of an Elder", channel: "Gospel Coalition", description: "A careful exposition of 1 Timothy 3 and Titus 1 — each elder qualification, its meaning, and why character matters more than charisma in church leadership." },
                  { videoId: "Z2F6zGS7WEI", title: "Preach the Word — 2 Timothy 3-4", channel: "Desiring God", description: "On 2 Timothy 3:16-4:5 — all Scripture is God-breathed, the urgency of preaching the word in season and out of season, and the threat of itching ears." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
