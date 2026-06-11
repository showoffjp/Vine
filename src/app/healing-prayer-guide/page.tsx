"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Is the Healer — Yahweh Rapha and the Nature of Divine Healing", verse: "Exod 15:26", text: "I am the Lord, who heals you — Yahweh Rapha. Healing is not merely something God does; it is part of who he is. In Exodus 15, God reveals this name immediately after Israel's deliverance from Egypt, linking his healing character to covenant relationship. The broader question of whether physical healing is guaranteed in the Atonement — grounded in Isaiah 53:5 and 1 Peter 2:24 — has divided careful theologians. The most defensible position recognizes both dimensions: healing is indeed provided for in Christ's atoning work, but its full realization awaits the final resurrection (Rom 8:23). This already-and-not-yet framework takes the Scripture seriously without demanding certainty about specific outcomes. God is genuinely and deeply committed to human wholeness — body, soul, and spirit — and his healing character means that praying for healing is always praying in the direction of his will." },
  { title: "Jesus Healed — What His Healing Ministry Reveals About God's Will", verse: "Matt 8:16-17", text: "Jesus healed all who came to him. Not most. Not the ones with sufficient faith. All. A systematic reading of the Gospels reveals that Jesus never refused a request for healing, never said the person needed to suffer for spiritual development, and never suggested God wanted the illness to remain. This is the most reliable window we have into God's will for human bodies. The debate between cessationists — who argue healing gifts ceased with the apostolic age — and continuationists — who argue they continue throughout church history — has real stakes for how we pray. The weight of both church history and biblical evidence supports continuationism: the gifts of healing are still operative, still given, and still expected in communities of faith. Jesus's healing ministry was not merely a credential for his messiahship; it was a revelation of the Father's heart for broken human bodies." },
  { title: "James 5:14-16 — The Elder Protocol for Healing Prayer", verse: "James 5:14-16", text: "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven. James gives the church a specific protocol for healing prayer: community, elders, anointing with oil, prayer in the name of Jesus, and confessing sins to one another. The anointing with oil was both medicinal (common in the ancient world) and symbolic — set-apart, consecrated for God's purposes. The connection James draws between sin, confession, and healing is not a claim that all illness is caused by sin, but an acknowledgment that unconfessed sin can impede spiritual and physical restoration. The prayer of faith is not a magic formula — it is a relational act of trust offered by a community gathered around a suffering person, believing that the God who heals is present and active." },
  { title: "Why Doesn't God Always Heal? — Honest Theology for Real Suffering", verse: "2 Cor 12:9", text: "Paul prayed three times for his thorn in the flesh to be removed. God's answer was no — not from absence or indifference but with a purpose: that my power is made perfect in weakness. Epaphroditus nearly died (Phil 2:27). Trophimus was left sick at Miletus (2 Tim 4:20). These are not embarrassments to a theology of healing; they are part of its honest texture. Healing is a partial eschatological fulfillment — a sign of the coming kingdom, real and available, but not yet universal. God is sovereign and his purposes in suffering are sometimes hidden from us. The right posture is to pray with confident faith, to anoint and gather the community, and to hold outcomes with open hands — trusting the character of the healer even when the specific healing does not come as and when we ask. Faith is not certainty about the outcome; it is certainty about the one to whom we pray." },
  { title: "Emotional and Spiritual Healing — Often More Needed Than Physical", verse: "Luke 4:18", text: "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives. Jesus's mandate in Luke 4 is not limited to physical bodies — it explicitly includes the broken-hearted, the captives, the oppressed. The inner healing movement, developed through the work of Leanne Payne, John Wimber, and Francis MacNutt, addresses the healing of memories and the emotional wounds that distort our experience of God and relationship. This is not a technique but a ministry: bringing the presence of Christ into the actual places of wounding — abuse, abandonment, shame, fear — and allowing his truth and love to do what only he can do. The relationship between forgiveness and healing is direct: unforgiveness creates an ongoing wound; extending forgiveness (which is not the same as excusing or reconciling) releases us from that ongoing injury. Emotional healing is often more transformative, more needed, and more lasting than physical healing for the majority of people who seek prayer." },
];

