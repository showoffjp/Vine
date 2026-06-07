"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Developing Brain and Pornography",
    verse: "Proverbs 4:23",
    text: "\"Keep your heart with all vigilance, for from it flow the springs of life.\" The adolescent brain — still forming its prefrontal cortex, highly dopamine-responsive, acutely sensitive to social reward and novelty — is particularly vulnerable to pornography's effects. What adult men describe as compulsive behavior, teenagers experience at a stage of development when the patterns are most deeply embedded. Protecting the young heart is not overprotective parenting — it is a spiritual and neurological necessity."
  },
  {
    title: "The Parent's Response Determines Everything",
    verse: "Galatians 6:1",
    text: "\"Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted.\" The parent who responds to a teenager's pornography use with explosive shame or cold withdrawal has lost the ability to be part of recovery. The spirit of gentleness Galatians calls for is not the minimization of the behavior — it is the choice to keep the relationship intact in order to maintain influence."
  },
  {
    title: "Sexuality Is God's Good Gift — Distorted",
    verse: "Genesis 1:31",
    text: "\"And God saw everything that he had made, and behold, it was very good.\" Human sexuality is a gift — created good, designed for covenant relationship, and distorted by the fall. Pornography is not the invention of sexuality; it is the corruption of something God made beautiful. A teenager who encounters pornography has not encountered the real thing — they have encountered a counterfeit. This distinction matters for how parents teach about sexuality."
  },
  {
    title: "Shame Closes the Door — Honesty Opens It",
    verse: "John 3:21",
    text: "\"But whoever does what is true comes to the light, so that it may be clearly seen that his works have been carried out in God.\" The teenager who feels too ashamed to tell their parent about pornography exposure will not get help. The home where sexuality can be discussed honestly — where shame is not weaponized, where questions are welcome — is the home where a teenager can come to the light. You are building that home before the crisis, not during it."
  },
  {
    title: "Grace for the Teen and the Parent",
    verse: "Romans 8:1",
    text: "\"There is therefore now no condemnation for those who are in Christ Jesus.\" The gospel is for teenagers caught in pornography use and for parents caught in the shame of having a teenager caught in pornography use. Neither is condemned. Both need grace. Both are works in progress. The family that can receive grace together can also seek healing together."
  }
];

const voices = [
  {
    id: "v1", name: "Jay Stringer", role: "Therapist, Researcher on Adolescent Pornography Use",
    quote: "Teenagers who use pornography are not primarily moral failures. They are curious, isolated, or wounded young people who have found an answer to something — a question worth understanding.",
    bio: "Jay Stringer's research on pornography use among adolescents and adults examines the patterns and underlying needs that drive pornography consumption. His work on what the specific content of unwanted sexual behavior reveals about underlying emotional needs applies directly to teenagers."
  },
  {
    id: "v2", name: "Jonathan McKee", role: "Author, 'More Than Just the Talk'; Youth Culture Expert",
    quote: "The average age of first pornography exposure is now 8-11 years old. Parents who wait until 'the talk' have already missed the conversation by years.",
    bio: "Jonathan McKee works with parents and youth leaders on navigating the realities of digital youth culture, including pornography exposure. His practical and research-grounded approach to parenting conversations about sexuality is essential for parents of adolescents."
  },
  {
    id: "v3", name: "Sheila Wray Gregoire", role: "Author, 'The Great Sex Rescue'",
    quote: "We cannot shame teenagers into sexual purity. We can give them a vision of sexuality so beautiful and true that counterfeits lose their appeal.",
    bio: "Sheila Wray Gregoire's research on Christian sexual messaging shows that shame-based approaches to adolescent sexuality produce worse outcomes than approaches grounded in positive vision and honest conversation. Her work is essential for parents trying to approach this topic well."
  },
  {
    id: "v4", name: "Dan Allender", role: "Therapist, Author",
    quote: "When a parent responds to a teenager's sexual struggle with rage or withdrawal, they close the door. When they respond with sorrow and curiosity, they keep it open. The door you keep open is the one they can walk through.",
    bio: "Dan Allender's therapeutic work with adolescents and families addresses how parental response to sexual behavior shapes the adolescent's capacity for future help-seeking. His approach — sorrow and curiosity rather than rage and shame — is the model for keeping the relationship intact."
  }
];

