"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Jesus Himself Withdrew From Demanding Ministry to Rest", verse: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed. In the midst of healing multitudes and responding to constant need, Jesus withdrew repeatedly. This was not selfishness — it was the sustaining practice that made continued care possible. Rest is not the opposite of service; it is its foundation." },
  { title: "Elijah Collapsed After Faithful Service — God Responded with Provision", verse: "1 Kings 19:5-7", text: "He lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat.' God's response to Elijah's complete depletion was not rebuke, not correction, not re-commissioning — it was food, rest, and the simple statement: the journey is too great for you. This is God's first response to compassion fatigue." },
  { title: "You Cannot Continually Give What You Are Not Receiving", verse: "2 Corinthians 9:8", text: "God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work. Sustainable generosity requires that you are receiving from God what you are pouring out for others. Compassion fatigue is often the signal that the receiving has stopped while the giving continues." },
  { title: "Limits Are Not Failures — They Are Features of the Human Frame", verse: "Psalm 103:14", text: "For he knows how we are formed, he remembers that we are dust. God does not expect divine endurance from mortal caregivers. He made you limited, embodied, finite. The limits of your capacity for care are not spiritual failures — they are reminders of what you are and whose you are." },
  { title: "Bearing One Another's Burdens Includes Asking for Help Yourself", verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ. The caregiver who never receives care, never asks for help, and never names their own needs has made the asymmetry permanent. The mutual burden-bearing of the body requires the caregiver to be a burden-bearer's burden. Allow others to fulfill the law of Christ for you." },
];

