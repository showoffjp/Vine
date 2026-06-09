"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Knows the Cost of Serving in Hard Places", verse: "2 Corinthians 4:8-9", text: "We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed. Paul wrote these words as a missionary and church planter who survived repeated trauma. He does not spiritualize the difficulty — he names the specific impact (pressed, perplexed, persecuted, struck down) before declaring the deeper reality of God's sustaining presence." },
  { title: "Trauma Does Not Signal Spiritual Failure", verse: "1 Kings 19:4", text: "'I have had enough, Lord,' Elijah said. 'Take my life.' Elijah collapsed in exhaustion after one of the most dramatic spiritual victories in the Old Testament. His physical and psychological collapse is met not with rebuke but with food, water, and sleep — and an angel who says 'the journey is too much for you.' God does not despise trauma responses in his servants." },
  { title: "The Spirit Intercedes for What We Cannot Articulate", verse: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. PTSD often fragments language — intrusive memories cannot always be put into words. This verse is a pastoral gift: the Spirit prays precisely through the inexpressible, making intercession for those who can no longer find words for what they have seen." },
  { title: "Returning Home Is Its Own Form of Crossing", verse: "Psalm 126:1-4", text: "When the Lord restored the fortunes of Zion, we were like those who dreamed. Our mouths were filled with laughter... Restore our fortunes, Lord, like streams in the Negev. The Psalm holds together the joy of return with an awareness that full restoration takes time — 'streams in the Negev' refers to desert wadis that are dry most of the year but flood dramatically in season. Restoration may come in unexpected torrents after long dry seasons." },
  { title: "God Tends to the Broken Among His Workers", verse: "Ezekiel 34:16", text: "I will search for the lost and bring back the strays. I will bind up the injured and strengthen the weak. This word was originally spoken against shepherds who abandoned their flocks — but it describes God's own character as a pastor. Those who have given themselves in service and come home wounded are among those God searches for and binds up. The metaphor is medical as much as spiritual." },
];

const voices = [
  { id: "v1", name: "Diane Langberg", role: "Clinical psychologist, author of Suffering and the Heart of God, missionary member care specialist", quote: "We have sent people into extremely traumatic contexts and then expected them to come home and be fine because they were doing God's work. That is not how trauma works, and it is not how God works either.", bio: "Diane Langberg has worked with missionaries and their families for decades and has written extensively about trauma, suffering, and the church. Her book Suffering and the Heart of God addresses the specific psychological and spiritual wounds that accrue in ministry contexts, including mission work." },
  { id: "v2", name: "Beth Seversen", role: "Author of Not Done Yet, researcher on missionary attrition and re-entry stress", quote: "Re-entry is one of the most underestimated crises in missionary life. Going home should be the easy part. It often isn't.", bio: "Beth Seversen has researched the specific challenges of missionary re-entry — the disorientation of returning to a culture that has moved on, the loss of meaning that comes when 'the mission' ends, and the way PTSD symptoms can emerge or worsen after return. Her work has shaped member care practices in sending organizations worldwide." },
  { id: "v3", name: "Kelly O'Donnell", role: "Director of Member Care Associates, author of Doing Member Care Well", quote: "Trauma among missionaries is not rare and not shameful. What is rare is a sending culture that makes it safe enough to say so.", bio: "Kelly O'Donnell is a global leader in missionary member care and has compiled the landmark volume Doing Member Care Well. He advocates for sending organizations to build comprehensive psychological and spiritual support systems rather than expecting missionaries to manage trauma through prayer alone." },
  { id: "v4", name: "Robert Linthicum", role: "Urban missions scholar, author of City of God, City of Satan", quote: "When we send people into systems of systemic suffering, we must also prepare them for what systemic suffering does to a soul over time.", bio: "Robert Linthicum's work on urban and international mission has drawn attention to the cumulative effect of long-term exposure to poverty, violence, and injustice on missionaries and aid workers. He argues that the church must develop theological frameworks for what it means to be wounded by one's calling." },
];

