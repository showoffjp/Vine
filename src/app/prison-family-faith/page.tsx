"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Is Present in the Prison Cell", verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there. The Psalmist's meditation on God's inescapable presence includes the lowest places — the depths, the darkness, the far side of the sea. For the person who is incarcerated and for their family, this is not abstract theology. It is a pastoral claim: God is in that cell. God is with that family. The geographic separation of prison bars does not separate anyone from the God who is already present on both sides of them." },
  { title: "Jesus Named the Imprisoned as the Location of His Own Presence", verse: "Matthew 25:36", text: "'I was in prison and you came to visit me.' Jesus does not say visiting the prisoner is like visiting him. He says the prisoner is the location of his presence. The theology of Matthew 25 makes prison ministry and family support a Christ-encounter — not a charity mission. The families of the incarcerated who maintain contact, show up for visiting hours, and carry the weight of a loved one's imprisonment are participating in one of the most demanding expressions of the Matthew 25 calling." },
  { title: "The Incarcerated Person Remains Fully Human and Fully Beloved', verse: 'Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them. Incarceration does not revoke the imago Dei. The man or woman behind bars, whatever their crime, retains full humanity and the dignity that comes with being made in God's image. This does not minimize the harm caused by their actions. It does mean that neither the incarcerated person nor their family should be treated as less than fully human — which the carceral system and much of church culture often does." },
  { title: "Families of the Incarcerated Share a Sentence They Did Not Receive', verse: 'Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn. The family members of an incarcerated person — spouses, children, parents — experience a secondary imprisonment: financial strain, social stigma, childcare single-handedly, the grief of an absent loved one, and the shame of a community that often treats them as complicit in the crime. They mourn a real loss, and the church is called to mourn with them." },
  { title: "Restoration and New Creation Are Available Even for Those Who Have Done Great Harm', verse: '2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! The new creation language is not conditional on the severity of the previous life. Paul writes it as a universal statement about anyone who is in Christ. The person who is incarcerated, who carries shame about the harm they caused, who has real and terrible things to answer for — if they are in Christ, they are a new creation. The old has gone. This is not cheap grace; it is the most expensive thing in the universe." },
];

const voices = [
  { id: "v1", name: "Chuck Colson", role: "Founder of Prison Fellowship, former Nixon aide, author of Born Again", quote: "When I went to prison, I expected to find God absent. Instead I found him more present than I had ever experienced him. And the people who showed up to visit — the faithful Christians who came regularly — they were the hands and face of Christ to me.", bio: "Chuck Colson's conversion in prison and subsequent founding of Prison Fellowship transformed Christian engagement with mass incarceration. His testimony of finding God in prison has shaped how millions of Christians understand the Matthew 25 calling, and Prison Fellowship's Angel Tree program specifically addresses the needs of children and families of the incarcerated." },
  { id: "v2", name: "Bryan Stevenson", role: "Author of Just Mercy, founder of Equal Justice Initiative, attorney", quote: "Each of us is more than the worst thing we've ever done. The question is whether we have the courage to live by that belief — toward ourselves and toward others.", bio: "Bryan Stevenson's Just Mercy documents his legal work with people on death row and in the American criminal justice system. Though not writing explicitly from a Christian framework, his insistence on the humanity of every incarcerated person and the moral urgency of justice reform has been profoundly influential in Christian communities engaging with mass incarceration." },
  { id: "v3", name: "Dominique DuBois Gilliard", role: "Author of Rethinking Incarceration, director of justice for the Evangelical Covenant Church", quote: "The church cannot claim to love the vulnerable while ignoring the families of the incarcerated — the children growing up without a parent, the spouses navigating poverty and shame, the parents carrying grief and confusion. These are the vulnerable.", bio: "Dominique DuBois Gilliard's Rethinking Incarceration connects criminal justice reform to a theology of justice, discipleship, and the church's mission. He specifically addresses the pastoral needs of incarcerated individuals, their families, and communities disproportionately affected by mass incarceration — and calls the church to prophetic engagement with the system as well as compassionate service within it." },
  { id: "v4", name: "Diane Langberg", role: "Clinical psychologist, author of Suffering and the Heart of God", quote: "The children of the incarcerated carry trauma, stigma, and grief that are invisible to most church communities. If those communities are serious about caring for the vulnerable, they must find a way to see and hold these children.", bio: "Diane Langberg's work on trauma and suffering addresses the secondary trauma carried by families of the incarcerated. Her clinical framework for understanding the specific wounds children carry when a parent is imprisoned — abandonment, shame, financial strain, identity confusion — informs pastoral care for this often-overlooked population." },
];

