"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Ache Is Legitimate",
    verse: "Psalm 113:9",
    text: "\"He gives the barren woman a home, making her the joyful mother of children.\" Scripture takes the ache of childlessness seriously — it is not spiritualized away or minimized. Hannah wept. Rachel demanded. Elizabeth's barrenness was a shame she carried for decades. The God of scripture sees, names, and responds to the grief of those without children. The ache you carry is not spiritually misguided."
  },
  {
    title: "Identity Beyond Parenthood",
    verse: "Isaiah 56:3-5",
    text: "\"Let not the eunuch say, 'Behold, I am a dry tree.' For thus says the Lord: To the eunuchs who keep my Sabbaths, who choose the things that please me and hold fast my covenant, I will give in my house and within my walls a monument and a name better than sons and daughters; I will give them an everlasting name that shall not be cut off.\" Isaiah explicitly addresses those who will not have biological children — and the promise is not consolation-prize children but something genuinely better: an everlasting name, a place in the house of God. This is the church's calling."
  },
  {
    title: "The Fruitfulness of the Childless",
    verse: "Isaiah 54:1",
    text: "\"Sing, O barren one, who did not bear; break forth into singing and cry aloud, you who have not been in labor! For the children of the desolate one will be more than the children of her who is married, says the Lord.\" Paul quotes this passage in Galatians to describe the children of the promise — the spiritual fruitfulness of those who bear children of faith rather than flesh. The childless Christian can be extraordinarily fruitful in the lives of others."
  },
  {
    title: "The Grief Is Real and Does Not End Quickly",
    verse: "Psalm 6:6-7",
    text: "\"I am weary with my moaning; every night I flood my bed with tears; I drench my couch with my weeping. My eye wastes away because of grief.\" Childlessness is a grief that resurfaces across a lifetime — at baby showers, at church Mother's Day services, at family gatherings. The Psalms give permission to grieve this way: without resolution, without a tidy arc, with tears that return long after others think you should be over it."
  },
  {
    title: "The Resurrection Means Something Here",
    verse: "Romans 8:18",
    text: "\"For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us.\" This is not a minimization of childlessness pain — it is a promise about scale. The Christian hope is for a creation renewed, where all the losses of this age are swallowed by glory. What that means for the childless who have ached across decades is beyond full description. But it is a real promise, not a platitude."
  }
];

const voices = [
  {
    id: "v1", name: "Sherri Connell", role: "Author, 'The Childless Woman's Ministry'",
    quote: "There is no safe place in the church for the childless woman who has not chosen her childlessness. Every Mother's Day is a wound. Every baby shower is a reminder. The church must do better.",
    bio: "Sherri Connell writes and speaks about involuntary childlessness from within the church with pastoral honesty. Her work names the specific ways that church culture can wound those who ache for children they do not have — and calls for a more attentive, less assumption-laden community."
  },
  {
    id: "v2", name: "Lore Ferguson Wilbert", role: "Author, 'Handle with Care'",
    quote: "I am childless not by choice. That sentence contains more grief than I can express. It also contains a calling — to care for others' children, to build into other lives, to be present in ways that parents cannot.",
    bio: "Lore Ferguson Wilbert writes about singleness, childlessness, and finding purpose in the body of Christ when your life looks nothing like the assumed Christian script. Her work is honest about grief while refusing to let grief be the last word."
  },
  {
    id: "v3", name: "Haley Stewart", role: "Author, Speaker; Navigated Infertility",
    quote: "The ache of childlessness is not a sign of disordered desire. The desire for children is good. The ache is the right response to a real loss. Mourn it honestly.",
    bio: "Haley Stewart writes from her experience navigating infertility and ultimate childlessness about the spiritual and emotional complexity of a life without children. Her work integrates Catholic spirituality and honest pastoral engagement with this particular grief."
  },
  {
    id: "v4", name: "Sam Allberry", role: "Author, '7 Myths About Singleness'",
    quote: "The church has often made the nuclear family into an idol. In doing so, it has wounded the unmarried, the divorced, the childless, and the single. Jesus himself was not married and had no biological children — and he is the fullest human being who ever lived.",
    bio: "Sam Allberry's critique of family idolatry in the church is directly applicable to the childlessness context. His argument that Jesus — unmarried, childless — is the paradigm of full humanity challenges a church culture that has often treated parenthood as a prerequisite for spiritual maturity."
  }
];

