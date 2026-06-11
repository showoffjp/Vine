"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Sabbath Is Built Into the Structure of Creation — Before the Law", verse: "Genesis 2:1-3", text: "Thus the heavens and the earth were completed in all their vast array. By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done. Sabbath is not a Mosaic invention or a Jewish peculiarity. It is woven into the fabric of creation itself — present before the fall, before the law, before Israel. The rhythm of six-and-one is structural to how God made the world to work. To live without Sabbath is not to transcend creation; it is to work against its grain." },
  { title: "The Sabbath Is a Sign of the Covenant — and a Taste of Eternal Rest", verse: "Exodus 20:8-11", text: "Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the Lord your God. On it you shall not do any work. For in six days the Lord made the heavens and the earth, the sea, and all that is in them, but he rested on the seventh day. Therefore the Lord blessed the Sabbath day and made it holy. At Sinai, Sabbath is anchored to God's own rest in creation. But Deuteronomy anchors it also to the exodus: you were slaves who could not rest; now you are free and must rest. Sabbath is thus a political and theological statement — a declaration that you are not a slave, that your worth is not measured by your output, and that the Lord of all is your God." },
  { title: "Jesus Is Lord of the Sabbath — Not Its Abolisher", verse: "Mark 2:27-28", text: "Then he said to them, 'The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath.' Jesus does not dismiss the Sabbath; he relocates its center. The Pharisees had turned a gift into a burden, a sign of grace into a test of performance. Jesus restores it to its creational purpose: the Sabbath was made for humanity. It exists for human flourishing, not to measure human compliance. And as Lord of the Sabbath, he shows what it is for — healing, restoring, making whole. The Sabbath is a day shaped by the character of its Lord." },
  { title: "Hebrews Points to a Remaining Sabbath Rest for the People of God", verse: "Hebrews 4:9-11", text: "There remains, then, a Sabbath-rest for the people of God; for anyone who enters God's rest also rests from their own work, just as God did from his. Let us, therefore, make every effort to enter that rest. The writer of Hebrews sees weekly Sabbath as a foretaste of the eschatological rest that awaits God's people — a weekly rehearsal of the eternal Sabbath of the new creation. To keep Sabbath now is not merely a health practice or a productivity hack. It is an act of eschatological hope — a declaration that the world's final state is rest and delight in God, not endless labor and striving." },
  { title: "Sabbath Is Resistance Against the Idolatry of Productivity", verse: "Matthew 11:28-29", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. Jesus's invitation to rest is an invitation to stop performing, stop proving, and stop producing your way to worth. In a culture that worships productivity, Sabbath is a weekly act of resistance — a declaration that you are not what you do, that your value does not depend on your output, and that the One who holds the world does not need your anxious effort to keep it running. To rest is to trust." },
];

