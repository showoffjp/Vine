"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "reformation", label: "Reformation" },
  { id: "discernment", label: "Discernment" },
  { id: "work", label: "Work & Worship" },
  { id: "obstacles", label: "Obstacles" },
  { id: "voices", label: "Voices" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const CALLING_TEXTS = [
  {
    ref: "1 Corinthians 7:17",
    text: "Only let each person lead the life that the Lord has assigned to him, and to which God has called him.",
    note: "Paul grounds calling in God's concrete assignment, not abstract destiny.",
  },
  {
    ref: "Ephesians 4:1",
    text: "Walk in a manner worthy of the calling to which you have been called.",
    note: "The primary calling is to holiness and Christlikeness — everything flows from this.",
  },
  {
    ref: "Colossians 3:23",
    text: "Whatever you do, work heartily, as for the Lord and not for men.",
    note: "Every legitimate task becomes worship when done for God's glory.",
  },
  {
    ref: "Proverbs 18:16",
    text: "A man's gift makes room for him and brings him before great men.",
    note: "Natural gifts and abilities are part of how God equips us for service.",
  },
  {
    ref: "Romans 12:6",
    text: "Having gifts that differ according to the grace given to us, let us use them.",
    note: "Spiritual gifts are given for service — they reveal calling.",
  },
];

const REFORMATION_INSIGHTS = [
  {
    figure: "Martin Luther",
    point: "Recovery of Secular Calling",
    desc: "Luther demolished the sacred/secular split. The monk's cell was not holier than the cobbler's shop. Every station — farmer, magistrate, parent — is a divine calling (Beruf). Serving neighbor in ordinary work is serving God.",
    quote: "A cobbler, a smith, a peasant — each has the work and office of his trade, and yet they are all alike consecrated priests and bishops.",
  },
  {
    figure: "John Calvin",
    point: "The Doctrine of Vocation",
    desc: "Calvin extended Luther's insight, emphasizing that God places each person in a 'post' for the common good. Calling is not just permitted but commanded — sloth is sin because it refuses the station God assigned.",
    quote: "The Lord bids each one of us in all life's actions to look to his calling... He has appointed duties for every man in his particular way of life.",
  },
  {
    figure: "William Perkins",
    point: "General & Particular Callings",
    desc: "Puritan theologian who systematized calling theology. He distinguished: (1) the general calling — to be a Christian; (2) the particular calling — one's specific work and roles. Both are real callings from God.",
    quote: "A particular calling is the execution of some particular office, arising of that distinction which God makes between man and man in every society.",
  },
];

const DISCERNMENT_QUESTIONS = [
  {
    q: "What are your gifts?",
    desc: "Spiritual gifts (Romans 12, 1 Corinthians 12, Ephesians 4) and natural abilities both point toward calling. What do you do well? What has God confirmed through others?",
  },
  {
    q: "What is your passion?",
    desc: "What injustice or need moves you deeply? What tasks feel like play to you but work to others? Desire is not infallible but is a legitimate signal — God often writes calling on the heart.",
  },
  {
    q: "What does the community confirm?",
    desc: "Individual discernment is not the whole picture. What do pastors, mentors, and the body of Christ see in you? Calling is rarely a solo discovery.",
  },
  {
    q: "Where is there need?",
    desc: "Frederick Buechner: calling is where your deep gladness meets the world's deep hunger. Need is context — your gifts deployed where they serve others.",
  },
  {
    q: "What is faithful to your station?",
    desc: "Your current roles — parent, employee, neighbor, church member — are real callings right now. Discernment includes faithfulness in the present, not just finding the future.",
  },
];

const WORK_PRINCIPLES = [
  {
    title: "Work Precedes the Fall",
    desc: "God gave Adam the mandate to work and keep the garden (Gen 2:15) before sin entered. Work is not a consequence of the curse — toilsome labor is. Work itself is good, created by God.",
    color: GREEN,
  },
  {
    title: "All Lawful Work Is Holy",
    desc: "The Reformation abolished 'sacred' work as a category above 'secular' work. A nurse, teacher, plumber, or politician all serve God's creation purposes. The call to love neighbor is fulfilled in ordinary work.",
    color: TEAL,
  },
  {
    title: "Excellence Honors God",
    desc: "Bezalel was filled with the Spirit to craft tabernacle furnishings with skill (Exod 31:3). Excellence in work is a form of worship — shoddy workmanship offered to God dishonors Him.",
    color: PURPLE,
  },
  {
    title: "Rest Is Also Commanded",
    desc: "The Sabbath is a creation ordinance, not merely Mosaic law. Rest declares that the world does not depend on our striving — it is in God's hands. Workaholism is a form of idolatry.",
    color: GOLD,
  },
  {
    title: "Work for Shalom",
    desc: "Work participates in God's work of sustaining and ordering creation (common grace). Even unbelievers who build hospitals, cultivate farms, or govern justly serve God's creational purposes, however unwittingly.",
    color: "#3B82F6",
  },
];

const OBSTACLES = [
  {
    problem: "Paralysis by Perfectionism",
    desc: "Many wait for a dramatic divine sign before acting. But calling is more often confirmed in faithfulness over time than in a single revelation. Begin where you are.",
    solution: "Faithful small steps reveal calling. Luther: 'God calls us through our neighbor's need, not through a voice from heaven.'",
  },
  {
    problem: "Sacred/Secular Split",
    desc: "Assuming 'full-time ministry' is a higher calling than other work creates a hierarchy God never established. This devalues the doctor, entrepreneur, and janitor.",
    solution: "Every legitimate vocation is a divine calling. The Reformation insight must be retrieved and believed.",
  },
  {
    problem: "Idolizing Career",
    desc: "Western culture turns career into identity and meaning — the source of self-worth. When calling becomes identity, any failure becomes an existential crisis.",
    solution: "Primary identity is in Christ, not work. Calling flows from identity; it does not constitute it.",
  },
  {
    problem: "Ignoring General Calling",
    desc: "Obsession with particular calling (what work to do) can crowd out the general calling — to be holy, to love God and neighbor, to make disciples.",
    solution: "The general calling is always the primary calling. Particular calling is one expression of it.",
  },
  {
    problem: "Neglecting Present Station",
    desc: "Future-orientation can blind us to current callings: parents, spouses, church members, neighbors. Faithfulness here is not a waiting room for real calling.",
    solution: "Your current roles are real callings. Luther called them 'masks of God' through which God serves others via you.",
  },
];

const VOICES = [
  {
    name: "Os Guinness",
    work: "The Call (1998)",
    quote: "Calling is the truth that God calls us to himself so decisively that everything we are, everything we do, and everything we have is invested with a special devotion and dynamism lived out as a response to his summons.",
  },
  {
    name: "Frederick Buechner",
    work: "Wishful Thinking (1973)",
    quote: "The place God calls you to is the place where your deep gladness and the world's deep hunger meet.",
  },
  {
    name: "Dorothy Sayers",
    work: "Why Work? (1942)",
    quote: "The Church's approach to an intelligent carpenter is usually confined to exhorting him not to be drunk and disorderly in his leisure hours... whereas it might remind him that the wood he is working with is a gift of God.",
  },
  {
    name: "Tim Keller",
    work: "Every Good Endeavor (2012)",
    quote: "A job is a vocation only if someone else calls you to it and you do it for them rather than for yourself. And so our work can be a calling only if it is reimagined as a mission of service to something beyond merely our own interests.",
  },
  {
    name: "Lester DeKoster",
    work: "Work: The Meaning of Your Life (1982)",
    quote: "Civilization rests upon work... Work is the form in which we make ourselves useful to others, and through which we share in the civilizing task of the Creator.",
  },
];

const VIDEOS = [
  {
    videoId: "pQ4Sn7M3e3M",
    title: "Theology of Vocation — Os Guinness",
    channel: "Os Guinness",
  },
  {
    videoId: "Ys5eTKtHjIM",
    title: "Every Good Endeavor — Tim Keller",
    channel: "Gospel in Life",
  },
  {
    videoId: "MhHAHf7rBbg",
    title: "Work, Rest, and Calling",
    channel: "The Gospel Coalition",
  },
  {
    videoId: "6TqP4yoWH68",
    title: "Luther on Vocation",
    channel: "Reformation History",
  },
];

export default function CallingVocationPage() {
  const [tab, setTab] = useLocalStorage("vine_calling_tab", "overview");
  const [openQ, setOpenQ] = useLocalStorage("vine_calling_q", "");
  const [openObs, setOpenObs] = useLocalStorage("vine_calling_obs", "");
  const [journal, setJournal] = useLocalStorage("vine_calling_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>⚒️</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Calling & Vocation</h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto" }}>
            The Reformation recovered a truth the medieval church had nearly buried: every Christian has a divine calling, and all legitimate work is holy service to God and neighbor.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: GOLD }}>Two Kinds of Calling</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div style={{ background: BG, borderRadius: 10, padding: "1rem", border: `1px solid ${BORDER}` }}>
                  <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>General Calling</div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>The universal calling of every Christian — to repentance, faith, holiness, and love. This is always primary. It is received through the gospel and applies equally to all believers regardless of role.</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: "1rem", border: `1px solid ${BORDER}` }}>
                  <div style={{ fontWeight: 700, color: TEAL, marginBottom: "0.5rem" }}>Particular Calling</div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>The specific roles and work God has assigned each person — occupation, family role, community position. These are real callings from God, not merely pragmatic choices, and every legitimate one is sacred.</p>
                </div>
              </div>
            </div>

            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {CALLING_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REFORMATION */}
        {tab === "reformation" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PURPLE }}>The Medieval Problem</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Medieval theology created a two-tier spiritual hierarchy: monks, priests, and nuns in the &ldquo;sacred&rdquo; realm doing truly holy work; laypeople in the &ldquo;secular&rdquo; realm doing merely permitted work. The only way to fully serve God was to leave the world and enter a religious order. The Reformers demolished this — recovering the biblical truth that every legitimate station is a divine calling.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {REFORMATION_INSIGHTS.map(r => (
                <div key={r.figure} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <div style={{ background: PURPLE, color: "#fff", borderRadius: 8, padding: "0.25rem 0.75rem", fontWeight: 700, fontSize: "0.85rem", whiteSpace: "nowrap" }}>{r.figure}</div>
                    <div style={{ fontWeight: 700, color: GOLD }}>{r.point}</div>
                  </div>
                  <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: "0.75rem" }}>{r.desc}</p>
                  <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: 0, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", fontSize: "0.9rem" }}>{r.quote}</blockquote>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DISCERNMENT */}
        {tab === "discernment" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>How to Discern Your Calling</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Calling is rarely a lightning bolt. It is more often confirmed through a convergence of gifts, passion, community affirmation, need, and providential circumstances over time. The questions below are a framework for prayerful reflection — not a checklist to complete once.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {DISCERNMENT_QUESTIONS.map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenQ(openQ === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: TEAL, textAlign: "left" }}>{q.q}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openQ === String(i) ? "−" : "+"}</span>
                  </button>
                  {openQ === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{q.desc}</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginTop: "1.5rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>The SHAPE Framework</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))", gap: "0.75rem" }}>
                {[
                  { letter: "S", word: "Spiritual Gifts", color: GREEN },
                  { letter: "H", word: "Heart (Passions)", color: TEAL },
                  { letter: "A", word: "Abilities", color: PURPLE },
                  { letter: "P", word: "Personality", color: GOLD },
                  { letter: "E", word: "Experiences", color: "#EC4899" },
                ].map(s => (
                  <div key={s.letter} style={{ background: BG, borderRadius: 8, padding: "0.75rem", textAlign: "center", border: `1px solid ${BORDER}` }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: s.color }}>{s.letter}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{s.word}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* WORK */}
        {tab === "work" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Work as Worship</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The Protestant Reformation recovered a creation-grounded theology of work: ordinary labor is not a concession to fallen necessity but a participation in God&apos;s ongoing care for creation. Work precedes the Fall. The curse of Genesis 3 is toil and futility — not work itself.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {WORK_PRINCIPLES.map(p => (
                <div key={p.title} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <div style={{ fontWeight: 700, color: p.color, marginBottom: "0.4rem" }}>{p.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginTop: "1.5rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>Luther&apos;s &ldquo;Masks of God&rdquo;</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>Luther described other people in our vocations — employers, neighbors, parents, pastors — as &ldquo;masks of God&rdquo; (larvae Dei). God feeds us through the farmer, heals us through the doctor, protects us through the magistrate. Our callings are the channels through which God sustains and governs creation. When we do our work faithfully, God is at work through us for others.</p>
            </div>
          </div>
        )}

        {/* OBSTACLES */}
        {tab === "obstacles" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Common Obstacles to Calling</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {OBSTACLES.map((o, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenObs(openObs === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: "#EF4444", textAlign: "left" }}>{o.problem}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openObs === String(i) ? "−" : "+"}</span>
                  </button>
                  {openObs === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>{o.desc}</p>
                      <div style={{ background: BG, borderRadius: 8, padding: "0.75rem", borderLeft: `3px solid ${GREEN}` }}>
                        <span style={{ color: GREEN, fontWeight: 700 }}>Path forward: </span>
                        <span style={{ color: TEXT }}>{o.solution}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Voices on Vocation</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {VOICES.map(v => (
                <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "baseline", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 800, color: GOLD }}>{v.name}</span>
                    <span style={{ color: MUTED, fontSize: "0.85rem" }}>{v.work}</span>
                  </div>
                  <blockquote style={{ borderLeft: `3px solid ${GREEN}`, margin: 0, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>{v.quote}</blockquote>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>What work has God placed in front of you? How does the theology of vocation change how you see your current roles?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on your callings — both general (as a Christian) and particular (your specific work and roles). What does it mean to do your current work as for the Lord?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
