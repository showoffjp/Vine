"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CCREntry = { id: string; date: string; concern: string; stewardship: string; action: string };

export default function CreationCarePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CCREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_creationcare_entries") ?? "[]"); } catch { return []; }
  });
  const [jConcern, setJConcern] = useState("");
  const [jStewardship, setJStewardship] = useState("");
  const [jAction, setJAction] = useState("");

  useEffect(() => { localStorage.setItem("vine_creationcare_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jConcern.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), concern: jConcern, stewardship: jStewardship, action: jAction }, ...prev]);
    setJConcern(""); setJStewardship(""); setJAction("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Society</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Creation Care
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The earth is the LORD&rsquo;s and everything in it &mdash; and humanity was placed in the garden to work it and keep it. Creation care is not a borrowed secular agenda but an original biblical vocation. This guide walks through the theology, voices, and practice of Christian stewardship of the created world.
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
                title: "The Stewardship Mandate — Made to Work and Keep (Genesis 1-2)",
                body: "Be fruitful and multiply and fill the earth and subdue it, and have dominion (Gen 1:28); the LORD God took the man and put him in the garden of Eden to work it and keep it (Gen 2:15). Dominion in Genesis is not domination but vice-regency: humanity images God by ruling as God rules &mdash; in care, blessing, and cultivation. The Hebrew verbs in Genesis 2:15, abad (to work, serve) and shamar (to keep, guard, watch over), are the same words later used of priestly service in the tabernacle. The first human vocation is priestly gardening. A reading of dominion that licenses exploitation reverses the text: the king in Israel&rsquo;s ideal was the servant of the flock, and the human is steward, not owner.",
              },
              {
                title: "The Earth Is the LORD&rsquo;s — Ownership and Trusteeship (Psalm 24:1)",
                body: "The earth is the LORD&rsquo;s and the fullness thereof, the world and those who dwell therein. Scripture never transfers ownership of creation to humanity. The land is mine, God says in Leviticus 25:23; with me you are but aliens and tenants. This single conviction reframes every environmental question: we do not manage our property as we see fit; we manage Someone Else&rsquo;s property according to the Owner&rsquo;s character. Sabbath laws, gleaning laws, and the land&rsquo;s own sabbath rest (Lev 25:1-7) all institutionalize the truth that creation has worth to God independent of its usefulness to us &mdash; God saw everything that he had made, and behold, it was very good, before humans had used any of it.",
              },
              {
                title: "Creation Groaning — the Cosmic Scope of Redemption (Romans 8:19-22)",
                body: "The creation waits with eager longing for the revealing of the sons of God... the creation itself will be set free from its bondage to corruption and obtain the freedom of the glory of the children of God. Paul personifies the whole non-human creation as groaning in labor pains &mdash; subjected to futility by human sin, yet awaiting liberation, not abolition. The fall fractured not only the divine-human relationship but the human-earth relationship (cursed is the ground because of you, Gen 3:17), and redemption is correspondingly cosmic in scope. Colossians 1:20 says God reconciles to himself all things, whether on earth or in heaven, through the blood of the cross. Creation is not stage scenery to be discarded; it is a fellow patient awaiting healing.",
              },
              {
                title: "Christian Environmentalism vs. Secular — Worship the Creator, Tend the Creation",
                body: "Christian creation care differs from secular environmentalism at the root even where it overlaps in practice. It refuses both errors Romans 1:25 names: worshiping the creature rather than the Creator (nature-romanticism, pantheism, treating the earth as ultimate) and despising the creature the Creator called good (utilitarian exploitation, gnostic indifference). Christians care for the earth not because nature is divine but because it is God&rsquo;s &mdash; a gift, a temple-cosmos, a witness (the heavens declare the glory of God, Ps 19:1). This grounding also guards against despair and apocalyptic anxiety: the future of the earth rests finally in the hands of the One who raised Jesus, which frees Christians to labor faithfully without messianic panic or fatalistic apathy.",
              },
              {
                title: "New Creation — Renewed, Not Discarded (Revelation 21, 2 Peter 3)",
                body: "Then I saw a new heaven and a new earth (Rev 21:1)... and the holy city, new Jerusalem, coming down out of heaven. The biblical hope is not evacuation from earth to a disembodied heaven but the marriage of heaven and earth &mdash; God dwelling with renewed humanity in a renewed creation. The resurrection of Jesus&rsquo; physical body is the prototype: continuity through transformation. If the present creation were destined only for the incinerator, care for it would be polishing brass on a sinking ship; but if it is destined for renewal &mdash; as Romans 8 and Revelation 21-22 indicate &mdash; then, as N.T. Wright argues, what is done in the Lord for the created order is not in vain (1 Cor 15:58). Creation care becomes an act of hope, a sign of the world to come.",
              },
              {
                title: "Climate, Creation, and the Poor — Environmental Care as Neighbor Love",
                body: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me (Matt 25:40). Environmental degradation is never only an ecological issue; it is a justice issue, because its heaviest costs fall on those least able to bear them &mdash; subsistence farmers facing failed rains, coastal communities without resources to relocate, children breathing polluted air in neighborhoods no one chose to protect. The prophets bind together the health of the land and the treatment of the vulnerable (Hos 4:1-3: there is no faithfulness... therefore the land mourns). For the Christian, creation care and care for the poor are not competing priorities but a single obedience: love of neighbor extended through the soil, water, and air on which every neighbor depends.",
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
              "Practice gratitude before consumption: before meals and purchases, pause to acknowledge the Creator and the creation &mdash; soil, rain, labor &mdash; behind what you receive, letting thanksgiving slow the reflex of acquisition.",
              "Audit one household pattern this month &mdash; food waste, energy use, single-use plastics, fast fashion &mdash; and make one concrete, sustainable change as an act of stewardship rather than a gesture of guilt.",
              "Keep a weekly sabbath that includes creation: walk without a phone, garden, sit under a tree &mdash; receiving the world as gift rather than raw material, as the land&rsquo;s own sabbath laws taught Israel (Lev 25:1-7).",
              "Eat lower on the supply chain where you can: learn where your food comes from, support local growers, and practice the older disciplines of moderation and contentment that Wendell Berry calls eating responsibly.",
              "Connect creation care to neighbor love: support one organization or local effort serving communities bearing the heaviest environmental burdens, and pray regularly for those most exposed to drought, flood, and pollution.",
              "Read Genesis 1-2 slowly with the stewardship mandate in view, then pray through Psalm 104 &mdash; letting its delight in creatures who exist for God&rsquo;s pleasure, not ours, reorder your sense of the world&rsquo;s purpose.",
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
                name: "Francis Schaeffer",
                work: "Pollution and the Death of Man",
                quote: "The Christian is a man who has a reason for dealing with each created thing with a high level of respect... If God treats the tree like a tree, the machine like a machine, the man like a man, shouldn&rsquo;t I, as a fellow-creature, do the same?",
                bio: "Francis Schaeffer was a pastor, apologist, and founder of L&rsquo;Abri Fellowship. His 1970 book Pollution and the Death of Man was a landmark: at the dawn of the modern environmental movement, Schaeffer argued that biblical Christianity &mdash; not pantheism and not exploitative materialism &mdash; provides the only sufficient basis for treating nature with respect, because each created thing has value as God&rsquo;s creature. He called the church to a substantial healing of the human-nature divide now, as a sign of the final restoration.",
              },
              {
                name: "Wendell Berry",
                work: "The Art of the Commonplace",
                quote: "The ecological teaching of the Bible is simply inescapable: God made the world because He wanted it made. He thinks the world is good, and He loves it. It is His world; He has never relinquished title to it. And He has never revoked the conditions... that oblige us to take excellent care of it.",
                bio: "Wendell Berry is a Kentucky farmer, poet, and essayist whose writing joins agrarian practice to Christian conviction. For more than five decades he has argued that the care of the earth is our most ancient and most worthy responsibility, that the modern economy&rsquo;s treatment of land and community as expendable is a form of blasphemy, and that fidelity to place &mdash; knowing, loving, and tending a particular patch of ground &mdash; is where stewardship becomes real rather than abstract.",
              },
              {
                name: "N.T. Wright",
                work: "Surprised by Hope",
                quote: "The point of the resurrection... is that the present bodily life is not valueless just because it will die... What you do in the present &mdash; by painting, preaching, singing, sewing, praying, teaching, building hospitals, digging wells, campaigning for justice, caring for the needy, loving your neighbor as yourself &mdash; will last into God&rsquo;s future.",
                bio: "N.T. Wright is a New Testament scholar and former Bishop of Durham whose work on resurrection and new creation reframed creation care for many evangelicals. In Surprised by Hope he argues that the Christian hope is not escape from the earth but the renewal of heaven and earth together &mdash; which means work done for the created order in the present anticipates, and will be taken up into, God&rsquo;s new world.",
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
              { ref: "Genesis 2:15", text: "The LORD God took the man and put him in the garden of Eden to work it and keep it." },
              { ref: "Psalm 24:1", text: "The earth is the LORD&rsquo;s and the fullness thereof, the world and those who dwell therein." },
              { ref: "Genesis 1:31", text: "And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day." },
              { ref: "Romans 8:19-21", text: "For the creation waits with eager longing for the revealing of the sons of God. For the creation was subjected to futility, not willingly, but because of him who subjected it, in hope that the creation itself will be set free from its bondage to corruption and obtain the freedom of the glory of the children of God." },
              { ref: "Leviticus 25:23", text: "The land shall not be sold in perpetuity, for the land is mine. For you are strangers and sojourners with me." },
              { ref: "Colossians 1:19-20", text: "For in him all the fullness of God was pleased to dwell, and through him to reconcile to himself all things, whether on earth or in heaven, making peace by the blood of his cross." },
              { ref: "Revelation 21:1, 5", text: "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away... And he who was seated on the throne said, &ldquo;Behold, I am making all things new.&rdquo;" },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Stewardship Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What part of creation weighs on you right now?</label>
                  <textarea
                    value={jConcern}
                    onChange={e => setJConcern(e.target.value)}
                    placeholder="A place, a pattern, a piece of news, a piece of ground you know..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What does faithful stewardship look like in your own life here?</label>
                  <textarea
                    value={jStewardship}
                    onChange={e => setJStewardship(e.target.value)}
                    placeholder="Working and keeping (Gen 2:15) rather than owning &mdash; what is yours to tend?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What one concrete action will you take this week?</label>
                  <textarea
                    value={jAction}
                    onChange={e => setJAction(e.target.value)}
                    placeholder="Small, specific, and sustainable beats grand and abandoned..."
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
                {e.concern && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Concern</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.concern}</p></div>}
                {e.stewardship && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Stewardship</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.stewardship}</p></div>}
                {e.action && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Action</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.action}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="GQI72THyO5I" title="Genesis 1 &mdash; The Creation Story and the Human Vocation (BibleProject)" />
            <VideoEmbed videoId="Zy2AQlK6C5k" title="Heaven and Earth &mdash; New Creation Theology (BibleProject)" />
            <VideoEmbed videoId="A14THPoc4-4" title="Justice &mdash; Creation, the Vulnerable, and the Character of God (BibleProject)" />
            <VideoEmbed videoId="ZTKEVsRPLM0" title="Why Should Christians Care for Creation?" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