const voices = [
  { id: "fm", name: "Francis MacNutt", role: "Author, Healing; foundational figure in Catholic and ecumenical healing prayer", quote: "The prayer of faith for healing is not a demand upon God — it is an act of trust in the God who heals. We pray with confidence not because we are certain of the outcome but because we are certain of his character. We hold the prayer in open hands: eager for the healing, surrendered to the healer.", bio: "MacNutt's Healing remains the most thorough and balanced treatment of Christian healing prayer available. A Dominican priest turned Protestant minister, MacNutt brought together Catholic sacramental tradition and charismatic renewal in a framework that takes both faith and mystery seriously. His distinction between 'healing' and 'curing' — God always works toward wholeness, even when physical cure does not come — is essential for praying with faith without presumption. His work with soaking prayer and inner healing has shaped a generation of healing ministry practitioners." },
  { id: "jd", name: "Jack Deere", role: "Author, Surprised by the Power of the Spirit; former Dallas Theological Seminary professor", quote: "I was a cessationist by training and by conviction. Then I encountered the actual biblical text — not the text filtered through a tradition that had already decided the gifts had ceased. What I found was a God who heals, who speaks, who is present in power — not just in the first century but in every century. The gifts did not cease. They were never supposed to.", bio: "Deere's Surprised by the Power of the Spirit is one of the most intellectually rigorous defenses of continuationism available — particularly significant because Deere came out of the heart of cessationist Reformed evangelicalism. His account of how he encountered the healing gifts and was compelled by Scripture and history to revise his position is both honest and theologically serious. His work provides the theological foundation for why healing prayer is still valid and expected in the church today." },
  { id: "dl", name: "Dr. Diane Langberg", role: "Author, Suffering and the Heart of God; trauma psychologist and ordained minister", quote: "The body of Christ is meant to be a healing community — a place where wounds can be named without shame, where suffering is not rushed toward resolution, where people are accompanied rather than fixed. The church has been given the ministry of presence, which is often more healing than the ministry of answers.", bio: "Langberg's Suffering and the Heart of God is the definitive Christian treatment of trauma and the church's role in healing. A clinical psychologist with decades of experience treating trauma survivors, Langberg insists that emotional and psychological healing is inseparable from spiritual formation — and that the church is both uniquely positioned and uniquely obligated to provide the community of care that trauma recovery requires. Her work addresses how the body of Christ can embody healing through presence, witness, and long-suffering accompaniment, even when miraculous physical healing does not occur." },
];

const practices = [
  { icon: "🙏", title: "ACTS Prayer for Healing Requests", text: "Structure your healing prayer using the ACTS framework: Adoration (acknowledging who God is as Yahweh Rapha), Confession (removing barriers of unconfessed sin), Thanksgiving (for healings already received, partial and complete), and Supplication (specific, honest requests for healing). This framework prevents healing prayer from becoming a list of demands and keeps it rooted in relationship with the God who heals." },
  { icon: "🫙", title: "Anointing with Oil and Elders Prayer", text: "Take James 5:14-16 seriously as a church practice — not as a last rite but as a first response to serious illness. Gather trusted elders or prayer leaders, use oil as a symbolic act of consecration, and pray specifically and expectantly over the person who is sick. This practice embeds healing prayer in community rather than isolating the sick person, and it applies the authority of the gathered church in Jesus's name." },
  { icon: "🌊", title: "Soaking Prayer — Sustained Intercession Over Time", text: "Soaking prayer is extended, unhurried prayer in the presence of God — remaining in his presence over a sustained period rather than offering a brief petition and moving on. For healing, soaking prayer invites the person to simply rest in God's presence while intercessors pray quietly around them. The practice is rooted in the conviction that the healing presence of Christ does work over time, and that rushed prayer often misses what patient waiting receives." },
  { icon: "💛", title: "Inner Healing Prayer — Healing of Memories", text: "Inner healing prayer invites Christ into specific memories of wounding — abuse, abandonment, trauma, shame — and asks him to bring his truth and love into those places. It is not visualization technique or psychological suggestion; it is a specific application of the gospel to the places where the enemy has established strongholds through the pain of our past. Work with a trained inner healing prayer minister or Christian counselor for deep wounds." },
  { icon: "📓", title: "Thanksgiving Journaling for Answered and Partial Healings", text: "Keep a record of specific prayers for healing and what you have observed over time — including partial improvements, unexpected encouragements, and moments of peace or breakthrough. The act of recording builds faith, creates a testimony, and prevents discouragement from causing you to overlook genuine answers. Many full healings are preceded by a series of partial healings that are easy to miss without the discipline of recording." },
];