const practices = [
  { icon: "✉️", title: "Maintain Contact — Letters, Calls, and Visits Matter Enormously", text: "The incarcerated person's most acute psychological and spiritual wound is often isolation and the sense of being forgotten. Regular contact — letters, phone calls, and visits when possible — maintains the relational bond and signals to the incarcerated person that they are not discarded. Prison Fellowship (prisonfellowship.org) has resources for volunteers and family members on effective contact." },
  { icon: "🏘️", title: "Support the Family as a Whole Unit, Not Only the Person Who Is Incarcerated", text: "The family is experiencing a form of collective imprisonment. Support for the spouse managing the household alone, for the children losing a parent, for the parents navigating shame and grief — is as important as support for the incarcerated person. Church communities can provide practical support (childcare, meals, financial assistance) and relational presence that prevents family dissolution during incarceration." },
  { icon: "👶", title: "Connect With Angel Tree for the Children of the Incarcerated", text: "Prison Fellowship's Angel Tree program provides Christmas gifts to children of incarcerated parents on behalf of their imprisoned parent. It also connects those children with churches and volunteers for ongoing mentorship and support. Children of incarcerated parents are at elevated risk for a range of negative outcomes, and sustained mentoring relationships are among the most protective interventions available." },
  { icon: "📖", title: "Read the Psalms of Imprisonment Together", text: "Psalms 22, 88, and 142 are psalms from people in physical confinement or extreme limitation — caves, pits, dungeons. Psalm 142 was written 'when he was in the cave.' Psalm 22 describes the experience of being surrounded and constrained. Reading these with the incarcerated person (if possible) and with their family frames their experience within the biblical tradition of those whom God met in constraint." },
  { icon: "⚖️", title: "Learn About Re-entry Before Your Loved One Gets Out", text: "The period immediately after release is the highest-risk time for recidivism. The transition from incarceration to freedom involves practical, relational, psychological, and spiritual challenges that are often underestimated. Organizations like Reentry Council, local re-entry ministries, and Prison Fellowship's re-entry programs can help families and congregations prepare for and support the person's transition." },
  { icon: "🙏", title: "Pray for Justice as Well as Mercy", text: "The church is called to both mercy (compassion for those harmed by the criminal justice system) and justice (transformation of a system that perpetuates harm). Praying for the incarcerated and their families is mercy. Advocating for criminal justice reform — sentencing reform, re-entry support, elimination of predatory prison practices — is justice. Both are expressions of the same calling." },
];

const scriptures = [
  { verse: "Matthew 25:36", text: "I was in prison and you came to visit me." },
  { verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
  { verse: "Isaiah 61:1", text: "He has sent me to proclaim freedom for the captives and release from darkness for the prisoners." },
  { verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
];

type PrisonEntry = { id: string; date: string; grief: string; contact: string; prayer: string };

export default function PrisonFamilyFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PrisonEntry[]>([]);
  const [grief, setGrief] = useState(""), [contact, setContact] = useState(""), [prayer, setPrayer] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_prisonfamilyj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const e: PrisonEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief: grief.trim(), contact: contact.trim(), prayer: prayer.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_prisonfamilyj_entries", JSON.stringify(updated));
    setGrief(""); setContact(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_prisonfamilyj_entries", JSON.stringify(updated));
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
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Families of the Incarcerated</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For spouses, children, and parents of incarcerated loved ones — who share a sentence they did not receive — and for the churches called to be present to the whole family, not only the person behind bars.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; Prison Fellowship: prisonfellowship.org &nbsp;|&nbsp; Angel Tree: angeltree.org</p>
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
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What grief are you carrying about your loved one today?</label>
              <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="The absence, the shame, the fear, the uncertainty..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What contact have you maintained, or what contact do you need to make?</label>
              <textarea value={contact} onChange={e => setContact(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Letters, calls, visits, prayers..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What are you asking God for your loved one and your family right now?</label>
              <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Safety, transformation, restoration, provision..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Grief:</strong> {e.grief}</p>
                {e.contact && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Contact:</strong> {e.contact}</p>}
                {e.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "57LVVwba6_8", title: "The Joseph Story: Forgiveness", channel: "Timothy Keller", description: "Keller on Joseph — who was imprisoned unjustly and whose story became the vehicle for redemption and reconciliation at a family and national level." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Hard", channel: "Timothy Keller", description: "Keller on the complexity of forgiveness — relevant for families navigating the harm done by their incarcerated loved one and the longer arc of reconciliation." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the practice for those in sustained, unresolved suffering — families waiting for release, for transformation, for reconciliation." },
              { videoId: "G9B0n0JJoSQ", title: "The Color of Compromise", channel: "Jemar Tisby — TGC", description: "Tisby on the intersection of race, justice, and the church — essential context for understanding the racial dimensions of mass incarceration and the church's calling." },
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
