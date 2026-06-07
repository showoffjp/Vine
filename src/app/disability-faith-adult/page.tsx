"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Image of God Is Not Diminished by Disability", verse: "Genesis 1:27", text: "So God created mankind in his own image. The imago Dei is not carried in ability, productivity, cognitive function, or physical form. Every person — regardless of what the body can or cannot do — bears the full image of the Creator. Disability theology begins here." },
  { title: "God's Power Is Made Perfect in Weakness", verse: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness. Paul's thorn was not healed so that the sufficiency of grace would become visible. Disability is not a problem to be solved before God can use a life — it may be the very site of his power." },
  { title: "The Body's Limitations Are Temporary; the Person Is Eternal", verse: "2 Corinthians 4:16-18", text: "Though outwardly we are wasting away, yet inwardly we are being renewed day by day. The body's present condition is not its final condition. Resurrection means the fullness of what each person is intended to be — not an escape from the body but its glorification." },
  { title: "The Church Is Not Complete Without Disabled Members", verse: "1 Corinthians 12:22", text: "Those parts of the body that seem to be weaker are indispensable. Indispensable. Not accommodated. Not welcomed as a special program. The body of Christ is actually incomplete and weakened when disabled people are absent or marginal." },
  { title: "Lament Is Faithful, Not Faithless", verse: "Psalm 31:9-10", text: "Be merciful to me, Lord, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. Psalmists cried out about bodies that failed, strength that wasted, pain that did not resolve. Lamenting your condition is not doubting God. It is honest prayer in the tradition of Scripture." },
];

