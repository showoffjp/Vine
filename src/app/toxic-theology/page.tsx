"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Harm Done in God's Name Is Still Harm", verse: "Matthew 23:4", text: "Jesus reserved his harshest words not for the irreligious but for religious leaders who laid heavy burdens on people without lifting a finger to help them. Toxic theology — whether prosperity gospel, legalism, spiritual abuse, or high-control religion — does real damage to real people. The fact that it is packaged in Scripture does not make it less harmful. God is not confused about the difference between religion that oppresses and the gospel that liberates." },
  { title: "Good Fruit Is the Test, Not Correct Language", verse: "Matthew 7:16-17", text: "By their fruit you will recognize them. Jesus' test for true and false teachers is not doctrinal precision but fruit: what does this teaching produce in people? Does it produce love, freedom, and genuine transformation? Or does it produce shame, fear, exhaustion, and dependency on the teacher? Fruit is observable, and the fruit of toxic theology is the suffering of the people who received it." },
  { title: "God Is Not the Abuser Who Used His Name", verse: "Psalm 103:8-10", text: "The Lord is compassionate and gracious, slow to anger, abounding in love. Many survivors of toxic theology experience God through the filter of those who harmed them. The authoritarian pastor, the shaming parent, the controlling community — these are not God. Recovery from spiritual abuse includes the long, patient work of separating who God actually is from who God was presented as by those who harmed you. This is legitimate spiritual work, not rebellion." },
  { title: "Doubt Is Not Apostasy — It Is Often Fidelity", verse: "John 20:27", text: "When Thomas doubted, Jesus did not expel him from the disciples — he invited Thomas to examine the evidence. Toxic systems punish doubt because doubt threatens the system's power. But honest doubt about a version of Christianity that wounded you is not the same as doubt about God. It is often the beginning of finding a faith that is actually true. God is not afraid of your questions." },
  { title: "The True Gospel Produces Freedom, Not Fear", verse: "Galatians 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery. Paul was writing about exactly this situation — people being pulled back into religious systems that substituted performance for grace. If a version of Christianity is producing chronic shame, compulsive religious behavior, terror of God's rejection, and exhaustion from endless requirements, something is deeply wrong with the version — not with you." },
];

const voices = [
  { id: "dl", name: "Diane Langberg", role: "Psychologist, Author of Redeeming Power", quote: "Spiritual abuse is the use of the things of God — Scripture, prayer, spiritual authority — to serve the abuser rather than the people they are supposed to shepherd. It is a profound betrayal that wounds at the deepest level, because it involves the misuse of what was meant to heal.", bio: "Langberg's work is essential for survivors of spiritual abuse and those who care for them. Her clinical expertise and theological depth make her uniquely equipped to address the intersection of trauma and faith. Redeeming Power is a definitive resource." },
  { id: "ac", name: "Scot McKnight & Laura Barringer", role: "Authors, A Church Called Tov", quote: "Toxic church cultures form when institutions protect themselves at the expense of the people they are supposed to serve. The gospel forms cultures of goodness — tov — where people flourish, not where they are silenced and controlled.", bio: "A Church Called Tov examines what creates toxic church cultures and what genuinely healthy, Christlike communities look like. It is both a diagnostic and a constructive resource, grounded in biblical theology and behavioral research." },
  { id: "wt", name: "Wade Mullen", role: "Author, Something's Not Right", quote: "An abusive religious system will work very hard to make you believe that your perception of what happened is wrong, that your pain is your own fault, and that leaving will be catastrophic. Trusting your own perceptions is not a sin — it is a basic form of dignity.", bio: "Mullen's book Something's Not Right is an accessible, compassionate guide to recognizing spiritual manipulation and abuse. He identifies the patterns of behavior that abusive religious systems use and equips survivors to trust their own experience." },
];

