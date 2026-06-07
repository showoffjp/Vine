"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "God Who Counts the Children",
    verse: "Jeremiah 1:5",
    text: "'Before I formed you in the womb I knew you.' This verse, often used in pro-life contexts, carries a profound pastoral weight for recurrent pregnancy loss: each child who was lost was first known by God. Known before formation. The baby lost at seven weeks was a person God knew before you did. That knowledge does not diminish grief — it honors it.",
  },
  {
    title: "Rachel Weeping and the God Who Hears Her",
    verse: "Jeremiah 31:15–17",
    text: "'A voice is heard in Ramah, mourning and great weeping, Rachel weeping for her children and refusing to be comforted, because they are no more.' God does not silence Rachel's weeping. He speaks into it: 'Restrain your voice from weeping... There is hope for your descendants.' Grief is not refused here — it is heard and given a future.",
  },
  {
    title: "The Unanswered Why",
    verse: "Romans 11:33",
    text: "'Oh, the depth of the riches of the wisdom and knowledge of God! How unsearchable his judgments, and his paths beyond tracing out!' Recurrent pregnancy loss confronts parents with the most painful form of unanswered question. The Bible does not promise an answer. It offers a God whose depth is beyond our tracing — and whose goodness is not negated by our confusion.",
  },
  {
    title: "Grief Without Explanation Is Still Received",
    verse: "Psalm 56:8",
    text: "'You have collected all my tears in a bottle. You have recorded each one in your book.' God does not require understanding before receiving grief. Every tear shed for each lost pregnancy is recorded. Not evaluated, not explained — recorded. This is the ministry of divine witness to human loss.",
  },
  {
    title: "The God of Second and Third and Fourth Beginnings",
    verse: "Isaiah 43:4",
    text: "'Since you are precious and honored in my sight, and because I love you...' God's love for the parents who have lost again and again does not diminish with each loss. You are precious to God not because you have a child in your arms but because God made you and loves you. That is not diminished by the empty arms.",
  },
];

const voices = [
  {
    id: 1,
    name: "Sherri Devashrayee Connell",
    role: "Author, When Love Meets Loss",
    quote: "Miscarriage is real grief for a real loss. The church must learn to say that without qualification.",
    bio: "Sherri Connell has walked through multiple pregnancy losses and writes from inside the experience. Her work challenges the church's sometimes minimizing response to miscarriage — the quick comfort, the platitudes — and calls for genuine witness to a genuine loss.",
  },
  {
    id: 2,
    name: "Megan Devine",
    role: "Author, It's OK That You're Not OK",
    quote: "Grief is not a problem to be solved. It is the natural response to having loved someone who is no longer here.",
    bio: "Megan Devine's grief framework, while not exclusively Christian, has been widely embraced by Christian communities because it refuses to rush grief toward resolution. Her insistence that grief is legitimate — not something to recover from but to integrate — speaks directly to couples navigating recurrent loss.",
  },
  {
    id: 3,
    name: "Jenny Albers",
    role: "Author, Courageous Grieving",
    quote: "The baby you lost was real. The grief you carry is real. And the God who saw that child before you did is real.",
    bio: "Jenny Albers writes specifically about pregnancy loss and infant loss from a Christian perspective. She helps couples hold the theological conviction that their child mattered — to them and to God — while sitting honestly in the grief that remains.",
  },
  {
    id: 4,
    name: "Russell Moore",
    role: "Author & Christian Public Intellectual",
    quote: "The gospel claims all of human life — including the lives that were only lived in the womb. We will see those children again.",
    bio: "Russell Moore has written and spoken about the theological significance of children lost in pregnancy. His conviction that the resurrection covers the children lost in miscarriage has been a source of significant comfort to many Christian families navigating this grief.",
  },
];