const practices = [
  {
    icon: "🕯️",
    title: "Name the Grief Specifically",
    text: "The grief of childlessness is specific — different from other losses. Name it: the baby who was never conceived, the pregnancy lost, the adoption that fell through, the decade of waiting. The grief cannot be processed in its general form — it must be named in its particulars. Find a therapist or spiritual director who will not rush you past this."
  },
  {
    icon: "🏛️",
    title: "Navigate the Church Calendar Intentionally",
    text: "Mother's Day, baby dedications, church nursery announcements — these are recurring wounds for the involuntarily childless. Develop a specific plan for each: who you will sit with, whether you will attend, what self-care you will practice. Do not manage this alone."
  },
  {
    icon: "🌱",
    title: "Invest in Other People's Children",
    text: "Many involuntarily childless people find genuine joy and meaning in intentional investment in other people's children: as mentors, godparents, foster parents, Sunday school teachers, or simply as the adults who show up consistently for children who need additional adults who see them. This is not a substitute for grief — it is alongside it."
  },
  {
    icon: "🫂",
    title: "Find Your People",
    text: "The World Childless Week community and online forums for involuntary childlessness provide peer connection with people who understand this specific grief in ways that parents cannot. Not Instead of church — alongside it."
  },
  {
    icon: "📿",
    title: "Honest Prayer, Including Anger",
    text: "Hannah's prayer in 1 Samuel 1 was so intense that Eli thought she was drunk. The Psalms are full of women and men demanding that God act. You are permitted to be angry at God about this. You are permitted to pray with full honesty about the ache. God does not require sanitized grief."
  },
  {
    icon: "✝️",
    title: "Consider Adoption or Foster Care",
    text: "Adoption and foster care are not consolation prizes for those who cannot have biological children — they are legitimate and beautiful vocations in their own right. If you are open to it, the foster and adoption community is one of the most concrete ways the church can embody the gospel's care for children without families."
  }
];

const scriptures = [
  { verse: "Psalm 113:9", text: "He gives the barren woman a home, making her the joyful mother of children. Praise the Lord!" },
  { verse: "Isaiah 56:4-5", text: "For thus says the Lord: To the eunuchs who keep my Sabbaths, who choose the things that please me and hold fast my covenant, I will give in my house and within my walls a monument and a name better than sons and daughters; I will give them an everlasting name that shall not be cut off." },
  { verse: "Isaiah 54:1", text: "Sing, O barren one, who did not bear; break forth into singing and cry aloud, you who have not been in labor! For the children of the desolate one will be more than the children of her who is married, says the Lord." },
  { verse: "1 Samuel 1:10-11", text: "She was deeply distressed and prayed to the Lord and wept bitterly. And she vowed a vow and said, 'O Lord of hosts, if you will indeed look on the affliction of your servant and remember me and not forget your servant, but will give to your servant a son, then I will give him to the Lord all the days of his life.'" },
  { verse: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { verse: "Romans 8:26", text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words." }
];

type CnEntry = { id: string; date: string; grief: string; invest: string; prayer: string };

export default function ChildlessNotByChoicePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CnEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [invest, setInvest] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_childlessnobychoicej_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: CnEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, invest, prayer };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_childlessnobychoicej_entries", JSON.stringify(updated));
    setGrief(""); setInvest(""); setPrayer("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_childlessnobychoicej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Childless Not by Choice</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those who wanted children and will not have them — navigating the grief that resurfaces across a lifetime, finding meaning and fruitfulness, and belonging in a church that often forgets you are there.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Support:</strong> 988 Lifeline (call/text 988) &bull; World Childless Week: worldchildlessweek.net &bull; Hannah&apos;s Prayer: hannah.org &bull; Resolve: resolve.org &bull; Crisis Text: 741741
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
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What specific grief am I carrying today?</label>
                  <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>Where am I investing in other lives or children?</label>
                  <textarea value={invest} onChange={e => setInvest(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I asking God for — or what am I releasing to him?</label>
                  <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
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
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Grief:</strong> {e.grief}</p>}
                {e.invest && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Investing:</strong> {e.invest}</p>}
                {e.prayer && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Childless Not by Choice</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Stories and theological reflection on the grief of involuntary childlessness in the church</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Childless Not by Choice" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>7 Myths About Singleness and Childlessness</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Sam Allberry on the church&apos;s family idolatry and the full humanity of those without biological children</p>
              <VideoEmbed videoId="LQNbUqVwVlo" title="7 Myths About Singleness and Childlessness" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Hannah&apos;s Prayer and Childless Grief</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>What Hannah&apos;s story tells us about the legitimacy of childlessness grief and honest prayer</p>
              <VideoEmbed videoId="4Eg_di-O8nM" title="Hannah's Prayer and Childless Grief" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Fruitfulness Beyond Biological Children</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Isaiah 54 and the fruitfulness God promises to the barren — and what that means practically</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Fruitfulness Beyond Biological Children" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
