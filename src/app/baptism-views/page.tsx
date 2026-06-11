"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

const views = [
  {
    name: "Believer's Baptism (Credobaptism)",
    tradition: "Baptist, Evangelical, Anabaptist",
    summary: "Baptism is the public declaration of personal faith in Christ, reserved for those old enough to make a credible profession. It does not confer salvation but signifies it. The mode is typically immersion, following the NT pattern. Baptizing infants who cannot profess faith confuses the sign with the grace it signifies.",
    key: "Baptism follows faith; it is the believer's public confession, not a sacrament that effects regeneration.",
    theologians: "John Bunyan, Charles Spurgeon, John Piper, Wayne Grudem"
  },
  {
    name: "Infant Baptism (Paedobaptism)",
    tradition: "Reformed, Presbyterian, Anglican, Lutheran",
    summary: "Baptism is the covenant sign of entry into the covenant community, corresponding to circumcision in the OT. As covenant children of believing parents were circumcised under the Abrahamic covenant, so they should be baptized under the new covenant. Baptism does not automatically regenerate but marks covenant inclusion. Faith is still required for mature covenant participation.",
    key: "Baptism is the covenant sign; children of believers are within the covenant and should receive its sign.",
    theologians: "John Calvin, B.B. Warfield, Michael Horton, Tim Keller"
  },
  {
    name: "Sacramental / Regenerative Baptism",
    tradition: "Roman Catholic, Eastern Orthodox, Some Anglican/Lutheran",
    summary: "Baptism is a sacrament that actually effects grace — in infants, washing away original sin and initiating regeneration; in adults, forgiving past sins and incorporating into the body of Christ. The grace of baptism must still be cooperated with through faith and ongoing participation in the sacramental life of the church.",
    key: "Baptism is an instrument of grace that effects what it signifies when received in the proper disposition.",
    theologians: "Thomas Aquinas, Council of Trent, Orthodox tradition"
  },
  {
    name: "Symbolic / Memorial View",
    tradition: "Zwinglian, Some Evangelical",
    summary: "Baptism is a purely symbolic act — an outward sign of an inward grace already received — with no intrinsic sacramental power. It is primarily an act of obedience and public testimony, not a means of grace. The Lord's Supper and baptism are ordinances (not sacraments): they memorialize and declare rather than confer or seal.",
    key: "Baptism is a memorial and testimony; all saving grace comes through faith alone, not through the water.",
    theologians: "Ulrich Zwingli, Some Anabaptist leaders, Much of low-church evangelicalism"
  },
];

const theology = [
  { title: "Baptism in the New Testament — What the Texts Actually Show", verse: "Acts 2:38", text: "Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.' The NT texts on baptism are disputed precisely because they seem to pull in different directions. Acts 2:38 connects baptism closely to forgiveness and the Spirit. Romans 6:1-4 connects baptism to death and resurrection with Christ. Colossians 2:11-12 connects baptism to circumcision. Matthew 28:19 commands baptism as part of disciple-making. 1 Peter 3:21 calls baptism 'an appeal to God for a clear conscience.' Each of these texts has been marshaled in support of different views, which is why the debate is genuine and not easily resolved by proof-texting." },
  { title: "Baptism and Circumcision — The Covenant Sign Argument", verse: "Colossians 2:11-12", text: "In him you were also circumcised with a circumcision not performed by human hands. Your whole self ruled by the flesh was put off when you were circumcised by Christ, having been buried with him in baptism. The paedobaptist argument from Col 2:11-12 is among the strongest: Paul seems to equate circumcision (the OT covenant sign) with baptism (the NT covenant sign). If so, the logic runs: covenant children received circumcision in the OT; the new covenant is more expansive than the old; therefore covenant children should receive its sign. Credobaptists respond that circumcision was a physical ethnic marker while baptism is a spiritual profession, and that the new covenant's distinguishing characteristic is that all its members know the Lord personally (Jer 31:34)." },
  { title: "Household Baptisms — What Acts Reveals and Conceals", verse: "Acts 16:31-33", text: "They replied, 'Believe in the Lord Jesus, and you will be saved — you and your household.' Then they spoke the word of the Lord to him and to all the others in his house. At that hour of the night the jailer took them and washed their wounds; then immediately he and all his household were baptized. Several NT texts mention entire households being baptized (Acts 10:44-48, Acts 16:15, Acts 16:33, 1 Cor 1:16). Paedobaptists argue these households likely included infants. Credobaptists note that in several cases the text says the household 'believed' before baptism, or that the Spirit fell on all present before baptism, implying the capacity for personal faith." },
  { title: "Mode of Baptism — Does the Method Matter?", verse: "Matthew 3:16", text: "As soon as Jesus was baptized, he went up out of the water. At that moment heaven was opened, and he saw the Spirit of God descending like a dove and alighting on him. Whether baptism is by immersion, pouring (affusion), or sprinkling (aspersion) is a secondary debate, but one with historical and theological weight. The Greek word baptizo can mean 'immerse,' 'dip,' 'wash,' or 'pour.' Jesus's baptism ('going up out of the water') is often cited for immersion, but Matthew 3:16 in Greek does not require he was submerged. Most traditions hold that mode is less important than meaning, though Baptist and some other traditions hold immersion to be the NT norm and the mode most fully symbolizing burial and resurrection with Christ." },
  { title: "Rebaptism and Ecumenical Recognition — Practical Questions", verse: "Ephesians 4:5", text: "One Lord, one faith, one baptism. The 'one baptism' of Ephesians 4:5 raises the ecumenical question: should Christians rebaptize when moving between traditions? If a person was baptized as an infant and later comes to personal faith in a credobaptist church, should they be 'baptized' as a believer? Views differ: some traditions treat believer's baptism as the only valid baptism; others treat it as a second sacramental event unnecessary and confusing; still others (including many Reformed) honor infant baptism as a valid sacrament that should not be repeated. The question touches on church unity, ecclesiology, and the validity of baptism across traditions." },
];

