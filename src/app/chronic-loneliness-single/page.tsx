"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Named Aloneness as Not Good Before the Fall", verse: "Genesis 2:18", text: "The Lord God said, 'It is not good for the man to be alone.' This is the first thing in creation that God calls 'not good' — not catastrophic, not sinful, but not sufficient. Loneliness is not a character defect; it is a design feature of human beings made for relationship. The single person who is chronically lonely is experiencing exactly what God named and addressed. The loneliness is real, and it reflects a genuine need that is woven into the fabric of being human." },
  { title: "Jesus Chose to Be Single and Was Also Lonely", verse: "John 16:32", text: "A time is coming and in fact has come when you will be scattered, each to your own home. You will leave me all alone. Yet I am not alone, for my Father is with me. Jesus anticipated the loneliness of abandonment. He was celibate and died without a spouse. His loneliness in Gethsemane — disciples asleep, friends about to flee — was real. The one who calls us to follow him knows the specific texture of being alone." },
  { title: "Loneliness Is Not Evidence of God's Abandonment", verse: "Psalm 25:16-17", text: "Turn to me and be gracious to me, for I am lonely and afflicted. Relieve the troubles of my heart and free me from my anguish. The Psalmist prays this as a prayer, not a theological problem. He does not conclude that his loneliness means God is absent. He brings it to God precisely because he believes God can hear it. Loneliness brought to prayer is already a form of connection — the creature addressing the Creator out of the need that the Creator put there." },
  { title: "The Church Should Be the Solution to Loneliness, Not Its Intensifier", verse: "1 Corinthians 12:25-26", text: "So that there should be no division in the body, but that its parts should have equal concern for each other. If one part suffers, every part suffers with it; if one part is honored, every part rejoices with it. The church's design in Paul's vision is one where no member is isolated — where connection is structural, not accidental. When the church fails this — when it organizes around couples and families and leaves singles in structural isolation — it has failed Paul's ecclesiology. This is a church problem, not only a personal problem." },
  { title: "Friendship Is a Legitimate and Holy Need", verse: "John 15:15", text: "I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you. Jesus offers friendship — deep, knowing, disclosed relationship — as the model of the Christian's relation to God. This does not make God a peer, but it establishes that genuine friendship is a theological category, not merely a social convenience. The need for friendship is a need that the God who calls us friends understands." },
];

const voices = [
  { id: "v1", name: "Wesley Hill", role: "Author of Spiritual Friendship, Anglican priest, celibate gay Christian", quote: "The church has not given Christians a vision for friendship that is deep enough, committed enough, or long enough to address the loneliness that many single people experience. We have settled for lesser friendships when the tradition offered us more.", bio: "Wesley Hill's Spiritual Friendship recovers the Christian tradition of deep, covenantal friendship as a theological and practical resource for single people. He argues that the church's near-exclusive attention to marriage as the primary intimate relationship has left single people without models for the depth of connection they genuinely need and are called to." },
  { id: "v2", name: "Sam Allberry", role: "Author of 7 Myths About Singleness, pastor, speaker", quote: "Singleness is not a problem to be solved or a waiting room for marriage. It is a calling with its own goods, its own challenges, and its own form of belonging in the body of Christ.", bio: "Sam Allberry has written and spoken widely about singleness as a vocation — addressing both the church's tendency to treat single adults as incomplete and the genuine difficulty of chronic loneliness in a church culture organized around family. His work is both theologically grounded and pastorally honest about the cost of sustained singleness in a marriage-centric church." },
  { id: "v3", name: "Jennie Allen", role: "Author of Find Your People, founder of IF:Gathering", quote: "We have a loneliness crisis not because people are unavailable but because we have stopped pursuing deep friendship with enough intentionality and enough courage to be truly known.", bio: "Jennie Allen's Find Your People addresses the practical and spiritual work of building genuine community — not surface-level connection but the kind of friendship where people are actually known. Her work is particularly relevant for single adults who have church attendance without genuine belonging." },
  { id: "v4", name: "Rosaria Butterfield", role: "Author of The Gospel Comes With a House Key, Reformed pastor's wife", quote: "The solution to loneliness in the church is not a singles ministry. It is households open to those who do not have families of their own — the radical hospitality of Matthew 25.", bio: "Rosaria Butterfield's The Gospel Comes With a House Key advocates for a recovery of radical Christian hospitality that specifically includes and integrates single adults into the life of families and households. She argues that the church must become structurally hospitable — not programmatically attentive — to address the loneliness of single adults." },
];

