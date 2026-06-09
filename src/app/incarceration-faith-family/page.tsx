"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Visits the Prison",
    verse: "Matthew 25:36",
    text: "I was in prison and you came to visit me. This is not metaphor. Jesus locates himself explicitly with the incarcerated. The imprisoned person is not beyond the reach of God's presence or the church's ministry — they are specifically within the scope of what Jesus calls the church to do. The family of an incarcerated person is also carrying a sentence, invisibly, and they belong in this promise too.",
  },
  {
    title: "Guilt and Worth Are Different Things",
    verse: "Romans 8:1",
    text: "There is now no condemnation for those who are in Christ Jesus. The incarcerated Christian may be guilty of the crime they committed — and they are still a person for whom Christ died. Legal guilt does not equal spiritual condemnation. These are different categories. The church that collapses them does not understand either the law or the gospel.",
  },
  {
    title: "The Family Carries an Invisible Sentence",
    verse: "Galatians 6:2",
    text: "Carry each other's burdens, and in this way you will fulfill the law of Christ. The spouse, the children, the parents of an incarcerated person carry shame, financial hardship, social isolation, and loss — without having committed any crime. They are often invisible to the church. The burden-bearing Paul describes is explicitly for these families.",
  },
  {
    title: "Repentance and Restitution Are the Path",
    verse: "Luke 19:8",
    text: "But Zacchaeus stood up and said to the Lord, 'Look, Lord! Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount.' The incarcerated person who takes their crime seriously — who repents, makes restitution where possible, and genuinely changes — is doing exactly what the gospel requires. Prison is not the last chapter for the person who walks this road.",
  },
  {
    title: "God's Redemption Works in Prisons",
    verse: "Acts 16:25-26",
    text: "About midnight Paul and Silas were praying and singing hymns to God, and the other prisoners were listening to them. Suddenly there was such a violent earthquake that the foundations of the prison were shaken. The God who shook prison walls for Paul and Silas is not absent from the prisons of today. The incarcerated Christian who prays and worships and witnesses is not an anomaly. They are following a tradition that runs through the New Testament.",
  },
];

const voices = [
  {
    id: 1,
    name: "Bryan Stevenson",
    role: "Author, Just Mercy; founder Equal Justice Initiative",
    quote: "We are all more than the worst thing we have ever done. I believe this because the gospel says so.",
    bio: "Bryan Stevenson is a Christian lawyer who has spent his career defending the wrongly convicted and advocating for criminal justice reform, rooted in his conviction that every person has inherent dignity that no crime can erase.",
  },
  {
    id: 2,
    name: "Charles Colson",
    role: "Founder, Prison Fellowship",
    quote: "God uses prisons. He used mine. I would not have known the depths of grace without it.",
    bio: "Charles Colson went to prison for his role in Watergate and emerged as one of the most effective prison ministry advocates in American history, founding Prison Fellowship — now the world's largest outreach to prisoners and their families.",
  },
  {
    id: 3,
    name: "Sarah Owens",
    role: "Prison chaplain and advocate",
    quote: "The children of incarcerated parents are the most invisible victims of crime. The church that does not see them is not looking hard enough.",
    bio: "Prison chaplains who work with incarcerated families consistently identify the children of prisoners as the population most in need of the church's attention and most often overlooked by it.",
  },
  {
    id: 4,
    name: "Dominique DuBois Gilliard",
    role: "Author, Rethinking Incarceration",
    quote: "The church helped build the prison industrial complex through silence and complicity. The church can help dismantle it through presence and advocacy.",
    bio: "Dominique DuBois Gilliard is a pastor and author who examines the history of the American carceral system through a theological lens, calling the church to engage with criminal justice reform as a matter of faith.",
  },
];

