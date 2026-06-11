"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type BPEntry = { id: string; date: string; meaning: string; question: string; commitment: string };

const THEOLOGY = [
  {
    title: "Baptism as Death and Resurrection (Rom 6:3-4)",
    body: "Do you not know that all of us who have been baptized into Christ Jesus were baptized into his death? We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life. Baptism is the enacted gospel: the believer goes down into the water as one who has died with Christ and comes up as one who has been raised with Christ. It is not a bath of moral improvement but a burial and resurrection — the most vivid dramatic statement of the Christian faith available. Whatever one believes about the mode of baptism, this Pauline theology defines its meaning.",
  },
  {
    title: "Baptism and Incorporation into the Body (1 Cor 12:13)",
    body: "For in one Spirit we were all baptized into one body — Jews or Greeks, slaves or free — and all were made to drink of one Spirit. Baptism is not only a personal spiritual event but an ecclesial one: through it, the individual is incorporated into the body of Christ. The Galatians 3:28 vision — neither Jew nor Greek, slave nor free, male nor female — is the baptismal vision: the radical equality of all who are in Christ. Baptism is the church&rsquo;s welcome ceremony, the rite of incorporation that declares: you now belong here, to this community, to this Lord.",
  },
  {
    title: "The Baptism Debate — Modes and Subjects",
    body: "The most significant theological debate about baptism is not about meaning but mode and subject: Who should be baptized and how? The major positions: (1) Credobaptism (Baptist tradition): baptism should be administered to believers only, subsequent to a personal profession of faith — usually by immersion. (2) Paedobaptism (Reformed, Lutheran, Catholic, Anglican traditions): baptism appropriately administered to infants of believers, as the New Covenant sign corresponding to Old Covenant circumcision. Both positions have serious exegetical and theological arguments; Christians of deep faith hold each. The ecumenical consensus: the debate concerns the mode and subject, not the meaning — both traditions agree that baptism signifies union with Christ, death to self, and life in the Spirit.",
  },
  {
    title: "Believer’s Baptism — the Case for Credobaptism (Acts 2:38)",
    body: "Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins. The credobaptist argument: in the New Testament, baptism follows repentance and faith — the pattern is believe, then be baptized. The command is given to those capable of repentance and faith. Baptism as public profession of personal faith is the most natural reading of the New Testament pattern. For credobaptists, infant baptism mistakes the nature of the New Covenant, which is internalized (Jer 31:33-34) and requires personal faith for membership.",
  },
  {
    title: "Infant Baptism — the Case for Paedobaptism (Acts 2:39)",
    body: "The promise is for you and your children. The paedobaptist argument: the covenant family has always included children (Gen 17:12; Col 2:11-12); the New Covenant is more inclusive, not less, than the Old; the household baptisms in Acts suggest families were baptized as units; Jesus welcomed children and said the kingdom belongs to such as these. For paedobaptists, baptism is God&rsquo;s covenant claim on a child before they can respond — corresponding to the circumcision of infants in the Old Covenant (Col 2:11-12). The sacrament speaks God&rsquo;s promise over the child before the child can confess faith.",
  },
];

const PRACTICES = [
  "If you were baptized as an infant, investigate the theology of baptism in your tradition and reflect on what your baptism declares about God’s prior claim on your life.",
  "If you have professed faith but not been baptized, consider the obedience involved — baptism is not optional but the expected public confession of Christian identity.",
  "Before your next Communion, reflect on your baptism as the moment of your incorporation — you eat at this table because you belong to this body, declared in baptism.",
  "Attend a baptismal service with fresh theological eyes: watch the candidate go under and come up as a visual theological statement about death, burial, and resurrection.",
  "Read Romans 6:1-14 slowly and reflect on the behavioral implication Paul draws: since you died with Christ, you are no longer enslaved to sin — live from that identity.",
];

const VOICES = [
  {
    name: "G.R. Beasley-Murray",
    work: "Baptism in the New Testament",
    quote: "Baptism in the New Testament is not a bare sign pointing to something absent. It is a sacramental act in which the reality signified is present and operative. It unites the believer with Christ, effects forgiveness, and incorporates into the body of Christ.",
    bio: "G.R. Beasley-Murray was a British Baptist scholar whose Baptism in the New Testament is the definitive scholarly treatment of the subject from a credobaptist perspective. His work shows both the depth of New Testament theology on baptism and the Baptist conviction that the full weight of that theology is best honored by baptism of believers.",
  },
  {
    name: "John Calvin",
    work: "Institutes of the Christian Religion (4.15-16)",
    quote: "Baptism is a sign of initiation by which we are received into the society of the church, in order that, engrafted in Christ, we may be reckoned among God’s children. Baptism is given to us by God as a benefit; it is received by us as an expression of faith.",
    bio: "John Calvin’s treatment of baptism in the Institutes remains the most influential Reformed account. His theology of baptism as covenantal sign, applied to the children of believers as God’s covenant claim, provided the doctrinal foundation for Reformed paedobaptism. His insistence on the spiritual significance of baptism — against both Catholic sacramentalism and Zwinglian memorialism — shaped Protestant sacramental theology.",
  },
  {
    name: "N.T. Wright",
    work: "The New Testament and the People of God",
    quote: "Baptism marks the moment when someone passes from one world to another — from the world of death and sin to the world of resurrection and new creation. It is the enactment of the story of Israel and Jesus applied to this particular person’s life: they are telling the story of exodus, of death and resurrection, with their own body.",
    bio: "N.T. Wright is the former Bishop of Durham and one of the leading New Testament scholars in the world. His treatment of baptism situates it in the narrative of the New Exodus — Christ’s death and resurrection enacted in the individual’s life. His perspective helps both credobaptists and paedobaptists see baptism’s rich theological meaning beyond the institutional debates.",
  },
];

