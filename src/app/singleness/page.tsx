"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Paul Calls Singleness a Gift — and Means It", verse: "1 Corinthians 7:7-8", text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do. Paul does not call singleness a consolation prize for people who have not found the right person. He calls it a charisma — the same word used for other spiritual gifts in 1 Corinthians 12. This is one of the most neglected and underpreached sentences in the New Testament. The church that never proclaims singleness as a genuine, God-given good has silently told single Christians that their life is incomplete, their season is a waiting room, and their status is deficient. Paul disagrees — emphatically." },
  { title: "Jesus Was Single — and Not Less Than Human", verse: "Matthew 19:11-12", text: "Jesus replied, 'Not everyone can accept this word, but only those to whom it has been given. For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it.' Jesus himself lived his entire life as a single man. He experienced no diminishment, no incompleteness, no longing for a second half. His humanity was not lesser for it. When the church implies that singleness is incomplete humanity, it inadvertently unchristens the most fully human person who ever lived. Celibacy, Jesus says here, is a gift — not a wound." },
  { title: "The Church Is Family — Not a Consolation Prize for Singles", verse: "Mark 10:29-30", text: "Truly I tell you, Jesus replied, no one who has left home or brothers or sisters or mother or father or children or fields for me and the gospel will fail to receive a hundred times as much in this present age: homes, brothers, sisters, mothers, children and fields — along with persecutions — and in the age to come eternal life. Jesus promises a hundredfold family — in this age — to those who follow him. This is not metaphor; it is ecclesiology. The church is intended to be a real, thick, mutual family in which single people are not peripheral members awaiting a private family but full members of the family God has called into being. The failure of the contemporary church to be this kind of family is one of the most significant failures in its witness to single Christians." },
  { title: "Single Christians Are Not Waiting to Begin Their Real Life", verse: "1 Corinthians 7:32-34", text: "I would like you to be free from concern. An unmarried man is concerned about the Lord's affairs — how he can please the Lord. But a married man is concerned about the affairs of this world — how he can please his wife — and his interests are divided. Paul's point is not that marriage is bad; it is that singleness carries a freedom that marriage does not. The single person is not waiting for real life to begin. They are already living it — with an undividedness that marriage, by design, interrupts. To treat singleness as a holding pattern before real life begins is to miss Paul's argument entirely, and to rob single Christians of the dignity and freedom that their season actually holds." },
  { title: "The Gospel Elevates Singleness to a Status Unknown in Jewish Culture", verse: "Isaiah 56:3-5", text: "Let no foreigner who is bound to the Lord say, 'The Lord will surely exclude me from his people.' And let no eunuch complain, 'I am only a dry tree.' For this is what the Lord says: 'To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters; I will give them an everlasting name that will endure forever.' In the Old Testament world, childlessness was near-catastrophic — a sign of divine disfavor, a dead end of legacy. Isaiah's oracle reverses this entirely: the one without children will have a name better than sons and daughters. The New Testament builds on this: singleness in Christ is not a barren path but a fruitful one, whose legacy is the kingdom rather than biological lineage." },
];