const practices = [
  {
    icon: "📮",
    title: "Write Letters — They Matter Enormously",
    text: "Incarcerated people frequently report that mail is the most meaningful connection to the outside world. Write letters. Receive letters. If your incarcerated family member has faith, send Scripture, devotionals, and news of the church community. The mail that arrives tells someone they have not been forgotten.",
  },
  {
    icon: "📞",
    title: "Navigate the Visit System",
    text: "Prison visits have specific rules, applications, and approval processes that vary by facility. Contact the facility directly to learn what is required. Some families give up before completing the process. The visit that happens is worth the bureaucratic burden to get there.",
  },
  {
    icon: "👧",
    title: "Care for the Children of the Incarcerated",
    text: "Children of incarcerated parents are at significantly elevated risk for trauma, behavioral problems, and later incarceration themselves — unless they have stable, caring adults in their lives. If your church has members with incarcerated parents, these children need mentors, tutors, and safe relationships.",
  },
  {
    icon: "💰",
    title: "Address the Financial Reality",
    text: "Incarceration creates significant financial hardship — lost income, legal fees, phone calls that cost dollars per minute, commissary. Churches can support families through the diaconal fund, through practical financial assistance, and through advocacy for fairer prison phone pricing.",
  },
  {
    icon: "⛪",
    title: "Welcome the Returning Citizen",
    text: "Re-entry — the period after release — is when incarcerated people most need community support and are most likely to recidivate without it. Churches that welcome returning citizens actively (with jobs, housing referrals, accountability, and genuine belonging) are doing exactly what the gospel requires.",
  },
  {
    icon: "🙏",
    title: "Pray Specifically and by Name",
    text: "Pray for the incarcerated person by name. Pray for the corrections officers who have significant power over daily life. Pray for the judge, the prosecutor, the defense attorney. Pray for the victim and their family. This prayer is not naive — it is the comprehensive intercession the church is called to.",
  },
];

const scriptures = [
  { verse: "Matthew 25:36", text: "I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me." },
  { verse: "Hebrews 13:3", text: "Continue to remember those in prison as if you were together with them in prison, and those who are mistreated as if you yourselves were suffering." },
  { verse: "Psalm 107:14", text: "He brought them out of darkness, the utter darkness, and broke away their chains." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Isaiah 61:1", text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];

type IFFEntry = { id: string; date: string; today: string; hold: string; prayer: string };

export default function IncarcerationFaithFamilyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<IFFEntry[]>([]);
  const [today, setToday] = useState("");
  const [hold, setHold] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_incarcerationfaithfamilyj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const e: IFFEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), today, hold, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_incarcerationfaithfamilyj_entries", JSON.stringify(next));
    setToday(""); setHold(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_incarcerationfaithfamilyj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Incarceration, Faith & Family</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For those who are incarcerated, for their families who carry an invisible sentence, and for churches learning to visit, support, and welcome returning citizens.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://www.prisonfellowship.org" style={{ color: "#fca5a5" }}>prisonfellowship.org</a> · <a href="https://eji.org" style={{ color: "#fca5a5" }}>eji.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is today like?</label>
                <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What you are carrying — the shame, the waiting, the loneliness..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What holds you today?</label>
                <textarea value={hold} onChange={e => setHold(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="A letter, a memory, a verse, a hope..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="For the incarcerated, for the family, for the one who waits..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your story is worth recording.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.today && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Today</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.today}</p></>}
                {e.hold && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>What holds me</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.hold}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Just Mercy — Bryan Stevenson</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Bryan Stevenson on the dignity of every person regardless of their crime — and the gospel that grounds that conviction.</p>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Just Mercy Bryan Stevenson" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Prison Fellowship — Charles Colson's Legacy</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>The story of Prison Fellowship and how Charles Colson's incarceration became the beginning of the world's largest prison ministry.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Prison Fellowship Charles Colson's Legacy" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Rethinking Incarceration — Dominique DuBois Gilliard</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Dominique DuBois Gilliard on the church's complicated history with mass incarceration and the gospel call to criminal justice reform.</p>
              <VideoEmbed videoId="53RX2ESIqLM" title="Rethinking Incarceration Dominique DuBois Gilliard" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Welcoming the Returning Citizen</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>What churches can practically do to support people re-entering society after incarceration — including employment, housing, accountability, and belonging.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Welcoming the Returning Citizen" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
