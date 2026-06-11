"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CLGEntry = { id: string; date: string; question: string; gifting: string; step: string };

export default function ChristianCallingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CLGEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiancalling_entries") ?? "[]"); } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jGifting, setJGifting] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiancalling_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, gifting: jGifting, step: jStep }, ...prev]);
    setJQuestion(""); setJGifting(""); setJStep("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Vocation</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Discovering Your Calling
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Calling is not a puzzle God hides and dares you to solve. It begins with who you are called to be before what you are called to do &mdash; and it unfolds, as Frederick Buechner wrote, at the place where your deep gladness meets the world&rsquo;s deep hunger. This guide walks through the theology and practice of vocation.
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
                title: "General Calling Before Specific Calling (Eph 4:1)",
                body: "Walk in a manner worthy of the calling to which you have been called. Scripture speaks of calling in two registers. The general (or primary) calling is the same for every Christian: to belong to Christ, to love God and neighbor, to be holy, to make disciples. The specific (or secondary) calling is the particular shape that obedience takes in your life &mdash; your work, relationships, location, and gifts. The order matters enormously. Most anxiety about &ldquo;finding my calling&rdquo; comes from seeking the specific while neglecting the general. The person faithfully living the general calling &mdash; prayer, community, character, service &mdash; is already in the center of God&rsquo;s will, and the specific calling typically emerges from that faithfulness rather than preceding it.",
              },
              {
                title: "Vocation as Worship — Work Done Unto the Lord (Col 3:23-24)",
                body: "Whatever you do, work heartily, as for the Lord and not for men... You are serving the Lord Christ. The Reformers recovered the biblical teaching that vocation (from the Latin vocare, to call) is not reserved for clergy. Luther insisted that the milkmaid and the magistrate serve God as truly as the monk &mdash; that God milks the cows through the hands of the milkmaid. All legitimate work, done in faith and love of neighbor, is worship. This demolishes the sacred-secular divide: there is no hierarchy in which pastors and missionaries do &ldquo;real&rdquo; kingdom work while accountants and nurses merely fund it. Your desk, classroom, kitchen, or job site is an altar when the work is offered to God.",
              },
              {
                title: "Deep Gladness and Deep Hunger — Buechner&rsquo;s Compass",
                body: "Frederick Buechner&rsquo;s famous definition: The place God calls you to is the place where your deep gladness and the world&rsquo;s deep hunger meet. This is not a license for self-indulgence &mdash; the test is double. Work that delights you but serves no real need is not yet vocation; work that meets need but deadens your soul may not be yours to do forever. God typically calls through, not against, the way he made you. Your designed joys &mdash; the work that makes you come alive, that you would do for free, that engages your particular gifts &mdash; are data, not distractions. At the same time, calling is cruciform: it will always involve dying to self, and gladness in Scripture often coexists with hardship (consider Jeremiah, or Paul).",
              },
              {
                title: "Discerning God&rsquo;s Will — Open Doors, Closed Doors, and Wisdom (Rom 12:2)",
                body: "Be transformed by the renewal of your mind, that by testing you may discern what is the will of God. Discernment is rarely a lightning bolt; it is usually a converging of factors over time: Scripture (does this align with God&rsquo;s revealed will?), prayer (have I sincerely asked and listened?), gifts (has God equipped me for this?), counsel (what do wise believers who know me say?), desire (what has God put in my heart? Ps 37:4), and circumstances (what doors are actually open?). Open and closed doors are real &mdash; Paul speaks of a wide door for effective work opening to him (1 Cor 16:9) &mdash; but they are the weakest signal alone, since some open doors should not be walked through and some closed doors should be knocked on persistently. Circumstances confirm; they do not command.",
              },
              {
                title: "Calling vs. Career — and Calling in Every Season (1 Cor 7:17)",
                body: "Only let each person lead the life that the Lord has assigned to him, and to which God has called him. A career is what you choose and build; a calling is what you receive and answer. Careers can be lost &mdash; to layoffs, illness, retirement, caregiving seasons &mdash; but calling cannot, because the Caller does not change. This is why Os Guinness warns against collapsing calling into occupation: the retired person, the chronically ill person, the stay-at-home parent, and the student are all fully called. Every season of life carries vocation &mdash; sometimes the calling is to raise children, to suffer faithfully, to be present to a dying parent, or simply to remain where you are with new devotion. The question is never whether you have a calling, but what faithfulness looks like in this season.",
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
              "Take a gifts inventory: list what you do that others consistently affirm, what energizes rather than drains you, and what need in the world genuinely moves you &mdash; then look for where those three lists overlap (Buechner&rsquo;s gladness-meets-hunger test).",
              "Ask three people who know you well &mdash; a mentor, a peer, and someone you have served &mdash; what gifts they see in you and where they could imagine you flourishing; calling is discerned in community, not in isolation.",
              "Before agonizing over your specific calling, audit your general calling: prayer, Scripture, church community, character, love of neighbor. Faithfulness in the general is the soil where the specific grows.",
              "Re-frame your current work &mdash; however ordinary &mdash; as vocation for one week: begin each workday by offering it to God (Col 3:23), and notice how the same tasks change when done <em>as for the Lord</em>.",
              "If you face an open or closed door, test it against the stronger signals first: Scripture, wisdom, counsel, and gifting. Write down the converging factors rather than relying on circumstance alone.",
              "Name your current season honestly (student, building, raising children, caregiving, illness, retirement) and ask: what is the calling <em>of this season</em> &mdash; rather than mourning the calling of a season you are not in.",
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
                name: "Frederick Buechner",
                work: "Wishful Thinking",
                quote: "The place God calls you to is the place where your deep gladness and the world&rsquo;s deep hunger meet.",
                bio: "Frederick Buechner was a novelist and Presbyterian minister whose meditations on the vocabulary of faith have shaped generations of readers. His one-sentence definition of vocation is probably the most quoted modern statement on calling &mdash; precisely because it holds together what we tend to split apart: the joy God designed into us and the need God places before us. Neither alone is calling; the meeting place is.",
              },
              {
                name: "Os Guinness",
                work: "The Call",
                quote: "Calling is the truth that God calls us to himself so decisively that everything we are, everything we do, and everything we have is invested with a special devotion and dynamism lived out as a response to his summons and service.",
                bio: "Os Guinness is a social critic and author whose book The Call is the modern classic on vocation. Guinness distinguishes the primary calling (to Someone &mdash; God himself) from secondary callings (to something &mdash; particular work and spheres), and warns against two distortions: the &ldquo;Catholic distortion&rdquo; that elevates spiritual work over secular, and the &ldquo;Protestant distortion&rdquo; that collapses calling into mere occupation. We are called first to Someone, not to something or somewhere.",
              },
              {
                name: "Timothy Keller",
                work: "Every Good Endeavor",
                quote: "Work of all kinds, whether with the hands or the mind, evidences our dignity as human beings &mdash; because it reflects the image of God the Creator in us.",
                bio: "Timothy Keller was the founding pastor of Redeemer Presbyterian Church in Manhattan, where he spent decades pastoring professionals wrestling with faith and work. Every Good Endeavor argues that the gospel transforms work in three ways: it gives work dignity (we image a working God), realism (thorns and futility are real), and a new compass (work becomes service rather than self-salvation). Work is not a result of the fall; frustration in work is.",
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
              { ref: "Eph 2:10", text: "For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them." },
              { ref: "Eph 4:1", text: "I therefore, a prisoner for the Lord, urge you to walk in a manner worthy of the calling to which you have been called." },
              { ref: "Col 3:23-24", text: "Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ." },
              { ref: "Jer 1:5", text: "Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations." },
              { ref: "Rom 12:6", text: "Having gifts that differ according to the grace given to us, let us use them: if prophecy, in proportion to our faith." },
              { ref: "1 Cor 7:17", text: "Only let each person lead the life that the Lord has assigned to him, and to which God has called him. This is my rule in all the churches." },
              { ref: "Ps 37:4-5", text: "Delight yourself in the Lord, and he will give you the desires of your heart. Commit your way to the Lord; trust in him, and he will act." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Calling Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What question about your calling are you bringing before God?</label>
                  <textarea
                    value={jQuestion}
                    onChange={e => setJQuestion(e.target.value)}
                    placeholder="Name the decision, restlessness, or longing honestly..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What gifts, gladness, or affirmations point a direction?</label>
                  <textarea
                    value={jGifting}
                    onChange={e => setJGifting(e.target.value)}
                    placeholder="What energizes you, what others affirm in you, what need moves you..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What one faithful step can you take this week?</label>
                  <textarea
                    value={jStep}
                    onChange={e => setJStep(e.target.value)}
                    placeholder="A conversation, an offering of your current work to God, a door to knock on..."
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
                {e.question && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Question</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.question}</p></div>}
                {e.gifting && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Gifting</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.gifting}</p></div>}
                {e.step && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Next Step</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.step}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="YbipxLDtY8c" title="Image of God &mdash; Made to Work and Rule with God" />
            <VideoEmbed videoId="xmFPS0f-kzs" title="Gospel of the Kingdom &mdash; Your Place in God&rsquo;s Story" />
            <VideoEmbed videoId="AzmYV8GNAIM" title="The Book of Proverbs &mdash; Wisdom for Discerning Your Path" />
            <VideoEmbed videoId="G_OlRWGLdnw" title="What Is My Calling? Vocation, Gifts, and God&rsquo;s Will" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
