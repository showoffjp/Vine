"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God's Heart Is Especially Turned Toward Children in Disrupted Homes", verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. Divorce does not break the fatherhood of God toward children. Every disruption in human family structure runs directly into the fullness of divine parenthood. Your children are known and held by Someone whose presence is not split between two households." },
  { title: "You Cannot Protect Your Children from All Pain — Only God Can", verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit. The grief children experience in divorce is real. It is not something faithful parenting can fully absorb. But the God who is close to the brokenhearted is close to your children in the rooms you cannot enter." },
  { title: "Your Own Repentance Is the Most Powerful Gift You Can Give", verse: "2 Corinthians 7:10", text: "Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death. To the extent that your own failures contributed to the divorce, honest, non-defensive repentance — before God and appropriately before your children — models the gospel. Covering failure produces shame. Named, forgiven failure produces grace." },
  { title: "You Are Enough Because God Is Enough", verse: "Philippians 4:13", text: "I can do all this through him who gives me strength. Single parenting after divorce feels structurally impossible on most days. The strength promised is not natural capability — it is access to a source of grace that makes the insufficient sufficient. This is a promise for the inadequate, not the capable." },
  { title: "The Covenant with Your Children Is Not Broken by Divorce", verse: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it. The parenting covenant — to raise children in the faith, to love them consistently, to reflect God's character to them — remains intact. Divorce reorganizes the household; it does not revoke the parenting calling." },
];

const voices = [
  { id: "v1", name: "Gary Chapman", role: "Author, Helping Children Survive Divorce", quote: "Children do not need perfect parents. They need present, honest, emotionally available ones — even broken ones.", bio: "Chapman's application of love languages to children in divorce situations helps parents understand what their children actually need during family disruption, and how to provide it in altered circumstances." },
  { id: "v2", name: "Judith Wallerstein", role: "Researcher, The Unexpected Legacy of Divorce", quote: "The impact of divorce on children is not determined by the divorce itself but by the quality of the parenting that follows it.", bio: "Wallerstein's 25-year longitudinal study is the most comprehensive research on divorce's effect on children. Her finding — that post-divorce parenting quality is the decisive variable — is both sobering and hopeful." },
  { id: "v3", name: "Leslie Vernick", role: "Author, The Emotionally Destructive Relationship", quote: "Your job is not to turn your child against the other parent. Your job is to be the safest, most honest, most loving parent you can be in your half of their world.", bio: "Vernick helps divorced Christian parents navigate the specific challenges of co-parenting — including situations with difficult or abusive ex-spouses — while keeping the child's wellbeing central." },
  { id: "v4", name: "David Stoop", role: "Psychologist, Author, Forgiving the Unforgivable", quote: "Children who watch their parents forgive — even imperfectly, even with ongoing pain — learn more about the gospel than any Sunday school lesson.", bio: "Stoop's work on forgiveness in the context of divorce and broken families addresses the long, non-linear process of forgiving an ex-spouse, and what that process models for children watching it happen." },
];

const practices = [
  { icon: "🗣️", title: "Never Use Your Children as Messengers or Confidants", text: "Asking children to relay information to the other parent, or sharing adult details about the divorce, places children in the middle of adult conflict. This is one of the most predictable sources of lasting harm to children in divorce. Keep adult negotiations between adults." },
  { icon: "🏠", title: "Make Your Home a No-Criticism Zone About the Other Parent", text: "Children are half made of each parent. Criticizing the other parent in front of them is experienced as an attack on themselves. Whatever your legitimate grievances, the children's relationship with the other parent belongs to them and to God, not to you." },
  { icon: "📅", title: "Maintain Consistent Routines at Your Home", text: "Predictability is safety for children in disruption. Meals at the same time, bedtime rituals, weekly practices — consistent structure at your home provides an anchor even when everything else feels unstable." },
  { icon: "🧠", title: "Get Them a Therapist Who Specializes in Children and Divorce", text: "Children need a neutral, safe person who is not part of either household to process their grief and confusion. A child therapist is not a sign of failure — it is wise provision. Many children process divorce grief years after it happens; don't wait for crisis." },
  { icon: "🙏", title: "Pray With Your Children for Both Households", text: "Praying for the other parent — with your children, sincerely — is one of the most powerful things you can do spiritually. It models forgiveness as a practice rather than a feeling, and it keeps God as the center of the household rather than the conflict." },
  { icon: "🤝", title: "Find a Divorce Recovery Community", text: "DivorceCare for Kids (DC4K) is a church-based program specifically for children of divorce. DivorceCare is the adult program. Both create community with others in the same situation and provide language and support for the grief of family disruption." },
];

const scriptures = [
  { verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling." },
  { verse: "Isaiah 40:11", text: "He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young." },
  { verse: "Deuteronomy 6:6-7", text: "These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
];

type DivorceParentEntry = { id: string; date: string; concern: string; grace: string; action: string };

export default function ParentingThroughDivorcePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DivorceParentEntry[]>([]);
  const [form, setForm] = useState({ concern: "", grace: "", action: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_parentingdivorcrej_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.concern.trim()) return;
    const e: DivorceParentEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_parentingdivorcrej_entries", JSON.stringify(updated));
    setForm({ concern: "", grace: "", action: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_parentingdivorcrej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Family and Divorce</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Parenting Through Divorce</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Parenting through divorce is one of the most demanding callings in the Christian life — holding your own grief while attending to your children's grief, navigating co-parenting, and trying to reflect God's faithfulness to children who have experienced real disruption. This page is for those doing that work.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Support Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>DivorceCare</strong> — divorcecare.org, church-based adult support groups</li>
                <li><strong style={{ color: TEXT }}>DC4K (DivorceCare for Kids)</strong> — dc4k.org, children's support groups</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — if the stress has become a mental health crisis</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.concern} onChange={e => setForm(f => ({ ...f, concern: e.target.value }))} placeholder="What concern about your child is on your heart today?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.grace} onChange={e => setForm(f => ({ ...f, grace: e.target.value }))} placeholder="Where has God's grace shown up in unexpected ways this week?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.action} onChange={e => setForm(f => ({ ...f, action: e.target.value }))} placeholder="One specific thing you want to do this week for your child's wellbeing" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.concern && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Concern:</strong> {e.concern}</p>}
                {e.grace && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Grace:</strong> {e.grace}</p>}
                {e.action && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Action:</strong> {e.action}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It's So Difficult", channel: "Tim Keller", description: "Keller on the deep work of forgiveness — essential for parenting through divorce, where forgiveness of an ex-spouse directly affects children's wellbeing." },
              { videoId: "57LVVwba6_8", title: "The Joseph Story: Forgiveness", channel: "Tim Keller", description: "The Joseph narrative as a model for forgiving those who have wronged you and rebuilding life around the wound rather than the wound." },
              { videoId: "2b0PxJcUCNM", title: "The Four Horsemen in Relationships", channel: "John Gottman", description: "Gottman's research on communication patterns in conflict — highly relevant for co-parenting, where the relationship continues but the marriage has ended." },
              { videoId: "NnGBhG03g4M", title: "Praying for Your Prodigal Child", channel: "Brennan Manning", description: "Manning on the prayer of parents who watch their children suffer and cannot fix it — the specific posture of love that intercedes without controlling." },
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
    </div>
      <Footer />
    </>
  );
}
