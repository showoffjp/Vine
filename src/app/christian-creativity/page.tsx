"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Imago Dei — We Create Because Our Creator God Creates", verse: "Genesis 1:1-2", text: "In the beginning God created the heavens and the earth. The first thing Scripture tells us about God is that he is a creator. And the first thing Scripture tells us about humanity is that we are made in his image. The implication is profound: creativity is not incidental to being human — it is definitional. When we make things — poems, meals, buildings, businesses, songs, software, gardens — we are doing what we were designed to do, expressing the image of the God who makes. The capacity to create is not a talent a few people happen to have. It is the birthright of every human being made in God's image." },
  { title: "Bezalel — the Spirit Fills Artists for Their Craft", verse: "Exodus 31:2-3", text: "See, I have chosen Bezalel son of Uri, the son of Hur, of the tribe of Judah, and I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills. The Spirit of God, in the first explicit mention of Spirit-filling in Scripture, fills an artist. Not a prophet. Not a priest. A craftsman — filled with the Spirit for skill in metalwork, woodwork, stone cutting, and embroidery. This single passage overturns the idea that art is a lesser calling or that spiritual work happens only in church. The Spirit equips artists to make beautiful things for God's purposes. Artistic excellence is a form of spiritual calling." },
  { title: "Excellence in All Work as Worship — Colossians 3", verse: "Colossians 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving. Paul's instruction applies the logic of worship to every domain of work — not just religious work, but all work. The creative work you do — the craft you practice, the thing you make, the excellence you pursue — is offered to Christ himself. This means that mediocrity in creative work is not humility; it is a failure of worship. Excellence — doing the best work you are capable of — is the appropriate offering." },
  { title: "Does It Glorify God? vs Making Good Things as Service", verse: "Psalm 33:3", text: "Sing to him a new song; play skillfully, and shout for joy. The question 'does this glorify God?' can become a creative straitjacket when it is used to demand that all art be explicitly religious. But the Psalm's command is to sing a new song and play skillfully — where the emphasis is on newness and skill, not on explicit theological content. Andy Crouch argues that Christians are called to make culture — to create things that are genuinely good, beautiful, and true — as an act of service to the world. A poem that captures grief truthfully, a building that dignifies its inhabitants, a piece of music that creates space for joy — these glorify God by being genuinely good." },
  { title: "Sub-Creation — C.S. Lewis on Making as Participation in God's Work", verse: "Ephesians 2:10", text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do. C.S. Lewis, drawing on his friend J.R.R. Tolkien, articulated the concept of sub-creation: humans are sub-creators, making within and under the creation of the primary Creator. Our creative work participates in God's ongoing work of making and ordering the world. We are not just consumers of what God has made — we are co-workers in the ongoing project of culture-making. The stories we tell, the things we build, the art we make are participation in the creative mandate that began in Genesis and will culminate in the New Jerusalem." },
];

