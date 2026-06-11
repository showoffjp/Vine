"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "God Specifically Protects the Single Parent and the Fatherless", verse: "Psalm 68:5", body: "'A father to the fatherless, a defender of widows, is God in his holy dwelling' (Psalm 68:5). This is not a metaphor — it is a specific declaration about who God attends to with priority. The single parent and the child without a present parent are specifically named in Scripture as people God claims a particular care for. You are not navigating this alone in a theological sense. The God who names himself defender of widows and father to the fatherless has made this his specific concern." },
  { title: "God Sees the Single Parent in the Wilderness", verse: "Genesis 21:19", body: "When Hagar was alone in the wilderness with her son Ishmael, running out of water, and laid her child under a bush so she didn't have to watch him die — God opened her eyes to a well. The text records God's hearing of the child's crying, his appearing to Hagar, and his provision. He did not send her a perfect social support network. He provided water where she was. His provision for the single parent may not look like what you would design; but his attentiveness to your specific need is consistent throughout Scripture." },
  { title: "The Early Church Cared for Single Parents as a Defining Practice", verse: "James 1:27", body: "'Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world' (James 1:27). The early church's care for widows was a defining communal practice — so important that it generated the institution of deacons (Acts 6). The single parent in any era is heir to this tradition. What God asked the early church to be for single parents, the church is still called to be. You have a theological claim on the community's care." },
  { title: "Limits Are Real and You Cannot Do Everything", verse: "Ecclesiastes 4:6", body: "'Better one handful with tranquility than two handfuls with toil and chasing after the wind' (Ecclesiastes 4:6). Single parenting is structurally under-resourced — you are doing work designed for two people. This produces real limits on what you can accomplish and how well you can parent while also sustaining yourself. Accepting those limits — saying no to good things so you have capacity for essential things — is wisdom, not failure." },
  { title: "You Are Enough for the Job You Have Been Given", verse: "Philippians 4:13", body: "'I can do all this through him who gives me strength' (Philippians 4:13). Paul wrote this not from a position of abundance but from prison. The declaration is not that Philippians 4:13 produces invincibility — it is that the strength available from Christ is sufficient for the specific task set before you. You are sufficient for the parenting of your specific children, not with your own resources but with the help available from a God who does not call without equipping." },
];

const VOICES = [
  { id: "warren", name: "Kay Warren", era: "1956–present", context: "Single parent advocate; mental health and family ministry", bio: "Warren's advocacy for families in crisis, including single-parent families, comes from her pastoral heart and her personal experience with the messiness of family life. Her emphasis on the church as an extended family — particularly for those navigating family structures that do not fit the two-parent nuclear ideal — speaks directly to single parents who often feel invisible in church contexts.", quote: "The church was designed to be the extended family for those who do not have the family they need. Single parents should find in the church what they cannot find elsewhere: people who will step in, show up, provide childcare, offer presence. That is not charity — it is the community functioning as it was designed to.", contribution: "Warren helped churches see single parents as a specific population requiring intentional welcome, support, and inclusion — not as a special project but as part of the core community." },
  { id: "rosberg", name: "Gary and Barb Rosberg", era: "Contemporary", context: "America's Family Coaches; single parent ministry", bio: "The Rosbergs have developed extensive resources for single parents within a Christian framework — addressing both the theological dignity of single parent families and the practical challenges of navigating parenting, finances, dating, and faith without a partner. Their approach honors the grief of how single parenthood often begins while providing concrete tools for flourishing.", quote: "Single parents carry more weight than the church usually acknowledges. The grief of a marriage ending or never beginning, the exhaustion of carrying it all, the loneliness of making every decision alone — these are real. What single parents need from the church is not programs. It is people who show up and stay.", contribution: "The Rosbergs provided both theological affirmation and practical support resources specifically for single parents — addressing the specific grief, logistics, and community needs of this often-overlooked population." },
  { id: "young", name: "Sandra Stanley", era: "Contemporary", context: "North Point Community Church; single parent ministry founder", bio: "Sandra Stanley (formerly Joiner) helped develop one of the most effective church-based single parent ministries in the country at North Point Community Church. Her work on what the church can practically do — childcare during services, mentor families, practical care — has been replicated in churches around the world.", quote: "Single parents often have to choose between attending church and having childcare for their children. That is not a theological problem — it is a logistical one that the church can solve. When we solve it, we double the number of people who can actually receive what the church has to offer.", contribution: "Stanley's practical church ministry model demonstrated that churches can take single parent support seriously with specific structural changes — not just sympathy — and provided a replicable model for others." },
];

