"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type DDEntry = { id: string; date: string; fear: string; hope: string; preparation: string };

export default function DeathDyingGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_deathdying_entries") ?? "[]"); } catch { return []; }
  });
  const [jFear, setJFear] = useState("");
  const [jHope, setJHope] = useState("");
  const [jPreparation, setJPreparation] = useState("");

  useEffect(() => { localStorage.setItem("vine_deathdying_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jFear.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), fear: jFear, hope: jHope, preparation: jPreparation }, ...prev]);
    setJFear(""); setJHope(""); setJPreparation("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Life</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Death &amp; Dying: A Christian Guide
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Death is the great certainty that most of us spend our lives avoiding. Christianity has always insisted on looking at it honestly &mdash; because in Christ, death has been defeated, not denied. The resurrection changes everything about how we face dying, grieve the dead, and prepare for our own end. This guide explores what it means to die well, to grieve with hope, and to care for the dying as an act of worship.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "Death as Enemy and Conquered Foe (1 Cor 15:26, 54-57)",
                body: "The last enemy to be destroyed is death. Christianity is unique in calling death an enemy &mdash; not a natural transition, not an illusion, not a friend to be welcomed on its own terms, but a real foe that entered the world through sin (Rom 5:12). The Christian does not &ldquo;celebrate death&rdquo; or sentimentalize it. But the same Paul who calls death an enemy also cries out in triumph: &ldquo;Death is swallowed up in victory. O death, where is your victory? O death, where is your sting?&rdquo; (1 Cor 15:54-55). The sting of death is sin, and the power of sin is the law &mdash; but Christ has dealt with both. Death remains an enemy, but a disarmed, defeated one. We mourn at death, but we mourn as those who know the end of the story.",
              },
              {
                title: "The Resurrection of the Body: Christianity&rsquo;s Distinctive Hope (1 Cor 15:20-23)",
                body: "But in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep. The Christian hope is not the immortality of the soul &mdash; a Greek idea that the body is a prison and death releases the true self. The Christian hope is the resurrection of the body: the same bodies that were created good, marred by the fall, and that died will be raised, glorified, and transformed (Phil 3:21). The resurrection of Jesus is the template and guarantee. He rose bodily &mdash; the tomb was empty, the disciples touched him, he ate fish &mdash; and his resurrection is the first installment of the general resurrection. Your body matters to God. It will be redeemed.",
              },
              {
                title: "Dying Well: The Ars Moriendi Tradition (Phil 1:21-23)",
                body: "For to me, to live is Christ and to die is gain. The medieval church developed a genre called ars moriendi &mdash; &ldquo;the art of dying.&rdquo; The assumption was that dying, like living, requires preparation, wisdom, and practice; that a holy death is possible; and that how a person dies is itself a form of witness and worship. Paul&rsquo;s attitude in Philippians 1 captures the essence: he is not eager to die for its own sake, but departure to be with Christ is &ldquo;better by far.&rdquo; He holds life and death with loose hands because his grip is on Christ, not on survival. The person who has practiced dying &mdash; who has died daily to self, ego, and the fear of loss &mdash; faces physical death from a different place than one for whom it comes as total surprise.",
              },
              {
                title: "Grief, Mourning, and the Permission to Weep (John 11:33-35; 1 Thess 4:13)",
                body: "When Jesus therefore saw her weeping, and the Jews also weeping who had come with her, he was deeply moved in his spirit and greatly troubled. And he said, &ldquo;Where have you laid him?&rdquo; They said to him, &ldquo;Lord, come and see.&rdquo; Jesus wept. The shortest verse in the Bible is also one of its most important: Jesus wept at Lazarus&rsquo;s tomb, even knowing he was about to raise him. Grief is not faithlessness. Paul does not tell the Thessalonians not to grieve &mdash; he tells them not to grieve &ldquo;as those who have no hope.&rdquo; The difference between Christian grief and hopeless grief is not the absence of tears but the presence of a future. Lament is the language of those who believe the world should be different and trust that God will make it so.",
              },
              {
                title: "Preparing Spiritually for Death: The Examination of the Soul (Ps 90:12; Heb 9:27)",
                body: "So teach us to number our days that we may get a heart of wisdom. Moses&rsquo;s prayer in Psalm 90 is the prayer of one who takes seriously the brevity of life and asks for wisdom that flows from that awareness. Hebrews 9:27 states the universal reality: &ldquo;It is appointed for man to die once, and after that comes judgment.&rdquo; Christian preparation for death is not morbid but clarifying: it involves putting one&rsquo;s affairs in order (spiritually and practically), pursuing reconciliation with those estranged, making peace with the life lived, entrusting unfinished things to God, and dying with a clear conscience toward God and neighbor. The Christian who has confessed, forgiven, and received can face death as a passage, not a catastrophe.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "Practice &ldquo;memento mori&rdquo; &mdash; a regular, deliberate remembrance of your own death. Not morbidly, but wisely: set aside time weekly or monthly to sit with the reality that your life is finite, your time is a gift, and the things you are anxious about will look different in light of eternity. Ask: what will I wish I had done? What matters most?",
              "If you have unreconciled relationships, outstanding forgiveness, or things left unsaid to those you love, do not wait for a terminal diagnosis to address them. The art of dying well begins decades before death. Reconcile, bless, and speak now while you have the time and health to do it freely.",
              "When you are with someone who is dying, do not fill the silence with false comfort or theological explanations. Be present. Hold their hand. Pray aloud if they welcome it. Read Scripture &mdash; particularly Psalms 23, 46, 90, and John 14. Your presence is the ministry; you do not need words to fix what only God can redeem.",
              "Engage in concrete end-of-life planning as an act of faithfulness: create or update a will, designate a healthcare proxy, write a letter to those you love, and make your wishes for burial and funeral known. These are not faithless acts &mdash; they are acts of love that relieve your family of impossible decisions made in the worst moments.",
              "Read or re-read 1 Corinthians 15 slowly, all 58 verses. Let Paul&rsquo;s argument for the resurrection sink in as the factual ground of Christian hope. Identify which verses most directly address your specific fears about death &mdash; and commit at least one to memory.",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "N.T. Wright",
                work: "Surprised by Hope",
                quote: "The point of the resurrection&hellip; is that the present bodily life is not valueless just because it will die. God will raise it up, as he raised Jesus. What you do in the present &mdash; by painting, preaching, singing, sewing, praying, teaching, building hospitals, digging wells, campaigning for justice &mdash; will last into God&rsquo;s future.",
                bio: "N.T. Wright is a New Testament scholar and former Bishop of Durham who has written the most accessible and theologically rigorous contemporary treatment of the resurrection and Christian hope in Surprised by Hope. His central argument &mdash; that Christian hope is not escape from the world into a disembodied heaven but the renewal of creation through resurrection &mdash; has reshaped how millions of Christians think about death, the afterlife, and the meaning of present action.",
              },
              {
                name: "Henri Nouwen",
                work: "Our Greatest Gift: A Meditation on Dying and Caring",
                quote: "Can we choose to die well? I think we can &mdash; not by willing our own death or by making death more attractive than it is, but by claiming that dying is not a way out but a way into the fullness of life. Dying is the most important act of living. It is our last and greatest gift to those we leave behind.",
                bio: "Henri Nouwen was a Dutch Catholic priest and spiritual writer who taught at Notre Dame, Yale, and Harvard before spending his final years at L&rsquo;Arche Daybreak community in Canada. His book Our Greatest Gift was written after a serious accident brought him close to death. His meditation on dying and caring for the dying is marked by the pastoral wisdom of one who has walked alongside suffering people &mdash; and found that dying can be a gift rather than only a deprivation.",
              },
              {
                name: "C.S. Lewis",
                work: "A Grief Observed",
                quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing. At other times it feels like being mildly drunk, or concussed. There is a sort of invisible blanket between the world and me.",
                bio: "C.S. Lewis wrote A Grief Observed following the death of his wife Joy Davidman from cancer. It is one of the most honest accounts of Christian grief ever written &mdash; unsentimental, angry, doubting, and ultimately trusting. Lewis does not perform faith; he records the raw experience of a man whose theological convictions are being tested by unbearable loss. The book has been a companion to millions who needed permission to grieve honestly without abandoning hope.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {[
              { ref: "1 Corinthians 15:54-57", text: "&ldquo;Death is swallowed up in victory. O death, where is your victory? O death, where is your sting?&rdquo; The sting of death is sin, and the power of sin is the law. But thanks be to God, who gives us the victory through our Lord Jesus Christ.", insight: "Paul&rsquo;s resurrection theology culminates not in argument but in doxology. The victory is not earned but given &mdash; received through Christ who absorbed death&rsquo;s sting on the cross." },
              { ref: "John 11:25-26", text: "Jesus said to her, &ldquo;I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?&rdquo;", insight: "Jesus does not merely promise resurrection &mdash; he claims to be it. The hope is not an event but a person. The question is always personal: &ldquo;Do you believe this?&rdquo;" },
              { ref: "Philippians 1:21-23", text: "For to me to live is Christ, and to die is gain. If I am to live in the flesh, that means fruitful labor for me. Yet which I shall choose I cannot tell. I am hard pressed between the two. My desire is to depart and be with Christ, for that is far better.", insight: "Paul does not romanticize death, but he holds it without terror because his life is already &ldquo;hid with Christ in God&rdquo; (Col 3:3). Death cannot separate; it can only complete." },
              { ref: "1 Thessalonians 4:13-14", text: "But we do not want you to be uninformed, brothers, about those who are asleep, that you may not grieve as others do who have no hope. For since we believe that Jesus died and rose again, even so, through Jesus, God will bring with him those who have fallen asleep.", insight: "Grief is not prohibited; hopeless grief is. The resurrection of Jesus is the hinge: because he rose, the dead in Christ will rise. The grammar of Christian grief is &lsquo;not as those without hope.&rsquo;" },
              { ref: "Psalm 23:4", text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", insight: "The Psalm does not promise the absence of the valley &mdash; it promises presence in it. The shepherd&rsquo;s rod and staff are instruments of guidance and protection, not removal of danger." },
              { ref: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.", insight: "The final horizon of the Christian story is not death but its complete abolition &mdash; not the soul&rsquo;s escape from the body but God&rsquo;s renewal of all things. Every tear is personal; every tear is wiped by God himself." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.insight }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What specific fear about death or dying are you bringing before God?</label>
                  <textarea
                    value={jFear}
                    onChange={e => setJFear(e.target.value)}
                    placeholder="Name the fear honestly &mdash; the process, the loss of control, separation from loved ones, judgment..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What resurrection hope speaks directly to that fear?</label>
                  <textarea
                    value={jHope}
                    onChange={e => setJHope(e.target.value)}
                    placeholder="Which Scripture, promise, or truth about Christ addresses what you fear?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What preparation &mdash; spiritual or practical &mdash; do you sense God calling you to?</label>
                  <textarea
                    value={jPreparation}
                    onChange={e => setJPreparation(e.target.value)}
                    placeholder="Reconciliation, a letter to write, a will to draft, a conversation to have, a fear to surrender..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.fear && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Fear</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.fear}</p></div>}
                {e.hope && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Hope</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.hope}</p></div>}
                {e.preparation && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Preparation</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.preparation}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="qv_5n0OlLYA" title="The Christian View of Death and Resurrection Hope" />
            <VideoEmbed videoId="BhBoIWQqcYk" title="Dying Well &mdash; A Christian Perspective on a Holy Death" />
            <VideoEmbed videoId="2S5MrjkJOOE" title="Heaven Is Real: The Christian Hope for Eternity" />
            <VideoEmbed videoId="g_XoIo5HiCM" title="Grief and Hope: Mourning as Those Who Believe in the Resurrection" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
