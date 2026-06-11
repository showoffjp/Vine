"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

const commandments = [
  { number: 1, name: "No Other Gods", verse: "Exod 20:3", meaning: "The first table opens with exclusive allegiance. All other commandments flow from this one: there is only one God, and he alone commands total loyalty. Modern idolatry is rarely the literal worship of statues — it is the functional trust in career, relationship, or security to do what only God can do. The first commandment diagnoses the heart's bent toward making anything other than God its ultimate reference point." },
  { number: 2, name: "No Idols", verse: "Exod 20:4-6", meaning: "Where the first commandment concerns whom we worship, the second concerns how. God refuses to be represented by anything made with human hands — not because he is absent, but because every image reduces and distorts. Modern idolatry is equally subtle: we do not fashion wooden statues, but we fashion mental images of a manageable God who confirms our preferences. The second commandment protects the irreducible otherness and freedom of God." },
  { number: 3, name: "Do Not Take the Name in Vain", verse: "Exod 20:7", meaning: "The name of God is not merely a label — it carries his character, authority, and presence. To take it in vain is more than profanity; it is to invoke God's name while living as if he were absent or irrelevant. Every Christian who claims the name of Christ but lives contrary to it takes the name in vain. The third commandment calls the people of God to a life whose integrity matches its confession." },
  { number: 4, name: "Remember the Sabbath", verse: "Exod 20:8-11", meaning: "The Sabbath is the only commandment explicitly called a sign of the covenant (Exod 31:13). It is a weekly enacted declaration that Israel's identity is not in their productivity but in their relationship with the God who rested after creation. In a culture of relentless output, the Sabbath is a radical act of trust: the world will not stop if I stop. God sustains it; I do not. Rest is not laziness — it is covenant faithfulness." },
  { number: 5, name: "Honor Father and Mother", verse: "Exod 20:12", meaning: "This is the bridge commandment — the first on the second table, and the only commandment with an explicit promise. It stands between duties to God and duties to neighbor, suggesting that the family is the first school of all social virtue. To honor parents is to acknowledge the givenness of one's origin — that we did not make ourselves, that life is received before it is achieved. The commandment applies in every season of life, not only in childhood." },
  { number: 6, name: "Do Not Murder", verse: "Exod 20:13", meaning: "Life belongs to God — it is given, not manufactured. To take a human life is to assault the image of God (Gen 9:6). Jesus deepens this commandment in the Sermon on the Mount to include anger and contempt (Matt 5:21-22), revealing that murder begins long before the act. The sixth commandment is a call to the active protection and honoring of human life in every form — including the poor, the vulnerable, and those whose lives our systems make invisible." },
  { number: 7, name: "Do Not Commit Adultery", verse: "Exod 20:14", meaning: "Marriage in the Old Testament is not merely a social contract — it is a covenant that images the covenant between God and Israel. Adultery is therefore not only a betrayal of a spouse; it is a desecration of a covenant sign. Jesus extends this commandment to the look that treats another person as an object of desire (Matt 5:28). The seventh commandment calls for covenant faithfulness: in marriage, in friendship, and in the sexuality that is meant to be the exclusive gift of covenant." },
  { number: 8, name: "Do Not Steal", verse: "Exod 20:15", meaning: "The prohibition of stealing assumes that ownership is real and that taking what belongs to another violates something genuine. But the prophets and Jesus repeatedly show that the commandment reaches beyond individual theft to systems that deprive people of what is rightfully theirs. The eighth commandment calls for honesty in commerce, justice in wages, and generosity with surplus — recognizing that what I hold is held in stewardship, not absolute possession." },
  { number: 9, name: "Do Not Bear False Witness", verse: "Exod 20:16", meaning: "The ninth commandment originated in the context of the law court — false testimony could condemn an innocent person, destroy a reputation, or pervert justice. But its reach extends to every form of deception: gossip, flattery, misleading silence, and the half-truth designed to create a false impression. God is a God of truth, and his people are called to be a community where words can be trusted. The commandment protects the fabric of trust on which community depends." },
  { number: 10, name: "Do Not Covet", verse: "Exod 20:17", meaning: "The tenth commandment is unique: it alone addresses the interior life directly, forbidding not an action but a desire. Paul calls it the commandment that revealed sin to him (Rom 7:7) — because it penetrates behind behavior to the heart that drives it. Covetousness is the restless dissatisfaction with what God has given, the belief that another person's possession or position would complete what is lacking. The tenth commandment anticipates the New Testament's call to contentment: godliness with contentment is great gain (1 Tim 6:6)." },
];

