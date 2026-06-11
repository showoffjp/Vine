"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "message", label: "The Gospel Message" },
  { id: "motivation", label: "Motivation" },
  { id: "conversations", label: "Starting Conversations" },
  { id: "objections", label: "Common Objections" },
  { id: "models", label: "Models of Evangelism" },
  { id: "culture", label: "Culture of Witness" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const MESSAGE_ITEMS = [
  { id: "msg1", title: "The Gospel in One Sentence", ref: "1 Corinthians 15:3-4; John 3:16",
    body: "Paul's shortest gospel summary: 'Christ died for our sins according to the Scriptures, he was buried, he was raised on the third day according to the Scriptures' (1 Corinthians 15:3-4). The gospel is historical, theological, and personal: historical events (death, burial, resurrection) with theological meaning ('for our sins') rooted in prior revelation ('according to the Scriptures'). John 3:16 gives the motivational frame: the death of the Son is the expression of the Father's love for a world that had turned away. The gospel is not primarily a philosophy or a lifestyle — it is news about what God did in history." },
  { id: "msg2", title: "Creation: The World as It Was Meant to Be", ref: "Genesis 1:31; Psalm 8",
    body: "The gospel begins with creation — God made the world good (Genesis 1:31), made humans in his image (Genesis 1:26-27), and designed creation for flourishing and relationship with himself. This baseline matters: without a doctrine of creation, sin has no moral weight (it is just 'natural'), and salvation has no goal (save people from what, to do what?). Evangelism that begins with creation roots the gospel in the full story." },
  { id: "msg3", title: "The Fall: What Went Wrong", ref: "Genesis 3; Romans 3:23; Romans 6:23",
    body: "The Fall introduced sin, death, and cosmic disorder. Romans 3:23 — 'all have sinned and fall short of the glory of God.' Romans 6:23 — 'the wages of sin is death.' The problem is not merely behavioral (people do bad things) but relational (we have turned from God) and ontological (we are constitutionally bent toward self). This diagnosis matters: if sin is just bad behavior, the cure is moral improvement. If sin is turning from God and deserving death, the cure must be justification and reconciliation — which is what the gospel provides." },
  { id: "msg4", title: "Redemption: What God Did", ref: "Romans 5:8; 2 Corinthians 5:21; 1 Peter 2:24",
    body: "'God demonstrates his own love for us in this: while we were still sinners, Christ died for us' (Romans 5:8). The content of the gospel is specific: the substitutionary atonement of Jesus Christ. 'God made him who had no sin to be sin for us, so that in him we might become the righteousness of God' (2 Corinthians 5:21). The resurrection vindicates Jesus and inaugurates the new creation. Salvation involves: forgiveness of sins, justification (right standing before God), adoption (new identity as God's children), and the gift of the Spirit (new power for new life)." },
  { id: "msg5", title: "Response: What It Requires", ref: "Mark 1:15; Acts 2:38; Romans 10:9-10",
    body: "'Repent and believe the good news' (Mark 1:15) — Jesus's summary of the required response. Repentance is a genuine turning from sin and self as the center — not just guilt about particular actions but a re-orientation of the whole person toward God. Faith is trusting in what Christ has done — not the strength of one's faith but the object of faith (Christ) that matters. Acts 2:38 adds baptism as the public expression of repentance and faith. Romans 10:9-10 adds public confession. The response is not a formula to recite but a genuine reorientation of life." },
];

const MOTIVATION_DATA = [
  { color: PURPLE, title: "Love for God", body: "The person who has genuinely encountered the living God — experienced his mercy, known his forgiveness, been transformed by his grace — cannot be indifferent to his glory. God's glory among the nations is the missionary theme from Genesis 12 ('all peoples on earth will be blessed through you') through Revelation 7:9 (people from every nation before the throne). Evangelism that flows from love for God is sustainable; evangelism as duty produces burnout." },
  { color: TEAL, title: "Love for People", body: "'When he saw the crowds, he had compassion on them, because they were harassed and helpless, like sheep without a shepherd' (Matthew 9:36). Jesus's compassion for lost people precedes his sending of the disciples. The person who shares the gospel out of genuine love for the other — not to win an argument, not to grow a church statistic, not to check a duty box — is most effective. Evangelism is not sales; it is care." },
  { color: GOLD, title: "The Urgency of Eternity", body: "'How can they hear without someone preaching to them?' (Romans 10:14). The reality of heaven and hell — of eternity — is the ultimate context for evangelism. Universalism (everyone is saved regardless of response) removes urgency. The biblical view: those who die without faith in Christ face eternal separation from God. This is the most uncomfortable motivator, but Paul's anguish for his countrymen (Romans 9:1-3) — 'I could wish that I myself were cursed and cut off from Christ for the sake of my people' — shows what this motivator looks like when genuinely felt." },
  { color: BLUE, title: "Obedience to the Great Commission", body: "'Go and make disciples of all nations' (Matthew 28:19). The Great Commission is not a suggestion for the specially gifted — it is a command to the whole church. Not every believer is called to be an evangelist (Ephesians 4:11) in the specialized sense, but every believer is called to be a witness (Acts 1:8). Obedience to Christ's explicit command is a legitimate and sufficient motivation even when love and urgency feel distant." },
];

const CONVERSATION_STEPS = [
  { step: "01", color: BLUE, title: "Build genuine relationships", body: "Evangelism is most effective within the context of authentic relationship — people need to see the gospel lived before they hear it proclaimed. Invest in friendships with non-Christians without an agenda." },
  { step: "02", color: GREEN, title: "Listen well before speaking", body: "Ask questions about what someone believes, values, fears, and hopes for. Understanding where someone is before explaining the gospel prevents mismatched communication and shows genuine respect." },
  { step: "03", color: TEAL, title: "Look for natural bridges", body: "Suffering, questions about meaning, moral intuitions, spiritual curiosity, family grief — these are natural bridges to the gospel. Pay attention to what opens the door and walk through it rather than forcing entry." },
  { step: "04", color: GOLD, title: "Share your story", body: "Your personal testimony — what your life was like before, how you came to faith, what has changed — is non-falsifiable. No one can argue with your experience. Make sure your story includes the gospel content, not just personal benefit." },
  { step: "05", color: PURPLE, title: "Explain the gospel clearly", body: "Use the Creation-Fall-Redemption-Response framework or whatever approach you've internalized. Be willing to go slowly, ask if you're being understood, and avoid jargon." },
  { step: "06", color: RED, title: "Invite a response", body: "Ask: 'Is there any reason you wouldn't want to become a Christian?' or 'Does this make sense to you?' or 'Would you be willing to consider the claims of Jesus?' Direct invitation is more effective than waiting for the other person to ask. Many people come to faith simply because someone asked." },
];

const OBJECTIONS_ITEMS = [
  { id: "obj1", title: "\"All religions are the same\"", body: "This claim is not actually true — the world's religions have contradictory truth claims about God, salvation, ethics, and human nature. Christianity says Jesus is the unique Son of God who died for sin; Islam denies Jesus's death; Hinduism holds no personal God who saves. These cannot all be true. The claim usually means 'religion is useful for providing meaning and moral guidance' — to which the response is: the question is not which religion is useful but which is true. If Jesus actually rose from the dead, it matters enormously." },
  { id: "obj2", title: "\"A loving God wouldn't send people to hell\"", body: "Several responses: (1) The biblical picture is that people send themselves to hell by rejecting God throughout their lives — God does not force himself on those who don't want him; (2) The alternative — God forcing everyone to be with him against their will — is not obviously more loving; (3) Hell is the ultimate consequence of sin taking full effect without God's restraining grace; (4) The existence of hell is actually evidence of how serious moral evil is — God does not treat murder, genocide, and cruelty as if they don't ultimately matter." },
  { id: "obj3", title: "\"What about those who never heard?\"", body: "This is a genuine pastoral question, not just an intellectual objection. Responses: (1) Romans 1-2 establishes that all people have some revelation (creation and conscience); (2) The question of those who never heard is God's to answer justly — he will judge rightly; (3) The proper response to 'what about them?' is not reduced urgency to tell people but increased urgency: they need to hear; (4) The question is usually a deflection from the person asking's own response to the gospel they have heard." },
  { id: "obj4", title: "\"Christians are hypocrites\"", body: "Acknowledge: yes, Christians fail to live up to their beliefs. This is not a refutation of Christianity — it is exactly what Christianity teaches about human nature (we are simultaneously justified and sinful). The hypocrite who says 'I believe in being honest' but lies has not disproved honesty. But also: the accusation is often an expression of spiritual hunger — the person is actually applying a high moral standard and finding Christians fail it. That standard comes from somewhere. Where does their conviction about hypocrisy come from?" },
  { id: "obj5", title: "\"Science has disproved the Bible\"", body: "The most common form of this objection conflates specific empirical questions (evolution, cosmology) with metaphysical questions (is there a God? did Jesus rise?). Science is superb at measuring the natural world; it has nothing to say about whether supernatural events occurred, whether God exists, or what gives life meaning. The resurrection is a historical claim, not a scientific hypothesis. Many world-class scientists are Christians. The conflict thesis (science and Christianity are necessarily opposed) is historically inaccurate and philosophically confused." },
];

const MODELS_DATA = [
  { color: BLUE, title: "Proclamation Evangelism", body: "The classic model: a clear presentation of the gospel message with an invitation to respond. Street preaching (Wesley, Whitefield), gospel tracts, crusade evangelism (Billy Graham), and formalized gospel presentations (Four Spiritual Laws, Romans Road, Two Ways to Live). Strength: clear, portable, scalable. Risk: can feel impersonal or transactional without relational context." },
  { color: GREEN, title: "Relational/Lifestyle Evangelism", body: "Living as a Christian in the midst of ordinary relationships, allowing questions to arise naturally, and sharing the gospel in the context of genuine friendship. 'Be prepared to give an answer to everyone who asks you to give the reason for the hope that you have' (1 Peter 3:15). Strength: authentic, relationally rich. Risk: the gospel can become implicit and never actually get explained; the relationship becomes a reason not to risk it." },
  { color: TEAL, title: "Apologetics-Based Evangelism", body: "Engaging intellectual objections and making a reasoned case for Christianity. Tim Keller's The Reason for God is the landmark contemporary example. This model is especially effective with skeptical, educated non-Christians. Strength: takes objections seriously and can clear intellectual roadblocks. Risk: can intellectualize what is ultimately a spiritual transaction requiring Spirit-given faith." },
  { color: GOLD, title: "Service/Compassion Evangelism", body: "Meeting physical needs as an expression of the gospel, allowing deeds to open the door for words. Matthew 25, James 2, and the incarnation model (God became poor to save the poor) ground this approach. Strength: demonstrates the gospel's social dimensions; builds trust with the marginalized. Risk: without explicit proclamation, service becomes mere humanitarianism. Pope Paul VI: 'The church evangelizes when she seeks to convert... solely through the divine power of the message she proclaims.'" },
];

const CULTURE_POINTS = [
  { color: PURPLE, title: "Pray for People by Name", body: "Keep a list of non-Christian friends and family members you are praying for regularly. Prayer is not a preamble to evangelism — it is the foundation. Paul: 'My heart's desire and prayer to God for the Israelites is that they may be saved' (Romans 10:1). A church that prays for specific people to come to faith will see more people come to faith." },
  { color: GREEN, title: "Celebrate Conversions", body: "Luke 15: three parables about lost things found, each culminating in a party. A church that celebrates conversions communicates that they matter. When was the last time your church celebrated a new believer with visible joy? Culture is formed by what is celebrated." },
  { color: BLUE, title: "Train, Don't Just Command", body: "Most Christians feel guilty about not sharing their faith, not equipped to do it. Equipping is not just motivation — it is practical skills: knowing the gospel, being able to articulate it, practicing answers to common objections. A church that equips its people for witness will see more witness than one that only preaches about it." },
  { color: GOLD, title: "The Church's Presence in the Neighborhood", body: "Christians are 'the light of the world' and 'a city on a hill' (Matthew 5:14) — not a private club. The congregation's presence in its neighborhood — through serving, neighboring, and public justice — is itself a witness. Evangelism is not separate from how the community of faith lives in its place." },
];

const VIDEOS = [
  { videoId: "dAL1PIzEFG0", title: "How to Share the Gospel — Tim Keller" },
  { videoId: "k0JklIvPaOo", title: "The Message of the Gospel — John Piper" },
  { videoId: "l2Nkm9l9B5g", title: "Starting Spiritual Conversations — Beckett Cook" },
  { videoId: "Fgd9UqaBiMI", title: "Apologetics and Evangelism — Ravi Zacharias" },
  { videoId: "JvVj8d7Wmbk", title: "Why Every Christian Must Evangelize — Mark Dever" },
];

export default function EvangelismGuide() {
  const [tab, setTab] = usePersistedState<string>("vine_evang_tab", "overview");
  const [msgOpen, setMsgOpen] = usePersistedState<string>("vine_evang_msg", "");
  const [objOpen, setObjOpen] = usePersistedState<string>("vine_evang_obj", "");
  const [journal, setJournal] = usePersistedState<string>("vine_evang_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string }[],
    openKey: string,
    setOpen: (v: string) => void
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? "rgba(58,125,86,0.07)" : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
        </div>
      )}
    </div>
  ));

  const cards4 = (items: { color: string; title: string; body: string }[]) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {items.map((p, i) => (
        <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
          <h3 style={{ fontWeight: 800, color: p.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{p.title}</h3>
          <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{p.body}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(58,125,86,0.12)", border: `1px solid rgba(58,125,86,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: GREEN, fontWeight: 600, marginBottom: "1rem" }}>
            MINISTRY · EVANGELISM
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Sharing Your Faith: A Comprehensive Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            Evangelism is not a specialist activity for the gifted few — it is the calling of every follower of Christ. A comprehensive guide to the gospel message, the motivation for sharing it, how to start conversations, answer objections, and build a culture of witness.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? GREEN : BORDER}`, background: tab === t.id ? "rgba(58,125,86,0.12)" : "transparent", color: tab === t.id ? GREEN : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(58,125,86,0.07)", border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Why Evangelism Is Hard — And Why It Matters</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                Most Christians feel guilty about not sharing their faith and aren't sure why they don't — or why it's so hard. The barriers are real: fear of rejection, not knowing what to say, concern about offending. But the command is clear ('Go and make disciples'), the need is urgent (people are perishing without the gospel), and the power is available (the Spirit goes with the word). This guide is about overcoming the barriers with theology and practical tools.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                D.L. Moody: <em>"The world has yet to see what God will do with a man fully consecrated to him."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {[{ color: GREEN, icon: "📢", title: "Good News", body: "The gospel is not a moral system or a lifestyle brand. It is news — historical events with eternal implications." },
                { color: BLUE, icon: "❤️", title: "Motivated by Love", body: "Sustainable evangelism flows from love for God and love for people — not guilt, performance, or church growth pressure." },
                { color: GOLD, icon: "⚡", title: "Spirit-Empowered", body: "Conversion is God's work, not ours. We are witnesses, not saviors. This frees us from the pressure of outcome." },
                { color: TEAL, icon: "🌍", title: "Every Christian", body: "Not a specialist activity — Acts 1:8 says 'you will be my witnesses.' Every believer. Everywhere." },
              ].map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.title}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "message" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Gospel Message</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>You can't share what you don't know. The gospel has specific content — historical, theological, and personal. Creation → Fall → Redemption → Response is the most comprehensive framework for explaining it.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(MESSAGE_ITEMS, msgOpen, setMsgOpen)}</div>
          </div>
        )}

        {tab === "motivation" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Motivation for Evangelism</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Guilt-driven evangelism burns out. Understanding the right motivations — love for God, compassion for people, urgency about eternity, and obedience to a specific command — produces sustainable, joyful witness.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(MOTIVATION_DATA)}</div>
          </div>
        )}

        {tab === "conversations" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Starting Spiritual Conversations</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The most common barrier to evangelism is getting started. A six-step framework for moving from ordinary friendship to genuine gospel conversation.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {CONVERSATION_STEPS.map((s) => (
                <div key={s.step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontWeight: 900, fontSize: "1.5rem", color: s.color, opacity: 0.4, lineHeight: 1, flexShrink: 0 }}>{s.step}</span>
                  <div>
                    <h3 style={{ fontWeight: 800, color: s.color, fontSize: "0.95rem", marginBottom: "0.4rem" }}>{s.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.65 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "objections" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Common Objections and Responses</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The most frequently encountered objections to Christianity — with responses that take them seriously rather than dismissing them. Being prepared matters: 'Always be ready to give an answer' (1 Peter 3:15).</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(OBJECTIONS_ITEMS, objOpen, setObjOpen)}</div>
          </div>
        )}

        {tab === "models" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Models of Evangelism</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Different evangelistic approaches suited to different gifts, contexts, and relationships. Most effective evangelists draw from multiple models rather than one exclusively.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(MODELS_DATA)}</div>
          </div>
        )}

        {tab === "culture" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Building a Culture of Witness</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Evangelism is not just an individual practice — it is a congregational culture. How do churches cultivate communities where witness is normal, celebrated, and equipped?</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{cards4(CULTURE_POINTS)}</div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>Write the names of 3-5 people in your life who don't know Christ. What do you know about where they are spiritually? What would it look like to have one honest conversation with one of them this month? What barrier to sharing the gospel is most present for you right now?</p>
              <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection and prayer here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on the theology and practice of evangelism.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
