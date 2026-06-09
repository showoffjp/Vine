"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const ACCENT = GOLD;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "love", label: "I Have Loved You" },
  { id: "covenant", label: "Covenant Disputes" },
  { id: "return", label: "Return to Me" },
  { id: "tithe", label: "Testing God" },
  { id: "sunofright", label: "Sun of Righteousness" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type MalTab = "overview" | "love" | "covenant" | "return" | "tithe" | "sunofright" | "themes" | "journal" | "videos";

const LOVE_SECTIONS = [
  {
    color: GOLD,
    title: "I Have Loved You, Says the LORD — Malachi 1:2",
    body: "'I have loved you, says the LORD. But you say, How have you loved us? Is not Esau Jacob's brother? declares the LORD. Yet I have loved Jacob but Esau I have hated.' Malachi's structure is the disputation oracle: God makes a statement, the people push back, God responds. The book opens with an affirmation of love — and the people's immediate cynical question: 'How?' The question reveals something about their state: they have been in the land long enough, experienced enough disappointment, that they are no longer sure they are loved. They want evidence. The whole book is God's answer to that question.",
  },
  {
    color: TEAL,
    title: "Jacob and Esau — Election and Love",
    body: "The reference to Jacob and Esau picks up on one of the foundational themes of the Torah: God's sovereign choice of Israel (Jacob) rather than Edom (Esau) is the basis of their special relationship. Paul quotes this passage in Romans 9:13 to illustrate the doctrine of election. In Malachi's context, the point is specific: look at what has happened to Edom (now a wasteland) compared to Israel (returned from exile). The covenant love God has shown is evident in the distinction. The people's failure to perceive it is a failure of memory and attention.",
  },
  {
    color: RED,
    title: "The Disrespectful Priests — Malachi 1:6–8",
    body: "'A son honors his father, and a servant his master. If then I am a father, where is my honor? And if I am a master, where is my fear? says the LORD of hosts to you, O priests, who despise my name. But you say, How have we despised your name? By offering polluted food upon my altar. But you say, How have we polluted you? By saying that the LORD's table may be despised. When you offer blind animals in sacrifice, is that not evil? And when you offer those that are lame or sick, is that not evil? Present that to your governor; will he accept you or show you favor? says the LORD of hosts.' The priests are bringing second-rate offerings — the blind, lame, and sick animals that were unacceptable for sale. What they would not give to a human governor, they offer to God.",
  },
  {
    color: PURPLE,
    title: "The Weariness of God's People",
    body: "The community Malachi addresses has a specific spiritual disease: cynical weariness. They are not flagrant rebels; they are people who have been faithful for a long time, seen their circumstances not dramatically improve, and begun to wonder whether it is worth it. 'You have wearied the LORD with your words' (2:17). 'It is vain to serve God. What is the profit of our keeping his charge or of walking as in mourning before the LORD of hosts?' (3:14). This is not atheism but something more insidious: weary, half-hearted religious performance from people who have lost the sense that God is real and responsive.",
  },
];

const COVENANT_SECTIONS = [
  {
    color: RED,
    title: "The Covenant with Levi — Malachi 2:4–7",
    body: "'My covenant with him was one of life and peace, and I gave them to him. It was a covenant of fear, and he feared me. He stood in awe of my name. True instruction was in his mouth, and no wrong was found on his lips. He walked with me in peace and uprightness, and he turned many from iniquity. For the lips of a priest should guard knowledge, and people should seek instruction from his mouth, for he is the messenger of the LORD of hosts.' Malachi describes the original Levitical priesthood as a high calling: walking with God in peace and uprightness, teaching truly, turning people from sin. The present priests have abandoned every element of this calling.",
  },
  {
    color: GOLD,
    title: "Have We Not All One Father? — Malachi 2:10",
    body: "'Have we not all one Father? Has not one God created us? Why then are we faithless to one another, profaning the covenant of our fathers?' Malachi widens his lens: the covenant breaches are not only with God but with one another. The horizontal betrayals — the treacherous divorce of the wives of their youth (2:14–16), the false dealing between neighbors — are all of a piece with the vertical breach of covenant with God. Vertical and horizontal faithfulness are inseparable.",
  },
  {
    color: TEAL,
    title: "The LORD Hates Divorce — Malachi 2:13–16",
    body: "'And this second thing you do. You cover the LORD's altar with tears, with weeping and groaning because he no longer regards the offering or accepts it with favor from your hand. But you say, Why does he not? Because the LORD was witness between you and the wife of your youth, to whom you have been faithless, though she is your companion and your wife by covenant... So guard yourselves in your spirit, and let none of you be faithless to the wife of your youth.' The tears on the altar belong to the abandoned wives. God refuses to receive the offerings of men who have broken covenant with the wives of their youth. Liturgical faithfulness cannot substitute for relational faithfulness.",
  },
  {
    color: BLUE,
    title: "Wearisome Moral Cynicism — Malachi 2:17",
    body: "'You have wearied the LORD with your words. But you say, How have we wearied him? By saying, Everyone who does evil is good in the sight of the LORD, and he delights in them. Or by asking, Where is the God of justice?' This is one of the sharpest diagnoses in the book: the people have slipped into moral cynicism — either denying that God judges evil, or despairing that he ever will. Both responses come from a God who seems unresponsive. Malachi's answer is: God is coming in judgment and purification, and sooner than they expect.",
  },
];

const RETURN_BODY = `'Return to me, and I will return to you, says the LORD of hosts. But you say, How shall we return? Will man rob God? Yet you are robbing me. But you say, How have we robbed you? In your tithes and contributions.' (Malachi 3:7–8)

The command 'Return to me' is one of the great refrains of the prophetic tradition (Zechariah 1:3, Jeremiah 3:14, Joel 2:12). It assumes that distance has opened — not that the relationship is over but that it needs to be renewed. God's word is simple: come back. My response will be immediate: I will come back to you.

Then the people ask: 'How shall we return?' This is partly genuine confusion and partly deflection — the question that delays action. God answers by naming something specific: tithes and contributions. You are robbing me.

The accusation of robbing God is shocking. In what sense has a finite creature robbed an infinite Creator? In the same sense that a child robs a father when they receive provision but refuse to acknowledge the source. The tithe (a tenth of produce and livestock) was not payment for God's services; it was an act of acknowledgment that everything belongs to God and the tenth is returned as testimony to that truth. Withholding it was not merely greed but a theological statement: this is mine, not yours.

The parallel the book establishes is telling: priests offer lame animals (chapter 1), the people withhold tithes (chapter 3). Both are forms of the same behavior — giving God the minimum, keeping the best for ourselves. Both are symptoms of the cynical weariness that pervades the community.

The remedy — 'Bring the full tithes into the storehouse' — is paired with an extraordinary invitation: 'Test me in this... if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need' (3:10). This is one of only two places in Scripture where God explicitly invites his people to test him (the other is Isaiah 7:12, where Ahaz refuses). The challenge is: try it. See if God responds to covenant faithfulness. The promise is not of health and wealth but of enough — 'until there is no more need.' The test is not a transaction but an act of trust.`;

const SUNOFRIGHT_SECTIONS = [
  {
    color: GOLD,
    title: "The Distinction — Malachi 3:16–18",
    body: "'Then those who feared the LORD spoke with one another. The LORD paid attention and heard them, and a book of remembrance was written before him of those who feared the LORD and esteemed his name. They shall be mine, says the LORD of hosts, in the day when I make up my treasured possession, and I will spare them as a man spares his son who serves him. Then once more you shall see the distinction between the righteous and the wicked, between one who serves God and one who does not serve him.' The 'book of remembrance' is for those who persisted in fearing God even when the cynical majority asked what the profit of it was. God pays attention to those who speak of him to one another. They will be his treasured possession.",
  },
  {
    color: TEAL,
    title: "The Sun of Righteousness — Malachi 4:2",
    body: "'But for you who fear my name, the sun of righteousness shall rise with healing in its wings. You shall go out leaping like calves from the stall.' The image is of sunrise after a long night — specifically, the warmth and healing that the sun brings. The 'wings' of the sun are its rays. 'Healing in its wings' suggests that the coming of God's righteousness will not merely illuminate but restore, cure, make whole what has been broken. The calves leaping from the stall after being kept in all winter is a picture of unbounded, exuberant joy. This verse has been applied to Christ in Christian tradition — the Sun of Righteousness who rises at the incarnation and whose wings of healing cover all who come under them.",
  },
  {
    color: PURPLE,
    title: "Elijah Is Coming — Malachi 4:5–6",
    body: "'Behold, I will send you Elijah the prophet before the great and awesome day of the LORD comes. And he will turn the hearts of fathers to their children and the hearts of children to their fathers, lest I come and strike the land with a decree of utter destruction.' The final promise of the OT is the announcement of a coming Elijah figure — a forerunner who will prepare the people before the Day of the LORD. Jesus identifies John the Baptist as this Elijah (Matthew 11:14, 17:12–13; Mark 9:13). The last word of the Hebrew Bible (or the last of the OT in Christian ordering) is a promise of preparation — the 400 years of prophetic silence that follow are not abandonment but waiting for the forerunner, and through him, for the LORD himself to come.",
  },
  {
    color: RED,
    title: "The 400 Years of Silence",
    body: "After Malachi, there is no prophetic voice in Israel for approximately 400 years — until John the Baptist appears in the wilderness (Luke 3:2–3). This silence was not the silence of divine absence but of divine patience. The promises of Malachi 3:1 (I am sending my messenger to prepare the way before me) and 4:5–6 (Elijah will come before the great day) were being kept — just on a timetable the people could not see. When the angel Gabriel tells Zechariah that his son John will go before the Lord 'in the spirit and power of Elijah' (Luke 1:17), he is quoting Malachi 4:5–6. The silence breaks exactly where Malachi said it would.",
  },
];

const THEMES = [
  {
    color: GOLD,
    title: "Cynical Weariness",
    body: "Malachi's community is not in overt rebellion but in weary half-heartedness. They ask 'What's the point?' (3:14) and 'How have you loved us?' (1:2). This is the spiritual disease of the long-faithful who have stopped expecting God to show up. Malachi's antidote is not scolding but reminder: God has loved you (1:2), God remembers you (3:16), God is coming (3:1).",
  },
  {
    color: TEAL,
    title: "Return to Me",
    body: "'Return to me and I will return to you' — perhaps the most pastoral verse in Malachi. The relationship is not over. Distance has opened, not divorce. The initiative can come from the human side, and when it does, God's response is immediate and proportionate: if you return, I return.",
  },
  {
    color: RED,
    title: "Vertical and Horizontal Covenant",
    body: "Malachi consistently connects liturgical faithfulness and relational faithfulness. Priests offering lame animals / men divorcing faithful wives / people withholding tithes are all expressions of the same condition: a community that has stopped taking its covenant commitments seriously, to God or to one another.",
  },
  {
    color: PURPLE,
    title: "The Sun of Righteousness",
    body: "Malachi 4:2 — the sun rising with healing in its wings for those who fear God — is one of the most beautiful images in the OT. It speaks to the final state of those who have persisted through the cynical weariness and the long waiting: not vindication but healing, and not trembling but leaping like calves.",
  },
  {
    color: BLUE,
    title: "The Coming Elijah",
    body: "The OT ends with a forward-pointing promise: Elijah is coming to prepare the way. The 400 years of silence between Malachi and the NT are not empty; they are filled with this expectation. When John the Baptist appears, the silence breaks exactly where Malachi said it would. The bridge between the Testaments is a fulfilled prophecy.",
  },
  {
    color: GREEN,
    title: "God Pays Attention",
    body: "'The LORD paid attention and heard them, and a book of remembrance was written' (3:16). For those who feel unseen in their quiet faithfulness — who wonder if anyone notices that they still fear God when it would be easier not to — Malachi's answer is clear: God pays attention. He hears. He writes it down.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Malachi opens with 'I have loved you' — and the people ask 'How?' Where have you lost sight of the evidence of God's love? What would help you see it again?",
  "'Return to me and I will return to you' (3:7). Is there a distance that has opened between you and God? What would the first step of return look like?",
  "The community was asking 'What's the point of serving God?' (3:14). Have you ever felt that weariness? What sustained you through it?",
  "God invites the people to test him with the tithe (3:10). Where might God be inviting you to a similar act of trust — stepping out before you can see the results?",
  "Malachi 4:2 promises the sun rising with healing in its wings for those who fear God's name. What in your life most needs that kind of healing sunrise?",
];

export default function MalachiGuidePage() {
  const [tab, setTab] = usePersistedState<MalTab>("vine_malachi_tab", "overview");
  const [openLove, setOpenLove] = useState<string | null>(null);
  const [openCov, setOpenCov] = useState<string | null>(null);
  const [openSun, setOpenSun] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_malachi_journal");
      if (raw) setEntries(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim() && !prayer.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      verse: verse.trim(),
      reflection: reflection.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_malachi_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_malachi_journal", JSON.stringify(updated));
  }, [entries]);

  const inputStyle = {
    width: "100%", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 15,
    outline: "none", boxSizing: "border-box" as const,
  };
  const labelStyle = { display: "block", color: MUTED, fontSize: 13, marginBottom: 6, fontWeight: 600 };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

          {/* Hero */}
          <div style={{ background: `linear-gradient(135deg, #1a1000 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
                <span style={{ color: MUTED, fontSize: 14 }}>4 Chapters · ~450 BC · The Last OT Prophet</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Malachi
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                The last prophet before 400 years of silence — speaking to a weary, cynical people with three words: <em style={{ color: TEXT }}>"I have loved you."</em> And a promise: the sun of righteousness is coming with healing in its wings.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as MalTab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Malachi is the last book of the OT — the final prophetic voice before the 400 years of silence that precede John the Baptist. It addresses a community that is neither in overt rebellion nor in genuine faithfulness, but in the dangerous middle ground of cynical weariness.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Malachi (or 'my messenger')" },
                    { label: "Date", value: "~450 BC" },
                    { label: "Context", value: "Post-exile; after Nehemiah's reforms" },
                    { label: "Chapters", value: "4" },
                    { label: "Structure", value: "Six disputation oracles" },
                    { label: "Key Verse", value: "Malachi 3:7, 4:2" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Opening Word and the Closing Promise</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                      <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6 }}>
                        "I have loved you, says the LORD."
                      </p>
                      <cite style={{ color: MUTED, fontSize: 13 }}>— Malachi 1:2 (ESV) — opening word of the book</cite>
                    </blockquote>
                    <blockquote style={{ borderLeft: `4px solid ${GOLD}`, paddingLeft: 20, margin: 0 }}>
                      <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 6 }}>
                        "But for you who fear my name, the sun of righteousness shall rise with healing in its wings. You shall go out leaping like calves from the stall."
                      </p>
                      <cite style={{ color: MUTED, fontSize: 13 }}>— Malachi 4:2 (ESV) — near the closing promise</cite>
                    </blockquote>
                  </div>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Mal 1:2", desc: "I have loved you, says the LORD — the opening affirmation of love" },
                      { ref: "Mal 1:6–8", desc: "Polluted offerings — lame, blind, sick animals brought to God" },
                      { ref: "Mal 2:4–7", desc: "The covenant with Levi — the high calling of the priesthood" },
                      { ref: "Mal 2:10", desc: "Have we not all one Father? — horizontal covenant faithfulness" },
                      { ref: "Mal 2:13–16", desc: "The LORD hates divorce — tears on the altar from abandoned wives" },
                      { ref: "Mal 3:1", desc: "I am sending my messenger to prepare the way before me" },
                      { ref: "Mal 3:7", desc: "Return to me and I will return to you" },
                      { ref: "Mal 3:8–10", desc: "Test me in this — bring the full tithe; I will open the windows of heaven" },
                      { ref: "Mal 3:14–15", desc: "What is the profit of serving God? — the cynics' question" },
                      { ref: "Mal 3:16–17", desc: "The book of remembrance — God pays attention to those who fear him" },
                      { ref: "Mal 4:2", desc: "Sun of righteousness with healing in its wings" },
                      { ref: "Mal 4:5–6", desc: "Elijah is coming — the final promise before 400 years of silence" },
                    ].map(p => (
                      <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 80, paddingTop: 2 }}>{p.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* LOVE */}
            {tab === "love" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>I Have Loved You</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Malachi opens with an affirmation, not an accusation: God loved Israel. The people's immediate pushback — 'How?' — reveals the spiritual condition the book will address throughout.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {LOVE_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenLove(openLove === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openLove === s.title ? "−" : "+"}</span>
                      </button>
                      {openLove === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* COVENANT */}
            {tab === "covenant" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Covenant Disputes</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Malachi chapter 2 contains Malachi's most comprehensive indictment: priests have corrupted the covenant with Levi, men have been faithless to their wives, and the community has slipped into moral cynicism.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {COVENANT_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenCov(openCov === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openCov === s.title ? "−" : "+"}</span>
                      </button>
                      {openCov === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RETURN */}
            {tab === "return" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Return to Me</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Malachi 3:7–10 contains both the most urgent invitation ('Return to me') and the most unusual divine challenge ('Test me in this') in the book. Together they describe what genuine covenant return looks like and what it produces.</p>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "Return to me, and I will return to you, says the LORD of hosts."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Malachi 3:7 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  {RETURN_BODY.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: i < RETURN_BODY.split('\n\n').length - 1 ? 16 : 0 }}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* TITHE */}
            {tab === "tithe" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Testing God with the Tithe</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Malachi 3:10 is one of only two places in Scripture where God explicitly invites his people to test him. The challenge is not a transaction but an act of covenant trust — and the response God promises is extraordinary.</p>
                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the LORD of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Malachi 3:10 (ESV)</cite>
                  </blockquote>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
                  {[
                    { color: GOLD, title: "What the Tithe Was", body: "A tenth of produce and livestock returned to God — not payment for services but an acknowledgment that everything belongs to God. The tenth is the testimony; withholding it is a theological statement: 'this is mine, not yours.'" },
                    { color: TEAL, title: "The 'Storehouse'", body: "The Temple treasury, used to support the Levites and priestly service (Nehemiah 10:38-39). The tithe was the material infrastructure of worship. Withholding it defunded the very system designed to sustain communal encounter with God." },
                    { color: PURPLE, title: "Windows of Heaven", body: "The same language as Genesis 7:11 and 2 Kings 7:2 — an image of abundant provision. The blessing is not specified as wealth; it is 'until there is no more need.' Sufficiency, not excess, is the promised outcome of faithful generosity." },
                    { color: RED, title: "The NT Principle", body: "2 Corinthians 9:6-7: 'Whoever sows sparingly will also reap sparingly... for God loves a cheerful giver.' The NT does not specify a tithe but carries the same logic: generosity grounded in trust, not calculation. The test of the tithe is a test of whether you believe God is your provider." },
                  ].map(item => (
                    <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, padding: "18px 20px" }}>
                      <div style={{ color: item.color, fontWeight: 700, marginBottom: 8 }}>{item.title}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUN OF RIGHTEOUSNESS */}
            {tab === "sunofright" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Sun of Righteousness</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Malachi 3:16–4:6 closes the OT on notes of memory, promise, and hope — for those who fear God, for the Day of the LORD, for the coming forerunner.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {SUNOFRIGHT_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenSun(openSun === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openSun === s.title ? "−" : "+"}</span>
                      </button>
                      {openSun === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 24 }}>Major Themes</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
                  {THEMES.map(t => (
                    <div key={t.title} style={{ background: CARD, border: `1px solid ${t.color}33`, borderRadius: 12, padding: "20px 22px" }}>
                      <button onClick={() => setOpenTheme(openTheme === t.title ? null : t.title)}
                        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h3 style={{ color: t.color, fontWeight: 700, margin: 0, fontSize: 15 }}>{t.title}</h3>
                          <span style={{ color: MUTED, fontSize: 18 }}>{openTheme === t.title ? "−" : "+"}</span>
                        </div>
                      </button>
                      {openTheme === t.title && (
                        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, marginTop: 10, marginBottom: 0 }}>{t.body}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* JOURNAL */}
            {tab === "journal" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Malachi speaks to the weary and the cynical — those who have been faithful for a long time and wonder if it matters. Use this space to be honest about where you are.</p>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {PROMPTS.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 20 }}>New Entry</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Verse or passage</label>
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Malachi 3:7" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Reflection</label>
                      <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="What does this passage stir in you?" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Prayer</label>
                      <textarea value={prayer} onChange={e => setPrayer(e.target.value)} placeholder="Respond to God in prayer..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <button onClick={saveEntry}
                      style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", fontWeight: 700, cursor: "pointer", fontSize: 15, alignSelf: "flex-start" }}>
                      {saved ? "Saved!" : "Save Entry"}
                    </button>
                  </div>
                </div>
                {entries.length > 0 && (
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Your Entries</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {entries.map(e => (
                        <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                            <div>
                              <div style={{ fontWeight: 700, color: ACCENT, fontSize: 14 }}>{e.verse || "No verse"}</div>
                              <div style={{ color: MUTED, fontSize: 12 }}>{e.date}</div>
                            </div>
                            <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                          </div>
                          {e.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Reflection:</strong> {e.reflection}</p>}
                          {e.prayer && <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VIDEOS */}
            {tab === "videos" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Video Teaching</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Explore Malachi through video — the last OT prophet, the challenge to weary half-heartedness, and the promise of the sun rising with healing.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="HPGShSFOLnE" title="The Book of Malachi" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Book of Malachi — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="juPvv_xcX-U" title="Haggai (companion prophet)" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Haggai — Malachi's post-exile companion prophet</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="ym6WM-QB5oM" title="Zechariah" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Zechariah — the third post-exile prophet in this trilogy</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="feBP_oLtN5E" title="The Prophets" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>How to read the OT prophets</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
