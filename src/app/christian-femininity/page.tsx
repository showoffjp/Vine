"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ROSE = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Womanhood Is Grounded in the Imago Dei — Before Any Cultural Role", verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them. The foundation of Christian femininity, like masculinity, is not cultural convention but the imago Dei. Both male and female bear the image of God fully, equally, and distinctly. Female humanity reflects something particular about God that male humanity does not fully capture alone. Christian womanhood begins here: in the conviction that femininity itself — not despite its distinctives but because of them — is a full and glorious bearer of the divine image." },
  { title: "The Proverbs 31 Woman Is a Poem, Not a Checklist", verse: "Proverbs 31:10", text: "A wife of noble character who can find? She is worth far more than rubies. The Proverbs 31 poem has been weaponized against women by reducing it to a performance standard. But it is an acrostic poem — each verse beginning with the next letter of the Hebrew alphabet — a literary celebration of a complete woman, not a productivity metric. The woman in the poem is economically active, physically strong, wise in counsel, generous to the poor, and described as fearing God. She is celebrated by her household for who she is, not for how much she accomplishes." },
  { title: "Mary of Bethany — Sitting at Jesus' Feet — Disrupted the Gendered Division of Spiritual Life", verse: "Luke 10:42", text: "Mary has chosen what is better, and it will not be taken away from her. In first-century Judaism, sitting at the feet of a rabbi was the posture of a male disciple. Martha's complaint that Mary was not helping was culturally obvious — women had defined roles. Jesus' answer was culturally radical: Mary has chosen what is better. He explicitly included women in the category of serious theological disciples. Christian womanhood is not defined by domestic role but by radical discipleship available to every woman regardless of vocation." },
  { title: "The Women at the Empty Tomb Are the First Witnesses to the Resurrection", verse: "Mark 16:7", text: "But go, tell his disciples and Peter, 'He is going ahead of you into Galilee.' The first witnesses to the resurrection — the most important event in human history — were women. In a culture where women's testimony was not legally valid, God chose women to be the first carriers of the gospel's central claim. This is not incidental. It is the signature of a kingdom that consistently elevates those the world dismisses. Christian women's voices, witness, and ministry are woven into the fabric of the gospel from its first moments." },
  { title: "The Tension Over Women's Roles Requires Humility From All Positions", verse: "Romans 14:1", text: "Accept the one whose faith is weak, without quarreling over disputable matters. The question of women's roles in church and home is genuinely contested among faithful, Bible-believing Christians. Complementarians and egalitarians both have sophisticated exegetical arguments and both care about the authority of Scripture. The Christian woman navigating this debate deserves both access to the best arguments on all sides and the grace of a community that does not weaponize a secondary issue against her primary calling as a disciple." },
];

const voices = [
  { id: "sa", name: "Sarah Bessey", role: "Author, Jesus Feminist; Speaker", quote: "Being a woman is not a problem to be managed or a biology to be transcended. It is a specific way of being human, of bearing the image of God, of participating in the kingdom of Jesus. The women around Jesus were not tolerated — they were commissioned. The first witnesses to the resurrection were not an accident — they were chosen. God has always used women, and he is still using them.", bio: "Bessey's Jesus Feminist provided an accessible and winsome case for the full inclusion of women in Christian ministry and leadership. Her work reaches women who feel dismissed by traditional structures and gives them theological language for their experience of calling. Her emphasis on Jesus' radical inclusion of women has resonated widely across the evangelical spectrum." },
  { id: "ew", name: "Aimee Byrd", role: "Author, Recovering from Biblical Manhood and Womanhood", quote: "The problem is not that we take the Bible's teaching on male and female seriously. The problem is that we have replaced the Bible's rich, complex theology of manhood and womanhood with a thin cultural caricature and called it biblical. Women are not pink and sparkly. Men are not stoic and dominant. The Bible's vision of both is far richer, more demanding, and more liberating than the cultural version.", bio: "Byrd's work critiques complementarianism from within the Reformed tradition, arguing that the popular version has been distorted by cultural gender stereotypes. Her insistence that women need serious theological formation — not just homemaking skills and emotional support — has opened significant conversations in conservative evangelical circles." },
  { id: "ks", name: "Kathleen Nielson", role: "Author, Bible Study: Following the Ways of the Word; TGC", quote: "The women I most admire are women who are deeply rooted in the Word — who have read widely, thought carefully, and can speak with theological depth about what they believe and why. The growth in serious women's Bible study and theology over the past generation has been one of the most encouraging developments in evangelical Christianity.", bio: "Nielson's work on women's Bible study and theological formation has helped equip a generation of women to engage Scripture seriously. Her emphasis on the intellectual and theological formation of women — not as a concession but as a calling — provides resources for women who want depth without the political weight of the broader gender debates." },
];

