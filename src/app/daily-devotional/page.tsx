"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Manna Pattern: God Provides Fresh Nourishment Daily", verse: "Exodus 16:4", text: "Then the Lord said to Moses, 'I will rain down bread from heaven for you. The people are to go out each day and gather enough for that day.' The manna could not be hoarded. It spoiled overnight. God designed it that way — not because he was stingy, but because he was training Israel in a posture of daily return. Yesterday's provision could not feed today's hunger. The rhythm was the point. The discipline of daily devotion is not a technique for spiritual productivity. It is a re-enactment of the manna pattern: returning each morning to a God who withholds nothing and provides exactly enough for the day. The person who tries to live on last Sunday's sermon — or last year's spiritual high — will find, as Israel found, that yesterday's manna breeds worms." },
  { title: "Jesus Had a Practice of Early Morning Solitude", verse: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed. This verse appears immediately after one of the most demanding days in Jesus' ministry — teaching in the synagogue, casting out a demon, healing Simon's mother-in-law, then receiving the entire sick population of Capernaum at the door after sunset. He had every human reason to sleep in. Instead, he rose before dawn and withdrew to pray. If the Son of God, who perfectly knew the Father, sustained his ministry through the practice of daily solitary prayer, the implication for his followers is unmistakable. The question is not whether you need what Jesus modeled. The question is whether you believe you need it." },
  { title: "The Psalms Are a Devotional Curriculum Written for Daily Use", verse: "Psalm 1:2", text: "But whose delight is in the law of the Lord, and who meditates on his law day and night. The first Psalm is a portrait of the person whose life is grounded in Scripture — and the key phrase is day and night. This is not occasional engagement but habitual return. The Psalms themselves were written to be this kind of daily companion: they cover every emotional register, every life circumstance, every form of prayer from lament to praise. The ancient practice of praying through the Psalms — used by Israel, by Jesus, by the early church, by monastic communities, by the Reformers — is not a technique invented by religious professionals. It is a curriculum given by God for the daily formation of every believer." },
  { title: "The Discipline of Daily Return Shapes a Life Over Time", verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness. These words were written in the ruins of Jerusalem, by a man who had watched the city burn. They are not the words of someone experiencing prosperity or clarity. They are the words of someone choosing, in the darkness, to return to what is true about God. The practice of daily devotion is training for exactly that moment — the morning when everything is hard and nothing feels clear. A life of regular return to God builds the muscle of remembrance that the great crises of life will require. The faithfulness is his; the daily return is ours." },
  { title: "Quiet Time Is Not Earning God's Love — It Is Receiving It", verse: "Matthew 11:28-29", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. The single most common distortion of daily devotions is turning them into a performance. If you read long enough and prayed deeply enough, perhaps God will be pleased. Jesus invites the opposite orientation: come because you are weary. Come to receive, not to earn. The quiet time is not the place where you demonstrate your devotion and acquire God's approval. It is the place where you come empty and are met by someone who is gentle and humble in heart. The discipline is simply the practice of showing up to the table he has already set." },
];

const structure = [
  { icon: "🙏", title: "Begin With Silence: Let Your Soul Settle Before God", text: "The mind that has been asleep is not the mind that has been still. Before words — yours or Scripture's — there is a practice of settling. This might be two minutes. It might be five. The point is not length but orientation: you are transitioning from the horizontal world of tasks, screens, and demands to the vertical reality of God's presence. Some find it helpful to simply name where they are: tired, anxious, distracted, grateful. Naming the actual interior state before God is itself a form of honesty that prepares the soul to receive. The temptation is to skip this step and get to the content. But the content lands differently in a soul that has first been quiet." },
  { icon: "📖", title: "Read Scripture Slowly — Not for Information but Formation", text: "Lectio divina — sacred reading — is the ancient Christian practice of reading Scripture not for data but for encounter. Read a short passage slowly. Read it again. Ask not 'what does this mean?' but 'what word or phrase arrests me?' Where does the text create friction, longing, or recognition? The goal of devotional reading is not to cover ground but to be covered by what you find. This is a different posture than Bible study, which has its own important place. In devotional reading, a single verse received and inhabited is worth more than five chapters surveyed. Eugene Peterson called this 'eating the scroll' — ingesting the Word slowly enough that it becomes part of you rather than information you possess." },
  { icon: "✏️", title: "Write What You Notice — The Journal as a Tool of Attention", text: "Journaling in devotions is not diary-keeping. It is attention-training. The act of writing slows the mind and forces it to make choices: what is most important here? What do I actually think and feel? What is this text asking of me? Many people discover things in the act of writing that they did not know they knew until the pen was moving. Over time, the journal becomes a record of God's faithfulness — a document you can return to in seasons of doubt to see that he has been consistently present, consistently faithful, even in the seasons when you did not feel it. The journal is not the devotion. It is the tool that makes the devotion concrete enough to carry." },
  { icon: "💬", title: "Pray in Response to What You've Read", text: "The most natural movement of devotional prayer is response: you have heard from God in Scripture, and now you speak back. This is the structure of the Psalms — the text is a response to God's character and acts, not a speech delivered into a void. Responsive prayer may be confession (the text revealed something in you that needs to be named), petition (the text gave you language for a need), praise (the text opened your vision of who God is), or intercession (the text moved you toward the needs of others). The alternative — coming to prayer with a pre-formed list and leaving when the list is done — is legitimate, but it misses the deeper movement of prayer as dialogue. Let what you read shape what you pray." },
  { icon: "📆", title: "End With One Word or Verse to Carry Through the Day", text: "The devotional time does not end when you close your Bible or put down your pen. The ancient practice of keeping a word — a single phrase, verse, or image from the morning's reading — throughout the day is a form of contemplative extension. This is what the monks called rumination: chewing the word slowly throughout the hours, returning to it when the mind is idle, letting it speak into each new situation the day brings. It might be written on your wrist, set as a phone reminder, or simply held consciously in mind. The goal is to make the devotional time not a separate compartment of the day but the keynote that sounds through all of it. One word, carried faithfully, can reorient an entire day." },
];

const voices = [
  { id: "dw", name: "Dallas Willard", role: "Author, Spirit of the Disciplines; Philosopher-Theologian", quote: "The spiritual disciplines are not a way of earning God's love or meriting his favor. They are simply the means by which we place ourselves before God so that he can transform us. A person who does not engage in the spiritual disciplines is like an athlete who expects to perform at championship level without training. The devotional life is not the performance — it is the training that makes all of life a participation in God.", bio: "Willard's Spirit of the Disciplines is the most theologically rigorous defense of the spiritual disciplines available in contemporary evangelical writing. He argues that the disciplines — including daily Scripture reading and prayer — are not optional add-ons for the spiritually advanced, but the ordinary means by which the human will is renovated. His framework for understanding the body as the locus of spiritual formation makes the daily practice of devotion intelligible rather than merely obligatory." },
  { id: "ep", name: "Eugene Peterson", role: "Author, A Long Obedience in the Same Direction; Pastor-Translator", quote: "Spiritual formation is not a program you attend but a life you live — a long obedience in the same direction. The daily returning to God in Scripture and prayer is not a technique for achieving spiritual outcomes. It is simply the shape of a life oriented toward God. The psalms are not a feelings diary. They are the curriculum God gave us for the daily formation of the soul — every emotion, every circumstance, every form of prayer, all present, all honest, all addressed to God.", bio: "Peterson's work on the Psalms — in Praying with the Psalms, Answering God, and his translation The Message — is the most accessible introduction to praying the Psalms as a daily discipline. His concept of 'a long obedience in the same direction' captures precisely what daily devotions are: not a dramatic spiritual experience, but a steady, undramatic faithfulness that, over years and decades, shapes a life into the image of Christ." },
  { id: "aac", name: "Adele Ahlberg Calhoun", role: "Author, Spiritual Disciplines Handbook; Spiritual Director", quote: "The spiritual disciplines are not about becoming more disciplined people. They are about creating space in which God can work. When we practice daily devotions — reading, praying, sitting in silence — we are not generating spiritual experience through effort. We are clearing the ground so that the One who is always already present can be noticed. Much of what we call spiritual dryness is simply the unexamined life, the soul too busy to attend to what is already there.", bio: "Calhoun's Spiritual Disciplines Handbook is the most comprehensive practical guide to the full range of spiritual practices, including the many forms of daily devotional life. Her approach is pastoral rather than prescriptive: she describes each practice, explains its purpose, offers entry points for beginners, and trusts the reader to find the forms that fit their soul's particular shape. For anyone wanting to develop or deepen a daily devotional practice, her handbook is the most useful single resource available." },
];

const scriptures = [
  { verse: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed." },
  { verse: "Psalm 5:3", text: "In the morning, Lord, you hear my voice; in the morning I lay my requests before you and wait expectantly." },
  { verse: "Psalm 1:2", text: "But whose delight is in the law of the Lord, and who meditates on his law day and night." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Matthew 6:6", text: "But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you." },
  { verse: "Isaiah 50:4-5", text: "The Sovereign Lord has given me a well-instructed tongue, to know the word that sustains the weary. He wakens me morning by morning, wakens my ear to listen like one being instructed. The Sovereign Lord has opened my ears; I have not been rebellious, I have not turned away." },
];

type DMEntry = { id: string; date: string; reading: string; prayer: string; word: string };

export default function DailyDevotionalPage() {
  const [tab, setTab] = useState("theology");
  const [dmJournal, setDmJournal] = useState<DMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_devotional_entries") ?? "[]"); } catch { return []; }
  });
  const [jReading, setJReading] = useState("");
  const [jPrayer, setJPrayer] = useState("");
  const [jWord, setJWord] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_devotional_entries", JSON.stringify(dmJournal)); } catch {}
  }, [dmJournal]);

  function saveEntry() {
    if (!jReading.trim() && !jPrayer.trim()) return;
    setDmJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), reading: jReading, prayer: jPrayer, word: jWord }, ...prev]);
    setJReading(""); setJPrayer(""); setJWord("");
  }
  function deleteEntry(id: string) { setDmJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "structure", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Spiritual Disciplines</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Daily Devotions</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            The practice of meeting God daily in Scripture and prayer — why it matters, how to structure it, and what a lifetime of daily return does to a soul.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? AMBER : CARD, color: tab === t ? "#07070F" : TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: AMBER, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "structure" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {structure.map((p, i) => (
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
                  <div style={{ color: AMBER, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${AMBER}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: AMBER, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Devotional Journal</h3>
                <textarea placeholder="What did I read or notice in Scripture today?" value={jReading} onChange={e => setJReading(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What am I bringing to God in prayer?" value={jPrayer} onChange={e => setJPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="One word or truth to carry with me today" value={jWord} onChange={e => setJWord(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: AMBER, color: "#07070F", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {dmJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : dmJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.reading && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Scripture:</strong> {e.reading}</p>}
                  {e.prayer && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Prayer:</strong> {e.prayer}</p>}
                  {e.word && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Word for today:</strong> {e.word}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "h5zRDtPzFOQ", title: "How to Have a Daily Quiet Time With God", channel: "Desiring God", description: "A practical and theologically grounded guide to establishing a daily quiet time — what to read, how to pray, and why the daily rhythm of returning to God is the foundation of everything else in the Christian life." },
                { videoId: "r6kM_G2MZFQ", title: "The Spiritual Disciplines — Dallas Willard", channel: "Dallas Willard Ministries", description: "Willard on the purpose of the spiritual disciplines — why they are not about earning God's favor but about placing yourself before God so that he can transform you. Essential groundwork for understanding what daily devotions are actually for." },
                { videoId: "wq_q4tODDg0", title: "Lectio Divina: Sacred Reading of Scripture", channel: "The Bible Project", description: "An introduction to the ancient practice of lectio divina — reading Scripture slowly and prayerfully for formation rather than information. A different approach to the devotional reading of Scripture than most modern Christians have been taught." },
                { videoId: "HSlAaLY0bEg", title: "Why Your Quiet Time Feels Dry — And What to Do", channel: "Francis Chan", description: "Chan addresses the common experience of devotional dryness — why the quiet time can feel routine and empty, what is actually happening spiritually in those seasons, and how to persevere through them rather than abandon the practice." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: AMBER, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
