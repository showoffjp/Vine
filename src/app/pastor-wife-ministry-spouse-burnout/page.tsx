"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#6B4FBB";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "You Were Called to Marriage, Not to a Job Description",
    body: "There is no biblical job description for \"pastor's wife.\" The idea that marrying a minister means inheriting an unpaid role with specific behavioral, relational, and spiritual expectations has no scriptural basis. Priscilla worked alongside Aquila in ministry (Acts 18:26), but she did so as herself, with her own gifts and calling — not as an extension of her husband's office. The unspoken demands placed on pastors' wives by congregational culture are cultural artifacts, not biblical mandates. You are not required to fulfill an expectation that scripture never set.",
  },
  {
    title: "The Double Isolation: Her Husband Is Everyone's Shepherd Except Hers",
    body: "The pastor's wife often faces a unique form of isolation: her husband is pastor to the congregation, but he cannot be pastor to her — both because his role creates a power differential within the church community and because their shared knowledge of people and situations prevents the kind of candor that pastoral care requires. She cannot easily seek pastoral support from within her own congregation. She is often the pastor's most intimate confidante regarding everyone in the community — and has no one to hold her own confidences. This double isolation is spiritually and emotionally dangerous.",
  },
  {
    title: "The Goldfish Bowl and the Right to Private Life",
    body: "Ministry families often report living in a goldfish bowl — every aspect of family life observed and evaluated by the congregation. Children who struggle, marital tensions, personal faith doubts, financial pressures — these become grist for congregational conversation in a way that other families' private struggles do not. This level of surveillance is not biblical. Jesus regularly withdrew from the crowd (Luke 5:16). Privacy, rest, and a non-public life are not luxuries — they are the conditions of sustainable human flourishing.",
  },
  {
    title: "Elijah's Rest and the God Who Does Not Add More Demands",
    body: "When Elijah collapsed under the broom tree, God's response was not a speech about calling, courage, or getting back to work. It was: \"Arise and eat, for the journey is too great for you\" (1 Kings 19:7). God fed him, let him sleep, fed him again, and only then spoke about his path forward. For the pastor's wife in burnout, this passage is pastoral care: God does not pile on more expectation when you are depleted. He gives food, rest, and time. He does not shame the exhaustion. He tends it.",
  },
  {
    title: "Her Calling Is Her Own",
    body: "Every person has a direct relationship with God and a direct calling — not mediated through their spouse's vocation. The pastor's wife who has suppressed her own gifts, interests, and calling to support her husband's ministry has not necessarily been more faithful; she may have been less faithful to her own calling. Supporting a spouse in ministry is a legitimate expression of vocation. But it is not the whole of any woman's calling. Her gifts, her voice, her particular contribution to the body of Christ belong to her — and to God.",
  },
];

const voices = [
  {
    name: "Judi Braddy",
    role: "Author of Prodigal in the Parsonage; former pastor's wife; speaks on ministry family struggles",
    quote: "Nobody told me that the hardest part of being a pastor's wife would not be the schedule or the scrutiny. It would be the loneliness — sitting in a pew full of people who are your husband's congregation and not one of whom you can really talk to. That loneliness is a spiritual emergency that most churches do not see.",
  },
  {
    name: "Ruth Haley Barton",
    role: "Author of Strengthening the Soul of Your Leadership; spiritual director for ministry leaders and spouses",
    quote: "Ministry spouses often give everything to support the ministry and have nothing given back to them in return. The congregation sees the pastor; they do not see the spouse. Their spiritual life, their depletion, their grief — these are largely invisible. Finding their own spiritual director, their own community, their own pastoral care, is not optional. It is necessary for survival.",
  },
  {
    name: "Kay Warren",
    role: "Co-founder of Saddleback Church; has spoken openly about depression, mental health, and ministry family life",
    quote: "Even in a church of twenty thousand people, I was profoundly lonely. Nobody could really know me because everybody needed me to be the pastor's wife. The day I found a small group of women outside my own church who did not know my husband was one of the most important days of my spiritual life.",
  },
  {
    name: "Barnabas Ministry",
    role: "Care ministry for ministry workers and their families",
    quote: "Ministry spouses are among the most underserved people in the church. They give enormous amounts of emotional labor in support of the ministry and receive very little formal care in return. Providing them with their own pastoral care — outside the congregation where they serve — is one of the most important investments a denomination or church network can make.",
  },
];

