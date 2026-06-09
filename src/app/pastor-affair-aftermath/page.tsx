"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Leaders Who Fall Are Still Accountable to God",
    verse: "Ezekiel 34:2–4",
    text: "Woe to you shepherds of Israel who only take care of yourselves! This is God's word to unfaithful leaders — not to justify your anger, but to confirm that what happened was real, it was wrong, and God names it. Your betrayal by a spiritual leader is not imagination. It is documented in Scripture.",
  },
  {
    title: "Institutional Sin Is Distinct from Corporate Guilt",
    verse: "Ezekiel 18:20",
    text: "The one who sins is the one who will die. A congregant who trusted a pastor who committed adultery bears no guilt for that sin. The shame that attaches to a congregation after a leader's moral failure is not deserved guilt — it is a grief that needs to be separated from individual culpability.",
  },
  {
    title: "The Church Has Survived Catastrophic Leaders Before",
    verse: "Judges 2:18–19",
    text: "Whenever the LORD raised up a judge for them, he was with the judge and saved them out of the hands of their enemies as long as the judge lived; for the LORD relented because of their groaning. But when the judge died, the people returned to ways even more corrupt. God's faithfulness to his people has never been contingent on the perfection of its leaders. The institution survives because of God's faithfulness, not human virtue.",
  },
  {
    title: "Righteous Anger at Abuse of Power Is Holy",
    verse: "John 2:15–16",
    text: "Jesus made a whip and drove out those who had turned the temple — the house of prayer — into something else. Righteous fury at the desecration of sacred space, including a congregation's sacred trust, is a holy response. You are not required to feel neutral.",
  },
  {
    title: "Rebuilding Requires Lament Before Repair",
    verse: "Nehemiah 1:4–6",
    text: "When Nehemiah heard that the wall was broken, he sat down and wept, and mourned for days. He prayed and fasted before he planned. Congregations that rush to repair without adequate communal lament build on grief that has not been processed. The weeping comes first.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Wade Mullen",
    role: "Researcher on institutional church abuse",
    quote: "What makes pastoral betrayal particularly devastating is that it exploits the very posture of spiritual openness that authentic faith requires. The congregation trusted because faith demands trust. That is not weakness. That is what was weaponized.",
    bio: "Wade Mullen (Something's Not Right) researches how institutions cover up abuse and how leaders use image management to avoid accountability. His work helps congregations name what happened to them systemically, not just individually.",
  },
  {
    id: "v2",
    name: "Diane Langberg",
    role: "Christian trauma psychologist",
    quote: "A congregation that experiences pastoral betrayal has experienced a collective trauma. The body is the church — and the trauma must be treated as such. This is not a PR problem to manage. It is a wound requiring pastoral care.",
    bio: "Diane Langberg (Redeeming Power, Suffering and the Heart of God) has worked extensively with both abuse survivors and institutions navigating leadership betrayal. Her framework helps congregations understand collective trauma and the requirements of genuine institutional repentance.",
  },
  {
    id: "v3",
    name: "Scot McKnight",
    role: "New Testament scholar, author",
    quote: "What the church needs is not spin but truth-telling — the kind that names the sin, names the harm, names those harmed, and commits to structural change that makes recurrence less likely. Everything short of this is institutional self-protection.",
    bio: "Scot McKnight (A Church Called Tov) documents how churches develop cultures that protect leaders at the expense of victims, and what genuinely good church culture looks like. Essential reading for congregations in the aftermath of pastoral failure.",
  },
  {
    id: "v4",
    name: "Rachael Denhollander",
    role: "Attorney, abuse survivor advocate",
    quote: "Accountability is not the opposite of grace. It is what makes real grace possible. A congregation that protects a fallen leader in the name of grace is extending the abuse, not ending it.",
    bio: "Rachael Denhollander has become one of the most important Christian voices on abuse accountability within the church. Her framework for what institutional repentance actually requires — consequences, structural change, victim care — is the standard for congregational response.",
  },
];