const PRACTICES = [
  { title: "Build Your Village Intentionally", icon: "🏘️", color: GREEN, desc: "Single parenting requires community in a non-negotiable way. The 'village' that two-parent families can sometimes get by without is essential for single parents. Building that village requires intention and asking for specific help.", steps: ["Identify 3-5 people you can call in an emergency — and ask them explicitly to be that for you", "Ask your church if there is a single parent ministry or a way to connect with other single parents", "Look for a 'mentor family' — a two-parent family willing to include your children in some of their family activities", "Accept help when it is offered, specifically and concretely"] },
  { title: "Protect Your Own Spiritual Life", icon: "🙏", color: PURPLE, desc: "Single parents are at high risk for spiritual depletion — the constant demands leave little room for personal spiritual formation. Protecting even a small daily practice is essential for sustainability.", steps: ["Even 10 minutes of prayer or Scripture reading before the household wakes up makes a difference", "Let your children see you pray — this is spiritual formation for them too", "Find a church that has practical support for single parents, not just sympathetic sermons", "Consider a single parent small group — both for the spiritual community and the practical support"] },
  { title: "Be Honest with Your Children About Limits", icon: "💬", color: "#F59E0B", desc: "Children of single parents benefit from age-appropriate honesty about the family situation — not oversharing adult burdens, but not pretending that nothing is different either. Clear communication about why and how things work reduces anxiety.", steps: ["Use language appropriate to your child's developmental stage about your family situation", "Avoid making children feel responsible for your emotional wellbeing", "Maintain predictable routines — structure is stabilizing for children in changing situations", "Name the hard things: 'This is hard for both of us, and we are going to be okay'"] },
  { title: "Guard Against Overcompensation", icon: "⚖️", color: GREEN, desc: "Single parents commonly overcompensate for the absent parent's role — trying to be everything to their children. This is understandable, exhausting, and often counterproductive. You cannot be two parents.", steps: ["You are one parent, not two — accept the limits of what that means", "Your children need your best available parenting, not perfect parenting", "Seek out same-sex mentors for your children if you are a single parent of the opposite sex", "Let the church, school, and community help fill the gaps — this is not failure, it is wisdom"] },
];

const SCRIPTURE = [
  { verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling." },
  { verse: "James 1:27", text: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress." },
  { verse: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
  { verse: "Isaiah 40:11", text: "He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young." },
  { verse: "Psalm 146:9", text: "The LORD watches over the foreigner and sustains the fatherless and the widow." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function SingleParentingPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_single_parenting_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_single_parenting_voice", "warren");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type SingleParentJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [spJournal, setSpJournal] = useState<SingleParentJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_singleparentj_entries") ?? "[]"); } catch { return []; } });
  const [jspFeeling, setJspFeeling] = useState("");
  const [jspTruth, setJspTruth] = useState("");
  const [jspStep, setJspStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_singleparentj_entries", JSON.stringify(spJournal)); } catch {} }, [spJournal]);
  function saveSpEntry() {
    if (!jspFeeling.trim() && !jspTruth.trim()) return;
    setSpJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jspFeeling, truth: jspTruth, step: jspStep }, ...prev]);
    setJspFeeling(""); setJspTruth(""); setJspStep("");
  }
  function deleteSpEntry(id: string) { setSpJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>🧡</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Single Parenting</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.75 }}>
          God specifically claims the fatherless and the widow as his own.
          You are not doing this alone. Theology, community, and practical resources for single parents.
        </p>
        <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "14px 20px", maxWidth: 440, margin: "0 auto", fontSize: 14, color: "#B0D8BE", lineHeight: 1.7 }}>
          <strong>If you are in crisis:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline).<br />
          <strong>211.org</strong> for local family support resources
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0, flex: 1, paddingRight: 16 }}>{item.title}</h3>
                  <span style={{ fontSize: 12, color: GREEN, fontWeight: 700, whiteSpace: "nowrap", background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 6, padding: "3px 10px" }}>{item.verse}</span>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${selectedVoice === v.id ? GREEN : BORDER}`, background: selectedVoice === v.id ? `${GREEN}18` : "transparent", color: selectedVoice === v.id ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ marginBottom: 6 }}><span style={{ fontSize: 22, fontWeight: 900 }}>{voice.name}</span><span style={{ color: MUTED, fontSize: 13, marginLeft: 12 }}>{voice.era}</span></div>
              <div style={{ color: GREEN, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
              <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 18, margin: "0 0 20px", color: "#e0e0f0", fontSize: 15, fontStyle: "italic", lineHeight: 1.75 }}>&ldquo;{voice.quote}&rdquo;</blockquote>
              <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Contribution</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.steps.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: p.color, fontWeight: 900, fontSize: 13, minWidth: 20 }}>{j + 1}.</span>
                      <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {SCRIPTURE.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write about your experience of this season — what is exhausting, what is working, what you need, what you are grateful for. You are doing important work.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jspFeeling} onChange={e => setJspFeeling(e.target.value)}
                  placeholder="How am I doing today? What is hard, what is good, what do I need?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jspTruth} onChange={e => setJspTruth(e.target.value)}
                  placeholder="One true thing about God, my children, or my own capacity that I am holding onto..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jspStep} onChange={e => setJspStep(e.target.value)}
                  placeholder="One way I will care for myself or ask for help this week..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveSpEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {spJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your story is worth recording, even the hard parts.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {spJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteSpEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.feeling && <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.feeling}</p>}
                    {e.truth && <p style={{ color: GREEN, fontSize: 13, lineHeight: 1.65, marginBottom: 6 }}>✝ {e.truth}</p>}
                    {e.step && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic" }}>→ {e.step}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "t7RNRK47aEY", title: "God's Heart for Single Parents", channel: "Focus on the Family", description: "A pastoral and practical conversation about single parenting — what God's promises mean specifically for those raising children alone, and what the church's responsibility toward single parent families actually looks like." },
              { videoId: "kqiJSqAfP_Y", title: "Building Community as a Single Parent", channel: "North Point Community Church", description: "Sandra Stanley on how to build intentional community as a single parent, and what churches can practically do to include and support single parent families in their communities." },
              { videoId: "n4LbL85ZuSk", title: "Single Parent: Surviving and Thriving", channel: "Proverbs 31 Ministries", description: "Practical encouragement for single parents navigating the specific challenges of finances, time, exhaustion, and maintaining faith while raising children alone." },
              { videoId: "OkpFUx7-VEE", title: "Raising Kids Alone: Theology and Practice", channel: "The Gospel Coalition", description: "A theological and practical framework for single parenting within a Christian context — addressing both the dignity of single parent families and the specific challenges and resources available." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
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
