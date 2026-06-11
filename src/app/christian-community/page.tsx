"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CMEntry = { id: string; date: string; barrier: string; commitment: string; gift: string };

export default function ChristianCommunityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_community_entries") ?? "[]"); } catch { return []; }
  });
  const [jBarrier, setJBarrier] = useState("");
  const [jCommitment, setJCommitment] = useState("");
  const [jGift, setJGift] = useState("");

  useEffect(() => { localStorage.setItem("vine_community_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jBarrier.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), barrier: jBarrier, commitment: jCommitment, gift: jGift }, ...prev]);
    setJBarrier(""); setJCommitment(""); setJGift("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  const theologyItems = [
    {
      title: "Community Is Not Optional — The Trinity as Model (John 17:20-21)",
      verse: "My prayer is not for them alone. I pray also for those who will believe in me through their message, that all of them may be one, Father, just as you are in me and I am in you.",
      body: "The Christian doctrine of the Trinity — three persons in eternal, loving, self-giving communion — is the theological foundation for Christian community. God himself is communal; to be made in his image is to be made for community. Individualism is not just a cultural preference — it is a theological problem. The isolated Christian is a contradiction in terms: to be in Christ is to be in his body, and the body has many members who belong to one another (Rom 12:5).",
    },
    {
      title: "The One Anothers — Community as Practice (John 13:34-35)",
      verse: "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples.",
      body: "The New Testament contains over 50 one another commands: love one another, serve one another, bear one another’s burdens, confess to one another, forgive one another, encourage one another, pray for one another. These commands are not suggestions for the spiritually mature — they are the basic description of what the church is. A church that does not practice these commands has ceased to be the church in any meaningful sense, whatever its theological statements.",
    },
    {
      title: "The Danger of Pseudo-Community — Authentic vs. Managed Relationship",
      verse: "",
      body: "M. Scott Peck distinguished genuine community (which requires the experience of conflict and chaos resolved through grace) from pseudo-community (which avoids conflict through superficial positivity). Many churches practice pseudo-community: they are friendly but not intimate, warm on the surface but without the depth that comes only through shared struggle, confession, and the work of reconciliation. Genuine Christian community requires the willingness to be known — not just liked — and to know others in their weakness and sin. The church that cannot handle honest struggle and genuine conflict will never experience the depth of community that Scripture describes.",
    },
    {
      title: "The Church as Alternative Community — Visible Witness (Acts 2:44-47)",
      verse: "All the believers were together and had everything in common... And the Lord added to their number daily those who were being saved.",
      body: "The early church community was an apologetic. In a world stratified by class, ethnicity, and social status, the church gathered across every boundary — slaves and free people, Jews and Gentiles, rich and poor — and practiced a community of radical mutuality. This visible alternative to the social order of Rome was one of the primary means by which the church grew. The quality of Christian community remains one of the most powerful witnesses to the truth of the gospel: a community that genuinely loves across division embodies the reconciling work of Christ.",
    },
    {
      title: "Loneliness and the Church’s Response — a Crisis Moment",
      verse: "",
      body: "Research consistently identifies loneliness as one of the most significant health crises of the modern West — with physical health effects comparable to smoking 15 cigarettes a day. Many churches are full of lonely people sitting next to each other without genuine connection. The church has both the theology and the practical resources to address this: genuine community, shared life, mutual accountability, and the integration of the lonely into family. The church that takes its one another commands seriously is also making one of the most powerful public health interventions available — simply by being what it is called to be.",
    },
  ];

  const voicesItems = [
    {
      name: "Dietrich Bonhoeffer",
      work: "Life Together",
      quote: "He who loves his dream of community more than the Christian community itself becomes a destroyer of the latter, even though his personal intentions may be ever so honest and earnest and sacrificial. God hates visionary dreaming; it makes the dreamer proud and pretentious... He who loves his dream will fail his community.",
      bio: "Dietrich Bonhoeffer wrote Life Together during the brief life of the Finkenwalde seminary — a community of pastors training in resistance to the Nazi state. His theology of Christian community is grounded in the incarnation: we belong to one another only through Jesus Christ, not through natural affinity. His warning against the dream of community versus its reality is the most penetrating available.",
    },
    {
      name: "Jean Vanier",
      work: "Community and Growth",
      quote: "Community is not an ideal. It is people. It is you and I. Together we are called to something greater than ourselves. That something is God’s love, which becomes tangible in the way we love each other.",
      bio: "Jean Vanier was a Canadian Catholic philosopher who founded L’Arche — a network of communities where people with and without intellectual disabilities live together. His theology of community emerges from decades of actually doing it, with people the world excludes. Community and Growth is the most practical and honest account of what genuine community requires and costs.",
    },
    {
      name: "Larry Crabb",
      work: "Connecting",
      quote: "We are designed by God to need each other for our deepest growth. The healing we need — and the healing we can give — is not available through any program or technique. It flows through the presence of one human being to another, carrying something of God into the places of most profound need.",
      bio: "Larry Crabb was a Christian psychologist and author who developed a theology of soul-care through genuine community. Connecting argues that the deepest healing available to Christians is not found in professional therapy alone but in the kind of genuine, honest, Christ-centered connection that the local church is uniquely positioned to provide.",
    },
  ];

  const practicesItems = [
    "Audit the depth of your community: do you have anyone in your life who knows your actual struggles, sins, and fears — not just your aspirations and surface life? If not, that is the most important thing to address this year.",
    "Commit to a specific, recurring gathering of 5-12 people (a small group, a dinner church, a discipleship group) for one full year — giving community enough time to move past pseudo-community into genuine depth.",
    "Practice the one another commands specifically this week: identify one person you can encourage, serve, pray with, or confess to — and do it.",
    "Examine your barriers to community: busyness, fear of vulnerability, past wounds from community, perfectionism about what community should look like — name your specific barrier and bring it to God.",
    "Invite someone you know is lonely into your regular life: not a program but your actual life — dinner, errands, church — the gift of presence rather than a referral.",
  ];

  const scriptureItems = [
    { ref: "John 17:20-21", text: "My prayer is not for them alone. I pray also for those who will believe in me through their message, that all of them may be one, Father, just as you are in me and I am in you." },
    { ref: "Acts 2:44-47", text: "All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need." },
    { ref: "John 13:34-35", text: "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples." },
    { ref: "Heb 10:24-25", text: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing." },
    { ref: "Gal 6:2", text: "Carry each other’s burdens, and in this way you will fulfill the law of Christ." },
    { ref: "Rom 12:5", text: "So in Christ we, though many, form one body, and each member belongs to all the others." },
  ];

  const videoItems = [
    { videoId: "yHKDOXaMzUE", title: "Why Christians Need Community — More Than You Think" },
    { videoId: "xWCWGhX3hNY", title: "Dietrich Bonhoeffer: Life Together — What Christian Community Really Means" },
    { videoId: "cL4V7zJv5tA", title: "The Lonely Church: How to Build Genuine Christian Community" },
    { videoId: "rGOEjGiDRNg", title: "One Anothering: Practicing Biblical Community in Real Life" },
  ];

  const [openTheo, setOpenTheo] = useState<number>(-1);
  const [openVoice, setOpenVoice] = useState<number>(-1);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Breadcrumb */}
        <div style={{ color: MUTED, fontSize: ".8rem", marginBottom: "1rem" }}>
          <span>Church &amp; Community</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>
          Christian Community
        </h1>
        <p style={{ color: MUTED, maxWidth: 640, marginBottom: "2rem", lineHeight: 1.7 }}>
          The theology of belonging to one another — the Trinity as model, the one another commands, the danger of pseudo-community, the church as visible witness, and practical steps toward genuine depth.
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t.id ? GREEN : BORDER}`, background: tab === t.id ? `${GREEN}22` : CARD, color: tab === t.id ? GREEN : MUTED, fontWeight: tab === t.id ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Theology */}
        {tab === "theology" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Theology of Christian Community</h2>
            {theologyItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openTheo === i ? GREEN : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheo(openTheo === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700, paddingRight: "1rem" }}>{item.title}</span>
                  <span style={{ color: GREEN, fontSize: "1.2rem", flexShrink: 0 }}>{openTheo === i ? "−" : "+"}</span>
                </button>
                {openTheo === i && (
                  <div style={{ padding: "0 1.3rem 1.2rem" }}>
                    {item.verse && (
                      <p style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: ".75rem", color: TEXT, fontStyle: "italic", marginBottom: ".75rem", lineHeight: 1.7 }}>
                        &ldquo;{item.verse}&rdquo;
                      </p>
                    )}
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Practices */}
        {tab === "practices" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Practices for Building Community</h2>
            {practicesItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: ".75rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", flexShrink: 0, minWidth: 24 }}>{i + 1}</span>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        )}

        {/* Voices */}
        {tab === "voices" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Voices on Community</h2>
            {voicesItems.map((voice, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openVoice === i ? GREEN : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenVoice(openVoice === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ color: TEXT, fontWeight: 700 }}>{voice.name}</span>
                    <span style={{ color: MUTED, fontSize: ".85rem", marginLeft: ".5rem" }}>&mdash; {voice.work}</span>
                  </div>
                  <span style={{ color: GREEN, fontSize: "1.2rem", flexShrink: 0 }}>{openVoice === i ? "−" : "+"}</span>
                </button>
                {openVoice === i && (
                  <div style={{ padding: "0 1.3rem 1.2rem" }}>
                    <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: ".75rem", margin: "0 0 .75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>
                      &ldquo;{voice.quote}&rdquo;
                    </blockquote>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{voice.bio}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Scripture */}
        {tab === "scripture" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Key Scriptures on Community</h2>
            {scriptureItems.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: ".75rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: ".4rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {/* Journal */}
        {tab === "journal" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: ".5rem" }}>Community Journal</h2>
            <p style={{ color: MUTED, fontSize: ".9rem", marginBottom: "1.5rem" }}>Reflect on your experience of Christian community. Entries are saved locally in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: ".85rem", display: "block", marginBottom: ".35rem" }}>What is your primary barrier to deeper community right now?</label>
                <input value={jBarrier} onChange={e => setJBarrier(e.target.value)} placeholder="Name your barrier..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: ".65rem .9rem", fontSize: ".95rem", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: ".85rem", display: "block", marginBottom: ".35rem" }}>What specific commitment to community will you make this season?</label>
                <input value={jCommitment} onChange={e => setJCommitment(e.target.value)} placeholder="Your commitment..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: ".65rem .9rem", fontSize: ".95rem", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ color: MUTED, fontSize: ".85rem", display: "block", marginBottom: ".35rem" }}>What gift do you bring to a community of others?</label>
                <input value={jGift} onChange={e => setJGift(e.target.value)} placeholder="Your gift..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: ".65rem .9rem", fontSize: ".95rem", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} disabled={!jBarrier.trim()} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: ".65rem 1.5rem", fontWeight: 700, cursor: jBarrier.trim() ? "pointer" : "not-allowed", opacity: jBarrier.trim() ? 1 : 0.5, fontSize: ".95rem" }}>
                Save Entry
              </button>
            </div>

            {entries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontWeight: 700, fontSize: ".9rem", marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Saved Entries</h3>
                {entries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: ".75rem" }}>
                    <div style={{ color: MUTED, fontSize: ".8rem", marginBottom: ".6rem" }}>{entry.date}</div>
                    {entry.barrier && <p style={{ color: TEXT, margin: "0 0 .4rem", fontSize: ".9rem" }}><span style={{ color: GREEN, fontWeight: 700 }}>Barrier: </span>{entry.barrier}</p>}
                    {entry.commitment && <p style={{ color: TEXT, margin: "0 0 .4rem", fontSize: ".9rem" }}><span style={{ color: GREEN, fontWeight: 700 }}>Commitment: </span>{entry.commitment}</p>}
                    {entry.gift && <p style={{ color: TEXT, margin: 0, fontSize: ".9rem" }}><span style={{ color: GREEN, fontWeight: 700 }}>Gift: </span>{entry.gift}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Videos */}
        {tab === "videos" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {videoItems.map(v => (
                <div key={v.videoId}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: ".85rem", marginTop: ".5rem", margin: ".5rem 0 0" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