const voices = [
  { id: "v1", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends", quote: "My wheelchair has been a gift, a severe mercy that has allowed me to know God in ways I never could have on two legs.", bio: "Joni became a quadriplegic at 17. For over 50 years she has been the most prominent voice integrating disability theology with evangelical faith, founding a global ministry and writing over 50 books on suffering, disability, and the sovereignty of God." },
  { id: "v2", name: "John Swinton", role: "Theologian, Aberdeen University", quote: "The question is not how can the church accommodate people with disabilities? The question is how can the church become what it is meant to be in the presence of people with disabilities?", bio: "Swinton is a leading voice in disability theology, arguing that people with disabilities are not objects of ministry but agents whose presence transforms the church into what it is called to be." },
  { id: "v3", name: "Nancy Eiesland", role: "Author, The Disabled God", quote: "The resurrected Jesus appeared to his disciples bearing the marks of his impairment — the disabled God who offers no cheap fix.", bio: "Eiesland's foundational work argues that the resurrection body of Jesus — marked by the wounds of the cross — theologically legitimizes disabled bodies and challenges the church's ableist assumptions." },
  { id: "v4", name: "Stephanie Hubach", role: "Author, Same Lake, Different Boat", quote: "Disability is a normal, universal part of the human experience — and the church must structure itself accordingly, not as an exception.", bio: "Hubach, a parent of a son with Down syndrome, challenges churches to move from disability ministry as specialty program to disability inclusion as the normal fabric of church life and theology." },
];

const practices = [
  { icon: "🗺️", title: "Find a Theologically Grounded Community", text: "Disability isolation is real — especially if your church treats disability as a tragedy or problem. Seek a community that understands the imago Dei is not cognitive or physical ability. Joni and Friends regional chapters can connect you with others who share faith and disability experience." },
  { icon: "📝", title: "Write Your Own Theology of Your Body", text: "Take time to articulate what you believe about your body and God. What does Scripture say about your worth, your future, your present condition? Writing it down counters the messages — from culture and sometimes church — that subtly say your body is less-than." },
  { icon: "🤝", title: "Advocate for Real Access", text: "Physical, communicative, and attitudinal access in church is not a favor — it is obedience to 1 Corinthians 12. If your church is inaccessible, gently and persistently name it. You are not asking for special treatment; you are asking the church to be what it claims to be." },
  { icon: "🕊️", title: "Give Yourself Permission to Lament", text: "Chronic grief about physical limitations is not lack of faith. Read Psalm 31, Psalm 88, and Lamentations aloud. Bring your actual experience — the frustration, the loss, the exhaustion — into prayer rather than performing acceptance you do not feel." },
  { icon: "🏥", title: "Build a Care Team, Not Just a Medical Team", text: "Medical management addresses function. A care team — which may include a chaplain, spiritual director, counselor, or lay caregiver — addresses the whole person. Faith-based disability care organizations can help connect you with people who hold both dimensions." },
  { icon: "🌱", title: "Identify Your Gifts in Your Current Condition", text: "Disability often strips away the roles through which we defined our usefulness. The question becomes: who am I now, and what do I offer? Paul wrote his most profound letters in prison. Joni painted with her mouth. Identity and gift survive the body's limits." },
];

const scriptures = [
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Corinthians 12:22", text: "On the contrary, those parts of the body that seem to be weaker are indispensable." },
  { verse: "Romans 8:23", text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies." },
  { verse: "Isaiah 35:5-6", text: "Then will the eyes of the blind be opened and the ears of the deaf unstopped. Then will the lame leap like a deer, and the mute tongue shout for joy." },
];

type DisabilityEntry = { id: string; date: string; truth: string; grief: string; gift: string };

export default function DisabilityFaithAdultPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DisabilityEntry[]>([]);
  const [form, setForm] = useState({ truth: "", grief: "", gift: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_disabilityfaithadultj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.truth.trim()) return;
    const e: DisabilityEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_disabilityfaithadultj_entries", JSON.stringify(updated));
    setForm({ truth: "", grief: "", gift: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_disabilityfaithadultj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Disability and Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Faith, Body, and Belonging</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Living with a disability as an adult raises deep questions about identity, worth, vocation, and the church. Scripture has more to say about this than most Christians know — and the theology of disability reveals something true about the gospel itself.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>Joni and Friends</strong> — joniandfriends.org, family retreats and local chapters</li>
                <li><strong style={{ color: TEXT }}>Christian Institute on Disability</strong> — cidjoniandfriends.org</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — if disability-related grief affects mental health</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.truth} onChange={e => setForm(f => ({ ...f, truth: e.target.value }))} placeholder="What truth about your worth and identity do you need to hold today?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.grief} onChange={e => setForm(f => ({ ...f, grief: e.target.value }))} placeholder="What loss or frustration do you want to bring before God in lament?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.gift} onChange={e => setForm(f => ({ ...f, gift: e.target.value }))} placeholder="What gift, voice, or capacity do you bring to the body of Christ right now?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.truth && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Truth:</strong> {e.truth}</p>}
                {e.grief && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Lament:</strong> {e.grief}</p>}
                {e.gift && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Gift:</strong> {e.gift}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7KMPN9OLoNo", title: "Suffering and God's Grace", channel: "Joni Eareckson Tada — Desiring God", description: "Joni's powerful testimony of how quadriplegia became the means of her deepest encounter with Christ, and what she has learned about God's grace in weakness." },
              { videoId: "jJPVNIAFmvA", title: "Theology of Disability", channel: "Joni and Friends", description: "A theological foundation for how the church understands disability — rooted in the image of God, the body of Christ, and the promise of resurrection." },
              { videoId: "y-DQH-M1HuM", title: "When God Doesn't Heal", channel: "The Gospel Coalition", description: "Why God sometimes withholds healing, how to hold unanswered prayers for physical restoration, and what faithfulness looks like in the long-term disabled life." },
              { videoId: "ZGk1hl1nNrw", title: "Resilience and Compassion in Hard Times", channel: "Diane Langberg", description: "Diane Langberg on the spiritual and psychological dimensions of living with chronic limitation, and how we bear Christ's image in embodied vulnerability." },
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
