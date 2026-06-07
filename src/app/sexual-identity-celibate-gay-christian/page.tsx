"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Made and Known",
    verse: "Psalm 139:13-14",
    text: "\"For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made.\" Same-sex attraction is not a curse, a punishment, or a sign of divine rejection. You were known before you were born. The God who formed you is not surprised by your sexuality and has not abandoned you because of it. Your identity begins in being made and known by God — not in sexuality or the absence of it."
  },
  {
    title: "The Gift of Celibacy — And the Weight of It",
    verse: "1 Corinthians 7:7",
    text: "\"I wish that all were as I myself am. But each has his own gift from God, one of one kind and one of another.\" Paul calls celibacy a gift — and it is. But 'gift' does not mean 'easy.' Not every gift is pleasant. Celibacy as a vocation is a genuine calling that the church has long honored — in monastics, in the celibate clergy, in those who are single not by choice. The celibate gay Christian who remains faithful is not spiritually inferior — they are practicing one of the most demanding forms of discipleship."
  },
  {
    title: "The Cost of Following Jesus",
    verse: "Luke 9:23",
    text: "\"If anyone would come after me, let him deny himself and take up his cross daily and follow me.\" Jesus made no promises that discipleship would not cost something. For many gay Christians who hold a traditional sexual ethic, the cost is real and often felt every day. This cost does not mean the path is wrong — it means it is Christian. The cross is not a metaphor for slight inconvenience. Christ does not ask for easy things."
  },
  {
    title: "Friendship, Community, and Not Being Alone",
    verse: "Genesis 2:18",
    text: "\"Then the Lord God said, 'It is not good that the man should be alone.'\" This statement precedes marriage in scripture and is broader than it. Human beings are built for deep companionship. The church that offers gay Christians only a theology of celibacy without the corresponding community, deep friendship, and genuine belonging has offered them a cross without a community to carry it with. This failure is the church's to repent of."
  },
  {
    title: "The Communion of the Saints Across Time",
    verse: "Hebrews 11:1",
    text: "\"Now faith is the assurance of things hoped for, the conviction of things not seen.\" The celibate gay Christian is not alone in the history of the church. They stand with a long tradition of those who gave up the goods of marriage and family for the sake of the kingdom — and found in that renunciation a different and profound fullness. This is not consolation. It is solidarity across time with a great cloud of witnesses."
  }
];

const voices = [
  {
    id: "v1", name: "Wesley Hill", role: "Professor of New Testament; Author, 'Washed and Waiting'",
    quote: "I am a gay Christian. I am also celibate. These are not contradictions. They are the shape my discipleship has taken, and I have found in it not emptiness but a strange and difficult grace.",
    bio: "Wesley Hill is one of the most important voices for gay Christians navigating celibacy within orthodox Christianity. His memoir 'Washed and Waiting' and his book 'Spiritual Friendship' offer both pastoral honesty about the cost of celibacy and a compelling vision of what deep Christian community can offer."
  },
  {
    id: "v2", name: "Eve Tushnet", role: "Author, 'Gay and Catholic'",
    quote: "Celibacy is not the absence of love. It is a particular form of love — ordered differently, not lesser. The church needs to stop treating celibate gay Christians as a problem to be managed and start treating them as people with a vocation.",
    bio: "Eve Tushnet, a gay Catholic convert, writes with wit and theological seriousness about celibacy as vocation. Her book 'Gay and Catholic' is a rigorous engagement with what the tradition offers gay Christians who hold traditional teaching — and where the church has failed them."
  },
  {
    id: "v3", name: "Sam Allberry", role: "Speaker, Author of 'Is God Anti-Gay?'",
    quote: "Every Christian is called to surrender something. The gay Christian's surrender is more visible, perhaps, but it is not more required. Jesus asks everything from all of us.",
    bio: "Sam Allberry, a celibate gay Anglican minister, has written and spoken extensively about sexuality, celibacy, and the Christian life. His pastoral warmth and theological clarity have helped many gay Christians — and the churches that love them — navigate these questions honestly."
  },
  {
    id: "v4", name: "Spiritual Friendship Network", role: "Community of Gay Christians in Celibate Vocations",
    quote: "Deep friendship is not a consolation prize for those who can't get married. It is one of the great forms of human love — and the church has tragically undervalued it.",
    bio: "The Spiritual Friendship project (spiritualfriendship.org), centered around thinkers including Wesley Hill, Matt Jones, and others, explores how deep, committed Christian friendship can provide genuine community for celibate gay Christians — drawing on pre-modern traditions of friendship as a covenantal bond."
  }
];