const voices = [
  { id: "ac", name: "Andy Crouch", role: "Author, Culture Making; Executive Editor, Christianity Today", quote: "The only way to change culture is to create more of it. Christians have often been better at condemning culture, critiquing culture, copying culture, and consuming culture than at making new culture. But the call is to make — to create things that are genuinely good, beautiful, and true, and to put them into the world where they can do what culture always does: offer a new way of being human.", bio: "Crouch's Culture Making is the essential theological framework for understanding why Christians are called to be makers, not merely critics or consumers of culture. His argument — that every cultural artifact embeds a vision of human flourishing, and that Christians should put their vision into concrete form — grounds creativity in theology of creation and kingdom. His subsequent work on power and the image of God deepens the framework." },
  { id: "mf", name: "Makoto Fujimura", role: "Author, Art and Faith; Visual Artist; Founder, International Arts Movement", quote: "Art is not a luxury. It is a necessity for the soul and for culture — a way of seeing, naming, and restoring what has been damaged. The artist does not escape the world's brokenness. The artist enters it, attends to it, and makes something out of it that bears witness to both the depth of the fracture and the possibility of restoration. This is not a small task. It is essential work.", bio: "Fujimura brings together a rigorous artistic practice — his work hangs in museums worldwide — and a deep Christian theology of making. Art and Faith is his most direct treatment of why artists are called to make in response to the gospel. His concept of 'culture care' — tending the cultural commons as an act of love and service — offers a compelling alternative to the culture-war framing that has dominated much Christian engagement with the arts." },
  { id: "ds", name: "Dorothy Sayers", role: "Author, The Mind of the Maker; Theologian; Playwright", quote: "The characteristic common to God and man is apparently that the desire to make things is a part of them. In fact, it is the most fundamental characteristic of both. It is a mistake to imagine that some men are creative and others are not. The desire, the impulse, the capacity to make — these are as human as breathing. The question is only whether we will cultivate them or neglect them.", bio: "Sayers's The Mind of the Maker draws a sustained analogy between the Trinity — Father, Son, and Spirit as Idea, Energy, and Power — and the act of human making. Her argument that creativity is theologically grounded in the nature of God himself, and that every human creative act reflects the structure of divine making, remains one of the most original contributions to a theology of the arts. Her insight that the creative impulse is universal, not confined to artists, democratizes the call to make." },
];

const practices = [
  { icon: "🎨", title: "Practice Craft as Spiritual Discipline — Show Up Even When Uninspired", text: "Creativity is not primarily a feeling; it is a practice. The musician who waits for inspiration before practicing will not be ready when inspiration comes. The writer who writes only when moved produces little. The discipline of showing up — practicing scales, keeping a sketchbook, writing daily pages, working the craft whether or not it feels inspired — is itself a spiritual practice. It is the cultivation of the gifts the Spirit has given, the preparation of the vessel so that when the Spirit moves, the instrument is ready. Waiting for inspiration without practicing craft is like praying for a harvest without planting." },
  { icon: "🤝", title: "Collaborate With Others — Creativity Flourishes in Community", text: "The myth of the solitary genius creating alone is almost entirely false. The great creative traditions — Renaissance workshops, jazz ensembles, literary circles, film crews — are all collaborative. Christians in particular have theological reason to pursue creative collaboration: the triune God is inherently relational, and the image of God in community reflects something about the God in whose image we are made. Find others who are making things. Share work in process. Receive and offer honest responses. The creative work that emerges from genuine community is almost always richer than what any individual makes alone." },
  { icon: "✝️", title: "Create for an Audience of One — Resist the Idol of Approval", text: "The greatest enemy of creative faithfulness is the audience: the fear of what they will think, the craving for their approval, the paralysis that comes from imagining their judgment before the work is done. Colossians 3:23 cuts through this: whatever you do, work at it with all your heart, as working for the Lord. The primary audience for your creative work is not critics, not followers, not even other believers. It is God himself. Creating for an audience of One does not mean ignoring whether the work serves people — it means being free from the approval addiction that prevents making things at all." },
  { icon: "👂", title: "Receive Criticism as Gift — Let It Form Rather Than Destroy", text: "Creative work made in public will be criticized. Some criticism is careless or cruel; some is genuinely useful. The person who cannot receive any criticism will not grow. The person who receives all criticism as equally valid will lose their voice trying to please everyone. The spiritual discipline is discernment: taking in criticism with humility and openness, separating the useful from the useless, letting honest feedback sharpen the work, and releasing what is merely opinion or projection. A trusted creative community — people who know your work and love you — is the best place to learn to receive criticism well." },
  { icon: "⚖️", title: "Use Creativity for Mercy and Justice — Let Making Serve the Vulnerable", text: "The call to create is not separable from the call to love neighbor. The most powerful creative work often emerges from proximity to suffering — from attending to what is broken, naming it honestly, and making something that opens eyes or creates space for healing. Makoto Fujimura's concept of 'culture care' points this direction: tending the cultural commons not for personal gain or acclaim but as an act of love for the most vulnerable. What would it mean to put your creative gifts in service of those on the margins — to make beauty in places of ugliness, to tell stories that are going untold, to build things that dignify the poor?" },
];

