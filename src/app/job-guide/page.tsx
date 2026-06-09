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
  { id: "prologue", label: "The Prologue" },
  { id: "friends", label: "The Three Friends" },
  { id: "protest", label: "Job's Protest" },
  { id: "whirlwind", label: "The Whirlwind" },
  { id: "epilogue", label: "Restoration" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const FRIENDS_ERRORS = [
  { ref: "Eliphaz", color: GOLD, title: "Eliphaz: Appeal to Experience", error: "\"Think now, who that was innocent ever perished? Or where were the upright cut off?\" (4:7)", analysis: "Eliphaz begins gently but his core argument is clear: the innocent don't suffer; therefore Job must have sinned. He appeals to his own experience and to a vision he received (4:12-17). His theology is retributive: suffering proves guilt. He urges Job to appeal to God (5:8) and promises restoration if Job repents. He means well. His theology is coherent. It is also wrong — it fails the test of Job's actually established innocence in the prologue." },
  { ref: "Bildad", color: BLUE, title: "Bildad: Appeal to Tradition", error: "\"Inquire, please, of bygone ages, and consider what the fathers have searched out.\" (8:8)", analysis: "Bildad appeals to wisdom tradition — what the ancestors knew. He is sharper than Eliphaz: Job's children obviously died because of their sin (8:4); if Job is truly pure, God will restore him. His argument is tidy, orthodox, and heartless. He offers tradition as a weapon rather than a comfort. The problem is not that his tradition is false — the retribution principle often holds — but that he applies it to a situation where it doesn't fit, without acknowledging that Job's suffering might be inexplicable by standard categories." },
  { ref: "Zophar", color: RED, title: "Zophar: Appeal to Moral Certainty", error: "\"Know then that God exacts of you less than your guilt deserves.\" (11:6b)", analysis: "Zophar is the most direct and the cruelest. He tells Job flatly: whatever you are suffering, you deserve more. If God spoke, he would show you hidden iniquity you don't even know about (11:5-6). His certainty is absolute and his empathy is zero. He represents the type who, in the face of another's suffering, becomes more interested in defending God's justice in the abstract than in sitting with the person in front of them. He speaks most forcefully and is rebuked most severely." },
  { ref: "Elihu", color: PURPLE, title: "Elihu: The Young Interrupter", error: "\"I am full of words; the spirit within me constrains me.\" (32:18)", analysis: "Elihu arrives in chapters 32-37, angry with both Job and the three friends. He claims to have a new perspective: suffering is disciplinary and educational rather than purely punitive. He is not entirely wrong — there is wisdom in seeing suffering as formation — but he too ultimately fails. He speaks at length without listening, he lectures without compassion, and his theory still cannot account for the depth of Job's suffering. God notably does not address or rebuke Elihu in the epilogue, suggesting he is simply irrelevant." },
];

const WHIRLWIND_ITEMS = [
  { ref: "Job 38:1-7", color: BLUE, title: "Where Were You?", content: "\"Where were you when I laid the foundation of the earth? Tell me, if you have understanding. Who determined its measurements — surely you know!\" God's first question is not an answer to Job's suffering but a confrontation with the scope of divine knowledge and power. The questions are not rhetorical cruelty — they are an invitation to locate oneself correctly in the order of things. Job has been arguing from within the human horizon; God shows him how large the world actually is." },
  { ref: "Job 38:8-38", color: TEAL, title: "The Cosmos Questions", content: "The whirlwind speech ranges across the whole created order: the sea contained by its boundaries, the dawn commanded to take the earth by its corners, the treasuries of snow and hail, the rain for the uninhabited desert (38:26 — God sends rain where no human sees or benefits). This last detail is significant: God cares for creation in ways that have nothing to do with human observation or need. The universe is larger and more complex than human suffering — not because suffering doesn't matter, but because God's governance of creation exceeds our frame of reference." },
  { ref: "Job 38:39–39:30", color: GREEN, title: "The Animal Questions", content: "God asks Job about the provision of prey for the lion (38:39), the freedom of the wild ox (39:9-12), the strange behavior of the ostrich (39:13-17), the strength of the horse (39:19-25), the hawk's soaring (39:26). These are not random — each animal represents a kind of wildness and mystery that exceeds human control. God is not domesticated, manageable, or predictable. The world he governs is stranger and more wonderful than any theology of retribution can contain." },
  { ref: "Job 40:3-5", color: GOLD, title: "Job's First Response", content: "\"I am unworthy — how can I reply to you? I put my hand over my mouth. I spoke once, but I have no answer — twice, but I will say no more.\" Job's first response to the whirlwind is silence — not the silence of defeat, but the silence of encounter. He has not been answered in the way he demanded (an explanation of his suffering) but something far more important has happened: he has met God. The personal encounter is itself the answer — or at least the context in which all the other questions find their proper place." },
  { ref: "Job 42:1-6", color: PURPLE, title: "Job's Final Response", content: "\"I had heard of you by the hearing of the ear, but now my eye sees you; therefore I despise myself, and repent in dust and ashes.\" Job's final speech is not a defeat — it is a transformation. Before the whirlwind he knew about God; now he has seen God. The content of the divine speech has not answered his questions, but the divine presence has addressed his deepest need. His repentance (42:6) is not admission of the friends' charges — it is the appropriate creaturely response to encounter with the holy, living God." },
];

const THEMES = [
  { color: GOLD, title: "Innocent Suffering Is Real", text: "The prologue establishes beyond all doubt that Job is innocent (1:1, 1:8, 2:3) and that his suffering is therefore not punishment for sin. This is the book's most foundational claim, and it overturns the retributive theology that pervades the friends' speeches. Job's suffering is not explained in the body of the book — the reader knows the reason (the heavenly court scene) but Job never does. The book insists that not all suffering is punishment, and that claiming otherwise is a theological error God himself condemns." },
  { color: BLUE, title: "Lament Is Legitimate", text: "Job's protests are raw, accusatory, and sometimes shocking: he wishes he had never been born (3:3), accuses God of attacking him (16:12-14), demands God answer him (31:35-37). The book never condemns these protests. God, in the epilogue, praises Job for speaking what is right (42:7-8) — presumably including these laments — and condemns the friends who spoke falsely. The book is a powerful validation of honest lament as the right response to unbearable suffering, rather than the polite, theologically tidy resignation that passes for faith." },
  { color: GREEN, title: "God Is Not Manageable", text: "The friends' theology is ultimately a management strategy: if you understand the rules (retribution principle), you can predict God's behavior and explain every outcome. Job's experience — and God's whirlwind speech — destroys this project. God governs a world far larger and stranger than the retribution principle can contain. He sends rain on the uninhabited desert. He knows the paths to the dwelling of light. He is not the cosmic vending machine that rewards good behavior and punishes bad. The freedom and wildness of God is a source of terror and wonder — and ultimately, for Job, of encounter." },
  { color: PURPLE, title: "God's Answer Is Presence, Not Explanation", text: "Job demanded an explanation (31:35); what he received was an encounter (38:1). God does not explain why Job suffered. He never tells Job about the heavenly court scene. What he does is speak — the longest divine speech in the Bible — and in speaking he gives Job something more important than an explanation: a personal encounter with the living God. This is the book's deepest pastoral message: the answer to suffering is not theodicy but presence. The person who has met God can live with unanswered questions in ways the person who has only heard about God cannot." },
  { color: TEAL, title: "The Limits of Orthodoxy Without Compassion", text: "The friends are not heretics — their theology is largely the theology of Proverbs, the dominant wisdom tradition of Israel. The problem is not that they are wrong in every point but that they apply orthodox doctrine to a person's suffering without compassion, listening, or epistemic humility. They are more interested in defending God's justice as an abstraction than in serving the man in front of them. God's condemnation of them (42:7) is one of the most striking moments in Scripture: you can be doctrinally mostly correct and still sin grievously in how you apply that doctrine to a suffering person." },
  { color: RED, title: "Restoration Does Not Erase the Past", text: "The epilogue (42:10-17) is controversial: God restores Job's fortunes doubly. Some readers find this a tidy ending that undermines the book's realism — as if you can simply replace dead children with new ones. But the original children are still dead. The restoration does not undo the loss; it demonstrates that God's purposes are not exhausted by suffering, and that faithfulness through suffering will be honored. The epilogue is not a formula (\"suffer faithfully and you will be restored\") — it is a narrative witness that the same God who allowed Job's suffering is also the God of restoration and new life." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type JobTab = "overview" | "prologue" | "friends" | "protest" | "whirlwind" | "epilogue" | "themes" | "journal" | "videos";

export default function JobGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<JobTab>("vine_job_tab", "overview");
  const [openFriend, setOpenFriend] = useState<string | null>(null);
  const [openWind, setOpenWind] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_job_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_job_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

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
          <div style={{ display: "inline-block", background: `${BLUE}20`, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: BLUE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Wisdom · OT</div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>The Book of Job</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>The Bible&apos;s most searching exploration of innocent suffering — the prose frame, the poetry of lament, the friends&apos; bad theology, Job&apos;s honest protest, and the God who answers from the whirlwind.</p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? BLUE : BORDER}`, background: activeTab === t.id ? `${BLUE}20` : "transparent", color: activeTab === t.id ? BLUE : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[["Author", "Unknown"], ["Genre", "Wisdom / Drama"], ["Setting", "Land of Uz (uncertain)"], ["Date", "Disputed (pre-Mosaic?)"], ["Key Theme", "Innocent Suffering"], ["Key Verse", "Job 42:5"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Job is the Old Testament&apos;s most profound engagement with the question of suffering — not suffering in general, but innocent suffering. The book is careful to establish Job&apos;s righteousness beyond any doubt before the suffering begins. This is the whole point: the book is not about whether suffering can come as punishment for sin (it can), but about what to do when it comes to someone who doesn&apos;t deserve it — and about whether faith in God can survive that experience.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The book has a distinctive literary structure: a prose prologue and epilogue (chapters 1-2 and 42:7-17) framing a massive poem (chapters 3-42:6). The prose sections use simple, almost folk-tale language. The poetry is some of the most sophisticated in the Hebrew Bible — dense, ambiguous, philosophically demanding. This structural contrast is not accidental: the prose world presents tidy categories (blameless man, suffering, restoration); the poetry explores what actually happens inside a person when those categories fail to hold.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>THE STRUCTURE OF JOB</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["1:1–2:13", "Prose Prologue", "Job's righteousness established; heavenly court scene; Job stripped of wealth, children, and health; three friends arrive and sit in silence for seven days."],
                  ["3:1-26", "Job's Opening Lament", "Job's famous curse of the day of his birth — wishing he had never existed rather than live in such suffering."],
                  ["4:1–31:40", "The Three Cycles of Debate", "Three rounds of speeches between Job and Eliphaz, Bildad, and Zophar — each friend defending retributive theology, Job insisting on his innocence and demanding to meet God."],
                  ["32:1–37:24", "Elihu's Speeches", "The young Elihu erupts in anger, offering a fourth perspective on Job's suffering — disciplinary rather than purely punitive."],
                  ["38:1–41:34", "God Speaks from the Whirlwind", "The longest divine speech in the Bible — a tour of creation's wonders, confronting Job with the scope of divine knowledge and the wildness of God's governance."],
                  ["42:1-6", "Job's Final Response", "Job's two-part response: silence (40:3-5) and then transformation — \"now my eye sees you\" (42:5)."],
                  ["42:7-17", "Prose Epilogue", "God condemns the friends, vindicates Job, and restores his fortunes doubly."],
                ].map(([ref, title, desc]) => (
                  <div key={ref} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ background: `${BLUE}20`, border: `1px solid ${BLUE}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: BLUE, fontWeight: 700, whiteSpace: "nowrap", alignSelf: "flex-start" }}>{ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{title}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "prologue" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Prologue: The Heavenly Court (Job 1–2)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The prologue is one of the most theologically loaded passages in the Old Testament. It establishes three things that the rest of the book depends on: (1) Job is genuinely and thoroughly righteous; (2) his suffering is the direct result of a heavenly court scene Job knows nothing about; (3) the question at stake is whether human beings can love God for God&apos;s own sake — rather than for the rewards they receive from him.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The &ldquo;accuser&rdquo; (Hebrew: the satan — literally the adversary, functioning here as a prosecuting attorney before God) raises the challenge: &ldquo;Does Job fear God for no reason? Have you not put a hedge around him and his house and all that he has, on every side? You have blessed the work of his hands, and his possessions have increased in the land. But stretch out your hand and touch all that he has, and he will curse you to your face&rdquo; (1:9-11). This is the book&apos;s central question.</p>
            </div>
            {[
              { ref: "1:1-5", color: GREEN, title: "Job's Righteousness Established", content: "The prologue is emphatic: \"There was a man in the land of Uz whose name was Job, and that man was blameless and upright, one who feared God and turned away from evil\" (1:1). God repeats this assessment word for word: \"there is none like him on the earth, a blameless and upright man, who fears God and turns away from evil\" (1:8). This is the most important sentence in the book for understanding everything that follows. Job did not suffer because he sinned. The friends' entire argument rests on a premise the prologue has already destroyed." },
              { ref: "1:6-12", color: GOLD, title: "The Heavenly Court Scene", content: "The satan brings his challenge before God. God points to Job; the satan proposes a test. God permits the removal of Job's blessings. What strikes readers as morally troubling — God allowing a loyal servant to suffer in order to prove a point — is precisely what the book forces us to wrestle with. The heavenly court scene is not given to resolve the theodicy problem; it is given so the reader can see clearly what is actually at stake in Job's story: whether genuine, uninterested devotion to God is possible in a creature who has received great blessings from him." },
              { ref: "1:13-22", color: RED, title: "Job Loses Everything", content: "In a single day, Job loses his livestock, his servants, and his ten children. The losses come in rapid sequence — four messengers, each arriving before the last finishes speaking. Job's response is one of the most famous in literature: \"Naked I came from my mother's womb, and naked shall I return. The LORD gave, and the LORD has taken away; blessed be the name of the LORD\" (1:21). In all this Job did not sin or charge God with wrong (1:22). He passes the first test — but the test is not over." },
              { ref: "2:1-10", color: BLUE, title: "Job Loses His Health", content: "The satan returns: Job will curse God if his body is struck. God permits the affliction of Job's person — loathsome sores from head to foot. Job scrapes himself with a broken piece of pottery. His wife, herself broken by grief, urges him to curse God and die (2:9). Job refuses: \"Shall we receive good from God, and shall we not receive evil?\" (2:10). Both prologue tests are passed. But the poetry section will show that passing the tests from the outside is not the same as being undamaged on the inside." },
              { ref: "2:11-13", color: TEAL, title: "The Friends Arrive and Sit Silent", content: "Job's three friends — Eliphaz, Bildad, and Zophar — hear of his suffering, come to comfort him, and when they see him can barely recognize him. They tear their robes, throw dust on their heads, and sit with him on the ground for seven days and seven nights without saying a word, for they saw that his suffering was very great (2:13). This is their best moment. They got it right in silence. It was when they started talking that things went wrong." },
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

        {activeTab === "friends" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: RED, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The Three Friends: Retributive Theology</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>Job&apos;s three friends — Eliphaz, Bildad, and Zophar — share a common theological framework: God rewards the righteous and punishes the wicked. This principle is not invented — it is the dominant wisdom tradition of the OT, expressed throughout Proverbs and Deuteronomy. It is generally true as a pattern. The problem is that they apply it mechanically to Job&apos;s situation, which means they end up insisting that Job must have sinned when the reader knows he has not.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>God&apos;s verdict in the epilogue is devastating: &ldquo;My anger burns against you and against your two friends, for you have not spoken of me what is right, as my servant Job has&rdquo; (42:7). The friends spoke orthodox doctrine and were condemned. Job spoke raw protest and was vindicated. The lesson is not that doctrine doesn&apos;t matter — it is that doctrine applied without compassion, humility, or attentiveness to particulars becomes falsehood.</p>
            </div>
            {FRIENDS_ERRORS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openFriend === String(i) ? f.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenFriend(openFriend === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${f.color}20`, border: `1px solid ${f.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: f.color, fontWeight: 700 }}>{f.ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{f.title}</div>
                      <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{f.error}</div>
                    </div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openFriend === String(i) ? "−" : "+"}</span>
                </button>
                {openFriend === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "14px 0 0" }}>{f.analysis}</p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginTop: 10 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>WHAT THE FRIENDS GOT RIGHT</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>They came (2:11). They sat in silence for seven days (2:13). These were right actions. Their theology was largely orthodox — the retribution principle is real and Proverbs affirms it. Their failure was not heresy but the misapplication of truth: imposing a framework onto a situation where it did not fit, then doubling down rather than listening. They valued their theology over the person in front of them. This is the sin that burned God&apos;s anger against them.</p>
            </div>
          </div>
        )}

        {activeTab === "protest" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Job&apos;s Honest Protest (Job 3–31)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The poetry section is dominated by Job&apos;s speeches — raw, anguished, accusatory, and magnificent. Job does not politely accept his situation. He curses the day of his birth (chapter 3), accuses God of treating him as an enemy (6:4, 16:12-14), demands a hearing before God (23:3-7), and finally issues a formal oath of innocence (chapter 31) and demands God answer him (31:35).</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>These speeches are not failures of faith — they are expressions of faith. Job protests to God, not away from God. He insists there is something wrong and that God should know about it. This is the posture of lament: directing honest pain toward the God who is responsible for the world, rather than either polite denial or atheistic despair. God vindicates this approach in the epilogue.</p>
            </div>
            {[
              { ref: "Job 3", color: RED, title: "The Curse of Birth", content: "\"Let the day perish on which I was born, and the night that said, 'A man is conceived.'\" Chapter 3 is Job's opening lament — and it is shocking in its intensity. He does not pray for healing. He wishes he had never existed. He asks why light is given to those in misery (3:20). This is not a momentary breakdown — it is a sustained poetic outburst that sets the emotional temperature of everything that follows. The intensity signals: this is a man who takes both God and suffering seriously. Easy comfort would dishonor both." },
              { ref: "Job 7:17-21", color: BLUE, title: "A Dark Echo of Psalm 8", content: "\"What is man, that you make so much of him, and that you set your heart on him, visit him every morning, test him every moment?\" Job takes the great celebration of human dignity from Psalm 8 (\"What is man that you are mindful of him?\") and inverts it into a complaint: why are you so obsessively attentive to me if only to bring suffering? This inversion is not blasphemy — it is honest engagement with the same God. Job is arguing from within the covenant relationship, not outside it." },
              { ref: "Job 13:15", color: GOLD, title: "Though He Slay Me", content: "\"Though he slay me, I will hope in him; yet I will argue my ways to his face.\" This is perhaps the most theologically dense sentence in Job. The first clause is raw faith — the commitment to trust God even if God kills him. The second clause is raw lament — I will still make my case to his face. The two clauses are inseparable: Job can argue because he trusts, and his trust is genuine precisely because it survives his argument. This is not polite submission; it is the fierce faith of a man who refuses to let go of God even while demanding answers." },
              { ref: "Job 19:25-27", color: TEAL, title: "My Redeemer Lives", content: "\"For I know that my Redeemer lives, and at the last he will stand upon the earth. And after my skin has been thus destroyed, yet in my flesh I shall see God, whom I shall see for myself, and my eyes shall behold, and not another.\" This is one of the most remarkable confessions of faith in the OT — emerging from the very depths of Job's suffering. He cannot explain his suffering but he affirms that there is a Redeemer who lives and that he will ultimately see God. The passage is one of the OT's strongest witnesses to resurrection hope, and Christians see it as pointing toward Jesus as the living Redeemer." },
              { ref: "Job 31:35-37", color: PURPLE, title: "The Final Challenge", content: "\"Oh, that I had one to hear me! (Here is my signature! Let the Almighty answer me!) Oh, that I had the indictment written by my adversary!\" Job's final move is to demand a formal hearing — he signs his name to his complaint and asks for a written indictment. This is not impiety but the ultimate expression of covenant engagement: I am a party to this relationship, and I demand to be treated as one. God answers — from the whirlwind, not from a courtroom — but he does answer. The demand for God was right; the expectation of a forensic hearing was too small." },
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

        {activeTab === "whirlwind" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>God Speaks from the Whirlwind (Job 38–41)</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: BLUE, fontSize: 16, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;Then the LORD spoke to Job out of the storm. He said: Who is this that obscures my plans with words without knowledge? Brace yourself like a man; I will question you, and you shall answer me.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Job 38:1-3 — the opening of the divine speech</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>God&apos;s answer to Job is the longest divine speech in the Bible — and it never once mentions Job&apos;s suffering. It does not explain why Job suffered. It does not vindicate Job against the friends. It does not discuss the heavenly court scene. What it does is take Job on a tour of creation&apos;s wildness and wonder, asking question after question: Where were you when I laid the foundation of the earth? Can you bind the chains of the Pleiades? Do you know when the mountain goats give birth?</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>This seems at first like a devastating non-answer. But something remarkable happens to Job: he is transformed. Not because he received an explanation, but because he encountered God himself. The whirlwind speech does not solve the problem of suffering — it reveals the God who is present in it.</p>
            </div>
            {WHIRLWIND_ITEMS.map((w, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openWind === String(i) ? w.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                <button type="button" onClick={() => setOpenWind(openWind === String(i) ? null : String(i))}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: `${w.color}20`, border: `1px solid ${w.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: w.color, fontWeight: 700 }}>{w.ref}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{w.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{openWind === String(i) ? "−" : "+"}</span>
                </button>
                {openWind === String(i) && (
                  <div style={{ padding: "0 22px 18px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "14px 0 0" }}>{w.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "epilogue" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Restoration (Job 42:7-17)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The epilogue restores Job — doubly. He receives twice what he had before. He has seven more sons and three more daughters (the daughters notably named and given an inheritance alongside their brothers, which was unusual). He lives 140 more years and sees four generations of descendants.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>But first, God condemns the friends and vindicates Job — and Job intercedes for his friends. The man who has just suffered immeasurably becomes the intercessor for those who wronged him. This is one of the most quietly powerful moments in the book: before his own restoration is described, Job prays for those who hurt him. And the LORD restored the fortunes of Job, when he had prayed for his friends (42:10).</p>
            </div>
            {[
              { ref: "42:7-9", color: RED, title: "God Condemns the Friends", content: "\"My anger burns against you and against your two friends, for you have not spoken of me what is right, as my servant Job has.\" God's condemnation of the friends is the book's most important verdict — more important than Job's restoration. Right speech about God in the context of suffering matters. The friends thought they were defending God; they were falsifying him. Job thought he was accusing God; he was engaging him honestly. Honest lament is truer speech about God than pious platitudes that protect a doctrine at the expense of a person." },
              { ref: "42:10", color: GOLD, title: "Job Intercedes for His Friends", content: "\"And the LORD restored the fortunes of Job, when he had prayed for his friends.\" The sequence matters: restoration comes after intercession. Job has every reason to demand justice against the friends who tortured him with false theology. Instead he prays for them. This is not explained or commented on — it is simply narrated. The forgiveness and intercession of the sufferer for those who wronged him prefigures the greater Sufferer who would pray from the cross: Father, forgive them." },
              { ref: "42:11-17", color: GREEN, title: "Double Restoration", content: "The LORD gives Job twice as much as he had before (42:10) — the doubling is the legal formula for restitution when wrongful loss has occurred (cf. Exodus 22:4). Daughters are named (Jemimah, Keziah, Keren-happuch) and given inheritance alongside sons. Job sees four generations and dies old and full of days. The restoration is real and generous — but it does not erase the suffering. The original children are still dead. Job's body still bears the memory of those months of affliction. Restoration is not erasure; it is new life that carries the weight of what came before." },
              { ref: "Job and Jesus", color: PURPLE, title: "Job as Christological Type", content: "The NT sees Job as a type pointing toward Christ — the truly innocent Sufferer, the righteous one who bore suffering he did not deserve, who interceded for others from within his affliction, whose suffering led to vindication and restoration. The book ends with Job alive and honored; the greater story ends with resurrection. Job 19:25-27 (\"I know that my Redeemer lives... in my flesh I shall see God\") is one of the OT's clearest forward glances toward the resurrection hope that the NT announces as accomplished fact." },
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

        {activeTab === "themes" && (
          <div>
            {THEMES.map(t => (
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
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Job Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record your reflections on suffering, lament, God&apos;s presence in pain, and what Job teaches you about faith in darkness.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Passage</label><textarea rows={2} value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Job 1:21, Job 13:15, Job 19:25-27, Job 38:4, Job 42:5" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label><textarea rows={4} value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What does this passage teach you about God, suffering, lament, or honest faith? Have you seen this in your own life?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer response</label><textarea rows={3} value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="How are you praying in response to what you've encountered in Job?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={saveEntry} style={{ alignSelf: "flex-start", background: BLUE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{jSaved ? "Saved ✓" : "Save Entry"}</button>
              </div>
            </div>
            {jEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {jEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span><button type="button" onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button></div>
                    {e.verse && <div style={{ marginBottom: 8 }}><span style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.verse}</p></div>}
                    {e.reflection && <div style={{ marginBottom: 8 }}><span style={{ color: BLUE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Reflection</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.reflection}</p></div>}
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
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on Job</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Sermons and lectures on Job&apos;s suffering, the friends&apos; bad theology, God&apos;s whirlwind speech, and what the book teaches about innocent suffering and honest faith.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "xQwnH8th_fs", title: "The Book of Job Overview", channel: "BibleProject", description: "BibleProject's animated overview of Job — the structure of the book, the heavenly court scene, the friends' retributive theology, the whirlwind speech, and Job as a type pointing toward Jesus Christ." },
                  { videoId: "SQ63HaODVY4", title: "Why Does God Allow Suffering?", channel: "Tim Keller", description: "Keller on Job and the problem of suffering — why the friends' answer is wrong, what honest lament looks like, and how the gospel transforms our experience of unexplained suffering." },
                  { videoId: "5F-6n_2XkLI", title: "The Whirlwind Speech", channel: "Desiring God", description: "An exploration of God's answer to Job from the whirlwind — why God's response is more satisfying than an explanation, and how the encounter with the living God transforms suffering." },
                  { videoId: "OKL6FGzZKLM", title: "Job and the Silence of God", channel: "Gospel Coalition", description: "A pastoral treatment of Job for those in suffering — the legitimacy of lament, what to say and not say to someone who is suffering, and the strange comfort of Job's story for people in pain today." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: BLUE, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
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