const videos = [
  { id: "tHJhvjfhc3I", title: "Believer's Baptism vs. Infant Baptism — Full Debate" },
  { id: "AijK-C4x8L8", title: "Covenant Theology and Baptism Explained" },
  { id: "9RA7JNomW6U", title: "Baptist View: Why Believer's Baptism Matters" },
  { id: "l8yFVnCnLB4", title: "Sprinkle vs. Piper: Baptism Debate" },
];

type BVEntry = { id: string; date: string; position: string; reasoning: string; question: string };

export default function BaptismViewsPage() {
  const [tab, setTab] = useState("views");
  const [entries, setEntries] = useState<BVEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_baptismviews_entries") ?? "[]"); } catch { return []; }
  });
  const [jPosition, setJPosition] = useState("");
  const [jReasoning, setJReasoning] = useState("");
  const [jQuestion, setJQuestion] = useState("");

  useEffect(() => { localStorage.setItem("vine_baptismviews_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPosition.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), position: jPosition, reasoning: jReasoning, question: jQuestion }, ...prev]);
    setJPosition(""); setJReasoning(""); setJQuestion("");
  };

  const tabs = [
    { id: "views", label: "Views" }, { id: "theology", label: "Theology" },
    { id: "scripture", label: "Scripture" }, { id: "journal", label: "Journal" },
    { id: "videos", label: "Videos" },
  ];

  const scriptures = [
    { verse: "Acts 2:38", text: "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit." },
    { verse: "Romans 6:3-4", text: "Don't you know that all of us who were baptized into Christ Jesus were baptized into his death? We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life." },
    { verse: "Colossians 2:11-12", text: "In him you were also circumcised with a circumcision not performed by human hands... having been buried with him in baptism, in which you were also raised with him through your faith in the working of God." },
    { verse: "Matthew 28:19", text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
    { verse: "1 Peter 3:21", text: "And this water symbolizes baptism that now saves you also — not the removal of dirt from the body but the pledge of a clear conscience toward God. It saves you by the resurrection of Jesus Christ." },
    { verse: "Galatians 3:27", text: "For all of you who were baptized into Christ have clothed yourselves with Christ." },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Theology</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Baptism Views</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>A survey of the four main views on baptism — who should be baptized, how, and what it accomplishes — with the strongest arguments for each position.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? BLUE : BORDER}`, background: tab === t.id ? BLUE + "22" : "transparent", color: tab === t.id ? BLUE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "views" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {views.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>{v.name}</h3>
                <div style={{ fontSize: "0.78rem", color: BLUE, marginBottom: 10 }}>{v.tradition}</div>
                <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.92rem", marginBottom: 12 }}>{v.summary}</p>
                <div style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: 12, marginBottom: 10 }}>
                  <p style={{ fontSize: "0.88rem", fontStyle: "italic", color: TEXT }}>{v.key}</p>
                </div>
                <div style={{ fontSize: "0.8rem", color: MUTED }}>Key theologians: {v.theologians}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: BLUE, fontWeight: 600, marginBottom: 6 }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: BLUE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflection Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record your current position and the questions you're still working through.</p>
            {[
              { label: "Your current position or leaning on baptism", val: jPosition, set: setJPosition },
              { label: "The strongest argument for your view", val: jReasoning, set: setJReasoning },
              { label: "The question you find hardest to answer", val: jQuestion, set: setJQuestion },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: BLUE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                    <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Position:</strong> {e.position}</p>
                    {e.reasoning && <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Reasoning:</strong> {e.reasoning}</p>}
                    {e.question && <p style={{ fontSize: "0.88rem" }}><strong>Open question:</strong> {e.question}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: BLUE }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
