"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "You Cannot Give Another Person Your Faith",
    verse: "Philippians 2:12",
    text: "Continue to work out your salvation with fear and trembling. Faith formation is personal — it cannot be transferred, compelled, or managed by a spouse. Each person works out their own salvation. You are not responsible for your spouse's spiritual growth, and you cannot produce it by pressure, guilt, or example alone.",
  },
  {
    title: "Marriage to an Unequally Yoked Partner Is Addressed Explicitly",
    verse: "1 Corinthians 7:12–13",
    text: "If any brother has a wife who is not a believer and she is willing to live with him, he must not divorce her. And if a woman has a husband who is not a believer and he is willing to live with her, she must not divorce him. Paul addresses marriages where faith growth is unequal — even where one partner has become a believer after marriage. The instruction assumes the possibility of ongoing marriage with significant spiritual disparity.",
  },
  {
    title: "Your Spiritual Life Is Your Own Responsibility",
    verse: "Colossians 3:3",
    text: "For you died, and your life is now hidden with Christ in God. Your spiritual life — your prayer, your formation, your community, your growth — is your own. It does not require your spouse's participation to be real, sustained, and deep. Many Christians who are married to spiritually disengaged partners have discovered that the constraint has produced extraordinary depth in their own interior life.",
  },
  {
    title: "The Sanctification of the Unbelieving Spouse",
    verse: "1 Corinthians 7:14",
    text: "For the unbelieving husband has been sanctified through his wife, and the unbelieving wife has been sanctified through her believing husband. Paul describes something mysterious: the spiritual reality of a believing spouse touches the household. Your faith has genuine spiritual significance for your marriage, even when it is not matched.",
  },
  {
    title: "Suffering Is Part of the Spiritual Path",
    verse: "Romans 5:3–4",
    text: "We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. The suffering of spiritual loneliness in marriage — the ache for shared faith that is not matched — is a form of suffering that, in God's hands, produces perseverance, character, and hope. This does not make it easy. It makes it purposeful.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Gary Thomas",
    role: "Author, Sacred Marriage",
    quote: "Sacred marriage asks: what if God is more interested in your holiness than your happiness? The spiritually unequal marriage may be the most concentrated site for that question. The frustration, the loneliness, the constraint — these become the very material of your spiritual formation.",
    bio: "Gary Thomas (Sacred Marriage, Cherish, Devotions for a Sacred Marriage) argues that marriage is fundamentally a spiritual formation project. His framework helps those in spiritually unequal marriages understand the difficulty as purposeful rather than merely painful.",
  },
  {
    id: "v2",
    name: "Nancy Kennedy",
    role: "Author, When He Doesn't Believe",
    quote: "I lived for years as the only believing person in my marriage. What I learned is that you cannot be your husband's Holy Spirit. The moment I stopped trying to manage his spiritual life, I started living my own. That shift changed everything — not necessarily him, but me.",
    bio: "Nancy Kennedy (When He Doesn't Believe, When He Won't Lead) writes from decades of personal experience as the believing spouse in a spiritually unequal marriage. Her work is the most practical and honest guide available for Christians navigating this specific grief.",
  },
  {
    id: "v3",
    name: "Leslie Vernick",
    role: "Christian counselor, author",
    quote: "Spiritual loneliness in marriage is real grief. The longing to pray together, to worship together, to raise children in faith together — and to have a spouse who does not share that longing — produces a specific, sustained grief that the church rarely talks about. Name it. Mourn it. And then build a life of faith that does not depend on your spouse's participation.",
    bio: "Leslie Vernick (The Emotionally Destructive Marriage, The Emotionally Destructive Relationship) addresses the spiritual loneliness dimension of unequal spiritual growth with pastoral realism. She helps believing spouses navigate both the grief and the practical decisions about spiritual community and formation.",
  },
  {
    id: "v4",
    name: "Peter Scazzero",
    role: "Author, Emotionally Healthy Spirituality",
    quote: "Your spiritual life is not reducible to your marriage. It has its own depth, its own trajectory, its own community. A spiritually engaged marriage is beautiful. But the spiritually engaged individual life — even inside a marriage that doesn't match — is also beautiful. Invest in what is yours.",
    bio: "Peter Scazzero (Emotionally Healthy Spirituality, The Emotionally Healthy Leader) helps people understand that interior depth is not dependent on external circumstances — including the spiritual state of one's spouse. His framework supports believers in building genuine depth regardless of what is happening in the marriage.",
  },
];

