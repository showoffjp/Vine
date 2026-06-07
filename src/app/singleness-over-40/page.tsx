"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Singleness Is Not a Waiting Room",
    verse: "1 Corinthians 7:32-35",
    text: "Paul describes singleness as a form of undivided devotion to God — a calling with its own completeness, not a holding pattern before the real life begins. The church has consistently failed to communicate this. But Paul's theology does not treat singleness as incomplete humanity. It treats it as a distinct and worthy form of Christian life."
  },
  {
    title: "The Longing Is Legitimate — and God Holds It",
    verse: "Psalm 37:4",
    text: "Delight yourself in the Lord, and he will give you the desires of your heart. This is not a promise that the desire for marriage will be fulfilled — it is a promise that God takes your desires seriously. The ache for companionship and family is not sinful. It is human. God is not telling you to stop wanting; he is telling you who holds those desires."
  },
  {
    title: "Jesus Was Single — and Fully Human",
    verse: "Hebrews 4:15",
    text: "We do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are. Jesus lived fully human, which includes the longing for deep companionship and the ache of going without it. He is not a stranger to what you carry."
  },
  {
    title: "The Church's Failure Is Real — and Not God's Verdict",
    verse: "Isaiah 56:3-5",
    text: "God explicitly addresses the eunuch — the one who lives outside the conventional family structure — and says: I will give you a memorial and a name better than sons and daughters. The church's marginalization of single adults in middle age is a failure of the church, not a message from God about your worth or your future."
  },
  {
    title: "Solitude and Loneliness Are Not the Same Thing",
    verse: "Mark 1:35",
    text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed. Jesus regularly chose solitude. Solitude in Scripture is not loneliness — it is the deliberate practice of being with God. Learning to distinguish between the loneliness that needs a community response and the solitude that is a spiritual practice is itself part of the journey."
  }
];

const voices = [
  {
    id: "v1",
    name: "Sam Allberry",
    role: "Author, 7 Myths About Singleness; Pastor",
    quote: "The church has implied that single people are less than whole — incomplete humans waiting for their real life to start. But Jesus was single. Paul was single. Scripture does not tell this story.",
    bio: "Sam Allberry writes with the theological rigor and personal honesty of someone who has spent his adult life navigating singleness in Christian communities that do not know how to hold it. His 7 Myths About Singleness is the most important Christian book on the subject."
  },
  {
    id: "v2",
    name: "Lore Ferguson Wilbert",
    role: "Author, Handle With Care; Writer on embodiment and faith",
    quote: "The longing is real. The ache for someone to come home to, someone to know you, someone to grow old beside — that is not a small thing. And telling yourself it shouldn't hurt doesn't make it hurt less.",
    bio: "Lore Ferguson Wilbert writes with rare honesty about the experience of longing — including the longing for marriage that goes unfulfilled. She does not paper over the ache and does not offer false comfort, but holds the longing inside a theology of belovedness."
  },
  {
    id: "v3",
    name: "Wesley Hill",
    role: "Author, Spiritual Friendship; Professor of Biblical Studies",
    quote: "We have forgotten that friendship was once considered one of the great spiritual goods. Single Christians are not called to less intimacy — they may be called to a different kind of intimacy, one the church has mostly lost the language for.",
    bio: "Wesley Hill's work on spiritual friendship is essential for single adults in middle age who are building a life of depth and connection that does not center on marriage. He recovers an ancient category that modern churches have largely discarded."
  },
  {
    id: "v4",
    name: "Rosaria Butterfield",
    role: "Author, The Gospel Comes With a House Key",
    quote: "The antidote to loneliness is not marriage — it is community. Radical hospitality, committed friendship, and households that practice genuine belonging: this is what the church is called to offer the unmarried, and largely has not.",
    bio: "Rosaria Butterfield's theology of hospitality and household has been transformative for single Christians who have been told the church cannot meet their need for belonging. She challenges both the single person and the church to build differently."
  }
];

