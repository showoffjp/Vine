"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "You Are Doing Isaiah 1:17 Embodied",
    verse: "Isaiah 1:17",
    text: "Defend the oppressed. Take up the cause of the fatherless. This is not metaphor — it is the shape of your daily life. Every placement, every trauma tantrum, every court date, every goodbye is Isaiah 1:17 lived out in your body and home. Burnout in this calling does not mean you were wrong to answer it.",
  },
  {
    title: "Elijah Burned Out in Holy Work",
    verse: "1 Kings 19:4–5",
    text: "Elijah sat under the broom tree, exhausted, and asked God to take his life. He had just performed one of the most dramatic acts of prophetic ministry in Scripture. God's response was not rebuke but food, water, and sleep — twice. Burnout in holy calling is met with divine provision, not divine condemnation.",
  },
  {
    title: "The Child Bears the Image of God",
    verse: "Genesis 1:27",
    text: "Every child placed in your home bears the imago Dei — even when they cannot access it, when trauma drives the behavior, when they rage and scream and run. You are caring for image-bearers in their most broken hour. The weight of that calling is real, and it cannot be carried without rest and community.",
  },
  {
    title: "Your Limits Are Not Failure",
    verse: "2 Corinthians 4:7",
    text: "We have this treasure in jars of clay. You are not made of steel. The fact that you are cracking does not mean you were the wrong vessel — it reveals that the power comes from God, not from you. Cracked jars still carry treasure. Your breaking is not the end of the story.",
  },
  {
    title: "Grief at Reunification Is Real and Holy",
    verse: "Mark 10:21",
    text: "Jesus looked at him and loved him. The love that forms across a foster placement — even one that ends in reunification or disruption — is real love. The grief when a child leaves is real grief. Jesus does not mock the love that attaches quickly. He is its author.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Mike Berry",
    role: "Foster and adoptive parent, author",
    quote: "You cannot pour from an empty vessel. But the church often expects foster parents to keep pouring indefinitely, without refilling. That expectation will eventually destroy the family it claimed to support.",
    bio: "Mike Berry (Confessions of an Adoptive Parent, The Adoptive and Foster Parent Guide) writes from his own experience of foster and adoptive parenting. His work is essential reading for families navigating the unique burnout that comes from caring for children with severe trauma histories.",
  },
  {
    id: "v2",
    name: "Karyn Purvis",
    role: "Child development researcher, Trust-Based Relational Intervention",
    quote: "Children from hard places need far more than most adults have been trained to give. When caregivers burn out, it is usually not a character deficit — it is a systems failure. We asked families to carry what communities were meant to carry.",
    bio: "Karyn Purvis (co-developer of TBRI — Trust-Based Relational Intervention, The Connected Child) revolutionized understanding of how trauma affects child development. TBRI gives foster parents a science-based framework that often dramatically reduces caregiver burnout by explaining why children behave as they do.",
  },
  {
    id: "v3",
    name: "Jason Johnson",
    role: "Author, Every Child Podcast",
    quote: "The church must move from recruiting foster families to surrounding them. Recruitment without community is abandonment with a ministry label.",
    bio: "Jason Johnson (Reframing Foster Care) challenges the church to become genuine communities of support around foster families — not just to recruit volunteers, but to build the ongoing infrastructure of practical help that makes long-term foster parenting sustainable.",
  },
  {
    id: "v4",
    name: "Joni Tada",
    role: "Disability advocate, author",
    quote: "When we are emptied, we discover that we were never the source. Burnout in ministry reveals the limit of the self — and opens the door to something more sustaining: dependence on the One who is not tired.",
    bio: "Joni Tada (Joni and Friends) has lived decades of embodied care and suffering. Her theology of limitation and dependence speaks directly to foster parents who have hit the wall of their own capacity and need a framework that honors their exhaustion without abandoning the calling.",
  },
];