const scriptures = [
  { verse: "Genesis 1:1-2", text: "In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters." },
  { verse: "Exodus 31:2-3", text: "See, I have chosen Bezalel son of Uri, the son of Hur, of the tribe of Judah, and I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills." },
  { verse: "Colossians 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving." },
  { verse: "Psalm 33:3", text: "Sing to him a new song; play skillfully, and shout for joy." },
  { verse: "Revelation 5:9", text: "And they sang a new song, saying: You are worthy to take the scroll and to open its seals, because you were slain, and with your blood you purchased for God persons from every tribe and language and people and nation." },
  { verse: "Ephesians 2:10", text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." },
];

type CCEntry = { id: string; date: string; gift: string; obstacle: string; project: string };

export default function ChristianCreativityPage() {
  const [tab, setTab] = useState("theology");
  const [ccJournal, setCcJournal] = useState<CCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrcreativity_entries") ?? "[]"); } catch { return []; }
  });
  const [jGift, setJGift] = useState("");
  const [jObstacle, setJObstacle] = useState("");
  const [jProject, setJProject] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_chrcreativity_entries", JSON.stringify(ccJournal)); } catch {}
  }, [ccJournal]);

  function saveEntry() {
    if (!jGift.trim() && !jObstacle.trim()) return;
    setCcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), gift: jGift, obstacle: jObstacle, project: jProject }, ...prev]);
    setJGift(""); setJObstacle(""); setJProject("");
  }
  function deleteEntry(id: string) { setCcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Arts &amp; Calling</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Creativity</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Creativity as a calling for Christians — the theology of art and making, why the image of God means every believer is a maker, and how to practice creativity as an act of worship.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? PURPLE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
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
                  <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
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

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Creative Calling Journal</h3>
                <textarea placeholder="What creative gift is God inviting you to develop? What do you make, or feel drawn to make?" value={jGift} onChange={e => setJGift(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What has stopped you from creating — fear, busyness, perfectionism, lack of permission, something else?" value={jObstacle} onChange={e => setJObstacle(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What is one creative project you want to offer to God in the next season?" value={jProject} onChange={e => setJProject(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {ccJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : ccJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.gift && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>My gift:</strong> {e.gift}</p>}
                  {e.obstacle && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>What has stopped me:</strong> {e.obstacle}</p>}
                  {e.project && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Project to offer:</strong> {e.project}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "8Ns1n1MjyR0", title: "Culture Making — Why Christians Are Called to Create", channel: "Andy Crouch / Q Ideas", description: "Crouch presents his core argument from Culture Making: that Christians are called not primarily to condemn, critique, copy, or consume culture, but to make new culture — and why this matters for how we think about vocation, creativity, and the kingdom." },
                { videoId: "L3bKzOjg4rY", title: "Art and Faith — Beauty as a Witness to the Gospel", channel: "Makoto Fujimura / The Gospel Coalition", description: "Fujimura on the relationship between artistic excellence, beauty, and Christian witness — why making beautiful things is not escapism but a form of gospel testimony, and how the artist's calling is rooted in the character of God." },
                { videoId: "T4MQbmwPLSY", title: "The Mind of the Maker — Dorothy Sayers and the Theology of Creativity", channel: "Mere Fidelity / Cruciform Press", description: "An exploration of Sayers's argument in The Mind of the Maker — that the structure of human creativity mirrors the Trinity, and that understanding this transforms how we think about the creative impulse and its theological significance." },
                { videoId: "YdvzC1MmxAI", title: "Bezalel's Call — The Spirit Fills Artists", channel: "International Arts Movement", description: "On Exodus 31 and the theological significance of Bezalel — the first person in Scripture said to be filled with the Spirit, who was filled not for preaching or prophecy but for artistic craft. What this means for how Christians understand the creative vocation." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