const theology = [
  { title: "The Ten Commandments Are Covenant Document, Not Salvation Requirements", verse: "Exod 20:2", text: "The commandments begin with a declaration, not a demand: 'I am the Lord your God, who brought you out of Egypt, out of the land of slavery.' The law follows the gospel — redemption precedes requirement. God does not say 'obey these commands and I will deliver you.' He says 'I have delivered you; now here is how a delivered people lives.' This sequence is theologically decisive: the commandments are the shape of life for those who are already God's people, not the ladder by which they become his people." },
  { title: "Two Tables: Love for God and Love for Neighbor", verse: "Mark 12:30-31", text: "Ancient interpreters divided the Decalogue into two tablets — the first four commandments governing the love of God, the last six governing love of neighbor. Jesus ratifies this structure in the Great Commandment: all the law and the prophets hang on love for God and love for neighbor. The two tables are not independent; they are inseparable. You cannot genuinely love God while treating your neighbor with contempt, and you cannot genuinely love your neighbor without reference to God who made him in his image." },
  { title: "The Law Is Fulfilled in Christ, Not Abolished", verse: "Matt 5:17", text: "Jesus declares that he came not to abolish the law but to fulfill it. This fulfillment is not mere compliance but completion — Jesus embodies the full intention of every commandment and brings what the law pointed toward to its goal. The Christian is not under the law as a covenant of works; but neither is the Christian lawless. The law, fulfilled in Christ and written on the heart by the Spirit (Jer 31:33), becomes the shape of Christian character rather than the mechanism of Christian justification." },
  { title: "The Sermon on the Mount Deepens the Commandments", verse: "Matt 5:21-22", text: "In the Sermon on the Mount Jesus repeatedly says 'you have heard it said... but I say to you' — not contradicting Moses but radicalizing him. Murder reaches back to anger; adultery reaches back to the covetous look; oath-taking is unnecessary if your word is already fully reliable. Jesus is not adding new commandments; he is exposing the full depth the commandments always had. The letter addressed behavior; the Spirit addresses the heart from which behavior flows. The Sermon on the Mount is the Decalogue read at full resolution." },
  { title: "Luther's Three Uses of the Law", verse: "Rom 3:20", text: "Martin Luther identified three functions of the law that have shaped Protestant theology: the civil use (restraining sin in society), the theological use (revealing sin and driving us to Christ), and the didactic use (guiding the regenerate life). The most important for the Christian is the second: 'through the law comes knowledge of sin' (Rom 3:20). The commandments are a mirror that shows us who we actually are — not to condemn us permanently, but to drive us to the grace that alone can transform what the mirror reveals." },
];

const voices = [
  { id: "luther", name: "Martin Luther", role: "Large Catechism (1529)", quote: "The Ten Commandments are not given to make us righteous before God, but to show us how we ought to live toward one another. For God does not need our works; our neighbor does. The law does not help me stand before God — only the gospel does that. But the law shows me what love for my neighbor actually looks like in concrete life, and it strips away every pretense that I have loved him as I should.", bio: "Luther's Large Catechism remains the most thorough and accessible treatment of the Decalogue in the Protestant tradition. His explanations — particularly the positive duties implied by each negative prohibition — shaped centuries of Christian moral formation. His framing of each commandment as 'we should fear and love God so that...' captures the motivational structure of law-keeping under grace." },
  { id: "calvin", name: "John Calvin", role: "Institutes of the Christian Religion (1559)", quote: "The law has a third use — the principal use, which pertains more closely to the proper purpose of the law. This is, by frequent meditation on the law, the faithful may be aroused to obedience and strengthened in it, and be drawn back from the slippery path of transgression. The law is not a yoke for those in whom the Spirit dwells; it is the road map of love, showing what love for God and neighbor actually requires.", bio: "Calvin's extended treatment of the Decalogue in the Institutes (Book II, chapters 7-8) is the most systematic Reformed exposition of the commandments. His insistence on the 'third use of the law' — as a guide for the regenerate — distinguishes the Reformed tradition from Lutheran antinomianism. His method of reading each commandment positively (what it requires) as well as negatively (what it forbids) is exegetically rich." },
  { id: "keller", name: "Tim Keller", role: "Counterfeit Gods (2009)", quote: "The first commandment is the key to all the others — and the hardest to keep. We do not struggle primarily with lying or stealing; we struggle with idolatry. The heart is an idol factory, as Calvin observed. Whatever we look to for the security, significance, and love that only God can give — money, success, approval, romance — becomes a functional god. The other commandments are symptoms; the first commandment is the disease.", bio: "Keller's Counterfeit Gods is the most accessible contemporary exposition of idolatry as the root violation of the first commandment. Drawing on Calvin's diagnosis of the heart as an idol factory, Keller shows how modern life is saturated with functional gods that promise what only the true God can deliver. His work connects ancient commandment to contemporary heart-diagnosis in a way that is both theologically rigorous and pastorally searching." },
];