const practices = [
  { icon: "🤝", title: "Pursue Depth in One or Two Friendships Rather Than Breadth", text: "Chronic loneliness is often not about the number of social contacts but about the depth of those contacts. The person who has 200 Facebook friends and no one they can call at midnight is lonely. Prioritizing the development of one or two genuinely deep friendships — through time, honesty, and mutual investment — addresses loneliness more effectively than social event attendance." },
  { icon: "📣", title: "Name Your Loneliness to Someone Without Apologizing for It", text: "Many single adults carry loneliness in silence because naming it feels like a burden or a complaint. But the silence keeps the loneliness invisible — and invisible needs do not get met. Naming your loneliness to a pastor, a therapist, a trusted friend, or a small group is not weakness. It is the beginning of connection." },
  { icon: "🏘️", title: "Pursue Integration Into a Household, Not Attendance at an Event", text: "Singles ministries provide social connection but often reinforce separation from the broader community. Pursuing genuine integration into the life of a family — being present in their home, their rhythms, their meals — addresses structural loneliness in a way that an event does not. This requires asking, and the asking requires vulnerability." },
  { icon: "📖", title: "Read the Psalms of Loneliness as Prayers", text: "Psalm 25, 38, and 102 contain explicit expressions of loneliness and social isolation. Psalm 102:7 images someone 'like a bird alone on a rooftop.' These psalms do not resolve the loneliness — they hold it in the presence of God. Praying them slowly and honestly is a practice of bringing the full experience to God rather than managing it." },
  { icon: "🏥", title: "Consider Whether Loneliness Has Become Depression", text: "Chronic loneliness and clinical depression have overlapping symptoms and can reinforce each other. If your loneliness is accompanied by persistent low mood, loss of interest in activities, sleep disruption, or hopelessness, seek a clinical evaluation. Treating the depression may make genuine connection possible in ways that felt inaccessible." },
  { icon: "✝️", title: "Ask Your Church Leadership Directly About Structural Inclusion", text: "If your church's programming and community life is structured around couples and families in ways that leave single adults in structural isolation, name this to church leadership — specifically and without apology. Ask what concrete steps can be taken to ensure that single adults are integrated into the life of the congregation, not merely offered a separate program." },
];

const scriptures = [
  { verse: "Genesis 2:18", text: "The Lord God said, 'It is not good for the man to be alone. I will make a helper suitable for him.'" },
  { verse: "Psalm 25:16", text: "Turn to me and be gracious to me, for I am lonely and afflicted." },
  { verse: "John 15:15", text: "I no longer call you servants... Instead, I have called you friends, for everything that I learned from my Father I have made known to you." },
  { verse: "1 Corinthians 12:26", text: "If one part suffers, every part suffers with it; if one part is honored, every part rejoices with it." },
  { verse: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing." },
];

type LonelyEntry = { id: string; date: string; pain: string; step: string; desire: string };

export default function ChronicLonelinessSinglePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LonelyEntry[]>([]);
  const [pain, setPain] = useState(""), [step, setStep] = useState(""), [desire, setDesire] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_chroniclonelinessj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!pain.trim()) return;
    const e: LonelyEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), pain: pain.trim(), step: step.trim(), desire: desire.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chroniclonelinessj_entries", JSON.stringify(updated));
    setPain(""); setStep(""); setDesire("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chroniclonelinessj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Chronic Loneliness and Singleness</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For single adults in the church who are genuinely lonely — not for lack of faith or effort, but because the church has not yet built the structures that make belonging possible for those who are not married.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; Crisis Text Line: text HOME to 741741</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What does the loneliness feel like today?</label>
              <textarea value={pain} onChange={e => setPain(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Name it — when it hits hardest, what it costs you..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is one step toward genuine connection you could take this week?</label>
              <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="A conversation, an invitation, a disclosure..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What kind of belonging do you most desire?</label>
              <textarea value={desire} onChange={e => setDesire(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What would it look like to be truly known..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Loneliness:</strong> {e.pain}</p>
                {e.step && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Step:</strong> {e.step}</p>}
                {e.desire && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Desire:</strong> {e.desire}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Timothy Keller", description: "Keller on bringing our deepest fears and pains into prayer — including the fear that loneliness is permanent and that we are fundamentally unloved." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on the integration of emotional honesty into spiritual life — including the emotional reality of chronic loneliness and the church's capacity to hold it." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on shame's connection to loneliness — the fear that if people truly knew us, they would not stay — and how genuine connection heals both." },
              { videoId: "t6L-F2emwUc", title: "Joy That Produces Radical Obedience", channel: "John Piper — Desiring God", description: "Piper on the sufficiency of God's presence and joy in seasons where human companionship is limited — the theological foundation for holding loneliness without despair." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