const practices = [
  { icon: "🏘️", title: "Invest Deeply in the Church as Your Primary Family", text: "The church is not a substitute for family for single people — it is intended to be the primary family for all Christians, within which marriage and biological family are nested. This means that single Christians belong to the church not as peripheral singles waiting for a family of their own, but as full members of the household of God. Invest in it accordingly: deep friendships, shared meals, mutual care, long-term commitment to a community. Push back on churches that structure everything around nuclear families. Advocate for a church culture that takes the hundred-times family seriously — not as a metaphor but as a lived reality." },
  { icon: "🎯", title: "Use the Freedom of Singleness for Undivided Ministry", text: "Paul's argument in 1 Corinthians 7 is not primarily about avoiding the difficulties of marriage. It is about the positive freedom that singleness creates: the undivided devotion to God and to the work of the kingdom that marriage, by its nature, makes more complicated. This is not theoretical. Single Christians can relocate for ministry, give extravagantly, take risks for the gospel, devote evenings and weekends to people in need, and invest in the kingdom in ways that married people with children simply cannot do with the same ease. This is not a lesser life — it is a different form of fruitfulness that the kingdom needs." },
  { icon: "💬", title: "Find Honest Community About the Real Challenges of Singleness", text: "The loneliness of singleness is real. The challenge of sexual desire without a spouse is real. The grief of watching peers marry while you remain single is real. The fear that it will always be this way is real. A Christian theology of singleness does not require pretending these things are not hard. It requires bringing them honestly to God and to a community that will not minimize them. Find — or create — spaces where single Christians can speak honestly about the genuine difficulties of their season without being told to just trust God more or be more content. Honest lament is not faithlessness. It is the path through." },
  { icon: "✝️", title: "Resist the Idol of Marriage — Which Can Be a Form of Idolatry", text: "In much of evangelical culture, marriage has become an idol — the assumed goal of every young person's spiritual journey, the measure of a life well-lived, the prerequisite for being taken seriously as an adult. This is not the gospel. The gospel does not promise marriage. It promises Christ. When marriage is elevated to the status of the thing that will make life complete, it is not being honored — it is being worshipped. And the single Christian who has bought into this narrative has effectively told themselves that until they marry, they are incomplete. This is a lie that needs to be named and resisted — not because marriage is bad, but because Christ alone is enough." },
  { icon: "📚", title: "Cultivate a Theology of Singleness, Not Just a Strategy to Survive It", text: "Many single Christians are trying to endure singleness until it ends — to survive it, to keep themselves from sinning during it, to get through it with their faith intact. This is not what Paul is commending. He is commending a positive theology of singleness as a good given by God, with its own dignities and freedoms, its own form of fruitfulness, its own way of witnessing to the kingdom. Formation in singleness is not about surviving until marriage. It is about being deeply formed as a person who belongs entirely to God — which is, whatever happens, the life Christ calls every person to." },
];

const voices = [
  { id: "bd", name: "Barry Danylak", role: "Author, Redeeming Singleness", quote: "The New Testament does not simply accommodate singleness — it elevates it. Paul's commendation of the single state is not pastoral pragmatism for people who cannot find a spouse. It is grounded in a theology of the kingdom in which the eschatological age has broken in, and in which the procreative imperative of the old creation has been fulfilled in Christ. Singleness in Christ is not a lesser path but a path that bears witness to the fullness of the kingdom in a way that marriage cannot.", bio: "Danylak's Redeeming Singleness is the most thorough biblical-theological treatment of the subject available. He traces the trajectory from the Old Testament's procreative mandate through the New Testament's transformation of it in Christ, demonstrating that singleness is not merely tolerated in the New Testament but theologically grounded in the new creation. Essential reading for any Christian who wants to think carefully about this subject." },
  { id: "sa", name: "Sam Allberry", role: "Author, 7 Myths About Singleness; Pastor and Speaker", quote: "One of the greatest gifts the church can give single people is not a better singles ministry or more creative matchmaking — it is a better theology of the church as family. If the church actually functioned as the community of brothers, sisters, mothers, and children that Jesus promised in Mark 10, single people would not experience the church as a place that marginalizes them. They would experience it as a place where the family they need is already present.", bio: "Allberry's 7 Myths About Singleness dismantles the most common and damaging misconceptions that the church perpetuates about single Christians — that they are immature, that they cannot understand marriage, that their situation is abnormal, that they are necessarily lonely, that they are waiting to begin their real life. His treatment is theologically grounded, pastorally honest, and practically useful for both single Christians and for church communities seeking to do better." },
  { id: "cc", name: "Christine Caine", role: "Evangelist, Author, Founder of A21 Campaign", quote: "I spent many years as a single woman in ministry — not waiting for my life to begin, but living it as fully as I knew how. I did not always experience singleness as a gift. But I came to see that the season itself was forming me: teaching me to depend on God entirely, giving me a freedom of movement and commitment that I would not have had otherwise, and allowing me to invest in the kingdom in ways that my later season of marriage made more complicated. Both seasons are gifts. Neither is the waiting room for the other.", bio: "Caine's perspective is particularly valuable because she speaks from experience of both seasons — years of fruitful single ministry followed by marriage and family. Her refusal to retroactively narrate her single years as a mere prelude to her 'real' life, and her insistence on the genuine fruitfulness of both seasons, makes her voice a helpful corrective to both the 'singleness is incomplete' narrative and the over-spiritualized denial of the genuine challenges of the single life." },
];