const SCRIPTURES = [
  { ref: "Rom 6:3-4", text: "Do you not know that all of us who have been baptized into Christ Jesus were baptized into his death?" },
  { ref: "Matt 28:19", text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
  { ref: "Acts 2:38-39", text: "Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit." },
  { ref: "Gal 3:27", text: "For as many of you as were baptized into Christ have put on Christ." },
  { ref: "1 Cor 12:13", text: "For in one Spirit we were all baptized into one body — Jews or Greeks, slaves or free — and all were made to drink of one Spirit." },
  { ref: "Col 2:11-12", text: "In him also you were circumcised with a circumcision made without hands... having been buried with him in baptism, in which you were also raised with him." },
];

const VIDEOS = [
  { videoId: "3xpC9S9U8ao", title: "Baptism: What It Means and Why It Matters" },
  { videoId: "nG79nGUhlkU", title: "Romans 6: Buried and Raised with Christ" },
  { videoId: "HJqJUakYSWI", title: "Believer’s Baptism vs. Infant Baptism — The Debate Explained" },
  { videoId: "LhOZaGhImZo", title: "The Meaning of Baptism in the New Testament" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function BaptismGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_baptism_entries") ?? "[]"); } catch { return []; }
  });
  const [jMeaning, setJMeaning] = useState("");
  const [jQuestion, setJQuestion] = useState("");
  const [jCommitment, setJCommitment] = useState("");

  useEffect(() => { localStorage.setItem("vine_baptism_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jMeaning.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), meaning: jMeaning, question: jQuestion, commitment: jCommitment }, ...prev]);
    setJMeaning(""); setJQuestion(""); setJCommitment("");
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: "1.25rem" }}>
          <span style={{ fontSize: "0.75rem", color: MUTED, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Sacraments &amp; Worship</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: TEXT, marginBottom: "0.75rem" }}>
          Baptism
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: "2rem" }}>
          The theology, debate, and practice of Christian baptism — what it means to be buried and raised with Christ, who should be baptized, and how baptism incorporates believers into the body of Christ.
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t.id ? BLUE : BORDER}`, background: tab === t.id ? `${BLUE}22` : "transparent", color: tab === t.id ? BLUE : MUTED, fontWeight: tab === t.id ? 700 : 400, cursor: "pointer", fontSize: "0.85rem", transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem", borderLeft: `4px solid ${BLUE}` }}>
                <h3 style={{ fontWeight: 800, color: BLUE, fontSize: "0.97rem", marginBottom: "0.6rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.25rem" }}>
              <h2 style={{ fontWeight: 800, color: BLUE, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Practices</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                Ways to engage with the theology of baptism in your own life and community.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.3rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: BLUE, fontWeight: 900, fontSize: "1rem", minWidth: 24, marginTop: 1 }}>{i + 1}.</span>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {VOICES.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: BLUE, fontSize: "1rem", marginBottom: "0.2rem" }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: "0.78rem", fontStyle: "italic", marginBottom: "0.9rem" }}>{v.work}</div>
                <blockquote style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: "1rem", margin: "0 0 0.9rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7, fontSize: "0.92rem" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {SCRIPTURES.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 800, color: BLUE, marginBottom: "0.35rem", fontSize: "0.9rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 800, color: BLUE, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Journal Entry</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Reflect on what baptism means to you personally. Entries are saved locally in your browser.
              </p>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  What does your baptism mean to you?
                </label>
                <textarea value={jMeaning} onChange={e => setJMeaning(e.target.value)}
                  placeholder="Reflect on the meaning of baptism — as death and resurrection, as incorporation into the body, as God’s covenant sign..."
                  style={{ width: "100%", minHeight: 100, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  What question does this raise for you?
                </label>
                <textarea value={jQuestion} onChange={e => setJQuestion(e.target.value)}
                  placeholder="What theological question about baptism do you most want to explore further?"
                  style={{ width: "100%", minHeight: 80, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  What commitment does this lead you to?
                </label>
                <textarea value={jCommitment} onChange={e => setJCommitment(e.target.value)}
                  placeholder="What concrete step or change is God calling you toward in light of your baptism?"
                  style={{ width: "100%", minHeight: 80, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
              </div>
              <button onClick={saveEntry} disabled={!jMeaning.trim()}
                style={{ background: BLUE, color: "#fff", border: "none", borderRadius: 8, padding: "0.65rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", cursor: jMeaning.trim() ? "pointer" : "not-allowed", opacity: jMeaning.trim() ? 1 : 0.5 }}>
                Save Entry
              </button>
            </div>

            {entries.length > 0 && (
              <div>
                <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "0.95rem" }}>Previous Entries</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.25rem" }}>
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.6rem" }}>{e.date}</div>
                      {e.meaning && <p style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.65, margin: "0 0 0.4rem" }}><span style={{ color: BLUE, fontWeight: 700 }}>Meaning: </span>{e.meaning}</p>}
                      {e.question && <p style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.65, margin: "0 0 0.4rem" }}><span style={{ color: BLUE, fontWeight: 700 }}>Question: </span>{e.question}</p>}
                      {e.commitment && <p style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}><span style={{ color: BLUE, fontWeight: 700 }}>Commitment: </span>{e.commitment}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 800, color: BLUE, fontSize: "1.1rem", marginBottom: "0.4rem" }}>Video Teaching</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}>Recommended videos on the theology and practice of baptism.</p>
            </div>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