const practices = [
  {
    icon: "📋",
    title: "Insist on Full Transparent Disclosure",
    text: "The congregation deserves to know what happened — not every graphic detail, but the nature of the misconduct, who was harmed, what authorities were notified, and what consequences followed. Institutional opacity prolongs harm. Push leadership boards to communicate fully and publicly.",
  },
  {
    icon: "🏛️",
    title: "Demand Independent Investigation",
    text: "Internal investigations by boards that hired, protected, or admired the fallen leader are inherently compromised. Insist on an independent external reviewer — a Christian organization like GRACE (Godly Response to Abuse in the Christian Environment) specializes in this.",
  },
  {
    icon: "💬",
    title: "Create Space for Congregational Lament",
    text: "Hold a service of lament — not celebration of resilience, not premature pivot to vision, but honest communal grief. Use the language of Lamentations. Name what was lost: trust, safety, the shepherd-flock relationship. Do not manufacture hope before grief has space.",
  },
  {
    icon: "🧠",
    title: "Access Trauma-Informed Pastoral Care",
    text: "Individual members may be experiencing acute spiritual trauma — especially those who were personally counseled by, confided in, or spiritually formed by the fallen leader. Connect them with trauma-informed Christian counselors, not just well-meaning laypeople.",
  },
  {
    icon: "📖",
    title: "Study Ezekiel 34 Together",
    text: "Read Ezekiel 34 as a congregation — God's extended indictment of unfaithful shepherds and his promise to become the direct shepherd of his flock. It is one of the most pastorally profound texts for congregational trauma. It names the wound and promises the true shepherd.",
  },
  {
    icon: "🔄",
    title: "Rebuild Governance Before Rebuilding Trust",
    text: "Trust will not be rebuilt through words. It is rebuilt through structural accountability: elder diversity, external oversight, clearly documented safeguarding policies, and mandatory reporting. New governance structures must precede invitations to trust again.",
  },
];

const scriptures = [
  { verse: "Ezekiel 34:2–4", text: "Woe to you shepherds of Israel who only take care of yourselves! Should not shepherds take care of the flock? You eat the curds, clothe yourselves with the wool and slaughter the choice animals, but you do not take care of the flock." },
  { verse: "Nehemiah 1:4–6", text: "When I heard these things, I sat down and wept. For some days I mourned and fasted and prayed before the God of heaven." },
  { verse: "John 2:15–16", text: "So he made a whip out of cords, and drove all from the temple courts... To those who sold doves he said, 'Get these out of here! Stop turning my Father's house into a market!'" },
  { verse: "Ezekiel 18:20", text: "The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child." },
  { verse: "Lamentations 1:2", text: "Bitterly she weeps at night, tears are on her cheeks. Among all her lovers there is no one to comfort her. All her friends have betrayed her; they have become her enemies." },
  { verse: "Psalm 55:12–14", text: "If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend, with whom I once enjoyed sweet fellowship at the house of God." },
];

type AftermathEntry = { id: string; date: string; wound: string; anger: string; need: string };

export default function PastorAffairAftermathPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AftermathEntry[]>([]);
  const [wound, setWound] = useState("");
  const [anger, setAnger] = useState("");
  const [need, setNeed] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_pastoraftermathj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!wound.trim()) return;
    const entry: AftermathEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      wound,
      anger,
      need,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_pastoraftermathj_entries", JSON.stringify(updated));
    setWound(""); setAnger(""); setNeed("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_pastoraftermathj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Congregational Trauma</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          When Your Pastor Falls
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For congregations and individuals wounded by a pastor&apos;s moral failure — affair, abuse of power, financial misconduct, or sexual sin. The betrayal is real. The anger is holy. The church has a path through, but it begins with truth, not spin.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you or others were harmed</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline &nbsp;·&nbsp; GRACE (church abuse investigation): <span style={{ color: PURPLE }}>netgrace.org</span> &nbsp;·&nbsp; SNAP (Survivors Network): <span style={{ color: PURPLE }}>snapnetwork.org</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
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
                <p style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
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
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
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
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What wound from this betrayal needs naming today?</label>
                <textarea value={wound} onChange={(e) => setWound(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Where do you feel righteous anger? What is it protecting?</label>
                <textarea value={anger} onChange={(e) => setAnger(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What accountability or transparency does your church still owe you?</label>
                <textarea value={need} onChange={(e) => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.wound && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Wound:</strong> {e.wound}</p>}
                {e.anger && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Anger:</strong> {e.anger}</p>}
                {e.need && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Need:</strong> {e.need}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "NnGBhG03g4M", title: "When the Church Hurts You", channel: "Scot McKnight", description: "Scot McKnight on how churches develop cultures that protect leaders at the expense of victims, and what genuinely good church culture requires — based on A Church Called Tov." },
              { videoId: "ZwDlGPCEUoE", title: "Abuse of Power in the Church", channel: "Diane Langberg", description: "Langberg addresses how power is misused in ministry contexts, the trauma it causes, and what real accountability looks like in Christian institutions." },
              { videoId: "eBl7gT7gQ6g", title: "Rachael Denhollander on Church Accountability", channel: "The Gospel Coalition", description: "Denhollander explains what genuine institutional repentance requires — transparency, consequences, structural change, and victim care — with unflinching clarity." },
              { videoId: "kfcVPh2VDhQ", title: "Why Is Forgiveness So Hard?", channel: "Tim Keller", description: "Keller distinguishes between forgiveness as personal release from bitterness and the separate question of institutional accountability — essential for congregations processing pastoral failure." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