const practices = [
  { icon: "🌅", title: "Choose a Day and Protect It — Even From Good Things", text: "The most important Sabbath decision is simply to choose a day and guard it consistently. Sabbath is not an occasional break when your schedule happens to permit it — that day will never come. It requires a prior decision to protect it from everything else, including good things. Ministry commitments, family obligations, helpful projects: these will all press in. The decision must be made before the pressure arrives: this day belongs to God and to rest, and I will not negotiate it away." },
  { icon: "📵", title: "Digital Sabbath: What You Stop Matters as Much as What You Start", text: "Much of what enslaves modern people is digital: the unending scroll, the inbox that never empties, the notifications that fragment every hour. A digital Sabbath — choosing not to check email, social media, or news on the Sabbath day — is one of the most countercultural and liberating practices available. You will discover how much of your anxiety is fed by digital noise. The silence is unsettling at first, then clarifying. You may find that you cannot truly rest while your phone is in your hand." },
  { icon: "🍽️", title: "Sabbath Practices: What Fills You Rather Than Depletes You", text: "The Jewish tradition of Sabbath includes not just cessation from work but the positive practices of feasting, delight, and play. What fills you with life? Shared meals, unhurried walks, long conversations, reading for pleasure, worship that is not hurried, music, laughter with children — these are Sabbath practices. Marva Dawn calls it 'ceasing, resting, embracing, and feasting.' The day should have a texture of abundance and joy, not merely an absence of busyness." },
  { icon: "🚫", title: "Learn to Say No: Sabbath as Training in Refusal", text: "Walter Brueggemann argues that Sabbath is not primarily about rest but about resistance — the refusal to be defined by productivity, the refusal to participate in the culture of anxious acquisition and relentless output. The person who cannot say no to one more task, one more commitment, one more demand has not yet learned what Sabbath is for. Sabbath trains us in the discipline of refusal — and that discipline slowly reshapes how we relate to work and worth the other six days as well." },
  { icon: "👨‍👩‍👧", title: "Family Sabbath: Teaching Children the Rhythm of Work and Rest", text: "The Sabbath commandment includes the entire household — children, servants, even animals. Establishing a family Sabbath rhythm does more than give children a break; it teaches them in their bodies and their memories that life has a shape, that rest is holy, that the world does not depend on our constant effort. Children who grow up with Sabbath have an embodied alternative to the hustle culture they will encounter everywhere else. The gift given to them is not just rest now but a pattern for life." },
];

const voices = [
  { id: "ajh", name: "Abraham Joshua Heschel", role: "Author, \"The Sabbath\" — Jewish philosopher", quote: "The Sabbath is not a date but an atmosphere. It is a palace in time which we build. Six days a week we live under the tyranny of things of space; on the Sabbath we try to become attuned to holiness in time. The Sabbath is not for the sake of the weekdays; the weekdays are for the sake of the Sabbath. It is not an interlude but the climax of living.", bio: "Heschel's The Sabbath (1951) is the most beautiful and philosophically rich treatment of Sabbath available. His distinction between the holiness of space and the holiness of time reshapes how we understand what Sabbath is: not a break from real life but the goal toward which the week moves. Christian readers will find that this Jewish philosopher's meditation on Sabbath illuminates the New Testament's eschatological vision of rest more clearly than most Christian commentaries." },
  { id: "wb", name: "Walter Brueggemann", role: "Author, \"Sabbath as Resistance\"", quote: "Sabbath is not simply a pause that lets us catch our breath so we can go back and be more productive. It is an alternative to the anxiety system of Pharaoh — who never took a day off, because his entire program depended on keeping people producing. The Sabbath is the great refusal: the refusal to be defined by productivity, the refusal to participate in an endless cycle of anxiety, acquisition, and restless striving.", bio: "Brueggemann's Sabbath as Resistance (2014) reads the Sabbath commandment against the backdrop of Exodus — the liberation from Egyptian slavery — and argues that Sabbath keeping is fundamentally an act of socioeconomic and theological resistance. For Brueggemann, the inability to rest is not merely a wellness problem but a theological one: it reveals trust in the system of production rather than in the God who provides." },
  { id: "md", name: "Marva Dawn", role: "Author, \"Keeping the Sabbath Wholly\"", quote: "Keeping the Sabbath wholly means that we cease — not just from work but from the need to accomplish, from the worry about what is left undone, from the anxiety of what comes next. It means we rest in the fullest sense — body, mind, and spirit. It means we embrace the world as gift rather than grasping it as resource. And it means we feast — we let ourselves be delighted by God, by community, by beauty, by the goodness of what God has made.", bio: "Dawn's Keeping the Sabbath Wholly (1989) remains the most comprehensive Christian practical theology of Sabbath observance available. Organized around four movements — ceasing, resting, embracing, and feasting — it gives both the theological grounding and the practical specificity that helps people actually observe the day rather than merely appreciate the idea of it. Her treatment of what Sabbath feasting looks like — delight, play, beauty, worship, community — is particularly formative." },
];

