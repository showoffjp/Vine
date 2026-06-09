"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Disability Is Not a Deficit of Worth",
    verse: "Psalm 139:13-14",
    text: "\"For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made.\" The body that cannot walk, see, hear, or move in the ways others expect is still fearfully and wonderfully made. Disability theology begins here: not with what the body cannot do but with what the body is — made, known, and loved by God. The person with a disability is not a tragedy wearing a human face."
  },
  {
    title: "The Man Born Blind — Neither He Nor His Parents",
    verse: "John 9:3",
    text: "\"Jesus answered, 'It was not that this man sinned, or his parents, but that the works of God might be displayed in him.'\" The disciples assumed disability was punishment. Jesus rejected this entirely. Disability is not God's punishment for sin — not the person's sin, not their parents' sin. Any church or individual who implies otherwise has misread scripture and wounded someone already carrying a great weight."
  },
  {
    title: "The Body Christ Chose to Keep",
    verse: "John 20:27",
    text: "\"Then he said to Thomas, 'Put your finger here, and see my hands; and put out your hand, and place it in my side.'\" The risen Christ still had wounds. The resurrection did not erase the marks of suffering from his body — it transformed them. The theology of the wounded risen body is the most hopeful thing scripture offers those who live in disability: the body that has suffered is the body that is raised."
  },
  {
    title: "Strength Made Perfect in Limitation",
    verse: "2 Corinthians 12:9-10",
    text: "\"My grace is sufficient for you, for my power is made perfect in weakness.\" Paul's thorn — which he prayed repeatedly to have removed — was not removed. The grace he received was not healing but sustaining presence within ongoing limitation. For many people with disabilities, healing may not come in this life. The grace available is the stronger thing: the power of Christ made visible in genuine human weakness."
  },
  {
    title: "The Accessible Church as Parable",
    verse: "Luke 14:21-23",
    text: "\"Go out quickly to the streets and lanes of the city, and bring in the poor and crippled and blind and lame... Go out to the highways and hedges and compel people to come in, that my house may be filled.\" Jesus' parable of the great banquet specifically names those with disabilities as the intended guests. The church that is inaccessible to wheelchair users, the deaf, the blind, and the physically disabled has failed to follow the explicit instruction of the parable."
  }
];

const voices = [
  {
    id: "v1", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends; Quadriplegic",
    quote: "My wheelchair has been a prison and a pulpit. I did not choose it. I have not always accepted it. But I have found that God is most glorified in me when I am most satisfied in him — even in this.",
    bio: "Joni Tada has lived with quadriplegia since a diving accident at 17. She founded Joni and Friends, the world's largest disability ministry, and has written more than 40 books on disability, suffering, and faith. Her theology of disability is the most tested and most useful framework available in Christian thought."
  },
  {
    id: "v2", name: "Amy Julia Becker", role: "Author, 'A Good and Perfect Gift'",
    quote: "My daughter Penny has Down syndrome. She has taught me more about the image of God than any theology class. The presence of disability is not the absence of dignity.",
    bio: "Amy Julia Becker writes about parenting a child with Down syndrome and what that experience has revealed about worth, limitation, and the image of God. Her work challenges the assumption that disability is something to be fixed and offers instead a vision of human dignity that does not depend on capability."
  },
  {
    id: "v3", name: "John Swinton", role: "Professor of Practical Theology; Disability Theology Scholar",
    quote: "The church that welcomes people with disabilities is not being charitable. It is being complete. Without the full range of human limitation present in the body, the church has not yet become what Christ intended.",
    bio: "Dr. John Swinton is one of the leading theologians of disability, mental illness, and dementia. His work on 'reimagining disability' challenges the church to see disability not as a problem but as a gift to the community that reshapes its understanding of what it means to be human."
  },
  {
    id: "v4", name: "Stephanie Hubach", role: "Author, 'Same Lake, Different Boat'; Disability Ministry Leader",
    quote: "Disability is a normal part of human experience in an abnormal world. Every person will experience disability — temporarily or permanently — in the course of a lifetime. The church should be the best-equipped community on earth to respond.",
    bio: "Stephanie Hubach's framework for disability ministry — rooted in a theology of the fall, redemption, and restoration — provides churches with the conceptual tools to understand and welcome those with disabilities without either overcoming-story triumphalism or helpless pity."
  }
];

