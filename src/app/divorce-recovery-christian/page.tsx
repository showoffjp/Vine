"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Hates What Divorce Does — Not Who Divorce Happened To",
    verse: "Malachi 2:16",
    text: "God hates divorce — meaning he hates the violence it does to covenant and to people. This verse is not a verdict on divorced people; it is an expression of God's grief over the rupture of what was meant to be permanent. The one who is grieving a broken marriage is not the enemy of this verse — they are its victim."
  },
  {
    title: "You Are Not Disqualified",
    verse: "Romans 8:1",
    text: "There is therefore now no condemnation for those who are in Christ Jesus. Divorce carries enormous shame in many Christian communities. But condemnation is not what God offers to the one whose marriage ended — whether by their fault, the other's fault, or both. No condemnation means no condemnation."
  },
  {
    title: "The Identity God Gives Is Not Defined by Marital Status",
    verse: "Galatians 3:28",
    text: "There is neither Jew nor Greek, slave nor free, male nor female — for you are all one in Christ Jesus. The categories the world uses to sort people — including married/divorced/single — do not constitute your identity in Christ. You are not primarily a divorced person. You are a beloved child of God who went through a divorce."
  },
  {
    title: "Grief Is the Appropriate Response — Even to a Good Decision",
    verse: "Lamentations 1:2",
    text: "She weeps bitterly in the night, and her tears are on her cheeks. Lamentations gives voice to grief over devastation — even devastation that the one grieving helped cause, even devastation that was the right choice. Grief does not require that the divorce was a mistake. It requires only that what was real is now lost."
  },
  {
    title: "Rebuilding Is Permitted — and Possible",
    verse: "Isaiah 58:12",
    text: "Your people will rebuild the ancient ruins and will raise up the age-old foundations; you will be called Repairer of Broken Walls, Restorer of Streets with Dwellings. God is in the business of rebuilding what has been broken. This includes lives after divorce. The rubble is not the final word."
  }
];

const voices = [
  {
    id: "v1",
    name: "Jim Talley",
    role: "Author, Reconcilable Differences; Divorce recovery pastor",
    quote: "Divorce is one of the most disorienting losses a person can experience — because it is not just a relationship that ended; it is an entire imagined future that ceased to exist. That loss deserves to be grieved, not explained away.",
    bio: "Jim Talley has spent decades helping Christians navigate divorce recovery with theological honesty and pastoral compassion. His work specifically addresses the shame that Christian communities often add to what is already a profound loss."
  },
  {
    id: "v2",
    name: "Leslie Vernick",
    role: "Counselor; Author, The Emotionally Destructive Marriage",
    quote: "Not every divorce is a failure of faith. Some divorces are the result of someone finally choosing safety, or finally accepting reality, or finally acknowledging that one person cannot hold a marriage together alone.",
    bio: "Leslie Vernick is essential for Christians recovering from destructive marriages — helping them understand that leaving was not unfaithfulness to God, and that their healing is not a lower priority than the marriage's survival."
  },
  {
    id: "v3",
    name: "Gary Thomas",
    role: "Author, Sacred Marriage and Cherishing",
    quote: "When a marriage ends, there is grief for the real and the imagined — for what was actually there and for what you thought was there and for what you hoped would be there. All three griefs are legitimate.",
    bio: "Gary Thomas writes about marriage with theological depth, and his engagement with divorce recovery reflects the same honesty — acknowledging the full weight of what is lost without adding condemnation."
  },
  {
    id: "v4",
    name: "Megan Devine",
    role: "Therapist; Author, It's OK That You're Not OK",
    quote: "Grief is not a problem to be solved. It is an experience to be lived — and it changes shape over time, but it does not simply end. The goal is not to get over it. It is to carry it well.",
    bio: "Megan Devine's framework for grief without a timeline is essential for divorce recovery, where cultural pressure to 'move on' can make the genuine work of grieving feel illegitimate. Her work gives divorced people permission to grieve as long as the grief actually lasts."
  }
];

