"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Redeems What Was Broken", verse: "Joel 2:25", text: "I will repay you for the years the locusts have eaten. This is a promise about restoration after devastation. Blended families are often formed from the wreckage of loss — divorce, death, abandonment. The formation of a new family does not erase what was lost. But God's redemptive work in a blended family is real: he rebuilds relationships, heals children, knits together people who had no reason to belong to each other. The blended family is not a second-rate family. It is a specific theater of God's reconstruction work." },
  { title: "Stepparenting Is a Form of Covenant Love", verse: "Ruth 1:16-17", text: "Where you go I will go, and where you stay I will stay. Ruth's commitment to Naomi — a woman she had no biological obligation to — is a model of chosen, covenant family. Stepparenting is a choice to love children who are not yours biologically: to show up, to be present, to provide, to commit. This is not lesser than biological parenthood. In a culture that treats blood as the only real family bond, the step-parent who chooses faithfulness embodies something the gospel has been saying all along: chosen family is real family." },
  { title: "Patience With Process Is Required', verse: 'Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Research consistently shows that healthy stepfamily integration takes an average of four to seven years. Stepfamilies that expect nuclear-family-style bonding in the early years are almost always disappointed. The verse's injunction not to grow weary applies directly: the harvest of genuine blended-family belonging takes a long time to grow. Faithfulness in the meantime is the work." },
  { title: "The Biological Parent Is the Bridge", verse: "Ephesians 4:2-3", text: "Be completely humble and gentle; be patient, bearing with one another in love. Make every effort to keep the unity of the Spirit through the bond of peace. In a healthy blended family, the biological parent plays a crucial bridging role — supporting the stepparent's authority without undermining the children's attachment to both biological parents, navigating loyalty conflicts with patience and transparency. This requires unusual emotional maturity and a clear theology of the stepparent's role." },
  { title: "Children Need Time, Not Pressure", verse: "Mark 10:15", text: "Truly I tell you, anyone who will not receive the kingdom of God like a little child will never enter it. Children in blended families are often carrying more grief, confusion, and loyalty conflict than adults recognize. They did not choose this new family; it happened to them. Their resistance, withdrawal, or acting out is often grief expressed in the only language available. The gospel response is patient presence, not demand for performance — honoring the child's process without abandoning the relationship." },
];

const voices = [
  { id: "rs", name: "Ron Deal", role: "Author, The Smart Stepfamily; Founder, FamilyLife Blended", quote: "Most stepfamilies fail not because people didn't love each other — they fail because they expected the family to bond faster than it can. Four to seven years is normal. If you're at year two and it still feels hard, that is not a sign of failure. That is normal.", bio: "Deal is the foremost Christian resource for blended families. His book The Smart Stepfamily and its sequels (The Smart Stepdad, The Smart Stepmom) provide practical and theologically grounded guidance for every challenge blended families face. FamilyLife Blended (familylifeblended.com) is his ministry." },
  { id: "pt", name: "Patricia Papernow", role: "Psychologist, Author of Surviving and Thriving in Stepfamily Relationships", quote: "The children are not the problem in a blended family. Their loyalty conflicts, their resistance, their acting out — these are normal developmental responses to an abnormal amount of loss and change. Your job is not to eliminate those responses. It is to stay present through them.", bio: "Papernow's research on stepfamily development is the most cited in the field. Her work on loyalty conflicts in children, the biological parent's role, and the stepparent's developmental arc provides a research-grounded foundation for understanding what is normal and what needs attention." },
  { id: "jb", name: "Jeff Guin", role: "Pastor, Blended Family Ministry", quote: "The church has an enormous opportunity with blended families — they are one of the largest unserved demographics in most congregations. But they need specific resources, not just encouragement to apply general family principles to their very different situation.", bio: "Guin's pastoral work with blended families has produced practical resources for churches seeking to support stepfamilies. His emphasis on the church as a resource rather than a source of judgment has helped many stepfamilies find genuine community." },
];

