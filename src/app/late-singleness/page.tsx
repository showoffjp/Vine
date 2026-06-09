"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Jesus Was Single — and Fully Human", verse: "Hebrews 4:15", text: "We do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are. Jesus lived to his early thirties as a single person. He experienced loneliness, the longing for deep companionship, the pain of social exclusion. He is not a distant deity dispensing counsel about singleness from a position of never having known it. He is the high priest who knows what it is to be human and unmarried in a world that treats those conditions as problems to be solved." },
  { title: "Singleness Is a Calling — Not a Waiting Room', verse: 'Matthew 19:12", text: "The one who can accept this should accept it. Jesus described celibacy as a gift given for the sake of the kingdom — not as a consolation prize for people who haven't married yet, not as a defect to be corrected, but as a specific calling with specific capacities. The evangelical church has systematically failed to communicate this. Many single Christians in their thirties and forties have been formed to experience their singleness as an anomaly, a failure, or a holding pattern. It is none of these. It is a life." },
  { title: "Loneliness Is a Wound, Not a Verdict', verse: 'Psalm 25:16", text: "Turn to me and be gracious to me, for I am lonely and afflicted. The psalmist brought loneliness directly to God without apology. Many single Christians carry enormous shame about their loneliness — as if being lonely means they are undesirable, spiritually inadequate, or not trusting God enough. Loneliness is a wound. It is not a verdict on your worth. Bringing it honestly to God, naming it specifically, is the biblical response." },
  { title: "The Church Is Supposed to Be Family', verse: 'Mark 10:29-30", text: "Truly I tell you, no one who has left home or brothers or sisters or mother or father or children or fields for me and the gospel will fail to receive a hundred times as much in this present age: homes, brothers, sisters, mothers, children and fields. Jesus promises substitute family to those who follow him — a hundred-fold return of the family structures left behind. This is an ecclesiological promise. The church is supposed to be the family that makes singleness habitable, not the institution that reminds single people they are incomplete." },
  { title: "Your Life Is Not on Hold', verse: 'Philippians 1:6", text: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus. God's work in you is not paused pending a marriage. The work of sanctification, calling, contribution, and kingdom service is happening in your single life — not as rehearsal for a married life, but as the actual life God is forming and using. The person you are becoming through your singleness is who you are, not a draft." },
];

const voices = [
  { id: "wh", name: "Wesley Hill", role: "Author, Spiritual Friendship; Washed and Waiting", quote: "The church's failure to provide real community for single people is not just an inconvenience. It is a theological failure — a failure to be the body of Christ, which is supposed to be a family that replaces and exceeds the family of origin for those who don't have one of their own.", bio: "Hill's work on spiritual friendship and the theology of Christian community is essential for single Christians navigating the relational poverty of contemporary church culture. His own experience as a celibate gay Christian gives his writing unusual pastoral depth." },
  { id: "kd", name: "Kate Daneluk", role: "Author, The Gift of Singleness Reconsidered", quote: "We have confused the gift of singleness with the gift of not minding singleness. Those are very different things. Paul's language does not require absence of longing. It describes a person whose singleness is lived as genuine, purposeful, kingdom-oriented life — not a person who doesn't feel the ache.", bio: "Daneluk's theological work on Paul's treatment of singleness in 1 Corinthians 7 provides a more nuanced reading than the traditional evangelical presentation. She distinguishes between the calling and the feelings, providing space for the genuinely lonely single Christian." },
  { id: "sr", name: "Sam Allberry", role: "Author, 7 Myths About Singleness", quote: "If singleness only works when you've been given the supernatural ability not to want marriage, very few people could be single. But if singleness is a calling given to ordinary people who still feel longing, and who receive genuine family in the church, it becomes viable — even flourishing.", bio: "Allberry's 7 Myths About Singleness dismantles common misconceptions that make singleness feel impossible or unlivable in evangelical culture. His work on the church as family is particularly important for those navigating singleness in their thirties and beyond." },
];

