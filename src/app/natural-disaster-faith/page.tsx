"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Governs the Weather and Is Not Absent in the Storm", verse: "Psalm 29:3-4", text: "The voice of the Lord is over the waters; the God of glory thunders, the Lord thunders over the mighty waters. The voice of the Lord is powerful; the voice of the Lord is majestic. Psalm 29 is a theological claim about the creation order: God is not absent from storms. He speaks in and through them. This does not mean every hurricane is a divine judgment — the Psalmist is describing sovereignty, not causation. The God who speaks in the storm is the same God who calms the sea and who holds those who are swept away." },
  { title: "Jesus Was in the Boat During the Storm — And He Slept', verse: 'Mark 4:38-39", text: "'Teacher, don't you care if we drown?' He got up, rebuked the wind and said to the waves, 'Quiet! Be still!' Then the wind died down and it was completely calm. The disciples' question — do you not care? — is one of the most human questions in Scripture and one of the most honest responses to disaster. Jesus's sleeping is not indifference but trust. His waking to command the storm reveals that the chaos was never outside his authority." },
  { title: "The Created World Groans and God Plans Its Redemption", verse: "Romans 8:22", text: "We know that the whole creation has been groaning as in the pains of childbirth right up to the present time. Paul's framework for natural disasters is not judgment-language but birth-language. The creation is groaning — not because God has abandoned it but because it is in the process of liberation from the bondage of death and entropy that entered with the Fall. Natural disasters are part of the groan, not the final word." },
  { title: "God Calls His People to Rebuild What the Disaster Destroyed", verse: "Nehemiah 2:17-18", text: "'You see the trouble we are in: Jerusalem lies in ruins, and its gates have been burned with fire. Come, let us rebuild the wall of Jerusalem.' They replied, 'Let us start rebuilding.' So they began this good work. The response to destruction in Nehemiah is not passive waiting for God to rebuild but active human participation in restoration. The church's response to natural disaster — rebuilding homes, restoring community, lamentation, and long-term presence — is participating in God's own restoration work." },
  { title: "Lament Is the Faithful Response to the Loss Natural Disasters Bring", verse: "Lamentations 3:47-48", text: "We have suffered terror and pitfalls, ruin and destruction. Streams of tears flow from my eyes because my people are destroyed. Lamentations was written in response to one of the most complete disasters the biblical world experienced — the destruction of Jerusalem. Its sustained, unresolved lament over rubble, loss, and confusion gives language to communities trying to process what a tornado, flood, or wildfire left behind." },
];

const voices = [
  { id: "v1", name: "Philip Yancey", role: "Author of Where Is God When It Hurts?, Disappointment with God", quote: "Disasters strip away our illusions about the world's safety and about God's predictability. That stripping is painful. It can also be the beginning of a more honest faith — one that holds both the reality of suffering and the reality of grace.", bio: "Philip Yancey's Where Is God When It Hurts? was written directly in response to readers asking about God's involvement in natural disasters and accidents. His work addresses the theodicy questions that disasters raise — not by resolving them abstractly but by documenting how people find God present even in the worst suffering." },
  { id: "v2", name: "Mark Vroegop", role: "Author of Dark Clouds, Deep Mercy, pastor", quote: "After a disaster, the question is not how to explain the suffering theologically but how to stay present with it faithfully. Lament is the practice that keeps people in the conversation with God when everything in them wants to go silent.", bio: "Mark Vroegop's work on lament provides the primary pastoral resource for communities processing natural disasters. His insistence that lament — rather than explanation or premature resolution — is the biblical response to collective suffering has been formative for pastors leading congregations through disaster recovery." },
  { id: "v3", name: "Joni Eareckson Tada", role: "Author of A Theology of Suffering, quadriplegic since 17, Joni and Friends founder", quote: "Suffering in any form — personal or collective — is not outside the redemptive story. It is deep inside it. God does not exempt his children from the world's groaning. He enters it with us.", bio: "Joni Tada's theological response to suffering, developed over decades of personal disability, applies directly to natural disaster contexts. Her insistence that God's purposes are not negated by catastrophic loss, and that the church's calling is to be present in the disaster rather than distant from it, has shaped disaster ministry frameworks worldwide." },
  { id: "v4", name: "Matthew Soerens", role: "Author of Seeking Refuge, World Relief national field director", quote: "The communities most vulnerable to natural disasters are also the communities with the least capacity to recover alone. The church's response to disaster is not only material. It is a declaration of who belongs to the community of care.", bio: "Matthew Soerens's work on displacement and disaster recovery through World Relief has given him extensive experience with the specific spiritual and community dimensions of disaster response. His framework integrates material assistance with long-term presence and spiritual accompaniment — what he calls 'whole person' disaster care." },
];