const practices = [
  {
    icon: "📿",
    title: "Name Your Child",
    text: "Many families find naming the child(ren) they lost to be a significant act of recognition — naming the personhood of the one they loved. You do not have to do this. But if it resonates, it is a legitimate pastoral practice. Some families hold small naming ceremonies with close friends.",
  },
  {
    icon: "📅",
    title: "Mark the Dates",
    text: "The date of a miscarriage or due date often carries significant emotional weight. Mark it — not morbidly, but with intention. Light a candle. Say a prayer. Go somewhere meaningful. Letting the dates pass without acknowledgment often compounds grief. Ritual makes loss concrete and witnessed.",
  },
  {
    icon: "🤝",
    title: "Seek Other Families Who Know",
    text: "Pregnancy loss is profoundly isolating because it is often invisible to the wider community. Connect with other families who have experienced loss — through your church, through community groups like Hannah's Hope, or through online communities. Being understood by peers who know this specific grief is healing.",
  },
  {
    icon: "🙏",
    title: "Pray Together as a Couple",
    text: "Recurrent pregnancy loss can silently separate couples who grieve differently. Find one regular moment — even brief — to pray together for the children you lost, for your marriage, and for whatever comes next. This shared grief offered to God is an act of marital faithfulness in the hardest season.",
  },
  {
    icon: "👩‍⚕️",
    title: "Pursue Medical Investigation",
    text: "After two or three losses, a reproductive endocrinologist can often identify underlying causes — immunological, genetic, hormonal, structural — that are treatable. This is not a failure of faith; it is faithful stewardship of the medical knowledge God has given. Seek answers.",
  },
  {
    icon: "📖",
    title: "Read the Psalms of Lament Slowly",
    text: "Psalms 22, 31, 42, 88, and 130 carry grief without resolving it prematurely. Read one per week for a season. Don't read for answers — read to find the words that name what you are carrying. The Psalms have always been the church's language for the place beyond words.",
  },
];

const scriptures = [
  { verse: "Jeremiah 1:5", text: "Before I formed you in the womb I knew you, before you were born I set you apart." },
  { verse: "Psalm 56:8", text: "You have collected all my tears in a bottle. You have recorded each one in your book." },
  { verse: "Jeremiah 31:15–17", text: "A voice is heard in Ramah, mourning and great weeping, Rachel weeping for her children and refusing to be comforted, because they are no more. This is what the Lord says: 'Restrain your voice from weeping and your eyes from tears, for your work will be rewarded,' declares the Lord." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 43:4", text: "Since you are precious and honored in my sight, and because I love you, I will give people in exchange for you, nations in exchange for your life." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

type RPLEntry = { id: string; date: string; name: string; carry: string; prayer: string };

export default function MiscarriageRecurrentPregnancyLossPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RPLEntry[]>([]);
  const [name, setName] = useState("");
  const [carry, setCarry] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_miscarriagerecurrentpregnancylossj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!name.trim() && !carry.trim() && !prayer.trim()) return;
    const entry: RPLEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      name: name.trim(),
      carry: carry.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_miscarriagerecurrentpregnancylossj_entries", JSON.stringify(updated));
    setName(""); setCarry(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_miscarriagerecurrentpregnancylossj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Recurrent Pregnancy Loss & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For families who have lost again and again — holding the grief of children known by God
            before you knew them, and finding the God who records every tear.
          </p>
        </div>

        <div style={{ background: "#0a1a0a", border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Support resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.hannah.org" style={{ color: GREEN }}>hannah.org</a> |{" "}
            <a href="https://www.missfoundation.org" style={{ color: GREEN }}>missfoundation.org</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Write the name(s) of the child or children you have lost, if you would like to:</label>
              <textarea value={name} onChange={(e) => setName(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What are you carrying today that you want God to hold?</label>
              <textarea value={carry} onChange={(e) => setCarry(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for today:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.name && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Named: </span>{e.name}</p>}
                    {e.carry && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Carrying: </span>{e.carry}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="oNpTha80yyE" title="Grieving the Children We Lost — Faith and Pregnancy Loss" />
            <VideoEmbed videoId="NnGBhG03g4M" title="God Who Knew Your Child Before You Did" />
            <VideoEmbed videoId="LQNbUqVwVlo" title="Recurrent Loss — Community, Medicine, and Hope" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Parents Who Have Lost" />
          </div>
        )}
      </div>
    </div>
  );
}
