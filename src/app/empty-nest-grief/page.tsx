"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Every Season of Parenting Has an Ending", verse: "Ecclesiastes 3:1-2", text: "There is a time for everything, and a season for every activity under the heavens: a time to be born and a time to die, a time to plant and a time to uproot. The Preacher's wisdom does not offer empty comfort — it names the structure of creaturely life. Seasons end. The intensive season of active parenting is a season, not a permanent identity. Its ending is not failure; it is the completion of the work you were given. Grief at its ending is not ingratitude — it is love recognizing the weight of what was." },
  { title: "Your Identity Was Never Only Parent", verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. God knit you together as a person with a specific inward being before you were ever a parent. The nest-emptying season often surfaces a question that has been deferred for twenty years: Who am I, not as someone's parent? The answer does not begin with you — it begins with the one who made your inmost being. He formed a person, not just a role." },
  { title: "New Seasons of Fruitfulness Follow", verse: "Psalm 92:14", text: "They will still bear fruit in old age, they will stay fresh and green. The psalmist's image of the righteous bearing fruit in old age is not a consolation prize — it is a promise of genuine fruitfulness in later seasons. The capacities developed through parenting — patience, care, presence, wisdom — do not become useless when children leave. They become available for neighbors, grandchildren, mentees, community, and a deeper attentiveness to God." },
  { title: "Grief and Gratitude Are Not Enemies", verse: "John 16:22", text: "So with you: Now is your time of grief, but I will see you again and you will rejoice, and no one will take away your joy. Jesus spoke these words to disciples facing loss. The pattern he describes — grief now, joy coming — honors both. Empty nest grief is legitimate, and so is the eventual discovery that the new season carries its own gifts. Neither cancels the other. Rushing past the grief to the gratitude is not faith; it is avoidance." },
  { title: "The Relationship Does Not End — It Changes", verse: "Luke 2:51-52", text: "Then he went down to Nazareth with them and was obedient to them... And Jesus grew in wisdom and stature, and in favor with God and man. Even Jesus's relationship with his parents changed — from dependent child to adult son living out his own calling. The parent-child relationship does not end when children leave; it transforms. Learning to relate to adult children as adults — with appropriate distance, different forms of care, and genuine respect for their autonomy — is its own form of love." },
];

const voices = [
  { id: "v1", name: "Susan Pohlman", role: "Author, Speaker", quote: "Empty nest is not just about missing your children. It's about reckoning with who you have become through parenting — and who you are becoming now.", bio: "Susan Pohlman is the author of Halfway to Each Other and writes about the empty nest transition as an invitation to rediscover yourself and your marriage. Her work addresses the identity reshaping the season requires and provides a framework for navigating it with intention rather than just surviving it." },
  { id: "v2", name: "Amy Morin", role: "Psychotherapist, Author", quote: "Empty nest syndrome is real — not as a disorder but as a season of grief that deserves to be honored, processed, and eventually integrated.", bio: "Amy Morin is a licensed clinical social worker and the author of 13 Things Mentally Strong Parents Do. Her clinical work with parents navigating the empty nest transition acknowledges the legitimacy of the grief while providing practical frameworks for rebuilding identity, reinvesting in marriage, and discovering what the next chapter holds." },
  { id: "v3", name: "Gary Thomas", role: "Author", quote: "Many couples discover in the empty nest season that they married a stranger — the person they were before children, changed by twenty years, now standing in the same house.", bio: "Gary Thomas is the author of Sacred Marriage and A Lifelong Love, which address marriage at every stage including the significant renegotiation that the empty nest requires. His theological framework for marriage as sanctification provides a way to understand the empty nest as an invitation to deeper marital engagement rather than an ending." },
  { id: "v4", name: "Henri Nouwen", role: "Late Author, Priest", quote: "When we stop clinging to what we have known and open ourselves to what we do not yet know, we discover that God has been preparing something new in the very space we were afraid of.", bio: "Henri Nouwen's theology of the spiritual life — particularly in The Wounded Healer, Reaching Out, and The Return of the Prodigal Son — offers a framework for receiving loss and transition as a spiritual invitation rather than a problem to be solved. His writing speaks directly to the experience of watching loved ones leave for their own lives." },
];