const practices = [
  {
    icon: "♿",
    title: "Physical Accessibility as Discipleship",
    text: "If your church is not physically accessible to people who use wheelchairs, the deaf, the blind, or those with chronic illness, that is a discipleship failure — not an architectural problem. Advocate for accessibility. Know what accommodations your church offers and what it does not. Help bridge the gap."
  },
  {
    icon: "🧠",
    title: "Disability Theology Reading",
    text: "Joni Tada's 'A Place of Healing,' John Swinton's 'Becoming Friends of Time,' Stephanie Hubach's 'Same Lake, Different Boat,' Amy Julia Becker's work — there is a rich body of disability theology that the church has largely ignored. Read it. It will change how you see yourself and your community."
  },
  {
    icon: "🫂",
    title: "Tell Your Community What You Need",
    text: "Many people with disabilities do not tell their church community what they need because they do not want to be a burden. This protects no one — it deprives the community of the opportunity to serve and deprives you of the support you need. Be specific: what does Sunday morning access require? What does involvement need?"
  },
  {
    icon: "🩺",
    title: "Advocacy for Medical Care",
    text: "Navigating disability often requires advocacy — for appropriate diagnosis, reasonable accommodation, and access to services. Know your rights under the ADA. Connect with disability advocacy organizations relevant to your specific condition. You do not have to navigate the medical system alone."
  },
  {
    icon: "✝️",
    title: "Spiritual Practice Adapted to Your Body",
    text: "Many traditional spiritual practices assume a body with full mobility, vision, and hearing. Adapt: audio Bible, closed-captioned worship, seated prayer, embodied practices that work for your specific body. Spiritual direction with someone trained in disability spirituality can help you discover what practices work."
  },
  {
    icon: "🌐",
    title: "Online Community",
    text: "Joni and Friends (joniandfriends.org), the Christian Council on Persons with Disabilities (ccpd.org), and online communities for specific conditions provide peer connection for Christians with disabilities who may be isolated from in-person community. These are not substitutes for embodied community but genuine supplements."
  }
];

const scriptures = [
  { verse: "Psalm 139:13-14", text: "For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well." },
  { verse: "John 9:3", text: "Jesus answered, 'It was not that this man sinned, or his parents, but that the works of God might be displayed in him.'" },
  { verse: "2 Corinthians 12:9-10", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me. For when I am weak, then I am strong." },
  { verse: "Luke 14:21", text: "So the servant came and reported these things to his master. Then the master of the house became angry and said to his servant, 'Go out quickly to the streets and lanes of the city, and bring in the poor and crippled and blind and lame.'" },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a faintly burning wick he will not quench; he will faithfully bring forth justice." },
  { verse: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away." }
];

type PdEntry = { id: string; date: string; hard: string; gift: string; need: string };

export default function PhysicalDisabilityFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PdEntry[]>([]);
  const [hard, setHard] = useState("");
  const [gift, setGift] = useState("");
  const [need, setNeed] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_physicaldisabilityfaithj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!hard.trim()) return;
    const entry: PdEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), hard, gift, need };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_physicaldisabilityfaithj_entries", JSON.stringify(updated));
    setHard(""); setGift(""); setNeed("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_physicaldisabilityfaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>♿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Physical Disability &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those navigating physical disability — finding a theology of the body that holds both limitation and dignity, a church that welcomes rather than pities, and a God who is most glorified in genuine weakness.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; Joni and Friends: joniandfriends.org &bull; CCPD: ccpd.org &bull; ADA Information: ada.gov &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Reflection Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What has been hardest about disability this week?</label>
                  <textarea value={hard} onChange={e => setHard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>Where have I glimpsed dignity or God&apos;s gift in my limitation?</label>
                  <textarea value={gift} onChange={e => setGift(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What do I need from my community that I haven&apos;t asked for?</label>
                  <textarea value={need} onChange={e => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.hard && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Hard:</strong> {e.hard}</p>}
                {e.gift && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Gift/Dignity:</strong> {e.gift}</p>}
                {e.need && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Need:</strong> {e.need}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Joni Tada: A Place of Healing</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Joni Tada on decades of quadriplegia and the God who has been present in all of it</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="Joni Tada: A Place of Healing" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Disability Theology: John Swinton</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>John Swinton on reimagining disability and what the church loses when it excludes those with disabilities</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Disability Theology: John Swinton" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Power in Weakness: 2 Corinthians 12</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Paul&apos;s thorn and the grace that sustains rather than removes — for those whose limitation does not go away</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Power in Weakness: 2 Corinthians 12" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>A Good and Perfect Gift: Amy Julia Becker</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Amy Julia Becker on what her daughter Penny&apos;s Down syndrome has taught her about the image of God</p>
              <VideoEmbed videoId="y-DQH-M1HuM" title="A Good and Perfect Gift: Amy Julia Becker" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