const practices = [
  {
    title: "Find Your Own Spiritual Director or Counselor Outside Your Congregation",
    body: "The most important practical step for a pastor's wife is finding someone who provides her with pastoral care — separate from her husband, separate from her congregation, separate from her denominational network if possible. A spiritual director, a therapist, or a pastor in a different church who can hold her confidences without the complications of congregational relationships. This is not disloyalty; it is the minimum requirement for spiritual and emotional sustainability.",
  },
  {
    title: "Find a Community That Does Not Know Your Husband",
    body: "Many pastors' wives describe the profound relief of finding a community — a small group, a friendship circle, a support network — where they are known as themselves rather than as their husband's wife. If your denomination has a pastors' wives group, this may help. Many women find that friendships outside the church context — with women at a gym, in a neighborhood, through a creative or professional interest — provide the relational space they cannot access within their congregation.",
  },
  {
    title: "Name Your Needs to Your Husband",
    body: "Many pastors' wives suffer silently, not wanting to add to their husband's burden with their own needs. But sustained suppression of need is not sustainable and eventually produces either collapse or resentment. Tell your husband specifically what you need — time together, pastoral support outside the congregation, freedom from certain expectations, acknowledgment of your sacrifice. He may not know what you need if you have not said it. He cannot provide what he does not know is needed.",
  },
  {
    title: "Clarify What You Are Actually Obligated to Do",
    body: "Many of the expectations placed on pastors' wives are informal and unspoken — assumed by the congregation but never contracted, negotiated, or even made explicit. Work with your husband to identify which of the roles and expectations you currently fill are genuinely important to you and the ministry — and which are obligations you have absorbed without choosing. You are not required to lead the women's ministry, host every social gathering, attend every service, or be available to congregants at all hours. Identifying which obligations are chosen versus absorbed can clarify where to begin setting limits.",
  },
  {
    title: "Protect Your Own Sabbath",
    body: "Ministry families often have no real sabbath — Sunday is the pastor's most intense work day, and the family's rhythm revolves around the church's calendar. Negotiate with your husband a day that is genuinely yours and his — off from ministry-related activities, phones, and obligations. This may require explaining to the congregation that Saturday (or another day) is the family's sabbath. Most congregations who have not thought about it will accept this if it is named. Most ministry families who are burning out have lost sabbath.",
  },
  {
    title: "Consider Your Own Vocation Actively",
    body: "What gifts, interests, and callings do you have that exist independent of your husband's ministry? Are they being expressed? Are there ways to serve, create, work, or contribute that belong to you — not as a ministry appendage but as yourself? Pursuing your own vocation is not a distraction from supporting your husband's ministry — it is the condition of bringing a full, alive person to the partnership. A depleted spouse serving as ministry furniture serves no one well.",
  },
];

const scriptures = [
  { ref: "1 Kings 19:7", text: "And the angel of the Lord came again a second time and touched him and said, 'Arise and eat, for the journey is too great for you.'" },
  { ref: "Luke 5:16", text: "But he would withdraw to desolate places and pray." },
  { ref: "Acts 18:26", text: "He began to speak boldly in the synagogue, but when Priscilla and Aquila heard him, they took him aside and explained to him the way of God more accurately." },
  { ref: "Proverbs 31:25", text: "Strength and dignity are her clothing, and she laughs at the time to come." },
  { ref: "Matthew 11:28-30", text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls." },
  { ref: "Galatians 6:9", text: "And let us not grow weary of doing good, for in due season we will reap, if we do not give up." },
];

const videos = [
  { videoId: "W_GbkXIBi3g", title: "The Hidden Loneliness of the Pastor's Wife" },
  { videoId: "SaHSd3vk-Yg", title: "Ruth Haley Barton — Ministry Spouses and Spiritual Formation" },
  { videoId: "OdJSVV9gJqg", title: "Kay Warren — Mental Health and the Ministry Family" },
  { videoId: "nqfsPFvh2Sg", title: "When the Ministry Spouse Is Burning Out — Signs and Support" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function PastorWifeBurnoutPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; need: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", need: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_pastorwifeburnout_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_pastorwifeburnout_entries", JSON.stringify(next));
    setForm({ today: "", need: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Ministry Spouse Burnout
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You were called to marriage, not to a job description. For pastors&apos; wives and ministry spouses navigating the invisible burnout of life in the goldfish bowl.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Support for ministry families:</strong> Focus on the Family Pastor Support: <strong style={{ color: TEXT }}>1-844-337-4684</strong> &bull; Barnabas International: <strong style={{ color: TEXT }}>barnabas.org</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", color: tab === i ? ACCENT : MUTED, borderBottom: tab === i ? `2px solid ${ACCENT}` : "2px solid transparent", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Biblical & Theological Foundations</h2>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.25rem", background: "none", border: "none", color: TEXT, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 600 }}>
                  {item.title}
                  <span style={{ color: ACCENT, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={{ padding: "0 1.25rem 1.25rem", color: MUTED, lineHeight: 1.8 }}>{item.body}</div>}
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Voices of Experience</h2>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "0.75rem" }}>
                  <div style={{ fontWeight: 700, color: ACCENT }}>{v.name}</div>
                  <div style={{ fontSize: "0.85rem", color: MUTED }}>{v.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Practical Guidance</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <h3 style={{ color: ACCENT, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Scripture for the Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 10px 10px 0", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 700, color: ACCENT, marginBottom: "0.5rem", fontSize: "0.9rem", letterSpacing: "0.05em" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A space that belongs entirely to you.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>How are you today — not the ministry, not your husband, just you?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="Depleted, invisible, holding it together, quietly drowning..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What do you actually need right now?</label>
                <textarea value={form.need} onChange={e => setForm(f => ({ ...f, need: e.target.value }))} rows={2} placeholder="Someone to care for me, time alone, a conversation where I'm not the pastor's wife..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, I'm giving everyone else what I barely have. I need..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.today && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Today: </span>{e.today}</p>}
                    {e.need && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Need: </span>{e.need}</p>}
                    {e.prayer && <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}><span style={{ color: MUTED, fontStyle: "normal", fontSize: "0.8rem" }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 5 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Video Resources</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for ministry spouses who need their own pastoral care.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {videos.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.75rem 1rem", fontSize: "0.9rem", color: MUTED }}>{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
