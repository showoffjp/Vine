"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Specifically Declares Himself Father to the Fatherless", verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. The Hebrew word for fatherless is yatom — orphan, one without a father. The psalmist does not say God sympathizes with the fatherless or understands their situation. He says God is their father. This is a specific identity claim: the God of Israel constitutes himself as the paternal presence that is absent in the fatherless person's life. This is not metaphor — it is the theological foundation for the fatherless person's identity and belonging." },
  { title: "The Father-Wound Is Real — and It Does Not Exclude You From the Kingdom", verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me. The psalmist names the abandonment specifically: father and mother. The possibility that those who were supposed to provide primary attachment and identity might forsake is not dismissed or spiritualized away. It is named honestly — and then answered: the Lord will receive me. The fatherless person who has been told that their wound is a spiritual problem to overcome rather than a real loss to grieve has been poorly served by this psalm's honesty." },
  { title: "Jesus Modeled an Alternative Father Figure Through His Relationship With His Disciples", verse: "John 15:15", text: "I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have told you. Jesus' relational posture toward his disciples was parental in the best sense: sharing, teaching, advocating, delighting in, grieving over. For the person whose father was absent, abusive, or emotionally unavailable, the gospel offers not just a theological father in heaven but a person — Jesus — who demonstrated what healthy paternal relationship looks like in human terms." },
  { title: "Adoption Into God's Family Is Not Metaphor — It Is Actual Legal Standing", verse: "Romans 8:15-16", text: "The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, 'Abba, Father.' The Spirit himself testifies with our spirit that we are God's children. Paul's language is specific: adoption, not sympathy. The Greek word huiothesia is a legal term for formal adoption — the conferring of full family standing, inheritance rights, and relational access. The fatherless person who comes to faith is adopted. Not fostered. Not visiting. Adopted." },
  { title: "The Father-Wound Heals Over Time — Through God, Mentors, and Community", verse: "Malachi 4:6", text: "He will turn the hearts of the parents to their children, and the hearts of the children to their parents. The final words of the Old Testament are about fathers and children: the healing of the broken generational bond. The eschatological healing that Malachi envisions begins now in the people of God — in older men who invest in younger men, in communities that take the fatherless seriously, in pastors and mentors who become the paternal presence that biological fathers failed to provide." },
];

const voices = [
  { id: "jw", name: "John Eldredge", role: "Author, Wild at Heart; Ransomed Heart Ministries", quote: "Most of the woundedness men carry in their souls can be traced back to an absent, passive, or abusive father. The core question that fathers are supposed to answer — 'Do you see me? Am I strong? Am I good? Do I have what it takes?' — goes unanswered in the fatherless person's soul, and they spend their lives trying to answer it through performance, relationships, or substances. The healing is God the Father answering the question the earthly father failed to.", bio: "Eldredge's work on the father-wound and masculine identity has resonated widely, particularly among men who grew up without present fathers. His integration of the father-wound with spiritual formation and the character of God as Father provides a framework for healing that is both psychologically informed and theologically grounded." },
  { id: "ls", name: "Ligon Duncan", role: "Chancellor, Reformed Theological Seminary; Author", quote: "When Paul says 'Abba, Father,' he is using the most intimate Aramaic word for father — the word a child used with their own papa. That word is given to every believer, including those who had no papa to speak of. The Spirit puts the word of intimate filial access into the mouth of every adopted child of God. This is not a consolation prize. It is the real thing.", bio: "Duncan's pastoral and theological work on the fatherhood of God provides the theological depth that makes the 'God as Father' framework more than sentiment. His grounding in the legal concept of adoption in Paul's letters, and its implications for identity and access, equips the fatherless believer with theological resources for their healing." },
  { id: "cb", name: "Crystal Evans Hurst", role: "Author, She's Still There; Speaker", quote: "I grew up without a father who was present. The absence shaped everything about how I understood love, belonging, and my own worth. What the gospel did was not erase the wound — it addressed it specifically. It gave me a Father whose presence was not conditional on my performance, whose love did not leave when life got hard, and whose approval was not something I had to earn. That changed me.", bio: "Hurst's testimony of growing up fatherless and finding the specific healing that the gospel's vision of God as Father offers is one of the most accessible and emotionally resonant available. Her work addresses women's experience of fatherlessness specifically, which is often underrepresented in a space that focuses primarily on men." },
];

