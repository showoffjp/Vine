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
    title: "The Honesty This Situation Requires",
    body: "Many Christians who experience same-sex attraction are in heterosexual marriages — entered into before they fully understood their sexuality, or as an expression of theological conviction, or because their attraction patterns include opposite-sex attraction as well. These marriages are real, and the challenges within them are real. This page holds pastoral space for the person who is committed to both their marriage and their faith, and who needs honest resources rather than shame or simplistic answers.",
  },
  {
    title: "Marriage as Covenant, Not Contract",
    body: "Christian marriage is a covenant — a binding promise with God as witness — not a contract that can be voided when conditions change. The question of same-sex attraction within marriage is not answered by \"you should have thought of that before\" but by the harder question: what does faithful covenant-keeping look like in this specific, complicated situation? This requires pastoral wisdom, honest communication, and often professional support. It rarely has a clean answer.",
  },
  {
    title: "The Spouse Who Discovers — A Distinct Pastoral Need",
    body: "When a spouse discovers that their partner has been hiding same-sex attraction, the experience is a form of betrayal trauma. The discovery rewrites the past, raises questions about the entire marriage, and can trigger profound grief, rage, and disorientation. The church needs to hold pastoral space for both partners: the person who has been carrying a secret that felt impossible to share, and the spouse whose reality has been upended without warning or consent.",
  },
  {
    title: "The Range of Christian Perspectives and Why It Matters",
    body: "Christians hold a range of views on same-sex attraction and marriage — from traditional complementarian and Catholic positions (marriage is exclusively between a man and woman; same-sex attraction, while not sinful in itself, is to be lived with faithfully in celibacy or heterosexual marriage) to affirming positions (same-sex marriage can be faithful and covenantal). This page holds the pastoral realities of the traditional framework while acknowledging the diversity of conviction among Christians. People in these situations deserve honest engagement, not just the view of any single camp.",
  },
  {
    title: "Grace for the Journey, Whatever It Holds",
    body: "The grace of God is sufficient for the complexity of a marriage that includes same-sex attraction. That grace does not make it simple. It does not eliminate the grief, the attraction, the questions, or the strain. But Paul's word stands: \"My grace is sufficient for you, for my power is made perfect in weakness\" (2 Corinthians 12:9). Whatever this marriage holds — however the conversation goes, whatever choices are made — God is present in the complexity, not only in the resolution.",
  },
];

const voices = [
  {
    name: "Nate Collins",
    role: "Author of All But Invisible: Exploring Identity Questions at the Intersection of Faith, Gender, and Sexuality",
    quote: "Same-sex attracted Christians in marriages carry one of the church's most hidden burdens. The church's silence on this — its failure to provide language, community, or resources — has caused profound harm. These are real people in real marriages who deserve pastoral care, not just theological positions.",
  },
  {
    name: "Mark Yarhouse",
    role: "Psychologist, author of Understanding Sexual Identity and Homosexuality and the Christian",
    quote: "Research on mixed-orientation marriages — marriages in which one or both partners experience same-sex attraction — shows that these marriages can be stable, faithful, and meaningful. They also face specific challenges that require honest communication, professional support, and often the navigation of real grief. Both things are true.",
  },
  {
    name: "Laurie Krieg",
    role: "Author of An Impossible Marriage; in a mixed-orientation marriage",
    quote: "Our marriage has not been what either of us expected. My husband came out to me after we were married. We chose to stay. It has been the hardest and most grace-filled thing either of us has done. I want other people in our situation to know: you are not alone, and there is a way through — though the way through is not easy.",
  },
  {
    name: "Preston Sprinkle",
    role: "Author of Embodied and Costly Grace; founder of the Center for Faith, Sexuality and Gender",
    quote: "The church has not served people who experience same-sex attraction well — either by condemning them or by ignoring them. What these people need is genuine community, honest pastoral care, and the freedom to bring their full experience to the table without fear. That is not too much to ask. It is exactly what the church is supposed to offer.",
  },
];