const practices = [
  {
    icon: "🏡",
    title: "Build a Household Theology, Not Just a Marriage Theology",
    text: "Your home is not a staging area. It is a place of hospitality, formation, and belonging — now. Invest in it. Create rituals in it. Invite people into it. A life of radical hospitality builds the belonging that marriage alone cannot guarantee and singleness cannot preclude."
  },
  {
    icon: "👥",
    title: "Invest in Committed Friendships",
    text: "The model of spiritual friendship — deep, committed, non-romantic intimacy — is ancient and largely lost in American Christianity. Pursue friendships with intentionality: consistent time, shared history, honest vulnerability. The belonging you need is real; the path to it is friendship, not only marriage."
  },
  {
    icon: "⛪",
    title: "Hold the Church Accountable for Its Failures",
    text: "If your church treats singleness as a problem to be solved, sidelines single adults from meaningful community roles, or reduces ministry to couples and families — name that failure to leadership. Single adults in middle age have earned the right to be seen, not just sympathized with."
  },
  {
    icon: "🕊️",
    title: "Distinguish Longing From Identity",
    text: "The desire for marriage is real and legitimate. It is not, however, the center of your identity or the measure of your flourishing. Regular spiritual direction, therapy, or a prayer practice that names the desire and releases it — without suppressing it — is the work of integration."
  },
  {
    icon: "🎯",
    title: "Pursue the Life in Front of You, Not Just the Life You Expected",
    text: "The life you expected at 25 has not arrived. The life in front of you at 45 is different — and it is real. Investing in vocation, in community, in creative work, in service, in the depth of your relationship with God — this is not giving up. It is living."
  },
  {
    icon: "📖",
    title: "Read the Tradition of Holy Singleness",
    text: "Augustine, Thomas Aquinas, Teresa of Ávila, C.S. Lewis, Dietrich Bonhoeffer — the Christian tradition is full of single adults who built extraordinary lives of depth and impact. Knowing their stories interrupts the narrative that single adulthood is a lesser life."
  }
];

const scriptures = [
  { verse: "1 Corinthians 7:32-34", text: "An unmarried man is concerned about the Lord's affairs — how he can please the Lord. But a married man is concerned about the affairs of this world — how he can please his wife — and his interests are divided." },
  { verse: "Isaiah 56:4-5", text: "To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters." },
  { verse: "Psalm 37:4", text: "Delight yourself in the Lord, and he will give you the desires of your heart." },
  { verse: "Hebrews 4:15", text: "For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin." },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "John 15:15", text: "I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you." }
];

type SinglenessEntry = { id: string; date: string; ache: string; gratitude: string; invest: string };

export default function SinglenessOver40Page() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SinglenessEntry[]>([]);
  const [ache, setAche] = useState("");
  const [gratitude, setGratitude] = useState("");
  const [invest, setInvest] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_singlenessover40j_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!ache.trim()) return;
    const entry: SinglenessEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ache, gratitude, invest };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_singlenessover40j_entries", JSON.stringify(updated));
    setAche(""); setGratitude(""); setInvest("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_singlenessover40j_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Singleness & Faith</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Unwanted Singleness in Midlife</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the life you expected hasn't arrived, and the church doesn't quite know what to do with you. When the longing for partnership is real, and the loneliness is real, and you are tired of being treated like a problem to be solved. You are not less. You are not waiting.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === t ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations that take the longing seriously without treating singleness as a deficiency — and that name the church's failures honestly.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Writers and theologians recovering the theology and practice of single Christian life — from the inside.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practices for building a full life in the present — not a smaller life in waiting.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>If loneliness has become a mental health crisis</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — chronic loneliness can become a crisis; reach out.<br />
                <strong style={{ color: TEXT }}>Crisis Text Line: Text HOME to 741741</strong>
              </p>
            </div>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the single Christian who is tired of being told their life is not quite the real thing yet.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to name the ache, the gratitude, and the investment you are making in your actual life. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I aching for right now — honestly?</label>
                <textarea value={ache} onChange={e => setAche(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What is genuinely good about my life right now?</label>
                <textarea value={gratitude} onChange={e => setGratitude(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What am I investing in — in my present life, not my hoped-for life?</label>
                <textarea value={invest} onChange={e => setInvest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.ache && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>ACHE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.ache}</p></div>}
                  {e.gratitude && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>GOOD</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.gratitude}</p></div>}
                  {e.invest && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>INVESTING IN</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.invest}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on the theology of singleness, the practice of spiritual friendship, and living fully in the present.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>7 Myths About Singleness: Sam Allberry</div>
              <VideoEmbed videoId="LQNbUqVwVlo" title="7 Myths About Singleness: Sam Allberry" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Spiritual Friendship and the Single Life: Wesley Hill</div>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Spiritual Friendship and the Single Life: Wesley Hill" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Longing and the Belonging: Lore Ferguson Wilbert</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="The Longing and the Belonging: Lore Ferguson Wilbert" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Radical Hospitality and Household: Rosaria Butterfield</div>
              <VideoEmbed videoId="G5gLrHClpKQ" title="Radical Hospitality and Household: Rosaria Butterfield" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