const practices = [
  {
    icon: "🗣️",
    title: "The Conversation Before the Discovery",
    text: "The most important conversation about pornography is the one that happens before the teenager encounters it. Start early, start positively: what sexuality is, why pornography is a distortion, what to do if they encounter it. Use resources like Jonathan McKee's books and Axis.org for age-appropriate language."
  },
  {
    icon: "🔒",
    title: "Technology Accountability Tools",
    text: "Covenant Eyes (covenanteyes.com), Circle (meetcircle.com), and router-level filtering provide accountability and reduced access. These are not conversations to be avoided by installing software — they work best alongside ongoing conversation. Explain what you are doing and why, collaboratively if possible."
  },
  {
    icon: "🧠",
    title: "A Therapist for Your Teenager",
    text: "If pornography use is frequent, compulsive, or has been happening for a long time, a therapist who specializes in adolescent sexual development and pornography is important. This is not a sign of failure — it is appropriate treatment for a developing compulsion."
  },
  {
    icon: "💬",
    title: "Your Response When You Discover It",
    text: "When you discover pornography use: take a breath before responding. Do not respond in the first five minutes. When you are calm, have a private, one-on-one conversation. Express sorrow, not rage. Ask questions — how long, how often, what was happening when it started. The goal of this conversation is to keep the door open."
  },
  {
    icon: "📚",
    title: "Educate Yourself First",
    text: "Read Jonathan McKee's 'More Than Just the Talk,' Gail Dines's 'Pornland,' or Jay Stringer's 'Unwanted' before you have the conversation with your teenager. Understanding what you are dealing with makes you a better conversation partner. Informed parents have more effective conversations."
  },
  {
    icon: "✝️",
    title: "Build the Positive Vision",
    text: "Teenagers leave counterfeits when they have the real thing as a reference point. Teach a positive theology of sexuality: the beauty of covenant, the gift of the body, the purpose of desire. Use your marriage as a model — let your teenagers see affection, respect, and covenant in practice, not just prohibition."
  }
];

const scriptures = [
  { verse: "Proverbs 4:23", text: "Keep your heart with all vigilance, for from it flow the springs of life." },
  { verse: "Galatians 6:1", text: "Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted." },
  { verse: "1 Corinthians 6:18-20", text: "Flee from sexual immorality. Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body. Or do you not know that your body is a temple of the Holy Spirit within you?" },
  { verse: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { verse: "Philippians 4:8", text: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things." },
  { verse: "Psalm 119:9", text: "How can a young man keep his way pure? By guarding it according to your word." }
];

type PtEntry = { id: string; date: string; conversation: string; boundary: string; prayer: string };

export default function PornographyAddictionTeenagerParentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PtEntry[]>([]);
  const [conversation, setConversation] = useState("");
  const [boundary, setBoundary] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_pornteenparentj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!conversation.trim()) return;
    const entry: PtEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), conversation, boundary, prayer };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_pornteenparentj_entries", JSON.stringify(updated));
    setConversation(""); setBoundary(""); setPrayer("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_pornteenparentj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>👨‍👧</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>Teenage Pornography &amp; Parenting</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For parents navigating a teenager&apos;s pornography use — keeping the door open, building accountability, and offering grace that is stronger than shame.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; Axis: axis.org &bull; Covenant Eyes: covenanteyes.com &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
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
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
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
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Parent Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What conversation did I have or want to have with my teenager?</label>
                  <textarea value={conversation} onChange={e => setConversation(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What accountability or boundary did I put in place?</label>
                  <textarea value={boundary} onChange={e => setBoundary(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>My prayer for my teenager today:</label>
                  <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
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
                {e.conversation && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Conversation:</strong> {e.conversation}</p>}
                {e.boundary && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Accountability:</strong> {e.boundary}</p>}
                {e.prayer && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>How Pornography Affects the Teenage Brain</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>The neuroscience of adolescent pornography exposure and why the developing brain is particularly vulnerable</p>
              <VideoEmbed videoId="ZR-J8DQGFOI" title="How Pornography Affects the Teenage Brain" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>More Than Just the Talk</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Jonathan McKee on having ongoing sexuality conversations with teenagers — not just one awkward talk</p>
              <VideoEmbed videoId="kfcVPh2VDhQ" title="More Than Just the Talk" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Spirit of Gentleness</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Dan Allender on the parental response that keeps the door open — and the one that closes it</p>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="The Spirit of Gentleness" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Building a Positive Vision of Sexuality</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>How a positive theology of sexuality gives teenagers a reference point that makes counterfeits less appealing</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Building a Positive Vision of Sexuality" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