const practices = [
  { icon: "⏸️", title: "You Are Allowed to Leave", text: "One of the lasting effects of toxic religious communities is the fear of leaving — the belief that God will punish you for departing, or that you will lose your salvation, relationships, or identity. These beliefs are often deliberately cultivated by controlling systems. Leaving an abusive church or religious context is not apostasy. It may be an act of self-protection that God is calling you toward." },
  { icon: "🔍", title: "Name What Happened", text: "Naming spiritual abuse or toxic theology for what it is is not bitterness or unforgiveness — it is honesty. Many survivors spend years minimizing what happened because calling it abuse feels disloyal or dramatic. But accurate language is healing. Was Scripture used to control you? Was doubt punished? Were leaders unaccountable? Was your suffering dismissed as sin or lack of faith? Naming these things accurately is the beginning of healing." },
  { icon: "🧠", title: "Find a Therapist Who Understands Religious Trauma", text: "Religious trauma syndrome is real and well-documented. Its symptoms include anxiety, depression, intrusive shame, difficulty making decisions, fear of questioning, and a disrupted relationship with God. A therapist who specializes in religious trauma or spiritual abuse can help you untangle what was genuinely Christian from what was manipulation. The Religious Trauma Institute (religioustraumainstitute.com) and Reclamation Collective are starting points." },
  { icon: "📖", title: "Re-Approach Scripture on Your Own Terms", text: "If Scripture was used as a weapon against you, approaching it again may be frightening or repellent. You are not obligated to rush back to it. When you do approach it, start with texts that are not weaponizable — Psalm 23, the Beatitudes, 1 Corinthians 13. Read commentaries by scholars who prioritize liberation over control. Read slowly. Stop when it is too much. The Bible belongs to you, not to those who abused it." },
  { icon: "🤲", title: "Find or Build a Different Community", text: "Isolation is both a symptom and a perpetuator of toxic theology recovery. The instinct to never go to church again is understandable — but humans are made for community, and healthy Christian communities do exist. Look for communities characterized by accountability of leaders, welcome of questions, honest dealing with suffering, and genuine care for people outside the community. If you can't find one, a small group of other survivors can itself become community." },
];

const scriptures = [
  { verse: "Galatians 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery." },
  { verse: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light." },
  { verse: "Ezekiel 34:4", text: "You have not strengthened the weak or healed the sick or bound up the injured. You have not brought back the strays or searched for the lost. You have ruled them harshly and brutally." },
  { verse: "1 John 4:18", text: "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love." },
  { verse: "Psalm 103:8", text: "The Lord is compassionate and gracious, slow to anger, abounding in love." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
];

type ToxicEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ToxicTheologyPage() {
  const [tab, setTab] = useState("theology");
  const [toxicJournal, setToxicJournal] = useState<ToxicEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_toxictheologyj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_toxictheologyj_entries", JSON.stringify(toxicJournal)); } catch {}
  }, [toxicJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setToxicJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setToxicJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Faith & Healing</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Recovering from Toxic Theology</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          Healing from spiritual abuse, legalism, and harmful religious teachings — and finding your way back to the real gospel.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Recovery Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What wound from toxic theology am I carrying right now?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is true about God that contradicts what I was taught to fear?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One small step toward freedom this week</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {toxicJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {toxicJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Wound: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Truth: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "3_-OEdC2uaY", title: "When the Church Hurts: Finding Your Way Back to God", channel: "The Gospel Coalition", description: "A pastoral conversation about spiritual harm from churches and theologies — what it is, why it happens, and how to hold onto faith when religious systems have caused real damage." },
              { videoId: "DShV4sG1LoE", title: "A Church Called Tov — Scot McKnight", channel: "Northern Seminary", description: "McKnight on the patterns of toxic church culture — the hero-driven church, the silencing of victims, the protection of power — and what a Tov (goodness-centered) church looks like." },
              { videoId: "jmz1l-BqXxU", title: "Emotionally Healthy Churches — Peter Scazzero", channel: "Emotionally Healthy Discipleship", description: "Scazzero on what makes a church community emotionally healthy — how to recognize the patterns of immature leadership that produce spiritual harm, and what transformation requires." },
              { videoId: "PKyLYSfmTwI", title: "Healing After Spiritual Abuse", channel: "The Allender Center", description: "Dan Allender on the specific damage done by spiritual abuse — how it differs from ordinary harm, why it cuts so deep, and what genuine healing from toxic theological environments requires." },
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
