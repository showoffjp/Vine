"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_pastor_clergy_burnout_entries";
interface JournalEntry { id: string; date: string; text: string; }

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(58,125,86,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid ${TEXT}`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function PastorClergyBurnout() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");

  function saveEntry() {
    if (!draft.trim()) return;
    const next = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 8, fontSize: 13, color: MUTED }}>Vine / Ministry & Vocation</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: TEXT }}>Pastor and Clergy Burnout and Christian Faith</h1>
        <p style={{ color: MUTED, marginBottom: 8 }}>When the work of ministry has hollowed you out — the pastor who needs pastoral care and is afraid to ask for it.</p>
        <div style={{ background: "#071a0e", border: `1px solid ${ACCENT}`, borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: 14, color: "#a0d4b3" }}>
          <strong style={{ color: ACCENT }}>Support:</strong> 988 Lifeline &nbsp;|&nbsp; Pastors Help (Focus on the Family): <strong>1-855-771-HELP</strong> &nbsp;|&nbsp; Ministry Safe: ministrysafe.com &nbsp;|&nbsp; Clergy Support Groups: denominational pastoral care offices
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? ACCENT : BORDER}`, background: tab === t ? ACCENT : CARD, color: TEXT, cursor: "pointer", fontSize: 14 }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>Elijah After Carmel — The Pattern of Ministerial Collapse</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>In 1 Kings 18–19, Elijah has just called down fire from heaven on Mount Carmel in the most dramatic prophetic confrontation in Israel&apos;s history. The next morning, threatened by Jezebel, he runs into the wilderness, sits under a juniper tree, and prays to die. It is enough. I have had enough. God&apos;s response is not a vision or a theological correction. It is bread, water, and sleep. An angel touches him twice: arise and eat, because the journey is too great for you. The pattern of great ministerial exertion followed by collapse, followed by divine provision for the basic human needs of the body, is in Scripture. What happened to you is not unusual. God has treated it before.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Particular Loneliness of Pastoral Leadership</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Pastors are expected to be available to the grief, crisis, conflict, and need of everyone in their congregation while having no parallel access to the same support within the congregation — because the pastor cannot be fully honest about their own struggles with the people they are responsible for. The result is a profound structural loneliness: everyone knows the pastor, and the pastor knows everyone, but the pastor is not genuinely known. This is not a new problem — the Psalms attributed to Moses and to leaders under siege speak to exactly this — but it has intensified with the 24/7 accessibility that smartphones created and the platform pressures that social media impose.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Institution That Does Not Care for Its Own</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Many pastors serve denominations or church structures that expect an enormous amount and provide very little in return — no peer support, no funded sabbaticals, inadequate compensation, no mental health benefits, and implicit messages that asking for help is weakness or lack of faith. The clergy health crisis — documented by Duke Divinity School&apos;s Clergy Health Initiative, the Lilly Endowment, and others — shows significantly elevated rates of depression, anxiety, chronic disease, and early departure from ministry compared to the general population. If you are burning out in ministry, the system often shares responsibility. This is not your personal failure.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Difference Between Vocation and Role</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Burnout often produces a crisis about the relationship between vocation and role. The role — senior pastor of this congregation with these expectations — may be untenable. The vocation — the deep call to shepherd, to preach, to accompany people through their most significant moments — may remain. Distinguishing between the role that is crushing you and the vocation that called you is important discernment work. Leaving a role is not the same as abandoning a vocation. Some pastors who step away from a particular role find their vocation renewed in a different form. Others discover that the exhaustion has extended beyond the role to the vocation itself, and need a longer season of rest before they can know what is true.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: ACCENT, fontSize: 20, marginBottom: 12 }}>The Pastor Who Needs Pastoral Care</h2>
              <p style={{ color: MUTED, lineHeight: 1.8 }}>Who pastors the pastor? The systemic answer to this question is largely inadequate in most traditions. The theological answer is: the same God who pastors everyone. Psalm 23 was written by a shepherd. The shepherd needed a shepherd too. The image of God as shepherd in the psalms and prophets is the image of the one who cares for those who carry care — who leads the exhausted to still waters, who restores the depleted soul. You are allowed to be in need of pastoral care. You are allowed to seek it from someone outside your congregation, your denomination, and your ministerial network if necessary. Accountability groups, therapy, spiritual direction, and retreat centers all exist for exactly this.</p>
            </div>
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Eugene Peterson", title: "Under the Unpredictable Plant", quote: "The pastoral vocation is not a job. It is a way of being present to the holy in the ordinary. When the job crowds out the vocation, both the pastor and the congregation lose something irreplaceable. Sabbath is the only antidote I know." },
              { name: "Henri Nouwen", title: "The Wounded Healer", quote: "The minister who has come to terms with their own loneliness and is at home in their own house is a host who can offer hospitality to others. You cannot give what you do not have." },
              { name: "Ruth Haley Barton", title: "Strengthening the Soul of Your Leadership", quote: "The problem is not primarily leadership development — it is soul care. A leader cannot give what they do not have. The most important thing a spiritual leader can do is tend their own relationship with God. Everything else flows from there." },
              { name: "Scot McKnight", title: "Pastor Paul", quote: "Paul worked with a team. He was not a lone heroic figure single-handedly planting churches. He was embedded in community, accountable to community, cared for by community. The pastoral model of the solo senior pastor has no Pauline precedent." },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, marginBottom: 12 }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ color: ACCENT, fontWeight: 600 }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: 13 }}>{v.title}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Therapy — Outside Your Congregation and Denomination", body: "Pastors need therapy with someone who has no connection to their ministry context and no investment in the pastoral persona. A therapist who understands clergy dynamics — but is not themselves embedded in the church — provides the honest space that is structurally unavailable within the congregation. Focus on the Family&apos;s pastoral care line (1-855-771-HELP) can provide referrals. Psychology Today allows filtering by specialty including clergy/religious professionals." },
              { title: "Peer Support Groups for Clergy", body: "Regular accountability and support groups with other clergy — outside one&apos;s own denomination if possible — provide the horizontal peer connection that pastoral loneliness requires. Many regional ecumenical groups organize clergy support circles. Selah Pastoral Care (selahvle.com) and Church Advising (churchadvising.com) facilitate these. The goal is not professional development but genuine mutual support." },
              { title: "Spiritual Direction — Not Just Supervision", body: "A spiritual director who is not in a supervisory or collegial relationship with the pastor provides a genuinely free space for the inner life. Many pastors have never had anyone pay sustained, non-agenda attention to their own spiritual state. Spiritual Directors International (sdiworld.org) has a global directory. This is not therapy and not leadership coaching — it is companionship for the soul." },
              { title: "Sabbatical — Advocating for It", body: "Extended sabbatical — 3 months every 5–7 years — is recommended by virtually every major research body on clergy health. Many congregations resist it; many pastors do not advocate for it because they are afraid of appearing weak or replaceable. The Lilly Endowment has funded tens of thousands of clergy sabbaticals through its Programs for the Theological Exploration of Vocation. Your denomination&apos;s foundation may have similar grants." },
              { title: "Boundaries — Structural Solutions", body: "Many pastoral burnout situations are not primarily psychological problems — they are structural ones: no day off, available 24/7, inadequate staffing, every congregational conflict landing on the pastor&apos;s desk. Structural solutions include: a genuine day off weekly, technology limits (no calls or texts after 9pm), clear role definitions, and staff or volunteer structures that distribute care beyond the solo pastor." },
              { title: "Discernment — Staying or Leaving", body: "If burnout has reached the point of considering leaving ministry, discernment benefits from: a period of rest before deciding, a trusted spiritual director or therapist who can help distinguish burnout exhaustion from genuine vocational clarification, and conversation with other pastors who have navigated the same transition. Vocations can be renewed. They can also be genuinely completed. Both are possible outcomes of honest discernment." },
            ].map(p => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: ACCENT, fontSize: 17, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "1 Kings 19:4–5", text: "He came to a broom bush, sat down under it and prayed that he might die. I have had enough, Lord, he said. Take my life; I am no better than my ancestors. Then he lay down under the bush and fell asleep." },
              { ref: "Psalm 23:1–3", text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul." },
              { ref: "Exodus 18:18", text: "You and these people who come to you will only wear yourselves out. The work is too heavy for you; you cannot handle it alone." },
              { ref: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, Come with me by yourselves to a quiet place and get some rest." },
              { ref: "2 Corinthians 4:7–9", text: "But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed." },
              { ref: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8 }}>{s.ref}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: ACCENT, marginBottom: 12 }}>Private Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Stored only on this device. Not shared with anyone. This space is for the pastor who has no congregation to pastor them.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What would you say if no one who knew you as a pastor could read this? What do you need that you have not been able to ask for?"
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 15, resize: "vertical", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, color: TEXT, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 15 }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{e.date}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{e.text}</p>
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: 10, padding: "6px 14px", background: "transparent", color: MUTED, border: `1px solid ${BORDER}`, borderRadius: 6, cursor: "pointer", fontSize: 13 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="4Eg_di-O8nM" title="Elijah Under the Juniper Tree — God and Pastoral Collapse" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="The Lonely Pastor — Why Clergy Need Community Too" />
            <VideoEmbed videoId="hJkLBPIbZr4" title="Tending Your Own Soul — Ruth Haley Barton on Pastoral Burnout" />
            <VideoEmbed videoId="7_CGP-12AE0" title="Sabbatical and Sustainability — Long-Term Faithfulness in Ministry" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