const scriptures = [
  { verse: "Exod 20:2-3", text: "I am the Lord your God, who brought you out of Egypt, out of the land of slavery. You shall have no other gods before me." },
  { verse: "Deut 5:6", text: "I am the Lord your God, who brought you out of Egypt, out of the land of slavery." },
  { verse: "Matt 5:17", text: "Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them." },
  { verse: "Rom 13:9", text: "The commandments, 'You shall not commit adultery,' 'You shall not murder,' 'You shall not steal,' 'You shall not covet,' and whatever other command there may be, are summed up in this one command: 'Love your neighbor as yourself.'" },
  { verse: "Mark 12:30-31", text: "Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength. The second is this: Love your neighbor as yourself. There is no commandment greater than these." },
  { verse: "James 2:10", text: "For whoever keeps the whole law and yet stumbles at just one point is guilty of breaking all of it." },
];

type TCEntry = { id: string; date: string; commandment: string; reflection: string; application: string };

export default function TenCommandmentsStudyPage() {
  const [tab, setTab] = useState("commandments");
  const [tcJournal, setTcJournal] = useState<TCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_tencmd_entries") ?? "[]"); } catch { return []; }
  });
  const [jCommandment, setJCommandment] = useState("");
  const [jReflection, setJReflection] = useState("");
  const [jApplication, setJApplication] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_tencmd_entries", JSON.stringify(tcJournal)); } catch {}
  }, [tcJournal]);

  function saveEntry() {
    if (!jCommandment.trim() && !jReflection.trim()) return;
    setTcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), commandment: jCommandment, reflection: jReflection, application: jApplication }, ...prev]);
    setJCommandment(""); setJReflection(""); setJApplication("");
  }
  function deleteEntry(id: string) { setTcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["commandments", "theology", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Bible Study</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Ten Commandments</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            A deep study of the Decalogue as covenant document — not a ladder to God, but the shape of life for a people already redeemed, fulfilled and deepened in Christ.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GOLD : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "commandments" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {commandments.map(c => (
                <div key={c.number} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <div style={{ background: GOLD, color: "#07070F", fontWeight: 700, fontSize: "0.8rem", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{c.number}</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: "1rem" }}>{c.name}</h3>
                      <div style={{ color: GOLD, fontSize: "0.78rem", fontWeight: 600 }}>{c.verse}</div>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{c.meaning}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
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
                  <div style={{ color: GOLD, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${GOLD}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: GOLD, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Commandments Journal</h3>
                <textarea placeholder="Which commandment is most challenging for me today, and why?" value={jCommandment} onChange={e => setJCommandment(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="How does this commandment show my need for grace?" value={jReflection} onChange={e => setJReflection(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="One concrete application I can make this week." value={jApplication} onChange={e => setJApplication(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: GOLD, color: "#07070F", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {tcJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : tcJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.commandment && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Challenging commandment:</strong> {e.commandment}</p>}
                  {e.reflection && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Need for grace:</strong> {e.reflection}</p>}
                  {e.application && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Application:</strong> {e.application}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "GkRoAABcgHQ", title: "The Ten Commandments — R.C. Sproul", channel: "Ligonier Ministries", description: "Sproul's exposition of the Decalogue as covenant document — beginning with the prologue of grace and working through each commandment with theological rigor and pastoral application." },
                { videoId: "lXWjOBi_P_4", title: "The Law and the Gospel", channel: "Tim Keller / The Gospel Coalition", description: "Keller on the relationship between law and gospel in the Old and New Testaments — why the commandments were never meant to be a salvation ladder and what they actually demand." },
                { videoId: "3Rqtx5pTjaw", title: "The Sermon on the Mount and the Law", channel: "Desiring God", description: "How Jesus deepens and fulfills the Ten Commandments in the Sermon on the Mount — reaching behind behavior to the heart, and behind the heart to the grace that transforms it." },
                { videoId: "6DpvlRqknlQ", title: "Idolatry and the Modern Heart", channel: "The Gospel Coalition", description: "A contemporary exploration of the first two commandments — how idolatry functions in modern life and how the gospel provides the only lasting cure for the heart's idol-making tendency." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