const practices = [
  {
    icon: "😢",
    title: "Grieve the Marriage — Not Just the Person",
    text: "Divorce involves multiple losses: the person, the identity of 'married,' the future you expected, the family structure, sometimes the faith community, sometimes the home. Each of these deserves its own grief. Do not skip grief by moving immediately into rebuilding."
  },
  {
    icon: "🧠",
    title: "Find a Therapist Who Understands Divorce Recovery",
    text: "Divorce is a trauma presentation requiring specific therapeutic skill. DivorceCare groups (divorcecare.org) are available in thousands of churches and offer both community and curriculum. A therapist in addition to a group provides more individualized support."
  },
  {
    icon: "⚖️",
    title: "Get Legal and Financial Support Immediately",
    text: "Especially if children are involved, get competent legal counsel early. Financial decisions made in the first year of divorce have long-term consequences. A fee-only financial advisor and a family attorney are worth every dollar of investment."
  },
  {
    icon: "⛪",
    title: "Find a Church Community That Includes You",
    text: "Some churches make divorced people feel unwelcome or suspect. You are not obligated to attend a community that treats divorce as disqualifying. Seek a church that takes Scripture seriously enough to extend the grace that Scripture actually offers."
  },
  {
    icon: "🚧",
    title: "Observe Appropriate Boundaries With Your Ex",
    text: "Especially in the early period, clear agreements about communication and contact protect both parties. If children are involved, communication should be child-focused and business-like. The emotional enmeshment that caused harm in the marriage will cause additional harm in the divorce."
  },
  {
    icon: "⏰",
    title: "Do Not Hurry Toward the Next Relationship",
    text: "The average healthy period before dating after divorce is 18 months to 2 years — not because there is a rule, but because grieving one marriage and healing enough to bring health to the next one takes time. Entering a new relationship before doing this work tends to repeat old patterns."
  }
];

const scriptures = [
  { verse: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { verse: "Isaiah 58:12", text: "Your people will rebuild the ancient ruins and will raise up the age-old foundations; you will be called Repairer of Broken Walls, Restorer of Streets with Dwellings." },
  { verse: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { verse: "Lamentations 1:2", text: "She weeps bitterly in the night, and her tears are on her cheeks; among all her lovers she has none to comfort her." },
  { verse: "Joel 2:25", text: "I will restore to you the years that the swarming locust has eaten." },
  { verse: "Galatians 3:28", text: "There is neither Jew nor Greek, slave nor free, male nor female, for you are all one in Christ Jesus." }
];

type DivorceEntry = { id: string; date: string; loss: string; shame: string; hope: string };

export default function DivorceRecoveryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DivorceEntry[]>([]);
  const [loss, setLoss] = useState("");
  const [shame, setShame] = useState("");
  const [hope, setHope] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_divorcerecoveryj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!loss.trim()) return;
    const entry: DivorceEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), loss, shame, hope };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_divorcerecoveryj_entries", JSON.stringify(updated));
    setLoss(""); setShame(""); setHope("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_divorcerecoveryj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Marriage & Loss</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Divorce Recovery & Christian Faith</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the marriage ended — whether you wanted it to or not. When the church's silence or judgment makes it worse. When you are grieving not just a person but a future, an identity, and a vision of life. God does not offer condemnation here. He offers presence.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for the divorced Christian — challenging the condemnation and holding space for both grief and rebuilding.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Pastors, counselors, and grief workers who take divorce recovery seriously as a spiritual and emotional process.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Practical and spiritual steps through divorce recovery — in the right sequence.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>Crisis Support</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — divorce is a high-risk period for suicidal ideation.<br />
                DivorceCare groups: <strong style={{ color: TEXT }}>divorcecare.org</strong><br />
                National DV Hotline (if leaving involved abuse): <strong style={{ color: TEXT }}>1-800-799-7233</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the divorced Christian who needs to hear that God is present, not punishing.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GREEN}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to name what was lost, release false shame, and hold whatever hope is present. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What loss from the divorce am I carrying today?</label>
                <textarea value={loss} onChange={e => setLoss(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What shame am I carrying — and is it from God or from somewhere else?</label>
                <textarea value={shame} onChange={e => setShame(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What small sign of hope or rebuilding do I see?</label>
                <textarea value={hope} onChange={e => setHope(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.loss && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>LOSS</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.loss}</p></div>}
                  {e.shame && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>SHAME</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.shame}</p></div>}
                  {e.hope && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>HOPE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.hope}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching and testimony on grief, grace, and rebuilding after divorce.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Divorce Recovery: Grief, Grace, and Rebuilding</div>
              <VideoEmbed videoId="oNpTha80yyE" title="Divorce Recovery: Grief, Grace, and Rebuilding" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Emotionally Destructive Marriage: Leslie Vernick</div>
              <VideoEmbed videoId="kfcVPh2VDhQ" title="The Emotionally Destructive Marriage: Leslie Vernick" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>No Condemnation: Grace for the Divorced Christian</div>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="No Condemnation: Grace for the Divorced Christian" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Rebuilding After Loss: When Your Future Changes</div>
              <VideoEmbed videoId="SqGRnlXplx0" title="Rebuilding After Loss: When Your Future Changes" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