const practices = [
  {
    icon: "🏛️",
    title: "Find Your People First",
    text: "The first and most urgent practical step is finding a community that can hold your full identity — gay, Christian, and navigating celibacy — with honesty. Side B communities (gay Christians holding traditional sexual ethics), online communities like YOB (yourenotalone.com), and networks connected to the Spiritual Friendship project can be life-giving."
  },
  {
    icon: "📚",
    title: "Read Those Who Have Gone Before",
    text: "Wesley Hill, Eve Tushnet, Sam Allberry, Ron Belgau, Melinda Selmys — there is a growing body of thoughtful writing by gay Christians navigating celibacy within orthodox faith. You are not the first. Reading those who have gone before you is one of the most sustaining things you can do."
  },
  {
    icon: "🤝",
    title: "Pursue Intentional Friendship",
    text: "The Spiritual Friendship tradition argues that deep, committed friendship is the vocation that corresponds to celibacy. Pursue it actively — not as a substitute for what you can't have, but as the form of love God is calling you toward. Name what you are doing. Invite depth. Don't settle for surface community."
  },
  {
    icon: "🧠",
    title: "Therapy Without Harmful Practices",
    text: "Find a therapist who supports gay Christians navigating celibacy — not conversion therapy (which is harmful and ineffective) but genuine pastoral and psychological support for the grief, loneliness, and complexity of this vocation. The Association of Certified Biblical Counselors and similar networks can help find appropriate support."
  },
  {
    icon: "🕯️",
    title: "A Robust Spiritual Practice",
    text: "Celibacy as a vocation is sustained by contemplative depth — not just discipline. Regular prayer, scripture, silence, the sacraments, retreats, and the daily office have sustained celibate Christians for two millennia. These are not optional extras for the celibate vocation; they are its infrastructure."
  },
  {
    icon: "📿",
    title: "Tell Your Pastor",
    text: "If your church community does not know that it has gay celibate members, it cannot support them. Telling your pastor — or a trusted elder — is a risk. But it is also the beginning of being genuinely known in the community you are trying to belong to. You should not have to carry this alone."
  }
];

const scriptures = [
  { verse: "Psalm 139:13-14", text: "For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made." },
  { verse: "1 Corinthians 7:7", text: "I wish that all were as I myself am. But each has his own gift from God, one of one kind and one of another." },
  { verse: "Matthew 19:12", text: "For there are eunuchs who have been so from birth, and there are eunuchs who have been made eunuchs by men, and there are eunuchs who have made themselves eunuchs for the sake of the kingdom of heaven. Let the one who is able to receive this receive it." },
  { verse: "Genesis 2:18", text: "Then the Lord God said, 'It is not good that the man should be alone; I will make him a helper fit for him.'" },
  { verse: "Luke 9:23", text: "And he said to all, 'If anyone would come after me, let him deny himself and take up his cross daily and follow me.'" },
  { verse: "Romans 8:38-39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." }
];

type SiEntry = { id: string; date: string; longing: string; sustain: string; gratitude: string };

export default function SexualIdentityCelibateGayChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SiEntry[]>([]);
  const [longing, setLonging] = useState("");
  const [sustain, setSustain] = useState("");
  const [gratitude, setGratitude] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_celibategaychristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!longing.trim()) return;
    const entry: SiEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), longing, sustain, gratitude };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_celibategaychristj_entries", JSON.stringify(updated));
    setLonging(""); setSustain(""); setGratitude("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_celibategaychristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>✝️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Gay, Christian &amp; Celibate</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those who hold orthodox Christian teaching on sexuality and experience same-sex attraction — navigating celibacy as a vocation, loneliness as a reality, and faith as the ground you refuse to leave.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; YOB Community: yourenotalone.com &bull; Spiritual Friendship: spiritualfriendship.org &bull; Crisis Text: 741741
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
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Celibate Vocation Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I longing for right now?</label>
                  <textarea value={longing} onChange={e => setLonging(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What is sustaining me this week?</label>
                  <textarea value={sustain} onChange={e => setSustain(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>Where have I glimpsed grace in this vocation?</label>
                  <textarea value={gratitude} onChange={e => setGratitude(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
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
                {e.longing && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Longing:</strong> {e.longing}</p>}
                {e.sustain && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Sustaining me:</strong> {e.sustain}</p>}
                {e.gratitude && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Grace glimpsed:</strong> {e.gratitude}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Wesley Hill: Washed and Waiting</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Wesley Hill on what celibacy as a gay Christian has cost and what it has given him</p>
              <VideoEmbed videoId="LQNbUqVwVlo" title="Wesley Hill: Washed and Waiting" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Sam Allberry: Is God Anti-Gay?</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Sam Allberry on sexuality, celibacy, and what the gospel offers gay Christians</p>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Sam Allberry: Is God Anti-Gay?" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Spiritual Friendship and Gay Christians</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Deep friendship as the vocation that corresponds to celibacy in the Christian tradition</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Spiritual Friendship and Gay Christians" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Cost of Discipleship</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>What the cross demands of every Christian — and the particular cost for gay Christians who remain faithful</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="The Cost of Discipleship" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