const practices = [
  { icon: "⏳", title: "Recalibrate Your Timeline", text: "If you are in the first two years of your blended family and things are hard, you are on schedule. The research is consistent: genuine family cohesion in a stepfamily takes an average of four to seven years and requires the completion of developmental stages that cannot be rushed. Couples who understand this in advance are far less likely to interpret early struggles as evidence that the family won't work." },
  { icon: "👨‍👩‍👧", title: "The Biological Parent Leads With Their Children", text: "One of the most common mistakes in blended families is the stepparent taking a parental authority role before genuine relationship has been established. Research strongly supports a different sequence: the biological parent maintains primary parenting responsibility during the early years, while the stepparent focuses on building relationship with the children. As the relationship grows, authority can be gradually extended. Trying to shortcut this process typically backfires." },
  { icon: "🔗", title: "Build the Couple Relationship as Infrastructure", text: "The couple relationship is the foundation of the blended family. Children need to see a stable, affectionate, committed relationship at the center. But this means investing consistently in the marriage even when — especially when — family demands make it feel impossible. Weekly couple time, regular honest communication about how the family is going, and a therapist or mentor couple who understands stepfamily dynamics are all worth prioritizing." },
  { icon: "🤲", title: "Navigate the Ex-Spouse Relationship With Maturity", text: "Children in blended families are better served when all adults in their world can cooperate — biological parents, stepparents, and ex-spouses. This is hard. It requires setting aside personal hurt for the sake of the children. It requires tolerating what you cannot control about the other household. But research consistently shows that low-conflict co-parenting is one of the strongest predictors of positive outcomes for children from divorced families. This is worth the hard work." },
  { icon: "⛪", title: "Find a Church That Has Blended-Family Resources", text: "Most church family ministry is built for intact nuclear families, and blended families often feel invisible or implicitly judged. Look for churches with explicit blended-family programming — through FamilyLife Blended (familylifeblended.com) or SmartStepfamilies (smartstepfamilies.com). If your church doesn't have resources, you might be the person to bring them." },
];

const scriptures = [
  { verse: "Joel 2:25", text: "I will repay you for the years the locusts have eaten — my great army that I sent among you." },
  { verse: "Ruth 1:16-17", text: "But Ruth replied, 'Don't urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.'" },
  { verse: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
  { verse: "Psalm 68:6", text: "God sets the lonely in families, he leads out the prisoners with singing." },
  { verse: "Ephesians 4:2-3", text: "Be completely humble and gentle; be patient, bearing with one another in love. Make every effort to keep the unity of the Spirit through the bond of peace." },
  { verse: "1 Corinthians 13:7", text: "It always protects, always trusts, always hopes, always perseveres." },
];

type BFEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function BlendedFamilyPage() {
  const [tab, setTab] = useState("theology");
  const [bfJournal, setBfJournal] = useState<BFEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_blendedfamilyj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_blendedfamilyj_entries", JSON.stringify(bfJournal)); } catch {}
  }, [bfJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setBfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setBfJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Family & Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Blended Family</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          Stepparenting, stepchildren, co-parenting, and the slow work of building a family from two broken pieces.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Family Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>Where is our family right now — what is hard, what is growing?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is God doing in our family that I might be missing?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One way I will invest in a relationship in our family this week</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {bfJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {bfJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Family: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Seeing God: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: GREEN }}>Investment: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "2b0PxJcUCNM", title: "The Four Horsemen — Gottman", channel: "The Gottman Institute", description: "Gottman explains the four relationship patterns that most predict marriage failure — especially relevant in blended families where step-parent relationships intensify the same destructive patterns." },
              { videoId: "ZR-J8DQGFOI", title: "When to Keep Trying and When to Stop", channel: "Leslie Vernick", description: "Vernick on distinguishing difficult marriages from destructive ones — essential for blended families navigating the intense pressures that can make the first few years feel impossible." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Difficult", channel: "Tim Keller", description: "Keller on the theology and cost of forgiveness — particularly relevant in blended families where unresolved grief, loss, and loyalty conflicts require repeated, costly acts of forgiveness to navigate." },
              { videoId: "57LVVwba6_8", title: "The Joseph Story: Forgiveness and Providence", channel: "Tim Keller", description: "An exposition of Joseph's story — God's redemptive purposes working through family dysfunction, betrayal, and loss — speaking to what redemption looks like in the long arc of a blended family." },
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