const practices = [
  { icon: "🏥", title: "Treat Re-entry as a Clinical Transition, Not Just a Spiritual One", text: "Most missionary re-entry care focuses on cultural adjustment. But re-entry is also a clinical transition that often triggers or intensifies PTSD symptoms. Seek a therapist trained in trauma — specifically EMDR (Eye Movement Desensitization and Reprocessing) or somatic therapies — not a counselor who only addresses 'reverse culture shock.'" },
  { icon: "✈️", title: "Name What You Saw and Carried", text: "Many missionaries return home carrying images, memories, and relational bonds that their home communities cannot imagine. The isolation of that experience is itself traumatizing. Find a member care professional, chaplain, or therapist who has cross-cultural experience and can hear your stories without flinching or spiritualizing them." },
  { icon: "⏱️", title: "Allow Yourself to Grieve the Field", text: "Leaving the field is a loss — of community, purpose, cultural meaning, and identity. PTSD symptoms and grief symptoms often overlap. Do not rush through the grief to get to 'recovery.' Give yourself permission to miss what you miss and name what you left behind." },
  { icon: "📖", title: "Read Lamentations and the Psalms of Descent", text: "Psalm 88 ends with darkness. Lamentations ends without resolution. These texts give theological permission for experiences that do not resolve quickly. If your experience on the field — violence witnessed, failures endured, losses accumulated — does not fit neatly into a testimony, the Psalms of lament are your tradition's word for that." },
  { icon: "🤲", title: "Let Your Body Be Part of the Healing Process", text: "Trauma is stored in the body, not just the mind (Bessel van der Kolk). Mission field PTSD often involves sensory triggers — sounds, smells, images. Somatic therapies, gentle exercise, regulated breathing, and even Sabbath practices that include physical rest can support healing that talk therapy alone cannot reach." },
  { icon: "🏘️", title: "Ask Your Sending Organization for Formal Debriefing", text: "Responsible sending organizations now offer structured debriefing after field service — particularly after critical incidents. If yours does not, organizations like Serve and Refresh, SIL Member Care, or Headington Institute offer professional services. You should not have to self-fund or self-initiate this care." },
];

const scriptures = [
  { verse: "2 Corinthians 4:8-9", text: "We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed." },
  { verse: "1 Kings 19:5-7", text: "He lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat. The journey is too much for you.'" },
  { verse: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Psalm 126:4", text: "Restore our fortunes, Lord, like streams in the Negev." },
  { verse: "Isaiah 40:29-31", text: "He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength." },
];

type PTSDEntry = { id: string; date: string; trigger: string; anchor: string; need: string };

export default function MissionFieldPTSDPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PTSDEntry[]>([]);
  const [trigger, setTrigger] = useState(""), [anchor, setAnchor] = useState(""), [need, setNeed] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_missionfieldptsd_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!trigger.trim()) return;
    const e: PTSDEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), trigger: trigger.trim(), anchor: anchor.trim(), need: need.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_missionfieldptsd_entries", JSON.stringify(updated));
    setTrigger(""); setAnchor(""); setNeed("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_missionfieldptsd_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Mission Field PTSD</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For missionaries, aid workers, and church planters who return home carrying what they witnessed — and for churches learning how to receive them well.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Crisis Support:</strong> 988 Suicide & Crisis Lifeline (call/text 988) &nbsp;|&nbsp; Headington Institute: headington-institute.org &nbsp;|&nbsp; Serve and Refresh: membercare.org</p>
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
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What memory or trigger is most present for you today?</label>
              <textarea value={trigger} onChange={e => setTrigger(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="You don't need to explain it..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What Scripture or practice is helping you stay grounded?</label>
              <textarea value={anchor} onChange={e => setAnchor(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Even something small..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What do you need from your church or community right now?</label>
              <textarea value={need} onChange={e => setNeed(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Practical or spiritual..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Trigger:</strong> {e.trigger}</p>
                {e.anchor && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Anchor:</strong> {e.anchor}</p>}
                {e.need && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Need:</strong> {e.need}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZGk1hl1nNrw", title: "Trauma, Compassion Fatigue, and the Church", channel: "Diane Langberg", description: "Diane Langberg addresses compassion fatigue and secondary trauma in caregiving and ministry contexts — essential viewing for missionaries processing what they witnessed." },
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score", channel: "Bessel van der Kolk", description: "Van der Kolk on how trauma is stored physically and neurologically, and what effective treatment looks like — foundational for understanding PTSD in any context." },
              { videoId: "G5gLrHClpKQ", title: "Rest Is a Weapon", channel: "Desiring God", description: "A theology of Sabbath rest for those who have given everything in service — and need permission to stop, receive, and be replenished." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on recovering the lost Christian practice of lament — essential for missionaries who have witnessed suffering that does not resolve." },
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
      <Footer />
    </>
  );
}