const practices = [
  { icon: "📖", title: "Study the Fatherhood of God as Theological Medicine", text: "The specific attributes of God as Father — his consistent presence, unconditional acceptance, delight in his children, advocacy for them, discipline that comes from love — are not abstract doctrines for the fatherless person. They are targeted medicine for the specific wounds that paternal absence or harm produces. Studying what the Bible says about God's paternal character — not in one pass but repeatedly over years — gradually reprograms the implicit model of what 'father' means." },
  { icon: "🤝", title: "Seek a Mentor or Spiritual Father Figure Intentionally", text: "Malachi's vision of fathers and children being turned toward each other is fulfilled in part through intentional mentoring relationships. For the fatherless adult, finding an older man or woman who can provide the paternal or maternal presence that was absent is not weakness — it is wisdom. This requires vulnerability and asking, which can be the hardest part. Churches, small groups, and counselors can help identify and form these relationships." },
  { icon: "💬", title: "Grieve the Father You Did Not Have — Specifically and Honestly", text: "Many fatherless people have never specifically grieved what they missed. They either minimize the loss ('lots of people grew up without fathers') or catastrophize it into a permanent deficit. Honest grief — naming what specifically you missed, what it would have meant to have had an engaged, loving father, what its absence cost you — is the prerequisite for healing. A therapist or spiritual director can facilitate this work in ways that protect it from becoming either dismissal or self-pity." },
  { icon: "✝️", title: "Pray Using the Language of Abba — Regularly and Intentionally", text: "Romans 8:15 says the Spirit enables the cry 'Abba, Father.' But for those whose father-experience was painful or absent, this language may feel false or inaccessible. The practice of intentionally using this language in prayer — slowly, honestly, over time — is part of the reprogramming. Not performed warmth, but authentic practice: 'Father, I struggle to trust this word for you. Help me believe it is true for me.' That prayer is itself the beginning of healing." },
  { icon: "🏘️", title: "Invest in Being the Presence for Others That You Needed", text: "Many adults who have healed from fatherlessness discover that their wound becomes a gift: they know precisely what fatherless children and teenagers need because they were once that person. Mentoring, investing in youth ministry, becoming the steady adult presence for a young person — this is not just charity. It is the fulfillment of Malachi's vision, the continuation of the healing project in the next generation." },
];

const scriptures = [
  { verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling." },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
  { verse: "Romans 8:15-16", text: "The Spirit you received brought about your adoption to sonship. And by him we cry, 'Abba, Father.' The Spirit himself testifies with our spirit that we are God's children." },
  { verse: "John 14:18", text: "I will not leave you as orphans; I will come to you." },
  { verse: "Ephesians 1:5", text: "He predestined us for adoption to sonship through Jesus Christ, in accordance with his pleasure and will." },
  { verse: "Malachi 4:6", text: "He will turn the hearts of the parents to their children, and the hearts of the children to their parents." },
];

type FLEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function FatherlessnessPage() {
  const [tab, setTab] = useState("theology");
  const [flJournal, setFlJournal] = useState<FLEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_fatherlessnessj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_fatherlessnessj_entries", JSON.stringify(flJournal)); } catch {}
  }, [flJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setFlJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setFlJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Family Wounds &amp; Healing</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Fatherlessness</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Growing up without a present father — the father-wound, the theology of God as Father, adoption into family, and the long work of healing.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? PURPLE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="What question did I most need my father to answer? Did he?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What does God's adoption of me say to that specific question?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One step toward healing or mentoring this week" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {flJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : flJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Question:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Truth:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "4Eg_di-O8nM", title: "The Fatherhood of God — Francis Chan", channel: "Desiring God", description: "Chan on the radical intimacy of the gospel's vision of God as Father — what it means to be adopted, welcomed, and beloved by a God who does not leave." },
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom — Family and Belonging", channel: "Tim Keller / The Gospel Coalition", description: "Keller on how the Kingdom of God creates new family structures — including the church as substitute family that Jesus promised (Mark 10:29-30) — for those whose biological families have failed them." },
              { videoId: "mC-zw0zCCtg", title: "Abba, Father — The Intimacy of Adoption", channel: "Tim Keller / The Bible Project", description: "Keller on Romans 8:15 and the adoption language of the gospel — what 'Abba, Father' means for those who never had a present father, and how the Spirit enables this cry in the believer's heart." },
              { videoId: "1nzj7Sf395o", title: "Healing the Father-Wound", channel: "CCEF", description: "A counseling-focused treatment of the father-wound — what it is, how it shows up in adult relationships and spirituality, and what the healing process looks like through the gospel and community." },
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