const practices = [
  {
    icon: "🛑",
    title: "Name the Burnout Before It Names You",
    text: "Burnout in foster parenting looks like: resenting a child's trauma behaviors, losing empathy during tantrums, dreading placement calls, snapping at your spouse and biological children, fantasizing about a simpler life. Name what you are experiencing. Tell your caseworker, your therapist, a trusted friend. Naming creates the possibility of help.",
  },
  {
    icon: "🏘️",
    title: "Request Respite Before You Break",
    text: "Respite care — planned short-term care by another licensed family — is built into the foster care system for this reason. Request it before you are in crisis, not after. One weekend per month with a trusted respite provider can sustain families for years that would otherwise last months.",
  },
  {
    icon: "🧠",
    title: "Get TBRI Training",
    text: "Trust-Based Relational Intervention (TBRI) training — available free through the Karyn Purvis Institute at caringforkids.tcu.edu — transforms how foster parents understand trauma behavior. When you understand why a child rages, steals, lies, or hoards food, the behavior becomes a problem to solve rather than a personal attack to survive.",
  },
  {
    icon: "⛪",
    title: "Ask Your Church for Specific Help",
    text: "Foster families need: meal trains after new placements, a trusted adult who can be called for emergency childcare, regular check-ins from a church member who is not their caseworker, and a pastor who visits. Vague offers of support rarely materialize. Ask for specific things from specific people.",
  },
  {
    icon: "📋",
    title: "Know Your Placement Limits and Enforce Them",
    text: "It is permitted to say no to a placement that would break your family. It is permitted to say yes to only one child at a time. It is permitted to specify the age range or trauma history you can serve. Knowing your limits and maintaining them is not selfishness — it is what makes long-term sustainability possible.",
  },
  {
    icon: "💔",
    title: "Grieve Every Goodbye",
    text: "The grief of losing a child to reunification, adoption by others, or aging out of care is real grief — and often unmourned because the child is technically fine. Give it full grief: journal it, pray it, talk to a counselor, mark the day. Ungrieved losses accumulate into burnout.",
  },
];

const scriptures = [
  { verse: "Isaiah 1:17", text: "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow." },
  { verse: "1 Kings 19:5–6", text: "Then he lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water." },
  { verse: "2 Corinthians 4:7", text: "But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us." },
  { verse: "Matthew 25:40", text: "The King will reply, 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.'" },
  { verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ." },
  { verse: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.'" },
];

type FosterEntry = { id: string; date: string; empty: string; filled: string; ask: string };

export default function FosterParentBurnoutPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FosterEntry[]>([]);
  const [empty, setEmpty] = useState("");
  const [filled, setFilled] = useState("");
  const [ask, setAsk] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_fosterparentburnoutj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!empty.trim()) return;
    const entry: FosterEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      empty,
      filled,
      ask,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_fosterparentburnoutj_entries", JSON.stringify(updated));
    setEmpty(""); setFilled(""); setAsk("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_fosterparentburnoutj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Foster Care</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Foster Parent Burnout
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For foster and adoptive parents who are running on empty — who answered a holy calling and are now hitting the wall of their own humanity. Your exhaustion does not mean you were wrong to say yes. It means you need what Elijah needed: food, water, rest, and community.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; Joni and Friends caregiver support: <span style={{ color: GREEN }}>joniandfriends.org</span> &nbsp;·&nbsp; Every Child Ministries: <span style={{ color: GREEN }}>everychildministries.com</span>
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
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>Where are you most empty right now?</label>
                <textarea value={empty} onChange={(e) => setEmpty(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What last refilled you? When did it happen?</label>
                <textarea value={filled} onChange={(e) => setFilled(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>One specific ask you could make to someone this week.</label>
                <textarea value={ask} onChange={(e) => setAsk(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.empty && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Empty:</strong> {e.empty}</p>}
                {e.filled && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Last filled:</strong> {e.filled}</p>}
                {e.ask && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Ask:</strong> {e.ask}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7KMPN9OLoNo", title: "Trust-Based Relational Intervention (TBRI)", channel: "Karyn Purvis Institute of Child Development", description: "Introduction to TBRI — the evidence-based framework for caring for children from hard places. Understanding why children behave as they do dramatically reduces caregiver burnout." },
              { videoId: "sJSFmO6gGlo", title: "Caregiver Compassion Fatigue", channel: "Joni and Friends", description: "Practical, pastoral approach to the compassion fatigue that comes from sustained caregiving — naming the signs and finding sustainable rhythms of rest." },
              { videoId: "ZGk1hl1nNrw", title: "When Helping Hurts: Sustainable Care", channel: "Chalmers Center", description: "The theology and practice of sustainable helping — what it means to care for vulnerable people in ways that do not destroy the helper in the process." },
              { videoId: "7TBHqMqBmBo", title: "Lament as Spiritual Practice", channel: "Soong-Chan Rah", description: "Biblical language for grief — essential for foster parents processing multiple losses, reunifications, and the cumulative grief of a calling that demands constant attachment and goodbye." },
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