const scriptures = [
  { verse: "1 Corinthians 7:7-8", text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do." },
  { verse: "Matthew 19:11-12", text: "Jesus replied, 'Not everyone can accept this word, but only those to whom it has been given. For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it.'" },
  { verse: "1 Corinthians 7:32-34", text: "I would like you to be free from concern. An unmarried man is concerned about the Lord's affairs — how he can please the Lord. But a married man is concerned about the affairs of this world — how he can please his wife — and his interests are divided." },
  { verse: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land." },
  { verse: "Isaiah 56:4-5", text: "For this is what the Lord says: 'To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters; I will give them an everlasting name that will endure forever.'" },
  { verse: "Mark 10:29-30", text: "Truly I tell you, Jesus replied, no one who has left home or brothers or sisters or mother or father or children or fields for me and the gospel will fail to receive a hundred times as much in this present age: homes, brothers, sisters, mothers, children and fields — along with persecutions — and in the age to come eternal life." },
];

type SNEntry = { id: string; date: string; gratitude: string; struggle: string; surrender: string };

export default function SinglenessPage() {
  const [tab, setTab] = useState("theology");
  const [snJournal, setSnJournal] = useState<SNEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_singleness_entries") ?? "[]"); } catch { return []; }
  });
  const [jGratitude, setJGratitude] = useState("");
  const [jStruggle, setJStruggle] = useState("");
  const [jSurrender, setJSurrender] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_singleness_entries", JSON.stringify(snJournal)); } catch {}
  }, [snJournal]);

  function saveEntry() {
    if (!jGratitude.trim() && !jStruggle.trim()) return;
    setSnJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), gratitude: jGratitude, struggle: jStruggle, surrender: jSurrender }, ...prev]);
    setJGratitude(""); setJStruggle(""); setJSurrender("");
  }
  function deleteEntry(id: string) { setSnJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "practices", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Life &amp; Relationships</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Singleness &amp; Calling</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            The biblical theology of singleness — the gift Paul describes, the humanity Jesus modeled, and what it means to live fully and freely as a single Christian rather than waiting for real life to begin.
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
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Singleness Journal</h3>
                <textarea placeholder="What is genuinely good about my season of singleness right now?" value={jGratitude} onChange={e => setJGratitude(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What are the real challenges or fears I need to bring honestly to God?" value={jStruggle} onChange={e => setJStruggle(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="How am I offering this season to God as a gift rather than enduring it?" value={jSurrender} onChange={e => setJSurrender(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: TEAL, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {snJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : snJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.gratitude && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>What is good:</strong> {e.gratitude}</p>}
                  {e.struggle && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Real challenges:</strong> {e.struggle}</p>}
                  {e.surrender && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Offering to God:</strong> {e.surrender}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "xP9R7eAZf3M", title: "7 Myths About Singleness — Sam Allberry", channel: "The Gospel Coalition", description: "Allberry addresses the most common and damaging myths the church perpetuates about single Christians — including the idea that singleness is abnormal, that it inevitably produces loneliness, and that it is simply a waiting period before real adult life begins." },
                { videoId: "W8Ydz-UATVY", title: "Singleness as a Gift — Not a Burden", channel: "Desiring God", description: "A theologically grounded exploration of Paul's commendation of singleness in 1 Corinthians 7 — why the apostle calls it a charisma, what the gift actually consists in, and what it looks like to receive it as such rather than to endure it as a trial." },
                { videoId: "7ixXEbS_Ey0", title: "The Church as Family for Single Christians", channel: "Acts 29", description: "On the church's responsibility to be the hundredfold family Jesus promised in Mark 10 — and the practical ways that church communities can structure themselves to honor and include single members as full participants in family life, not peripheral attendees." },
                { videoId: "GKfbEaWn8xE", title: "Redeeming Singleness — Biblical Theology", channel: "Crossway", description: "Barry Danylak traces the arc from the Old Testament's procreative mandate through Isaiah's reversal and into the New Testament's elevation of singleness as a kingdom-oriented calling — demonstrating that Paul's commendation of the single life is rooted in deep biblical theology, not merely pastoral accommodation." },
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