const practices = [
  {
    title: "Find a Therapist Who Specializes in Sexual Identity and Faith",
    body: "This situation — navigating same-sex attraction within a heterosexual marriage in a faith context — requires a therapist who understands all three dimensions: sexual identity, relationship dynamics, and Christian faith. The Center for Faith, Sexuality and Gender (centerforfaith.com) maintains a directory of counselors trained in this area. Avoid therapists who will pressure you toward any particular outcome; find one who will help you navigate the complexity honestly.",
  },
  {
    title: "If You Are the Straight Spouse: Your Grief Is Real",
    body: "If your spouse has disclosed same-sex attraction, your grief deserves care. You are not wrong to feel betrayed, confused, or devastated. The Straight Spouse Network (straightspouse.org) exists specifically for partners in this situation. Find community with other straight spouses. Find a therapist of your own. Do not disappear into supporting your spouse's process at the expense of your own healing.",
  },
  {
    title: "Consider Honest Communication Before the Alternative",
    body: "Many same-sex attracted spouses carry the secret for years or decades out of fear — fear of rejection, fear of losing the marriage, fear of the church's response. The sustained secrecy typically causes more damage than honest disclosure, both to the individual and to the marriage. A therapist can help you prepare for and navigate a disclosure conversation. The path through is not around the honesty.",
  },
  {
    title: "Connect With Others in Mixed-Orientation Marriages",
    body: "You are not the only Christian in this situation, though you may feel that way. Authors like Laurie and Matt Krieg (An Impossible Marriage), organizations like the Center for Faith, Sexuality and Gender, and support groups like Fortify and Regeneration Ministries exist specifically for people navigating same-sex attraction within a Christian framework. Peer support from people who are living this is irreplaceable.",
  },
  {
    title: "Hold the Marriage in Prayer Without Demanding an Outcome",
    body: "Prayer in this situation is best held open — not demanding a specific outcome (that the attraction disappear, that the marriage survive unchanged, that a clean resolution emerge) but asking for God's wisdom, presence, and grace in the complexity. \"Lord, show us how to love each other faithfully in this\" is a more honest and sustainable prayer than one that demands a resolution God has not promised.",
  },
  {
    title: "Give Yourself Time Before Making Irreversible Decisions",
    body: "Whether you are the same-sex attracted spouse considering disclosure, or the straight spouse who has just received disclosure, the period immediately following a crisis is not the time for irreversible decisions. Give yourself time — with professional support — before making final choices about the marriage. Many couples who stay have found ways to navigate this with honesty and grace. Many couples who separate have done so with care and mutual dignity. Time and professional guidance are your allies.",
  },
];

const scriptures = [
  { ref: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me." },
  { ref: "James 5:16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working." },
  { ref: "Psalm 62:8", text: "Trust in him at all times, O people; pour out your heart before him; God is a refuge for us." },
  { ref: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths." },
  { ref: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
  { ref: "Romans 8:38-39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." },
];

const videos = [
  { videoId: "W6N8YE_NKRI", title: "Laurie and Matt Krieg — An Impossible Marriage" },
  { videoId: "8SfaNR1K2pE", title: "Mark Yarhouse — Mixed Orientation Marriages and Christian Faith" },
  { videoId: "rMMDM9MVKBA", title: "Preston Sprinkle — Same-Sex Attraction and Costly Grace" },
  { videoId: "tG3WfxwmJxU", title: "Nate Collins — All But Invisible: Faith and Sexual Identity" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function SameSexAttractionMarriedChristianPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; today: string; question: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ today: "", question: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_samesexattractionmarried_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.today.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_samesexattractionmarried_entries", JSON.stringify(next));
    setForm({ today: "", question: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Same-Sex Attraction in Marriage
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            For Christians navigating same-sex attraction within a heterosexual marriage — whether you are the one experiencing it or the spouse who has learned of it — honest pastoral care for the complexity.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Support:</strong> Center for Faith, Sexuality &amp; Gender: <strong style={{ color: TEXT }}>centerforfaith.com</strong> &bull; Straight Spouse Network: <strong style={{ color: TEXT }}>straightspouse.org</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. No one will see this. This space is yours.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Where are you today?</label>
                <textarea value={form.today} onChange={e => setForm(f => ({ ...f, today: e.target.value }))} rows={3} placeholder="In the situation itself, in your marriage, in your faith..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What question is hardest for you right now?</label>
                <textarea value={form.question} onChange={e => setForm(f => ({ ...f, question: e.target.value }))} rows={2} placeholder="What does faithfulness look like? How do I tell them? What do I do with this?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, I am in over my head. I need..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
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
                    {e.question && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Question: </span>{e.question}</p>}
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for Christians in mixed-orientation marriages.</p>
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