const practices = [
  {
    icon: "🙏",
    title: "Build a Rich Spiritual Life That Is Entirely Your Own",
    text: "Prayer, Bible reading, spiritual direction, retreat — build these not as compensations for what your spouse does not share, but as the normal practices of your own spiritual life. Do not wait for participation that may not come. Your life with God is yours to cultivate.",
  },
  {
    icon: "⛪",
    title: "Find Your Own Spiritual Community",
    text: "You need people with whom you can worship, study, pray, and be spiritually honest — and you may not have that in your marriage. A small group, a spiritual director, a prayer partner — these are not replacements for marriage; they are the community your faith requires, regardless of your marital situation.",
  },
  {
    icon: "💬",
    title: "Name the Grief Without Pressure",
    text: "The grief of spiritual loneliness in marriage is real — the ache for shared faith, prayer, worship, and theological conversation. Name it in your own heart, in prayer, to a therapist or spiritual director. Be careful not to name it as accusation toward your spouse. It is your grief, not their moral failure.",
  },
  {
    icon: "🤝",
    title: "Find Genuine Points of Connection",
    text: "What does your spouse value that overlaps with your faith? Service, justice, kindness, community, gratitude, wonder — these may be touchpoints. Building genuine marriage connection around shared values (not just shared faith) is possible and sustaining.",
  },
  {
    icon: "📖",
    title: "Study 1 Corinthians 7 Carefully",
    text: "Paul's detailed instructions for spiritually unequal marriages in 1 Corinthians 7 are some of the most pastorally specific in the New Testament. Read them with a commentary — Gordon Fee's First Epistle to the Corinthians is excellent. Understanding what Paul actually says and does not say changes how you navigate this season.",
  },
  {
    icon: "🚫",
    title: "Resist the Temptation to Be Your Spouse's Spiritual Manager",
    text: "The temptation to arrange sermons they should hear, books they should read, conversations they should have — to manage your spouse toward faith — is both exhausting and counterproductive. Paul said: do not force. Pray, live your faith genuinely, maintain your integrity. The work of the Spirit in another person is not yours to manage.",
  },
];

const scriptures = [
  { verse: "1 Corinthians 7:12–14", text: "If any brother has a wife who is not a believer and she is willing to live with him, he must not divorce her... For the unbelieving husband has been sanctified through his wife, and the unbelieving wife has been sanctified through her believing husband." },
  { verse: "Philippians 2:12", text: "Therefore, my dear friends, as you have always obeyed — not only in my presence, but now much more in my absence — continue to work out your salvation with fear and trembling." },
  { verse: "1 Peter 3:1–2", text: "Wives, in the same way submit yourselves to your own husbands so that, if any of them do not believe the word, they may be won over without words by the behavior of their wives, when they see the purity and reverence of your lives." },
  { verse: "Colossians 3:3", text: "For you died, and your life is now hidden with Christ in God." },
  { verse: "Romans 5:3–4", text: "We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope." },
  { verse: "Isaiah 26:3", text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you." },
];

type UnequalEntry = { id: string; date: string; grief: string; mine: string; connection: string };

export default function UnequalSpiritualGrowthPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<UnequalEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [mine, setMine] = useState("");
  const [connection, setConnection] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_unequalspiritualgrowthj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const entry: UnequalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      grief,
      mine,
      connection,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_unequalspiritualgrowthj_entries", JSON.stringify(updated));
    setGrief(""); setMine(""); setConnection("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_unequalspiritualgrowthj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Marriage & Spiritual Life</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Unequal Spiritual Growth in Marriage
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For the spouse who is walking with God while their partner is disengaged, skeptical, or has drifted. The grief is real. The loneliness is specific. And your life with God is yours — it does not require your spouse&apos;s participation to be deep and real.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>Resources</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline &nbsp;·&nbsp; Focus on the Family: <span style={{ color: GREEN }}>focusonthefamily.com</span> &nbsp;·&nbsp; Spiritual direction: <span style={{ color: GREEN }}>sdicompanions.org</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What is the specific grief of your spiritual loneliness today?</label>
                <textarea value={grief} onChange={(e) => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What is alive in your own spiritual life right now — independent of your spouse?</label>
                <textarea value={mine} onChange={(e) => setMine(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What shared value or point of connection exists between you and your spouse?</label>
                <textarea value={connection} onChange={(e) => setConnection(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.grief && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Grief:</strong> {e.grief}</p>}
                {e.mine && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>My spiritual life:</strong> {e.mine}</p>}
                {e.connection && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Connection:</strong> {e.connection}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "LQNbUqVwVlo", title: "Spiritually Mismatched Marriage", channel: "Focus on the Family", description: "Pastoral conversation on spiritually unequal marriages — how to maintain faith and marriage simultaneously, the grief of spiritual loneliness, and what long-term faithfulness looks like." },
              { videoId: "eBl7gT7gQ6g", title: "Sacred Marriage: Holiness Over Happiness", channel: "Gary Thomas", description: "Gary Thomas on the spiritual formation project of marriage — why unequal spiritual growth is often the most concentrated site for God's work in both partners." },
              { videoId: "G5gLrHClpKQ", title: "Building Your Own Spiritual Life", channel: "Peter Scazzero", description: "Scazzero on emotionally healthy spirituality — why interior depth is not contingent on circumstances, including the spiritual engagement of your spouse." },
              { videoId: "kfcVPh2VDhQ", title: "Marriage and the Long View", channel: "Tim Keller", description: "Keller on what sustained marriage requires — including how to love well across significant differences in values and faith. The long-view theology of marriage is essential for this season." },
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
    </main>
  );
}