const voices = [
  { id: "v1", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends", quote: "My husband is not just a caregiver. He is a partner in grace. But even grace partners need grace themselves.", bio: "Joni writes specifically about the spiritual and emotional dimensions of caregiving from the perspective of both the one receiving care and the one giving it, drawing on decades with her husband Ken as her primary caregiver." },
  { id: "v2", name: "Mary Beth Chapman", role: "Author, Choosing to SEE", quote: "Compassion fatigue does not mean you have stopped loving. It means your capacity has been exceeded. They are not the same thing.", bio: "Mary Beth Chapman, mother of Steven Curtis Chapman, lost her daughter in a car accident and writes about the specific grief and fatigue of sustained trauma caregiving — what happens to faith and capacity when care is involuntary and unrelenting." },
  { id: "v3", name: "Diane Langberg", role: "Psychologist, Author", quote: "Those who carry others' suffering for a long time will eventually carry it in their bodies. This is not weakness — it is the cost of genuine compassion.", bio: "Langberg's research on secondary traumatic stress and compassion fatigue in helpers — therapists, pastors, caregivers — shows that absorbing others' suffering is a physiological and spiritual reality that requires intentional management." },
  { id: "v4", name: "Peter Scazzero", role: "Author, Emotionally Healthy Spirituality", quote: "You cannot give away what you do not have. Sustainable ministry and care require ongoing formation, not just ongoing service.", bio: "Scazzero argues that the church's culture of activism and servanthood without formation produces burned-out caregivers who harm themselves and eventually those they serve. He provides frameworks for sustainable service rooted in being rather than doing." },
];

const practices = [
  { icon: "🛑", title: "Name It — Do Not Spiritualize It Away", text: "Compassion fatigue is a real physiological and psychological condition. Naming it accurately — 'I am depleted, I am experiencing secondary trauma, I am at my limit' — is the precondition for addressing it. Calling it laziness, lack of faith, or insufficient love delays necessary care." },
  { icon: "🏥", title: "Get a Physical and a Therapy Appointment", text: "Sustained caregiving produces stress hormones that damage the body. A physical exam can identify what is happening physically. A therapist who understands caregiver burnout can address what is happening psychologically. Both may be necessary." },
  { icon: "⏸️", title: "Use Respite Care — It Exists for This", text: "Respite care gives caregivers planned relief. Organizations like the ARCH National Respite Network and state programs provide temporary relief care for caregivers of the elderly, disabled, and ill. Using respite is not abandonment — it is sustainable stewardship of your capacity." },
  { icon: "📖", title: "Receive Spiritual Direction Rather Than Only Providing It", text: "Caregivers often provide spiritual support to those they care for while having no one providing it to them. Find a spiritual director, pastor, or trusted friend who will ask how you are doing spiritually and actually wait for a real answer." },
  { icon: "🌿", title: "Practice the Sabbath as Actual Rest", text: "Weekly sabbath is a divine prescription for the finite creature. Caregivers who have collapsed the sabbath into more service have removed the primary mechanism God provided for sustainable human life. Sabbath is not time off — it is sacred cessation." },
  { icon: "🤲", title: "Let the Church Serve You", text: "Many caregivers serve the church and community for years before ever receiving. When you are depleted, giving others the opportunity to serve you is not weakness — it is the practice of receiving the body of Christ. Name your needs to a pastor or elder and allow the community to be what it was designed to be." },
];

const scriptures = [
  { verse: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed." },
  { verse: "1 Kings 19:7", text: "The angel of the Lord came back a second time and touched him and said, 'Get up and eat, for the journey is too great for you.'" },
  { verse: "Psalm 23:2-3", text: "He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul." },
  { verse: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light." },
  { verse: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
  { verse: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
];

type CaregiverEntry = { id: string; date: string; depletion: string; need: string; receive: string };

export default function CaregiverCompassionFatiguePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CaregiverEntry[]>([]);
  const [form, setForm] = useState({ depletion: "", need: "", receive: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_caregivercompassionj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.depletion.trim()) return;
    const e: CaregiverEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_caregivercompassionj_entries", JSON.stringify(updated));
    setForm({ depletion: "", need: "", receive: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_caregivercompassionj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Caregiver Burnout</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When Caring Has Emptied You</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Compassion fatigue is what happens when caregivers give more than they receive for longer than is sustainable. It affects family caregivers, professional helpers, pastors, and anyone who carries others' suffering for a sustained period. This page is for those who are empty and do not know how to say it.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
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
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
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
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${GREEN}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>Caregiver Action Network</strong> — caregiveraction.org, 1-855-227-3640</li>
                <li><strong style={{ color: TEXT }}>ARCH National Respite Network</strong> — archrespite.org, find respite care</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if depletion has become a mental health crisis</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.depletion} onChange={e => setForm(f => ({ ...f, depletion: e.target.value }))} placeholder="What does your depletion actually feel like — physically, emotionally, spiritually?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.need} onChange={e => setForm(f => ({ ...f, need: e.target.value }))} placeholder="What do you actually need that you have not been receiving?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.receive} onChange={e => setForm(f => ({ ...f, receive: e.target.value }))} placeholder="One way you will let someone care for you this week" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.depletion && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Depletion:</strong> {e.depletion}</p>}
                {e.need && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Need:</strong> {e.need}</p>}
                {e.receive && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Receive:</strong> {e.receive}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "sJSFmO6gGlo", title: "Caregiver Burnout and the Gospel", channel: "Joni and Friends", description: "The Joni and Friends team on the spiritual and emotional dimensions of caregiver burnout, and how the gospel speaks specifically to those who are depleted in service." },
              { videoId: "m2uDNE9kcSE", title: "Caring for the Caregiver", channel: "Focus on the Family", description: "Practical and spiritual guidance for what caregivers themselves need — how to identify depletion and what sustainable care requires." },
              { videoId: "G5gLrHClpKQ", title: "Rest Is a Weapon", channel: "Desiring God", description: "On the sabbath as divine provision for the finite creature — why rest is not optional for the caregiver and what it means to receive it as a spiritual practice." },
              { videoId: "DFApBaFl5hM", title: "Ministry Burnout: Causes and Cures", channel: "The Gospel Coalition", description: "Though focused on ministry burnout, this directly addresses caregivers — how depletion happens, what it does to the soul, and what genuine recovery requires." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