const practices = [
  { icon: "🏥", title: "Treat Psychological Trauma With the Same Urgency as Physical Injury", text: "Natural disasters produce PTSD, complex grief, and acute trauma in survivors, first responders, and volunteers alike. Seeking clinical support — from community mental health centers, disaster relief organizations' counseling services, or therapists specializing in trauma — is as appropriate as treating physical injuries. The Red Cross, Salvation Army, and church-based disaster relief organizations all provide or connect people with mental health resources." },
  { icon: "🤝", title: "Resist the Urge to Explain the Disaster Theologically in the Acute Phase", text: "In the first days and weeks after a natural disaster, theological explanation — even well-intentioned — causes harm. 'This happened for a reason' and 'God has a plan' may be true in some abstract sense, but said to someone whose home is rubble, they communicate that God is indifferent to their pain. The first pastoral act is presence, not explanation. The time for theological processing comes later." },
  { icon: "🔨", title: "Stay for the Long Recovery, Not Just the Immediate Crisis", text: "Media and volunteer attention typically intensifies in the first two weeks after a disaster and evaporates within a month. But disaster recovery takes years. Organizations like World Renew, Samaritan's Purse, Catholic Charities, and local community development organizations work in the multi-year recovery phase. Long-term presence is what distinguishes a Christian response from a charity response." },
  { icon: "📖", title: "Read the Book of Lamentations Slowly, as a Community", text: "Lamentations was written for a community that had experienced comprehensive catastrophe. Its five chapters move through different dimensions of collective suffering — shock (ch. 1), theological confusion (ch. 2), the ember of hope (ch. 3), communal loss (ch. 4), and unresolved petition (ch. 5). Reading it aloud in a community worship setting validates collective suffering in ways that individual reading cannot." },
  { icon: "🏘️", title: "Rebuild Social Fabric Alongside Physical Structures", text: "Natural disasters often destroy the social infrastructure — gathering places, relationships, shared memory — as completely as they destroy physical structures. Rebuilding community — through shared meals, neighborhood gatherings, remembrance services, and intentional cross-cultural connection — is as important as rebuilding homes and is more lasting." },
  { icon: "🙏", title: "Allow Anger at God to Be Part of the Community Prayer", text: "The community's anger at God after a disaster is legitimate and needs a space. Providing a structured lament service — where grief, confusion, and anger are brought to God in prayer rather than suppressed or redirected — gives the community's honest emotional response a theological home. The Psalms model this corporate lament consistently." },
];

const scriptures = [
  { verse: "Psalm 29:4", text: "The voice of the Lord is powerful; the voice of the Lord is majestic." },
  { verse: "Romans 8:22", text: "We know that the whole creation has been groaning as in the pains of childbirth right up to the present time." },
  { verse: "Nehemiah 2:17", text: "'Come, let us rebuild the wall of Jerusalem, and we will no longer be in disgrace.' I also told them about the gracious hand of my God on me." },
  { verse: "Lamentations 3:31-32", text: "For no one is cast off by the Lord forever. Though he brings grief, he will show compassion, so great is his unfailing love." },
  { verse: "Revelation 21:5", text: "He who was seated on the throne said, 'I am making everything new!'" },
];

type DisasterEntry = { id: string; date: string; loss: string; present: string; prayer: string };

export default function NaturalDisasterFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DisasterEntry[]>([]);
  const [loss, setLoss] = useState(""), [present, setPresent] = useState(""), [prayer, setPrayer] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_naturaldisasterj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!loss.trim()) return;
    const e: DisasterEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), loss: loss.trim(), present: present.trim(), prayer: prayer.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_naturaldisasterj_entries", JSON.stringify(updated));
    setLoss(""); setPresent(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_naturaldisasterj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Natural Disaster and Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For those whose lives have been upended by flood, fire, tornado, or earthquake — and for the churches called to be present for years, not days, in the wake of catastrophe.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Crisis Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; Disaster Distress Helpline: 1-800-985-5990 &nbsp;|&nbsp; Red Cross: redcross.org</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
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
                <div style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
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
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What have you lost that you most need to grieve?</label>
              <textarea value={loss} onChange={e => setLoss(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Home, objects, community, a sense of safety..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>Where have you seen God present in the disaster or its aftermath?</label>
              <textarea value={present} onChange={e => setPresent(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="People who came, moments of grace, unexpected provision..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What are you asking God for in this season?</label>
              <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Restoration, presence, answers, community..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Loss:</strong> {e.loss}</p>
                {e.present && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>God's presence:</strong> {e.present}</p>}
                {e.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the biblical practice for collective suffering — particularly relevant for communities processing the aftermath of natural disaster together." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God", channel: "R.C. Sproul — Ligonier", description: "Sproul on God's sovereignty over creation events — addressing the theodicy questions that natural disasters raise without deflecting their difficulty." },
              { videoId: "4Eg_di-O8nM", title: "When Grief Feels Unbearable", channel: "Francis Chan", description: "Chan on sitting with grief that overwhelms — relevant for survivors of disasters whose losses are multiple and whose adjustment timeline is measured in years." },
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score", channel: "Bessel van der Kolk", description: "Van der Kolk on how disaster trauma is stored in the body — and what it takes to heal trauma that is collective as well as individual." },
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
  );
}