const practices = [
  { icon: "😢", title: "Let Yourself Grieve Fully", text: "Do not rush to 'at least' statements. The empty nest is a real loss — of daily presence, of purpose that organized your days, of the particular joy of raising your children. Sit with the grief before you reach for silver linings. Unprocessed grief does not disappear; it surfaces later as depression, conflict, or aimlessness." },
  { icon: "💑", title: "Invest in Your Marriage or Friendship Network", text: "Many couples discover they have been co-parenting rather than actually knowing each other. The empty nest is both a crisis and an opportunity for marriage — it requires real reinvestment of attention, intentionality, and willingness to rediscover who you each have become. Date intentionally. Talk about things other than the children." },
  { icon: "🔍", title: "Ask 'Who Am I?' as a Genuine Question", text: "Before rushing to fill the newly opened time with activities and commitments, spend time asking what you actually enjoy, what you believe, what you want, and what you feel called to. Many parents have deferred this question for twenty years. It deserves serious attention." },
  { icon: "🌱", title: "Cultivate an Interest or Calling You Set Aside", text: "Most parents set aside significant parts of their pre-parent selves during the intensive years. The empty nest season is the natural time to revisit: What did I love before children? What work, creative pursuit, community engagement, or spiritual practice did I sacrifice for the season? Some of it can be recovered and developed." },
  { icon: "🤝", title: "Find Community with Others in the Same Season", text: "The transition is less disorienting when it is shared. Mentorship programs, community organizations, ministry opportunities, continuing education, and church small groups specifically for empty nesters or adults in later parenting stages can provide both connection and new purpose." },
  { icon: "🙏", title: "Pray Psalm 92:14 as a Prompt", text: "They will still bear fruit in old age, they will stay fresh and green. Ask God what new fruitfulness looks like for this season. He is not surprised by your emptied nest. He has been working in you through the parenting years, and he is not done." },
];

const scriptures = [
  { verse: "Ecclesiastes 3:1", text: "There is a time for everything, and a season for every activity under the heavens." },
  { verse: "Psalm 92:14", text: "They will still bear fruit in old age, they will stay fresh and green, proclaiming, 'The Lord is upright; he is my Rock, and there is no wickedness in him.'" },
  { verse: "Isaiah 43:19", text: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland." },
  { verse: "Philippians 4:11", text: "I have learned, in whatever state I am, to be content." },
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
];

type ENEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function EmptyNestGriefPage() {
  const [tab, setTab] = useState("theology");
  const [enJournal, setEnJournal] = useState<ENEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setEnJournal(JSON.parse(localStorage.getItem("vine_emptynestj_entries") ?? "[]")); } catch { setEnJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: ENEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...enJournal];
    setEnJournal(updated);
    localStorage.setItem("vine_emptynestj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = enJournal.filter(e => e.id !== id);
    setEnJournal(updated);
    localStorage.setItem("vine_emptynestj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0a1f14 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🐦</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Empty Nest Grief</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>When the children leave — honoring the grief, discovering yourself again, and finding new fruitfulness.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${GREEN}` }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What does the empty house feel like? What do I miss most?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="Who am I apart from the parent role? What do I believe about that person?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One interest or calling I want to explore in this new season:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {enJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}>Exploring: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "GGCF3OPWN14", title: "The Upside-Down Kingdom", channel: "Tim Keller", description: "Keller on how the kingdom consistently upends our expectations about seasons, success, and what a flourishing life looks like in later chapters." },
              { videoId: "t6L-F2emwUc", title: "Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on the discovery of genuine joy through surrendering the season that has ended and opening to what God has next." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God and Life's Seasons", channel: "Ligonier Ministries", description: "R.C. Sproul on trusting God's sovereignty across the changing seasons of life — including the seasons of loss and of new calling." },
              { videoId: "SqGRnlXplx0", title: "The Rest of God", channel: "Regent College", description: "Eugene Peterson on Sabbath and rest — learning to receive rather than perform, which is exactly the invitation the empty nest season offers." },
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
    </div>
  );
}