const practices = [
  { icon: "📖", title: "Pursue Theological Formation as a Calling, Not a Hobby", text: "Mary of Bethany chose the better part — serious discipleship and theological engagement. The women who sat at Jesus' feet, who followed him to the cross, who were first at the tomb: they were serious disciples, not passive recipients of a filtered version of the faith. Christian women need the same theological depth that Christian men need. This means reading widely, sitting under serious preaching, engaging with difficult texts, and refusing to be satisfied with a simplified or sentimentalized version of Christianity." },
  { icon: "🏘️", title: "Invest in Intergenerational Friendship With Other Women", text: "Titus 2 calls older women to train younger women — not as a program but as a relationship. The mentoring, discipleship, and friendship that flows between women across generations is one of the most reliable means of formation available. The younger woman who has access to an older woman who has weathered marriage, parenting, loss, career, and doubt has access to formation that no book or program can replicate. Seek it out; offer it when you have it to give." },
  { icon: "✝️", title: "Learn to Name Your Own Calling — Not Just Your Role", text: "Role (wife, mother, professional, single woman) describes position. Calling describes purpose. The Christian woman's primary calling is discipleship — to follow Jesus, to be conformed to his image, to love God and neighbor in the specific spheres she occupies. Her roles are the context in which she lives out that calling, not the definition of it. A woman who understands her calling is not threatened by changes in her roles — retirement, empty nest, divorce, widowhood — because the calling remains even when the role changes." },
  { icon: "💪", title: "Resist Both the Cultural Pressure to Erase Femininity and the Pressure to Reduce It", text: "Contemporary culture often asks women to minimize or erase femininity to succeed on male terms. Traditional religion sometimes reduces femininity to a narrow set of domestic roles. Both distortions fail the Christian woman. Biblical femininity is neither erasure nor reduction: it is the full, particular, image-bearing humanity of women expressed in every sphere of life, every vocation, every relationship." },
  { icon: "🙏", title: "Bring Your Particular Womanhood to God — Not a Sanitized Version", text: "Hannah wept and refused to eat. Mary questioned the angel's announcement. The woman with the issue of blood pressed through the crowd. The Syrophoenician woman argued with Jesus. The biblical women who encountered God and Jesus most transformatively did so as whole women — including their frustration, grief, confusion, and fierce advocacy. Bring your particular female experience to God honestly: the body, the seasons, the losses, the longings. He made all of it." },
];

const scriptures = [
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "Proverbs 31:25", text: "She is clothed with strength and dignity; she can laugh at the days to come." },
  { verse: "Luke 10:42", text: "Mary has chosen what is better, and it will not be taken away from her." },
  { verse: "Galatians 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus." },
  { verse: "Proverbs 31:30", text: "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised." },
  { verse: "Joel 2:28", text: "Your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions." },
];

type CFEntry = { id: string; date: string; calling: string; formation: string; step: string };

export default function ChristianFemininityPage() {
  const [tab, setTab] = useState("theology");
  const [cfJournal, setCfJournal] = useState<CFEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrfemininity_entries") ?? "[]"); } catch { return []; }
  });
  const [jCalling, setJCalling] = useState("");
  const [jFormation, setJFormation] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_chrfemininity_entries", JSON.stringify(cfJournal)); } catch {}
  }, [cfJournal]);

  function saveEntry() {
    if (!jCalling.trim()) return;
    setCfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), calling: jCalling, formation: jFormation, step: jStep }, ...prev]);
    setJCalling(""); setJFormation(""); setJStep("");
  }
  function deleteEntry(id: string) { setCfJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "practices", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <main id="main-content" style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Faith &amp; Identity</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Femininity</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            What it means to be a woman formed by the gospel — the theology of womanhood rooted in the imago Dei, the radical inclusion of women in the Jesus story, and the fullness of female calling.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button type="button" key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? ROSE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: ROSE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
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
                  <div style={{ color: ROSE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${ROSE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: ROSE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Identity &amp; Calling Journal</h3>
                <textarea placeholder="How am I experiencing my calling as a woman in Christ right now?" value={jCalling} onChange={e => setJCalling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What woman in Scripture or Christian history is forming me right now?" value={jFormation} onChange={e => setJFormation(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="One step I want to take in my theological formation or ministry this week" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button type="button" onClick={saveEntry} style={{ background: ROSE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {cfJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : cfJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.calling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Calling:</strong> {e.calling}</p>}
                  {e.formation && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Formation:</strong> {e.formation}</p>}
                  {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Next step:</strong> {e.step}</p>}
                  <button type="button" onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "4H1sMnV6O5g", title: "Women in the Story of Jesus — The Radical Inclusion", channel: "The Gospel Coalition", description: "How Jesus interacted with women in ways that consistently broke with his culture — women disciples, women witnesses, women commissioned for ministry — and what that means for women's calling in the church today." },
                { videoId: "t6L-F2emwUc", title: "The Proverbs 31 Woman — What the Text Actually Says", channel: "Desiring God", description: "A careful reading of the Proverbs 31 poem that rescues it from a productivity checklist and recovers its celebration of a complete woman: economically active, relationally generous, spiritually serious." },
                { videoId: "v5Dy6lvqsGE", title: "Women, Theology, and Serious Discipleship", channel: "Crossway", description: "On the need for theological depth in women's formation — why women need to know doctrine, engage Scripture seriously, and pursue the same depth of discipleship that is expected of men." },
                { videoId: "1M_MHlPGEsA", title: "Called and Gifted: Women in Ministry", channel: "Fuller Seminary", description: "A theological exploration of women's calling, gifting, and ministry across the spectrum of evangelical views — how to navigate the debates with grace, conviction, and commitment to the authority of Scripture." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: ROSE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                    <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