const scriptures = [
  { verse: "Genesis 2:2-3", text: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done." },
  { verse: "Exodus 20:8", text: "Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the Lord your God." },
  { verse: "Deuteronomy 5:15", text: "Remember that you were slaves in Egypt and that the Lord your God brought you out of there with a mighty hand and an outstretched arm. Therefore the Lord your God has commanded you to observe the Sabbath day." },
  { verse: "Mark 2:27", text: "Then he said to them, 'The Sabbath was made for man, not man for the Sabbath. So the Son of Man is Lord even of the Sabbath.'" },
  { verse: "Hebrews 4:9-11", text: "There remains, then, a Sabbath-rest for the people of God; for anyone who enters God's rest also rests from their own work, just as God did from his. Let us, therefore, make every effort to enter that rest." },
  { verse: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light." },
];

type SREntry = { id: string; date: string; experience: string; obstacles: string; intention: string };

export default function SabbathRestPage() {
  const [tab, setTab] = useState("theology");
  const [srJournal, setSrJournal] = useState<SREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_sabbath_entries") ?? "[]"); } catch { return []; }
  });
  const [jExperience, setJExperience] = useState("");
  const [jObstacles, setJObstacles] = useState("");
  const [jIntention, setJIntention] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_sabbath_entries", JSON.stringify(srJournal)); } catch {}
  }, [srJournal]);

  function saveEntry() {
    if (!jExperience.trim() && !jObstacles.trim()) return;
    setSrJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), experience: jExperience, obstacles: jObstacles, intention: jIntention }, ...prev]);
    setJExperience(""); setJObstacles(""); setJIntention("");
  }
  function deleteEntry(id: string) { setSrJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "practices", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Spiritual Disciplines</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Sabbath &amp; Rest</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            The theology and practice of weekly Sabbath — understanding rest as a spiritual discipline, a creational gift, and an act of resistance against hustle culture and the idolatry of productivity.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GREEN : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
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
                  <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${GREEN}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: GREEN, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Sabbath Journal</h3>
                <textarea placeholder="What was my Sabbath experience like this week — what filled me, what drained me?" value={jExperience} onChange={e => setJExperience(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What are the main obstacles to genuine Sabbath in my life right now?" value={jObstacles} onChange={e => setJObstacles(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What one practice do I want to add or protect in my Sabbath rhythm?" value={jIntention} onChange={e => setJIntention(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {srJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : srJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.experience && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>My experience:</strong> {e.experience}</p>}
                  {e.obstacles && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Obstacles:</strong> {e.obstacles}</p>}
                  {e.intention && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>My intention:</strong> {e.intention}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "RUtqNSvBHSE", title: "Sabbath: The Gift of Rest", channel: "The Gospel Coalition", description: "An exploration of why the Sabbath is a gift rather than a burden — how weekly rest forms us as people who trust God with the world rather than believing its continuation depends on our unceasing effort." },
                { videoId: "2OGgt9sDpzI", title: "Sabbath as Resistance — Walter Brueggemann", channel: "Working Preacher / Luther Seminary", description: "Brueggemann on his landmark book Sabbath as Resistance: how the Sabbath commandment is rooted in the exodus from Egyptian slavery and why Sabbath keeping is a socioeconomic and theological act of defiance against productivity culture." },
                { videoId: "WKGi9YPHkJE", title: "The Theology of Rest", channel: "Desiring God", description: "A biblical-theological survey of rest from Genesis 2 through Hebrews 4 — how the weekly Sabbath, the land Sabbath, the Year of Jubilee, and the eschatological Sabbath all point to the same reality: God's people are made for rest in him." },
                { videoId: "pHFBvANkxkw", title: "Keeping the Sabbath in a 24/7 World", channel: "Redeemer Presbyterian / Timothy Keller", description: "Keller on the practical and theological challenge of Sabbath in a culture that never stops — what it means to truly cease, why modern people find rest threatening, and how to establish a Sabbath rhythm that actually forms the soul." },
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