const practices = [
  { icon: "🏠", title: "Build a Household — Even If It Is Not a Nuclear Family", text: "The assumption that singleness = living alone is historically and globally unusual. Consider sharing living arrangements with friends, family, or a community of believers. The intentional community model — single adults and couples sharing housing with explicit commitment to one another — produces the kind of daily relational texture that marriage provides for married people. Singleness lived in genuine community is fundamentally different from singleness lived in isolation." },
  { icon: "🤝", title: "Invest in Friendships as Primary Relationships", text: "Many single Christians invest relationally in the hope of marriage and underinvest in friendship. But friendship — deep, committed, physically present, mutually self-giving friendship — is not a lesser form of love. It is one of the primary ways human beings are made for connection. Investing in friendships the way married people invest in their marriages changes the texture of single life. Wesley Hill's Spiritual Friendship is the starting point for this theology." },
  { icon: "⛪", title: "Find or Create Real Community in Your Church", text: "Many churches' small group structures default to life-stage groupings — young married couples, parents of young children — that make single people in their thirties and beyond invisible. If your church doesn't have genuine intergenerational community that includes single adults, you may need to create it: invite yourself into families, start a dinner rotation, initiate the conversations that the structure has prevented. You are allowed to need community and to take steps to build it." },
  { icon: "📖", title: "Develop a Theology of Singleness That Is Actually Yours", text: "Most single Christians have absorbed a theology of singleness by osmosis — from a culture that treats it as a waiting room. Read the texts that actually address singleness (Matthew 19, 1 Corinthians 7, Mark 10) with fresh eyes and good commentary. Read Allberry's 7 Myths About Singleness, Hill's Spiritual Friendship, and Barry Danylak's Redeeming Singleness. Develop a theology that is actually grounded, not just the ambient cultural messaging about singleness that the church has failed to correct." },
];

const scriptures = [
  { verse: "Matthew 19:12", text: "For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it." },
  { verse: "1 Corinthians 7:32-34", text: "I would like you to be free from concern. An unmarried man is concerned about the Lord's affairs — how he can please the Lord. But a married man is concerned about the affairs of this world — how he can please his wife — and his interests are divided." },
  { verse: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing." },
  { verse: "Isaiah 56:5", text: "To them I will give within my temple and its walls a memorial and a name better than sons and daughters; I will give them an everlasting name that will endure forever." },
  { verse: "Hebrews 13:5", text: "Never will I leave you; never will I forsake you." },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

type LSEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function LateSinglenessPage() {
  const [tab, setTab] = useState("theology");
  const [lsJournal, setLsJournal] = useState<LSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_latesinglenessj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_latesinglenessj_entries", JSON.stringify(lsJournal)); } catch {}
  }, [lsJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setLsJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setLsJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Singleness & Community</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Singleness in Your Thirties and Beyond</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          Your life is not on hold. Your singleness is not a waiting room. The church is supposed to be your family.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Singleness Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is hard about my singleness right now — specifically and honestly?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is genuinely good about my life right now — not performance, but real?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One investment in friendship or community I will make this week</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {lsJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {lsJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Hard: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Good: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Investment: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom", channel: "Tim Keller / The Gospel Coalition", description: "Keller explores how the Kingdom of God inverts worldly expectations — including the stigma around singleness — and offers a framework for understanding singleness as genuine vocation rather than waiting room." },
              { videoId: "t6L-F2emwUc", title: "The Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on how joy in God — not romantic fulfillment — is the foundation for a flourishing life; the theological counterargument to the idolization of marriage the single person feels most acutely." },
              { videoId: "4Eg_di-O8nM", title: "The Simple Gospel and Radical Community", channel: "Francis Chan", description: "Chan on how the early church's radical community specifically addressed every form of human aloneness — offering a vision of what the church could be as the promised substitute family for the single person." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God Over Every Season", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul on the sovereignty of God — including over the circumstances of singleness — and what it means to trust a God who sees and orders every season of a life." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