const scriptures = [
  { verse: "Exod 15:26", text: "He said, 'If you listen carefully to the Lord your God and do what is right in his eyes, if you pay attention to his commands and keep all his decrees, I will not bring on you any of the diseases I brought on the Egyptians, for I am the Lord, who heals you.'" },
  { verse: "James 5:14-16", text: "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven." },
  { verse: "Matt 8:16-17", text: "When evening came, many who were demon-possessed were brought to him, and he drove out the spirits with a word and healed all the sick. This was to fulfill what was spoken through the prophet Isaiah: 'He took up our infirmities and bore our diseases.'" },
  { verse: "Isa 53:5", text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." },
  { verse: "3 John 1:2", text: "Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well." },
  { verse: "Luke 4:18", text: "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free." },
];

type HPEntry = { id: string; date: string; request: string; howPrayed: string; outcome: string };

export default function HealingPrayerGuidePage() {
  const [tab, setTab] = useState("theology");
  const [hpJournal, setHpJournal] = useState<HPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_healingprayer_entries") ?? "[]"); } catch { return []; }
  });
  const [jRequest, setJRequest] = useState("");
  const [jHowPrayed, setJHowPrayed] = useState("");
  const [jOutcome, setJOutcome] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_healingprayer_entries", JSON.stringify(hpJournal)); } catch {}
  }, [hpJournal]);

  function saveEntry() {
    if (!jRequest.trim() && !jHowPrayed.trim()) return;
    setHpJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), request: jRequest, howPrayed: jHowPrayed, outcome: jOutcome }, ...prev]);
    setJRequest(""); setJHowPrayed(""); setJOutcome("");
  }
  function deleteEntry(id: string) { setHpJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Prayer &amp; Healing</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Healing Prayer Guide</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Biblical theology and practical guidance for praying for physical, emotional, and spiritual healing — with honesty about both God&#39;s will and the mystery of suffering.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? TEAL : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: TEAL, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
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
                  <div style={{ color: TEAL, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${TEAL}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
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
                  <div style={{ color: TEAL, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Healing Prayer Journal</h3>
                <textarea placeholder="What healing are you praying for — physical, emotional, or spiritual?" value={jRequest} onChange={e => setJRequest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="How have you prayed so far — alone, with others, anointing, soaking prayer?" value={jHowPrayed} onChange={e => setJHowPrayed(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What have you seen or experienced — any change, partial healing, or peace in the waiting?" value={jOutcome} onChange={e => setJOutcome(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: TEAL, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {hpJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : hpJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.request && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Request:</strong> {e.request}</p>}
                  {e.howPrayed && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>How prayed:</strong> {e.howPrayed}</p>}
                  {e.outcome && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Outcome:</strong> {e.outcome}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "mOFknFm_lhU", title: "Yahweh Rapha — God as Healer", channel: "Theology of Healing", description: "An exploration of God's character as healer — what Yahweh Rapha means, how healing fits into the Atonement, and what the already-and-not-yet framework means for how we pray with faith." },
                { videoId: "MX6T4L4A94s", title: "Jesus's Healing Ministry and God's Will", channel: "Gospel & Kingdom", description: "A careful look at the Gospels' record of Jesus healing all who came to him, and what his healing ministry reveals about the Father's heart for broken human bodies and the continuation of healing gifts in the church." },
                { videoId: "VgJpv6yOAOc", title: "James 5 and the Elder Protocol for Healing", channel: "Church Practice & Scripture", description: "Exegesis of James 5:14-16 — the anointing, the prayer of faith, the role of confession, and why this passage calls the whole community into the healing ministry rather than isolating it to a few." },
                { videoId: "DGJoYJEjABQ", title: "Inner Healing and Healing of Memories", channel: "Francis MacNutt / Christian Healing Ministries", description: "MacNutt and colleagues on inner healing prayer — bringing the presence of Christ into the wounded places of memory and emotion, and how emotional healing often unlocks physical and spiritual breakthrough." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: TEAL, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
